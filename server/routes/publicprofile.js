const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const User = require('../models/User');
const Condition = require('../models/Condition');
const Treatment = require('../models/Treatment');
const Contact = require('../models/Contact');

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  console.log(id)
  let userPromise = User.findById(id);
  let contactPromise = Contact.findOne({user:id });
  let conditionPromise = Condition.findOne({user:id });
  let treatmentPromise = Treatment.findOne({user:id });

  Promise.all([userPromise, contactPromise, conditionPromise, treatmentPromise])
    .then(data => res.status(200).json(data))
    .catch(err => {res.json(err);
    })
})


module.exports = router