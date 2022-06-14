const Test = require('../models/Test.model');

module.exports.testsController = {
  getTests: async (_, res) => {
    try {
      const test = await Test.find().populate('questions category', 'questName answers categoryName');
      res.status(200).json(test);
    } catch (err) {
      res.status(404).json({
        error: err.message
      })
    }
  },
  getTestById: async (_, res) => {
    try {
      const { id } = req.params;
      const test = await Test.findById(id).populate('questions', 'questName');
      res.status(200).json(test);
    } catch (err) {
      res.status(404).json({
        error: err.message
      })
    }
  },
  postTest: async (req, res) => {
    try {
      
      const { testName, questions } = req.body;

      const test = await Test.create({ testName, questions, category: req.params.category });

      res.json(test);

    } catch (err) {
      res.status(404).json({
        error: err.message
      })
    }
  }
}