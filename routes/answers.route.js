const { Router } = require('express');
const { answerController } = require('../controllers/answers.controller');

const router = Router();

router.post('/answers', answerController.postAnswer);
router.get('/answers', answerController.getAnswers);

module.exports = router;