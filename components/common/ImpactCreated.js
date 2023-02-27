import { GreenRight } from './ShadeSVGs';
import CountUp, { useCountUp } from 'react-countup';
import { useEffect } from 'react';

const impacts = [
  { id: 1, ending: '+', amount: 10, description: 'Years of experience' },
  { id: 2, ending: '+', amount: 200, description: 'Projects completed' },
  { id: 3, ending: '+', amount: 90, description: 'Clients Served' },
  { id: 4, ending: 'M+', amount: 220, description: 'Lives Impacted' },
];

const ImpactCreated = () => {
  useCountUp({
    ref: 'counter',
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });

  return (
    <div id='counter' className='relative '>
      <div className='container  overflow-hidden'>
        <h1 className='heading'>Impact Created</h1>

        <div className='grid grid-cols-2 gap-y-5 lg:grid-cols-4 my-10 lg:my-20'>
          {impacts.map(impact => {
            const { id, amount, ending, description } = impact;

            return (
              <div key={id}>
                <h1 className='text-3xl md:text-4xl lg:text-5xl'>
                  <CountUp
                    id='counter'
                    end={amount}
                    start={0}
                    enableScrollSpy
                  />
                  {ending}
                  {/* {amount}+ */}
                </h1>
                <h3 className='text-black text-opacity-80  text-sm sm:text-base md:text-xl lg:text-2xl my-2'>
                  {description}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
      <div className='absolute right-0 top-[-250px] z-[-10]'>
        <GreenRight />
      </div>
    </div>
  );
};

export default ImpactCreated;
