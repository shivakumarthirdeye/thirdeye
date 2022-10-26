import Link from 'next/link';
import React from 'react';

const Item = ({ item }) => {
  const { description, id, title, to } = item;

  return (
    <div
      key={id}
      className='bg-white mb-5 md:mb-7 max-w-[402px] w-full p-6 rounded-xl text-black'
    >
      <h1 className='text-lg md:text-2xl text-black text-opacity-80 font-semibold'>
        {title}
      </h1>
      <p className='py-4 text-sm text-opacity-60 text-black font-medium'>
        {description}
      </p>
      <div className='md:pt-5'>
        <Link href={to}>
          <a className='text-sm md:text-base text-[#31A2CA]'>
            <span className=' relative'>Learn more</span> &nbsp; {'->'}
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Item;
