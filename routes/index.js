const { Router } = require("express");

const router = Router();

<<<<<<< HEAD
router.use('/tests', require('./tests.route'));
router.use('/comments', require('./comments.route'));
=======
router.use("/tests", require("./tests.route"));
router.use("/users", require("./users.route"));
>>>>>>> main

module.exports = router;
