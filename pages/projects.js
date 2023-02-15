import HeroSection from '@/components/common/HeroSection';
import OurWork from '@/components/homePage/OurWork';
import Layout from '@/components/Layout';
import React from 'react';

const projects = () => {
  return (
    <Layout>
      <section className='my-5 sm:my-10 lg:my-20 relative overflow-x-clip mb-10 sm:mb-24 md: lg:mb-60'>
        <div className=' container   '>
          <HeroSection
            content={
              <>
                We create impactful <br /> projects in design, <br />{' '}
                development, marketing
              </>
            }
          />
        </div>
      </section>
      <OurWork noTitle />
    </Layout>
  );
};

export default projects;
