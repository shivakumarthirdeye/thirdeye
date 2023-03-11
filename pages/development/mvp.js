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

import hero1 from '/public/assets/images/subServices/frontend/hero1.png';
import hero2 from '/public/assets/images/subServices/frontend/hero2.png';

const Websites = () => {
  return (
    <Layout>
      <section className=' relative overflow-x-clip mb-10  lg:mb-60'>
        <div className=' container   '>
          <HeroSection
            hero1={hero1}
            hero2={hero2}
            content={
              <span className='text-3xl md:text-4xl lg:text-6xl xl:text-7xl'>
                Minimum Viable Product (MVP) development services for startups
              </span>
            }
            description={
              <>
                With the help of our top-notch development team, which possesses
                knowledge of various tech stacks, you can create scalable and
                market-ready MVPs more quickly.
              </>
            }
            smallDescription={
              <>
                TWith a market-ready MVP, you can quickly gather insightful
                customer feedback and make product improvements before
                allocating a larger budget to your product development. Third
                Eye Innovations, the best <b>MVP development</b> company, can
                transform your idea into a scalable product more quickly.
              </>
            }
          />
        </div>
      </section>

      <TechStack
        // description={
        //   <>
        //     At Third Eye, we’re all about action. What are the{' '}
        //     <br className='hidden sm:block' /> specific actions that fuel your
        //     company's growth?{' '}
        //   </>
        // }
        classes='max-w-7xl'
      />
      <OurWorks title={'MVP Works'} tag='MVP' />
      <ImpactCreated />
      <Blogs />
      <Testimonial />
      <FAQs />
      {/* <GrowWithUs /> */}
    </Layout>
  );
};

export default Websites;
