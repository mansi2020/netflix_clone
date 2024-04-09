import React from 'react';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
import { useSelector } from 'react-redux';

const MainContainer = () => {
  const movie = useSelector(store=>store.movie?.nowplayingMovies);
  

  return (
    <div>
      
      <VideoTitle/>
      <VideoBackground/>
    </div>
  );
}

export default MainContainer;
