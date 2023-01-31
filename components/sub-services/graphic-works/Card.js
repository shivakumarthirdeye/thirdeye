import React from 'react';

const Card = ({ item }) => {
  const { name, img, bg, id, description } = item;
  return (
    <div className='flex flex-col md:flex-row my-20 gap-10 items-center justify-center max-w-6xl mx-auto'>
      <div className={`${id % 2 === 0 ? 'md:order-2  ' : ''}   flex-1 flex `}>
        <div
          className=' rounded-[32px] w-full  p-5 md:p-8 lg:p-12 flex justify-center items-center'
          style={{
            background: bg,
          }}
        >
          <img
            className='max-w-[455px] w-full rounded-2xl'
            src={img.src}
            alt={name}
          />
        </div>
      </div>
      <div className='flex-1'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-[54px]'>
          {name}
        </h1>
        <p className='mt-4 md:mt-8 text-lg sm:text-xl lg:text-2xl text-black text-opacity-80'>
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
