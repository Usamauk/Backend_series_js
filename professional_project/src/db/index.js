import mongoose from "mongoose";
import { DB_name } from "../constants.js";

const DB_connect = async () =>{
    try {
       const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_name}`)
       console.log(`\n  MONGODB CONNECTED !! DB HOST : ${connectionInstance.connection.host}`);
       
    } catch (error) {
        console.log("MONGODB CONNECTION FAILED :", error);
        process.exit(1);
        
    }
}

export default DB_connect;