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

const Clients = () => {
  return (
    <div className='relative py-20  overflow-hidden'>
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
      <div className='container mx-auto  px-4'>
        <h1 className='text-5xl lg:text-7xl text-black text-opacity-80 font-light leading-[70px] lg:leading-[87.14px] '>
          Selected Clients
        </h1>
        <div className='my-20 flex flex-wrap  justify-center lg:justify-between'>
          {clientImg.map(item => {
            const { id, img } = item;

            return <img src={img} key={id} />;
          })}
        </div>
      </div>
      <div
        style={{
          background: `linear-gradient(74.78deg, #3545D1 0%, #31A4C9 100%)`,
        }}
        className='text-white py-16 md:py-28    px-4'
      >
        <div className='container mx-auto'>
          <h1 className='text-5xl lg:text-7xl  font-light leading-[70px] lg:leading-[87.14px] '>
            How can we help you
          </h1>

          <div className='my-20 flex flex-col lg:flex-row justify-between'>
            <div className='flex-1'>
              <h1 className='text-3xl lg:text-4xl font-semibold flex items-center '>
                <span>
                  <HiArrowRight className='inline' />
                </span>
                <span className=' ml-2 relative py-1'>
                  MVP for Startups
                  <div className='absolute bottom-0 w-full bg-white h-1'></div>
                </span>
              </h1>
              <ul className='text-3xl lg:text-4xl font-normal '>
                <li className='my-10'>Agile Product team for scaleups</li>
                <li className='my-10'>Enterprise Digital Transformation</li>
              </ul>
            </div>
            <div className='flex-1'>
              <svg
                width='55'
                height='71'
                viewBox='0 0 55 71'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <circle
                  cx='27.25'
                  cy='43.0088'
                  r='26.2651'
                  stroke='white'
                  strokeWidth='1.96988'
                />
                <circle
                  cx='27.251'
                  cy='15.4307'
                  r='14.4458'
                  stroke='white'
                  strokeWidth='1.96988'
                />
              </svg>

              <p className='my-10 text-xl lg:text-2xl font-light'>
                At Third Eye, we&apos;re all about action. What are the specific
                actions that fuel your company&apos;s growth? Do you need more
                consumers to buy your product?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
