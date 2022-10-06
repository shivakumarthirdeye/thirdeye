import { GreenRight } from '../ShadeSVGs';
import { HeroTextSVG } from './heroSVG';
import HeroVideo from './HeroVideo';

const Hero = () => {
  return (
    <section className=' relative  overflow-hidden'>
      <div className=' container mx-auto px-4 '>
        <h1 className='text-5xl lg:text-7xl text-black text-opacity-80 font-light leading-[70px] lg:leading-[87.14px] z-10'>
          We are a design, <br className='hidden lg:block ' /> development &
          marketing <br className='hidden lg:block  ' /> studio creating an
          impact
        </h1>
        <div className='absolute right-[-45%] sm:right-[-32%]  lg:right-[-10%] xl:right-40 top-[260px] z-[-10] '>
          <HeroTextSVG />
        </div>
        <div className='absolute right-0 top-[-100px] z-[-10] '>
          <GreenRight />
        </div>
        {/* <HeroVideo /> */}

        <div className='my-20'>
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
      </div>
      <div className='absolute right-0 top-[80%] z-[-10] '>
        <GreenRight />
      </div>
    </section>
  );
};

export default Hero;
