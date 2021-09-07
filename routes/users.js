var express = require('express');
var router = express.Router();
const db = require('../models');
const bcrypt = require('bcrypt');

/* GET users listing. */
router.post('/register', function(req, res, next) {
  // take username, password
  if(!req.body.username || !req.body.password || !req.body) {
    res.status(400).json({
      error: 'Please include username and password.'
    });
  }
  // create a new user
    // check if username is taken
  db.User.findOne({
    where: {
      username: req.body.username
    }
  })
    .then((user) => {
      if(user) {
        res.status(400).json({
          error: 'Username already in use.'
        })
        return 
      }
      // hash password
      bcrypt.hash(req.body.password, 10)
        .then((hash) => {
          // store in database
          db.User.create({
            username: req.body.username,
            password: hash
          })
          // respond with success/error
            .then((user) => {
              res.status(201).json({
                success: 'User created.'
              })
            })
        })
    })
});

module.exports = router;
