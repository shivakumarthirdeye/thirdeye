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

const TechStack = () => {
  return (
    <section className='mt-64 mb-40 relative'>
      <div className='container   mx-auto px-4'>
        <div>
          <h1 className='heading'>Tech stack used</h1>
        </div>
        <div className='my-20 grid sm:grid-cols-2 md:grid-cols-4 place-items-center gap-x-5 gap-y-10 md:gap-12  max-w-7xl mx-auto'>
          {stacks.map(item => {
            const { id, img, name } = item;

            return <img src={img} title={name} alt={name} key={id} />;
          })}
        </div>
      </div>
      <div className='absolute left-0 top-[-200px] z-[-10] overflow-hidden '>
        <GreenLeft />
      </div>
    </section>
  );
};

export default TechStack;
