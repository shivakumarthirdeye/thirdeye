import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const TabSwiper = ({ items, active, setActive, work }) => {
  return (
    <div className='bg-[#ECECEC] py-3 md:py-4 px-2'>
      <Swiper
        slidesPerView={1.2}
        className={work && 'tabs-swiper'}
        breakpoints={{
          350: {
            slidesPerView: 1.5,
            spaceBetween: 1,
          },
          500: {
            slidesPerView: 2.5,
            spaceBetween: 1,
          },
          640: {
            slidesPerView: 3.2,
            spaceBetween: 1,
          },
          800: {
            slidesPerView: 4.2,
            spaceBetween: 1,
          },

          1024: {
            slidesPerView: 5,
            spaceBetween: 1,
          },
          1440: {
            slidesPerView: 6.8,
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
                className={`${
                  active === item.name
                    ? 'bg-black text-white'
                    : 'bg-[#D9D9D9] text-black'
                } 'w-[120px] md:w-[183px]  text-center p-2 px-4 md:p-4  rounded-full text-sm sm:text-base md:text-lg lg:text-xl font-medium'`}
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
