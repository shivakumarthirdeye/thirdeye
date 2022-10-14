import React from 'react';

const ServicesProcess = ({ works }) => {
  return (
    <div className='container mx-auto  px-4'>
      {works.map(item => {
        const { id, icon, title, description } = item;

        return (
          <div key={id} className='grid gap-5 my-10 lg:my-20'>
            {' '}
            {icon}
            <h1 className='text-2xl md:text-4xl lg:text-[40px] font-medium'>
              {title}
            </h1>
            <p className='md:text-lg lg:text-xl text-black text-opacity-80'>
              {description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default ServicesProcess;
