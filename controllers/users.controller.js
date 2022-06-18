const User = require("../models/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.usersController = {
  registerUser: async (req, res) => {
    try {
      const { login, password } = req.body;

      const hash = await bcrypt.hash(
        password,
        Number(process.env.BCRYPT_ROUNDS)
      );

      const user = await User.create({ login: login, password: hash });

      res.json(user);
    } catch (e) {
      return res.status(400).json("Ошибка регистрации " + e.toString());
    }
  },

  login: async (req, res) => {
    try {
      const { login, password } = req.body;

      const candidate = await User.findOne({ login });

      if (!candidate) {
        return res.status(401).json("Неверный логин");
      }

      const valid = await bcrypt.compare(password, candidate.password);

      if (!valid) {
        return res.status(401).json("Неверный пароль");
      }

      const payload = {
        id: candidate._id,
        login: candidate.login,
      };

      const token = await jwt.sign(payload, process.env.SECRET_JWT_KEY, {
        expiresIn: "24h",
      });

      res.json({ token });
    } catch (e) {}
  },

  favoriteTest: async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.user.id, {
        $addToSet: { favoriteTest: req.params.id },
      }, { new: true});

      res.json(user);
    } catch (e) {
      res.json({  
        error: e.toString(),
      });
    }
  },

  removeFavorite: async (req, res) => {
    try {
      await User.findByIdAndUpdate(req.params.id, {
        $pull: { favoriteTest: req.params.id },
      });

      res.json("Тест убран из избранного");
    } catch (e) {
      res.json({
        error: e.toString(),
      });
    }
  },
};
