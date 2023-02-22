import { Swiper, SwiperSlide } from 'swiper/react';
import allClients from '@/utils/clients.json';
import { Autoplay } from 'swiper';

const { clients } = allClients;

const Clients = ({ svg, tag, title = 'Selected Clients' }) => {
  return (
    <div className='relative py-5 sm:py-10    overflow-hidden'>
      {svg && (
        <svg
          className='absolute left-0  top-[-350px] xl:top-[-350px] z-[-10]  w-[200px] h-[500px] xl:w-[271px] xl:h-[585px]'
          viewBox='0 0 271 585'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle
            cx='-21.5'
            cy='292.5'
            r='291.5'
            stroke='#B1C7FF'
            strokeWidth='2'
          />
        </svg>
      )}

      <div className='container mx-auto  px-4'>
        <h1 className='heading lg:text-[64px] '>{title}</h1>
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className='mt-10 items-center client-swiper justify-center '
          breakpoints={{
            400: {
              slidesPerView: 2.2,
            },
            500: {
              slidesPerView: 3.2,
            },
            800: {
              slidesPerView: 4.7,
            },

            1024: {
              slidesPerView: 5,
            },
            // 1224: {
            //   slidesPerView:
            //     clients.filter(item => {
            //       if (tag) {
            //         return item?.tags?.includes(tag);
            //       } else {
            //         return item;
            //       }
            //     }).length > 7
            //       ? 6.2
            //       : 5,
            // },
            // 1440: {
            //   slidesPerView:
            //     clients.filter(item => {
            //       if (tag) {
            //         return item?.tags?.includes(tag);
            //       } else {
            //         return item;
            //       }
            //     }).length > 7
            //       ? 7
            //       : clients.filter(item => {
            //           if (tag) {
            //             return item?.tags?.includes(tag);
            //           } else {
            //             return item;
            //           }
            //         }).length,
            // },
          }}
        >
          {clients
            .filter(item => {
              if (tag) {
                return item?.tags?.includes(tag);
              } else {
                return item;
              }
            })
            .map(item => {
              const { id, img, name } = item;
              return (
                <SwiperSlide key={item.id} className='justify-self-center '>
                  <img
                    title={name}
                    loading='lazy'
                    className='w-auto mx-auto mix-blend-multiply'
                    src={img}
                    key={id}
                  />
                </SwiperSlide>
              );
            })}
        </Swiper>
        {/* <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(auto-fit,minmax(200px,1fr))`,
          }}
          className='my-5  items-center gap-x-3 gap-y-5 '
        >
          {clients.map(item => {
            const { id, img } = item;

            return (
              <img
                loading='lazy'
                className='w-auto mx-auto mix-blend-multiply'
                src={img}
                key={id}
              />
            );
          })}
        </div> */}
      </div>
    </div>
  );
};

export default Clients;
