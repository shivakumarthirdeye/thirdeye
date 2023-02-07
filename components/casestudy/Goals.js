import React from 'react';
import { VioletRight } from '../common/ShadeSVGs';

const Goals = ({ points, img, noId }) => {
  return (
    <section className='relative px-4'>
      <div className='container  mx-auto'>
        <div>
          <h2 className='text-sm md:text-base lg:text-xl xl:text-2xl text-purple '>
            Project Goals
          </h2>
          <div className='lg:flex  grid gap-5 lg:gap-3 max-w-7xl my-5'>
            {points.slice(0, 2).map(point => {
              return <Points key={point.id} noId={noId} {...point} />;
            })}
          </div>
          <div className=' mx-auto my-5 md:my-10'>
            <img
              loading='lazy'
              src={img}
              className='w-full h-full max-h-[763.42px] object-cover '
              alt=''
            />
          </div>
          <div>
            {points.slice(2, points.length).map((point, idx) => {
              return (
                <div
                  key={point.id}
                  className='lg:flex grid gap-10 lg:gap-0 justify-between   my-10 lg:my-24'
                >
                  <div
                    className={`${
                      idx % 2 !== 0 && 'lg:!order-2 lg:ml-10'
                    } lg:mr-10  flex-[0.7]`}
                  >
                    <Points {...point} />
                  </div>
                  {point.img && (
                    <div className={`  w-full lg:w-[500px]  xl:w-[600px]`}>
                      <img
                        loading='lazy'
                        src={point.img}
                        className='w-full h-full max-h-[345px] lg:max-h-[500px] object-cover xl:max-h-[600px]'
                        alt=''
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className='absolute z-[-1]  right-0 top-[200px]'>
        <VioletRight />
      </div>
      <div className='absolute z-[-1]  right-0 bottom-[1100px]'>
        <VioletRight />
      </div>
      <div className='absolute z-[-1]  right-0 bottom-[300px]'>
        <VioletRight />
      </div>
    </section>
  );
};

export default Goals;

const Points = ({ id, heading, description, points, noId }) => {
  return (
    <div className='text-black flex-1 text-opacity-80'>
      {!noId && (
        <>
          <h1 className='text-3xl md:text-4xl lg:text-5xl '>0{id}</h1>

          <div className='w-[90%] h-[2px] my-2 bg-black bg-opacity-80 ' />
        </>
      )}
      <div className='mt-5'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl font-medium text-textBlack'>
          {heading}
        </h1>
        <ul className='lg:my-10 list-disc flex-1 ml-8'>
          {points?.map((point, idx) => {
            return (
              <li
                className=' text-sm sm:text-lg text-textBlack  my-0.5 sm:my-3 md:text-xl'
                key={idx}
              >
                {point}
              </li>
            );
          })}
        </ul>

        <p className='text-textBlack mt-3  md:text-xl lg:text-2xl text-opacity-80'>
          {description}
        </p>
      </div>
    </div>
  );
};
