const mongoose = require('mongoose');

const testSchema = mongoose.Schema({
  testName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  questions: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Question'
  }],
  category: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Category'
  }
});

const Test = mongoose.model('Test', testSchema);

module.exports = Test;