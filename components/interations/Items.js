import React, { useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';

// Render a YouTube video player

const Items = ({ title, description, id }) => {
  const playerRef = useRef(null);
  useEffect(() => {}, []);
  return (
    <div className='flex items-center'>
      <div className={`${id % 2 === 0 ? 'order-2' : 'order-1'} flex-1`}>
        <h1 className='text-2xl mb-4'>{title}</h1>
        <p>{description}</p>
      </div>
      <div className={`${id % 2 === 0 ? 'order-1' : 'order-2'}`}>
        <video
          ref={playerRef}
          autoPlay
          src={require('./gif/lynktown/2.mp4')}
          className='w-full'
        />
        {/* <ReactPlayer url='./gif/lynktown/1.mp4' width='100px' height='100px' /> */}
      </div>
    </div>
  );
};

export default Items;
