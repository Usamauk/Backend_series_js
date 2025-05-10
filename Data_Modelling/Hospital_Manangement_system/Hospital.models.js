import mongoose from "mongoose";
const hospitalschema = new mongoose.Schema({
    name:{
        type:String,
        required : true
    },
    address1:{
        type:String,
        
    },
    address2:{
        type:String,
        required : true
    },
    city : {
        type: String,
        required: true
    },
    pincode : {
        type:String,
        required: true
    },
    speclization : 
    [
        {
        type:String,
        }
    ]

} , {timestamps:true});


export const hospitalmodel = mongoose.model("hospitalmodel",hospitalschema);