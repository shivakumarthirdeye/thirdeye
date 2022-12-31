import { images } from 'next.config';

const Functionality = ({ title, highlight, features }) => {
  return (
    <section className='container mx-auto px-4'>
      <div>
        <h2 className='text-sm md:text-base  text-blue '>SOLUTIONS PROVIDED</h2>
        <h2 className='text-2xl  text-textBlack font-medium sm:text-3xl md:text-4xl lg:text-5xl my-2 md:my-5'>
          {highlight}
        </h2>
      </div>
      <div className='flex justify-center items-center flex-col'>
        {features.map(item => {
          const { id, img, title, points } = item;

          return (
            <div
              key={id}
              className={`  flex flex-col sm:flex-row max-w-6xl  sm:space-x-8 my-3 md:my-5 lg:my-14 `}
            >
              <div className={`flex-1 ${id % 2 === 0 && 'order-2'}`}>
                <img
                  src={img}
                  className='w-full max-w-[518px] max-h-[518px] h-full'
                  alt=''
                />
              </div>
              <div className={` my-4 flex-1   sm:my-0`}>
                <h1 className='text-xl font-medium text-textBlack sm:text-2xl md:text-3xl lg:text-4xl'>
                  {title}
                </h1>
                <div className='ml-8  '>
                  <ul className='list-disc my-2'>
                    {points.map((item, idx) => {
                      return (
                        <li
                          className=' text-sm sm:text-lg text-textBlack  my-0.5 sm:my-1 md:text-xl'
                          key={idx}
                        >
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Functionality;
