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
    type: String,
    unique: [true,'Please enter the name of your product']
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
        console.log("UserSchema Id",this._id);
        const token = jwt.sign({_id: this._id}, process.env.SECRET_KEY,);
        this.tokens = this.tokens.concat({token: token}) ;
        //  console.log('Token',token );
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
