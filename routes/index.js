var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express", counter: req.session.counter });
});

router.get("/logreg", function (req, res, next) {
  res.render("logreg", { title: "Вход" });
});

module.exports = router;
