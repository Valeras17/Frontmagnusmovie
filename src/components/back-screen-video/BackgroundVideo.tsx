import React from 'react';
import YouTube from 'react-youtube';
import { useVideo } from '../../contexts/VideoContext';



const BackgroundVideo: React.FC = () => {
    const { videoUrl } = useVideo();
    const videoId = videoUrl.split('v=')[1]?.split('&')[0];
  
  const opts = {
    playerVars: {
      autoplay: 1,
      controls: 0,
      modestbranding: 1,
      loop: 1,
      playlist: videoId,
      showinfo: 0,
      mute: 1,
    },
  };

  if (!videoId) {
    return null; 
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full z-[-1] overflow-hidden">
    <div className="relative w-full h-full">
      <YouTube videoId={videoId} opts={opts} className="absolute top-0 left-0 w-full h-full" />
    </div>
  </div>
  );
};

export default BackgroundVideo;
