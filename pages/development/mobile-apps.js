import Awards from '@/components/common/Awards';
import Blogs from '@/components/common/Blogs';
import Clients from '@/components/common/Clients';
import FAQs from '@/components/common/FAQ/FAQs';
import GrowWithUs from '@/components/common/GrowWithUs';
import HeroSection from '@/components/common/HeroSection';
import ImpactCreated from '@/components/common/ImpactCreated';
import OurWorks from '@/components/common/OurWorks';
import Testimonial from '@/components/common/Testimonial';
import TechStack from '@/components/homePage/TechStack';
import Layout from '@/components/Layout';
// Hero Images

import hero1 from '/public/assets/gif/sub-services/mobile-application/1.gif';
import hero2 from '/public/assets/gif/sub-services/mobile-application/2.gif';
import hero3 from '/public/assets/gif/sub-services/mobile-application/3.gif';
// Award Images
import Award1 from '/public/assets/images/award/mobile-apps/1.png';
import Award2 from '/public/assets/images/award/mobile-apps/2.png';
import Award3 from '/public/assets/images/award/mobile-apps/3.png';
import Award4 from '/public/assets/images/award/mobile-apps/4.png';
import Award5 from '/public/assets/images/award/mobile-apps/5.png';
// clients
import client1 from '/public/assets/images/clients/mobile-apps/1.png';
import client2 from '/public/assets/images/clients/mobile-apps/2.png';
import client3 from '/public/assets/images/clients/mobile-apps/3.png';
import client4 from '/public/assets/images/clients/mobile-apps/4.png';
import client5 from '/public/assets/images/clients/mobile-apps/5.png';

const awards = [
  { id: 1, img: Award1.src, name: 'Top rated ecommerce SEO agency' },
  { id: 2, img: Award2.src, name: 'Forbes agency council official member' },
  { id: 3, img: Award3.src, name: 'Top digital marketing company' },
  { id: 4, img: Award4.src, name: 'National excellence winner 2021' },
  { id: 5, img: Award5.src, name: 'Top digital agency 2021' },
];
const clients = [
  {
    id: 1,
    img: client1.src,
  },
  {
    id: 2,
    img: client2.src,
  },
  {
    id: 3,
    img: client3.src,
  },
  {
    id: 4,
    img: client4.src,
  },
  {
    id: 5,
    img: client5.src,
  },
];

const MobileApps = () => {
  return (
    <Layout>
      <section className=' relative overflow-x-clip mb-10  lg:mb-60'>
        <div className=' container mx-auto px-4  '>
          <HeroSection
            hero1={hero1}
            hero2={hero2}
            hero3={hero3}
            content={
              <span className='text-3xl md:text-4xl lg:text-6xl xl:text-7xl'>
                Quality and Experience Drive Global Brands
              </span>
            }
            description={
              <>
                Since we are the best <b> mobile app development company</b>,
                our devoted team will offer you complete solutions for all of
                your mobile app needs. To create a distinctive, innovative,
                top-notch <b>mobile app design</b>, we carry out extensive
                marketing research on customers, competitor strategies, and
                sector leaders.
              </>
            }
          />
        </div>
      </section>

      <div className='sm:mt-24 mt-14  my-10 container mx-auto px-4'>
        <h3 className='lg:mt-6 text-lg  sm:text-xl lg:text-2xl text-black text-opacity-80'>
          We also provide cutting-edge solutions for a variety of industries.
          Our company has evolved into a one-stop shop for everything from the
          planning stages of a mobile application to its marketing.
        </h3>
      </div>

      {/* <TechStack
        description={
          <>
            At Third Eye, we’re all about action. What are the{' '}
            <br className='hidden sm:block' /> specific actions that fuel your
            company's growth?{' '}
          </>
        }
        classes='max-w-7xl'
      /> */}
      <Clients clients={clients} />
      <Awards awards={awards} />
      <OurWorks title={'Mobile App Works'} tag='MOBILE' />
      {/* <GrowWithUs /> */}
      <ImpactCreated />
      <Blogs />
      <Testimonial />
      <FAQs />
    </Layout>
  );
};

export default MobileApps;
