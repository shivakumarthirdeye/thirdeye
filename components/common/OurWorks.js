import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import work1 from '/public/assets/images/ourWork1.png';
import work2 from '/public/assets/images/ourWork2.png';
import work3 from '/public/assets/images/ourWork3.png';
import work4 from '/public/assets/images/ourWork4.png';
import { Navigation } from 'swiper';
import 'swiper/css/navigation';
import { VioletLeft } from './ShadeSVGs';

const works = [
  {
    id: 1,
    image: work1.src,
    tag: 'Design & Development',
    title: 'Osadi.io Website',
    description: `
      At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? Or perhaps your goal is simply to generate more leads for your products and services? Whatever actions you're targeting, Third Eye can help.
    `,
  },
  {
    id: 2,
    image: work2.src,
    tag: 'Marketing',
    title: 'Red marketing campaign',
    description: `
      At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? Or perhaps your goal is simply to generate more leads for your products and services? Whatever actions you're targeting, Third Eye can help.
    `,
  },
  {
    id: 3,
    image: work3.src,
    tag: 'Design',
    title: 'Techsil Logo deign',
    description: `
      At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? Or perhaps your goal is simply to generate more leads for your products and services? Whatever actions you're targeting, Third Eye can help.
    `,
  },
  {
    id: 4,
    image: work4.src,
    tag: 'Design & Development',
    title: 'Travel application',
    description: `
      At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? Or perhaps your goal is simply to generate more leads for your products and services? Whatever actions you're targeting, Third Eye can help.
    `,
  },
];

const OurWorks = ({ title }) => {
  return (
    <section className='my-20 relative'>
      <div className='container mx-auto px-4 overflow-hidden'>
        <h1 className='heading'>{title || 'Our Works'}</h1>
        <div className='my-20  sm:px-0 container  mx-auto'>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-btn-next',
              prevEl: '.swiper-btn-prev',
            }}
            className='ourWorkSwiper'
            // navigation={true}
            modules={[Navigation]}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },

              1024: {
                slidesPerView: 2.5,
                spaceBetween: 50,
              },
              1440: {
                slidesPerView: 3.2,
                spaceBetween: 50,
              },
            }}
          >
            <div className='absolute top-[-80px] right-0 lg:right-20  z-10'>
              <div className=' flex gap-5'>
                <button className='swiper-btn-prev       disabled:pointer-events-none disabled:opacity-60     cursor-pointer  '>
                  <svg
                    width='38'
                    height='38'
                    viewBox='0 0 38 38'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M22 13L16 19L22 25'
                      stroke='black'
                      strokeOpacity='0.7'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <rect
                      x='37.5'
                      y='37.5'
                      width='37'
                      height='37'
                      rx='18.5'
                      transform='rotate(180 37.5 37.5)'
                      stroke='black'
                      strokeOpacity='0.19'
                    />
                  </svg>
                </button>
                <button className='swiper-btn-next     disabled:pointer-events-none  disabled:opacity-60  cursor-pointer  '>
                  <svg
                    width='38'
                    height='38'
                    viewBox='0 0 38 38'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M16 25L22 19L16 13'
                      stroke='black'
                      strokeOpacity='0.7'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <rect
                      x='0.5'
                      y='0.5'
                      width='37'
                      height='37'
                      rx='18.5'
                      stroke='black'
                      strokeOpacity='0.19'
                    />
                  </svg>
                </button>
              </div>
            </div>
            {works.map(item => {
              const { id, image, tag, title } = item;
              return (
                <SwiperSlide
                  key={id}
                  className=' w-full select-none justify-center'
                >
                  <div className='flex justify-center'>
                    <div>
                      <div>
                        <img
                          src={image}
                          className='md:w-[374px] w-full h-[340px]  md:h-[436.01px] object-cover rounded-[20.67px]'
                          alt=''
                        />
                      </div>
                      <div className='my-5'>
                        <p className='text-[#4E53B7] font-bold mb-3'>{tag}</p>
                        <h1 className='text-4xl  '>{title}</h1>
                      </div>
                      <div className='my-8 '>
                        <button className='    text-black text-opacity-80 '>
                          Case Study
                          <div className='bg-[#5FC7EC] rounded-full  h-[3px]'></div>
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <div className='absolute  left-0 top-0'>
        <VioletLeft />
      </div>
    </section>
  );
};

export default OurWorks;