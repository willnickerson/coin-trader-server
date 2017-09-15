const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser').json();
const User = require('../models/user');

router
  .get('/', (req, res, next) => {
    User.find()
      .then(user => res.send(user))
      .catch(next);
  })
  .get('/:id', (req, res, next) => {
    User.findById(req.params.id)
      .populate('ingredients', 'name imgUrl description')
      .then(user => res.send(user))
      .catch(next);
  })
  .post('/', bodyParser, (req, res, next) => {
    new User(req.body).save()
      .then(saved => res.send(saved))
      .catch(next);
  })
  .put('/:id', bodyParser, (req, res, next) => {
    User.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(updated => res.send(updated))
      .catch(next);
  })
  .delete('/:id', (req, res, next) => {
    User.findByIdAndRemove(req.params.id)
      .then(deleted => res.send(deleted))
      .catch(next);
  });

module.exports = router;