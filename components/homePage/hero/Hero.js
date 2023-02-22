import HeroVideo from './HeroVideo';
import HeroSection from '@/components/common/HeroSection';

const Hero = () => {
  return (
    <>
      <section className=' relative overflow-x-clip'>
        <div className=' container mx-auto   '>
          <HeroSection
            content={
              <>
                Third Eye Innovations <br className='hidden xs:block' />{' '}
                crafting digital solutions <br className='hidden xs:block' /> to
                drive real business <br className='hidden xs:block' /> results.
              </>
            }
          />
        </div>
      </section>
      <HeroVideo />
      <section className='!my-5 md:my-10  lg:my-30'>
        <div className=' container   '>
          <h2 className='max-w-[877px] text-sm sm:text-base md:text-xl lg:text-3xl xl:text-4xl text-black text-opacity-[94]  sm:leading-[30px] md:leading-[40px] lg:leading-[48.6px] z-10'>
            Third Eye Innovations is a design, development, and marketing
            company focused on developing high-performance, intuitive, secure,
            and best-in-class digital solutions. Through in-depth research and
            stakeholder collaboration, we create the best digital experience for
            your company and its target audience. 
          </h2>
        </div>
      </section>
    </>
  );
};

export default Hero;
