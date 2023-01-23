import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const TabSwiper = ({ items, active, setActive, work }) => {
  return (
    <div className=' py-3 md:py-4 px-2'>
      <Swiper
        slidesPerView={1.2}
        className={work && 'tabs-swiper'}
        breakpoints={{
          350: {
            slidesPerView: 1.5,
            spaceBetween: 1,
          },
          500: {
            slidesPerView: 2.8,
            spaceBetween: 1,
          },
          640: {
            slidesPerView: 3.8,
            spaceBetween: 1,
          },
          800: {
            slidesPerView: 4.2,
            spaceBetween: 1,
          },

          1024: {
            slidesPerView: 5.5,
            spaceBetween: 1,
          },
          1224: {
            slidesPerView: 6,
            spaceBetween: 1,
          },
          1440: {
            slidesPerView: 7.2,
            spaceBetween: 1,
          },
        }}
      >
        {items.map(item => {
          return (
            <SwiperSlide key={item.id} className='justify-self-center'>
              <button
                onClick={() => {
                  setActive(item.name);
                }}
                style={{
                  background:
                    active === item.name
                      ? 'linear-gradient(90deg, #3545D1 2.46%, #31A4C9 92.35%)'
                      : '',
                  border: active === item.name ? '' : '1px solid #0067BF',
                }}
                className={`${
                  active === item.name ? ' text-white' : ' text-black'
                } w-[160px] justify-center md:w-[183px]  bg-transparent text-center p-2.5 px-4 md:p-3.5 rounded-full text-sm sm:text-base md:text-lg lg:text-xl font-medium  `}
              >
                <p>{item.name}</p>
              </button>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default TabSwiper;
