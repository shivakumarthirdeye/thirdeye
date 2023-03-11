import Link from 'next/link';

const megaMenuItems = [
  // {
  //   id: 1,
  //   title: 'Marketing',
  //   subItem: [
  //     {
  //       id: 1,
  //       name: 'Social media management',
  //     },
  //     {
  //       id: 2,
  //       name: 'SEO',
  //     },
  //     {
  //       id: 3,
  //       name: 'PPC',
  //     },
  //     {
  //       id: 4,
  //       name: 'Email Marketing',
  //     },
  //     {
  //       id: 5,
  //       name: 'Performance Marketing',
  //     },
  //     {
  //       id: 6,
  //       name: 'Brand Marketing',
  //     },
  //     {
  //       id: 7,
  //       name: 'Content Writing',
  //     },
  //   ],
  // },
  {
    id: 2,
    title: 'Design',
    subItem: [
      {
        id: 1,
        name: 'UI-Design',
      },
      {
        id: 2,
        name: 'UX-Design',
      },
      {
        id: 3,
        name: 'Graphic Design',
      },
      {
        id: 4,
        name: 'Interaction',
      },
    ],
  },
  {
    id: 3,
    title: 'Development',
    subItem: [
      {
        id: 1,
        name: 'Web Application',
      },
      {
        id: 3,
        name: 'Mobile Apps',
      },
      {
        id: 4,
        name: 'Website',
      },
      // {
      //   id: 5,
      //   name: 'MVP',
      // },
    ],
  },
];

const subItem = [
  {
    id: 1,
    name: 'Blog',
  },
  {
    id: 2,
    name: 'Help Center',
  },
  {
    id: 3,
    name: 'FAQ',
  },
];

const MegaMenu = ({ showHeaderBtn }) => {
  return (
    <div
      className={`${
        showHeaderBtn
          ? 'right-[-125%] md:right-[-50%]'
          : 'right-[-25%] md:right-[-50%]'
      } scale-0 z-50 min-w-[300px]  rounded-lg bg-white p-8 absolute w-[55vw] max-w-[419px] lg:w-[35vw]   top-10 resourse-items`}
      style={{
        boxShadow: `0px 4px 11px rgba(0, 0, 0, 0.13)`,
      }}
    >
      <div className='md:flex md:space-x-8'>
        {megaMenuItems.map(menu => {
          const { id, subItem, title } = menu;

          return (
            <div key={id} className='my-3 md:my-0'>
              <h3 className='font-semibold mb-2 text-lg'>
                <Link href={`/${title.toLowerCase()}`}>{title}</Link>
              </h3>
              <ul>
                {subItem.map(item => {
                  return (
                    <li
                      className='my-1 cursor-pointer text-black text-opacity-80 '
                      key={item.id}
                    >
                      <Link
                        href={`/${title.toLowerCase()}/${item.name
                          .toLowerCase()
                          .split(' ')
                          .join('-')}`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MegaMenu;
