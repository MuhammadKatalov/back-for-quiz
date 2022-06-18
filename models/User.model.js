const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  login: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
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
