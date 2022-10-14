import Awards from '@/components/common/Awards';
import Clients from '@/components/common/Clients';
import HeroSection from '@/components/common/HeroSection';
import OurWorks from '@/components/common/OurWorks';
import Testimonial from '@/components/common/Testimonial';
import Layout from '@/components/Layout';

const UIDesign = () => {
  return (
    <Layout>
      <section className=' relative overflow-x-clip mb-16  lg:mb-60'>
        <div className=' container mx-auto px-4  '>
          <HeroSection
            content={<span className='text-8xl'>UI Design</span>}
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
      <Clients />
      <Awards />
      <OurWorks title={'UI Design Works'} />
      <Testimonial />
    </Layout>
  );
};

export default UIDesign;
