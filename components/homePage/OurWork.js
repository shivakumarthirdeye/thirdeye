import work1 from '/public/assets/images/ourWork1.png';
import work2 from '/public/assets/images/ourWork2.png';
import work3 from '/public/assets/images/ourWork3.png';
import work4 from '/public/assets/images/ourWork4.png';

const worksMain = [
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

const OurWork = ({ ourWorks = worksMain }) => {
  const works = ourWorks;
  return (
    <section id='projects'>
      <div className='container mx-auto px-4'>
        <div>
          <h1 className='heading '>Our Works</h1>
        </div>
        <div>
          {works.map(work => {
            const { id, image, tag, title, description } = work;

            return (
              <div
                key={id}
                className='flex flex-col  lg:flex-row gap-8 sm:gap-12 lg:gap-32 my-8 md:my-16 lg:my-40 items-center'
              >
                <div className={`${id % 2 === 0 ? 'lg:!order-2' : ''} flex-1`}>
                  <img
                    src={image.src}
                    className='h-[300px] sm:h-[450px] w-screen sm:w-full lg:h-[579px]  object-cover  rounded-[32px]'
                    alt=''
                  />
                </div>
                <div className='flex-1 my-5 lg:my-0 flex  flex-col justify-start'>
                  <h4 className='text-[#4E53B7] font-semibold text-sm sm:text-lg md:text-xl lg:text-2xl'>
                    {tag}
                  </h4>
                  <h1 className='heading'>{title}</h1>
                  <p className='sm:text-lg md:text-xl  lg:text-2xl  text-black text-opacity-60'>
                    {description}
                  </p>
                  <div className='my-8 '>
                    <button className='sm:text-lg md:text-xl lg:text-2xl    text-black text-opacity-80 '>
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
