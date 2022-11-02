import GrowWithUs from '@/components/common/GrowWithUs';
import HeroSection from '@/components/common/HeroSection';
import OurWorks from '@/components/common/OurWorks';
import TechStack from '@/components/homePage/TechStack';
import Layout from '@/components/Layout';
// Hero Images

import hero1 from '/public/assets/images/subServices/frontend/hero1.png';
import hero2 from '/public/assets/images/subServices/frontend/hero2.png';

const Backend = () => {
  return (
    <Layout>
      <section className=' relative overflow-x-clip mb-16  lg:mb-60'>
        <div className=' container mx-auto px-4  '>
          <HeroSection
            content={
              <span className='text-4xl md:text-5xl lg:text-7xl xl:text-8xl'>
                Backend <br /> development
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
      <div className='container px-4 h-[35vw] md:mt-40 md:h-[450px] max-w-6xl mx-auto relative '>
        <div className='absolute w-2/4 left-5'>
          <img src={hero1.src} alt='' className='w-full object-cover' />
        </div>
        <div className='absolute left-2/4 top-1/4 w-2/4   -translate-x-1/4'>
          <img src={hero2.src} alt='' className='w-full object-cover' />
        </div>
      </div>
      <div className='sm:mt-24 mt-14  my-10 container mx-auto px-4'>
        <h3 className='lg:mt-6 text-lg  sm:text-xl lg:text-2xl text-black text-opacity-80'>
          At Third Eye, we’re all about action. What are the specific actions
          that fuel your company's growth? Do you need more consumers to buy
          your product? Or perhaps your goal is simply to generate more leads
          for your products and services? Whatever actions you're targeting,
          Third Eye can help.
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
      <OurWorks title={'Development Works'} />
      {/* <GrowWithUs /> */}
    </Layout>
  );
};

export default Backend;
