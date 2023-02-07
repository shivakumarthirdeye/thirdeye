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
                Third Eye Innovations <br className='block ' /> crafting digital
                solutions <br className='block ' /> to drive real business
                results.
              </>
            }
          />
        </div>
      </section>
      <HeroVideo />
      <section className='my-10  md:my-30'>
        <div className=' container mx-auto px-4  '>
          <h2 className='max-w-4xl text-base sm:text-xl md:text-3xl lg:text-4xl text-black text-opacity-[94]  sm:leading-[30px] md:leading-[40px] lg:leading-[48.6px] z-10'>
            Third Eye Innovations is a design, development, and marketing
            company focused on developing high-performance, intuitive, secure,
            and best-in-class digital solutions. Through in-depth research and
            stakeholder collaboration, we create the best digital experience for
            your company and its target audience. We comprehend the complexities
            that have arisen and drive a possible output by your expectations.
          </h2>
        </div>
      </section>
    </>
  );
};

export default Hero;
