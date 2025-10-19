var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/strateg', function(req, res, next) {
    res.send("<h1>Страгическая авиация</h1>")
});
router.get('/civil', function(req, res, next) {
    res.send("<h1>Гражданская авиация</h1>")
});
router.get('/private', function(req, res, next) {
    res.send("<h1>Частная авиация</h1>")
});
module.exports = router;
