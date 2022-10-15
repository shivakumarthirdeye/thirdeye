import React, { useState, useRef } from 'react';

const Accordion = ({ title, content }) => {
  const [isOpened, setOpened] = useState(false);
  const [height, setHeight] = useState('0px');
  const contentElement = useRef(null);

  const HandleOpening = () => {
    setOpened(!isOpened);
    setHeight(!isOpened ? `${contentElement.current.scrollHeight}px` : '0px');
  };
  return (
    <div className='border-b  py-4  border-[#cfd8dc]'>
      <div
        onClick={HandleOpening}
        className={`  rounded-sm
    flex items-center justify-between py-3  text-[#667085] cursor-pointer`}
      >
        <h1
          className={` text-black text-opacity-80 font-semibold lg:text-lg text-base `}
        >
          {title}
        </h1>
        {isOpened ? (
          <button className='text-4xl lg:text-5xl text-opacity-80 text-black font-semibold'>
            -
          </button>
        ) : (
          <button className='text-3xl lg:text-4xl text-opacity-80 text-black font-semibold'>
            +
          </button>
        )}
      </div>
      <div
        ref={contentElement}
        style={{ height: height }}
        className='overflow-hidden transition-all duration-200'
      >
        <p className=' py-6 text-[#546e7a] font-[400] md:text-base text-sm'>
          {content}
        </p>
      </div>
    </div>
  );
};

export default Accordion;
