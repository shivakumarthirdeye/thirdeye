import React from 'react';
import { GreenLeft } from '../common/ShadeSVGs';
import industry1 from '/public/assets/images/industries/1.png';
import industry2 from '/public/assets/images/industries/2.png';
import industry3 from '/public/assets/images/industries/3.png';
import industry4 from '/public/assets/images/industries/4.png';
import industry5 from '/public/assets/images/industries/5.png';
import industry6 from '/public/assets/images/industries/6.png';
import industry7 from '/public/assets/images/industries/7.png';
import industry8 from '/public/assets/images/industries/8.png';

const IndustriesWeServe = () => {
  const industries = [
    {
      id: 1,
      title: 'Fintech',
      img: industry1.src,
      description: `At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? `,
    },

    {
      id: 2,
      title: 'Agritech',
      img: industry2.src,
      description: `At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? `,
    },
    {
      id: 3,
      title: 'Logistics',
      img: industry3.src,
      description: `At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? `,
    },
    {
      id: 4,
      title: 'Retail',
      img: industry4.src,
      description: `At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? `,
    },
    {
      id: 5,
      title: 'Food Tech',
      img: industry5.src,
      description: `At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? `,
    },
    {
      id: 6,
      title: 'Telecom',
      img: industry6.src,
      description: `At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? `,
    },
    {
      id: 7,
      title: 'Social Media',
      img: industry7.src,
      description: `At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? `,
    },
    {
      id: 8,
      title: 'Marketing',
      img: industry8.src,
      description: `At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? `,
    },
  ];

  return (
    <section className='relative py-28  mt-10 my-0'>
      <div className='absolute left-0 top-0 '>
        <svg
          width='361'
          height='347'
          viewBox='0 0 361 347'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g filter='url(#filter0_f_381_1494)'>
            <circle
              cx='38.5'
              cy='24.5'
              r='202.5'
              fill='#00FFE0'
              fillOpacity='0.24'
            />
          </g>
          <defs>
            <filter
              id='filter0_f_381_1494'
              x='-284'
              y='-298'
              width='645'
              height='645'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='BackgroundImageFix'
                result='shape'
              />
              <feGaussianBlur
                stdDeviation='60'
                result='effect1_foregroundBlur_381_1494'
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className='absolute right-0 bottom-0 '>
        <svg
          width='526'
          height='529'
          viewBox='0 0 526 529'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g filter='url(#filter0_f_381_1493)'>
            <circle
              cx='525.5'
              cy='525.5'
              r='150.5'
              fill='#0029FF'
              fillOpacity='0.48'
            />
          </g>
          <defs>
            <filter
              id='filter0_f_381_1493'
              x='0'
              y='0'
              width='1051'
              height='1051'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='BackgroundImageFix'
                result='shape'
              />
              <feGaussianBlur
                stdDeviation='187.5'
                result='effect1_foregroundBlur_381_1493'
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className='container mx-auto px-4 '>
        <h1 className='heading'>Industries we serve</h1>
        <div className='grid  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-10 gap-y-10 '>
          {industries.map(item => {
            const { description, id, img, title } = item;

            return (
              <div key={id} className='grid gap-3'>
                <div>
                  <img src={img} alt='' />
                </div>
                <h1 className='text-2xl font-medium text-black text-opacity-80'>
                  {' '}
                  {title}
                </h1>
                <p className='text-lg text-black text-opacity-80'>
                  {description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;
