import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({
    path: "../.env"
})

const databaseConnection = ()=>{
   
        mongoose.connect("mongodb+srv://sorathiyamansi11:netflixapp@cluster0.ewrjagq.mongodb.net/").then(()=>{
            console.log("mongodb connected succesfully");
        }).catch((error)=>{
            console.log(error);
        })
    
}

export default databaseConnection;