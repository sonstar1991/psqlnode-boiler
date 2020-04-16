const router = require("express").Router();

//Put all routes here
const abc = require("./router");

router.use("/abc", abc);

module.exports = router;
