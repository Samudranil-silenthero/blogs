const { response } = require('express');
const express= require('express');
const app=express();
const dotenv=require("dotenv")
const mongoose=require("mongoose")
const cookieParser=require('cookie-parser')
const authRoute= require("./routes/auth.js")
const usersRoute= require("./routes/users.js")
const postsRoute= require("./routes/posts.js")
const categoriesRoute= require("./routes/categories.js")
const multer=require('multer');
const path=require('path');
// const {requireAuth, checkUser}= require('./utils/verifyToken')

dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use("/images",express.static(path.join(__dirname,"/images")));

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology:true,
    // useFindAndModify:true
})
.then(console.log("Connected to mongodb"))
.catch("Error in connection");

const storage= multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,"images")
    },filename:(req,file,callback)=>{
        callback(null,req.body.name);
    }
});
const upload=multer({storage:storage})

//app.use('*',checkUser);
app.use("/api/auth",authRoute);
app.use("/api/users",usersRoute);
app.use("/api/posts",postsRoute);
app.use("/api/categories",categoriesRoute);
app.use("/api/upload",upload.single("file"),(req,res)=>{
    res.status(200).json("File has been uploaded");
})

app.listen(process.env.PORT,()=>{
    console.log("server runs at port 5000");
});