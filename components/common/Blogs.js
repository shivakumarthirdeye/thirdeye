import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import blog1 from '/public/assets/images/blog/1.png';
import blog2 from '/public/assets/images/blog/2.png';
import blog3 from '/public/assets/images/blog/3.png';
import blog4 from '/public/assets/images/blog/4.png';
import useSWR from 'swr';
import { categoryColor, getStrapiInfo, getStrapiMedia } from 'utils/config';

const blogs = [
  {
    id: 1,
    heading: 'Impact Created',
    img: blog1,
    description: `At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? `,
    category: 'Design',
    bgColor: '#dbdaff',
    color: '#3532C9',
  },

  {
    id: 2,
    heading: 'How to scale your product',
    img: blog2,
    description: `At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? `,
    category: 'Marketing',
    bgColor: '#e9fff6',
    color: '#32C9AE',
  },
  {
    id: 3,
    heading: 'Impact Created',
    img: blog3,
    description: `At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? `,
    category: 'Development',
    bgColor: '#FAF0FD',
    color: '#B02E8C',
  },
  {
    id: 4,
    heading: 'Impact Created',
    img: blog4,
    description: `At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? `,
    category: 'Design',
    bgColor: '#DBDAFF',
    color: '#3532C9',
  },
];

const fetcher = async (...args) => fetch(...args).then(res => res.json());

const Blogs = props => {
  // const { data, error, isValidating } = useSWR(
  //   `http://localhost:1337/api/articles?populate=cover,category`,
  //   fetcher
  // );

  // if (isValidating) {
  //   return <p className='text-center'>loading...</p>;
  // }

  return (
    <section className='overflow-hidden'>
      <div className='container mx-auto  px-4'>
        <h1 className='heading '>Blogs</h1>
        <div className='my-20  sm:px-0 container   mx-auto'>
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-blog-next',
              prevEl: '.swiper-blog-prev',
            }}
            className='ourWorkSwiper'
            // navigation={true}
            modules={[Navigation]}
            breakpoints={{
              600: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              800: {
                slidesPerView: 2.5,
                spaceBetween: 20,
              },

              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
              1120: {
                slidesPerView: 3.5,
                spaceBetween: 50,
              },
              1440: {
                slidesPerView: 4.5,
                spaceBetween: 50,
              },
            }}
          >
            <div className='absolute top-[-80px] right-0 lg:right-20  z-10'>
              <div className=' flex gap-5'>
                <button className='swiper-blog-prev       disabled:pointer-events-none disabled:opacity-60     cursor-pointer  '>
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
                <button className='swiper-blog-next     disabled:pointer-events-none  disabled:opacity-60  cursor-pointer  '>
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
            {/* {data?.data?.map(blog => {
              const {
                attributes: { category, cover, title, description },
                id,
              } = blog;

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

                          src={getStrapiMedia(cover)}
                          className='w-full h-[216px] object-cover rounded-lg'
                          alt=''
                        />
                      </div>
                      <div className='flex justify-between items-center'>
                        <div
                          className={`my-5 rounded-full `}
                          style={{
                            background:
                              categoryColor[getStrapiInfo(category, 'name')][0],
                          }}
                        >
                          <p
                            className={` text-sm p-2 px-4`}
                            style={{
                              color:
                                categoryColor[
                                  getStrapiInfo(category, 'name')
                                ][1],
                            }}
                          >
                            {getStrapiInfo(category, 'name')}
                          </p>
                        </div>
                        <p className='text-black text-opacity-40 text-sm'>
                          4 min
                        </p>
                      </div>
                      <div>
                        <h1 className=' sm:text-xl lg:text-2xl underline'>
                          {title}
                        </h1>
                        <p className='text-sm sm:text-base py-2'>
                          {description}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })} */}
            {blogs.map(item => {
              const {
                id,
                img,
                category,
                heading,
                bgColor,
                color,
                description,
              } = item;

              return (
                <SwiperSlide
                  key={id}
                  className=' w-full select-none justify-center'
                >
                  <div className='flex justify-center'>
                    <div>
                      <div>
                        <img
                          src={img.src}
                          className='w-full h-[216px] object-cover rounded-lg'
                          alt=''
                        />
                      </div>
                      <div className='flex justify-between items-center'>
                        <div
                          className={`my-5 rounded-full `}
                          style={{
                            background: bgColor,
                          }}
                        >
                          <p
                            className={` text-sm p-2 px-4`}
                            style={{
                              color,
                            }}
                          >
                            {category}
                          </p>
                        </div>
                        <p className='text-black text-opacity-40 text-sm'>
                          4 min
                        </p>
                      </div>
                      <div>
                        <h1 className=' sm:text-xl lg:text-2xl underline'>
                          {heading}
                        </h1>
                        <p className='text-sm sm:text-base py-2'>
                          {description}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
