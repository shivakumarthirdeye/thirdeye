import React, { useState } from 'react';
import { HiArrowRight } from 'react-icons/hi';

const helps = [
  {
    id: 1,
    title: 'MVP for Startups',
    description: `At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more cMVP for Startups `,
  },
  {
    id: 2,
    title: 'Agile Product team for scaleups',
    description: `At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more Agile Product team for scaleups `,
  },
  {
    id: 3,
    title: 'Enterprise Digital Transformation',
    description: `At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more Enterprise Digital Transformation `,
  },
];

const OurHelp = () => {
  const [activeHelp, setActiveHelp] = useState(1);

  return (
    <>
      <div
        style={{
          background: `linear-gradient(74.78deg, #3545D1 0%, #31A4C9 100%)`,
        }}
        className='text-white  lg:hidden py-10    px-4'
      >
        <div className='container mx-auto'>
          <h1 className='heading lg:text-[64px] !text-white'>
            How can we help you
          </h1>
          <div className='grid gap-8 my-10'>
            {helps.map(help => {
              const { id, description, title } = help;

              return (
                <div key={id} className='grid gap-4'>
                  <h1 className='font-semibold underline sm:text-lg md:text-xl'>
                    {title}
                  </h1>
                  <div>
                    <svg
                      className='w-[25px] h-[33px] sm:w-[30px] sm:h-[40px] md:w-[35px] md:h-[45px]'
                      width='25'
                      height='33'
                      viewBox='0 0 25 33'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <circle
                        cx='12.5'
                        cy='19.7266'
                        r='12.0482'
                        stroke='white'
                        strokeWidth='0.903614'
                      />
                      <circle
                        cx='12.5002'
                        cy='7.07831'
                        r='6.62651'
                        stroke='white'
                        strokeWidth='0.903614'
                      />
                    </svg>
                  </div>

                  <p className='text-sm sm:text-base md:text-lg'>
                    {description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div
        style={{
          background: `linear-gradient(74.78deg, #3545D1 0%, #31A4C9 100%)`,
        }}
        className='text-white hidden lg:block py-16 md:py-28    px-4'
      >
        <div className='container mx-auto'>
          <h1 className='heading !text-white lg:text-[64px]'>
            How can we help you
          </h1>

          <div className='my-20 flex flex-col lg:flex-row justify-between'>
            <div className='flex-1'>
              {helps.map(item => {
                const { description, id, title } = item;

                return (
                  <div
                    key={id}
                    className='cursor-pointer my-7'
                    onClick={() => {
                      setActiveHelp(id);
                    }}
                  >
                    <h1
                      className={`${
                        activeHelp === id && 'font-semibold'
                      } text-3xl   md:text-[32px] flex items-center`}
                    >
                      {activeHelp === id && (
                        <span>
                          <HiArrowRight className='inline' />
                        </span>
                      )}

                      <span className=' ml-2 relative py-1'>
                        {title}
                        {activeHelp === id && (
                          <div className='absolute bottom-0 w-full bg-white h-1'></div>
                        )}
                      </span>
                    </h1>
                  </div>
                );
              })}
            </div>

            {/* <div className='flex-1'>
              <h1 className='text-3xl lg:text-4xl font-semibold flex items-center '>
                <span>
                  <HiArrowRight className='inline' />
                </span>
                <span className=' ml-2 relative py-1'>
                  MVP for Startups
                  <div className='absolute bottom-0 w-full bg-white h-1'></div>
                </span>
              </h1>
              <ul className='text-3xl lg:text-4xl font-normal '>
                <li className='my-10'>Agile Product team for scaleups</li>
                <li className='my-10'>Enterprise Digital Transformation</li>
              </ul>
            </div> */}
            <div className='flex-1'>
              <svg
                width='55'
                height='71'
                viewBox='0 0 55 71'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <circle
                  cx='27.25'
                  cy='43.0088'
                  r='26.2651'
                  stroke='white'
                  strokeWidth='1.96988'
                />
                <circle
                  cx='27.251'
                  cy='15.4307'
                  r='14.4458'
                  stroke='white'
                  strokeWidth='1.96988'
                />
              </svg>

              <p className='my-10 text-xl lg:text-2xl font-light'>
                {helps[activeHelp - 1].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurHelp;
