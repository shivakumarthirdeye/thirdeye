import React from 'react';
import uiWorks from '@/utils/ui-works.json';
import Card from '../Card';

const UiWorks = () => {
  const { uiworks } = uiWorks;
  return (
    <section>
      <div className='container  mb-20 overflow-hidden'>
        <h1 className='heading'>{'UI Design Works'}</h1>
      </div>
      <div className='container mx-auto gap-y-5 md:gap-y-0 grid gap-x-20  justify-center md:grid-cols-2 max-w-7xl'>
        {uiworks.map(item => {
          const { id, name, slug, description, thumbnail } = item;
          return <Card key={id} {...item} image={thumbnail} />;
        })}
      </div>
    </section>
  );
};

export default UiWorks;
