import mongoose , {Schema} from "mongoose";
const userschema = new Schema({
    username : {
        type : string,
        required : true,
        unique : true,
        trim : true,
        index: true
    },

    email : {
        type : string,
        required : true,
        unique : true,
        trim : true
    },

    mail : {
        type : string,
        required : true,
        trim : true,
        index: true
    },
    avater : {
        type : string,   //cloudnary url
        required : true,
    },

    cover_img : {
        required : true,
        unique : true,
        trim : true
    },


})

export const user = mongoose.Model("user",userschema);
