const router = require('express').Router();
let Shot = require('../models/shot.model');

router.route('/').get((req, res) => {
  Shot.find()
    .then(shots => res.json(shots))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const gamer = req.body.gamer;
  const fieldA = req.body.fieldA;
  const fieldB = req.body.fieldB;


  const newShot = new Shot({
    gamer,
    fieldA,
    fieldB
  });

  newShot.save()
  .then(() => res.json('Shot saved!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Exercise.findById(req.params.id)
    .then(shot => res.json(shot))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json('shot deleted!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Exercise.findById(req.params.id)
    .then(shot => {
      shot.gamer = req.body.gamer;
      shot.fieldA = req.body.fieldA;
      shot.fieldB = req.body.fieldB;

      shot.save()
        .then(() => res.json('shot updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;