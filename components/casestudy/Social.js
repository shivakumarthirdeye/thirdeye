const Social = ({ socialLinks }) => {
  return (
    <div className='container  mx-auto my-10 md:my-20 px-4'>
      <div className='relative w-fit'>
        <h1 className='text-sm md:text-base text-black text-opacity-80 md:font-medium'>
          Click to know more:{' '}
        </h1>
        <div className='absolute my-1 h-[4px] rounded-full w-[50%]  bg-[#5FC7EC]'></div>
      </div>
      <div className='flex space-x-5 my-8  items-center'>
        {socialLinks.map(item => {
          const { id, img, href } = item;
          return (
            <div key={id}>
              <a href={href} target='_blank' rel='noopener noreferrer'>
                <img loading='lazy' src={img} alt='' />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Social;
