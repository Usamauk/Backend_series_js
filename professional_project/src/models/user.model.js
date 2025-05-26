import mongoose , {Schema} from "mongoose";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
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

    fullname : {
        type : string,
        required : true,
        trim : true,
        index: true
    },
    avater : {
        type : string,   //cloudnary url
        required : true,
    },

    coverImg : {
        type: string, // cloudnary url
        
    },
    watchHistory : 
    [
        {
        type : Schema.Types.ObjectId ,
        ref : 'videos'
        }
    ],
    password : {
        type : string,
        required : [true , "password is required"]
    },
    RefreshToken : {
        type : string,

    },
},

{
    timestamps : true
}
)

userschema.pre('save', async function(next) {
    if(!this.isModified('password')) return next();

    this.password = bcrypt.hash(this.password , 10)
    next()
});

userschema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password,this.password)
}
userschema.methods.generateAccessToken = async function () {
    return jwt.sign({
        _id: this._id,
        email: this.email,
        username : this.username,
        fullname : this.fullname

    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn : process.env.ACCESS_TOKEN_EXPIRY
    }
)
}
userschema.methods.generateRefreshToken = async function () {
    return jwt.sign({
        _id: this._id,
        email: this.email,
        username : this.username,
        fullname : this.fullname

    },
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn : process.env.REFRESH_TOKEN_EXPIRY
    }
)}

export const user = mongoose.Model("user",userschema);
