import { images } from 'next.config';

const Functionality = ({ title, highlight, features }) => {
  return (
    <section className='container mx-auto px-4'>
      <div>
        <h2>{title}</h2>
        <h2 className='max-w-[1030px] text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>
          {highlight}
        </h2>
      </div>
      <div>
        {features.map(item => {
          const { id, img, title, points } = item;

          return (
            <div
              key={id}
              className='flex flex-col sm:flex-row max-w-4xl mx-auto sm:space-x-4 my-10 justify-center items-center sm:justify-between sm:items-start'
            >
              <div>
                <img
                  src={img.src}
                  className='md:h-[400px] max-w-[518px] w-full   lg:h-[518px]'
                  alt=''
                />
              </div>
              <div className='my-4 sm:my-0'>
                <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl'>
                  {title}
                </h1>
                <div className='ml-8 '>
                  <ul className='list-disc my-2'>
                    {points.map(item => {
                      return (
                        <li
                          className='sm:text-lg my-0.5 sm:my-1 md:text-xl'
                          key={item.id}
                        >
                          {item.point}
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
