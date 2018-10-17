const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const User = require('../models/User');
const Condition = require('../models/Condition');
const Treatment = require('../models/Treatment');
const Contact = require('../models/Contact');

router.get('/', (req, res, next) => {
  const id = req.user._id;
  let userPromise = User.findById(id);
  let contactPromise = Contact.findOne({user:id });
  let conditionPromise = Condition.findOne({user:id });
  let treatmentPromise = Treatment.findOne({user:id });

  Promise.all([userPromise, contactPromise, conditionPromise, treatmentPromise])
    .then(data => res.status(200).json(data))
    .catch(err => {res.json(err);
    })
})

// router.get('/:id', (req, res, next) => {
//   const id = req.params.id;
//   console.log(id)
//   let userPromise = User.findById(id);
//   let contactPromise = Contact.findOne({user:id });
//   let conditionPromise = Condition.findOne({user:id });
//   let treatmentPromise = Treatment.findOne({user:id });

//   Promise.all([userPromise, contactPromise, conditionPromise, treatmentPromise])
//     .then(data => res.status(200).json(data))
//     .catch(err => {res.json(err);
//     })
// })

router.post('/', (req, res, next)=>{
  const id = req.user._id;
  let userPromise = User.findByIdAndUpdate(id, req.body.data.user, {new:true});
  let contactPromise = Contact.findOneAndUpdate({user: id}, req.body.data.contact, {new:true});
  let conditionPromise = Condition.findOneAndUpdate({user: id}, req.body.data.condition, {new:true});
  let treatmentPromise = Treatment.findOneAndUpdate({user: id}, req.body.data.treatment, {new:true});
  
  Promise.all([userPromise, contactPromise, conditionPromise, treatmentPromise])
   .then(data => { /* console.log(data); */ return res.status(200).json(data)})
   .catch(err => next(err)) 
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