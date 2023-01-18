import Blogs from '@/components/common/Blogs';
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

const testimonials = [
  {
    id: 1,
    name: 'Stephanie',
    // img: testimonial.src,
    userId: '@staphania',
    review: (
      <>
        "Third Eye Innovations provided solutions that not only produced a great
        website that met our needs, but also handled all of the new site's
        marketing. This has resulted in increased sales, which is a fantastic
        outcome. I would gladly recommend Third Eye Innovations to other
        businesses for their web development and marketing needs.
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
        "Third Eye Innovation's professionalism and easygoing attitude toward
        designing our website and our numerous requests and changes to it
        impressed us. The website is simple to update and maintain, which was a
        major consideration in selecting Third Eye Innovations.
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
        "Best website development company for my online business; they assisted
        me with web design and digital marketing. I would recommend working with
        the team. Also, the best digital marketing company in Bangalore I've had
        the opportunity to work for the team for the past three years, and it's
        been an incredible experience.
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
        "It was a fantastic experience working with Third Eye Innovations. the
        ideal trifecta of professional, creative, and friendly. Very highly
        advisable.
      </>
    ),
    date: '23rd April ',
  },
];

const SocialMedia = () => {
  return (
    <Layout>
      <section className=' relative overflow-x-clip mb-10  lg:mb-60'>
        <div className=' container mx-auto px-4  '>
          <HeroSection
            hero1={hero1}
            hero2={hero2}
            content={
              <span className='text-3xl md:text-4xl lg:text-6xl xl:text-7xl'>
                We Help You Accelerate Growth with Social Media
              </span>
            }
            description={
              <>
                Third Eye Innovations is a{' '}
                <b>Social Media Management Company</b> that incorporates social
                media management services into your overall marketing strategy
                to maximise your online presence. A good Facebook or Instagram
                management service can attract, nurture, and convert followers
                into returning customers.
              </>
            }
          />
        </div>
      </section>

      <div className='sm:mt-24 mt-14  my-10 container mx-auto px-4'>
        <h3 className='lg:mt-6 text-lg  sm:text-xl lg:text-2xl text-black text-opacity-80'>
          Our team's social media management campaigns for small business,
          enterprise, and franchise clients attest to this. Our social media
          marketers can assist you in connecting with influencers, generating
          more traffic, amazing online exposure, and making the most of your web
          presence.
        </h3>
      </div>

      <TechStack
        description={
          <>
            At Third Eye, we’re all about action. What are the{' '}
            <br className='hidden sm:block' /> specific actions that fuel your
            company's growth?{' '}
          </>
        }
        classes='max-w-7xl'
      />
      <OurWorks title='Social Media Management Works' tag='SOCIAL' />
      {/* <GrowWithUs /> */}
      <ImpactCreated />
      <Blogs />
      <Testimonial testimonials={testimonials} />
    </Layout>
  );
};

export default SocialMedia;
