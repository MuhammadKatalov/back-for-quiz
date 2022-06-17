const { Router } = require('express');
const { commentsController } = require("../controllers/comments.controller");
const authMiddleware = require('../middlewares/auth.middlewares');

const router = Router();

router.post("/:id",authMiddleware, commentsController.postComment);
router.get("/:id", commentsController.getCommentById);
router.get("/", commentsController.getAllComments);
router.get("/:id", commentsController.getCommentsByTest);
router.delete("/:id", commentsController.deleteComment);

module.exports = router;