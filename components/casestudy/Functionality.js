import { GreenLeft, VioletRight } from '../common/ShadeSVGs';

const Functionality = ({
  title,
  highlight,
  features,
  description,
  points,
  image,
  results,
  resultImage,
  big,
}) => {
  return (
    <section className='relative px-4'>
      <div className='absolute z-[-1]  left-0 top-[-100px]'>
        <GreenLeft />
      </div>
      <div className='absolute z-[-1]  right-0 bottom-[300px]'>
        <VioletRight />
      </div>
      <div className='absolute z-[-1]  right-0 bottom-[0]'>
        <VioletRight />
      </div>
      <div className='container mx-auto'>
        {description && !big && (
          <>
            <div className='flex flex-col lg:flex-row justify-between max-w-7xl space-x-10 items-center mx-auto'>
              <div className='flex-1'>
                <h1 className='text-blue text-sm sm:text-lg md:text-xl lg:text-2xl '>
                  Solutions provided
                </h1>
                <p className='mt-6 text-textBlack  text-sm sm:text-lg md:text-xl lg:text-2xl '>
                  {description}
                </p>
                <div className='ml-8  '>
                  <ul className='list-disc my-2'>
                    {points?.map((item, idx) => {
                      const { highlight, point } = item;
                      return (
                        <li
                          className=' text-sm sm:text-lg !mb-3.5 text-textBlack  my-0.5 sm:my-1 md:text-xl'
                          key={idx}
                        >
                          <span className='font-semibold'>{highlight}</span> -{' '}
                          {point}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className='flex-1 mt-5 lg:mt-0'>
                <img
                  loading='lazy'
                  src={image}
                  className='w-full  max-h-[518px] h-full object-contain'
                  alt=''
                />
              </div>
            </div>
            <div className='flex flex-col lg:flex-row justify-between mt-20 max-w-7xl space-x-10 items-center mx-auto'>
              <div className='flex-1 order-2 lg:order-1'>
                <img
                  loading='lazy'
                  src={resultImage}
                  className='w-full  max-h-[518px] h-full object-contain'
                  alt=''
                />
              </div>
              <div className='flex-1 order-1 lg:order-2'>
                <h1 className='text-blue text-sm sm:text-lg md:text-xl lg:text-2xl '>
                  Results
                </h1>
                <div className='ml-8  '>
                  <ul className='list-disc my-2'>
                    {results?.map((item, idx) => {
                      return (
                        <li
                          className=' text-sm sm:text-lg !mb-3.5 text-textBlack  my-0.5 sm:my-1 md:text-xl'
                          key={idx}
                        >
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}

        {features && !big && (
          <>
            <div>
              <h2 className='text-sm md:text-base  text-blue '>
                SOLUTIONS PROVIDED
              </h2>
              <h2 className='text-2xl max-w-[1139px]  text-textBlack font-medium sm:text-3xl md:text-4xl lg:text-5xl my-2 md:my-5 lg:!leading-[58.09px]'>
                {highlight}
              </h2>
            </div>
            <div className='flex justify-between items-center flex-col'>
              {features?.map(item => {
                const { id, img, title, points } = item;

                return (
                  <div
                    key={id}
                    className={` w-full  flex flex-col md:flex-row  md:space-x-8 my-3 md:my-5 lg:my-14 `}
                  >
                    <div className={`flex-1 ${id % 2 === 0 && 'order-2'}`}>
                      <img
                        loading='lazy'
                        src={img}
                        className='w-full min-h-max max-w-[518px] max-h-[518px] h-full'
                        alt=''
                      />
                    </div>
                    <div className={` my-4 flex-1   sm:my-0`}>
                      <h1 className='text-xl font-medium text-textBlack sm:text-2xl md:text-3xl lg:text-4xl'>
                        {title}
                      </h1>
                      <div className='ml-8  '>
                        <ul className='list-disc my-2'>
                          {points.map((item, idx) => {
                            return (
                              <li
                                className=' text-sm sm:text-lg text-textBlack  my-0.5 sm:my-1 md:text-xl'
                                key={idx}
                              >
                                {item}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
        {big && (
          <div>
            <h2 className='text-sm md:text-base text-purple lg:text-xl xl:text-2xl'>
              Solutions provided
            </h2>{' '}
            <h1 className='mt-1 md:mt-4 md:!leading-[41px] text-textBlack lg:!leading-[51px] font-medium text-xl sm:text-2xl md:text-3xl lg:text-[35px] xl:text-5xl max-w-[1180px]'>
              {description}
            </h1>
            <div className='lg:flex  justify-between ml-10'>
              <ul className='lg:my-10 list-disc flex-1'>
                {points.map((item, idx) => {
                  return (
                    <li
                      className='text-black text-opacity-80 my-4  text-sm sm:text-lg md:text-xl lg:text-2xl'
                      key={idx}
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className=' mx-auto my-5 md:my-5'>
              <img
                loading='lazy'
                src={image}
                className='w-full max-h-[743.29px] object-cover '
                alt=''
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Functionality;
