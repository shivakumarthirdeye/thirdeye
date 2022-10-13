import React from 'react';
import { HeroTextSVG } from './heroSVG';
import { GreenRight } from './ShadeSVGs';

const HeroSection = ({ content }) => {
  return (
    <div>
      <h1 className='text-5xl lg:text-7xl text-black text-opacity-80 font-light leading-[70px] lg:leading-[87.14px] z-10'>
        {content}
      </h1>
      <div className='absolute top-[80%] md:top-[75%] z-[-10] right-[-5%] lg:right-0  '>
        <HeroTextSVG />
      </div>
      <div className='absolute right-0 top-[-500px] z-[-10] '>
        <GreenRight />
      </div>
    </div>
  );
};

export default HeroSection;
