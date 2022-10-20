import Link from 'next/link';
import React, { useEffect } from 'react';
import { PenSVG } from './SVGs';
import gsap, { Bounce, Power3 } from 'gsap';

import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const subDesign = [
  {
    id: 1,
    title: 'UX Design',
    description: `At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? Or perhaps your goal is simply to generate more leads for your products and services? Whatever actions you're targeting, Third Eye can help.`,
    to: '/design/ux-design',
  },
  {
    id: 2,
    title: 'UI Design',
    description: `At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? Or perhaps your goal is simply to generate more leads for your products and services? Whatever actions you're targeting, Third Eye can help.`,
    to: '/design/ui-design',
  },
  {
    id: 3,
    title: 'Illustrations',
    description: `At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? Or perhaps your goal is simply to generate more leads for your products and services? Whatever actions you're targeting, Third Eye can help.`,
    to: '/design/illustrations',
  },
  {
    id: 4,
    title: 'Marketing',
    description: `At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? Or perhaps your goal is simply to generate more leads for your products and services? Whatever actions you're targeting, Third Eye can help.`,
    to: '/design/marketing',
  },
];

const Design = () => {
  useEffect(() => {
    const container = document.getElementById('design-container');
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top 0%',
        end: '1500px',
        pin: true,
        scrub: true,
        markers: {
          startColor: '#ff0000',
          endColor: 'green',
        },
      },
    });

    scrollTl.from(
      '#design-items',
      {
        x: 0,
      },
      {
        x: 1000,
      }
    );
  }, []);

  return (
    <div
      id='design-container'
      style={{
        background: ` linear-gradient(42.36deg, #7CE7FF 1.63%, #3E4FA8 100%), #FFFFFF`,
      }}
    >
      {/* <div className='absolute bottom-0'>
        <PenSVG />
      </div> */}
      <div className='container mx-auto py-20 text-white'>
        <h1 className='heading !text-white'>Our Capabilities</h1>
        <div
          id='#design-pin'
          className=' max-w-3xl justify-items-end  mx-auto my-20 grid grid-cols-[auto_1fr] relative h-screen'
        >
          <div className='text-right '>
            <h2 className='text-5xl pb-4'>Design</h2>
            <Link href='/design'>
              <a className='text-right text-lg '>
                <span className=' relative'>
                  Learn more{' '}
                  <div className='w-full absolute bottom-0  bg-white h-[2px] left-0'></div>{' '}
                </span>{' '}
                {'->'}{' '}
              </a>
            </Link>
          </div>
          <div id='design-item' className=''>
            {subDesign.map(item => {
              const { description, id, title, to } = item;
              return (
                <div
                  key={id}
                  className='bg-white mb-7 max-w-[402px] w-full p-6 rounded-xl text-black'
                >
                  <h1 className='text-2xl text-black text-opacity-80 font-semibold'>
                    {title}
                  </h1>
                  <p className='py-4 text-sm text-opacity-60 text-black font-medium'>
                    {description}
                  </p>
                  <div className='pt-5'>
                    <Link href={to}>
                      <a className='text-[#31A2CA]'>
                        <span className=' relative'>Learn more</span> {'->'}
                      </a>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design;
