const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2025');


var Plane = require('./models/plane.js').Plane


var plane = new Plane({
   title: "Стратегическая",
   nick: "strateg",
})
plane.save();