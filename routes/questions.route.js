const { Router } = require('express');
const { questionController } = require('../controllers/questions.controller');

const router = Router();

router.post('/', questionController.postQuestion);
router.get('/', questionController.getQuestions);

module.exports = router;
