const models = require('../models/petHealthModels.js');

const petController = {};

petController.addPet = (req, res, next) => {
  const { name, breed, gender, age, weight } = req.body;
  models.Pet.create({ name, breed, gender, age, weight }, (err, newPet) => {
    if (err) {
      return next({
        log: `petController.addPet: ERROR: ${err}`,
        message: { err: 'Error occured at starWarsController.getFilm' },
      });
    }
    res.locals.newPet = newPet;
    return next();
  });
};

module.exports = petController;
