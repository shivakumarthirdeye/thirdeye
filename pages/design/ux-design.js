import Awards from '@/components/common/Awards';
import Blogs from '@/components/common/Blogs';
import Clients from '@/components/common/Clients';
import FAQs from '@/components/common/FAQ/FAQs';
import HeroSection from '@/components/common/HeroSection';
import ImpactCreated from '@/components/common/ImpactCreated';
import OurWorks from '@/components/common/OurWorks';
import Testimonial from '@/components/common/Testimonial';
import Layout from '@/components/Layout';
// Hero Images

import hero1 from '/public/assets/gif/sub-services/ux/1.gif';
import hero2 from '/public/assets/gif/sub-services/ux/2.gif';
import hero3 from '/public/assets/gif/sub-services/ux/3.gif';
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
const faqs = [
  {
    id: 1,
    title: 'How long will the procedure take?',
    content:
      'The length of time depends on the size of the project, but even a small UX process can take up to a month. To achieve the best results, the UX process should always include a review of the previous and current situation, measurement, redesign, implementation, testing, and remeasurement.',
  },
  {
    id: 2,
    title: `How can we tell if it's the best solution?`,
    content:
      'Prototyping and user testing are critical components of the User Experience process. This stage provides us with insights into how users interact with an app or website without requiring us to invest significant resources in the development process. This allows us to anticipate and avoid serious design and functionality issues in the final version. ',
  },
  {
    id: 3,
    title:
      'What are some of the biggest trends in the UX design industry right now?',
    content: (
      <>
        A good designer is going to be excited about this topic; the answer will
        help you understand where their current focus lies. <br /> <br /> Also,
        listen to how a UX designer keeps up with the industry—such as following
        UX podcasts, reading UX blogs and books, attending webinars and online
        training courses for ongoing learning, etc.
      </>
    ),
  },
  {
    id: 4,
    title: 'Who owns the design and code files?',
    content:
      'You get 100% ownership of the files the moment we deliver them to you.',
  },
  {
    id: 5,
    title: 'What are the key characteristics of UX design?',
    content: (
      <>
        Used in digital and analogue products. <br /> Focuses on the customer's
        user experience - from the introduction of the product to the last
        interaction with it. <br /> Creates the structure of the future
        application and levels out all the possible difficulties that users of
        the program have. <br /> The result is a product that helps people solve
        their problems.
      </>
    ),
  },
];

const UIDesign = () => {
  return (
    <Layout>
      <section className=' relative overflow-x-clip mb-16  lg:mb-60'>
        <div className=' container   '>
          <HeroSection
            hero1={hero1}
            hero2={hero2}
            hero3={hero3}
            content={
              <span className='text-4xl sm:text-5xl md:text-6xl lg:text-8xl'>
                UX Design
              </span>
            }
            description={
              <>
                Delivering a comprehensive digital experience is similar to
                using glue to connect devices, bind together touch points, and
                create omnichannel experiences.
              </>
            }
            smallDescription={`Third Eye Innovations' strategy and UX team can develop solutions that are both user-friendly and customised to meet the unique user tasks and business objectives of our clients by utilising best practices, techniques, and a thorough understanding of all the most recent technological tools.`}
          />
        </div>
      </section>

      <Clients tag='UIUX' />
      <Awards awards={awards} />
      <OurWorks title={'UX Design Works'} tag='UX' />
      <ImpactCreated />
      <Blogs />

      <Testimonial />
      <FAQs faqs={faqs} />
    </Layout>
  );
};

export default UIDesign;
