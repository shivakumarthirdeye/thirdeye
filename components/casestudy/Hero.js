import React from 'react';
import { GreenRight, VioletLeft } from '../common/ShadeSVGs';

const Hero = ({ heading, platform, industry, domain, classes, devDetails }) => {
  return (
    <section className={` my-10 md:my-14  lg:my-20  px-4 ${classes}`}>
      <div className='absolute right-0 top-[-100px] sm:top-[-350px] z-[-10] '>
        <GreenRight />
      </div>
      <div className='absolute bottom-[520px] sm:bottom-[-1350px] left-0 z-[-10]'>
        <VioletLeft />
      </div>
      <div className='container mx-auto '>
        <h1 className='caseStudyHeading'>{heading}</h1>
        <div className='flex  gap-y-6 gap-8 lg:gap-12 flex-wrap md:flex-nowrap  max-w-6xl my-6'>
          {devDetails.map(item => {
            const { id, title, value } = item;
            return (
              <div key={id}>
                <h4 className='text-sm md:text-base text-purple lg:text-xl xl:text-2xl '>
                  {title}
                </h4>
                <h1 className='mt-2 text-xl md:text-2xl lg:text-3xl xl:text-[32px]'>
                  {value}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
