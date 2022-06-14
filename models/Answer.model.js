const mongoose = require('mongoose');

const answerSchema = mongoose.Schema({
  answer: {
    type: String,
    required: true,
  },
  isTrue: {
    type: Boolean,
    default: false,
  }
});

const Answer = mongoose.model('Answer', answerSchema);

module.exports = Answer;