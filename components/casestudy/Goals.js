import React from 'react';

const Goals = ({ points, img, noId }) => {
  return (
    <section className='container mx-auto px-4'>
      <div>
        <h2 className='text-sm md:text-base lg:text-xl xl:text-2xl text-purple '>
          Project Goals
        </h2>
        <div className='lg:flex  grid gap-5 lg:gap-3 max-w-7xl my-5'>
          {points.slice(0, 2).map(point => {
            return <Points key={point.id} noId={noId} {...point} />;
          })}
        </div>
        <div className='max-w-6xl mx-auto my-5 md:my-10'>
          <img src={img} className='w-full h-full rounded-[20px]' alt='' />
        </div>
        <div>
          {points.slice(2, points.length).map((point, idx) => {
            return (
              <div
                key={point.id}
                className='lg:flex grid gap-10 lg:gap-0 justify-center   my-10 lg:my-24'
              >
                <div
                  className={`${
                    idx % 2 !== 0 && 'lg:!order-2 lg:ml-10'
                  } lg:mr-10  flex-[0.7]`}
                >
                  <Points {...point} />
                </div>
                {point.img && (
                  <div className={`  w-full lg:w-[500px] xl:w-[695px]`}>
                    <img
                      src={point.img}
                      className='w-full h-full max-h-[345px] lg:max-h-[500px] object-cover xl:max-h-[694px]'
                      alt=''
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
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
