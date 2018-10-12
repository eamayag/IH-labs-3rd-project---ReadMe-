const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const User = require('../models/User')

router.get('/profile', (req, res, next) => {
  User.find()
    .then(res => console.log(res)) //res.status(200).json(response))
    .catch(err => {res.json(err);
    })

})



module.exports = router;