import Awards from '@/components/common/Awards';
import Blogs from '@/components/common/Blogs';
import Clients from '@/components/common/Clients';
import FAQs from '@/components/common/FAQ/FAQs';
import GraphicDesignWorks from '@/components/common/GraphicDesignWorks';
import HeroSection from '@/components/common/HeroSection';
import ImpactCreated from '@/components/common/ImpactCreated';
import OurWorks from '@/components/common/OurWorks';
import Testimonial from '@/components/common/Testimonial';
import Layout from '@/components/Layout';
// Hero Images

import hero1 from '/public/assets/images/subServices/ux/hero1.png';
import hero2 from '/public/assets/images/subServices/ux/hero2.png';
import hero3 from '/public/assets/images/subServices/ux/hero3.png';

const GraphicDesign = () => {
  return (
    <Layout>
      <section className=' relative overflow-x-clip mb-16  lg:mb-60'>
        <div className=' container mx-auto px-4  '>
          <HeroSection
            content={
              <span className='text-4xl md:text-5xl lg:text-7xl xl:text-8xl'>
                Graphic Design
              </span>
            }
            description={
              <>
                At Third Eye, we’re all about action. What are the <br />{' '}
                specific actions that fuel your company's growth? Do <br /> you
                need more consumers to buy your product?
              </>
            }
          />
        </div>
      </section>
      <div className='container h-[450px] mt-[-100px] max-w-6xl mx-auto relative '>
        <div className='absolute left-0'>
          <img src={hero1.src} alt='' />
        </div>
        <div className='absolute left-2/4 translate-y-2/3 -translate-x-2/4'>
          <img src={hero2.src} alt='' />
        </div>
        <div className='absolute right-0 top-0'>
          <img src={hero3.src} alt='' />
        </div>
      </div>
      <div className='mt-6 sm:mt-10 lg:mt-28 mb-10 container mx-auto px-4'>
        <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl max-w-[954px] lg:leading-[48.6px] text-black text-opacity-80'>
          At Third Eye, we’re all about action. What are the specific actions
          that fuel your company's growth? Do you need more consumers to buy
          your product? Or perhaps your goal is simply to generate more leads
          for your products and services? Whatever actions you're targeting,
          Third Eye can help.
        </h3>
      </div>
      <Clients title='Selected Clients' />
      <Awards />
      <GraphicDesignWorks />
      <OurWorks title={'UI Design Works'} />
      <ImpactCreated />
      <Blogs />
      <Testimonial />
      <FAQs />
    </Layout>
  );
};

export default GraphicDesign;
