import axios from "axios";
import React from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import {useDispatch, useSelector} from "react-redux"
import { API_END_POINT } from "../utils/constant";
import { setUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { setToggle } from "../redux/movieSlice";

const Header = () => {
  const user = useSelector((store)=>store.app.user);
  const toggle = useSelector((store)=>store.movie.toggle);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log(user);

  // logout
  const logoutHandler = async()=>{
    try{
      const res = await axios.get(`${API_END_POINT}/logout`);
      if(res.data.success){
        toast.success(res.data.message);
      }
      
      dispatch(setUser(null));
      navigate("https://netflix-clone-drab-pi.vercel.app/");
    }catch(error){
      console.log(error);
    }
  }

  // toggle handler serach button click
  const toggleHandler = ()=>{
      dispatch(setToggle());
  }
  return (
    <div className="w-[100%] flex items-center justify-between bg-gradient-to-b from-black px-6 py-2 absolute z-10">
      <img
        className="w-48"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png"
        alt="logo"
      />

      {user && (
        <div className="flex items-center">
          <IoIosArrowDropdown size="24px" color="white" />
          <h1 className="font-medium text-lg text-white">{user.fullName}</h1>
          <div className="ml-4">
            <button className="bg-red-800 text-white py-2 px-4 cursor-pointer" onClick={logoutHandler}>Logout</button>
            <button className="bg-red-800 text-white py-2 px-4 ml-2 cursor-pointer" onClick={toggleHandler}>
              {toggle? "Home":"Search Movie"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
