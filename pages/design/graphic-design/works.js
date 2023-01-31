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
import LogoDesign from '@/components/sub-services/graphic-works/LogoDesign';
import SocialMedia from '@/components/sub-services/graphic-works/SocialMedia';
import VisitingCard from '@/components/sub-services/graphic-works/VisitingCard';
import { useState } from 'react';
// Hero Images

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
];

const GraphicDesignWorks = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].name);
  let Component;

  switch (activeTab) {
    case 'Social media': {
      Component = SocialMedia;
      break;
    }
    case 'Visiting cards': {
      Component = VisitingCard;
      break;
    }
    case 'Logo Designs': {
      Component = LogoDesign;
      break;
    }
    default: {
      Component = null;
      break;
    }
  }

  return (
    <Layout>
      <section className=' relative overflow-x-clip mb-16  lg:mb-60'>
        <div className=' container mx-auto px-4  '>
          <HeroSection
            content={
              <span className='text-3xl md:text-4xl lg:text-6xl xl:text-7xl'>
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
      {Component && <Component />}

      <Testimonial />
      <FAQs />
    </Layout>
  );
};

export default GraphicDesignWorks;
