import dotenv from 'dotenv';
import DB_connect from './db/index.js';
import { app } from './app.js';

dotenv.config({
    path : './env'
})

DB_connect()

.then( ()=>{
    app.listen(process.env.PORT || 8000 , ()=>{
    console.log(`server is running ar port : , ${process.env.PORT}`);
    
    })
})
.catch( (error) =>{
    console.log(`Mangodb connection failed !!!!`, error);
    
})













/*
import express from 'express';
const app = express();
(async () =>{
    try {
       await mongoose.connect(`${process.env.MONGODB_URL}/${DB_name}`)
       app.on('error' ,  (error) => {
        console.log("ERRR :", error);
        throw error
       })

       app.listen(process.env.PORT, () => {
        console.log(`App is listening on port :,${process.env.PORT} `);
        
       })
    } catch (error) {
        console.error("Error :", error);
        throw error;
        
    }
})();

*/