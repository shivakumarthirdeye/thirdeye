import { GreenRight } from './ShadeSVGs';

const impacts = [
  { id: 1, amount: 10, description: 'Years of experience' },
  { id: 2, amount: 200, description: 'Projects completed' },
  { id: 3, amount: 90, description: 'Clients Served' },
  { id: 4, amount: '220m', description: 'Lives Impacted' },
];

const ImpactCreated = () => {
  return (
    <div className='relative '>
      <div className='container max-w-7xl mx-auto px-4 overflow-hidden'>
        <h1 className='heading'>{'Our Works'}</h1>

        <div className='grid grid-cols-4 my-10 lg:my-20'>
          {impacts.map(impact => {
            const { id, amount, description } = impact;

            return (
              <div key={id}>
                <h1 className='text-5xl'>{amount}+</h1>
                <h3 className='text-black text-opacity-80 text-2xl my-2'>
                  {description}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
      <div className='absolute right-0 top-[-250px]'>
        <GreenRight />
      </div>
    </div>
  );
};

export default ImpactCreated;
