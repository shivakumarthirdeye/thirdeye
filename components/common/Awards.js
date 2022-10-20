import Award1 from '/public/assets/images/award/award1.png';
import Award2 from '/public/assets/images/award/award2.png';
import Award3 from '/public/assets/images/award/award3.png';
import Award4 from '/public/assets/images/award/award4.png';
import Award5 from '/public/assets/images/award/award5.png';
import Award6 from '/public/assets/images/award/award6.png';

const allAwards = [
  { id: 1, img: Award1.src, name: 'Top rated ecommerce SEO agency' },
  { id: 2, img: Award2.src, name: 'Forbes agency council official member' },
  { id: 3, img: Award3.src, name: 'Top digital marketing company' },
  { id: 4, img: Award4.src, name: 'National excellence winner 2021' },
  { id: 5, img: Award5.src, name: 'Top digital agency 2021' },
  { id: 6, img: Award6.src, name: 'Best SEO company' },
];

const Awards = () => {
  return (
    <div>
      <div className='container mx-auto pb-10  px-4'>
        <h1 className='heading '>Selected Clients</h1>
        <div className='grid grid-cols-3 gap-5 gap-y-8 lg:grid-cols-6 my-16'>
          {allAwards.map(award => {
            const { id, name, img } = award;

            return (
              <div
                key={id}
                className='flex justify-center  flex-col items-center'
              >
                <img
                  src={img}
                  alt=''
                  className='
                  min-w-[60px] min-h-[60px] max-h-[60px] max-w-[60px]
                   sm:min-w-[110.19px] sm:min-h-[110.19px] sm:max-h-[110.19px] sm:max-w-[110.19px]  object-cover'
                />
                <h1 className='text-[10px] sm:text-base max-w-[200.94px] my-4 text-center'>
                  {name}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Awards;
