const { Router } = require('express');

const { testsController } = require('../controllers/tests.controller');

const router = Router();

router.post('/', testsController.createTest);
router.get('/', testsController.getTests);
router.patch('/:id', testsController.pushAnswers);

module.exports = router;