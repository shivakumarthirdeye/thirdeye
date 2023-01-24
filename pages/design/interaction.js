import FAQs from '@/components/common/FAQ/FAQs';
import HeroSection from '@/components/common/HeroSection';
import Testimonial from '@/components/common/Testimonial';
import Items from '@/components/interations/Items';
import Layout from '@/components/Layout';
import React from 'react';

const interactionItems = [
  {
    id: 1,
    title: 'LynkTown',

    description:
      "At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? Or perhaps your goal is simply to generate more leads for your products and services? Whatever actions you're targeting, Third Eye can help.",
    video: '/assets/videos/interactions/lynktown.webm',
  },
  {
    id: 2,
    title: 'U2',
    sub: '(Unique & Universal)',
    description:
      "At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? Or perhaps your goal is simply to generate more leads for your products and services? Whatever actions you're targeting, Third Eye can help.",
    video: '/assets/videos/interactions/u2.webm',
  },
];

const Interaction = () => {
  return (
    <Layout>
      <section className=' relative overflow-x-clip '>
        <div className=' container mx-auto px-4  '>
          <HeroSection
            content={
              <span className='text-4xl sm:text-5xl md:text-6xl lg:text-8xl'>
                Interaction
              </span>
            }
            description={
              <>
                At Third Eye, we’re all about action. What are the{' '}
                <br className='hidden sm:block' /> specific actions that fuel
                your company's growth? Do <br className='hidden sm:block' /> you
                need more consumers to buy your product?
              </>
            }
          />
        </div>
      </section>

      <div className='container mx-auto'>
        {interactionItems.map(item => {
          const { description, gifs, id, title } = item;
          return <Items key={id} {...item} />;
        })}
      </div>

      <Testimonial />
      <FAQs />
    </Layout>
  );
};

export default Interaction;
