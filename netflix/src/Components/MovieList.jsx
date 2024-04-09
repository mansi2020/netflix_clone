import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies}) => {
  // console.log(movies.image);
  return (
    <div className="px-8">
      <h1 className="text-3xl text-white mt-8">{title}</h1>
      <div className="overflow-x-auto cursor-pointer flex no-scrollbar">
        <div className="flex items-center">
          {movies?.map((movie) => {
            return <MovieCard key={movie.imdbid} posterPath = {movie.image}/>;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
