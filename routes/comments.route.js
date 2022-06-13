const { Router } = require('express');
const { commentsController } = require("../controllers/comments.controller");

const router = Router();

router.post("/test/:id", commentsController.postComment);
router.get("/:id", commentsController.getCommentById);
router.get("/test/:id", commentsController.getCommentsByTest);
router.delete("/:id", commentsController.deleteComment);

module.exports = router;
