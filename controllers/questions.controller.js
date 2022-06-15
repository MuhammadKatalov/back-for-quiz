const Question = require('../models/Question.model');

module.exports.questionController = {
  postQuestion: async (req, res) => {
    try {
      
      const { questName, answers } = req.body;

      const test = await Question.create({questName, answers});

      res.json(test);

    } catch (err) {
      res.status(404).json({
        error: err.message
      })
    }
  },
  getQuestions: async (req, res) => {
    try {

      const question = await Question.find()

      res.json(question);

    } catch (err) {
      res.status(404).json({
        error: err.message
      })
    }
  }
}