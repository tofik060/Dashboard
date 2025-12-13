const { hash } = require("bcryptjs");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true
  },
  newPassword:{
    type:String
  },
  confirmPassword: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    unique: [true,'Please enter your phone number']
  },
  image:{
    type: String
  },
  location: {
    type: String,
  },
  tokens:[{
    token:{
        type :String,
        required: true
    }
  }]
});

userSchema.methods.generateAuthToken = async function(){
  try {
        // 7 days in seconds: 7 * 24 * 60 * 60 = 604800
        const expirationSeconds = 604800; // 7 days
        const token = jwt.sign({_id: this._id}, process.env.SECRET_KEY, {
          expiresIn: expirationSeconds
        });
        
        // Verify the token expiration was set correctly
        const decoded = jwt.decode(token);
        if (decoded && decoded.exp) {
          const expirationDate = new Date(decoded.exp * 1000);
          const now = new Date();
          const hoursUntilExpiry = (decoded.exp * 1000 - now.getTime()) / (1000 * 60 * 60);
          console.log(`[Token Generation] New token created - expires in: ${hoursUntilExpiry.toFixed(2)} hours (at ${expirationDate.toISOString()})`);
        }
        
        this.tokens = this.tokens.concat({token: token}) ;
        await this.save();
        return token;
  } catch (error) {
    res.send({
      message: "Token Invalid",
      error,
      status:500
    })
  }
}

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
    this.confirmPassword = await bcrypt.hash(this.confirmPassword, 10);
  }
  next();
});  

const User = new mongoose.model("User", userSchema);

module.exports = User;
