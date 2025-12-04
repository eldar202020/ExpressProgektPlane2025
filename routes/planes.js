var express = require('express');
var router = express.Router();
var Plane = require('../models/plane').Plane;
var checkAuth = require("../middlewares/checkAuth.js");
router.get("/:nick", checkAuth , async function(req, res, next) {

   var planes = await Plane.find({nick: req.params.nick});

   console.log(planes)
   if(!planes.length) return next(new Error("Нет такого вида самолета"))
       var plane = planes[0];
    console.log('_______________________')
    console.log(plane.avatar)
       res.render('plane', {
           title: plane.title,
           picture: plane.avatar,
           desc: plane.desc

       })

});

module.exports = router;
