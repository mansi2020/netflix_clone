// import mongoose from "mongoose";
// import dotenv from "dotenv";

const mongoose = require("mongoose");
const dotenv = require("dotenv");

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

module.exports =  databaseConnection;