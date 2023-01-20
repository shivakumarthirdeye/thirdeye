import Awards from '@/components/common/Awards';
import Blogs from '@/components/common/Blogs';
import Clients from '@/components/common/Clients';
import FAQs from '@/components/common/FAQ/FAQs';
import GraphicDesignWorks from '@/components/common/GraphicDesignWorks';
import HeroSection from '@/components/common/HeroSection';
import ImpactCreated from '@/components/common/ImpactCreated';
import OurWorks from '@/components/common/OurWorks';
import Testimonial from '@/components/common/Testimonial';
import Layout from '@/components/Layout';
// Hero Images

import hero1 from '/public/assets/images/subServices/ux/hero1.png';
import hero2 from '/public/assets/images/subServices/ux/hero2.png';
import hero3 from '/public/assets/images/subServices/ux/hero3.png';

const testimonials = [
  {
    id: 1,
    name: 'Stephanie',
    // img: testimonial.src,
    userId: '@staphania',
    review: (
      <>
        "Based on the client's specifications, Third Eye Innovations created a
        high-quality website. They were punctual and easy to work with. Their
        team was in charge of the entire project, including developing initial
        wireframes with the client.
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
        "Working with Third Eye Innovations has been an absolute pleasure; their
        creative insights, combined with exceptional technical capabilities,
        make them an excellent partner. They were helpful from the beginning to
        the end, and the result is stunning.
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
        "We approached Third Eye Innovations for assistance with a significant
        update to our product. The team provided an expert who was a perfect fit
        for our requirements, and the resulting collaboration was a huge
        success. I intend to work with them again.
      </>
    ),
    date: '23rd April ',
  },
];

const GraphicDesign = () => {
  return (
    <Layout>
      <section className=' relative overflow-x-clip mb-16  lg:mb-60'>
        <div className=' container mx-auto px-4  '>
          <HeroSection
            hero1={hero1}
            hero2={hero2}
            hero3={hero3}
            content={
              <span className='text-3xl md:text-4xl lg:text-6xl xl:text-7xl'>
                DESIGN IS NOT ABOUT HOW IT LOOKS, BUT ABOUT HOW IT WORKS.
              </span>
            }
            description={
              <>
                In the market for creative designing services agencies, Third
                Eye Innovations is a reputable service provider of graphic
                design services. Prospective customers may remember your brand
                for a long time due to our graphic designs.
              </>
            }
          />
        </div>
      </section>

      <div className='mt-6 sm:mt-10 lg:mt-28 mb-10 container mx-auto px-4'>
        <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl max-w-[954px] lg:leading-[48.6px] text-black text-opacity-80'>
          Our talented designers can produce an outstanding online presence for
          your business by combining professionalism with incredible creativity.
        </h3>
      </div>
      <Clients title='Selected Clients' />
      <Awards />
      <GraphicDesignWorks />
      <OurWorks title={'Graphic Design Works'} tag='GRAPHIC' />
      <ImpactCreated />
      <Blogs />
      <Testimonial testimonials={testimonials} />
      <FAQs />
    </Layout>
  );
};

export default GraphicDesign;
