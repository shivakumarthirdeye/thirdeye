import React from 'react';
import { HeroTextSVG } from './heroSVG';
import { GreenRight, VioletLeft } from './ShadeSVGs';

const HeroSection = ({ content, description, hero1, hero2, hero3 }) => {
  return (
    <div className=''>
      <h1 className='text-2xl sm:text-4xl md:text-5xl lg:text-7xl text-black text-opacity-80  !leading-[42px] sm:!leading-[48px] md:!leading-[70px] font-semibold lg:!leading-[87.14px] z-10'>
        {content}
      </h1>
      {description && (
        <p className='mt-3 max-w-3xl lg:mt-6 text-lg md:!leading-[35.4px]  sm:text-xl  lg:text-2xl text-black text-opacity-80'>
          {description}
        </p>
      )}
      {/* <div className='absolute  top-[25%] md:top-[75%] z-[-10] right-[-5%] lg:right-0  '>
        <HeroTextSVG />
      </div> */}
      <div className='absolute right-0 top-[-500px] z-[-10] '>
        <GreenRight />
      </div>
      <div className='absolute bottom-[-1000px] left-0 z-[-10]'>
        <VioletLeft />
      </div>
      {hero1 && (
        <div className='container h-[50vw] sm:h-[250px] md:h-[400px] lg:h-[450px]  max-w-7xl mt-[100px]  mx-auto relative '>
          <div className='absolute  sm:left-0'>
            <img
              className='max-w-[520px] w-full h-[389px] object-cover'
              src={hero1?.src}
              alt=''
            />
          </div>
          <div className='absolute left-2/4 translate-y-2/3 -translate-x-2/4'>
            <img
              className='max-w-[520px] w-full h-[389px] object-cover'
              src={hero2?.src}
              alt=''
            />
          </div>
          <div className='absolute right-0 top-0'>
            <img
              className='max-w-[520px] w-full h-[389px] object-cover'
              src={hero3?.src || hero1?.src}
              alt=''
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
