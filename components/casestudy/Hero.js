import React from 'react';

const Hero = ({ heading, platform, industry, domain, classes, devDetails }) => {
  return (
    <section
      className={`container  my-10 md:my-14  lg:my-20 mx-auto px-4 ${classes}`}
    >
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
    </section>
  );
};

export default Hero;
