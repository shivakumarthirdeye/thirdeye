import Link from 'next/link';

const GrowWithUs = () => {
  return (
    <div
      className='h-[528px] my-10  text-white flex-col flex justify-center items-center'
      style={{
        background: `linear-gradient(74.78deg, #3545D1 0%, #31A4C9 100%)`,
      }}
    >
      <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-[40px] md:!leading-[48.41px]'>
        Ready to grow with us
      </h1>
      <p className='my-5 text-lg sm:text-xl md:text-2xl max-w-[602px] font-light'>
        We're always interested in working on new products. Hit us up to chat
        about what you have in mind!
      </p>
      <Link href='/contact'>
        <a className='max-w-[188px] grid place-items-center w-full bg-white text-black h-[64px] text-lg sm:text-xl md:text-2xl rounded-lg font-medium'>
          Get in touch
        </a>
      </Link>
    </div>
  );
};

export default GrowWithUs;
