const { Router } = require("express");
const router = Router();

router.use("/tests", require("./tests.route"));
router.use("/users", require("./users.route"));
router.use("/answers", require("./answers.route"));
router.use('/categories', require('./categories.route'));
router.use('/comments', require('./comments.route'));
router.use('/questions', require('./questions.route'));

module.exports = router;