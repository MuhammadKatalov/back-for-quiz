const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    text: String,
    test: {
        type: Number,
        ref: "Test",
    },
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User",
    }
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
