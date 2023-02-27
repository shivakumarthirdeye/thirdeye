import Link from 'next/link';
import {
  FaBehance,
  FaDribbble,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaPinterestP,
  FaQuora,
} from 'react-icons/fa';
import { FiFacebook } from 'react-icons/fi';

const footerLinks = [
  { id: 1, title: 'About' },
  { id: 6, title: 'Careers' },
  { id: 7, title: 'Contact' },
  { id: 8, title: 'Privacy Policy' },
  { id: 2, title: 'Client' },
  // { id: 5, title: 'Vision' },
  // { id: 3, title: 'Technology' },
  // { id: 4, title: 'Media' },
];

const socialLinks = [
  {
    id: 1,
    name: 'Behance',
    icon: <FaDribbble className='text-xl md:text-2xl' />,
    to: 'https://dribbble.com/third_eye_innovations',
  },
  {
    id: 2,
    name: 'Linkedin',
    icon: <FaLinkedinIn className='text-xl md:text-2xl' />,
    to: 'https://www.linkedin.com/company/third-eye-info/',
  },
  {
    id: 3,
    name: 'Instagram',
    icon: <FaInstagram className='text-xl md:text-2xl' />,
    to: 'https://www.instagram.com/thirdeye_innovations/',
  },
  {
    id: 4,
    name: 'Instagram',
    icon: <FiFacebook className='text-xl md:text-2xl' />,
    to: 'https://www.facebook.com/thirdeye_innovations/',
  },
  // {
  //   id: 4,
  //   name: 'Pinterest',
  //   icon: <FaPinterestP className='text-xl md:text-2xl' />,
  //   to: 'https://in.pinterest.com/thirdeyeinnovations/',
  // },
  // {
  //   id: 5,
  //   name: 'Quora',
  //   icon: <FaQuora className='text-2xl' />,
  //   to: 'https://www.quora.com/profile/Third-Eye-Innovations',
  // },
];

const Footer = ({ noBg }) => {
  return (
    <footer
      style={{
        background: !noBg
          ? `linear-gradient(74.78deg, #3545D1 0%, #31A4C9 100%)`
          : '',
      }}
      className='text-white py-16  flex flex-col items-center justify-center px-4'
    >
      <div className='container mx-auto lg:flex justify-center  gap-y-6  grid place-items-center lg:justify-between'>
        <div className='flex flex-col sm:flex-row gap-y-2 space-x-3 lg:space-x-4 xl:space-x-6 2xl:space-x-8 text-lg md:text-xl items-center'>
          {footerLinks.map(item => {
            const { id, title } = item;
            return (
              <Link key={id} href={`/${title.toLowerCase()}`}>
                {title}
              </Link>
            );
          })}
        </div>
        <div className='flex space-x-3 lg:space-x-4 xl:space-x-6 2xl:space-x-8 items-center'>
          {' '}
          {socialLinks.map(item => {
            return (
              <div key={item.id} title={item.name}>
                <a href={item.to} target='_blank' rel='noopener noreferrer'>
                  {item.icon}
                </a>
              </div>
            );
          })}
        </div>
        <div className=' flex  space-x-5'>
          <a
            className='font-light text-lg md:text-xl'
            href='mailto:contact@thirdeyeinfo.com '
          >
            contact@thirdeyeinfo.com
          </a>
        </div>
        {/* <div className='flex-1'>
          <h1 className='text-2xl   md:text-3xl lg:text-4xl xl:text-5xl leading-[55.8px] lg:leading-[64.8px]'>
            Let’s build something <br /> great together
          </h1>
          <div className='my-10'>
            <Link href='/contact'>
              <a>
                <button className='max-w-[150px] md:max-w-[211px] w-full py-3 md:py-4 text-base rounded  bg-white text-[#364BD2]'>
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
                <div key={item.id} title={item.name}>
                  <a href={item.to} target='_blank' rel='noopener noreferrer'>
                    {item.icon}
                  </a>
                </div>
              );
            })}
          </div>
          <div className=' my-8 flex  space-x-5'>
            <a className='font-light' href='mailto:contact@thirdeyeinfo.com '>
              contact@thirdeyeinfo.com
            </a>
          </div>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
