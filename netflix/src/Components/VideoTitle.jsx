import React from 'react';
import { CiPlay1 } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";

const VideoTitle = ({title,type}) => {
  return (
    <div className='absolute text-white pt-[18%] p-12 w-screen'>
      <h1 className='text-3xl font-bold'>The Revenant</h1>
      <p className='w-1/2 mt-4'>"The Revenant" is a visually stunning survival tale set in the 1820s American wilderness. Leonardo DiCaprio's portrayal of Hugh Glass, a frontiersman seeking revenge after being left for dead, is riveting. The film's breathtaking cinematography and raw exploration of human resilience against nature's brutality make it a captivating viewing experience."</p>
      <div className='mt-8 flex'>
        <button className='flex items-center px-6 py-2 bg-white text-black rounded-md hover:bg-opacity-80'>
          <CiPlay1 size="24px"/>
          <span className='ml-1'>Play</span>
          </button>
        <button className='px-6 py-2 bg-gray-400 bg-opacity-50 text-black rounded-md flex items-center mx-2'>
          <CiCircleInfo size="24px"/><span className='ml-1'>Watch more</span></button>
      </div>
    </div>
  );
}

export default VideoTitle;
