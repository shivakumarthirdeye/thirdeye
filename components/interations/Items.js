import React, { useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';
import gif from './gif/u2/1.gif';

// Render a YouTube video player

const Items = ({ title, description, id, sub }) => {
  const playerRef = useRef(null);
  useEffect(() => {}, []);
  return (
    <div className='grid grid-cols-2 items-center'>
      <div className={`${id % 2 === 0 ? 'order-1' : 'order-2'} flex-1`}>
        <h1 className='text-6xl mb-4'>
          {title}
          <span className='text-4xl'>{sub}</span>
        </h1>
        <p className='text-2xl text-black text-opacity-60 !leading-[35.4px]'>
          {description}
        </p>
      </div>
      <div className={`${id % 2 === 0 ? 'order-2 ' : 'order-1 '}  flex-1`}>
        <img
          src={gif.src}
          alt=''
          className='object-cover max-w-[579px] rounded-[32px] mx-auto  w-full h-[675]'
        />
      </div>
    </div>
  );
};

export default Items;
