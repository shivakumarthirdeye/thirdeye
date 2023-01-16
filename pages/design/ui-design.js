import Awards from '@/components/common/Awards';
import Blogs from '@/components/common/Blogs';
import Clients from '@/components/common/Clients';
import FAQs from '@/components/common/FAQ/FAQs';
import HeroSection from '@/components/common/HeroSection';
import ImpactCreated from '@/components/common/ImpactCreated';
import OurWorks from '@/components/common/OurWorks';
import Testimonial from '@/components/common/Testimonial';
import Layout from '@/components/Layout';
// Hero Images

import hero1 from '/public/assets/images/subServices/ui/1.gif';
import hero2 from '/public/assets/images/subServices/ui/2.gif';
import hero3 from '/public/assets/images/subServices/ui/3.gif';

const UIDesign = () => {
  return (
    <Layout>
      <section className=' relative overflow-x-clip mb-16  lg:mb-60'>
        <div className=' container mx-auto px-4  '>
          <HeroSection
            hero1={hero1}
            hero2={hero2}
            hero3={hero3}
            content={
              <span className='text-4xl sm:text-5xl md:text-6xl lg:text-8xl'>
                UI Design
              </span>
            }
            description={
              <>
                As a leading <b>UI design company</b>, Third Eye Innovations
                assists brands in navigating all aspects of today's and
                tomorrow's digital landscape. Good UI design begins with solid
                UI knowledge, which our teams have in abundance. We are
                user-focused and customer-centric, creating experiences that
                deliver tangible business results.
              </>
            }
          />
        </div>
      </section>

      <div className='mt-6 sm:mt-10 lg:mt-28 mb-10 container mx-auto px-4'>
        <h3 className=' text-lg sm:text-2xl  xl:text-4xl max-w-[954px] sm:leading-[38px] lg:leading-[48.6px] text-black text-opacity-80'>
          At Third Eye, we’re all about action. What are the specific actions
          that fuel your company's growth? Do you need more consumers to buy
          your product? Or perhaps your goal is simply to generate more leads
          for your products and services? Whatever actions you're targeting,
          Third Eye can help.
        </h3>
      </div>
      <Clients title='Selected Clients' />
      <Awards />
      <OurWorks title={'UI Design Works'} />
      <ImpactCreated />
      <Blogs />
      <Testimonial />
      <FAQs />
    </Layout>
  );
};

export default UIDesign;
