import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import testimonial from '/public/assets/images/testimonial.png';
import testimonial2 from '/public/assets/images/testimonial2.png';

const testimonialInfo = [
  {
    id: 1,
    name: 'Stephanie',
    // img: testimonial.src,
    userId: '@staphania',
    review: (
      <>
        "They created ideas. The product displayed information clearly and
        smoothly tracked user data. Third Eye Innovations UX design
        distinguishes itself through efficient coding practices and stunning
        design concepts
      </>
    ),
    date: '23rd April ',
  },
  {
    id: 2,
    name: 'Joseph',
    // img: testimonial1.src,
    userId: '@Joseph',
    review: (
      <>
        "Their dedication to raising design standards and their promise of
        on-time delivery make them a dependable partner.
      </>
    ),
    date: '23rd April ',
  },
  {
    id: 3,
    name: 'Stephanie',
    // img: testimonial.src,
    userId: '@staphania',
    review: (
      <>
        "It's an excellent Web design and development firm. The Third Eye
        Innovations team advised us on current trends and provided us with smart
        content.
      </>
    ),
    date: '23rd April ',
  },
  {
    id: 4,
    name: 'Stephanie',
    // img: testimonial.src,
    userId: '@staphania',
    review: (
      <>
        "Working with Third eye Innovations has been an absolute pleasure
        because of their excellent technical skills and creative insights. They
        encouraged the concept to completion, and the outcome is stunning.
      </>
    ),
    date: '23rd April ',
  },
];

const Testimonial = ({ testimonials = testimonialInfo }) => {
  return (
    <section className='my-10 md:my-20'>
      <div className='container mx-auto px-4'>
        <h1 className='heading lg:[64px]'>What people say about us</h1>
      </div>{' '}
      <div className='my-10 md:my-20 px-4 sm:px-0'>
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
          {testimonials.map(item => {
            const { id, img, review, name, userId, date } = item;
            return (
              <SwiperSlide key={id} className=' w-full select-none'>
                <div className='border p-4 sm:p-5 rounded-xl font-poppins'>
                  <div className='flex gap-4'>
                    <div>
                      <img
                        src={img || testimonial.src}
                        className='w-10 h-10'
                        alt=''
                      />
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
