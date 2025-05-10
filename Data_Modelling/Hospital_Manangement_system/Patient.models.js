import mongoose from "mongoose";
const patientschema = new mongoose.Schema({
    name: {
        type:String,
        required : true
    },
    diagonsedwith : {
        type: String,
        required: true
    },
    patientaddress : {
        type: String,
        required: true
    },
    age : {
        type:Number,
        required : true,
    },
    bloodgroup : {
        type: String,
        required : true,
    },
    gender : {
        type: String,
        enums : ['M','F','Other'],
        required : true
    },
    admittedin : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'hospitalmodel'
    }
} ,{timestamps:true});


export const patientmodel = mongoose.model("patientmodel",patientschema);