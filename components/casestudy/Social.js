const Social = ({ socialLinks }) => {
  return (
    <div className='container mx-auto my-20 px-4'>
      <div className='relative w-fit'>
        <h1 className='text-2xl font-semibold'>Click to know more: </h1>
        <div className='absolute h-[4px] rounded-full w-[50%]  bg-[#5FC7EC]'></div>
      </div>
      <div className='flex space-x-5 my-8  items-center'>
        {socialLinks.map(item => {
          const { id, img, href } = item;
          return (
            <div key={id}>
              <a href={href} target='_blank' rel='noopener noreferrer'>
                <img src={img} alt='' />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Social;
