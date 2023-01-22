import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import Sidebar from './Sidebar';
import { FiChevronDown } from 'react-icons/fi';
import gsap from 'gsap';
import MegaMenu from './MegaMenu';
import logo from '/public/assets/images/logo.png';

const Header = ({ showHeaderBtn = true }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  let menuAni = useRef();
  const btnRef = useRef(null);

  useEffect(() => {
    menuAni.current = gsap
      .timeline({ paused: true, reversed: true })
      .fromTo(
        '.resourse-items',
        {
          transformOrigin: 'top center',
          scale: 0,
          display: 'none',
        },
        {
          scale: 1,
          ease: 'power2.inOut',
          display: 'flex',
        }
      )
      .fromTo(
        '.resourse-items h3',
        {
          opacity: 0,
        },
        {
          opacity: 1,

          duration: 0.1,
        }
      )
      .fromTo(
        '.resourse-items li',
        {
          opacity: 0,
        },
        {
          opacity: 1,

          duration: 0.5,
        }
      );
    document.addEventListener('click', e => {
      if (!e.target.classList.contains('resources')) {
        menuAni.current.timeScale(2).reverse();
      }
    });
    // btnRef.current.addEventListener('mouseenter', e => {
    //   menuAni.current.timeScale(1).play();
    // });
    // btnRef.current.addEventListener('mouseleave', e => {
    //   menuAni.current.timeScale(2).reverse();
    // });
  }, []);

  return (
    <>
      <header className='container mx-auto flex justify-between h-[100px] items-center px-4'>
        <div className='block sm:hidden'>
          <button
            onClick={() => {
              setShowSidebar(true);
            }}
          >
            <svg
              className='w-[24px] h-[16px] sm:w-[44px] sm:h-[25px]'
              width='44'
              height='25'
              viewBox='0 0 44 25'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect
                width='44'
                height='3'
                rx='1.5'
                fill='black'
                fillOpacity='0.8'
              />
              <rect
                x='7'
                y='11'
                width='30'
                height='3'
                rx='1.5'
                fill='black'
                fillOpacity='0.8'
              />
              <rect
                x='3'
                y='22'
                width='38'
                height='3'
                rx='1.5'
                fill='black'
                fillOpacity='0.8'
              />
            </svg>
          </button>
        </div>
        <div className='hidden sm:block'>
          <Link href='/'>
            <a>
              <img
                src={logo.src}
                className='max-w-[131] w-full max-h-[55px]'
                alt='logo'
              />
            </a>
          </Link>
        </div>

        <div className='flex space-x-5 sm:space-x-10 lg:space-x-20  items-center'>
          <div className='relative resources' ref={btnRef}>
            <button
              className='text-sm sm:text-base lg:text-xl flex  items-center resources'
              onClick={() => {
                menuAni.current.reversed()
                  ? menuAni.current.timeScale(1).play()
                  : menuAni.current.timeScale(2).reverse();
              }}
            >
              Services
              <FiChevronDown className='ml-1' />
            </button>
            <MegaMenu showHeaderBtn={showHeaderBtn} />
          </div>

          {showHeaderBtn && (
            <Link href='/contact'>
              <a>
                <button className='bg-black text-white  text-sm sm:text-base lg:text-xl px-4 lg:px-7 py-3 rounded'>
                  Let’s talk
                </button>
              </a>
            </Link>
          )}
          <div className='hidden sm:block'>
            <button
              onClick={() => {
                setShowSidebar(true);
              }}
            >
              <svg
                className='w-[24px] h-[16px] sm:w-[44px] sm:h-[25px]'
                width='44'
                height='25'
                viewBox='0 0 44 25'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect
                  width='44'
                  height='3'
                  rx='1.5'
                  fill='black'
                  fillOpacity='0.8'
                />
                <rect
                  x='7'
                  y='11'
                  width='30'
                  height='3'
                  rx='1.5'
                  fill='black'
                  fillOpacity='0.8'
                />
                <rect
                  x='3'
                  y='22'
                  width='38'
                  height='3'
                  rx='1.5'
                  fill='black'
                  fillOpacity='0.8'
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
    </>
  );
};

export default Header;
