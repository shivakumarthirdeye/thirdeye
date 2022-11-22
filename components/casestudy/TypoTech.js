const TypoTech = ({ fontImg, techImg }) => {
  return (
    <section className='container mx-auto px-4'>
      <div>
        <h1 className='my-2 max-w-[1030px] text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>
          Font & Typography
        </h1>
        <div className='max-w-6xl  mx-auto my-5 md:my-12'>
          <img src={fontImg} className='w-full' alt='' />
        </div>
      </div>
      {techImg && (
        <div className='mt-28'>
          <h1 className='my-2 max-w-[1030px] text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>
            Tech Stack
          </h1>
          <div className='max-w-6xl  mx-auto my-5 md:my-12'>
            <img src={techImg} className='w-full' alt='' />
          </div>
        </div>
      )}
    </section>
  );
};

export default TypoTech;
