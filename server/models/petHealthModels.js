const mongoose = require('mongoose');

// const MONGO_URI =
//   'mongodb+srv://cphung:heyhey123@pethealth.t9gfhxm.mongodb.net/?retryWrites=true&w=majority';

// mongoose
//   .connect(MONGO_URI, {
//     // options for the connect method to parse the URI
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     // sets the name of the DB that our collections are part of
//     dbName: 'pethealth',
//   })
//   .then(() => console.log('Connected to Mongo DB.'))
//   .catch((err) => console.log(err));

const Schema = mongoose.Schema;

const petSchema = new Schema({
  name: { type: String, required: true },
  breed: { type: String, required: true },
  gender: { type: String, required: true },
  age: { type: Number, required: true },
  weight: { type: Number, required: true },
});
const Pet = mongoose.model('pet', petSchema);

// const imageSchema = new Schema({
//   image: { type: String },
// })
// const Image = mongoose.model('image', imageSchema);

module.exports = Pet;
