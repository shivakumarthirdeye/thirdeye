import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import work1 from '/public/assets/images/ourWork1.png';
import work2 from '/public/assets/images/ourWork2.png';
import work3 from '/public/assets/images/ourWork3.png';
import work4 from '/public/assets/images/ourWork4.png';
import { Navigation } from 'swiper';
import 'swiper/css/navigation';
import { VioletLeft } from './ShadeSVGs';
import HomePageOurWorks from '../homePage/OurWork';
import projectsData from '@/utils/projects.json';
import Link from 'next/link';

const OurWorks = ({ title, currentPage, tag }) => {
  const { projects } = projectsData;
  return (
    <>
      <div className='block sm:hidden'>
        <HomePageOurWorks currentPage={currentPage} />
      </div>

      <section className='hidden sm:block my-20 relative'>
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
              {projects
                .filter(item => {
                  if (tag) {
                    return item?.tags?.includes(tag);
                  } else {
                    return item;
                  }
                })
                .filter(item => item.slug !== currentPage)
                .map(work => {
                  // const { id, image, tag, title, description } = work;

                  const { id, thumbnail, smallTitle, tag, slug, description } =
                    work;
                  return (
                    <SwiperSlide
                      key={id}
                      className=' w-full select-none justify-center'
                    >
                      <div className='flex justify-center'>
                        <div>
                          <div>
                            <img
                              src={thumbnail}
                              className='md:w-[374px] w-full h-[340px]  md:h-[436.01px] object-cover rounded-[20.67px]'
                              alt=''
                            />
                          </div>
                          <div className='my-5'>
                            <p className='text-[#4E53B7] font-bold mb-3'>
                              {tag}
                            </p>
                            <h1 className='text-4xl capitalize  '>
                              {smallTitle}
                            </h1>
                          </div>
                          <div className='my-8 '>
                            <Link href={`/case-study/${slug}`}>
                              <a>
                                <button className='    text-black text-opacity-80 '>
                                  Case Study
                                  <div className='bg-[#5FC7EC] rounded-full  h-[3px]'></div>
                                </button>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </div>
        </div>
        <div className='absolute z-[-1]  left-0 top-0'>
          <VioletLeft />
        </div>
      </section>
    </>
  );
};

export default OurWorks;
