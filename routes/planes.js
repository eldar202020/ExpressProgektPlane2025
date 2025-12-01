var express = require('express');
var router = express.Router();
var Plane = require('../models/plane').Plane;
router.get("/:nick", async function(req, res, next) {

   var planes = await Plane.find({nick: req.params.nick});

   console.log(planes)
   if(!planes.length) return next(new Error("Нет такого вида самолета"))
       var plane = planes[0];
       res.render('plane', {
           title: plane.title,
           picture: plane.avatar,
           desc: plane.desc

       })

});

module.exports = router;
