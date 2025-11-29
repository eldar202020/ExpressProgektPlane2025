const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');

var schema = mongoose.Schema({ name: String })
schema.methods.bah = function(){

   console.log(this.name + "сделал вииииииу, бах")

}
const Plane = mongoose.model('Plane', schema);

const fly = new Plane({ name: 'starateg plane' });

fly.save().then(() => fly.bah());


