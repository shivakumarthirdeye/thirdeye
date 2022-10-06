import { VioletLeft } from '../ShadeSVGs';

const HeroVideo = () => {
  return (
    <div className='lg:bg-[#D2ECED] z-10 rounded-md mt-56 w-full h-full'>
      <video
        src='/assets/videos/sample.webm'
        className='lg:h-[665px] w-full bg-cover rounded-md '
        // autoPlay
        muted
        // loop
      ></video>

      <div className='absolute top-[45%] left-0 z-[-10]'>
        <VioletLeft />
      </div>
    </div>
  );
};

export default HeroVideo;
