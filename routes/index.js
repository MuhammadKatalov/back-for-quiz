const { Router } = require('express');

const router = Router();

router.use('/tests', require('./tests.route'));
router.use('/comments', require('./comments.route'));

module.exports = router;