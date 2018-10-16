const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const User = require('../models/User');
const Condition = require('../models/Condition');
const Treatment = require('../models/Treatment');
const _ = require('lodash');

router.get('/', (req, res, next) => {
  User.findById(req.user._id)
    .then(response => res.status(200).json(response))
    .catch(err => {res.json(err);
    })
})

router.post('/', (req, res, next)=>{
  const id = req.user._id;
  User.findByIdAndUpdate(id, req.body.data.user, {new:true}).then(()=>    
    Contact.findByIdAndUpdate(id, req.body.data.contact, {new:true}).then(() =>
    Condition.findByIdAndUpdate(id, req.body.data.condition, {new:true}).then(() =>
    Treatment.findByIdAndUpdate(id, req.body.data.treatment, {new:true})
    .then(user => res.status(200).json(user))
   .catch(err => next(err)) 
    )
    )
  )
 /*  Promise.all([userpost, contactpost, conditionpost, treatmentpost])
   .then(user => {console.log(user); return res.status(200).json(user)})
   .catch(err => next(err)) */
 })


router.delete('/:id', (req, res, next)=>{
User.findByIdAndDelete(req.params.id, req.body)
  .then(() => {
  res.json({message: `removed: ${req.params.id}`});
  })
  .catch(err => {
  res.json(err);
  })
})

module.exports = router;