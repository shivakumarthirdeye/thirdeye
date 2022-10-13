import HeroSection from '@/components/common/HeroSection';
import HowWeWork from '@/components/common/HowWeWork';
import Testimonial from '@/components/common/Testimonial';
import Layout from '@/components/Layout';

const ourWorks = [
  {
    id: 1,
    title: 'Tech Stack',
    description: `At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? `,
  },
  {
    id: 2,
    title: 'Front end',
    description: `At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? `,
  },
  {
    id: 3,
    title: 'Backend',
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
                We believe to use <br className='hidden sm:block' /> modern tech
                stacks for <br className='hidden sm:block' /> all our{' '}
                <span className='bg-black text-white'>development</span>{' '}
                <br className='hidden sm:block' /> work
              </>
            }
          />
        </div>
      </section>
      <HowWeWork steps={ourWorks} title='How we design amazing products ' />
      <Testimonial />
    </Layout>
  );
};

export default design;
