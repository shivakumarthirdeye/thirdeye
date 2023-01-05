import React from 'react';
import { HiCheck } from 'react-icons/hi';

const PricingItem = ({ item }) => {
  const { id, name, price, highlight, features } = item;
  return (
    <div
      className=' min-w-[300px] relative max-w-sm rounded-3xl flex-1  bg-white p-12'
      style={{
        background: highlight
          ? `linear-gradient(90deg, #3545D1 -12.57%, #31A4C9 100%)`
          : '#fff',
        border: !highlight ? '1px solid #0067BF' : '',
      }}
    >
      <div
        className={`${
          highlight ? 'bg-[#fff]' : 'bg-[#F4F4F4]'
        } rounded-md text-center py-6`}
      >
        <h1 className='text-blue text-3xl font-medium'>{name}</h1>
        <h2 className='text-[44px] font-bold '>{price}</h2>
      </div>
      <div className='my-5'>
        {features.map((feature, idx) => {
          return (
            <div
              key={idx}
              className={`${
                highlight ? 'text-white' : 'text-[#373737]'
              } text-lg mb-3 font-bold flex items-center space-x-2`}
            >
              <div>
                <HiCheck />
              </div>
              <h3>{feature}</h3>
            </div>
          );
        })}
      </div>
      {highlight && (
        <div className='absolute bottom-0 left-1'>
          <svg
            width='374'
            height='402'
            viewBox='0 0 374 402'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle cx='336' cy='336' r='336' fill='white' fillOpacity='0.08' />
          </svg>
        </div>
      )}
    </div>
  );
};

export default PricingItem;
