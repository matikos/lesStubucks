const express = require('express');
const router = express.Router();
const Order = require ('../models/genOrder')

router.post('/createCoffee', (req, res, next) => {
  let id = Order.id;
  let name = req.body.name;
  let drink = req.body.drink;
  let extras = req.body.extras;
  let size = req.body.size;
  let amount = req.body.amount;

  const order = new Order({
    _id: id,
    name: name,
    drink: drink,
    extras: extras,
    size: size,
    amount: amount
  
  });

  

  order.save();
  console.log('success')
 
  res.redirect('/');
});

module.exports = router;
