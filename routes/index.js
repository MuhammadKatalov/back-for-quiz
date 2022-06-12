const { Router } = require('express');

const router = Router();

router.use('/tests', require('./tests.route'));

module.exports = router;