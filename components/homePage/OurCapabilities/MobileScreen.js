import Link from 'next/link';
import Item from './Item';

const subDesign = [
  {
    id: 1,
    title: 'UX Design',
    description: `At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? Or perhaps your goal is simply to generate more leads for your products and services? Whatever actions you're targeting, Third Eye can help.`,
    to: '/design/ux-design',
  },
  {
    id: 2,
    title: 'UI Design',
    description: `At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? Or perhaps your goal is simply to generate more leads for your products and services? Whatever actions you're targeting, Third Eye can help.`,
    to: '/design/ui-design',
  },
  {
    id: 3,
    title: 'Illustrations',
    description: `At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? Or perhaps your goal is simply to generate more leads for your products and services? Whatever actions you're targeting, Third Eye can help.`,
    to: '/design/illustrations',
  },
  {
    id: 4,
    title: 'Marketing',
    description: `At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? Or perhaps your goal is simply to generate more leads for your products and services? Whatever actions you're targeting, Third Eye can help.`,
    to: '/design/marketing',
  },
];
const subDevelopment = [
  {
    id: 1,
    title: 'Frontend Dev',
    description: `At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? Or perhaps your goal is simply to generate more leads for your products and services? Whatever actions you're targeting, Third Eye can help.`,
    to: '/development/front-end',
  },
  {
    id: 2,
    title: 'Backend Dev ',
    description: `At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? Or perhaps your goal is simply to generate more leads for your products and services? Whatever actions you're targeting, Third Eye can help.`,
    to: '/development/back-end',
  },
  {
    id: 3,
    title: 'Mobile Apps',
    description: `At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? Or perhaps your goal is simply to generate more leads for your products and services? Whatever actions you're targeting, Third Eye can help.`,
    to: '/development/mobile-apps',
  },
  {
    id: 4,
    title: 'Websites',
    description: `At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? Or perhaps your goal is simply to generate more leads for your products and services? Whatever actions you're targeting, Third Eye can help.`,
    to: '/development/websites',
  },
];
const subMarketing = [
  {
    id: 1,
    title: 'Social Media',
    description: `At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? Or perhaps your goal is simply to generate more leads for your products and services? Whatever actions you're targeting, Third Eye can help.`,
    to: '/marketing/social-media',
  },
  {
    id: 2,
    title: 'Strategy',
    description: `At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? Or perhaps your goal is simply to generate more leads for your products and services? Whatever actions you're targeting, Third Eye can help.`,
    to: '/marketing/strategy',
  },
  {
    id: 3,
    title: 'Copywirting',
    description: `At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? Or perhaps your goal is simply to generate more leads for your products and services? Whatever actions you're targeting, Third Eye can help.`,
    to: '/marketing/copywirting',
  },
  {
    id: 4,
    title: 'Marketing',
    description: `At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? Or perhaps your goal is simply to generate more leads for your products and services? Whatever actions you're targeting, Third Eye can help.`,
    to: '/marketing/marketing',
  },
];

const MobileScreen = () => {
  return (
    <div className='text-white'>
      <div
        style={{
          background: `linear-gradient(42.36deg, #7CE7FF 1.63%, #3E4FA8 100%), #FFFFFF`,
        }}
        className='px-4 py-20'
      >
        <h1 className='text-xl md:text-3xl'>Our Capabilities</h1>
        <div className='my-5'>
          <h2 className='text-3xl'>Design</h2>
          <Link href='/design'>
            <a className='text-left py-2 block '>
              <span className=' relative'>
                Learn more{' '}
                <div className='w-full absolute bottom-[-1px]  bg-white  h-[1px] left-0'></div>{' '}
              </span>{' '}
              {'->'}{' '}
            </a>
          </Link>
          <div className='flex justify-center flex-col items-center my-8'>
            {subDesign.map(item => {
              return <Item key={item.id} item={item} />;
            })}
          </div>
        </div>
      </div>
      <div
        style={{
          background: `linear-gradient(42.36deg, #C57CFF 1.63%, #621E82 100%), #FFFFFF`,
        }}
        className='px-4 py-10'
      >
        <div className='my-5'>
          <h2 className='text-3xl'>Development</h2>
          <Link href='/development'>
            <a className='text-left py-2 block '>
              <span className=' relative'>
                Learn more{' '}
                <div className='w-full absolute bottom-[-1px]  bg-white  h-[1px] left-0'></div>{' '}
              </span>{' '}
              {'->'}{' '}
            </a>
          </Link>
          <div className='flex justify-center flex-col items-center my-8'>
            {subDevelopment.map(item => {
              return <Item key={item.id} item={item} />;
            })}
          </div>
        </div>
      </div>
      <div
        style={{
          background: ` linear-gradient(223.64deg, #137266 21.73%, #BCFFF3 109.36%)`,
        }}
        className='px-4 py-10'
      >
        <div className='my-5'>
          <h2 className='text-3xl'>Marketing</h2>
          <Link href='/marketing'>
            <a className='text-left py-2 block '>
              <span className=' relative'>
                Learn more{' '}
                <div className='w-full absolute bottom-[-1px]  bg-white  h-[1px] left-0'></div>{' '}
              </span>{' '}
              {'->'}{' '}
            </a>
          </Link>
          <div className='flex justify-center flex-col items-center my-8'>
            {subMarketing.map(item => {
              return <Item key={item.id} item={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileScreen;
