import Layout from '@/components/Layout';
import Link from 'next/link';

const siteLinks = [
  {
    id: 1,
    title: 'Home',
    subLinks: [
      {
        id: 1,
        title: 'Menu',
        to: '',
      },
      {
        id: 2,
        title: 'Services',
        to: '/services',
      },
      {
        id: 3,
        title: 'Let’s Talk',
        to: '/services',
      },
      {
        id: 4,
        title: 'Case Studies',
        to: '/services',
      },
      {
        id: 5,
        title: 'Design',
        to: '/design',
      },
      {
        id: 6,
        title: 'Development',
        to: '/development',
      },
      {
        id: 7,
        title: 'Marketing',
        to: '/marketing',
      },
    ],
  },
  {
    id: 2,
    title: 'Services',
    subLinks: [
      {
        id: 5,
        title: 'Design',
        to: '/design',
      },
      {
        id: 6,
        title: 'Development',
        to: '/development',
      },
      {
        id: 7,
        title: 'Marketing',
        to: '/marketing',
      },
    ],
  },
  {
    id: 3,
    title: 'Design',
    subLinks: [
      {
        id: 5,
        title: 'UI Design',
        to: '/design/ui-design',
      },
      {
        id: 6,
        title: 'UX Design',
        to: '/design/ux-design',
      },
      {
        id: 7,
        title: 'Illustration',
        to: '/design/illustration',
      },
      {
        id: 7,
        title: 'Marketing',
        to: '/design/marketing',
      },
    ],
  },
  {
    id: 4,
    title: 'Development',
    subLinks: [
      {
        id: 5,
        title: 'Frontend development',
        to: '/development/front-end',
      },
      {
        id: 6,
        title: 'Backend Development',
        to: '/development/back-end',
      },
      {
        id: 7,
        title: 'Mobile Apps',
        to: '/development/mobile-apps',
      },
      {
        id: 7,
        title: 'Websites',
        to: '/development/websites',
      },
    ],
  },
  {
    id: 4,
    title: 'Marketing',
    subLinks: [
      {
        id: 5,
        title: 'Social Media',
        to: '/marketing/social-media',
      },
      {
        id: 6,
        title: 'Stategy',
        to: '/marketing/stategy',
      },
      {
        id: 7,
        title: 'Copywriting',
        to: '/marketing/copywriting',
      },
      {
        id: 7,
        title: 'Marketing',
        to: '/marketing/marketing',
      },
    ],
  },
  {
    id: 6,
    title: 'Hamburger Menu',
    subLinks: [
      {
        id: 5,
        title: 'Projects',
        to: '/projects',
      },
      {
        id: 6,
        title: 'Services',
        to: '/services',
      },
      {
        id: 7,
        title: 'Process',
        to: '/process',
      },
      {
        id: 8,
        title: 'About',
        to: '/about',
      },
      {
        id: 9,
        title: 'Contact',
        to: '/contact',
      },
    ],
  },
];

const Sitemap = () => {
  return (
    <Layout noFooter>
      <section className='container mx-auto my-10 px-4 '>
        <div>
          <h1 className='text-3xl   md:text-[32px]'>Third Eye Site Map</h1>
          <div className='bg-black w-full h-[1px] bg-opacity-20 my-5'></div>
        </div>
        <div
          className='grid sm:grid-cols-2 lg:grid-cols-4 gap-y-8
         lg:gap-y-12 my-8'
        >
          {siteLinks.map(item => {
            const { id, subLinks, title } = item;
            return (
              <div key={id}>
                <h1 className='text-xl font-medium'>{title}</h1>
                <ul className='ml-8 mt-2 text-lg font-medium sitemap text-[#166BCF] list-disc'>
                  {subLinks.map(item => {
                    const { id, title, to } = item;
                    return (
                      <li key={id}>
                        <Link href={to}>{title}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export default Sitemap;
