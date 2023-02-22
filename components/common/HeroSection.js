import React from 'react';
import { HeroTextSVG } from './heroSVG';
import { GreenRight, VioletLeft } from './ShadeSVGs';

const HeroSection = ({
  content,
  description,
  hero1,
  hero2,
  hero3,
  smallDescription,
}) => {
  return (
    <div className=''>
      <h1 className='text-2xl sm:text-4xl lg:text-5xl xl:text-7xl text-black text-opacity-80  sm:!leading-[48px] lg:!leading-[70px] max-w-[303px] sm:max-w-4xl xl:!leading-[87.14px] z-10'>
        {content}
      </h1>
      {description && (
        <p className='mt-3 max-w-3xl xl:mt-6 text-xl lg:!leading-[35.4px]  sm:text-xl  xl:text-2xl text-black text-opacity-80'>
          {description}
        </p>
      )}
      <div className='absolute top-[-5%]   sm:top-[5%] md:top-[20%] lg:top-[71%] z-[-10] right-[-5%] xl:right-[2%]  '>
        <HeroTextSVG />
      </div>
      <div className='absolute right-0 top-[-200px] sm:top-[-500px] z-[-10] '>
        <GreenRight />
      </div>
      <div className='absolute bottom-[-150px] sm:bottom-[-1350px] left-0 z-[-10]'>
        <VioletLeft />
      </div>
      <div className='hidden lg:block'>
        {hero1 && (
          <div className='container h-[50vw] sm:h-[400px] lg:h-[480px] xl:h-[600px] mt-10  max-w-7xl mb-[10px]  lg:mt-[100px]  mx-auto relative '>
            <div className='absolute  sm:left-0'>
              <img
                loading='lazy'
                className=' min-w-[120px] max-w-[33vw] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[400px] xl:max-w-[520px] xl:min-w-[520px] w-full   xl:h-[389px] object-cover'
                src={hero1?.src}
                alt=''
              />
            </div>
            <div className='absolute left-2/4 translate-y-2/3 -translate-x-2/4'>
              <img
                loading='lazy'
                className='min-w-[120px] max-w-[33vw] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[400px] xl:max-w-[520px] xl:min-w-[520px] w-full   xl:h-[389px]  object-cover'
                src={hero2?.src}
                alt=''
              />
            </div>
            <div className='absolute right-0 top-0'>
              <img
                loading='lazy'
                className='min-w-[120px] max-w-[33vw] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[400px] xl:max-w-[520px] xl:min-w-[520px] w-full   xl:h-[389px]  object-cover'
                src={hero3?.src || hero1?.src}
                alt=''
              />
            </div>
          </div>
        )}
      </div>
      {hero2?.src && (
        <div className='block lg:hidden'>
          <div className='flex justify-center items-center my-10'>
            <img
              loading='lazy'
              className=' max-h-[80vw] object-cover'
              src={hero2?.src}
              alt=''
            />
          </div>
        </div>
      )}
      {smallDescription && (
        <div className=' mt-14 lg:mt-56 xl:mt-28  max-w-[954px] my-10  '>
          <h3 className='lg:mt-6 text-lg  sm:text-xl lg:text-2xl xl:text-[36px] font-light xl:leading-[135%] text-black text-opacity-80'>
            {smallDescription}
          </h3>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
