const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Profile = require('../models/Profile')

router.get('/:id', (req, res, next) => {
  Profile.findById(req.params.id)
    .then(response =>
      res.status(200).json(response))
    .catch(err => {
      res.json(err);
    })

})

module.exports = router;