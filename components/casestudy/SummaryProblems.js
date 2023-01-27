import { VioletLeft, GreenRight } from '../common/ShadeSVGs';

const SummaryProblems = ({
  summaryHeading,
  summaryPoints,
  problemHeading,
  problemPoints,
  summaryImg,
  problemImg,
}) => {
  return (
    <section className=' my-10 px-4 relative'>
      <div className='container mx-auto'>
        <div>
          <h2 className='text-sm md:text-base text-purple lg:text-xl xl:text-2xl'>
            Summary
          </h2>
          <h1 className='mt-1 md:mt-4 md:!leading-[41px] text-textBlack lg:!leading-[51px] font-medium text-xl sm:text-2xl md:text-3xl lg:text-[35px]'>
            {summaryHeading}
          </h1>
          <div className=' my-5 md:my-10'>
            {summaryPoints.map((item, idx) => {
              return (
                <div className='my-5 md:my-2' key={idx}>
                  <h3 className='text-sm sm:text-lg md:text-xl  lg:text-2xl text-black text-opacity-80'>
                    {item}
                  </h3>
                </div>
              );
            })}
          </div>
          <div className='max-w-6xl mx-auto my-8 md:my-5'>
            <img
              loading='lazy'
              src={summaryImg}
              className='w-full max-h-[743.29px] object-cover rounded-[20px]'
              alt=''
            />
          </div>
        </div>
        <div className='mt-10 md:mt-20 lg:mt-28'>
          <h2 className='text-sm md:text-base lg:text-xl xl:text-2xl text-purple'>
            Problem
          </h2>
          <h1 className='mt-1 md:mt-4 text-textBlack font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>
            {problemHeading}
          </h1>
        </div>
        <div className='lg:flex  justify-between ml-10'>
          <ul className='lg:my-10 list-disc flex-1'>
            {problemPoints.map((item, idx) => {
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
        <div className='max-w-6xl mx-auto my-5 md:my-5'>
          <img
            loading='lazy'
            src={problemImg}
            className='w-full max-h-[743.29px] object-cover rounded-[20px]'
            alt=''
          />
        </div>
      </div>
      <div className='absolute z-[-1]  left-0 top-0'>
        <VioletLeft />
      </div>
      <div className='absolute z-[-1]  left-0 bottom-[-300px]'>
        <VioletLeft />
      </div>
      <div className='absolute z-[-1]  right-0 bottom-40'>
        <GreenRight />
      </div>
    </section>
  );
};

export default SummaryProblems;
