import reactIcon from '/public/assets/images/react.png';
import awsIcon from '/public/assets/images/aws.png';
import pythonIcon from '/public/assets/images/python.png';
import { GreenLeft, GreenRight } from '../common/ShadeSVGs';

const stacks = [
  { id: 1, name: 'React', img: reactIcon.src },
  { id: 2, name: 'AWS', img: awsIcon.src },
  { id: 3, name: 'Python', img: pythonIcon.src },
  { id: 4, name: 'React Native', img: reactIcon.src },
];

const TechStack = ({ description, classes, homePage }) => {
  return (
    <section className='py-5 lg:py-10'>
      <div className={`container   mx-auto px-4`}>
        <div>
          <h1 className='heading lg:text-[62px]'>Tech stack used</h1>
          {description && (
            <p className=' text-base sm:text-xl md:text-2xl lg:text-4xl lg:leading-[48.6px] text-black text-opacity-80 my-5'>
              {description}
            </p>
          )}
        </div>
        {homePage ? (
          <div className='my-20 grid grid-cols-3 md:grid-cols-4 place-items-center gap-x-5 gap-y-10 md:gap-12  max-w-7xl mx-auto'>
            {stacks.map(item => {
              const { id, img, name } = item;

              return (
                <img
                  src={img}
                  className={`${
                    id === 4 ? 'hidden md:block' : ''
                  } w-[70px]  h-[60px] sm:w-auto sm:h-auto`}
                  title={name}
                  alt={name}
                  key={id}
                />
              );
            })}
          </div>
        ) : (
          <div className='my-20 grid grid-cols-3 place-items-center gap-x-5 gap-y-10 md:gap-12  max-w-7xl mx-auto'>
            {stacks.slice(0, 3).map(item => {
              const { id, img, name } = item;

              return (
                <img
                  src={img}
                  className={`${
                    id === 4 ? 'hidden md:block' : ''
                  } w-[70px]  h-[60px] md:w-auto md:h-auto`}
                  title={name}
                  alt={name}
                  key={id}
                />
              );
            })}
          </div>
        )}
      </div>
      <div className='absolute left-0 top-[-200px] z-[-10] overflow-hidden '>
        <GreenLeft />
      </div>
    </section>
  );
};

export default TechStack;
