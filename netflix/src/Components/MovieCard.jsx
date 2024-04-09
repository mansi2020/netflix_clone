import React from 'react'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-52 pr-2'>
      <img  src={posterPath} alt='movie-banner'/>
    </div>
  )
}

export default MovieCard
