import { GreenRight, VioletLeft } from './ShadeSVGs';

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

const HowWeWork = () => {
  return (
    <section className='my-10 mb-20 relative px-4'>
      <div className='container mx-auto'>
        <h1 className='text-5xl lg:text-7xl text-black text-opacity-80 font-light leading-[70px] lg:leading-[87.14px] '>
          How we work
        </h1>

        <div className='max-w-7xl mx-auto my-10'>
          {howWork.map(item => {
            const { id, title, description } = item;

            return (
              <div className='flex my-10' key={id}>
                <div className='flex-[0.18] mt-28'>
                  <h3 className='text-5xl'>0{id}</h3>
                </div>
                <div className='flex-1'>
                  <h1 className='text-[96px]'>{title}</h1>
                  <p className='my-5 text-2xl'>{description}</p>
                  <div className='bg-black bg-opacity-20  w-full h-[1px] my-10'></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className='absolute right-0 top-[40%] z-[-10] '>
        <GreenRight />
      </div>
      <div className='absolute top-[-200px] left-0 z-[-10]'>
        <VioletLeft />
      </div>
    </section>
  );
};

export default HowWeWork;
