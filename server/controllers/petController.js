const Pet = require('../models/petHealthModels.js');

const petController = {};

petController.addPet = (req, res, next) => {
  const { name, breed, gender, age, weight} = req.body;
  Pet.create(req.body, (err, newPet) => {
    console.log('newPet', newPet);
    if (err) {
      return next({
        log: `petController.addPet: ERROR: ${err}`,
        message: { err: 'Error occured at petController.addPet' },
      });
    }
    res.locals.newPet = newPet;
    console.log(res.locals.newPet);
    return next();
  });
};

// petController.addImage = (req, res, next) => {
//   const { image } = req.body;
//   models.Image.create(req.body, (err, petImage) => {
//     console.log('petImage', petImage);
//     if (err) {
//       return next({
//         log: `petController.addPet: ERROR: ${err}`,
//         message: { err: 'Error occured at petController.addPet' },
//       });
//     }
//     res.locals.petImage = petImage;
//     return next();
//   });
// };

petController.getPets = (req, res, next) => {
  Pet.find({}, (err, pets) => {
    if (err) {
      return next({
        log: `petsController.getPets: ERROR: ${err}`,
        message: { err: 'Error occured at petController.getPets' },
      });
    }
    res.locals.petList = pets;
    return next();
  });
};

petController.deletePet = (req, res, next) => {
  const name = req.params.name;
  Pet.findOneAndDelete({name}, (err, petDeleted) => {
    if (err) {
      return next({
        log: `petController.deletePet ERROR: ${err}`,
        status: 400,
        message: {err: 'Error occured at petController.deletePet'},
      })
    }
    res.locals.deleted = petDeleted;
    return next();
  })
}

module.exports = petController;
