
const express = require('express');
const router = express.Router();

const User = require('../models/user.js');
const Art = require('../models/art.js')

// we will build out our router logic here
router.get('/', async (req, res) => {
  try {
    const allArts = await Art.find({}).populate("owner")
    console.log(allArts)
    res.render('arts/index.ejs', {arts : allArts});
  } catch (error) {
    console.log(error)
    res.redirect('/')
  }
});

router.get('/new', async (req,res) => {
  res.render('arts/new.ejs')
})

router.post('/', async (req,res) => {
  try{
    const colors = JSON.parse(req.body.colorArray)
    const artData ={
      ...req.body,
      owner: req.session.user._id,
      colorArray: colors
    }
    console.log(artData)

    const art = new Art(artData);
    await art.save()

    res.redirect("/arts")

  } catch (error){
    console.log(error)
    res.redirect("/")
  }
})

module.exports = router;
