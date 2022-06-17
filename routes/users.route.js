const { Router } = require("express");
const usersController = require("../controllers/users.controller");
const router = Router();
const authMiddleware = require('../middlewares/auth-middleware');
const { body } = require("express-validator");

router.post("/registration", body("email").isEmail(), body("password").isLength({ min: 3, max: 32 }),usersController.registration);
router.post("/login", usersController.login);
router.post("/logout", usersController.logout);
router.get("/activate/:link", usersController.activate);
router.get("/refresh", usersController.refresh);
router.get("/users", usersController.getUsers);
router.patch("/tests/:id/favorite", authMiddleware, usersController.favoriteTest);
router.patch("/tests/:testId/delete", authMiddleware, usersController.removeFavorite);

module.exports = router;
