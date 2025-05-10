import mongoose from "mongoose";
const orderItems  = mongoose.Schema({
    productId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "product"
    },
    quantity : {
        type : Number,
        required : true
    },
})
const orderschema = new mongoose.Schema({
    orderprice : {
        type: Number,
        required : true
    },
    customer : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User" 
    },
    odertItems : {
        type : [orderItems]
    },
    address : {
        type : String,
        required: true
    },
    status: {
        type: String,
        enum : ["PENDING","CANCELLED","DELEIVERED"],
        default : "PENDING"
    },

} , {timestamps : true});


export const order = mongoose.model("order" , orderschema);