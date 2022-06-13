const Comment = require("../models/Comment.model");

module.exports.commentsController = {
  postComment: async (req, res) => {
    try {
      const comment = await Comment.create({
        text: req.body.text,
        test: req.params.id,
        user: req.body.user,
      });
      res.json(comment);
    } catch (err) {
      res.json("err");
    }
  },

  getCommentById: async (req, res) => {
    try {
      const comment = await Comment.findById(req.params.id);
      res.json(comment);
    } catch (err) {
      res.json("err");
    }
  },

  deleteComment: async (req, res) => {
    try {
      await Comment.findByIdAndDelete(res.params.id);
      res.json("delete comment");
    } catch (err) {
      res.json("err");
    }
  },

  getCommentsByTest: async (req, res) => {
    try {
      const { id } = req.params;

      const comments = await Comment.find({ test: id });

      if (!comments.length) {
        return res.status(404).json({
          error: "Нет комментариев...",
        });
      }

      res.status(200).json(comments);
    } catch (err) {
      res.status(404).json({
        error: err.message,
      });
    }
  },
};
