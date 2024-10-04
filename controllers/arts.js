
const express = require('express');
const router = express.Router();

const User = require('../models/user.js');

// we will build out our router logic here
router.get('/', async (req, res) => {
  try {
    res.render('arts/index.ejs');
  } catch (error) {
    console.log(error)
    res.redirect('/')
  }
});

module.exports = router;
