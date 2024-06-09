// import
import mongoose from "mongoose";

// step 2 : create schema using new key word
const productSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    productImage: {
        type: String
    },
    price: {
        type: Number,
        default: 0
    },
    stock: {
        type: Number,
        default: 0
    },
    category:{
        type: mongoose.Schema.Types.OrderId,
        ref: "Category",
        required:true
    },
    Ownership:{
        type: mongoose.Schema.Types.OrderId,
        ref:"User",
        required: true
    }

}, { timestamps: true })


//step 3 : export schema

export const Product = mongoose.Schema("Product", productSchema)