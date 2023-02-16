import Awards from '@/components/common/Awards';
import Blogs from '@/components/common/Blogs';
import Clients from '@/components/common/Clients';
import FAQs from '@/components/common/FAQ/FAQs';
import GrowWithUs from '@/components/common/GrowWithUs';
import HeroSection from '@/components/common/HeroSection';
import ImpactCreated from '@/components/common/ImpactCreated';
import OurWorks from '@/components/common/OurWorks';
import Testimonial from '@/components/common/Testimonial';
import TechStack from '@/components/homePage/TechStack';
import Layout from '@/components/Layout';
// Hero Images

import hero1 from '/public/assets/gif/sub-services/mobile-application/1.gif';
import hero2 from '/public/assets/gif/sub-services/mobile-application/2.gif';
import hero3 from '/public/assets/gif/sub-services/mobile-application/3.gif';
// Award Images
import Award1 from '/public/assets/images/award/mobile-apps/1.png';
import Award2 from '/public/assets/images/award/mobile-apps/2.png';
import Award3 from '/public/assets/images/award/mobile-apps/3.png';
import Award4 from '/public/assets/images/award/mobile-apps/4.png';
import Award5 from '/public/assets/images/award/mobile-apps/5.png';

const awards = [
  { id: 1, img: Award1.src, name: 'Top rated ecommerce SEO agency' },
  { id: 2, img: Award2.src, name: 'Forbes agency council official member' },
  { id: 3, img: Award3.src, name: 'Top digital marketing company' },
  { id: 4, img: Award4.src, name: 'National excellence winner 2021' },
  { id: 5, img: Award5.src, name: 'Top digital agency 2021' },
];
const testimonials = [
  {
    id: 1,
    name: 'Stephanie',
    // img: testimonial.src,
    userId: '@staphania',
    review: (
      <>
        "Their dedication to raising design standards and their promise of
        on-time delivery make them a dependable partner.
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
        "They created ideas. The product displayed information clearly and
        smoothly tracked user data.
        <br />
        <br /> Third Eye Innovations UX design distinguishes itself through
        efficient coding practices and stunning design concepts.
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

const MobileApps = () => {
  return (
    <Layout>
      <section className=' relative overflow-x-clip !mb-0'>
        <div className=' container   '>
          <HeroSection
            hero1={hero1}
            hero2={hero2}
            hero3={hero3}
            content={
              <span className='text-3xl md:text-4xl lg:text-6xl xl:text-7xl'>
                Quality and Experience Drive Global Brands
              </span>
            }
            description={
              <>
                Since we are the best <b>mobile app development</b> company, our
                devoted team will offer you complete solutions for all of your
                mobile app needs.
              </>
            }
            smallDescription={`To create a distinctive, innovative, top-notch mobile app design, we carry out extensive marketing research on customers, competitor strategies, and sector leaders. We also provide cutting-edge solutions for a variety of industries. Our company has evolved into a one-stop shop for everything from the planning stages of a mobile application to its marketing.`}
          />
        </div>
      </section>

      {/* <TechStack
        description={
          <>
            At Third Eye, we’re all about action. What are the{' '}
            <br className='hidden sm:block' /> specific actions that fuel your
            company's growth?{' '}
          </>
        }
        classes='max-w-7xl'
      /> */}
      <Clients tag='MOBILE' />
      <Awards awards={awards} />
      <OurWorks title={'Mobile App Works'} tag='MOBILE' />
      {/* <GrowWithUs /> */}
      <ImpactCreated />
      <Blogs />
      <Testimonial testimonials={testimonials} />
      <FAQs />
    </Layout>
  );
};

export default MobileApps;
