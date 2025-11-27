const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');

const Plane = mongoose.model('Plane', { name: String });

var planes = new Plane({ name: 'privat' });
planes.save().then(() => console.log('fly'));