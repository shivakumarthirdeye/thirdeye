import Link from 'next/link';
import { useEffect } from 'react';

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  useEffect(() => {
    if (showSidebar) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showSidebar]);

  const sidebarItems = [
    {
      id: 1,
      title: 'Projects',
      to: '/projects',
    },
    {
      id: 2,
      title: 'Services',
      to: '/#services',
    },
    {
      id: 3,
      title: 'Process',
      to: '/process',
    },
    {
      id: 5,
      title: 'About',
      to: '/about-us',
    },
    {
      id: 6,
      title: 'Contact',
      to: '/contact',
    },
  ];
  return (
    <aside
      className={`${
        showSidebar
          ? 'translate-x-0 z-50 opacity-100'
          : 'translate-x-full opacity-0'
      } transition-all fixed top-0 left-0 bg-white h-screen w-screen overflow-hidden`}
    >
      <button
        className='absolute top-10 left-10 '
        onClick={() => {
          setShowSidebar(false);
        }}
      >
        <svg
          width='30'
          height='29'
          viewBox='0 0 30 29'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect
            y='26.8745'
            width='38'
            height='3'
            rx='1.5'
            transform='rotate(-45 0 26.8745)'
            fill='#333333'
          />
          <rect
            x='2.61719'
            width='38'
            height='3'
            rx='1.5'
            transform='rotate(45 2.61719 0)'
            fill='#333333'
          />
        </svg>
      </button>

      <div className='absolute bottom-28 sm:bottom-16 left-10 sm:left-16'>
        {sidebarItems.map(item => {
          const { id, title, to } = item;

          return (
            <Link href={`${to}`} key={id}>
              <a
                onClick={() => {
                  setShowSidebar(false);
                }}
                className='grid grid-cols-[auto_1fr] group items-center gap-10 max-w-[400px]  cursor-pointer my-3'
              >
                <div className='text-black text-opacity-40'>0{id}</div>
                <div className=' flex gap-2 items-center '>
                  <h1 className='group-hover:underline peer text-[50px] md:text-6xl 2xl:text-[64px] leading-[77.45px] py-2 md:py-5'>
                    {title}
                  </h1>
                  <svg
                    className='group-hover:opacity-100 opacity-0 transition-all'
                    width='34'
                    height='34'
                    viewBox='0 0 34 34'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M33.6236 27.9481L28.9951 28.0059L29.109 8.82695L4.12571 33.8103L0.817897 30.5025L25.8012 5.51914L6.65237 5.66314L6.68004 1.00453L33.7846 0.843536L33.6236 27.9481Z'
                      fill='black'
                    />
                  </svg>
                </div>
              </a>
            </Link>
          );
        })}
      </div>

      <div className='absolute top-0 right-0 z-[-10]'>
        <svg
          className='w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[493px] md:h-[471px]'
          viewBox='0 0 493 471'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle
            cx='292.5'
            cy='178.5'
            r='290.5'
            stroke='#B1C7FF'
            strokeWidth='4'
          />
        </svg>
      </div>
    </aside>
  );
};

export default Sidebar;
