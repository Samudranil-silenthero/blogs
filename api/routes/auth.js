const router=require("express").Router();
const User= require("../models/User.js")
const bcryptjs=require('bcryptjs');


const handleError= (res,err)=>{
    console.log(err.message);
    //Entered data validation
    if(err.message.includes('User validation failed')){
        for(const object in err.errors){
            res.status(400).json(err.errors[object].properties.message);
            return ;
         }
    }
     
    // Duplicate validation
    if(err.message.includes('E11000 duplicate key error collection')){
        for(const object in err.keyPattern){
            res.status(400).json("This "+object+" already exists!!!");
            return ;
         }
    }

    //User Validation
    if(err.message.includes('Username not found')){
        res.status(404).json("Username not found!");
        return;
    }
    else if(err.message.includes('Wrong password!!')){
        res.status(400).json("Wrong password!!");
        return;
    }
}

//SignUP
router.post('/register', async(req,res)=>{
    const {username,email,password}= req.body;
    try{
        const newUser= await User.create({username,email,password});
        res.status(201).json(newUser); 
    }catch(err){  
        handleError(res,err);
    }
});

router.post('/login',async(req,res)=> {
    try {
      const user = await User.findOne({ username: req.body.username });
      if (!user){
        throw Error('Username not found');
      }
  
      const isPasswordCorrect = await bcryptjs.compare(req.body.password,user.password);
      if (!isPasswordCorrect){
        throw Error('Wrong password!!');
      }
      const {password, ...others}= user._doc;
      res.status(200).json(others);
    } 
    catch (err) {
        handleError(res,err);
    }
});

module.exports=router;
