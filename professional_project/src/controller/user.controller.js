import { asynchandler } from "../utils/asynchandler.js";
import {apiError} from '../utils/apierror.js'
import {User} from '../models/user.model.js'

const registerUser = asynchandler( async (req,res) => {
    // Register user 

    // get user details from user
    // validation =>if check username empty,check email not empty, and so on 
    // check if your already exists => username, email
    //  check for image , check for avatar
    // if image and avatar exist then upload cloudinary
    // create user object  => create in DB
    // remove password and refresh token field from response
    // check for user creation
    // 


    // step 1 => user detail
    const {username, email, fullname, password} =  req.body
    console.log(username);

    // step 2 => validation check if username, eamil is emtry or  not 
    // if(username === ""){
    //     throw new apiError(400, 'fullname is required')
    // }

    // step 2 => validation check if username, eamil is emtry or  not 
    // 2nd if condition  like that

    if(
        [username,email,fullname,password].some((field) => 
        field?.trim()=== '')   
    ){
        throw new apiError(400, 'all fields are required')
    }

    // 3rd step => check if your already exists
    const existedUser = User.findOne({
        $or : [{ username }, { email }] //check the $or operator is more then two condtion is true
    })
    if(existedUser){
        throw new apiError(409, 'Username and email already Existed')
    }


    
})

export {registerUser}