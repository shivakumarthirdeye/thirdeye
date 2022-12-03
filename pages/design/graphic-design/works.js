import Awards from '@/components/common/Awards';
import Blogs from '@/components/common/Blogs';
import Clients from '@/components/common/Clients';
import FAQs from '@/components/common/FAQ/FAQs';
import HeroSection from '@/components/common/HeroSection';
import ImgSwiperInfinite from '@/components/common/ImgSwiperInfinite';
import ImpactCreated from '@/components/common/ImpactCreated';
import OurWorks from '@/components/common/OurWorks';
import TabSwiper from '@/components/common/TabSwiper';
import Testimonial from '@/components/common/Testimonial';
import Layout from '@/components/Layout';
import { useState } from 'react';
// Hero Images

import lynktownImg1 from '/public/assets/images/subServices/graphic-works/works/lynktown/1.png';
import lynktownImg2 from '/public/assets/images/subServices/graphic-works/works/lynktown/2.png';
import spoclearnImg1 from '/public/assets/images/subServices/graphic-works/works/spoclearn/1.png';
import spoclearnImg2 from '/public/assets/images/subServices/graphic-works/works/spoclearn/2.png';
import spoclearnImg3 from '/public/assets/images/subServices/graphic-works/works/spoclearn/3.png';

const tabs = [
  {
    id: 1,
    name: 'Logo Designs',
  },
  {
    id: 2,
    name: 'Visiting cards',
  },
  {
    id: 3,
    name: 'Social media',
  },
  {
    id: 4,
    name: 'Banner design',
  },
  {
    id: 5,
    name: 'Flyer Designs',
  },
];

const lynktownImages = [
  {
    id: 1,
    img: lynktownImg1.src,
  },
  {
    id: 2,
    img: lynktownImg2.src,
  },
];
const spoclearnImages = [
  {
    id: 1,
    img: spoclearnImg1.src,
  },
  {
    id: 2,
    img: spoclearnImg2.src,
  },
  {
    id: 3,
    img: spoclearnImg3.src,
  },
];

const GraphicDesignWorks = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].name);

  return (
    <Layout>
      <section className=' relative overflow-x-clip mb-16  lg:mb-60'>
        <div className=' container mx-auto px-4  '>
          <HeroSection
            content={
              <span className='text-4xl md:text-5xl lg:text-7xl xl:text-8xl'>
                Graphic Design Works
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

      <TabSwiper
        items={tabs}
        work
        active={activeTab}
        setActive={setActiveTab}
      />
      <ImgSwiperInfinite
        images={spoclearnImages}
        className='bg-[#F6F6F6]'
        title='Spoclearn'
        description={`At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? `}
      />
      <ImgSwiperInfinite
        images={lynktownImages}
        className='bg-[#FFFBE3]'
        title='LynkTown'
        description={`At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? `}
      />
      <Testimonial />
      <FAQs />
    </Layout>
  );
};

export default GraphicDesignWorks;
