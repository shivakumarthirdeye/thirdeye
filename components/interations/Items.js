import React, { useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';
import gif from './gif/u2/1.gif';

// Render a YouTube video player

const Items = ({ title, description, id, sub, video }) => {
  const playerRef = useRef(null);
  useEffect(() => {}, []);
  return (
    <div className='grid lg:grid-cols-2 gap-10  items-center px-4'>
      <div
        className={`${id % 2 === 0 ? 'lg:order-1' : 'lg:order-2'} mt-10 lg:mt-0
         flex-1`}
      >
        <h1 className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl mb-4'>
          {title}
          <span className='text-xl sm:text-2xl md:text-3xl lg:text-4xl'>
            {sub}
          </span>
        </h1>
        <p className='sm:text-lg md:text-xl lg:text-2xl text-black text-opacity-60 !leading-[35.4px]'>
          {description}
        </p>
      </div>
      <div
        className={`${
          id % 2 === 0 ? 'lg:order-2 ' : 'lg:order-1 '
        }  items-center mx-auto justify-center flex-1`}
      >
        <video src={video} autoPlay loop muted></video>
        {/* <img
          src={gif.src}
          alt=''
          className='object-cover max-w-[579px] rounded-[32px] mx-auto  w-full h-[675]'
        /> */}
      </div>
    </div>
  );
};

export default Items;
