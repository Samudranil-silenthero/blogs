const mongoose=require("mongoose")
const {isEmail}=require('validator')
const bcryptjs= require('bcryptjs')
const UserSchema= new mongoose.Schema({
        username:{
            type:String,
            required:[true,"Please enter an username"],
            unique:true
        },
        email:{
            type:String,
            required:[true,"Please enter a valid email"],
            unique:true,
            lowercase:true,
            validate:[isEmail,"Please enter a valid email"]
        },
        password:{
            type:String,
            required:[true,"Please enter a password"],
            unique:true,
            minlength:[6,"Minimum password length should be 6"]
        },
        profilePic:{
            type:String,
            default:""
        }
    },
    {timestamps:true}
);
UserSchema.pre('save',async function(next) { //before saving so no doc 
    const salt= await bcryptjs.genSalt(10);
    this.password= await bcryptjs.hash(this.password ,salt);
    next();
})
module.exports= mongoose.model("User",UserSchema)