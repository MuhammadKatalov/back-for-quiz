const Answer = require('../models/Answer.model');

module.exports.answerController = {
  postAnswer: async (req, res) => {
    try {
      const { answer, isTrue } = req.body;

      const answerr = await Answer.create({answer, isTrue});

     res.json(answerr);

    } catch (e) {
      res.status(404).json({
        error: e.message
      })
    }
  },
  getAnswers: async (req, res) => {
    try {

      const answer = await Answer.find();

      res.json(answer);

    } catch (e) {
      res.status(404).json({
        error: e.message
      })
    }
  }
}