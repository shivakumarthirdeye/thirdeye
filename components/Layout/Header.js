const Header = () => {
  return (
    <header className='container mx-auto flex justify-between h-[100px] items-center'>
      <div>
        <button>
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
      <div>
        <button className='bg-black text-white  text-xl px-7 py-3 rounded'>
          Let’s talk
        </button>
      </div>
    </header>
  );
};

export default Header;
