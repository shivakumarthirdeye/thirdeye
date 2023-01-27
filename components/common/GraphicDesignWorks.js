import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import work1 from '/public/assets/images/subServices/graphic-works/1.png';
import work2 from '/public/assets/images/subServices/graphic-works/2.png';
import work3 from '/public/assets/images/subServices/graphic-works/3.png';
import { Autoplay, Navigation } from 'swiper';
import 'swiper/css/navigation';
import { VioletLeft } from './ShadeSVGs';
import HomePageOurWorks from '../homePage/OurWork';
import projectsData from '@/utils/projects.json';
import Link from 'next/link';

const works = [
  {
    id: 1,
    image: work1.src,
  },
  {
    id: 2,
    image: work2.src,
  },
  {
    id: 3,
    image: work3.src,
  },
];

const GraphicDesignWorks = ({ title, currentPage }) => {
  const { projects } = projectsData;
  return (
    <>
      <section className='my-20 relative'>
        <div className='container mx-auto px-4 overflow-hidden'>
          <h1 className='heading'>{title || 'Graphic Design Works'}</h1>
          <div className='my-20  sm:px-0 container  mx-auto'>
            <Swiper
              navigation={{
                nextEl: '.swiper-btn-next',
                prevEl: '.swiper-btn-prev',
              }}
              autoplay={{
                delay: 500,
                disableOnInteraction: false,
              }}
              spaceBetween={20}
              slidesPerView={'auto'}
              loop={true}
              className='ourWorkSwiper'
              // navigation={true}
              modules={[Autoplay, Navigation]}
              breakpoints={{
                640: {
                  slidesPerView: 1.5,
                },

                1024: {
                  slidesPerView: 2.5,
                },
                1440: {
                  slidesPerView: 3.5,
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
              {works.map(work => {
                // const { id, image, tag, title, description } = work;

                const { id, image } = work;
                return (
                  <SwiperSlide
                    key={id}
                    className=' w-full select-none justify-center'
                  >
                    <div className='flex justify-center'>
                      <div>
                        <div>
                          <img
                            loading='lazy'
                            src={image}
                            className='md:w-[374px] w-full h-[340px]  md:h-[436.01px] object-cover rounded-[20.67px]'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className='flex justify-center'>
            <Link href='/design/graphic-design/works'>
              <button className='bg-black max-w-[228px] h-16 w-full text-white text-2xl rounded'>
                View casestudy
              </button>
            </Link>
          </div>
        </div>
        <div className='absolute z-[-1]  left-0 top-0'>
          <VioletLeft />
        </div>
      </section>
    </>
  );
};

export default GraphicDesignWorks;
