import reactIcon from '/public/assets/images/react.png';
import awsIcon from '/public/assets/images/aws.png';
import pythonIcon from '/public/assets/images/python.png';
import { GreenLeft, GreenRight } from '../common/ShadeSVGs';
import { Swiper, SwiperSlide } from 'swiper/react';
import tech1 from '/public/assets/images/techstack/1.png';
import tech2 from '/public/assets/images/techstack/2.png';
import tech3 from '/public/assets/images/techstack/3.png';
import tech4 from '/public/assets/images/techstack/4.png';
import tech5 from '/public/assets/images/techstack/5.png';
import tech6 from '/public/assets/images/techstack/6.png';
import tech7 from '/public/assets/images/techstack/7.png';
import tech8 from '/public/assets/images/techstack/8.png';
import { Autoplay } from 'swiper';

const stacks = [
  { id: 1, name: 'PHP', img: reactIcon.src },
  { id: 2, name: 'AWS', img: awsIcon.src },
  { id: 3, name: 'Python', img: pythonIcon.src },
  { id: 4, name: 'React Native', img: reactIcon.src },
];

const stacks2 = [
  { id: 1, name: 'PHP', img: tech1.src },
  { id: 2, name: 'LARAVEL', img: tech2.src },
  { id: 3, name: 'TYPESCRIPT', img: tech3.src },
  { id: 4, name: 'NODE', img: tech4.src },
  { id: 5, name: 'REDUX', img: tech5.src },
  { id: 6, name: 'REACT NATIVE', img: tech6.src },
  { id: 7, name: 'FIREBASE', img: tech7.src },
  { id: 8, name: 'WORDPRESS', img: tech8.src },
];

const TechStack = ({ description, classes, homePage }) => {
  return (
    <section className='py-5 lg:py-10 relative'>
      <div className={`container   mx-auto px-4`}>
        <div>
          <h1 className={homePage ? 'heading' : 'smallHeading'}>
            Tech stack used
          </h1>
          {description && (
            <p className=' text-base sm:text-xl md:text-2xl lg:text-4xl lg:leading-[48.6px] text-black text-opacity-80 my-5'>
              {description}
            </p>
          )}
        </div>
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          autoplay={{
            delay: 1400,
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
          }}
        >
          {stacks2.map(item => {
            const { id, img, name } = item;
            return (
              <SwiperSlide key={item.id} className='justify-self-center '>
                <img
                  title={name}
                  loading='lazy'
                  className='object-cover sm:w-auto h-20 sm:h-auto mx-auto mix-blend-multiply'
                  src={img}
                  key={id}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        {/* {homePage ? (
          <div className='my-20 grid grid-cols-3 md:grid-cols-4 place-items-center gap-x-5 gap-y-10 md:gap-12  max-w-7xl mx-auto'>
            {stacks.map(item => {
              const { id, img, name } = item;

              return (
                <img
                  loading='lazy'
                  src={img}
                  className={`${
                    id === 4 ? 'hidden md:block' : ''
                  } w-[70px]  h-[60px] sm:w-auto sm:h-auto`}
                  title={name}
                  alt={name}
                  key={id}
                />
              );
            })}
          </div>
        ) : (
          <div className='my-20 grid grid-cols-3 place-items-center  max-w-4xl mx-auto'>
            {stacks.slice(0, 3).map(item => {
              const { id, img, name } = item;

              return (
                <img
                  loading='lazy'
                  src={img}
                  className={`${
                    id === 4 ? 'hidden md:block' : ''
                  } w-[70px]  h-[60px] md:w-auto md:h-auto`}
                  title={name}
                  alt={name}
                  key={id}
                />
              );
            })}
          </div>
        )} */}
      </div>
      <div className='absolute left-0 hidden md:block top-[-200px] z-[-10] overflow-hidden '>
        <GreenLeft />
      </div>
    </section>
  );
};

export default TechStack;
