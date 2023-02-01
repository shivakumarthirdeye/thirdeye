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

import hero1 from '/public/assets/gif/sub-services/graphic-design/1.gif';
import hero2 from '/public/assets/gif/sub-services/graphic-design/2.gif';
import hero3 from '/public/assets/gif/sub-services/graphic-design/3.gif';
// Award Images
import Award1 from '/public/assets/images/award/web-apps/1.png';
import Award2 from '/public/assets/images/award/web-apps/2.png';
import Award3 from '/public/assets/images/award/web-apps/3.png';
import Award4 from '/public/assets/images/award/web-apps/4.png';
import Award5 from '/public/assets/images/award/web-apps/5.png';

const awards = [
  { id: 1, img: Award1.src, name: 'Top rated ecommerce SEO agency' },
  { id: 2, img: Award2.src, name: 'Forbes agency council official member' },
  { id: 3, img: Award3.src, name: 'Top digital marketing company' },
  { id: 4, img: Award4.src, name: 'National excellence winner 2021' },
  { id: 5, img: Award5.src, name: 'Top digital agency 2021' },
];

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
              <span className='text-3xl md:text-4xl lg:text-6xl xl:text-7xl'>
                UX Design
              </span>
            }
            description={
              <>
                Third Eye Innovations <b>UX design company</b> can help you
                design products with flexibility in mind, and our strategic
                designs can be styled, layered, and adjusted to any technical
                stack that consistently helps customers achieve their goals,
                whether you are launching a new product or looking to improve an
                existing one.
              </>
            }
          />
        </div>
      </section>

      <div className='mt-6 sm:mt-10 lg:mt-28 mb-10 container mx-auto px-4'>
        <h3 className='text-4xl max-w-[954px] leading-[48.6px] text-black text-opacity-80'>
          At Third Eye, we’re all about action. What are the specific actions
          that fuel your company's growth? Do you need more consumers to buy
          your product? Or perhaps your goal is simply to generate more leads
          for your products and services? Whatever actions you're targeting,
          Third Eye can help.
        </h3>
      </div>
      <Clients tag='UIUX' />
      <Awards awards={awards} />
      <OurWorks title={'UI Design Works'} />
      <ImpactCreated />
      <Blogs />

      <Testimonial />
      <FAQs />
    </Layout>
  );
};

export default UIDesign;
