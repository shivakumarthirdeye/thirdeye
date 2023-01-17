import ContactForm from '@/components/common/ContactForm';
import Layout from '@/components/Layout';
import Link from 'next/link';
import aboutImg from '/public/assets/images/about-us.png';
import mem1 from '/public/assets/images/our-team/1.png';
import mem2 from '/public/assets/images/our-team/2.png';
import mem3 from '/public/assets/images/our-team/3.png';
import mem4 from '/public/assets/images/our-team/4.png';

const ourTeam = [
  {
    id: 1,
    name: 'Member 1',
    designation: 'Developer',
    img: mem1.src,
  },
  {
    id: 2,
    name: 'Member 2',
    designation: 'Designer',
    img: mem2.src,
  },
  {
    id: 3,
    name: 'Member 3',
    designation: 'Developer',
    img: mem3.src,
  },
  {
    id: 4,
    name: 'Member 4',
    designation: 'Developer',
    img: mem4.src,
  },
];

const values = [
  {
    id: 1,
    title: 'Reliable, Stable, and Responsive Website',
    description:
      'Our esteemed clients fell in love with our web development services for the reliability and accessibility we deliver to them. We always go an added mile for offering the best user-friendly and responsive website to the client. The result-driven and engaging outcome make us the Best web designing company.',
  },
  {
    id: 2,
    title: 'Cost Efficient',
    description: `Every business is exclusive and includes different products or services. So, our prices vary on the scalability, purpose, and scope of the website. We offer customised prices to clients at reasonable rates and deliver the best website in return`,
  },
  {
    id: 3,
    title: 'Constant Support',
    description: `Our team will offer you continuous support in maintaining the website to keep it updated and enhance its performance. Also, we assist with reactive improvements like adding new features or creating new landing pages.`,
  },
  {
    id: 4,
    title: 'Customer Support',
    description: `Our services strive to provide the best support to our valued customers. We take all support issues seriously and provide timely responses.`,
  },
  {
    id: 5,
    title: 'Interaction',
    description: `We create engaging content by combining images, advertisements, written content, and call-to-actions (CTAs) to encourage specific action and ongoing interaction.`,
  },
  {
    id: 6,
    title: 'Revenue Growth',
    description: `We ensure that your product is fast, flexible, and aesthetically pleasing, which leads to conversion and repeat transactions.`,
  },
];
const AboutUs = () => {
  return (
    <Layout>
      <section className='mx-auto container px-4 text-black text-opacity-80'>
        <div className='max-w-[828px]'>
          <h1 className='heading'>
            Digital solutions for boosting productivity and growth in
            businesses.
          </h1>
          <p className='text-black text-opacity-80 text-sm sm:text-lg md:text-xl lg:text-2xl mt-6 '>
            Third Eye Innovations provides world-class customised digital
            solutions that outperform expectations. Our team creates a
            data-driven strategy that will allow your brand to maximise ROI and
            provide long-term scale. We provide full-cycle technology solutions
            to help you with your digital transformation journey. We are
            creators of brilliant ideas. Every step in the product development
            process is preceded by careful planning and a strategy.
          </p>
        </div>
        <div className='w-full my-5 md:my-10'>
          <img src={aboutImg.src} className='w-full h-full' alt='' />
        </div>
        <div className='text-black max-w-[828px] text-opacity-80 text-sm sm:text-lg md:text-xl lg:text-2xl '>
          <p>
            Third Eye Innovations is a well-known and trusted Digital Solutions
            Providers Company with its headquarters in Bangalore. Since 2017,
            Third Eye Innovations has created over 500 products, including
            websites, MVPs, and apps. We leverage cutting-edge technical
            expertise to simplify complex business challenges with innovative
            solutions. We aim to educate and empower the developer community by
            providing the latest trends and best practices based on surveys and
            news. We provided the best web design, application development, and
            technology-based digital solutions available. ‍
          </p>

          <h2 className='my-5 text-2xl sm:text-3xl md:text-4xl lg:text-[40px] md:!leading-[48.41px]'>
            We Make Complex Products Simple & Simple Products Engaging
          </h2>
        </div>
        <div className='my-5 md:my-10 lg:my-20'>
          <div className='flex justify-between items-center'>
            <h1 className='text-2xl text-black  text-opacity-80  sm:text-3xl md:text-4xl lg:text-[40px] md:!leading-[48.41px]'>
              Our Team
            </h1>
            <div>
              <Link href='/teams'>
                <a className='bg-black p-2 px-3 rounded md:text-lg space-x-2 text-white flex items-center'>
                  <p>Meet the team </p>
                  <div>
                    <svg
                      width='21'
                      height='15'
                      viewBox='0 0 21 15'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M20.7071 8.20711C21.0976 7.81658 21.0976 7.18342 20.7071 6.7929L14.3431 0.428933C13.9526 0.038409 13.3195 0.038409 12.9289 0.428933C12.5384 0.819458 12.5384 1.45262 12.9289 1.84315L18.5858 7.5L12.9289 13.1569C12.5384 13.5474 12.5384 14.1805 12.9289 14.5711C13.3195 14.9616 13.9526 14.9616 14.3431 14.5711L20.7071 8.20711ZM-8.74228e-08 8.5L20 8.5L20 6.5L8.74228e-08 6.5L-8.74228e-08 8.5Z'
                        fill='white'
                      />
                    </svg>
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className='sm:grid mx-auto  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10'>
            {ourTeam.map(item => {
              const { id, designation, img, name } = item;

              return (
                <div
                  className='w-full text-black  max-w-[450px] mx-auto  text-opacity-80'
                  key={id}
                >
                  <img
                    src={img}
                    className='w-full  max-h-[380.74px] object-cover'
                    alt=''
                  />
                  <div className='my-4'>
                    <h1 className='text-base sm:text-lg md:text-xl lg:text-2xl'>
                      {name}
                    </h1>
                    <h4 className='text-xs sm:text-sm md:text-base'>
                      {designation}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h3>OUR VALUES</h3>
          <div className='relative w-fit'>
            <h1 className='text-2xl py-1 sm:text-3xl max-w-3xl md:text-4xl lg:text-5xl  lg:leading-[58.09px]'>
              Core principles that assist us in maximizing the value we create
              for our clients
            </h1>
          </div>
          <div className='grid md:grid-cols-2 my-5 md:my-10 lg:my-20 gap-10'>
            {values.map(item => {
              const { description, id, title } = item;
              return (
                <div key={id} className='relative'>
                  <h2 className='text-2xl py-1 sm:text-3xl md:text-4xl lg:text-5xl'>
                    0{id}
                  </h2>
                  <div className='w-full absolute  h-[1px] md:h-[2px]  bg-black bg-opacity-80 '></div>
                  <div className='py-5'>
                    <h1 className='text-2xl mb-2'>{title}</h1>
                    <p>{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className='my-5 md:my-10 lg:my-20'>
          <ContactForm />
        </div>
      </section>
    </Layout>
  );
};

export default AboutUs;
