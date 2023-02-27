import Link from 'next/link';

import { useMediaQuery } from 'react-responsive';

const Card = ({ description, id, image, name, slug }) => {
  const isMobile = useMediaQuery({
    query: '(min-width: 768px)',
  });
  return (
    <div
      key={id}
      className='max-w-[578px] w-full'
      style={{
        marginTop: isMobile && ` ${id % 2 === 0 && 80}px`,
      }}
    >
      <img src={image} alt='' className='w-full max-h-[650px]' />
      <div className='my-4'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[54px]'>
          {name}
        </h1>
        <p className='mt-2 max-w-[491px] text-black text-opacity-80 text-base sm:text-lg  md:text-xl lg:text-2xl'>
          {description}
        </p>
      </div>
      {slug && (
        <div className='my-8 '>
          <Link href={`/design/ui-design/${slug}`}>
            <a>
              <button className='sm:text-lg font-semibold relative md:text-xl lg:text-2xl case-study--btn    text-black text-opacity-80 '>
                View design
              </button>
            </a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Card;
