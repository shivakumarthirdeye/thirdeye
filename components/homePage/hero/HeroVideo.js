import { useRef } from 'react';
import { VioletLeft } from '../../common/ShadeSVGs';

const HeroVideo = () => {
  const videoRef = useRef(null);

  const handlePlay = () => {
    console.log('🚀 ~ file: HeroVideo.js:6 ~ HeroVideo ~ videoRef', videoRef);
    videoRef.current.play();
  };

  return (
    <div className='px-4'>
      <div className=' z-10  relative container mx-auto h-[200px] sm:h-[65vw]  lg:h-[665px] w-full rounded-md mt-10 sm:mt-56  '>
        <div>
          <video
            ref={videoRef}
            src='/assets/videos/home.webm'
            poster='/assets/videos/home-poster.jpeg'
            className='h-[200px] sm:h-[65vw]  lg:h-[665px] w-full'
          ></video>
          <button
            onClick={handlePlay}
            className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'
          >
            <svg
              width='161'
              height='161'
              viewBox='0 0 161 161'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <circle
                cx='80.5'
                cy='80.5'
                r='80.5'
                fill='black'
                fillOpacity='0.3'
              />
              <path
                d='M114 75.8039C118 78.1133 118 83.8868 114 86.1962L61.5 116.507C57.5 118.816 52.5 115.93 52.5 111.311L52.5 50.6891C52.5 46.0703 57.5 43.1836 61.5 45.493L114 75.8039Z'
                fill='white'
              />
            </svg>
          </button>
        </div>
        <div className='absolute top-[80%] left-0 z-[-10]'>
          <VioletLeft />
        </div>
      </div>
    </div>
  );
};

export default HeroVideo;
