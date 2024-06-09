//step 1 import mongoose
import mongoose from "mongoose";

//step 2 create schema using new keyword
const subtodoSchema = new mongoose.Schema(
    {
        content:{
            type: String,
            required:true,

        },
        complete:{
            type:Boolean,
            default:false,

        },
        createdby:{
            type: mongoose.Schema.Types,OrderId,
            ref:"User"
        }
    },

    { 
        timestamps: true 
    }
 )

 // step 3 export the schema

 export const Sub_todo =  mongoose.Schema("Sub_todo",subtodoSchema)

