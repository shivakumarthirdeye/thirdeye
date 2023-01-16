import Link from 'next/link';

const megaMenuItems = [
  {
    id: 1,
    title: 'Marketing',
    subItem: [
      {
        id: 1,
        name: 'Social media management',
      },
      {
        id: 2,
        name: 'SEO',
      },
      {
        id: 3,
        name: 'Graphic Design',
      },
      {
        id: 4,
        name: 'Email Marketing',
      },
      {
        id: 5,
        name: 'Marketing Automation',
      },
    ],
  },
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
        name: 'Email Marketing',
      },
      {
        id: 5,
        name: 'Marketing Automation',
      },
    ],
  },
  {
    id: 3,
    title: 'Development',
    subItem: [
      {
        id: 1,
        name: 'Front-End',
      },
      {
        id: 2,
        name: 'Back-End',
      },
      {
        id: 3,
        name: 'Mobile Apps',
      },
      {
        id: 4,
        name: 'Websites',
      },
      {
        id: 5,
        name: 'Marketing Automation',
      },
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
      } scale-0 z-50 min-w-[300px]  rounded-lg bg-white p-8 absolute w-[55vw] max-w-[719px] lg:w-[45vw]  md:min-w-[580px] top-10 resourse-items`}
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
      {/* {subItem && (
        <div
          class={`
           
              absolute resourse-items top-10 left-5 w-[203px] opacity-0  py-3 px-2 z-20 rounded-xl`}
          style={{
            boxShadow: `0px 4px 20px rgba(0, 0, 0, 0.1)`,
          }}
        >
          {subItem &&
            subItem.map(item => (
              <li class='p-3 flex justify-between items-center rounded-lg hover:bg-[#F7F7F7] '>
                {item.name}{' '}
                <svg
                  width='15'
                  height='15'
                  viewBox='0 0 15 15'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M11.625 8.08333V12.3333C11.625 12.7091 11.4757 13.0694 11.2101 13.3351C10.9444 13.6007 10.5841 13.75 10.2083 13.75H2.41667C2.04094 13.75 1.68061 13.6007 1.41493 13.3351C1.14926 13.0694 1 12.7091 1 12.3333V4.54167C1 4.16594 1.14926 3.80561 1.41493 3.53993C1.68061 3.27426 2.04094 3.125 2.41667 3.125H6.66667'
                    stroke='#868686'
                    strokeWidth='1.5'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M5.95801 8.79167L13.7497 1'
                    stroke='#868686'
                    strokeWidth='1.5'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
              </li>
            ))}
        </div>
      )} */}
    </div>
  );
};

export default MegaMenu;
