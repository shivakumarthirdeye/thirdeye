import { useState } from 'react';
import { useRef } from 'react';
import { FaPause, FaPlay, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
import { VioletLeft } from '../../common/ShadeSVGs';

const HeroVideo = () => {
  const videoRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    videoRef.current.play();
  };
  const handlePause = () => {
    setIsPlaying(false);
    videoRef.current.pause();
  };

  return (
    <div className='relative'>
      <div className=' z-10 mb-10     rounded-md '>
        <div className=' container mx-auto w-full'>
          <div className='relative'>
            <video
              onEnded={e => {
                setIsPlaying(false);
              }}
              muted={isMuted}
              onChange={e => console.log(e)}
              ref={videoRef}
              src='/assets/videos/home.webm'
              poster='/assets/videos/home-poster.png'
              className=' mx-auto peer w-full'
            ></video>
            {!isPlaying && (
              <button
                onClick={handlePlay}
                className='absolute top-[50%] left-[50%] w-20 sm:w-24 md:w-32 lg:w-40 h-20 sm:h-24 md:h-32 lg:h-40 translate-x-[-50%] translate-y-[-50%]'
              >
                <div className='bg-black bg-opacity-30 flex items-center justify-center  w-full h-full rounded-full'>
                  <FaPlay className='text-3xl md:text-4xl lg:text-7xl text-white z-10' />
                </div>
              </button>
            )}
            {isPlaying && (
              <button
                onClick={handlePause}
                className='absolute hidden peer-hover:block hover:block top-[50%] left-[50%] w-20 sm:w-24 md:w-32 lg:w-40 h-20 sm:h-24 md:h-32 lg:h-40 translate-x-[-50%] translate-y-[-50%]'
              >
                <div className='bg-black bg-opacity-30 flex items-center justify-center  w-full h-full rounded-full'>
                  <FaPause className='text-3xl md:text-4xl lg:text-7xl text-white z-10' />
                </div>
              </button>
            )}
            {isPlaying && (
              <button
                onClick={() => setIsMuted(prev => !prev)}
                className='absolute hidden peer-hover:block hover:block top-8 md:top-10 right-1 md:right-[1vw] w-8 md:w-10 h-8 md:h-10 translate-x-[-50%] translate-y-[-50%]'
              >
                <div className='bg-black bg-opacity-30 flex items-center justify-center  w-full h-full rounded-full'>
                  {isMuted ? (
                    <FaVolumeMute className='text-xl md:text-2xl lg:text-3xl text-white z-10' />
                  ) : (
                    <FaVolumeUp className='text-xl md:text-2xl lg:text-3xl text-white z-10' />
                  )}
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroVideo;
