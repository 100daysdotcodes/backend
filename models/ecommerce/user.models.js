//step 1 import mongoose
import mongoose from "mongoose";

// step 2 create schema using new keyword

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique:true,
        lowercase:true,
    },
    email:{
        type: String,
        required: true,
        unique:true,
        lowercase:true,
    },
    password:{
        type:String,
        required:true
    }
    
},{timsestamps:true})

// step 3 export the schema

export const  User = mongoose.Schema("User",UserSchema)
