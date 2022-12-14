import React from 'react';

const ClientReview = ({ review }) => {
  return (
    <section className='my-10 container mx-auto px-4'>
      <div>
        <h2 className='text-sm md:text-base  text-black text-opacity-80'>
          {' '}
          Client Review
        </h2>
        <h1 className='max-w-[1030px] text-black text-opacity-80 sm:text-3xl md:text-4xl lg:text-5xl my-1 md:my-5'>
          &quot;{review}&quot;
        </h1>
      </div>
    </section>
  );
};

export default ClientReview;

const Points = ({ id, title, description }) => {
  return (
    <div className='text-black text-opacity-80'>
      <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl '>0{id}</h1>

      <div className='w-[90%] h-[2px] my-2 bg-black bg-opacity-80 ' />
      <div className='mt-5'>
        <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl'>{title}</h1>
        <p className='text-black mt-3  text-xl lg:text-2xl text-opacity-90'>
          {description}
        </p>
      </div>
    </div>
  );
};
