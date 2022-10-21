import React from 'react';
import Design from './Design';
import MobileScreen from './MobileScreen';

const OurCapabilities = () => {
  return (
    <>
      <div className='hidden md:block'>
        <Design />
      </div>
      <div className='md:hidden'>
        <MobileScreen />
      </div>
    </>
  );
};

export default OurCapabilities;
