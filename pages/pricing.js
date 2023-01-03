import HeroSection from '@/components/common/HeroSection';
import Clients from '@/components/common/Clients';
import Layout from '@/components/Layout';
import ClientReview from '@/components/casestudy/ClientReview';
import FAQs from '@/components/common/FAQ/FAQs';
import Testimonial from '@/components/common/Testimonial';
import PricingItem from '@/components/common/PricingItem';

const PricingModal = [
  {
    id: 1,
    name: 'Stater',
    price: '$5900',
    features: [
      '5 Pages',
      'Wordpress CMS',
      'Responsive Layouts',
      'Contact Form',
      'Google Map',
      'SEO Friendly',
      'Social Media Integration',
      '2 Design Concepts',
      'Unlimited Revisions',
    ],
  },
  {
    id: 2,
    highlight: true,
    name: 'Best buy',
    price: '$8900',
    features: [
      '5 Pages',
      'Wordpress CMS',
      'Responsive Layouts',
      'Contact Form',
      'Google Map',
      'SEO Friendly',
      'Social Media Integration',
      '2 Design Concepts',
      'Unlimited Revisions',
    ],
  },
  {
    id: 3,
    name: 'Premium',
    price: '$9900',
    features: [
      '5 Pages',
      'Wordpress CMS',
      'Responsive Layouts',
      'Contact Form',
      'Google Map',
      'SEO Friendly',
      'Social Media Integration',
      '2 Design Concepts',
      'Unlimited Revisions',
    ],
  },
];

const pricing = () => {
  return (
    <Layout>
      <section className=' relative overflow-x-clip mb-10  lg:mb-60'>
        <div className=' container mx-auto px-4  '>
          <HeroSection
            content={
              <span className='text-4xl md:text-5xl lg:text-7xl xl:text-8xl'>
                Pricing
              </span>
            }
            description={
              <>
                At Third Eye, we’re all about action. What are the specific
                actions that <br className='hidden sm:block' /> fuel your
                company's growth? Do you need more consumers to buy{' '}
                <br className='hidden sm:block' /> your product?
              </>
            }
          />
        </div>
      </section>
      <div className='container mx-auto flex justify-center lg:justify-between max-w-7xl mb-10 px-4 gap-5 lg:space-x-4 flex-wrap  '>
        {PricingModal.map(item => {
          return <PricingItem key={item.id} item={item} />;
        })}
      </div>

      <Clients />
      <Testimonial />

      <FAQs />
    </Layout>
  );
};

export default pricing;
