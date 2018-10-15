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
  User.findByIdAndUpdate(id, req.body.data, {new:true})
   .then(user => res.status(200).json(user))
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

// //HACE EL EDIT EN BACK: 
// router.post('/:id', (req, res, next) => {
// let {id}= req.params;
// const{username, email}=req.body;
//   User.findByIdAndUpdate(id ,{$set:{username,email}} )
// .then((data)=>{
//   res.status(200).json(data)
// })
// .catch(next)
// })


module.exports = router;