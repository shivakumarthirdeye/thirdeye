import React from 'react';

const Hero = ({ heading, platform, industry, domain, classes, devDetails }) => {
  return (
    <section
      className={`container my-10 md:my-14  lg:my-20 mx-auto px-4 ${classes}`}
    >
      <h1 className='heading'>{heading}</h1>
      <div className='flex gap-14 gap-y-6 md:gap-5 flex-wrap md:grid grid-cols-[auto_auto_auto] max-w-4xl my-6'>
        {devDetails.map(item => {
          const { id, title, value } = item;
          return (
            <div key={id}>
              <h4>{title}</h4>
              <h1 className='text-3xl'>{value}</h1>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Hero;
