import Awards from '@/components/common/Awards';
import Blogs from '@/components/common/Blogs';
import Clients from '@/components/common/Clients';
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
// Award Images
import Award1 from '/public/assets/images/award/seo/1.png';
import Award2 from '/public/assets/images/award/seo/2.png';
import Award3 from '/public/assets/images/award/seo/3.png';
import Award4 from '/public/assets/images/award/seo/4.png';
import Award5 from '/public/assets/images/award/seo/5.png';
// clients
import client1 from '/public/assets/images/clients/ui-ux/1.png';
import client2 from '/public/assets/images/clients/ui-ux/2.png';
import client3 from '/public/assets/images/clients/ui-ux/3.png';
import client4 from '/public/assets/images/clients/ui-ux/4.png';
import client5 from '/public/assets/images/clients/ui-ux/5.png';
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

const testimonials = [
  {
    id: 1,
    name: 'Stephanie',
    // img: testimonial.src,
    userId: '@staphania',
    review: (
      <>
        "Third Eye Innovations has a skilled team with extensive experience and
        knowledge. As a result, they provide high-quality SEO services.
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
        "They have done an excellent job, and the owners are responsive and
        genuinely care about your business's growth. I highly recommend their
        SEO services and overall support.
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
        "Third Eye Innovations has been a lifeline for our company. Excellent
        customer service and stellar SEO tactics. I strongly advise doing
        business with this company.
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
        "We hired them for one of our websites and are now using their services
        for three more. I highly recommend their SEO services
      </>
    ),
    date: '23rd April ',
  },
];

const SEO = () => {
  return (
    <Layout>
      <section className=' relative overflow-x-clip mb-10  lg:mb-60'>
        <div className=' container mx-auto px-4  '>
          <HeroSection
            hero1={hero1}
            hero2={hero2}
            content={
              <span className='text-3xl md:text-4xl lg:text-6xl xl:text-7xl'>
                Data-driven, SEO marketing specialists
              </span>
            }
            description={
              <>
                As one of the innovative <b>SEO companies</b>, we make sure that
                your website ranks highly in search engines. Over the years, SEO
                has undergone significant change and is no longer a
                link-building process. The factors that affect a website's
                search engine ranking include responsiveness, responsive coding,
                quickly loading pages, and social media popularity.
              </>
            }
          />
        </div>
      </section>

      <div className='sm:mt-24 mt-14  my-10 container mx-auto px-4'>
        <h3 className='lg:mt-6 text-lg  sm:text-xl lg:text-2xl text-black text-opacity-80'>
          We concentrate on generating revenue for our clients, and we offer all
          the tools and services required for your company to grow through SEO.
        </h3>
      </div>

      <Clients clients={clients} />
      <Awards awards={awards} />
      <OurWorks title='SEO Works' tag={'SEO'} />
      {/* <GrowWithUs /> */}
      <ImpactCreated />
      <Blogs />
      <Testimonial testimonials={testimonials} />
    </Layout>
  );
};

export default SEO;
