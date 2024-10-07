const express = require('express');
const router = express.Router();

const User = require('../models/user.js');
const Art = require('../models/art.js')

router.post('/arts/:artsid/comments', async (req,res) => {
    try{
      const foundArt = await Art.findById(req.params.artsid)
      const commentData ={
        ...req.body,
        owner: req.session.user._id,
      }
      console.log(commentData)
    
      foundArt.comments.push(commentData)
      await foundArt.save()
      
      res.redirect("/arts/:artsid")
  
    } catch (error){
      console.log(error)
      res.redirect("/arts/:artsid")
    }
  })


module.exports = router;
