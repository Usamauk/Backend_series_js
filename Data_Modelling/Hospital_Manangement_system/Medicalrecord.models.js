import mongoose from "mongoose";
const Medicalschema = new mongoose.Schema({
    
}, {timestamps:true});


export const Medicalrecord = mongoose.model("Medicalrecord", Medicalschema);
