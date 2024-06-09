import mongoose from "mongoose";
const todoSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    complete: {
        type: Boolean,
        default: false,
    },
    /*
    abhi yaha created by ka relation hamare user k sath  hai toh , toh jab kabhi bhi
    hamare database me pde kisi bhi model ka hame relation chahihe toh 
    2 chijo ka dhyan rakhe :
        1.this is special type 
        2.reference   
    */
    createdBy: {
        // ye special type hai aise hi likha jata hai , 
        // ab mongoose ko pta chal gya ki aap kisi na kisi model ka   "reference " ise dena chahte hai
        type: mongoose.Schema.Types.ObjectId,

        ref: "User"


    },
    
    subtodos:[
        {
          type:mongoose.Schema.Types.OrderId,
          ref: "Sub_todo"  
        }
    ]

},
    {
        timestamps: true
    }
)

export const Todo = mongoose.model(Todo, todoSchema)

