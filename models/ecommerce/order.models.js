//step 1 import mongoose
import mongoose from "mongoose"

//step 2 create schema using new keyword

const orderSchema = new mongoose.Schema({
    orderPrice: {
        type: Number,
        required: true
    },
    customer: {
        type: mongoose.Schema.Types.OrderId,
        ref: "User"
    },
    quantity:{
        type:Number,
        required:true
    },
    status: {
        type: String,
        enum: ["PENDING", "CANCELLED", "DELIVERED"],
        default: "PENDING"
    }
}, { timestamps: true })


//step 3 export

export const Order = mongoose.Schema("Order", orderSchema)
