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
import WebsiteWorks from '@/components/sub-services/website-works/WebsiteWorks';
// Hero Images
import hero1 from '/public/assets/gif/sub-services/website/1.webm';
import hero2 from '/public/assets/gif/sub-services/website/2.webm';
import hero3 from '/public/assets/gif/sub-services/website/1.gif';
// Award Images
import Award1 from '/public/assets/images/award/website/1.png';
import Award2 from '/public/assets/images/award/website/2.png';
import Award3 from '/public/assets/images/award/website/3.png';
import Award4 from '/public/assets/images/award/website/4.png';
import Award5 from '/public/assets/images/award/website/5.png';

const awards = [
  { id: 1, img: Award1.src, name: 'Top rated ecommerce SEO agency' },
  { id: 2, img: Award2.src, name: 'Forbes agency council official member' },
  { id: 3, img: Award3.src, name: 'Top digital marketing company' },
  { id: 4, img: Award4.src, name: 'National excellence winner 2021' },
  { id: 5, img: Award5.src, name: 'Top digital agency 2021' },
];

const testimonials = [
  {
    id: 1,
    name: 'Stephanie',
    // img: testimonial.src,
    userId: '@staphania',
    review: (
      <>
        "Their dedication to raising design standards and their promise of
        on-time delivery make them a dependable partner.
      </>
    ),
    date: '23rd April ',
  },
  {
    id: 2,
    name: 'Joseph',
    // img: testimonial1.src,
    userId: '@Joseph',
    review: (
      <>
        "They created ideas. The product displayed information clearly and
        smoothly tracked user data.
        <br />
        <br /> Third Eye Innovations UX design distinguishes itself through
        efficient coding practices and stunning design concepts.
      </>
    ),
    date: '23rd April ',
  },
  {
    id: 3,
    name: 'Stephanie',
    // img: testimonial.src,
    userId: '@staphania',
    review: (
      <>
        "It's an excellent Web design and development firm. The Third Eye
        Innovations team advised us on current trends and provided us with smart
        content.
      </>
    ),
    date: '23rd April ',
  },
  {
    id: 4,
    name: 'Stephanie',
    // img: testimonial.src,
    userId: '@staphania',
    review: (
      <>
        "Working with Third eye Innovations has been an absolute pleasure
        because of their excellent technical skills and creative insights. They
        encouraged the concept to completion, and the outcome is stunning.
      </>
    ),
    date: '23rd April ',
  },
];
const Websites = () => {
  return (
    <Layout>
      <section className=' relative overflow-x-clip mb-10  lg:mb-60'>
        <div className=' container   '>
          <HeroSection
            hero1={hero2}
            hero2={hero1}
            hero3={hero3}
            content={
              <span className='text-3xl md:text-4xl lg:text-6xl xl:text-7xl'>
                Website Developement
              </span>
            }
            description={
              <>
                A wide range of <b>web development</b> services is available
                from us. We develop high-performance, feature-rich custom
                websites and offer services that are catered to your company's
                needs and goals.
              </>
            }
            smallDescription={
              <>
                Our talented team of programmers provides a wide range of web
                development and programming services, from SaaS applications and
                service integrations to CMS-based websites. Third Eye
                Innovations is the best website development company, and we will
                be delighted to assist you in establishing a strong online
                presence through our best web design and development services.
              </>
            }
          />
        </div>
      </section>

      <Clients />
      <Awards awards={awards} />
      <WebsiteWorks limit={4} />
      {/* <OurWorks title={'Website Works'} tag='WEBSITE' /> */}
      <ImpactCreated />
      <Blogs />
      <Testimonial testimonials={testimonials} />
      <FAQs />
      {/* <GrowWithUs /> */}
    </Layout>
  );
};

export default Websites;
