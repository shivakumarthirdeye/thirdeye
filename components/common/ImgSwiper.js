import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper';

const ImgSwiper = ({ images }) => {
  return (
    <div className='overflow-hidden'>
      <Swiper
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: '.swiper-imgs-next',
          prevEl: '.swiper-imgs-prev',
        }}
        className=' ImgSwiper !pb-16'
        modules={[Pagination, Navigation]}
        // breakpoints={{
        //   300: {
        //     slidesPerView: 2,
        //     spaceBetween: 1,
        //   },
        //   500: {
        //     slidesPerView: 2.5,
        //     spaceBetween: 1,
        //   },
        //   640: {
        //     slidesPerView: 3.2,
        //     spaceBetween: 1,
        //   },
        //   800: {
        //     slidesPerView: 4.2,
        //     spaceBetween: 1,
        //   },

        //   1024: {
        //     slidesPerView: 5,
        //     spaceBetween: 1,
        //   },
        //   1440: {
        //     slidesPerView: 1.8,
        //     spaceBetween: 0,
        //   },

        // }}

        initialSlide={1}
        slidesPerView={1.8}
        centeredSlides={true}
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

        {[...Array(3)].map((item, idx) => {
          return (
            <SwiperSlide key={idx} className='flex justify-center'>
              <div>
                <img
                  src={images}
                  alt=''
                  className='w-[450px] lg:w-[600px] md:max-h-[45vh] object-cover h-full'
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ImgSwiper;
