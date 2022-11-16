import Link from 'next/link';

const footerLinks = [
  { id: 1, title: 'About' },
  { id: 7, title: 'Contact' },
  { id: 6, title: 'Careers' },
  { id: 8, title: 'Privacy Policy' },
  { id: 2, title: 'Solution' },
  // { id: 5, title: 'Vision' },
  // { id: 3, title: 'Technology' },
  // { id: 4, title: 'Media' },
];

const socialLinks = [
  {
    id: 1,
    icon: (
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
          stroke='white'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M8.56 2.75C12.93 8.78 14.58 12.17 16.59 20.47M19.13 5.09C15.41 9.44 10.19 10.75 2.25 10.94M21.75 12.84C18.25 11.91 15.12 12.02 12.81 12.84C10.23 13.76 7.8 15.7 5.37 19.16'
          stroke='white'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    ),
    to: 'https://dribbble.com/',
  },
  {
    id: 2,
    icon: (
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z'
          stroke='white'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M6 9H2V21H6V9Z'
          stroke='white'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z'
          stroke='white'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    ),
    to: 'https://www.linkedin.com/',
  },
  {
    id: 3,
    icon: (
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z'
          stroke='white'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    ),
    to: 'https://www.facebook.com/',
  },
  {
    id: 4,
    icon: (
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z'
          stroke='white'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M15.9997 11.3703C16.1231 12.2025 15.981 13.0525 15.5935 13.7993C15.206 14.5461 14.5929 15.1517 13.8413 15.53C13.0898 15.9082 12.2382 16.0399 11.4075 15.9062C10.5768 15.7726 9.80947 15.3804 9.21455 14.7855C8.61962 14.1905 8.22744 13.4232 8.09377 12.5925C7.96011 11.7619 8.09177 10.9102 8.47003 10.1587C8.84829 9.40716 9.45389 8.79404 10.2007 8.40654C10.9475 8.01904 11.7975 7.87689 12.6297 8.0003C13.4786 8.12619 14.2646 8.52176 14.8714 9.12861C15.4782 9.73545 15.8738 10.5214 15.9997 11.3703Z'
          stroke='white'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M17.5 6.5H17.51'
          stroke='white'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    ),
    to: 'https://www.instagram.com/',
  },
];

const Footer = () => {
  return (
    <footer
      style={{
        background: `linear-gradient(74.78deg, #3545D1 0%, #31A4C9 100%)`,
      }}
      className='text-white py-16 md:py-28 lg:py-40 flex flex-col items-center justify-center px-4'
    >
      <div className='container mx-auto flex flex-col md:flex-row justify-between'>
        <div className='flex-1'>
          <h1 className='text-4xl lg:text-5xl leading-[55.8px] lg:leading-[64.8px]'>
            Let’s build something <br /> great together
          </h1>
          <div className='my-10'>
            <Link href='/contact'>
              <a>
                <button className='max-w-[211px] w-full py-4 text-base rounded  bg-white text-[#364BD2]'>
                  Get in touch
                </button>
              </a>
            </Link>
          </div>
        </div>
        <div className='flex-[0.5] text-base md:text-lg my-5 md:my-0'>
          <div className='grid grid-cols-2 gap-5 max-w-sm'>
            {footerLinks.map(item => {
              const { id, title } = item;
              return (
                <Link key={id} href={`/${title.toLowerCase()}`}>
                  {title}
                </Link>
              );
            })}
          </div>
          <div className=' my-8 flex  space-x-5'>
            {socialLinks.map(item => {
              return (
                <div key={item.id}>
                  <a href={item.to} target='_blank' rel='noopener noreferrer'>
                    {item.icon}
                  </a>
                </div>
              );
            })}
          </div>
          <div className=' my-8 flex  space-x-5'>
            <a
              className='font-light'
              href='mailto:hello@squarespentatechnologies.com'
            >
              hello@squarespentatechnologies.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
