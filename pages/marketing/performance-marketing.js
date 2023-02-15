import Blogs from '@/components/common/Blogs';
import GrowWithUs from '@/components/common/GrowWithUs';
import HeroSection from '@/components/common/HeroSection';
import ImpactCreated from '@/components/common/ImpactCreated';
import OurWorks from '@/components/common/OurWorks';
import Testimonial from '@/components/common/Testimonial';
import TechStack from '@/components/homePage/TechStack';
import Layout from '@/components/Layout';
// Hero Images

import hero1 from '/public/assets/images/subServices/frontend/hero1.png';
import hero2 from '/public/assets/images/subServices/frontend/hero2.png';

const testimonials = [
  {
    id: 1,
    name: 'Stephanie',
    // img: testimonial.src,
    userId: '@staphania',
    review: (
      <>
        "Third Eye Innovations provided solutions that not only produced a great
        website that met our needs, but also handled all of the new site's
        marketing. This has resulted in increased sales, which is a fantastic
        outcome. I would gladly recommend Third Eye Innovations to other
        businesses for their web development and marketing needs
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
        "Third Eye Innovation's professionalism and easygoing attitude toward
        designing our website and our numerous requests and changes to it
        impressed us. The website is simple to update and maintain, which was a
        major consideration in selecting Third Eye Innovations.
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
        "Best website development company for my online business; they assisted
        me with web design and digital marketing. I would recommend working with
        the team. Also, the best digital marketing company in Bangalore I've had
        the opportunity to work for the team for the past three years, and it's
        been an incredible experience.
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
        "It was a fantastic experience working with Third Eye Innovations. the
        ideal trifecta of professional, creative, and friendly. Very highly
        advisable.
      </>
    ),
    date: '23rd April ',
  },
];
const PerformanceMarketing = () => {
  return (
    <Layout>
      <section className=' relative overflow-x-clip mb-10  lg:mb-60'>
        <div className=' container   '>
          <HeroSection
            hero1={hero1}
            hero2={hero2}
            content={
              <span className='text-3xl md:text-4xl lg:text-6xl xl:text-7xl'>
                Your Business. Our performance. Guaranteed.
              </span>
            }
            description={
              <>
                Third Eye Innovation offers a result-driven and profitably
                profitable performance marketing management service. Our
                results-driven marketing strategy will always deliver the
                results for which you have paid. Our team combines technology
                and communication channels to conceptualise, design, and refine
                performance-driven campaigns that reduce risk while increasing
                ROI.
              </>
            }
          />
        </div>
      </section>

      <div className='sm:mt-24 mt-14  my-10 container '>
        <h3 className='lg:mt-6 text-lg  sm:text-xl lg:text-2xl text-black text-opacity-80'>
          We select the best performance marketing strategy and approach, as
          well as meticulous planning, to propel your online success. We share
          performance marketing tips and make the necessary optimizations with
          our performance marketing solutions.
        </h3>
      </div>

      <TechStack
        description={
          <>
            At Third Eye, we’re all about action. What are the{' '}
            <br className='hidden sm:block' /> specific actions that fuel your
            company's growth?{' '}
          </>
        }
        classes='max-w-7xl'
      />
      <OurWorks title={'Performance Marketing Works'} tag='PERFORMANCE' />
      {/* <GrowWithUs /> */}
      <ImpactCreated />
      <Blogs />
      <Testimonial testimonials={testimonials} />
    </Layout>
  );
};

export default PerformanceMarketing;
