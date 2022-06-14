const mongoose = require('mongoose');

const questSchema = mongoose.Schema({
  questName: {
    type: String,
    required: true,
  },
  answers: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Answer'
  }]
});

const Question = mongoose.model('Question', questSchema);

module.exports = Question;