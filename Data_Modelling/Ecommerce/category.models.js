import mongoose from "mongoose";
const schemaCategory = new mongoose.Schema({
    name : {
        type : String,
        required : true
    }
},{timestamps : true});


export const userCategory = mongoose.model("userCategory" , schemaCategory);
