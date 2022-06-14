const { Router } = require('express');
const { answerController } = require('../controllers/answers.controller');

const router = Router();

router.post('/', answerController.postAnswer);
router.get('/', answerController.getAnswers);

module.exports = router;
