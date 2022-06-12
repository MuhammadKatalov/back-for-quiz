const Test = require('../models/Test.model');

module.exports.testsController = {
    createTest: async (req, res) => {
        try {
            const newQuestion = await Test.create(
                { 
                    question: req.body.question,
                    answers: [
                        {
                            answer: req.body.answer,
                            isCorrect: req.body.isCorrect
                        }
                    ]
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

    pushAnswers: async (req, res) => {
        try {
            const newAnswer = await Test.findByIdAndUpdate(req.params.id, {
                $push: {
                    answers: {
                        answer: req.body.answer,
                        isCorrect: req.body.isCorrect
                    }
                }
            })
            res.json(newAnswer);
        } catch (e) {
            res.json(e)
        }
    }
}


