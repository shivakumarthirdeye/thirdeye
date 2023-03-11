import { GreenRight, VioletLeft } from '@/components/common/ShadeSVGs';
import Card from './Card';
import card1 from '/public/assets/images/subServices/graphic-works/works/visiting-card/1.png';
import card2 from '/public/assets/images/subServices/graphic-works/works/visiting-card/2.png';
import card3 from '/public/assets/images/subServices/graphic-works/works/visiting-card/3.png';
import card4 from '/public/assets/images/subServices/graphic-works/works/visiting-card/4.png';

const cardsInfo = [
  {
    id: 1,
    img: card1,
    bg: '#BFD8AF',
    name: 'Jr Groups',
    description: `At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? Or perhaps your goal is simply to generate more leads for your products and services? Whatever actions you're targeting, Third Eye can help.`,
  },
  {
    id: 2,
    img: card2,
    bg: '#DECAA6',
    name: 'Bharat interiors',
    description: `At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? Or perhaps your goal is simply to generate more leads for your products and services? Whatever actions you're targeting, Third Eye can help.`,
  },
  {
    id: 3,
    img: card3,
    bg: '#D1D1D0',
    name: 'Unique & universal',
    description: `At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? Or perhaps your goal is simply to generate more leads for your products and services? Whatever actions you're targeting, Third Eye can help.`,
  },
  {
    id: 4,
    img: card4,
    bg: '#9BBCC3',
    name: 'Bharat interiors',
    description: `At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? Or perhaps your goal is simply to generate more leads for your products and services? Whatever actions you're targeting, Third Eye can help.`,
  },
];

const VisitingCard = () => {
  return (
    <section className='relative px-4'>
      <div className='absolute right-0 top-[100px] z-[-10] '>
        <GreenRight />
      </div>
      <div className='absolute right-0 top-[1800px] z-[-10] '>
        <GreenRight />
      </div>
      <div className='absolute bottom-[500px] left-0 z-[-10]'>
        <VioletLeft />
      </div>
      <div className='container'>
        {cardsInfo.map((card, index) => (
          <Card key={card.id} item={card} />
        ))}
      </div>
    </section>
  );
};

export default VisitingCard;
