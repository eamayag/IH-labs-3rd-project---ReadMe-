const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const User = require('../models/User');
const PersonalInfo = require('../models/PersonalInfo');
const Condition = require('../models/Condition');
const Treatment = require('../models/Treatment');
const _ = require('lodash');

router.get('/', (req, res, next) => {
  User.findById(req.user._id)
    .then(response => res.status(200).json(response))
    .catch(err => {res.json(err);
    })
    edit
})


router.post('/:id', (req, res, next) => {
  // const {id} = req.params;
  // const object = _.pickBy(req.body, (e,k) => paths.includes(k));
  // const updates = _.pickBy(object, _.identity);
  // const { username, email } = req.body;
let {id}= req.params;
const{username, email}=req.body;


  // User.findOneAndUpdate(id, updates ,{new:true} )
  User.findByIdAndUpdate(id ,{$set:{username,email}} )
.then((data)=>{
  res.status(200).json(data)
})
.catch(next)
})
//   console.log(email, "entra")
//     .then(obj => {
//       res.status(200).json({status:'updated',obj});
//     })

//     .catch(next)
// });



module.exports = router;