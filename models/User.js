const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

  name: String,

  email: String,

  phone: String,

  approved: {
    type: Boolean,
    default: false
  },

  rejected: {
    type: Boolean,
    default: false
  },

  signupDate: {
    type: Date,
    default: Date.now
  },

  lastLogin: {
    type: Date,
    default: null
  },

  validTill: {
    type: Date,
    default: null
  },

  deviceId: {
  type: String,
  default: null
},

});

module.exports = mongoose.model("User", userSchema);