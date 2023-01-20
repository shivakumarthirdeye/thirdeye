import CalendlyModal from '@/components/CalendlyModal';
import Clients from '@/components/common/Clients';
import HeroSection from '@/components/common/HeroSection';
import HowWeWork from '@/components/common/HowWeWork';
import OurWorks from '@/components/common/OurWorks';
import ProjectRequirementForm from '@/components/common/ProjectRequirementForm';
import ServicesProcess from '@/components/common/ServicesProcess';
import Testimonial from '@/components/common/Testimonial';
import TechStack from '@/components/homePage/TechStack';
import Layout from '@/components/Layout';

const ourWorks = [
  {
    id: 1,
    title: 'Design',
    description: `Color schemes, templates, functions, special features (such as e-commerce), graphics, videos, and overall design will most likely be discussed. We always recommend bringing a few examples of websites you like to the meeting. Following that meeting, the creative team devotes time to bring your vision to life in 2D.  `,
  },
  {
    id: 2,
    title: 'Develop',
    description: `Now that the design has been approved, the website will be sent to the developer. The developer begins building the website on a production server so that you can view it online without making it public. During that time, you can collaborate with the copywriter and other agency personnel to finalize the voice, content, and graphics. This is usually the most time-consuming part of the process, but it is also the most crucial.    `,
  },
  {
    id: 3,
    title: 'Test',
    description: `After the developer has coded your website and you've all of your content, it's time to test it out on the test server. You will be sent a link to the website, which you can share with your company and decision-makers. Typically, a few tweaks are required at this stage before the site is finalized. `,
  },
  {
    id: 4,
    title: 'Launch and growth',
    description: `Finally, your new website is ready to go live! When you give your approval, the developer will begin the launch process. This includes configuring hosting and pointing to the domain. It will also take time to spread. Be patient; the wait will be worthwhile! Your site should be live and ready for you and the rest of the world to enjoy within a few hours!`,
  },
];

const ourProcess = [
  {
    id: 1,
    icon: (
      <>
        <svg
          className='w-[48px] h-[48px] sm:w-[54px] sm:h-[54px]  lg:w-[64px] lg:h-[64px]'
          viewBox='0 0 64 64'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M31.9999 5.33203L58.6666 22.6654V41.332L31.9999 58.6654L5.33325 41.332V22.6654L31.9999 5.33203Z'
            stroke='#7A59FF'
            strokeWidth='5.33333'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M32 58.6654V41.332'
            stroke='#7A59FF'
            strokeWidth='5.33333'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M58.6666 22.668L31.9999 41.3346L5.33325 22.668'
            stroke='#7A59FF'
            strokeWidth='5.33333'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M5.33325 41.3346L31.9999 22.668L58.6666 41.3346'
            stroke='#7A59FF'
            strokeWidth='5.33333'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M32 5.33203V22.6654'
            stroke='#7A59FF'
            strokeWidth='5.33333'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </>
    ),
    title: 'MVP',
    description: ` The fundamental concept of MVP is to build only the essential components of your software as quickly as possible, then release it onto the market and evaluate it there. We specialise in developing striking solutions that demonstrate your minimum viable product's viability on the market.`,
  },
  {
    id: 2,
    icon: (
      <>
        <svg
          className='w-[48px] h-[48px] sm:w-[54px] sm:h-[54px]  lg:w-[64px] lg:h-[64px]'
          viewBox='0 0 64 64'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M42.6667 48L58.6667 32L42.6667 16'
            stroke='#2FBF8B'
            strokeWidth='5.33333'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M21.3333 16L5.33325 32L21.3333 48'
            stroke='#2FBF8B'
            strokeWidth='5.33333'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </>
    ),
    title: 'Web Application',
    description: `
     Third Eye Innovations, a web application development company, provides a secure package of web application services with the inherent characteristic of uniqueness and flexibility to meet the goals of business strategies and requirements. Contact us to know more about our client-friendly and cost-effective services.
    `,
  },
  {
    id: 3,
    icon: (
      <>
        <svg
          className='w-[48px] h-[48px] sm:w-[54px] sm:h-[54px]  lg:w-[64px] lg:h-[64px]'
          viewBox='0 0 64 64'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M45.3333 5.33203H18.6666C15.7211 5.33203 13.3333 7.71985 13.3333 10.6654V53.332C13.3333 56.2775 15.7211 58.6654 18.6666 58.6654H45.3333C48.2788 58.6654 50.6666 56.2775 50.6666 53.332V10.6654C50.6666 7.71985 48.2788 5.33203 45.3333 5.33203Z'
            stroke='#DF6824'
            strokeWidth='5.33333'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M32 48H32.0271'
            stroke='#DF6824'
            strokeWidth='5.33333'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </>
    ),
    title: 'Mobile Apps',
    description: `We design fully equipped mobile app solutions for the constantly evolving behaviour of customers. Our application development meets all digital needs across industries and is up to date on market trends and technologies. We incorporate advanced features and functionalities into every app we create.`,
  },
  {
    id: 4,
    icon: (
      <>
        <svg
          className='w-[48px] h-[48px] sm:w-[54px] sm:h-[54px]  lg:w-[64px] lg:h-[64px]'
          viewBox='0 0 64 64'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M53.3332 8H10.6666C7.72107 8 5.33325 10.3878 5.33325 13.3333V40C5.33325 42.9455 7.72107 45.3333 10.6666 45.3333H53.3332C56.2788 45.3333 58.6666 42.9455 58.6666 40V13.3333C58.6666 10.3878 56.2788 8 53.3332 8Z'
            stroke='#20C0CA'
            strokeWidth='5.33333'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M21.3333 56H42.6666'
            stroke='#20C0CA'
            strokeWidth='5.33333'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M32 45.332V55.9987'
            stroke='#20C0CA'
            strokeWidth='5.33333'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </>
    ),
    title: 'Websites',
    description: `We transform your ideas into a creative web platform that effectively represents your brand. Our expert developers offer a wide range of services to your company, including SEO-friendly web design, website development, and custom web app development to improve organisational functioning.`,
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
        "They created ideas. The product displayed information clearly and
        smoothly tracked user data. Third Eye Innovations UX design
        distinguishes itself through efficient coding practices and stunning
        design concepts.
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
        "Their dedication to raising design standards and their promise of
        on-time delivery make them a dependable partner.
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

const development = () => {
  return (
    <Layout>
      <section className='my-5 sm:my-10 lg:my-20 relative overflow-x-clip mb-10 sm:mb-24 md: lg:mb-60'>
        <div className=' container mx-auto px-4  '>
          <HeroSection
            content={<>Developing meaningful brands and impactful products.</>}
          />
        </div>
      </section>
      <TechStack
        description={
          <>
            At Third Eye, we’re all about action. What are the{' '}
            <br className='hidden lg:block' /> specific actions that fuel your
            company's growth?
          </>
        }
      />
      <Clients />
      <HowWeWork steps={ourWorks} title='How we Develop Incredible Products ' />
      <ServicesProcess works={ourProcess} />
      <Testimonial testimonials={testimonials} />
      <OurWorks title='Development Works' tag='DEVELOPMENT' />
      <ProjectRequirementForm />
    </Layout>
  );
};

export default development;
