import Clients from '@/components/common/Clients';
import HeroSection from '@/components/common/HeroSection';
import HowWeWork from '@/components/common/HowWeWork';
import OurWorks from '@/components/common/OurWorks';
import ProjectRequirementForm from '@/components/common/ProjectRequirementForm';
import ServicesProcess from '@/components/common/ServicesProcess';
import Testimonial from '@/components/common/Testimonial';
import Layout from '@/components/Layout';

const ourWorks = [
  {
    id: 1,
    title: 'Empathise',
    description: ` Our first step in creating a fantastic piece of work begins with the Empathise step, in which we understand and consider the problems your users are facing from their perspective. Every customer or client will have a unique perspective, and taking all of these into consideration allows us to clearly understand what they want and then strategize accordingly.`,
  },
  {
    id: 2,
    title: 'Define',
    description: `We dive deep and analyse the situation to gain a deeper understanding of the problems your users are experiencing after we have analysed and clearly understood the same. Gathering and analysing this critical information allows us to ensure the problem we want to address and the major pain points.`,
  },
  {
    id: 3,
    title: 'Prototype ',
    description: `Once we've determined the most efficient strategy for addressing your issue, we build a low-cost, scaled-down version of the actual solution to test its efficacy. Building a prototype allows us to precisely understand whether the solution we created will serve its purpose or not, and if so, how efficiently or not. `,
  },
  {
    id: 4,
    title: 'Launch',
    description: `In this step, we complete the entire product, including all of its features and capabilities. After the build is finished, we rigorously test the finished product using live human interaction. If any flaws are discovered during the testing phase, we return to the drawing board and repeat the entire hierarchy of processes until we have arrived at a final, ready-to-launch custom solution designed specifically for your organisation.
 `,
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
        "We value Third Eye Innovation's hands-on approach as well as their
        ability to contribute not only with design but also to the overall
        concept of the project.
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
        "We were featured in the App Store and on Google Play shortly after
        launching Third Eye Innovations designs.
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
        "Third Eye Innovations worked as an extension of our team, assisting us
        in crystallising our vision and delivering incredible results in record
        time.
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
        "Third Eye Innovations transformed our legacy enterprise software into a
        high-quality digital experience for consumers.
      </>
    ),
    date: '23rd April ',
  },
];

const design = () => {
  return (
    <Layout>
      <section className=' relative overflow-x-clip mb-16  lg:mb-60'>
        <div className=' container mx-auto px-4  '>
          <HeroSection
            content={
              <>
                The User Experience design agency that adds value to your
                digital products.
              </>
            }
          />
        </div>
      </section>
      <Clients tag='DESIGN' />
      <HowWeWork steps={ourWorks} />
      <ServicesProcess />
      <Testimonial testimonials={testimonials} />
      <OurWorks title='Design Works' tag='DESIGN' />
      <ProjectRequirementForm />
    </Layout>
  );
};

export default design;
