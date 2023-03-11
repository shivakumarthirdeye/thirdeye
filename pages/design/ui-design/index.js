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
import UiWorks from '@/components/sub-services/ui-works/UiWorks';

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
        "Third Eye Innovations appeared to have mastered the art of operating
        strategically while also executing tactically. They pushed us to think
        about our toughest problems in new ways, which led us to a much better
        place Third Eye Innovations appeared to have mastered the art of
        operating strategically while also executing tactically. <br />
        <br /> They pushed us to think about our toughest problems in new ways,
        which led us to a much better place..
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
        the complex is exceptional."
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
        "It is clear that Third Eye Innovations' work is more than just a day
        job." Our company is also a founder-led startup, <br />
        <br /> so it was great to be able to empathize with another founder
        during this process..
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
      <>"They’re skilled at translating the client’s vision into a reality.</>
    ),
    date: '23rd April ',
  },
];

const faqs = [
  {
    id: 1,
    title: 'What is the distinction between UX and UI?',
    content: `The ease with which a user can achieve their goal, such as ordering a pizza with their phone, is referred to as user experience. Each digital element's shape, colour, and size are all part of the user interface. Making good UI decisions will result in an improved UX while making bad UI decisions will have a negative impact on UX. In general, we discuss UX/UI together because both processes are carried out by the same team, though they can be carried out separately.`,
  },
  {
    id: 2,
    title: `How UI Services Can Help Your Product?`,
    content: `UI facilitates interactions between users and websites or apps, and it improves your software's responsiveness, efficiency, and accessibility. Our design team has over a decade of experience in this field and can assist businesses in making their products stylish and appealing, creating unique and recognizable visual features, including high-quality graphic elements, exciting animation, and transitions. `,
  },
  {
    id: 3,
    title: 'How can I book your web design services?',
    content: `You can fill out the form given above, or you can also contact us over call to d about your project.`,
  },
  {
    id: 4,
    title: `What does the term 'Design Thinking' means?`,
    content: `Design thinking is a method for generating solutions and resolving problems in a practical, creative manner. It is all about discovering insights into your target audience's unmet needs. It is a type of solution-based or solution-focused thinking that aims to produce a positive future outcome. Most importantly, it is a 'people first' approach—a design process mindset that creates products based on people's needs, motivations, and behaviours.`,
  },
  {
    id: 5,
    title: `What are your payment terms?`,
    content: `We take a 50% deposit. The balance is due at launch, or one calendar month after testing begins, whichever comes first`,
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
                UI Design
              </span>
            }
            description={
              <>
                The UI design services aimed to create visually appealing,
                brand-building digital interfaces that attract and retain users.
              </>
            }
            smallDescription='Third Eye Innovation provides UI solutions that are customised to your audience, reflect customer values, and effectively support your business goals. We develop distinctive UI designs that give you an edge over your rivals by fusing current design trends with the specific user experience requirements of each of your customers.'
          />
        </div>
      </section>

      <Clients tag='UIUX' />
      <Awards awards={awards} />
      <section className=' my-20 relative'>
        <div className='container  overflow-hidden'>
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

      <UiWorks />
      <ImpactCreated />
      <Blogs />
      <Testimonial testimonials={testimonials} />
      <FAQs faqs={faqs} />
    </Layout>
  );
};

export default UIDesign;
