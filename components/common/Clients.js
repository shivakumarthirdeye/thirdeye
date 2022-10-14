import client1 from '/public/assets/images/client1.png';
import client2 from '/public/assets/images/client2.png';
import client3 from '/public/assets/images/client3.png';
import client4 from '/public/assets/images/client4.png';
import client5 from '/public/assets/images/client5.png';
import { HiArrowRight } from 'react-icons/hi';

const clientImg = [
  {
    id: 1,
    img: client1.src,
  },
  {
    id: 2,
    img: client2.src,
  },
  {
    id: 3,
    img: client3.src,
  },
  {
    id: 4,
    img: client4.src,
  },
  {
    id: 5,
    img: client5.src,
  },
];

const Clients = ({ svg }) => {
  return (
    <div className='relative py-20  overflow-hidden'>
      {svg && (
        <svg
          className='absolute left-0  top-[-250px] xl:top-[-300px] z-[-10]  w-[200px] h-[500px] xl:w-[271px] xl:h-[585px]'
          viewBox='0 0 271 585'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle
            cx='-21.5'
            cy='292.5'
            r='291.5'
            stroke='#B1C7FF'
            strokeWidth='2'
          />
        </svg>
      )}

      <div className='container mx-auto  px-4'>
        <h1 className='heading '>Selected Clients</h1>
        <div className='my-10 lg:my-20 flex flex-wrap  justify-center lg:justify-between'>
          {clientImg.map(item => {
            const { id, img } = item;

            return <img src={img} key={id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Clients;
