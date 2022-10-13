import { GreenRight } from '../../common/ShadeSVGs';
import { HeroTextSVG } from '../../common/heroSVG';
import HeroVideo from './HeroVideo';
import HeroSection from '@/components/common/HeroSection';

const Hero = () => {
  return (
    <>
      <section className=' relative overflow-x-clip'>
        <div className=' container mx-auto px-4  '>
          <HeroSection
            content={
              <>
                We are a design, <br className='hidden lg:block ' /> development
                & marketing <br className='hidden lg:block  ' /> studio creating
                an impact
              </>
            }
          />

          {/* <HeroVideo /> */}
        </div>
      </section>
      <section className='my-36  md:my-30'>
        <div className=' container mx-auto px-4  '>
          <h2 className='text-3xl lg:text-4xl text-black text-opacity-80 font-light leading-[40px] lg:leading-[48.6px] z-10'>
            At Third Eye, we’re all about action. What are the{' '}
            <br className='hidden lg:block  ' /> specific actions that fuel your
            company&apos;s growth? <br className='hidden lg:block  ' /> Do you
            need more consumers to buy your product?{' '}
            <br className='hidden lg:block  ' /> Or perhaps your goal is simply
            to generate more <br className='hidden lg:block  ' /> leads for your
            products and services? Whatever <br className='hidden lg:block  ' />{' '}
            actions you&apos;re targeting, Third Eye can help.
          </h2>
        </div>
      </section>
    </>
  );
};

export default Hero;
