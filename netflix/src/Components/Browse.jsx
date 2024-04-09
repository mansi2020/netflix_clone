import React, { useEffect } from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MainContainer from "./MainContainer";
import MovieContainer from "./MovieContainer";
import axios from "axios";
import { options } from "../utils/constant";
import { setNowPlayingMovies } from "./../redux/movieSlice";

import SearchMovie from "./SearchMovie";

const Browse = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.app.user);
  const toggle = useSelector((store) => store.movie.toggle);
  
  

  // protect routing
  useEffect(() => {
    if(!user){
      navigate("/");
    }
    // my custom hooks
  
  }, []);
  return (
    <div>
      <Header />
     
        
            <MainContainer />
            <MovieContainer />
         
     
     
    </div>
  );
};

export default Browse;
