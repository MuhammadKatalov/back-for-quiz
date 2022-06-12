const mongoose = require('mongoose');

const testSchema = mongoose.Schema({
    question: String,
    answers: [
        {
            answer: String,
            isCorrect: {
                type: Boolean,
                default: false
            }
        }
    ]
});

const Test = mongoose.model('Test', testSchema);

module.exports = Test;