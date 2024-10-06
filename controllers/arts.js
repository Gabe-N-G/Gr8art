
const express = require('express');
const router = express.Router();

const User = require('../models/user.js');
const Art = require('../models/art.js')

//INDEX ROUTE FOR ALL ART
router.get('/', async (req, res) => {
  try {
    const allArts = await Art.find({}).populate("owner")
    // console.log(allArts)
    res.render('arts/index.ejs', {arts : allArts});
  } catch (error) {
    console.log(error)
    res.redirect('/')
  }
});

//NEW ROUTE
router.get('/new', async (req,res) => {
  res.render('arts/new.ejs')
})


// INDEX ROUTE FOR USERS ARTS
router.get('/myarts', async(req,res) =>{
        // res.send("Here are your pieces")
  try {
          const currentUser = await User.findById(req.session.user._id);
          console.log(currentUser)
          const myArts = await Art.find({owner : currentUser}).populate("owner")
          // console.log(myArts)
          res.render('arts/index.ejs', {arts : myArts});
    } catch (error) {
          console.log(error)
          res.redirect('/')
    }
})

router.get('/:artsid', async(req,res) =>{
  // res.send(req.params.artsid)
  try {
    const sart = await Art.findById(req.params.artsid)
    let match

    // let artOwner= JSON.stringify(sart.owner)
    // console.log(JSON.stringify(sart.owner))
    // console.log(req.session.user._id)
    
    //weirdly had to make this a truty statement not a true one. ask teachers later.
    if (sart.owner == req.session.user._id){
      match = true
    } else {
      match = false
    }

    console.log(match)
    res.render('arts/show.ejs', 
      {
        art : sart,
        match
      }
    );
} catch (error) {
    console.log(error)
    res.redirect('/')
}


})

//POST route
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

router.delete('/:artsid', async (req,res)=> {
  try{
    const byeArt = await Art.findByIdAndDelete(req.params.artsid)
    await byeArt.save()
    res.resdirect('/myarts')


  }catch (error){
    console.log(error)
    res.redirect("/")
  }

})


module.exports = router;
