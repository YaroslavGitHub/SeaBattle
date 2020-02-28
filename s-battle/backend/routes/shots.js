const router = require('express').Router();
let Shot = require('../models/shot.model');

router.route('/').get((req, res) => {
  Shot.find()
    .then(shots => res.json(shots))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const _id = req.body._id;
  const gamer = req.body.gamer;
  const fieldA = req.body.fieldA;
  const fieldB = req.body.fieldB;
  const shot = req.body.shot;
  const ship = req.body.ship;


  const newShot = new Shot({
    _id,
    gamer,
    fieldA,
    fieldB,
    shot,
    ship
  });

  newShot.save()
  .then(() => res.json('Shot saved!'))
  .catch(err => res.status(400).json('Error: ' + err));
});



/*router.route('/update/:id').post((req, res) => {
   Shot.findById(req.params.id)
    .then(shot => {
      shot.gamer = req.body.gamer;
      shot.fieldA = req.body.fieldA;
      shot.fieldB = req.body.fieldB;
      shot.shot = req.body.shot;
      shot.ship = req.body.ship;

      shot.save()
        .then(() => res.json('shot updated!'))
        .catch(err => res.status(400).json('Error: ' + err));

    })
    .catch(err => res.status(400).json('Error: ' + err));
});*/

router.route('/find/:id').get((req, res) => {
   Shot.findById(req.params.id).then(shots => res.json(shots))
     .catch(err => res.status(400).json('Error: ' + err));
 });

router.route('/findone/:id').post((req, res) => {
   Shot.findByIdAndUpdate(req.params.id,{ shot: true})
     .then(shots => res.json(shots))
     .catch(err => res.status(400).json('Error: ' + err));
 });

 router.route('/all').post((req, res) => {
   Shot
   .updateMany( {_id: { $gte: 0, $lt: 100 }}, { ship: false }) 
   .updateMany( {_id: { $lte: 3 }}, { ship: true})
   .updateMany( {_id: 18}, { ship: true})
   .updateMany( {_id: { $gte: 25, $lte: 27 }}, { ship: true})
   .updateMany( {_id: { $gte: 67, $lte: 68 }}, { ship: true})
   .then(shots => res.json(shots))
   .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/history').get((req, res) => {
   Shot.find({ ship: true })
     .then(shots => res.json(shots))
     .catch(err => res.status(400).json('Error: ' + err));
 });


module.exports = router;
