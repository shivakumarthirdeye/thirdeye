import Link from 'next/link';
import { GreenRight, VioletLeft } from '../common/ShadeSVGs';
// import work1 from '/public/assets/images/ourWork1.png';
// import work2 from '/public/assets/images/ourWork2.png';
// import work3 from '/public/assets/images/ourWork3.png';
// import work4 from '/public/assets/images/ourWork4.png';

import projectsData from '@/utils/projects.json';

// const worksMain = [
//   {
//     id: 1,
//     image: work1,
//     tag: 'Design & Development',
//     title: 'Osadi.io Website',
//     description: `
//       At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? Or perhaps your goal is simply to generate more leads for your products and services? Whatever actions you're targeting, Third Eye can help.
//     `,
//   },
//   {
//     id: 2,
//     image: work2,
//     tag: 'Marketing',
//     title: 'Red marketing campaign',
//     description: `
//       At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? Or perhaps your goal is simply to generate more leads for your products and services? Whatever actions you're targeting, Third Eye can help.
//     `,
//   },
//   {
//     id: 3,
//     image: work3,
//     tag: 'Design',
//     title: 'Techsil Logo deign',
//     description: `
//       At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? Or perhaps your goal is simply to generate more leads for your products and services? Whatever actions you're targeting, Third Eye can help.
//     `,
//   },
//   {
//     id: 4,
//     image: work4,
//     tag: 'Design & Development',
//     title: 'Travel application',
//     description: `
//       At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? Or perhaps your goal is simply to generate more leads for your products and services? Whatever actions you're targeting, Third Eye can help.
//     `,
//   },
// ];

const OurWork = ({ ourWorks, currentPage, featured, tag, noTitle, title }) => {
  const works = ourWorks;
  const { projects } = projectsData;
  return (
    <section id='projects' className='relative lg:my-36'>
      <div className='absolute z-[-1]  right-0 top-[-400px] sm:top-[-700px]'>
        <GreenRight />
      </div>
      <div className='absolute z-[-1]  left-0 bottom-[500px]'>
        <VioletLeft />
      </div>

      <div className='container mx-auto px-4'>
        {!noTitle && (
          <div>
            <h1 className='heading '>{title || 'Our Works'}</h1>
          </div>
        )}
        <div>
          {projects
            .filter(item => {
              if (tag) {
                return item?.tags?.includes(tag);
              } else {
                return item;
              }
            })
            .filter(item => item.slug !== currentPage)
            .filter(item => {
              if (featured) {
                return item.featured;
              }
              return item;
            })
            .map((work, idx) => {
              // const { id, image, tag, title, description } = work;

              const {
                id,
                thumbnail,
                smallTitle,
                tag,
                slug,
                description,
                featuredVideo,
              } = work;

              return (
                <div
                  key={id}
                  className='flex flex-col  lg:flex-row gap-8 sm:gap-12 lg:gap-32 my-8 md:my-16  items-center'
                >
                  <div
                    className={`${idx % 2 !== 0 ? 'lg:!order-2' : ''} flex-1`}
                  >
                    {featured && featuredVideo ? (
                      <div className='w-fit object-cover  max-w-[400px]  md:max-w-none lg:h-[550px]   rounded-[32px] overflow-hidden    relative'>
                        <video
                          src={featuredVideo}
                          autoPlay
                          loop
                          muted
                          className='relative top-0  left-0 opacity-100'
                        ></video>
                      </div>
                    ) : (
                      <img
                        loading='lazy'
                        src={thumbnail}
                        className='h-[398px] max-w-[400px] md:max-w-none w-full   sm:h-[450px] sm:w-full lg:h-[550px]  object-cover  rounded-[32px]'
                        alt=''
                      />
                    )}
                  </div>
                  <div className='flex-1 my-5 lg:my-0 flex  flex-col justify-start'>
                    <h4 className='text-[#4E53B7] font-semibold text-sm sm:text-lg md:text-xl lg:text-2xl'>
                      {tag}
                    </h4>
                    <h1 className='heading lg:text-[64px] capitalize'>
                      {smallTitle}
                    </h1>
                    <p className='sm:text-lg md:text-xl  lg:text-2xl  text-black text-opacity-60'>
                      {description}
                    </p>
                    <Link href={`/case-study/${slug}`}>
                      <a className='my-8 '>
                        <button className='sm:text-lg font-semibold relative md:text-xl lg:text-2xl case-study--btn    text-black text-opacity-80 '>
                          Case Study
                        </button>
                      </a>
                    </Link>
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
