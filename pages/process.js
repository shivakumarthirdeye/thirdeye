import Layout from '@/components/Layout';
import Link from 'next/link';
import { HiOutlineArrowRight } from 'react-icons/hi';

const processStep = [
  {
    id: 1,
    title: 'Design',
    to: '/design',
    background: `linear-gradient(42.36deg, #7CE7FF 1.63%, #3E4FA8 100%), #FFFFFF`,
  },
  {
    id: 2,
    title: 'Development',
    to: '/development',
    background: `linear-gradient(42.36deg, #C67DFF 1.63%, #6D2890 100%), #FFFFFF`,
  },
  // {
  //   id: 3,
  //   title: 'Marketing',
  //   to: '/marketing',
  //   background: `linear-gradient(42.36deg, #AAF0E4 1.63%, #147267 100%), #FFFFFF`,
  // },
];

const process = () => {
  return (
    <Layout>
      <div className='container mx-auto my-10 px-4'>
        <h1 className='heading hidden md:block'>What are you interested in?</h1>
        <div className='my-10'>
          {processStep.map(item => {
            const { id, background, title, to } = item;

            return (
              <div
                key={id}
                style={{
                  background,
                }}
                className='flex flex-col sm:flex-row space-y-2 h-[121px] justify-between max-w-[601px] w-full sm:items-center p-10 rounded-xl  my-4 text-white '
              >
                <div>
                  <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>
                    {title}
                  </h1>
                </div>
                <div>
                  <Link href={to}>
                    <a className='flex  items-center space-x-2 relative w-fit'>
                      <div>See Process </div>
                      <div>
                        <HiOutlineArrowRight />
                      </div>
                      <div className='absolute h-[1px] w-full bg-white bottom-0 left-[-8px]'></div>
                    </a>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default process;
