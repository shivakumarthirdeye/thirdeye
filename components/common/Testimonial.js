import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import testimonial from '/public/assets/images/testimonial.png';
import testimonial2 from '/public/assets/images/testimonial2.png';

const testimonialInfo = [
  {
    id: 1,
    name: 'Stephanie',
    img: testimonial.src,
    userId: '@staphania',
    review: (
      <>
        At Third Eye, we’re all about action. What are the specific actions that
        fuel your company's growth? Do you need more consumers to buy your
        product?
        <br />
        <br />
        At Third Eye, we’re all about action. What are the specific actions that
        fuel your company's growth? Do you need more.
      </>
    ),
    date: '23rd April ',
  },
  {
    id: 2,
    name: 'Joseph',
    img: testimonial2.src,
    userId: '@Joseph',
    review: (
      <>
        "At Third Eye, we’re all about action. What are the specific actions
        that fuel your company's growth? Do you need more consumers to buy your
        product?
      </>
    ),
    date: '23rd April ',
  },
  {
    id: 3,
    name: 'Stephanie',
    img: testimonial.src,
    userId: '@staphania',
    review: (
      <>
        At Third Eye, we’re all about action. What are the specific actions that
        fuel your company's growth? Do you need more consumers to buy your
        product?
        <br />
        At Third Eye, we’re all about action. What are the specific actions that
        fuel your company's growth? Do you need more.
      </>
    ),
    date: '23rd April ',
  },
  {
    id: 4,
    name: 'Stephanie',
    img: testimonial.src,
    userId: '@staphania',
    review: (
      <>
        At Third Eye, we’re all about action. What are the specific actions that
        fuel your company's growth? Do you need more consumers to buy your
        product?
        <br />
        At Third Eye, we’re all about action. What are the specific actions that
        fuel your company's growth? Do you need more.
      </>
    ),
    date: '23rd April ',
  },
  {
    id: 5,
    name: 'Stephanie',
    img: testimonial.src,
    userId: '@staphania',
    review: (
      <>
        At Third Eye, we’re all about action. What are the specific actions that
        fuel your company's growth? Do you need more consumers to buy your
        product?
        <br />
        At Third Eye, we’re all about action. What are the specific actions that
        fuel your company's growth? Do you need more.
      </>
    ),
    date: '23rd April ',
  },
];

const Testimonial = () => {
  return (
    <section className='my-20'>
      <div className='container mx-auto px-4'>
        <h1 className='heading lg:[64px]'>What people say about us</h1>
      </div>{' '}
      <div className='my-20 px-4 sm:px-0'>
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            350: {
              slidesPerView: 1.2,
              spaceBetween: 15,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },

            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1440: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        >
          {testimonialInfo.map(item => {
            const { id, img, review, name, userId, date } = item;
            return (
              <SwiperSlide key={id} className=' w-full select-none'>
                <div className='border p-4 sm:p-5 rounded-xl font-poppins'>
                  <div className='flex gap-4'>
                    <div>
                      <img src={img} className='w-10 h-10' alt='' />
                    </div>
                    <div>
                      <h1 className='text-base font-medium text-[#355386]'>
                        {name}
                      </h1>
                      <h4 className='text-[#8093B3] text-sm'>{userId}</h4>
                    </div>
                  </div>
                  <div className='my-5 sm:my-10 text-sm md:text-base text-[#355386] leading-[24px]'>
                    {review}
                  </div>
                  <div>
                    <p className='text-[#355386] text-opacity-60 text-xs'>
                      {date}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
