const router=require("express").Router();
const Category= require("../models/Category.js")

//Create a post
router.post('/', async(req,res)=>{
    const {name}= req.body;
    try{
        const newCat= await Category.create({name});
        res.status(201).json(newCat); 
    }catch(err){  
        res.status(500).json(err);
    }
});

//fetch all categories
router.get('/', async(req,res)=>{
    try{
        const getCat= await Category.find();
        res.status(200).json(getCat); 
    }catch(err){  
        console.log(err)
        res.status(500).json(err);
    }
});

module.exports=router;
