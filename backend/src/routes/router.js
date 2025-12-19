const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const sendEmail = require("../middleware/email");
const Cancel = require("../models/model");
const User = require("../models/user");
const OderList = require("../models/orderList");
const OrderList = require("../models/orderList");
const Product = require("../models/product");
const bcrypt = require("bcryptjs");
const multer = require("multer");
const jwt = require("jsonwebtoken");
const path = require("path");
const fs = require("fs");

// Use /tmp for production/Vercel serverless (only writable directory), otherwise use local uploads
// Check if we're in a serverless environment by checking the path
const isServerless = process.env.NODE_ENV === 'production' || __dirname.includes('/var/task');
const uploadDir = isServerless 
    ? path.join('/tmp', 'uploads')
    : path.join(__dirname, '../uploads');

// Try to create directory, but don't crash if it fails (Vercel serverless limitations)
try {
    if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
    }
} catch (error) {
    // Don't crash - just log warning. In serverless, directory creation might fail
    console.warn('Warning: Could not create uploads directory:', error.message);
    console.warn('Uploads may not work in serverless environment. Consider using cloud storage.');
    // Continue anyway - multer will handle errors
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir); // folder now guaranteed to exist
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({
  storage: storage,
}).single("image");

/**************************** All Cancellation Datas ********************************** */
router.get("/cancel", (req, res) => {
  Cancel.find()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      throw error;
    });
});

router.post("/cancel", async (req, res) => {
  try {
    const cancelUser = new Cancel({
      name: req.body.name,
      itemName: req.body.itemName,
      productCode: req.body.productCode,
      orderDate: req.body.orderDate,
      cancelDate: req.body.cancelDate,
      price: req.body.price,
      quantity: req.body.quantity,
      description: req.body.description,
    });

    const cancel = await cancelUser.save();
    res.json({
      message: "Successfully Order Cancel!",
      status: 200,
    });
  } catch (error) {
    res.send({
      message: "Schema not created",
      status: 500,
    });
  }
});

/********************************* All Registration ****************************************************** */

router.get("/registration", async (req, res) => {
  User.find()
    .then((data) => {
      res.json(data);
    })
    .catch(() => {
      throw error;
    });
});

router.post("/registration", upload, async (req, res) => {
  try {
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    const imagePath = req.file ? path.join('uploads', req.file.filename) : null;

    if (password === confirmPassword) {
      const regUserData = new User({
        name: req.body.name,
        email: req.body.email,
        password: password,
        confirmPassword: confirmPassword,
        phone: req.body.phone,
        location: req.body.location,
        image: imagePath,
      });

      const regUser = await regUserData.save();

      res.send({
        message: "Successfully Register!",
        status: 200,
      });
    } else {
      res.send({
        message: "Password are't match",
        status: 500,
      });
    }
  } catch (error) {
    res.send({
      message: " Not register ",
      status: 500,
    });
  }
});

/********************************* All Login ************************************************* */

router.get("/login", auth, (req, res) => {
  res.json(req.user);
});

router.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const userData = await User.findOne({ email: email });

    const passwordMatch = await bcrypt.compare(password, userData.password);

    if (passwordMatch) {
      const token = await userData.generateAuthToken();
      res.cookie("jwt", token, {
        expires: new Date(Date.now() + 60000),
        httpOnly: true,
        // secure:true
      });

      res.json({
        message: "Login successfull",
        status: 200,
        token: token,
        userData: userData,
      });
    } else {
      res.send({
        message: "Invalid Details",
        status: 404,
      });
    }
  } catch (error) {
    res.json({
      message: "Invalid Details",
      status: 404,
    });
  }
});

/******************** Change-password ************************** */
router.post("/change-password/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const email = req.body.email;
    const currentPassword = req.body.password;
    const newPassword = req.body.newPassword;

    // Retrieve the user from the database
    const user = await User.findOne({ _id: _id, email: email });

    // Verify the current password
    const isPasswordValid = await bcrypt.compare(
      currentPassword,
      user.password
    );

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid current password." });
    }

    // Update the user's password
    user.password = newPassword;
    await user.save();
    return res.json({
      message: "Password updated successfully.",
      newPassword: user.password,
    });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error." });
  }
});

/************************ Forget password post  ****************************** */
router.post("/forget-password", async (req, res) => {
  try {
    //const id= req.params.id;
    const email = req.body.email;
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.send({
        message: "Invalid Details",
      });
    }

    const secret = process.env.SECRET_KEY + user.password;
    const payload = {
      email: user.email,
    };
    const token = jwt.sign(payload, secret, { expiresIn: "15m" });
    const frontendUrl = process.env.FRONTEND_URL || "http://localhost:4200";
    const link = `${frontendUrl}/reset-password/${user._id}/${token}`;

    const message = `
    <p>Hello, ${user.name}</p>
    <p>You have requested a password reset. Click the link below to reset your password:</p>
    <a href="${link}">${link}</a>
    <p>This link is valid for 15 min. .</p>`
    sendEmail({
      to:user.email,
      subject:'Password change request received',
      html:message
    })
    .then(() => {
      res.json({ message: 'Password reset instructions sent to your email.' });
    })
    .catch((error) => {
      throw error;
    });

  } catch (error) {
    res.json({
      message: "User Not Found!",
      error: error.message,
      status: 404,
    });
  }
});

/****************************** Forget Password ********************************************** */
router.get("/forget-password/:id/:token", async (req, res) => {
  try {
    const { id, token } = req.params;
    const user = await User.findOne({ _id: id });
    if (id !== user.id) {
      res.send("Invalid Details");
    }
    const secret = process.env.SECRET_KEY + user.password;
    try {
      const payload = jwt.verify(token, secret);
      const backendUrl = process.env.BACKEND_URL || "http://localhost:9000";
      res.send(`${backendUrl}/api/reset-password/${user._id}/${token}`);
    } catch (error) {
      res.send({
        message: error.message,
        status: 500,
      });
    }
  } catch (error) {
    res.send({
      message: error.message,
      status: 500,
    });
  }
});

/************************************* Reset Password Post ************************************* */

router.post("/reset-password/:id/:token", async (req, res) => {
  try {
    const _id = req.params.id;
    const { token } = req.params;
    const email = req.body.email;
    // const currentPassword = req.body.password;
    const newPassword = req.body.newPassword;

    // Retrieve the user from the database
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(401).json({ error: "Invalid current password." });
    }
    const secret = process.env.SECRET_KEY + user.password;
    const payload = jwt.verify(token, secret);
    // Update the user's password
    user.password = newPassword;
    await user.save();
    return res.json({
      message: "Password reset successfully.",
      newPassword: user.password,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error.",
      error: error.message,
    });
  }
});

/****************************** Profile Id ********************************************* */

router.get("/profile", (req, res) => {
  User.find()
    .then((data) => {
      res.json(data);
    })
    .catch(() => {
      throw error;
    });
});

router.get("/profile/:id", (req, res) => {
  const _id = req.params.id;
  User.findById(_id)
    .then((User) => {
      res.json(User);
    })
    .catch((error) => {
      throw error;
    });
});

/******************************** Update Profile ******************************** */

router.post("/update/:id", upload, (req, res) => {
  const _id = req.params.id;
  let new_image = "";
  if (req.file) {
    // Delete old image if it exists
    User.findById(_id)
      .then((user) => {
        if (user && user.image) {
          try {
            const oldImagePath = path.join(__dirname, '..', user.image);
            if (fs.existsSync(oldImagePath)) {
              fs.unlinkSync(oldImagePath);
            }
          } catch (error) {
          }
        }
      })
      .catch((error) => {
        throw error;
      });
    
    new_image = path.join('uploads', req.file.filename);
  } else {
    new_image = req.body.image;
  }
  const userData = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    location: req.body.location,
    image: new_image,
  };
  User.findByIdAndUpdate(_id, userData, { new: true })
    .then((UserData) => {
      res.json(UserData);
    })
    .catch((error) => {
      throw error;
    });
});

/******************** Delete User ************************************** */

router.post("/delete/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;

    const userDelete = await User.findByIdAndDelete(_id);
    if (email === userDelete.email || password === userDelete.password) {
      if (userDelete.image != "") {
        try {
          // Convert relative path to absolute path for deletion
          const imagePath = path.join(__dirname, '..', userDelete.image);
          if (fs.existsSync(imagePath)) {
            fs.unlinkSync(imagePath);
          }
        } catch (error) {
          throw error;
        }
        res.json(userDelete);
      }
    }
  } catch (error) {
    res.status(404).send(error);
  }
});

/**************************** OrderList  **************************************** */

router.get("/order-details", async (req, res) => {
  // res.send('Its work')
  OrderList.find()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      throw error;
    });
});

router.post("/order-details", async (req, res) => {
  try {
      const OrderList = new OderList({
        itemName: req.body.itemName,
        quantity: req.body.quantity,
        productCode: req.body.productCode,
        orderDate: req.body.orderDate,
        price: req.body.price,
        actualPrice: req.body.actualPrice,
        customerName: req.body.customerName,
        customerEmail: req.body.customerEmail,
        customerPhone: req.body.customerPhone,
        customerAddress: req.body.customerAddress,
      });
  
      const orderList = await OrderList.save();
  
      res.json({
        message: "Successfully Added New Order!",
        status: 200,
      });
    } catch (error) {
      res.json({
        error: error,
        message: "Order Not Get!",
        status: 500,
      });
    }
  });

router.get("/order-details/:id", (req, res) => {
  const _id = req.params.id;
  OrderList.findById(_id)
    .then((order) => {
      res.json(order);
    })
    .catch((error) => {
      throw error;
    });
});

router.post("/order-details-update/:id", (req, res) => {
  const _id = req.params.id;
  const userData = {
    itemName: req.body.itemName,
    productCode: req.body.productCode,
    price: req.body.price,
    orderCancelDate: req.body.cancelDate,
    orderStatus: req.body.orderStatus,
  };
  OrderList.findByIdAndUpdate(_id, userData, { new: true })
    .then((UserData) => {
      res.json(UserData);
    })
    .catch((error) => {
      throw error;
    });
});

/***************** Product ***************************************** */

router.get("/product", async (req, res) => {
  // res.send('Its work')
  Product.find()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      throw error;
    });
});

router.post("/product", async (req, res) => {
  try {
    const productList = new Product({
      itemName: req.body.itemName,
      quantity: req.body.quantity,
      productCode: req.body.productCode,
      productDate: req.body.productDate,
      price: req.body.price,
    });

    const product = await productList.save();
    res.json({
      message: "Successfullt Added New Order!",
      status: 200,
    });
  } catch (error) {
    res.json({
      error: error,
      message: "Product Not Get!",
      status: 500,
    });
  }
});

router.get("/product/:id", (req, res) => {
  const _id = req.params.id;
  Product.findById(_id)
    .then((order) => {
      res.json(order);
    })
    .catch((error) => {
      throw error;
    });
});

router.post("/product-details/:id", (req, res) => {
  const _id = req.params.id;
  const userData = {
    itemName: req.body.itemName,
    quantity: req.body.quantity,
    productCode: req.body.productCode,
    productDate: req.body.productDate,
    price: req.body.price,
  };
  Product.findByIdAndUpdate(_id, userData, { new: true })
    .then((UserData) => {
      res.json(UserData);
    })
    .catch((error) => {
      throw error;
    });
});

/************************* Log Out ********************************************* */

router.get("/logout", auth, async (req, res) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).send({ message: "No token provided" });
    }

    req.user.tokens = [];

    res.clearCookie("jwt");
    res.send({
      message: "Logout Successfully!",
      status: 200,
    });
    await req.user.save();
  } catch (error) {
    res.send({
      message: "Error in logging out",
      status: 500,
    });
  }
});

module.exports = router;
