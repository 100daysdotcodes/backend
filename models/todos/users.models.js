/* 
Mongoose schemas serve as the foundation for creating models,
which are the actual constructors compiled from the schema definitions. 

- ye teeno steps hamesa use hogi 
- new keyword hamesa use krna  hai 
- hamesa koi na koi schema banega jaise, userSchema, HospitalSchema, todoSchema
*/

//step 1 import mongoose
import mongoose from "mongoose";

//step 2: mongoose helps us to create scheme 
//schema is a method which takes an object : is obj k andar data rakhte hai 
// cosnt nameofSchemaa = new mongoose,Schema(kyakya data aap loge , kya kya timestamps aap loge)
const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true

        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: [true, "password is required"]
        }
    }, { timestaps: true } // Enabling timestamps for createdAt and updatedAt
)

/* 
step 3 export the schema , jab tak export nahi krenge schema nahi banyega, export 
isliye use krte hai kyuki ye schema aage jaake kahi aur files me bhi use krte hai 

schema mongoDB k andar banega

here model is a method which takes 2 perameters : 
  mongoose.model(1. kya model bnau, 2. kiske basis pe model bnau)
jiske basis pe banana hai vo is se pahle vali step me basis define hai 

ye jo pahla perameter hai ki kya model bnau hamesa yehi name reference me dete  hai during calling it from special type */
export const User = mongoose.model("User", userSchema)



// in mongoDB model plural me convert ho jata hai aur pura lowercase me ho jata hai 
// jaise yha "User" convert ho jayga    "users" me



// now the 