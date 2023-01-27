import client1 from '/public/assets/images/clients/main/1.png';
import client2 from '/public/assets/images/clients/main/2.png';
import client3 from '/public/assets/images/clients/main/3.png';
import client4 from '/public/assets/images/clients/main/4.png';
import client5 from '/public/assets/images/clients/main/5.png';
import client6 from '/public/assets/images/clients/main/6.png';
import client7 from '/public/assets/images/clients/main/7.png';
import client8 from '/public/assets/images/clients/main/8.png';
import client9 from '/public/assets/images/clients/main/9.png';

const allClients = [
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
  {
    id: 6,
    img: client6.src,
  },
  {
    id: 7,
    img: client7.src,
  },
  // {
  //   id: 8,
  //   img: client8.src,
  // },
  // {
  //   id: 9,
  //   img: client9.src,
  // },
];

const Clients = ({ clients = allClients, svg, title = 'Selected Clients' }) => {
  return (
    <div className='relative py-10 md:py-24 lg:py-28   overflow-hidden'>
      {svg && (
        <svg
          className='absolute left-0  top-[-350px] xl:top-[-350px] z-[-10]  w-[200px] h-[500px] xl:w-[271px] xl:h-[585px]'
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
        <h1 className='heading lg:text-[64px] '>{title}</h1>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(auto-fit,minmax(200px,1fr))`,
          }}
          className='my-5  items-center gap-x-3 gap-y-5 '
        >
          {clients.map(item => {
            const { id, img } = item;

            return (
              <img
                loading='lazy'
                className='w-auto mx-auto mix-blend-multiply'
                src={img}
                key={id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Clients;
