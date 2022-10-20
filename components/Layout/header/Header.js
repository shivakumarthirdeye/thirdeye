import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import Sidebar from './Sidebar';
import { FiChevronDown } from 'react-icons/fi';
import gsap from 'gsap';
import MegaMenu from './MegaMenu';
import { ref } from 'yup';

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
          transformOrigin: 'top right',
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
      console.log(
        '🚀 ~ file: Header.js ~ line 58 ~ useEffect ~ e',
        e.target.classList
      );

      if (!e.target.classList.contains('resources')) {
        menuAni.current.timeScale(2).reverse();
      }
    });
    btnRef.current.addEventListener('mouseenter', e => {
      menuAni.current.timeScale(1).play();
    });
    btnRef.current.addEventListener('mouseleave', e => {
      menuAni.current.timeScale(2).reverse();
    });
  }, []);

  return (
    <>
      <header className='container mx-auto flex justify-between h-[100px] items-center px-4'>
        <div>
          <button
            onClick={() => {
              setShowSidebar(true);
            }}
          >
            <svg
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

        <div className='flex space-x-5 sm:space-x-10 lg:space-x-20  items-center'>
          <div className='relative resources' ref={btnRef}>
            <button
              className='text-2xl flex items-center resources'
              // onClick={() => {
              //   menuAni.current.reversed()
              //     ? menuAni.current.timeScale(1).play()
              //     : menuAni.current.timeScale(2).reverse();
              // }}
            >
              Services
              <FiChevronDown className='ml-1' />
            </button>
            <MegaMenu />
          </div>

          {showHeaderBtn && (
            <Link href='/contact'>
              <a>
                <button className='bg-black text-white  text-xl px-7 py-3 rounded'>
                  Let’s talk
                </button>
              </a>
            </Link>
          )}
        </div>
      </header>
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
    </>
  );
};

export default Header;
