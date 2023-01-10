import Layout from '@/components/Layout';
import HeroSection from '@/components/common/HeroSection';
import { FiSearch } from 'react-icons/fi';
import portfolio1 from '/public/assets/images/portfolio/project1.png';
import portfolio2 from '/public/assets/images/portfolio/project2.png';
import portfolio3 from '/public/assets/images/portfolio/project3.png';
import portfolio4 from '/public/assets/images/portfolio/project3.png';
import { useState } from 'react';
import { templates } from '@/utils/portfolioProjects.json';
import Link from 'next/link';

const subject = [...new Set(templates.map(item => item.subject))].map(
  (item, idx) => ({ id: idx, name: item })
);

const Portfolio = () => {
  const [currentCategory, setCurrentCategory] = useState(subject[0].name);
  return (
    <Layout>
      <section className=' relative overflow-x-clip mb-16  lg:mb-60'>
        <div className=' container mx-auto px-4  '>
          <HeroSection
            content={
              <span className='text-4xl sm:text-5xl md:text-6xl lg:text-8xl md:!leading-[133px]'>
                670+ pre-built websites <br className='md:block hidden' />{' '}
                perfect for any business!
              </span>
            }
          />
        </div>
      </section>
      <section className='container mx-auto px-4'>
        <div className='flex justify-center relative max-w-[701px]  mx-auto'>
          <div className='absolute left-0 top-3.5 text-2xl text-black text-opacity-60'>
            <FiSearch />
          </div>
          <input
            placeholder='Search for websites'
            type='text'
            className='w-full py-3 text-2xl px-2 pl-8 outline-none border-b bg-transparent border-black border-opacity-60'
          />
        </div>

        <div className=' md:grid  md:grid-cols-[300px_1fr] gap-10 my-16'>
          <div className='max-w-[300px] mt-14 bg-white h-fit w-full border rounded-lg border-blue'>
            <div className='px-3 border-b text-3xl font-semibold border-blue py-4'>
              <h1>Subject</h1>
            </div>
            <div className='py-4'>
              {subject.map(item => {
                const { id, name } = item;
                return (
                  <div className='px-6 pb-4   font-medium'>
                    <button
                      onClick={() => {
                        setCurrentCategory(name);
                      }}
                      className={`${
                        currentCategory === name
                          ? 'text-blue font-semibold underline'
                          : 'text-black text-opacity-70'
                      } `}
                      key={id}
                    >
                      {name}
                    </button>
                  </div>
                );
              })}
              <div className='px-6 pb-4 font-medium '>
                <button className='text-[#0067BF]'>View all</button>
              </div>
            </div>
          </div>
          <div className='mt-14 md:mt-0'>
            <div className='mb-8'>
              <h2 className='text-black text-opacity-80 text-2xl'>
                {
                  templates.filter(item => item.subject === currentCategory)
                    .length
                }{' '}
                results for:{' '}
                <span className='text-black font-bold'>{currentCategory}</span>{' '}
              </h2>
            </div>
            <div className='grid sm:grid-cols-2   lg:grid-cols-3 xl:grid-cols-4 gap-5'>
              {templates
                .filter(item => item.subject === currentCategory)
                .map(item => {
                  const { id, thumbnail, name, link } = item;
                  return (
                    <a href={link} target='_blank' rel='noopener noreferrer'>
                      <div className='w-full' key={id}>
                        <img
                          src={thumbnail}
                          alt=''
                          className='max-w-[350px] object-cover mx-auto w-full sm:mx-0'
                        />
                        <h2 className='text-xl my-4 text-center capitalize'>
                          {name}
                        </h2>
                      </div>
                    </a>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
