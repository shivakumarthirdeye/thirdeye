import ContactForm from '@/components/common/ContactForm';
import Layout from '@/components/Layout';
import Link from 'next/link';
import aboutImg from '/public/assets/images/about-us.png';
import mem1 from '/public/assets/images/our-team/1.png';
import mem2 from '/public/assets/images/our-team/2.png';
import mem3 from '/public/assets/images/our-team/3.png';
import mem4 from '/public/assets/images/our-team/4.png';

const ourTeam = [
  {
    id: 1,
    name: 'Member 1',
    designation: 'Developer',
    img: mem1.src,
  },
  {
    id: 2,
    name: 'Member 2',
    designation: 'Designer',
    img: mem2.src,
  },
  {
    id: 3,
    name: 'Member 3',
    designation: 'Developer',
    img: mem3.src,
  },
  {
    id: 4,
    name: 'Member 4',
    designation: 'Developer',
    img: mem4.src,
  },
];

const values = [
  {
    id: 1,
    title: 'Do the right thing',
    description:
      'We aimed to create a well-thought-out responsive webdesign to deliver fast-loading experience on all devices.',
  },
  {
    id: 2,
    title: 'Progress... not Perfection',
    description: `We strived to provide stunning UX/UI solutions within simple yet effective car dealer's website design.`,
  },
  {
    id: 3,
    title: 'Be Unparalleled',
    description: `We aimed to create a well-thought-out responsive webdesign to deliver fast-loading experience on all devices.`,
  },
  {
    id: 4,
    title: 'Data over Guesswork',
    description: `We strived to provide stunning UX/UI solutions within simple yet effective car dealer's website design.`,
  },
  {
    id: 5,
    title: 'Meaning through work',
    description: `We aimed to create a well-thought-out responsive webdesign to deliver fast-loading experience on all devices.`,
  },
];
const AboutUs = () => {
  return (
    <Layout>
      <section className='mx-auto container px-4 text-black text-opacity-80'>
        <div className='max-w-[828px]'>
          <h1 className='heading'>Imagining better Products with us</h1>
          <p className='text-black text-opacity-80 text-sm sm:text-lg md:text-xl lg:text-2xl '>
            A Links to Other Websites clause will inform users that you are not
            responsible for any third party websites that you link to. This kind
            of clause will generally inform users that they are responsible for
            reading and agreeing (or disagreeing) with the Terms and Conditions
            or Privacy Policies of these third parties.
          </p>
        </div>
        <div className='w-full my-5 md:my-10'>
          <img src={aboutImg.src} className='w-full h-full' alt='' />
        </div>
        <div className='text-black max-w-[828px] text-opacity-80 text-sm sm:text-lg md:text-xl lg:text-2xl '>
          <p>
            Parallel started back in 2014, when India was just rising upto tech
            startups and companies needed help to build great product
            experiences but designers who understood digital products were far
            and few. ‍
          </p>
          <br />
          <p>
            The idea was to be an antithesis of how agencies work and redefine
            what it means to work in "Parallel". We created new levels of
            collaboration bringing together an holistic understanding of
            business, design, data and technology to the table and create value
            as a strategic partner.
          </p>
          <br />

          <h2 className='my-5 text-2xl sm:text-3xl md:text-4xl lg:text-[40px] md:!leading-[48.41px]'>
            In the last 8 years, we have helped over 50 partners across
            startups, fortune 500 and governments build better products.
          </h2>
        </div>
        <div className='my-5 md:my-10 lg:my-20'>
          <div className='flex justify-between items-center'>
            <h1 className='text-2xl text-black  text-opacity-80  sm:text-3xl md:text-4xl lg:text-[40px] md:!leading-[48.41px]'>
              Our Team
            </h1>
            <div>
              <Link href='/teams'>
                <a className='bg-black p-2 px-3 rounded md:text-lg space-x-2 text-white flex items-center'>
                  <p>Meet the team </p>
                  <div>
                    <svg
                      width='21'
                      height='15'
                      viewBox='0 0 21 15'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M20.7071 8.20711C21.0976 7.81658 21.0976 7.18342 20.7071 6.7929L14.3431 0.428933C13.9526 0.038409 13.3195 0.038409 12.9289 0.428933C12.5384 0.819458 12.5384 1.45262 12.9289 1.84315L18.5858 7.5L12.9289 13.1569C12.5384 13.5474 12.5384 14.1805 12.9289 14.5711C13.3195 14.9616 13.9526 14.9616 14.3431 14.5711L20.7071 8.20711ZM-8.74228e-08 8.5L20 8.5L20 6.5L8.74228e-08 6.5L-8.74228e-08 8.5Z'
                        fill='white'
                      />
                    </svg>
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className='sm:grid mx-auto  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10'>
            {ourTeam.map(item => {
              const { id, designation, img, name } = item;

              return (
                <div
                  className='w-full text-black  max-w-[450px] mx-auto  text-opacity-80'
                  key={id}
                >
                  <img
                    src={img}
                    className='w-full  max-h-[380.74px] object-cover'
                    alt=''
                  />
                  <div className='my-4'>
                    <h1 className='text-base sm:text-lg md:text-xl lg:text-2xl'>
                      {name}
                    </h1>
                    <h4 className='text-xs sm:text-sm md:text-base'>
                      {designation}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h3>OUR VALUES</h3>
          <div className='relative w-fit'>
            <h1 className='text-2xl py-1 sm:text-3xl md:text-4xl lg:text-5xl '>
              What gets us out of bed every morning
            </h1>
          </div>
          <div className='grid md:grid-cols-2 my-5 md:my-10 lg:my-20 gap-10'>
            {values.map(item => {
              const { description, id, title } = item;
              return (
                <div key={id} className='relative'>
                  <h2 className='text-2xl py-1 sm:text-3xl md:text-4xl lg:text-5xl'>
                    0{id}
                  </h2>
                  <div className='w-full absolute  h-[1px] md:h-[2px]  bg-black bg-opacity-80 '></div>
                  <div className='py-5'>
                    <h1 className='text-2xl mb-2'>{title}</h1>
                    <p>{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className='my-5 md:my-10 lg:my-20'>
          <ContactForm />
        </div>
      </section>
    </Layout>
  );
};

export default AboutUs;
