// import {User} from "../models/userModel.js"; 
// import bcryptjs from "bcryptjs";
// import jwt from "jsonwebtoken"

const User = require("../models/userModel"); 
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

// for login existing user
 const Login = async(req,res)=>{
    try{
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(401).json({
                message: "Invalid Data",
                success:false
            })
        };

        const user = await User.findOne({email});
        if(!User){
            return res.status(401).json({
                message: "Invalid email or password",
                success:false
            })
        }

        // match hashed password and our normal text
        const isMatch = await bcryptjs.compare(password,user.password);
        if(!isMatch){
            return res.status(401).json({
                message: "Invalid email or password",
                success:false
            })
        }   

        const tokenData = {
            id:user._id
        }

        const token = await jwt.sign(tokenData,"jndfjnfnfkmdkfmfvd",{expiresIn:"1d"});
        return res.status(200).cookie("token",token,{httpOnly:true}).json({
            message: `Welcome Back ${user.fullName}`,
            user,
                success:true
        });
    }catch(error){
        console.log(error);
    }
}

// for logout
 const Logout = async (req,res)=>{
    return res.status(200).cookie("token","",{expiresIn:new Date(Date.now()),httpOnly:true}).json({
        message:"User logged out succesfully.",
        success:true
    })
}

// for register new user
 const Register = async (req,res)=>{
    try{
        const {fullName,email,password} = req.body;
        if(!fullName || !email || !password){
            return res.status(401).json({
                message: "Invalid Data",
                success:false
            })
        }

        const user = await User.findOne({email});
        if(user){
            return res.status(401).json({
                message:"This email is already used",
                success:false
            })
        } 

        const hashedPassword = await bcryptjs.hash(password,16);
        await User.create({
            fullName,
            email,
            password:hashedPassword
        })

        return res.status(201).json({
            message:"Account created Successfully.",
            success:true
        })
    }catch(error){
        console.log(error);
    }
}

module.exports = { Register,Login,Logout }