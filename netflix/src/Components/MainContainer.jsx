import React from 'react';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
import { useSelector } from 'react-redux';

const MainContainer = () => {
  const movie = useSelector(store=>store.movie?.nowplayingMovies);
  if(!movie){
    return; //early return in react 
  }

  // console.log("main container",movie);
  const {l,s,id} = movie[2];

  return (
    <div>
      <VideoTitle title={l} type={s}/>
      <VideoBackground movieId={id}/>
    </div>
  );
}

export default MainContainer;
