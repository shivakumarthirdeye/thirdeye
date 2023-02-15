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

import hero1 from '/public/assets/gif/sub-services/web-application/1.gif';
import hero2 from '/public/assets/gif/sub-services/web-application/2.gif';
import hero3 from '/public/assets/gif/sub-services/web-application/3.gif';
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

const WebApplication = () => {
  return (
    <Layout>
      <section className=' relative overflow-x-clip mb-10  lg:mb-60'>
        <div className=' container   '>
          <HeroSection
            hero1={hero1}
            hero2={hero2}
            hero3={hero3}
            content={
              <span className='text-3xl md:text-4xl lg:text-6xl xl:text-7xl'>
                End-to-End Application Services
              </span>
            }
            description={
              <>
                With years of experience taking on the most challenging web
                application development projects, our
                <b>web app development company</b> is well-known in the IT
                industry. To better meet changing user needs and technological
                advancements, we can also completely redesign web interfaces.
              </>
            }
          />
        </div>
      </section>

      <div className='sm:mt-24 mt-14  my-10 container '>
        <h3 className='lg:mt-6 text-lg  sm:text-xl lg:text-2xl text-black text-opacity-80'>
          You can always rely on us for custom web application development
          services because we offer flexible teams, ensure a transparent
          development process, and respond quickly to changing requirements.
        </h3>
      </div>
      <Clients tag='WEBAPP' />
      <Awards awards={awards} />
      <OurWorks title={'Web Application Works'} tag='WEBAPPLICATION' />
      {/* <GrowWithUs /> */}
      <ImpactCreated />
      <Blogs />
      <Testimonial />
      <FAQs />
    </Layout>
  );
};

export default WebApplication;
