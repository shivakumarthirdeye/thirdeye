import React from 'react';
import Accordion from './Accordion';

const commonQuestions = [
  {
    id: 1,
    title: 'How do I start Working with Third Eye?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse',
  },
  {
    id: 2,
    title: 'How do I start Working with Third Eye?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse',
  },
  {
    id: 3,
    title: 'How do I start Working with Third Eye?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse',
  },
  {
    id: 4,
    title: 'How do I start Working with Third Eye?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse',
  },
  {
    id: 5,
    title: 'How do I start Working with Third Eye?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse',
  },
];

const FAQs = ({ faqs = commonQuestions }) => {
  return (
    <section className='my-0 px-4 py-28 bg-[#c6fff851]'>
      <div className='container max-w-6xl mx-auto'>
        <h1 className='text-center text-[40px]'>Still have Questions?</h1>
        <div className='my-20'>
          {faqs.map(question => {
            const { id, content, title } = question;

            return <Accordion content={content} title={title} key={id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
