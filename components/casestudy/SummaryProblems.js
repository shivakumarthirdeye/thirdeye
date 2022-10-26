const SummaryProblems = ({
  summaryHeading,
  summaryPoints,
  problemHeading,
  problemPoints,
  summaryImg,
  problemImg,
}) => {
  return (
    <section className='container mx-auto px-4'>
      <div>
        <h2>Summary</h2>
        <h1 className=' mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>
          {summaryHeading}
        </h1>
        <div className='md:flex max-w-7xl md:space-x-10 my-10'>
          {summaryPoints.map(item => {
            const { id, point } = item;

            return (
              <div className='my-8 md:my-0' key={id}>
                <h3 className=' sm:text-xl lg:text-2xl'>{point}</h3>
              </div>
            );
          })}
        </div>
        <div className='max-w-6xl mx-auto my-3 md:my-5'>
          <img src={summaryImg.src} className='w-full' alt='' />
        </div>
      </div>
      <div className='mt-10 md:mt-20 lg:mt-28'>
        <h2>Problem</h2>
        <h1 className=' mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>
          {problemHeading}
        </h1>
      </div>
      <div className='lg:flex my-5 justify-between ml-10'>
        <ul className='lg:my-10 list-disc flex-1'>
          {problemPoints.slice(0, problemPoints.length / 2 + 1).map(item => {
            const { id, point } = item;

            return (
              <li className='my-1.5 text-lg md:text-xl lg:text-2xl' key={id}>
                {point}
              </li>
            );
          })}
        </ul>
        <ul className='lg:my-10 list-disc flex-1'>
          {problemPoints
            .slice(problemPoints.length / 2 + 1, problemPoints.length)
            .map(item => {
              const { id, point } = item;

              return (
                <li className='my-1.5 text-lg md:text-xl lg:text-2xl' key={id}>
                  {point}
                </li>
              );
            })}
        </ul>
      </div>
      <div className='max-w-6xl mx-auto my-3 md:my-5'>
        <img src={problemImg.src} className='w-full' alt='' />
      </div>
    </section>
  );
};

export default SummaryProblems;
