const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  login: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },

  favoriteTest: [
    {
      favorite: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Test",
      },
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
