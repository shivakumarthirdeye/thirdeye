import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper';

const ImgSwiperInfinite = ({ images, className, title, description }) => {
  return (
    <div className='container mx-auto my-20 px-4'>
      <div
        className={`overflow-hidden  container mt-20 mb-10 pt-20 py-10 mx-auto ${className}`}
      >
        <Swiper
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: '.swiper-imgs-next',
            prevEl: '.swiper-imgs-prev',
          }}
          className=' ImgSwiper !pb-20'
          modules={[Pagination, Navigation]}
          // breakpoints={{
          //   640: {
          //     slidesPerView: 1.2,
          //   },

          //   1024: {
          //     slidesPerView: 1.8,
          //   },
          //   1440: {
          //     slidesPerView: 2,
          //   },
          // }}
          spaceBetween={20}
          slidesPerView={'auto'}
          loop={true}
        >
          <button className='swiper-imgs-prev  w-20      disabled:pointer-events-none disabled:opacity-60     cursor-pointer  absolute bottom-3  left-10 md:left-20    z-[100] '>
            <svg
              className='w-[30px] h-[22px]  md:w-[55px] md:h-[22px] lg:w-[65px] lg:h-[24px]'
              width='65'
              height='24'
              viewBox='0 0 65 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M0.939339 13.0607C0.353554 12.4749 0.353554 11.5251 0.939339 10.9393L10.4853 1.3934C11.0711 0.807611 12.0208 0.807611 12.6066 1.3934C13.1924 1.97919 13.1924 2.92893 12.6066 3.51472L4.12132 12L12.6066 20.4853C13.1924 21.0711 13.1924 22.0208 12.6066 22.6066C12.0208 23.1924 11.0711 23.1924 10.4853 22.6066L0.939339 13.0607ZM65 13.5H2V10.5H65V13.5Z'
                fill='black'
              />
            </svg>
          </button>
          <button className='swiper-imgs-next  w-20  absolute bottom-3 right-0  md:right-20  lg:right-20  z-[100]    disabled:pointer-events-none  disabled:opacity-60  cursor-pointer  '>
            <svg
              className='w-[30px] h-[22px]  md:w-[55px] md:h-[22px] lg:w-[65px] lg:h-[24px]'
              width='65'
              height='24'
              viewBox='0 0 65 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M64.0607 13.0607C64.6464 12.4749 64.6464 11.5251 64.0607 10.9393L54.5147 1.3934C53.9289 0.807611 52.9792 0.807611 52.3934 1.3934C51.8076 1.97919 51.8076 2.92893 52.3934 3.51472L60.8787 12L52.3934 20.4853C51.8076 21.0711 51.8076 22.0208 52.3934 22.6066C52.9792 23.1924 53.9289 23.1924 54.5147 22.6066L64.0607 13.0607ZM0 13.5H63V10.5H0V13.5Z'
                fill='black'
              />
            </svg>
          </button>

          {images.map((item, idx) => {
            return (
              <SwiperSlide key={idx} className='max-w-[900px]'>
                <div>
                  <img
                    loading='lazy'
                    src={item.img}
                    alt=''
                    className='w-[1000px] h-[500px] object-cover '
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div>
        <h1 className=' text-2xl sm:text-3xl md:text-4xl lg:text-[45px]'>
          {title}
        </h1>
        <p className=' sm:text-lg md:text-xl lg:text-2xl text-black text-opacity-80 mt-5'>
          {description}
        </p>
      </div>
    </div>
  );
};

export default ImgSwiperInfinite;
