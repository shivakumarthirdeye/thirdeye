import {
  GreenRight,
  LeftCircle,
  VioletLeft,
} from '@/components/common/ShadeSVGs';

const howWork = [
  {
    id: 1,
    title: 'Strategy',
    description: `Recognizing every specific aspect of your business is the first step. We assemble all the information necessary to pave the way for your company's success.  `,
  },
  {
    id: 2,
    title: 'Design',
    description: `Our design team experts will strictly adhere to the principle that authenticity is the only factor in success. They make sure the designs are solid and captivating, flawless, user-friendly, and optimized in the best ways.`,
  },
  {
    id: 3,
    title: 'Development',
    description: `Our development team then begins the process and works their magic to turn the layout into an awesome reality. This phase also includes testing the new website.`,
  },
  {
    id: 4,
    title: 'Launch & Growth',
    description: `Our development company believes that a launch is similar to the start of a sprint race: the better the start, the better the chances of success.`,
  },
];

const HowWeWork = ({ steps, title }) => {
  const ourWorks = steps || howWork;
  return (
    <section className=' relative px-4 '>
      <div className='container mx-auto'>
        <h1 className='heading lg:text-[64px]'>
          {title || 'How we Develop Incredible Products '}
        </h1>

        <div className='max-w-7xl mx-auto my-10'>
          {ourWorks.map((item, idx) => {
            const { id, title, description } = item;

            return (
              <div className='flex  sm:my-8 lg:my-16' key={id}>
                <div className='flex-[0.14]  hidden sm:block'>
                  <h3 className='text-xl mt-8 sm:text-3xl md:text-4xl xl:text-5xl'>
                    0{id}
                  </h3>
                </div>
                <div className='flex-1 max-w-[819px]'>
                  <h1 className='text-3xl sm:text-6xl md:text-7xl xl:text-8xl'>
                    {title}
                  </h1>
                  <p className='my-5  sm:text-xl lg:text-2xl max-w-[583px] text-black text-opacity-80'>
                    {description}
                  </p>
                  {idx !== howWork.length - 1 && (
                    <div className='bg-black bg-opacity-10 sm:bg-opacity-20  w-full h-[1px] my-10'></div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className='absolute right-0 top-[40%] z-[-10] overflow-hidden '>
        <GreenRight />
      </div>
      <div className='absolute top-[-200px] left-0 z-[-10]  overflow-hidden'>
        <VioletLeft />
      </div>
      <div className='absolute top-[75%] left-0 z-[-10]  overflow-hidden'>
        <LeftCircle />
      </div>
    </section>
  );
};

export default HowWeWork;
