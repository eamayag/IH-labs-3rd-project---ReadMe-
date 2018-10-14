const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const User = require('../models/User');
const PersonalInfo = require('../models/PersonalInfo');
const Condition = require('../models/Condition');
const Treatment = require('../models/Treatment')

router.get('/', (req, res, next) => {
  User.findById(req.user._id)
    .then(response => res.status(200).json(response))
    .catch(err => {res.json(err);
    })

})

module.exports = router;