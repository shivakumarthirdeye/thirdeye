import React from 'react';
import { HeroTextSVG } from './heroSVG';
import { GreenRight } from './ShadeSVGs';

const HeroSection = ({ content, description }) => {
  return (
    <div>
      <h1 className='text-2xl sm:text-4xl md:text-5xl lg:text-7xl text-black text-opacity-80  !leading-[42px] sm:!leading-[48px] md:!leading-[70px] font-semibold lg:!leading-[87.14px] z-10'>
        {content}
      </h1>
      {description && (
        <p className='mt-3 lg:mt-6 text-lg  sm:text-xl  lg:text-2xl text-black text-opacity-80'>
          {description}
        </p>
      )}
      {/* <div className='absolute  top-[25%] md:top-[75%] z-[-10] right-[-5%] lg:right-0  '>
        <HeroTextSVG />
      </div> */}
      <div className='absolute right-0 top-[-500px] z-[-10] '>
        <GreenRight />
      </div>
    </div>
  );
};

export default HeroSection;
