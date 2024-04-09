import React, { useEffect } from 'react';
import MovieList from './MovieList';
import {useSelector,useDispatch} from "react-redux";
import { options } from './../utils/constant';
import { setPopularMovies,setNowPlayingMovies,setTopRatedMovies,setUpcomingMovies } from '../redux/movieSlice';
import axios  from "axios";
import MainContainer from './MainContainer';


const MovieContainer = () => {
  const movie= useSelector(store => store.movie);
  const dispatch = useDispatch();
  
useEffect(async()=>{
  try {
    const response = await axios.request(options);
    dispatch(setPopularMovies(response.data.splice(0,20)));
    dispatch(setUpcomingMovies(response.data.splice(21,20)));
    dispatch(setNowPlayingMovies(response.data.splice(41,20)));
    dispatch(setTopRatedMovies(response.data.splice(31,20)));
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
},[])
  return (
    <>
    <div className='bg-black text-white'>
      <div  className='-mt-52 relative z-10'>

      <MovieList title={"Popular Movie"} movies={movie.popularMovies}/>
      <MovieList title={"Now Playing Movie"} movies={movie.nowplayingMovies}/>
      <MovieList title={"Top Rated Movies"} movies={movie.topRatedMovies}/>
      <MovieList title={"Upcoming Movies"} movies={movie.upcomingMovies}/>
      </div>
    </div>
    </>
    
  );
}

export default MovieContainer;
