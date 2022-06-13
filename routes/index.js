const { Router } = require("express");

const router = Router();

router.use("/tests", require("./tests.route"));
router.use("/users", require("./users.route"));

module.exports = router;
