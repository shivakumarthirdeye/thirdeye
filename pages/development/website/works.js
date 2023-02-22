import HeroSection from '@/components/common/HeroSection';
import Layout from '@/components/Layout';
import WebsiteWorks from '@/components/sub-services/website-works/WebsiteWorks';
import React from 'react';

const works = () => {
  return (
    <Layout>
      <section className=' relative overflow-x-clip mb-10  lg:mb-60'>
        <div className=' container   '>
          <HeroSection
            content={
              <span className='text-3xl md:text-4xl lg:text-6xl xl:text-7xl'>
                Website Development <br className='hidden xs:block' /> Works
              </span>
            }
          />
        </div>
      </section>
      <WebsiteWorks />
    </Layout>
  );
};

export default works;
