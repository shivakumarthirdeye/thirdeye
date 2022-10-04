import React from 'react';

const Footer = () => {
  return (
    <footer
      style={{
        background: `linear-gradient(74.78deg, #3545D1 0%, #31A4C9 100%)`,
      }}
      className='text-white h-[550px] flex flex-col items-center justify-center'
    >
      <div className='container mx-auto'>
        <h1 className='text-5xl leading-[64.8px]'>
          Let’s build something <br /> great together
        </h1>
        <div className='my-10'>
          <button className='max-w-[211px] w-full py-4 text-base rounded  bg-white text-[#364BD2]'>
            Get in touch
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
