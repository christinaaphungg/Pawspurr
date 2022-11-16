const express = require('express');
const petController = require('../controllers/petController');

const router = express.Router();

router.get('/', petController.getPets, (req, res));

router.post('/pet', petController.addPet, (req, res =>
    res.status(200).json(res.locals.newPet))
);

module.exports = router;
