const { Router } = require("express");
const { usersController } = require("../controllers/users.controller");
const authMiddlewares = require("../middlewares/auth.middlewares");
const router = Router();

router.post("/", usersController.registerUser);
router.post("/login", usersController.login);
router.patch("/tests/:id/favorite", authMiddlewares, usersController.favoriteTest);
router.patch("/tests/:testId/delete", authMiddlewares, usersController.removeFavorite);

module.exports = router;
