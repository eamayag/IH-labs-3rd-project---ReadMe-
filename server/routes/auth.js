const express = require('express');
const router  = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');
const Contact = require('../models/Contact');
const Condition = require('../models/Condition');
const Treatment = require('../models/Treatment');
const passport = require('passport');

const login = (req, user) => {
  return new Promise((resolve,reject) => {
    req.login(user, err => {
      //console.log(user)

      if(err) {
        reject(new Error('Something went wrong'))
      }else{
        resolve(user);
      }
    })
  })
}

router.post('/signup', (req, res, next) => {

  const {username, password} = req.body;
  // Check for non empty user or password
  if (!username || !password){
    next(new Error('You must provide valid credentials'));
  }

  // Check if user exists in DB
  User.findOne({ username })
  .then( foundUser => {
    if (foundUser) throw new Error('Username already exists');

    const salt     = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(password, salt);

    return new User({
      username,
      password: hashPass
    }).save();
  })
  .then( savedUser => {
    let contactPromise = Contact.create({user: savedUser._id}); 
    let conditionPromise = Condition.create({user: savedUser._id}); 
    let treatmentPromise = Treatment.create({user: savedUser._id});
    return Promise.all([contactPromise, conditionPromise, treatmentPromise])
    .then(() => login(req, savedUser))
    .catch(err => next(err)) // Login the user using passport
  })
  .then( user => res.json({status:200, user})) // Answer JSON
  .catch(e => next(e));
});

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, theUser, failureDetails) => {
    
    // Check for errors
    if (err) next(new Error('Something went wrong')); 
    if (!theUser) next(failureDetails)

    // Return user and logged in
    login(req, theUser).then(user => res.status(200).json(req.user));

  })(req, res, next);
});

router.get('/loggedin', (req,res,next) => {
  if(req.user){
    res.status(200).json(req.user);
  }else{
    next(new Error('Not logged in'))
  }
})

router.get('/logout', (req,res) => {
  req.logout();
  res.status(200).json({message:'logged out'})
});

router.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
})

module.exports = router;