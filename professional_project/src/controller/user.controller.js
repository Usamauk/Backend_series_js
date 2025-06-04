import { asynchandler } from "../utils/asynchandler.js";
import {apiError} from '../utils/apierror.js'
import {User} from '../models/user.model.js'
import {uploadOnCloudinary} from '../utils/cloudnaryupload.js'
import {Apiresponse} from '../utils/apiresponse.js'

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
    // retrun res =>res mean response


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

    // 4th step => Check image and avatar

    const AvatarlocalPath = req.files?.avatar[0]?.path;
    const CoverImagelocalPath =  req.files?.coverImage[0]?.path;

    if (!AvatarlocalPath) {
        throw new apiError(400, "Avator file is required")
    }

    if (!CoverImagelocalPath) {
        throw new apiError(400,"Cover file is required")
    }

    // step 05 => if image and avatar exist then upload cloudinary
    const avatar = await uploadOnCloudinary(AvatarlocalPath);
    const coverImage = await uploadOnCloudinary(CoverImagelocalPath);

    if (!avatar) {
        throw new apiError(400, "Avator file is required")
    }

    if (!coverImage) {
        throw new apiError(400,"Cover file is required")
    }

    // step 6 =>  create user object  => create in DB

    const user = await User.create({
        fullname,
        avatar : avatar.url,
        coverImage: coverImage?.url || "",
        email,
        password,
        username: username.toLowerCase()

    })

     
    // step 06 remove password and refresh token field from response

    const createduser = await user.findById(user._id).select(
        "-password -RefreshToken"
    );

    // step 07 check for user creation in database

    if (!createduser) {
        throw new apiError(500, 'something went wrong while regestring a user')
    }

    return res.status(201).json(
        new Apiresponse(200, createduser , " user Registered successfully")
    )

    
})

export {registerUser}