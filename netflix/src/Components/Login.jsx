import React, { useState } from "react";
import Header from "./Header";
import axios from "axios";
import { API_END_POINT } from "../utils/constant";
import toast from 'react-hot-toast';
import {useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch =  useDispatch();

  const loginHandler = () => {
    setIsLogin(!isLogin);
  };
  // get form data
  const getInputData = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (isLogin) {
      //login
      try {
        const res = await axios.post(`https://netflix-clone-2-7q5p.onrender.com/api/v1/user/login`, {
          email,
          password,
        },{headers:{"Content-Type":"application/json"},
        withCredentials:true});
        if(res.data.success){
          toast.success(res.data.message);
          setLoading(false);
        }
        console.log(res.data.user);
        dispatch(setUser(res.data.user));
        console.log("dataset",res.data.user);
        navigate("/browse");
        // console.log(res);
      } catch (error) {
        toast.error(error.response.data.message);
        setLoading(false);
        // console.log(error);
      }
    } else {
      //register network call
      try {
        const res = await axios.post(`https://netflix-clone-2-7q5p.onrender.com/api/v1/user/register`, {
          fullName,
          email,
          password,
        },{headers:{"Content-Type":"application/json"},
        withCredentials:true});
        console.log(res);
        if(res.data.success){
          toast.success(res.data.message);
          setLoading(false);
        }
        setIsLogin(true);
      } catch (error) {
        toast.error(error.response.data.message);
        setLoading(false);
        // console.log(error);
      }
    }

    setFullName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="w-full">
      <Header />
      <div className="absolute">
        <img
          className="w-[100vw] h-[100vh] bg-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="hero-img"
        />
      </div>
      <form
        onSubmit={(e) => getInputData(e)}
        className="absolute flex flex-col items-center justify-center mx-auto w-3/12 my-36 left-0 right-0 p-10 bg-black opacity-90 rounded-md"
      >
        <h1 className="mb-5 text-white font-bold text-3xl">
          {isLogin ? "Login" : "Signup"}
        </h1>
        <div className="flex flex-col">
          {!isLogin && (
            <input
              type="text"
              placeholder="Fullname"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="text-white rounded-sm outline-none bg-gray-800 p-3 my-2"
            />
          )}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-white rounded-sm outline-none bg-gray-800 p-3 my-2"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="text-white rounded-sm outline-none bg-gray-800 p-3 my-2"
          />
          <button className="bg-red-600 mt-6 p-2 text-white rounded-sm font-medium">
            {isLogin ? loading? "Loading..." : "Login" :loading?"Loading..." : "Signup"}
          </button>
          <p className="text-white mt-2">
            {isLogin ? "New to Netflix?" : "Already have an account?"}
            <span
              className="ml-1 text-blue-600 font-medium  cursor-pointer"
              onClick={loginHandler}
            >
              {isLogin ? "Signup" :"Login"}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
