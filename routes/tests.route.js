const { Router } = require('express');
const { testsController } = require('../controllers/tests.controller');

const router = Router();

router.get('/tests', testsController.getTests);
router.get('/tests/:id', testsController.getTestById);
router.post('/tests/category/:category', testsController.postTest);

module.exports = router;