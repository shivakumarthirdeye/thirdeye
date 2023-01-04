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
            content={
              <span className='text-4xl sm:text-5xl md:text-6xl lg:text-8xl'>
                UI Design
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
      <div className='container h-[35vw] sm:h-[250px] md:h-[400px] lg:h-[450px]  md:mt-[150px] lg:mt-[-100px] max-w-6xl mx-auto relative '>
        <div className='absolute  sm:left-0'>
          <img
            className='max-w-[40vw] sm:max-w-[280px] md:max-w-sm lg:w-full h-full'
            src={hero1.src}
            alt=''
          />
        </div>
        <div className='absolute left-2/4 translate-y-2/3 -translate-x-2/4'>
          <img
            className='max-w-[40vw] sm:max-w-[280px]  md:max-w-sm lg:w-full h-full'
            src={hero2.src}
            alt=''
          />
        </div>
        <div className='absolute right-0 top-0'>
          <img
            className='max-w-[40vw] sm:max-w-[280px] md:max-w-sm  lg:w-full h-full'
            src={hero3.src}
            alt=''
          />
        </div>
      </div>
      <div className='mt-6 sm:mt-10 lg:mt-28 mb-10 container mx-auto px-4 px-4'>
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
