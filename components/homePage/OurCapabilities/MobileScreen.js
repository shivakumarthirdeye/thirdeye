import { VioletLeft } from '@/components/common/ShadeSVGs';
import Link from 'next/link';
import Item from './Item';

const subDesign = [
  {
    id: 1,
    title: 'UX Design',
    description: (
      <>
        Third Eye Innovations <b>UX design company</b> can help you design
        products with flexibility in mind, and our strategic designs can be
        styled, layered, and adjusted to any technical stack that consistently
        helps customers achieve their goals, whether you are launching a new
        product or looking to improve an existing one.{' '}
      </>
    ),
    to: '/design/ux-design',
  },
  {
    id: 2,
    title: 'UI Design',
    description: (
      <>
        As a leading <b>UI design company,</b> Third Eye Innovations assists
        brands in navigating all aspects of today's and tomorrow's digital
        landscape. Good UI design begins with solid UI knowledge, which our
        teams have in abundance. We are user-focused and customer-centric,
        creating experiences that deliver tangible business results.
      </>
    ),
    to: '/design/ui-design',
  },
  {
    id: 3,
    title: 'Graphic design ',
    description: (
      <>
        Whether you need a spectacular new logo or some eye-catching flyers, the
        talented global community of designers at Third Eye Innovations can
        help. We take pride in our high-quality designers who provide only the
        best <b>graphic design services</b>. Find the best design service for
        you and start creating designs you'll love right away!
      </>
    ),
    to: '/design/graphic-design',
  },
];
const subDevelopment = [
  {
    id: 1,
    title: 'Website',
    description: (
      <>
        We transform your ideas into a creative web platform that effectively
        represents your brand. Our expert developers offer a wide range of
        services to your company, including SEO-friendly web design,{' '}
        <b>website development</b>, and custom web app development to improve
        organizational functioning.
      </>
    ),
    to: '/development/website',
  },
  {
    id: 2,
    title: 'Web Application',
    description: (
      <>
        Third Eye Innovations, a <b>web application development company</b>,
        provides a secure package of web application services with the inherent
        characteristic of uniqueness and flexibility to meet the goals of
        business strategies and requirements. Contact us to know more about our
        client-friendly and cost-effective services.
      </>
    ),
    to: '/development/back-end',
  },
  {
    id: 3,
    title: 'Mobile Apps',
    description: (
      <>
        We design fully equipped <b>mobile app solutions</b> for the constantly
        evolving behaviour of customers. Our application development meets all
        digital needs across industries and is up to date on market trends and
        technologies. We incorporate advanced features and functionalities into
        every app we create.
      </>
    ),
    to: '/development/mobile-apps',
  },
  {
    id: 4,
    title: 'MVP',
    description: (
      <>
        The fundamental concept of <b>MVP</b> is to build only the essential
        components of your software as quickly as possible, then release it onto
        the market and evaluate it there. We specialise in developing striking
        solutions that demonstrate your minimum viable product's viability on
        the market.
      </>
    ),
    to: '/development/mvp',
  },
];
const subMarketing = [
  {
    id: 1,
    title: 'Social Media',
    description: (
      <>
        With Third Eye Innovations' <b>social media services</b>, you can
        increase your return on investment (ROI) from sites like Facebook,
        Instagram, and LinkedIn. With our affordable social media management
        services, your company can begin increasing brand awareness and revenue
        through social media.
      </>
    ),
    to: '/marketing/social-media',
  },
  {
    id: 2,
    title: 'SEO',
    description: (
      <>
        Third Eye Innovations is the world's best <b> SEO services company</b>.
        Our SEO services include a personalised strategy, cutting-edge
        technology, and an elite SEO team. We focus on increasing revenue for
        our clients and provide all of the services and technology required for
        your company to grow with SEO.
      </>
    ),
    to: '/marketing/seo',
  },
  {
    id: 3,
    title: 'Brand Marketing',
    description: (
      <>
        Proven <b>marketing strategies</b> are in place to build, improve, and
        strengthen the value and reputation of your brand. We create visual and
        communication elements for your brand that resonate deeply with your
        target audience and generate the desired perception.
      </>
    ),
    to: '/marketing/brand-marketing',
  },
  {
    id: 4,
    title: 'Performance Marketing ',
    description: (
      <>
        Chasing performance may be difficult, but it is doable with the right
        <b> performance marketing tactics</b>. Third Eye Innovations is a
        performance marketing agency with solidified skills to provide you with
        absolute value. We implement effective strategies and deliver ROI with
        measurable results.
      </>
    ),
    to: '/marketing/performance-marketing',
  },
  {
    id: 5,
    title: 'PPC',
    description: (
      <>
        The tides of digital marketing are changing, and many businesses are
        looking for quick and efficient ways to position their brands in front
        of high-converting customers. With Third Eye Innovations'{' '}
        <b>PPC management services</b>, you can increase your search engine
        visibility and get immediate results.
      </>
    ),
    to: '/marketing/ppc',
  },
  {
    id: 6,
    title: 'Content Writing ',
    description: (
      <>
        To <b>create great content</b>, you need knowledge, expertise, and time.
        That is exactly what we do. Create great content that is addictively
        enjoyable and performs well in natural search results. So, if you need
        content writing services, we are your best bet. There are no overheads,
        no restrictions, and only high-quality content is delivered.
      </>
    ),
    to: '/marketing/ppc',
  },
  {
    id: 6,
    title: 'Email Marketing',
    description: (
      <>
        Third Eye Innovations provides a wide range of{' '}
        <b> email marketing services</b>
        that are tailored to your brand's needs, financial capabilities, and
        target market segments. Schedule a consultation with our company and
        we'll talk about how important services are in achieving your goals.
      </>
    ),
    to: '/marketing/ppc',
  },
];

const MobileScreen = () => {
  return (
    <div className='text-white'>
      <div
        style={{
          background: `linear-gradient(42.36deg, #7CE7FF 1.63%, #3E4FA8 100%), #FFFFFF`,
        }}
        className='px-4 py-20 relative'
      >
        <h1 className='heading !text-white'>Our Capabilities</h1>
        <div className='my-5'>
          <h2 className='text-[32px]'>Design</h2>
          <Link href='/design'>
            <a className='text-left py-2 block '>
              <span className=' text-sm sm:text-base relative'>
                Learn more{' '}
                <div className='w-full absolute bottom-[-1px]  bg-white  h-[1px] left-0'></div>{' '}
              </span>{' '}
              {'->'}{' '}
            </a>
          </Link>
          <div className='flex justify-center flex-col items-center my-4 sm:my-8'>
            {subDesign.map(item => {
              return <Item key={item.id} item={item} />;
            })}
          </div>
        </div>
      </div>
      <div
        style={{
          background: `linear-gradient(42.36deg, #C57CFF 1.63%, #621E82 100%), #FFFFFF`,
        }}
        className='px-4 py-10'
      >
        <div className='my-5'>
          <h2 className='text-[32px]'>Development</h2>
          <Link href='/development'>
            <a className='text-left py-2 block '>
              <span className=' text-sm sm:text-base relative'>
                Learn more{' '}
                <div className='w-full absolute bottom-[-1px]  bg-white  h-[1px] left-0'></div>{' '}
              </span>{' '}
              {'->'}{' '}
            </a>
          </Link>
          <div className='flex justify-center flex-col items-center  my-4 sm:my-8'>
            {subDevelopment.map(item => {
              return <Item key={item.id} item={item} />;
            })}
          </div>
        </div>
      </div>
      <div
        style={{
          background: ` linear-gradient(223.64deg, #137266 21.73%, #BCFFF3 109.36%)`,
        }}
        className='px-4 py-10'
      >
        <div className='my-5 relative'>
          <h2 className='text-[32px]'>Marketing</h2>
          <Link href='/marketing'>
            <a className='text-left py-2 block '>
              <span className=' text-sm sm:text-base relative'>
                Learn more{' '}
                <div className='w-full absolute bottom-[-1px]  bg-white  h-[1px] left-0'></div>{' '}
              </span>{' '}
              {'->'}{' '}
            </a>
          </Link>
          <div className='flex justify-center flex-col items-center  my-4 sm:my-8'>
            {subMarketing.map(item => {
              return <Item key={item.id} item={item} />;
            })}
          </div>
          <div className='absolute   left-[-20px] bottom-[-80px]'>
            <VioletLeft />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileScreen;
