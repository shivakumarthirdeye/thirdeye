const ourProcess = [
  {
    id: 4,
    icon: (
      <>
        <svg
          className='w-[48px] h-[48px] sm:w-[54px] sm:h-[54px]  lg:w-[64px] lg:h-[64px]'
          viewBox='0 0 64 64'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M53.3332 8H10.6666C7.72107 8 5.33325 10.3878 5.33325 13.3333V40C5.33325 42.9455 7.72107 45.3333 10.6666 45.3333H53.3332C56.2788 45.3333 58.6666 42.9455 58.6666 40V13.3333C58.6666 10.3878 56.2788 8 53.3332 8Z'
            stroke='#20C0CA'
            strokeWidth='5.33333'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M21.3333 56H42.6666'
            stroke='#20C0CA'
            strokeWidth='5.33333'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M32 45.332V55.9987'
            stroke='#20C0CA'
            strokeWidth='5.33333'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </>
    ),
    title: 'Websites',
    description: `
      At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth
    `,
  },
  {
    id: 2,
    icon: (
      <>
        <svg
          className='w-[48px] h-[48px] sm:w-[54px] sm:h-[54px]  lg:w-[64px] lg:h-[64px]'
          viewBox='0 0 64 64'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M42.6667 48L58.6667 32L42.6667 16'
            stroke='#2FBF8B'
            strokeWidth='5.33333'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M21.3333 16L5.33325 32L21.3333 48'
            stroke='#2FBF8B'
            strokeWidth='5.33333'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </>
    ),
    title: 'Backend Dev',
    description: `
      At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth`,
  },

  {
    id: 3,
    icon: (
      <>
        <svg
          className='w-[48px] h-[48px] sm:w-[54px] sm:h-[54px]  lg:w-[64px] lg:h-[64px]'
          viewBox='0 0 64 64'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M45.3333 5.33203H18.6666C15.7211 5.33203 13.3333 7.71985 13.3333 10.6654V53.332C13.3333 56.2775 15.7211 58.6654 18.6666 58.6654H45.3333C48.2788 58.6654 50.6666 56.2775 50.6666 53.332V10.6654C50.6666 7.71985 48.2788 5.33203 45.3333 5.33203Z'
            stroke='#DF6824'
            strokeWidth='5.33333'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M32 48H32.0271'
            stroke='#DF6824'
            strokeWidth='5.33333'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </>
    ),
    title: 'Mobile Apps',
    description: `
      At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth
    `,
  },
  {
    id: 1,
    icon: (
      <>
        <svg
          className='w-[48px] h-[48px] sm:w-[54px] sm:h-[54px]  lg:w-[64px] lg:h-[64px]'
          viewBox='0 0 64 64'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M31.9999 5.33203L58.6666 22.6654V41.332L31.9999 58.6654L5.33325 41.332V22.6654L31.9999 5.33203Z'
            stroke='#7A59FF'
            strokeWidth='5.33333'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M32 58.6654V41.332'
            stroke='#7A59FF'
            strokeWidth='5.33333'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M58.6666 22.668L31.9999 41.3346L5.33325 22.668'
            stroke='#7A59FF'
            strokeWidth='5.33333'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M5.33325 41.3346L31.9999 22.668L58.6666 41.3346'
            stroke='#7A59FF'
            strokeWidth='5.33333'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M32 5.33203V22.6654'
            stroke='#7A59FF'
            strokeWidth='5.33333'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </>
    ),
    title: 'Frontend Dev',
    description: `
      At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth
    `,
  },
];

const ServicesProcess = ({ works = ourProcess }) => {
  return (
    <section className='container gap-5 grid  sm:grid-cols-2 lg:grid-cols-4 mx-auto  px-4'>
      {works.map(item => {
        const { id, icon, title, description } = item;

        return (
          <div key={id} className='grid gap-3 md:gap-5 md:my-10 lg:my-20'>
            {icon}
            <h1 className=' text-2xl lg:text-3xl   font-medium'>{title}</h1>
            <p className='text-sm sm:text-base md:text-lg lg:text-xl text-black text-opacity-60'>
              {description}
            </p>
          </div>
        );
      })}
    </section>
  );
};

export default ServicesProcess;
