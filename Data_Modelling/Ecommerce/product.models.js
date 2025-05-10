import mongoose from "mongoose";
const schemaProduct = new mongoose.Schema({
    description : {
        required : true , 
        type : string
    },
    name : {
        required : true,
        type: string
    },
    productImage : {
        type : string,
        
    },
    price : {
        type: Number,
        default: 0
    },

    stock : {
        type: Number,
        default : 0
    },

    category : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "userCategory",
        required : true,
    },

    owner : {
        type : mongoose.Schema.Types.ObjectId , 
        ref : 'User'
    }



}, {timestamps : true});


export const product = mongoose.model("Product" , schemaProduct);
