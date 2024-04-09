import React, { useEffect } from "react";
import axios from "axios";

const VideoBackground = () => {
  
  return (
    <div className="w-screen overflow-x-hidden">
      
      <iframe
      className="w-screen aspect-video"
        src="https://www.youtube.com/embed/7PIji8OubXU?si=cGDYgr13B49DIgyc&autoplay=1&mute=1"
        title="YouTube video player"
        frameborder="0"
        allowfullscreen
      ></iframe>
      
    </div>
  );
};

export default VideoBackground;
