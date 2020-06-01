var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/poeple", function (req, res, next) {
  res.render("people");
});

module.exports = router;
