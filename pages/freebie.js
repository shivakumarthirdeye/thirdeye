import FAQs from '@/components/common/FAQ/FAQs';
import HeroSection from '@/components/common/HeroSection';
import TabSwiper from '@/components/common/TabSwiper';
import Testimonial from '@/components/common/Testimonial';
import Layout from '@/components/Layout';
import { useState } from 'react';
import hero1 from '/public/assets/images/subServices/ui/Hero1.png';
import hero2 from '/public/assets/images/subServices/ui/Hero2.png';
import hero3 from '/public/assets/images/subServices/ui/Hero3.png';
import img1 from '/public/assets/images/freebies/1.png';
import img2 from '/public/assets/images/freebies/2.png';
import img3 from '/public/assets/images/freebies/3.png';
import FreebieItem from '@/components/common/FreebieItem';
import FreebieDownloadModal from '@/components/common/FreebieDownloadModal';

const tabs = [
  {
    id: 1,
    name: 'Dashboard',
  },
  {
    id: 2,
    name: 'Website design',
  },
  {
    id: 3,
    name: 'Mobile app',
  },
  {
    id: 4,
    name: 'Landing page',
  },
  {
    id: 5,
    name: 'Ecommerce',
  },
  {
    id: 6,
    name: 'Social media',
  },
  {
    id: 7,
    name: 'Banner design',
  },
  {
    id: 8,
    name: 'Ui Kit',
  },
];

const freebieItems = [
  {
    id: 1,
    img: img1.src,
    title: 'Realestate website design',
    description: 'freebie resources for Figma and Adobe XD',
    downloads: '52',
  },
  {
    id: 2,
    img: img2.src,
    title: 'Travel agency design',
    description: 'freebie resources for Figma and Adobe XD',
    downloads: '52',
  },
  {
    id: 3,
    img: img3.src,
    title: 'Online Doctor Consultant design',
    description: 'freebie resources for Figma and Adobe XD',
    downloads: '52',
  },
];

const Freebie = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].name);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  console.log(
    '🚀 ~ file: freebie.js ~ line 79 ~ Freebie ~ currentItem',
    currentItem
  );

  const toggleModal = () => {
    setIsModalOpen(prev => !prev);
  };
  return (
    <Layout>
      <FreebieDownloadModal
        open={isModalOpen}
        toggleModal={toggleModal}
        setCurrentItem={setCurrentItem}
        item={currentItem}
      />{' '}
      <section className='my-10 relative overflow-x-clip mb-10  lg:mb-60'>
        <div className=' container mx-auto px-4  '>
          <HeroSection
            content={
              <span className='text-4xl md:text-5xl lg:text-7xl xl:text-8xl'>
                Figma Freebie | <br className='hidden sm:block' /> Figma
                Resources
              </span>
            }
          />
        </div>
      </section>
      <div className='mt-28'></div>
      <div className='container h-[35vw]  sm:h-[250px] md:h-[400px] lg:h-[450px]  md:mt-[150px] lg:mt-[-100px] max-w-6xl mx-auto relative '>
        <div className='absolute  sm:left-3'>
          <img
            className='max-w-[40vw] sm:max-w-[280px] md:max-w-sm lg:w-full h-full'
            src={hero1.src}
            alt=''
          />
        </div>
        <div className='absolute left-2/4 translate-y-2/3 -translate-x-2/4'>
          <img
            className='max-w-[40vw] sm:max-w-[280px]  md:max-w-sm lg:w-full h-full'
            src={hero2.src}
            alt=''
          />
        </div>
        <div className='absolute right-3 top-0'>
          <img
            className='max-w-[40vw] sm:max-w-[280px] md:max-w-sm  lg:w-full h-full'
            src={hero3.src}
            alt=''
          />
        </div>
      </div>
      <div className='my-28 lg:my-20 container mx-auto px-4 '>
        <div className='flex flex-col lg:flex-row items-center  lg:space-x-9 h-full'>
          <div className='space-x-5 md:space-x-9 h-full lg:hidden mb-5 md:mb-8 flex'>
            <div className='w-[1.22px] self-center h-[100px] bg-black '></div>
            <div>
              <h1 className='text-[56px] md:text-6xl lg:text-7xl xl:text-[92px]'>
                165
              </h1>
              <h3 className='text-sm md:text-lg lg:text-xl xl:text-2xl '>
                LATEST &<br /> MODERN <br /> FREEBIES
              </h3>
            </div>
            <div className='w-[1.22px] self-center h-[100px] bg-black '></div>
            <div>
              <h1 className='text-[56px] md:text-6xl lg:text-7xl xl:text-[92px]'>
                25
              </h1>
              <h3 className='text-sm md:text-lg lg:text-xl xl:text-2xl '>
                LATEST <br /> CATEGORIES
              </h3>
            </div>
          </div>
          <div className='lg:max-w-[900px] lg:self-center'>
            <h2 className='sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-black text-opacity-80'>
              Download 180+ freebie resources for Figma and Adobe XD. Free figma
              and Adobe XD resources inlcude SaaS landing pages, Fintech landing
              pages, Dashboards and many other landing pages.
            </h2>
          </div>
          <div className='  space-x-9 h-full hidden lg:flex'>
            <div className='w-[1px] self-center h-[100px] bg-black '></div>
            <div>
              <h1 className='text-[92px]'>165</h1>
              <h3 className='lg:text-xl xl:text-2xl '>
                LATEST &<br /> MODERN <br /> FREEBIES
              </h3>
            </div>
            <div className='w-[1px] self-center h-[100px] bg-black '></div>
            <div>
              <h1 className='text-[92px]'>25</h1>
              <h3 className='lg:text-xl xl:text-2xl '>
                LATEST <br /> CATEGORIES
              </h3>
            </div>
          </div>
        </div>
      </div>
      <TabSwiper items={tabs} active={activeTab} setActive={setActiveTab} />
      <section className='container mx-auto my-20 px-4 '>
        <div className='grid gap-8 justify-center md:grid-cols-2 gap-y-10 lg:grid-cols-3 md:justify-between'>
          {freebieItems.map(item => {
            return (
              <FreebieItem
                key={item.id}
                item={item}
                toggleModal={toggleModal}
                setCurrentItem={setCurrentItem}
              />
            );
          })}
          {freebieItems.map(item => {
            return (
              <FreebieItem
                key={item.id}
                item={item}
                toggleModal={toggleModal}
                setCurrentItem={setCurrentItem}
              />
            );
          })}
          {freebieItems.map(item => {
            return (
              <FreebieItem
                key={item.id}
                item={item}
                toggleModal={toggleModal}
                setCurrentItem={setCurrentItem}
              />
            );
          })}
        </div>
      </section>
      <Testimonial />
      <FAQs />
    </Layout>
  );
};

export default Freebie;
