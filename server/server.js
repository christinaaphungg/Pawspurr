const path = require('path');
const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const petController = require('./controllers/petController');
const PORT = 3000;

const MONGO_URI =
  'mongodb+srv://cphung:heyhey123@pethealth.t9gfhxm.mongodb.net/?retryWrites=true&w=majority';

mongoose
  .connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'pethealth',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

//handle parsing request body
//all requests that come in start in this file, and will help us parse through the data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/build', express.static(path.join(__dirname, '../build')));

//this will load all our index.html file
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
});

//handle requests for static files
app.use(express.static('client'));

const router = express.Router();
app.use('/home', router);

router.get('/', petController.getPets, (req, res) => {
  res.status(200).send(res.locals.petList);
});

// //create a pet in the DB
router.post('/pet', petController.addPet, (req, res) => {
  res.status(200).json(res.locals.newPet);
});

// router.post('/image', petController.addImage, (req, res) => {
//   console.log('successfully uploaded image!');
//   res.status(200);
// });

//delete a pet in the DB
router.delete('/:name', petController.deletePet, (req, res) => {
  res.status(200).json(res.locals.deleted);
});

//Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

/**
 * start server
 */
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
