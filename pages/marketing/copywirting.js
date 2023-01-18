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

const Copywriting = () => {
  return (
    <Layout>
      <section className=' relative overflow-x-clip mb-10  lg:mb-60'>
        <div className=' container mx-auto px-4  '>
          <HeroSection
            hero1={hero1}
            hero2={hero2}
            content={
              <span className='text-3xl md:text-4xl lg:text-6xl xl:text-7xl'>
                Copywriting
              </span>
            }
            description={
              <>
                To create great content, you need knowledge, expertise, and
                time. That is exactly what we do. Create great content that is
                addictively enjoyable and performs well in natural search
                results. So, if you need content writing services, we are your
                best bet. There are no overheads, no restrictions, and only
                high-quality content is delivered.
              </>
            }
          />
        </div>
      </section>

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
      <OurWorks />
      {/* <GrowWithUs /> */}
      <ImpactCreated />
      <Blogs />
      <Testimonial />
    </Layout>
  );
};

export default Copywriting;
