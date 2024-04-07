import React from 'react';
import MovieList from './MovieList';
import {useSelector} from "react-redux"


const MovieContainer = () => {
  const movie= useSelector(store => store.movie);
  // console.log("movie container",movie.popularMovies);
  return (
    <div className='bg-black text-white'>
      <div  className='-mt-52 relative z-10'>

      <MovieList title={"Popular Movie"} movies={movie.popularMovies}/>
      <MovieList title={"Now Playing Movie"} movies={movie.nowplayingMovies}/>
      <MovieList title={"Top Rated Movies"} movies={movie.topRatedMovies}/>
      <MovieList title={"Upcoming Movies"} movies={movie.upcomingMovies}/>
      </div>
    </div>
  );
}

export default MovieContainer;
