const { Router } = require('express');
const { questionController } = require('../controllers/questions.controller');

const router = Router();

router.post('/questions', questionController.postQuestion);
router.get('/questions', questionController.getQuestions);

module.exports = router;