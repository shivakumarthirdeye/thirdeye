import Awards from '@/components/common/Awards';
import Blogs from '@/components/common/Blogs';
import Clients from '@/components/common/Clients';
import FAQs from '@/components/common/FAQ/FAQs';
import HeroSection from '@/components/common/HeroSection';
import ImpactCreated from '@/components/common/ImpactCreated';
import OurWorks from '@/components/common/OurWorks';
import Testimonial from '@/components/common/Testimonial';
import Layout from '@/components/Layout';
import Link from 'next/link';
// Hero Images

import hero1 from '/public/assets/images/subServices/ui/1.gif';
import hero2 from '/public/assets/images/subServices/ui/2.gif';
import hero3 from '/public/assets/images/subServices/ui/3.gif';
import interaction from '/public/assets/images/interaction.png';
// Award Images
import Award1 from '/public/assets/images/award/web-apps/1.png';
import Award2 from '/public/assets/images/award/web-apps/2.png';
import Award3 from '/public/assets/images/award/web-apps/3.png';
import Award4 from '/public/assets/images/award/web-apps/4.png';
import Award5 from '/public/assets/images/award/web-apps/5.png';
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
        "Third Eye Innovations appeared to have mastered the art of operating
        strategically while also executing tactically. They pushed us to think
        about our toughest problems in new ways, which led us to a much better
        place.
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
        "Their depth of knowledge is unparalleled, and their ability to simplify
        the complex is exceptional.
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
      <>"They’re skilled at translating the client’s vision into a reality.</>
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
        <div className=' container mx-auto px-4  '>
          <HeroSection
            hero1={hero1}
            hero2={hero2}
            hero3={hero3}
            content={
              <span className='text-4xl sm:text-5xl md:text-6xl lg:text-8xl'>
                One-of-a-kind UI designs to give you an advantage over your
                competitors.
              </span>
            }
            description={
              <>
                The UI design services aimed to create visually appealing,
                brand-building digital interfaces that attract and retain users.
                Third Eye Innovation provides UI solutions that are customised
                to your audience, reflect customer values, and effectively
                support your business goals.
              </>
            }
          />
        </div>
      </section>

      <div className='mt-6 sm:mt-10 lg:mt-28 mb-10 container mx-auto px-4'>
        <h3 className=' text-lg sm:text-2xl  xl:text-4xl max-w-[954px] sm:leading-[38px] lg:leading-[48.6px] text-black text-opacity-80'>
          We develop distinctive UI designs that give you an edge over your
          rivals by fusing current design trends with the specific user
          experience requirements of each of your customers.
        </h3>
      </div>
      <Clients clients={clients} />
      <Awards awards={awards} />
      <section className=' my-20 relative'>
        <div className='container mx-auto px-4 overflow-hidden'>
          <div className='flex items-center  justify-between'>
            <h1 className='heading'>Interaction Works</h1>

            <div className='my-8 '>
              <Link href={`/design/interaction`}>
                <a>
                  <button className='sm:text-lg font-semibold relative md:text-xl lg:text-2xl case-study--btn    text-black text-opacity-80 '>
                    Case Study
                    {/* <div className='bg-[#5FC7EC] rounded-full  h-[3px]'></div> */}
                  </button>
                </a>
              </Link>
            </div>
          </div>
          <div className='w-full my-5 md:my-10 lg:my-16  max-h-[559px] h-full'>
            <img
              loading='lazy'
              src={interaction.src}
              className='w-full object-cover min-h-[200px] max-h-[559px]  h-full '
              alt=''
            />
          </div>
        </div>
      </section>

      <OurWorks title={'UI Design Works'} tag='UI' />
      <ImpactCreated />
      <Blogs />
      <Testimonial testimonials={testimonials} />
      <FAQs faqs={faqs} />
    </Layout>
  );
};

export default UIDesign;
