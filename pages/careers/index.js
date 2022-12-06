import Layout from '@/components/Layout';
import { careerOptions } from '@/utils/careers.json';
import Link from 'next/link';

const careers = () => {
  return (
    <Layout showHeaderBtn={false}>
      <section className='my-14 px-4'>
        <div className='container max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between'>
          <div className='flex-1'>
            <h1 className='text-5xl leading-[64.8px]'>
              Join us and create <br /> something great
            </h1>
            <div className='text-xl text-black text-opacity-80 font-light my-5 leading-[30px]'>
              <p>
                At Third Eye, we’re all about action. What are the <br />{' '}
                specific actions that fuel your company's growth? <br /> Do you
                need more consumers to buy your product
              </p>
            </div>
          </div>
          <div className='flex-1 grid gap-5 my-10 lg:my-0'>
            {careerOptions.map(item => {
              const { id, smallDescription, title, slug } = item;

              return (
                <div
                  key={id}
                  className='max-w-[522px] border rounded-xl border-[#00000019] p-6'
                >
                  <h1 className='text-2xl font-medium'>{title}</h1>
                  <p className='text-sm my-3 text-black  text-opacity-80 leading-[18.9px]'>
                    {smallDescription}
                  </p>
                  <div className='flex justify-end'>
                    <Link href={`/careers/${slug}`}>
                      <a>
                        <button className='flex items-center space-x-3 text-base font-medium'>
                          Apply
                          <svg
                            className='ml-2'
                            width='22'
                            height='19'
                            viewBox='0 0 22 19'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M3.34375 9.5L17.3438 9.5'
                              stroke='black'
                              strokeWidth='0.78125'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                            <path
                              d='M12.625 4.03125L18.0938 9.5L12.625 14.9688'
                              stroke='black'
                              strokeWidth='0.78125'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                          </svg>
                        </button>
                      </a>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default careers;
