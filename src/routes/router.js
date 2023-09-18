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

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    //cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname)
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
var upload = multer({
  storage: storage,
}).single("image");
//console.log(path.join(__dirname, "./uploads/"))
//console.log(path.join(__dirname, '../uploads/'))

/**************************** All Cancellation Datas ********************************** */
router.get("/cancel", (req, res) => {
  Cancel.find()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json("Not find", error);
    });
});

router.get("/cancel", (req, res) => {
  res.send(" It's Work ");
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
    console.log("Successfully Order Cancel!", cancel);
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
      res.json({
        message: "Data not found",
        status: 500,
      });
    });
});

// router.get("/findOne",  async (req,res) => {

//   try {
//     const email = req.body.email;
//     const password = req.body.password;

//     const userData = await User.findOne({ email: email });

//       res.json({
//         message: "Login successfull",
//         status: 200,
//         userData: userData
//       });
//       console.log(userData);

//   } catch (error) {
//     res.send({
//       message: "Invalid Password",
//       status: 404,
//     });
//   }
// })

router.post("/registration", upload, async (req, res) => {
  try {
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    const imagePath = req.file ? req.file.path : null;

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
      console.log(req.file);
      const regUser = await regUserData.save();
      console.log("Successfully Register!", regUser);
      res.send({
        message: "Successfully Register!",
        status: 200,
      });
    } else {
      console.log("Password are't match");
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
  // res.send("Its Work");
  res.json(req.user);
  console.log(req.user);
  // User.find()
  // .then((data) => {
  //   res.json(data);
  // })
  // .catch(() => {
  //   res.json({
  //     message: "Data not found",
  //     status: 500,
  //   });
  // });
});

router.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const userData = await User.findOne({ email: email });

    // const token = await userData.generateAuthToken();
    // console.log("the token part : ", token);
    // res.cookie("jwt", token, {
    //   expires: new Date(Date.now() + 600000),
    //   httpOnly: true,
    //   //secure: true
    // });

    const passwordMatch = await bcrypt.compare(password, userData.password);

    if (passwordMatch) {
      const token = await userData.generateAuthToken();
      console.log("The part of token", token);
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
      console.log(passwordMatch);
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
    // console.log(user.password)
    await user.save();
    //await user.save({validateBeforeSave: false});
    console.log("Password updated successfully.", user.password);
    return res.json({
      message: "Password updated successfully.",
      newPassword: user.password,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error." });
  }
});

// router.get("/login/:id", (req, res) => {
//   const _id = req.params.id;
//   User.findById(_id)
//     .then((User) => {
//       res.json(User);
//       console.log(User);
//     })
//     .catch((error) => {
//       res.send({
//         message: "Not found",
//         status: 500,
//       });
//     });
// });
/************************ Forget password post  ****************************** */
router.post("/forget-password", async (req, res) => {
  try {
    //const id= req.params.id;
    const email = req.body.email;
    const user = await User.findOne({ email: email });
    console.log("user", user);
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
    const link = `http://localhost:4200/reset-password/${user._id}/${token}`;
    console.log("password reset link has been send to ur email: ");
    // res.send({
    //   message: "password reset link has been send to ur email ",
    // });
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
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
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
      res.send(`http://localhost:9000/api/reset-password/${user._id}/${token}`);
    } catch (error) {
      console.log(error.message);
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

    // Verify the current password
    // const isPasswordValid = await bcrypt.compare(
    //   currentPassword,
    //   user.password
    // );

    if (!user) {
      return res.status(401).json({ error: "Invalid current password." });
    }
    const secret = process.env.SECRET_KEY + user.password;
    const payload = jwt.verify(token, secret);
    // Update the user's password
    user.password = newPassword;
    // console.log(user.password)
    await user.save();
    //await user.save({validateBeforeSave: false});
    console.log("Password reset successfully.", user.password);
    return res.json({
      message: "Password reset successfully.",
      newPassword: user.password,
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      message: "Internal Server Error.",
      error: error.message,
    });
  }
});

/****************************** Profile Id ********************************************* */

router.get("/profile", (req, res) => {
  //res.json(req.user);
  //console.log(req.user);
  User.find()
    .then((data) => {
      res.json(data);
    })
    .catch(() => {
      res.json({
        message: "Data not found",
        status: 500,
      });
    });
});

router.get("/profile/:id", (req, res) => {
  const _id = req.params.id;
  User.findById(_id)
    .then((User) => {
      res.json(User);
      console.log("Profile Id", User);
    })
    .catch((error) => {
      res.send({
        message: "Not found",
        status: 500,
      });
    });
});

/******************************** Update Profile ******************************** */

router.post("/update/:id", upload, (req, res) => {
  const _id = req.params.id;
  let new_image = "";
  if (req.file) {
    new_image = req.file ? req.file.path : null;
    try {
      const imagePathToDelete = path.join(
        __dirname,
        "./uploads/" + req.file ? req.file.path : null
      );
      fs.unlinkSync(imagePathToDelete);
    } catch (error) {
      console.log(error);
    }
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
      console.log("User Update Succefully!", UserData);
    })
    .catch((error) => {
      res.status(500).send(error);
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
          fs.unlinkSync(userDelete.image);
        } catch (error) {
          console.log(error);
        }
        res.json(userDelete);
        console.log("User Delete Successfully!", userDelete);
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
      res.json({
        error: error,
        message: "Order Not Get!",
        status: 500,
      });
    });

  // try {
  //   const orderData = await OrderList.find()

  //       res.json({
  //       orderData
  //     });

  // } catch (error) {
  //       res.json({
  //       error: error,
  //       message: "Order Not Get!",
  //       status: 500,
  //     });
  // }
});

router.post("/order-details", async (req, res) => {
  try {
    const orderList = new OderList({
      itemName: req.body.itemName,
      //quantity: req.body.quantity,
      productCode: req.body.productCode,
      //orderDate: req.body.orderDate,
      price: req.body.price,
    });

    const Order = await orderList.save();

    console.log("Order Insert Successfully!", Order);
    res.json({
      message: "Successfullt Added New Order !",
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
      // console.log("Order Data",order);
    })
    .catch((error) => {
      res.send({
        message: "Not found",
        status: 500,
      });
    });
});

router.post("/order-details-update/:id", (req, res) => {
  const _id = req.params.id;
  const userData = {
    itemName: req.body.itemName,
    // quantity: req.body.quantity,
    productCode: req.body.productCode,
    //orderDate: req.body.orderDate,
    price: req.body.price,
  };
  OrderList.findByIdAndUpdate(_id, userData, { new: true })
    .then((UserData) => {
      res.json(UserData);
      // console.log("Order Update Succefully!", UserData);
    })
    .catch((error) => {
      res.status(500).send(error);
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
      res.json({
        error: error,
        message: "Order Not Get!",
        status: 500,
      });
    });
});

router.post("/product", async (req, res) => {
  try {
    const productList = new Product({
      itemName: req.body.itemName,
      quantity: req.body.quantity,
      productCode: req.body.productCode,
      orderDate: req.body.orderDate,
      price: req.body.price,
    });

    const product = await productList.save();

    console.log("Product Insert Successfully!", product);
    res.json({
      message: "Successfullt Added New Order!",
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

router.get("/product/:id", (req, res) => {
  const _id = req.params.id;
  Product.findById(_id)
    .then((order) => {
      res.json(order);
      // console.log("Order Data",order);
    })
    .catch((error) => {
      res.send({
        message: "Not found",
        status: 500,
      });
    });
});

router.post("/product-details/:id", (req, res) => {
  const _id = req.params.id;
  const userData = {
    itemName: req.body.itemName,
    quantity: req.body.quantity,
    productCode: req.body.productCode,
    orderDate: req.body.orderDate,
    price: req.body.price,
  };
  Product.findByIdAndUpdate(_id, userData, { new: true })
    .then((UserData) => {
      res.json(UserData);
      // console.log("Order Update Succefully!", UserData);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

/************************* Log Out ********************************************* */

router.get("/logout", auth, async (req, res) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).send({ message: "No token provided" });
    }

    console.log("Logout successfully :", req.user);
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
