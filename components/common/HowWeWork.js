import {
  GreenRight,
  LeftCircle,
  VioletLeft,
} from '@/components/common/ShadeSVGs';

const howWork = [
  {
    id: 1,
    title: 'Strategy',
    description: `At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? `,
  },
  {
    id: 2,
    title: 'Design',
    description: `At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? `,
  },
  {
    id: 3,
    title: 'Development',
    description: `At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? `,
  },
  {
    id: 4,
    title: 'Launch & Growth',
    description: `At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? `,
  },
];

const HowWeWork = ({ steps, title }) => {
  const ourWorks = steps || howWork;
  return (
    <section className=' relative px-4 '>
      <div className='container mx-auto'>
        <h1 className='heading'>{title}</h1>

        <div className='max-w-7xl mx-auto my-10'>
          {ourWorks.map((item, idx) => {
            const { id, title, description } = item;

            return (
              <div className='flex my-20' key={id}>
                <div className='flex-[0.18] mt-28'>
                  <h3 className='text-xl sm:text-3xl md:text-4xl xl:text-5xl'>
                    0{id}
                  </h3>
                </div>
                <div className='flex-1 max-w-[819px]'>
                  <h1 className='text-4xl sm:text-6xl md:text-7xl xl:text-8xl'>
                    {title}
                  </h1>
                  <p className='my-5 text-lg sm:text-xl lg:text-2xl max-w-[583px] text-black text-opacity-80'>
                    {description}
                  </p>
                  {idx !== howWork.length - 1 && (
                    <div className='bg-black bg-opacity-20  w-full h-[1px] my-10'></div>
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
