import React from 'react';

const FreebieItem = ({ item, toggleModal, setCurrentItem }) => {
  const { id, img, title, description, downloads } = item;
  const handleClick = () => {
    toggleModal();
    setCurrentItem(item);
  };
  return (
    <div className='max-w-[400.18px] mx-auto'>
      <div className='cursor-pointer' onClick={handleClick}>
        <img src={img} alt='' className='max-h-[391.14px] w-full' />
      </div>
      <div className='my-5'>
        <div className='flex items-center justify-between'>
          <h1 className='text-xl lg:text-2xl font-medium max-w-[220.26px]'>
            {title}
          </h1>
          <p className='text-xs md:text-sm'> {downloads} dowloads</p>
        </div>
        <div className='flex md:mt-2 items-center justify-between'>
          <p className='text-lg lg:text-xl max-w-[273.6px] text-black text-opacity-70'>
            {' '}
            {description}
          </p>
          <button
            onClick={handleClick}
            className='text-center flex flex-col items-center'
          >
            <svg
              className='w-[45px] h-[38px] md:w-[50px] md:h-[44px]'
              width='50'
              height='44'
              viewBox='0 0 50 44'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M47.5078 25.3906C46.63 25.3906 45.9071 26.1136 45.9071 26.9913V39.9012H3.20145V26.9913C3.20145 26.1135 2.47852 25.3906 1.60072 25.3906C0.722931 25.3906 0 26.1136 0 26.9913V41.502C0 42.3798 0.722931 43.1027 1.60072 43.1027H47.508C48.3858 43.1027 49.1087 42.3798 49.1087 41.502V26.9913C49.1087 26.062 48.3858 25.3906 47.508 25.3906H47.5078Z'
                fill='#3A73FB'
              />
              <path
                d='M23.4964 31.1755C23.8062 31.4853 24.2193 31.6402 24.6325 31.6402C25.0456 31.6402 25.4588 31.4853 25.7685 31.1755L35.2185 21.7256C35.8381 21.106 35.8381 20.1248 35.2185 19.5053C34.599 18.8857 33.6178 18.8857 32.9982 19.5053L26.285 26.2185V2.20619C26.285 1.32837 25.5621 0.605469 24.6843 0.605469C23.8065 0.605469 23.0836 1.3284 23.0836 2.20619V26.2701L16.267 19.4535C15.6475 18.834 14.6663 18.834 14.0467 19.4535C13.4271 20.0731 13.4271 21.0542 14.0467 21.6738L23.4964 31.1755Z'
                fill='#3A73FB'
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FreebieItem;
