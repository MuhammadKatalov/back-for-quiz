const Test = require('../models/Test.model');

module.exports.testsController = {
    createTest: async (req, res) => {
        try {
            const newQuestion = await Test.create(
                { 
                    question: req.body.question,
                    answers: req.body.answers
                }
            )
            res.json(newQuestion)
        } catch (e) {
            res.json(`Ошибка: ${e.message}`)
        }
    },
    getTests: async (req, res) => {
        try {
            const test = await Test.find()
            res.json(test)
        } catch (error) {
            res.json(error)

        }
    },

}


