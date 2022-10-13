import Clients from '@/components/common/Clients';
import HeroSection from '@/components/common/HeroSection';
import HowWeWork from '@/components/common/HowWeWork';
import Testimonial from '@/components/common/Testimonial';
import Layout from '@/components/Layout';

const ourWorks = [
  {
    id: 1,
    title: 'Understand',
    description: `At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? `,
  },
  {
    id: 2,
    title: 'Wireframing',
    description: `At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? `,
  },
  {
    id: 3,
    title: 'Visual Design',
    description: `At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? `,
  },
  {
    id: 4,
    title: 'Launch & Growth',
    description: `At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? `,
  },
];

const design = () => {
  return (
    <Layout>
      <section className=' relative overflow-x-clip mb-60'>
        <div className=' container mx-auto px-4  '>
          <HeroSection
            content={
              <>
                Good <span className='bg-black text-white'>design</span> is like{' '}
                <br className='hidden sm:block' /> clear thinking made{' '}
                <br className='hidden sm:block' /> visual
              </>
            }
          />
        </div>
      </section>
      <Clients />
      <HowWeWork steps={ourWorks} title='How we design amazing products ' />
      <Testimonial />
    </Layout>
  );
};

export default design;
