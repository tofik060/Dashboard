const mongoose = require("mongoose");

const uploadDocSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    index: true, // Add index for faster queries
  },
  image: {
    type: String,
    default: null,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Update the updatedAt field before saving
uploadDocSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

const UploadDoc = mongoose.model("UploadDoc", uploadDocSchema);

module.exports = UploadDoc;

