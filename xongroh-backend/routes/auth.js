const cookieParser = require("cookie-parser");
const express = require("express");
const router = express.Router();

const User = require("../models/User");
router.use(cookieParser());



// router.get("/", (req, res) => {
//   res.send("hello from server");
// });

router.post("/register",async(req,res)=>{
  
 try {
    const{name,email,phone}= req.body;
    if ( !email || !name) {
      return res.json(req.body);
    }
    const alreadyuser = await User.findOne({email});
    console.log(alreadyuser);
    if(!alreadyuser){
      const user = new User({name,email,phone});
      await user.save();
      res.status(201).json({ message: "user data added" });
    }else{
      res.status(403).json("You've registered already")
    }
    
    
    
 } catch (error) {
    res.status(501).json(error);
    console.log("error from backend")
 }

});

router.get('/allusers', async(req,res)=>{
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/userCount', async (req, res) => {
  try {
    const userCount = await User.countDocuments();
    res.status(200).json({ count: userCount });
  } catch (error) {
    res.status(500).json(error);
  }
});


router.get("/get-early-access",(req,res)=>{
  res.redirect("/");
})




module.exports = router;