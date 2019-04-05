const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/logIn.js');
const bcrypt = require('bcrypt');

mongoose.connect('mongodb://127.0.0.1:27017/coffeeOrder', {
  useNewUrlParser: true
})

router.post('/createUser', async (req, res, next) => {


  let password = req.body.password;
  console.log(password)

  let barrista = await User.find({
    'name': "barrista"
  });


  let hashedPass = barrista[0].password;
  

  let thing = await bcrypt.compare(password, hashedPass);

  if (thing) {
    router.get('/createUser', await (req, res, next) => {
      
    })
  }

  res.redirect('/');
});

// mongoose.connect(url, (err, db) => {
//   console.log('connected');

//   if(err) console.log(err)




// db.close ();
// })
module.exports = router;