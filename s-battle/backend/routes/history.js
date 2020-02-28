const router = require('express').Router();
let History = require('../models/history.model');

router.route('/').get((req, res) => {
  History.find()
    .then(histories => res.json(histories))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const description = req.body.description;

  const newHistory = new History({
    description
  });

  newHistory.save()
  .then(() => res.json('action saved!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/del').post((req, res) => {
   History.deleteMany()
     .then(histories => res.json(histories))
     .catch(err => res.status(400).json('Error: ' + err));
 });

module.exports = router;
