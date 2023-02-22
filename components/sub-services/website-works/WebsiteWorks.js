import work1 from 'public/assets/images/subServices/website-works/1.png';
import work2 from 'public/assets/images/subServices/website-works/2.png';
import work3 from 'public/assets/images/subServices/website-works/3.png';
import work4 from 'public/assets/images/subServices/website-works/4.png';
import work5 from 'public/assets/images/subServices/website-works/5.png';
import work6 from 'public/assets/images/subServices/website-works/6.png';
import work7 from 'public/assets/images/subServices/website-works/7.png';
import work8 from 'public/assets/images/subServices/website-works/8.png';
import work9 from 'public/assets/images/subServices/website-works/9.png';
import work10 from 'public/assets/images/subServices/website-works/10.png';
import work11 from 'public/assets/images/subServices/website-works/11.png';
import work12 from 'public/assets/images/subServices/website-works/12.png';
import Link from 'next/link';

const websiteWorks = [
  {
    id: 1,
    name: 'Trade Square',
    image: work1,
    description: 'Trade Square is a website and one-stop solution for globally',
  },
  {
    id: 2,
    name: 'Agrinia',
    image: work2,
    description: 'Agrinia is a website and one-stop solution for globally',
  },
  {
    id: 3,
    name: 'LynkTown',
    image: work3,
    description: 'LynkTown is a website and one-stop solution for globally',
  },
  {
    id: 4,
    name: 'Wavelang',
    image: work4,
    description: 'Wavelang is a website and one-stop solution for globally',
  },
  {
    id: 5,
    name: 'TEW',
    image: work5,
    description: 'TEW is a website and one-stop solution for globally',
  },
  {
    id: 6,
    name: 'Stockal',
    image: work6,
    description: 'Stockal is a website and one-stop solution for globally',
  },
  {
    id: 7,
    name: 'Unique & Universal',
    image: work7,
    description:
      'Unique & Universal & Universallearn is a website and one-stop solution for globally',
  },
  {
    id: 8,
    name: 'Air Aura',
    image: work8,
    description: 'Air Aura is a website and one-stop solution for globally',
  },
  {
    id: 9,
    name: 'Arista Rehab',
    image: work9,
    description: 'Arista Rehab is a website and one-stop solution for globally',
  },
  {
    id: 10,
    name: 'ECommerce Web App',
    image: work10,
    description:
      'ECommerce Web App is a website and one-stop solution for globally',
  },
  {
    id: 11,
    name: 'Trade Square',
    image: work11,
    description: 'Trade square is a website and one-stop solution for globally',
  },
  {
    id: 12,
    name: 'Priyaraj makeup & more',
    image: work12,
    description:
      'Priyaraj makeup & more is a website and one-stop solution for globally',
  },
];
const WebsiteWorks = ({ limit = websiteWorks.length }) => {
  return (
    <section>
      {limit !== websiteWorks.length && (
        <div className='container  mb-20 overflow-hidden'>
          <h1 className='heading'>{'Website Works'}</h1>
        </div>
      )}
      <div className='container mx-auto grid gap-x-20  justify-center md:grid-cols-2 max-w-7xl'>
        {websiteWorks.slice(0, limit).map(item => {
          const { description, id, image, name } = item;

          return (
            <div
              key={id}
              className='max-w-[578px] w-full'
              style={{
                marginTop: ` ${id % 2 === 0 && 80}px`,
              }}
            >
              <img src={image.src} alt='' className='w-full max-h-[650px]' />
              <div className='my-4'>
                <h1 className='text-[54px]'>{name}</h1>
                <p className='mt-2 max-w-[491px] text-black text-opacity-80 text-2xl'>
                  {description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      {limit !== websiteWorks.length && (
        <div className='flex justify-center my-16'>
          <Link href='/development/website/works'>
            <button className='bg-black max-w-[265px] w-full py-4 text-white'>
              Load More
            </button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default WebsiteWorks;
