const { Router } = require("express");
const { usersController } = require("../controllers/users.controller");
const router = Router();
const authMiddleware = require('../middlewares/auth.middleware');

router.post("/", usersController.registerUser)
router.post("/login", usersController.login)
router.patch("/tests/:id", authMiddleware, usersController.favoriteTest);
router.patch("/tests/:id/delete", authMiddleware, usersController.removeFavorite);


module.exports = router;