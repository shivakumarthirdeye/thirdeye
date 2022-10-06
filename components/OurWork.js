import work1 from '../public/assets/images/ourWork1.png';
import work2 from '../public/assets/images/ourWork2.png';
import work3 from '../public/assets/images/ourWork3.png';
import work4 from '../public/assets/images/ourWork4.png';

const works = [
  {
    id: 1,
    image: work1,
    tag: 'Design & Development',
    title: 'Osadi.io Website',
    description: `
      At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? Or perhaps your goal is simply to generate more leads for your products and services? Whatever actions you're targeting, Third Eye can help.
    `,
  },
  {
    id: 2,
    image: work2,
    tag: 'Marketing',
    title: 'Red marketing campaign',
    description: `
      At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? Or perhaps your goal is simply to generate more leads for your products and services? Whatever actions you're targeting, Third Eye can help.
    `,
  },
  {
    id: 3,
    image: work3,
    tag: 'Design',
    title: 'Techsil Logo deign',
    description: `
      At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? Or perhaps your goal is simply to generate more leads for your products and services? Whatever actions you're targeting, Third Eye can help.
    `,
  },
  {
    id: 4,
    image: work4,
    tag: 'Design & Development',
    title: 'Travel application',
    description: `
      At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? Or perhaps your goal is simply to generate more leads for your products and services? Whatever actions you're targeting, Third Eye can help.
    `,
  },
];

const OurWork = () => {
  return (
    <section>
      <div className='container mx-auto px-4'>
        <div>
          <h1 className='text-5xl lg:text-7xl text-black text-opacity-80 font-light leading-[70px] lg:leading-[87.14px] '>
            Our Works
          </h1>
        </div>
        <div>
          {works.map(work => {
            const { id, image, tag, title, description } = work;

            return (
              <div
                key={id}
                className='flex flex-col  lg:flex-row gap-16 lg:gap-32 my-10 md:my-20 lg:my-40 items-center'
              >
                <div className={`${id % 2 === 0 ? 'lg:!order-2' : ''} flex-1`}>
                  <img
                    src={image.src}
                    className='lg:h-[675px] w-full h-full object-cover  rounded-[32px]'
                    alt=''
                  />
                </div>
                <div className='flex-1 my-10 lg:my-0 flex  flex-col justify-start'>
                  <h4 className='text-[#4E53B7] text-xl lg:text-2xl'>{tag}</h4>
                  <h1 className=' text-5xl lg:text-6xl xl:text-[64px]  leading-[65.4px] lg:leading-[86.4px] my-5'>
                    {title}
                  </h1>
                  <p className='text-xl lg:text-2xl  text-black text-opacity-60'>
                    {description}
                  </p>
                  <div className='my-8 '>
                    <button className=' text-xl lg:text-2xl    text-black text-opacity-80 '>
                      Case Study
                      <div className='bg-[#5FC7EC] rounded-full my-1 h-[5px]'></div>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurWork;
