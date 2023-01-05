import { VioletLeft } from '../../common/ShadeSVGs';

const HeroVideo = () => {
  return (
    <div className='px-4'>
      <div className='bg-[#D2ECED] z-10  container mx-auto h-[200px] sm:h-[65vw]  lg:h-[665px] w-full rounded-md mt-20 sm:mt-56  '>
        <div className='absolute top-[80%] left-0 z-[-10]'>
          <VioletLeft />
        </div>
      </div>
    </div>
  );
};

export default HeroVideo;
