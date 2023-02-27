import { useState } from 'react';
import CalendlyModal from '../CalendlyModal';
import meetingImg from '/public/assets/meeting.png';

const BookMeet = () => {
  const [book, setBook] = useState(false);

  return (
    <div>
      <CalendlyModal open={book} toggleModal={() => setBook(prev => !prev)} />
      <div className='flex items-center space-x-1 md:space-x-2 my-8'>
        <div className='bg-black h-[0.5px] md:h-[1px] flex-1'></div>
        <p className='text-xs md:text-lg'>or</p>
        <div className='bg-black h-[0.5px] md:h-[1px] flex-1'></div>
      </div>
      <div className='flex justify-between items-center'>
        <div className='flex space-x-5 items-center'>
          <img
            loading='lazy'
            src={meetingImg.src}
            alt=''
            className='w-12 h-12 md:w-auto md:h-auto rounded-md  md:rounded-3xl'
          />
          <div>
            <p className='text-xs sm:text-sm md:text-base font-medium'>
              Arrange a chat with marin,
              <br /> our head of marketing
            </p>
          </div>
        </div>
        <div>
          <button
            onClick={() => {
              setBook(prev => !prev);
            }}
            className='p-2 md:py-4 md:px-7 border text-xs sm:text-sm md:text-base border-blue text-blue rounded'
          >
            Book a time
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookMeet;
