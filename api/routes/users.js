const router=require("express").Router();
const User= require("../models/User.js") 
const Post= require("../models/Post.js") 
const bcryptjs=require('bcryptjs');

//UPDATE
router.put("/:id", async(req,res)=>{
    if(req.body.userId == req.params.id){
        try{
            const str = req.body.password;
            if(str.length<6){
                throw Error('Password should be minimum of 6 chars');
            }
            if(req.body.password){ //if we r sending a password in a request
                const salt= await bcryptjs.genSalt(10);
                req.body.password= await bcryptjs.hash(req.body.password ,salt);
            }
            const updatedUser= await User.findByIdAndUpdate(
                req.params.id,
                {$set:req.body},
                {new:true}
            ); 
            res.status(201).json(updatedUser);
        }
        catch(err){
            if(err.message.includes('Password should be minimum of 6 chars')){
                res.status(404).json("Password should be minimum of 6 chars");
                return;
            }
            res.status(201).json(err);    
        }
    }
    else{
        res.status(401).json("You can update only your data!");
    }
});

//DELETE
router.delete("/:id", async(req,res)=>{
    if(req.body.userId == req.params.id){
        try{
            const user= await User.findById(req.params.id); 
            if(user){
                await Post.deleteMany({username: user.username})
                await User.findByIdAndDelete(req.params.id); 
                res.status(200).json("User deleted successfully!");
            }
            else{
                res.status(200).json("User not found!");
            }
        }
        catch(err){
            console.log(err);
            res.status(500).json(err);    
        }
    }
    else{
        res.status(401).json("You can del only your data!");
    }
});

//GET
router.get("/:id", async(req,res)=>{
        try{
            const user = await User.findById(req.params.id); 
            if(user){
                const {password, ...others}= user._doc;
                res.status(201).json(others);
            }
            else{
                res.status(401).json("User not found");  
            }
        }
        catch(err){
            res.status(500).json("User not found");    
        }
});

module.exports=router;
