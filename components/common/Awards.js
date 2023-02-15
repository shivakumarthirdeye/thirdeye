import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Award1 from '/public/assets/images/award/award1.png';
import Award2 from '/public/assets/images/award/award2.png';
import Award3 from '/public/assets/images/award/award3.png';
import Award4 from '/public/assets/images/award/award4.png';
import Award5 from '/public/assets/images/award/award5.png';
import Award6 from '/public/assets/images/award/award6.png';

const allAwards = [
  { id: 1, img: Award1.src, name: 'Top rated ecommerce SEO agency' },
  { id: 2, img: Award2.src, name: 'Forbes agency council official member' },
  { id: 3, img: Award3.src, name: 'Top digital marketing company' },
  { id: 4, img: Award4.src, name: 'National excellence winner 2021' },
  { id: 5, img: Award5.src, name: 'Top digital agency 2021' },
  { id: 6, img: Award6.src, name: 'Best SEO company' },
];

const Awards = ({ awards = allAwards }) => {
  return (
    <div>
      <div className='container mx-auto pb-10  px-4'>
        <h1 className='heading '>Awards & Recognition</h1>
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          autoplay={{
            delay: 750,
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
          {awards.map(item => {
            const { id, img, name } = item;
            return (
              <SwiperSlide key={item.id} className='justify-self-center '>
                <img
                  title={name}
                  loading='lazy'
                  className='h-[110px] md:w-[150px] md:h-[135px] cover mx-auto mix-blend-multiply'
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
          className={`my-6 md:my-10`}
        >
          {awards.map(award => {
            const { id, name, img } = award;

            return (
              <div
                key={id}
                className='flex justify-center  flex-col items-center'
              >
                <img
                  loading='lazy'
                  src={img}
                  alt=''
                  className='
                  min-w-[60px] min-h-[60px] max-h-[60px] max-w-[60px]
                   sm:min-w-[110.19px] sm:min-h-[110.19px] sm:max-h-[110.19px] sm:max-w-[110.19px]  object-cover mix-blend-multiply'
                />
                <h1 className='text-[10px] sm:text-base max-w-[200.94px] my-4 text-center'>
                  {name}
                </h1>
              </div>
            );
          })}
        </div> */}
      </div>
    </div>
  );
};

export default Awards;
