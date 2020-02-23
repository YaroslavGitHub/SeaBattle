const router = require('express').Router();
let Gamer = require('../models/gamer.model');

router.route('/').get((req, res) => {
  Gamer.find()
    .then(gamers => res.json(gamers))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const gamer = req.body.gamer;

  const newGamer = new Gamer({gamer});

  newGamer.save()
    .then(() => res.json('Gamer added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/del').delete((req, res) => {
  gamer.find({})
    .then(() => res.json('Game deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;