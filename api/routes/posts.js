const router=require("express").Router();
const Post= require("../models/Post.js")

const handleError= (res,err)=>{
    //Entered data validation
    if(err.message.includes('Post validation failed')){
        for(const object in err.errors){
            res.status(400).json(err.errors[object].properties.message);
            return ;
         }
    }
     
    // Duplicate validation
    if(err.message.includes('E11000 duplicate key error collection')){
        res.status(400).json("This title already exists!!!");
        return ;
    }
}

//Create a post
router.post('/', async(req,res)=>{
    const {title,desc,photo,username,categories}= req.body;
    try{
        const newPost= await Post.create({title,desc,photo,username,categories});
        res.status(201).json(newPost); 
    }catch(err){  
        handleError(res,err);
    }
});

//UPDATE post
router.put("/:id", async(req,res)=>{
        try{
            const post= await Post.findById(req.params.id);
            if(post.username === req.body.username){
                try{
                    const updatedPost= await Post.findByIdAndUpdate(
                        req.params.id,
                        {$set:req.body},
                        {new:true}
                    ); 
                    res.status(201).json(updatedPost);
                }catch(err){
                    res.status(500).json(err);  
                }
            }
            else{
                res.status(401).json("Can update only your post");
            }
        }catch(err){
            res.status(500).json(err);    
        }
    
});
//DELETE post
router.delete("/:id", async(req,res)=>{
    try{
        const post= await Post.findById(req.params.id);
        if(post.username === req.body.username){
            try{
                await Post.findByIdAndDelete(req.params.id);
                res.status(200).json("Deleted the post!!");
            }catch(err){
                res.status(500).json(err);  
            }
        }
        else{
            res.status(401).json("Can delete only your post!!");
        }
    }catch(err){
        res.status(500).json(err);    
    }
});

//GET post
router.get("/:id", async(req,res)=>{
    try{
        const getPost= await Post.findById(req.params.id);
        res.status(200).json(getPost);
    }catch(err){
        res.status(500).json(err);  
    }
});

//Get all posts based on condition
router.get("/", async(req,res)=>{
    const username= req.query.user;
    const catName= req.query.cat;
    try{
        let posts;
        if(username){
            posts= await Post.find({username});
        }
        else if(catName){
                posts= await Post.find({categories:{
                    $in:[catName]
                }
            });
        }
        else{
            posts=await Post.find();
        }
        res.status(200).json(posts);
    }catch(err){
        res.status(500).json(err);  
    }
});

module.exports=router;
