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
        to: '/process',
      },
      {
        id: 3,
        title: 'Let’s Talk',
        to: '/contact',
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
        title: 'Graphic Design',
        to: '/design/graphic-design',
      },
      {
        id: 8,
        title: 'Interaction',
        to: '/design/interaction',
      },
    ],
  },
  {
    id: 4,
    title: 'Development',
    subLinks: [
      {
        id: 6,
        title: 'Web Applications',
        to: '/development/web-application',
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
      {
        id: 7,
        title: 'MVP',
        to: '/development/mvp',
      },
    ],
  },
  {
    id: 4,
    title: 'Marketing',
    subLinks: [
      {
        id: 1,
        title: 'Social media management',
        to: '/marketing/social-media-management',
      },
      {
        id: 2,
        title: 'SEO',
        to: '/marketing/seo',
      },
      {
        id: 3,
        title: 'PCC',
        to: '/marketing/pcc',
      },
      {
        id: 4,
        title: 'Email Marketing',
        to: '/marketing/email-marketing',
      },
      {
        id: 5,
        title: 'Performance Marketing',
        to: '/marketing/performance-marketing',
      },
      {
        id: 6,
        title: 'Brand Marketing',
        to: '/marketing/brand-marketing',
      },
      {
        id: 7,
        title: 'Content Writing',
        to: '/marketing/content-writing',
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
