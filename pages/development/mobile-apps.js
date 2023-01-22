import Blogs from '@/components/common/Blogs';
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

const MobileApps = () => {
  return (
    <Layout>
      <section className=' relative overflow-x-clip mb-10  lg:mb-60'>
        <div className=' container mx-auto px-4  '>
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
                Since we are the best <b> mobile app development company</b>,
                our devoted team will offer you complete solutions for all of
                your mobile app needs. To create a distinctive, innovative,
                top-notch <b>mobile app design</b>, we carry out extensive
                marketing research on customers, competitor strategies, and
                sector leaders.
              </>
            }
          />
        </div>
      </section>

      <div className='sm:mt-24 mt-14  my-10 container mx-auto px-4'>
        <h3 className='lg:mt-6 text-lg  sm:text-xl lg:text-2xl text-black text-opacity-80'>
          We also provide cutting-edge solutions for a variety of industries.
          Our company has evolved into a one-stop shop for everything from the
          planning stages of a mobile application to its marketing.
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
      <OurWorks title={'Mobile App Works'} tag='MOBILE' />
      {/* <GrowWithUs /> */}
      <ImpactCreated />
      <Blogs />
      <Testimonial />
      <FAQs />
    </Layout>
  );
};

export default MobileApps;
