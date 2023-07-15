const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone:{
      type:Number,
    }
  },
  { timestamps: true }
);

const User = mongoose.model("REGISTRATION", userSchema);
module.exports = User;
