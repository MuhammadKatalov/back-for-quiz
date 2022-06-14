const Answer = require('../models/Answer.model');

module.exports.answerController = {
  postAnswer: async (req, res) => {
    try {
      const { answer, isTrue } = req.body;

      const answerr = await Answer.create({answer, isTrue});

      res.json(answerr);

    } catch (err) {
      res.status(404).json({
        error: err.message
      })
    }
  },
  getAnswers: async (req, res) => {
    try {

      const answer = await Answer.find();

      res.json(answer);

    } catch (err) {
      res.status(404).json({
        error: err.message
      })
    }
  }
}