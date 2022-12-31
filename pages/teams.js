import FAQs from '@/components/common/FAQ/FAQs';
import HeroSection from '@/components/common/HeroSection';
import { HeroTextSVG } from '@/components/common/heroSVG';
import { GreenRight, VioletLeft } from '@/components/common/ShadeSVGs';
import Testimonial from '@/components/common/Testimonial';
import Layout from '@/components/Layout';
import React from 'react';
import img1 from '/public/assets/images/teams/1.png';
import img2 from '/public/assets/images/teams/2.png';
import img3 from '/public/assets/images/teams/3.png';
import img4 from '/public/assets/images/teams/4.png';

const members = [
  {
    id: 1,
    img: img1.src,
    name: 'Full Name',
    designation: 'Designation',
  },
  {
    id: 2,
    img: img2.src,
    name: 'Full Name',
    designation: 'Designation',
  },
  {
    id: 3,
    img: img3.src,
    name: 'Full Name',
    designation: 'Designation',
  },
  {
    id: 4,
    img: img4.src,
    name: 'Full Name',
    designation: 'Designation',
  },
];

const Teams = () => {
  return (
    <Layout>
      <section className='relative overflow-x-clip'>
        <div className='container mx-auto px-4  '>
          <HeroSection
            content=' Meet our Team'
            description={
              <>
                At Third Eye, we’re all about action. What are the{' '}
                <br className='hidden sm:block' /> specific actions that fuel
                your company's growth? Do <br className='hidden sm:block' /> you
                need more consumers to buy your product?
              </>
            }
          />
        </div>
      </section>
      <div className='relative'>
        <div className='flex justify-center w-full flex-col items-center sm:grid sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-10 my-20 mt-[150px] md:mt-[250px] lg:mt-[300px] px-4 container mx-auto '>
          {members.map(item => {
            const { id, designation, img, name } = item;
            return (
              <div key={id} className='max-w-[320px] w-full'>
                <div className='relative max-w-[320px] w-full rounded-[32px] flex justify-center h-[337px] bg-[#E7F6F1] border border-black border-opacity-[64%]'>
                  <img src={img} alt='' className='absolute bottom-0' />
                </div>
                <div className='my-6 pl-1 text-black text-opacity-80'>
                  <h1 className='text-lg md:text-xl lg:text-2xl'>{name}</h1>
                  <p className='text-sm lg:text-base'>{designation}</p>
                </div>
              </div>
            );
          })}
          <div className='absolute z-[-1]  left-0 top-[-400px]'>
            <VioletLeft />
          </div>
          <div className='absolute z-[-1]  right-0 top-10'>
            <GreenRight />
          </div>
        </div>
      </div>
      <Testimonial />
      <FAQs />
    </Layout>
  );
};

export default Teams;