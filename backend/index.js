//step-1 server create
const express = require("express");
const dotenv =require("dotenv") ;
const databaseConnection =require("./utils/database.js");
const cookieParser =require("cookie-parser"); 
const userRoute =require("./routes/userRoute.js");
const cors =require( "cors");

// import express from "express";
// import dotenv from "dotenv";
// import databaseConnection from "./utils/database.js"
// import cookieParser from "cookie-parser";
// import userRoute from "./routes/userRoute.js"
// import cors from "cors";

databaseConnection();

dotenv.config({
    path:".env" 
})

const app = express();

//middlewares
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());
const corsOptions ={
    origin:"http://localhost:3000",
    credentials:true

}
app.use(cors(corsOptions));

// api
app.use("/api/v1/user",userRoute);


app.listen(process.env.PORT,()=>{
    console.log(`server losten hello ${process.env.PORT}`);
})