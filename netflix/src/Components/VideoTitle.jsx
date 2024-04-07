import React from 'react';
import { CiPlay1 } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";

const VideoTitle = ({title,type}) => {
  return (
    <div className='absolute text-white pt-[18%] p-12 w-screen'>
      <h1 className='text-3xl font-bold'>{title}</h1>
      <p className='w-1/2 mt-4'>"Friends" is a beloved sitcom that follows the lives of six friends—Rachel, Ross, Monica, Chandler, Joey, and Phoebe—in Manhattan. Focused on friendship, love, and humor, it explores their adventures, relationships, and personal growth.</p>
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
