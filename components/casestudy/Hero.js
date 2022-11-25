import React from 'react';

const Hero = ({ heading, platform, industry, domain, classes, devDetails }) => {
  return (
    <section
      className={`container my-10 md:my-14  lg:my-20 mx-auto px-4 ${classes}`}
    >
      <h1 className='heading'>{heading}</h1>
      <div className='flex  gap-y-6 gap-8 lg:gap-12 flex-wrap md:flex-nowrap  max-w-6xl my-6'>
        {devDetails.map(item => {
          const { id, title, value } = item;
          return (
            <div key={id}>
              <h4 className='text-sm md:text-base text-black text-opacity-80'>
                {title}
              </h4>
              <h1 className=' text-xl md:text-2xl lg:text-3xl'>{value}</h1>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Hero;
