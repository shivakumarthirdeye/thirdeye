import Link from 'next/link';
import {
  FaBehance,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaPinterestP,
  FaQuora,
} from 'react-icons/fa';

const footerLinks = [
  { id: 1, title: 'About' },
  { id: 7, title: 'Contact' },
  { id: 6, title: 'Careers' },
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
    icon: <FaBehance className='text-2xl' />,
    to: 'https://www.behance.net/thirdeyeinnovations',
  },
  {
    id: 2,
    name: 'Linkedin',
    icon: <FaLinkedinIn className='text-2xl' />,
    to: 'https://www.linkedin.com/company/third-eye-info/',
  },
  {
    id: 3,
    name: 'Instagram',
    icon: <FaInstagram className='text-2xl' />,
    to: 'https://www.instagram.com/thirdeye_innovations/',
  },
  {
    id: 4,
    name: 'Pinterest',
    icon: <FaPinterestP className='text-2xl' />,
    to: 'https://in.pinterest.com/thirdeyeinnovations/',
  },
  {
    id: 5,
    name: 'Quora',
    icon: <FaQuora className='text-2xl' />,
    to: 'https://www.quora.com/profile/Third-Eye-Innovations',
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
