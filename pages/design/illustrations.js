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

import hero1 from '/public/assets/images/subServices/ui/Hero1.png';
import hero2 from '/public/assets/images/subServices/ui/Hero2.png';
import hero3 from '/public/assets/images/subServices/ui/Hero3.png';

const Illustrations = () => {
  return (
    <Layout>
      <section className=' relative overflow-x-clip mb-16  lg:mb-60'>
        <div className=' container   '>
          <HeroSection
            hero1={hero1}
            hero2={hero2}
            hero3={hero3}
            content={
              <span className='text-3xl md:text-4xl lg:text-6xl xl:text-7xl'>
                Illustrations
              </span>
            }
            description={
              <>
                At Third Eye, we’re all about action. What are the{' '}
                <br className='hidden sm:block' /> specific actions that fuel
                your company's growth? Do <br className='hidden sm:block' /> you
                need more consumers to buy your product?
              </>
            }
          />
        </div>
      </section>

      <div className='mt-6 sm:mt-10 lg:mt-28 mb-10 container '>
        <h3 className='text-4xl max-w-[954px] leading-[48.6px] text-black text-opacity-80'>
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

export default Illustrations;
