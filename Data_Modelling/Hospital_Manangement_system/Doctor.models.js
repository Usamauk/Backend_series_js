import mongoose from "mongoose";
const doctorschema = new mongoose.Schema({
    name: {
        type: String,
        required : true,
    },
    salery : {
        type: String,
        required: true
    },
    qualification : {
        type : String,
        required : true
    },
    experienced : {
        type: Number,
        default: 0
    },
    worksinhospitals : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'hospitalmodel'
    }
} , {timestamps:true});

export const doctormodel = mongoose.model("doctormodel", doctorschema);