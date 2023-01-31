import logo1 from '/public/assets/images/subServices/graphic-works/works/logo-design/1.png';
import logo2 from '/public/assets/images/subServices/graphic-works/works/logo-design/2.png';
import logo3 from '/public/assets/images/subServices/graphic-works/works/logo-design/3.png';
import logo4 from '/public/assets/images/subServices/graphic-works/works/logo-design/4.png';
import logo5 from '/public/assets/images/subServices/graphic-works/works/logo-design/5.png';
import logo6 from '/public/assets/images/subServices/graphic-works/works/logo-design/6.png';
import logo7 from '/public/assets/images/subServices/graphic-works/works/logo-design/7.png';
import logo8 from '/public/assets/images/subServices/graphic-works/works/logo-design/8.png';
import logo9 from '/public/assets/images/subServices/graphic-works/works/logo-design/9.png';
import logo10 from '/public/assets/images/subServices/graphic-works/works/logo-design/10.png';
import logo11 from '/public/assets/images/subServices/graphic-works/works/logo-design/11.png';
import Card from './Card';

const logosInfo = [
  {
    id: 1,
    img: logo1,
    bg: '#C0DBFF',
    name: 'SJ Technologies',
    description: `At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? Or perhaps your goal is simply to generate more leads for your products and services? Whatever actions you're targeting, Third Eye can help.`,
  },
  {
    id: 2,
    img: logo2,
    bg: '#f5d8c5',
    name: 'Catch wheels',
    description: `At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? Or perhaps your goal is simply to generate more leads for your products and services? Whatever actions you're targeting, Third Eye can help.`,
  },
  {
    id: 3,
    img: logo3,
    bg: '#A6E7EF',
    name: 'Confer k tech',
    description: `At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? Or perhaps your goal is simply to generate more leads for your products and services? Whatever actions you're targeting, Third Eye can help.`,
  },
  {
    id: 4,
    img: logo4,
    bg: '#B9E79C',
    name: 'Jr groups',
    description: `At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? Or perhaps your goal is simply to generate more leads for your products and services? Whatever actions you're targeting, Third Eye can help.`,
  },
  {
    id: 5,
    img: logo5,
    bg: '#787CAD',
    name: 'Poornathva',
    description: `At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? Or perhaps your goal is simply to generate more leads for your products and services? Whatever actions you're targeting, Third Eye can help.`,
  },
  {
    id: 6,
    img: logo6,
    bg: '#B9E79C',
    name: 'Swaramahayaga',
    description: `At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? Or perhaps your goal is simply to generate more leads for your products and services? Whatever actions you're targeting, Third Eye can help.`,
  },
  {
    id: 7,
    img: logo7,
    bg: '#A2ACC2',
    name: 'Tulsi Engineering Works',
    description: `At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? Or perhaps your goal is simply to generate more leads for your products and services? Whatever actions you're targeting, Third Eye can help.`,
  },
  {
    id: 8,
    img: logo8,
    bg: '#88BA9A',
    name: 'Rabi 2 Kharif',
    description: `At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? Or perhaps your goal is simply to generate more leads for your products and services? Whatever actions you're targeting, Third Eye can help.`,
  },
  {
    id: 9,
    img: logo9,
    bg: '#A2ACC2',
    name: 'Cossta',
    description: `At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? Or perhaps your goal is simply to generate more leads for your products and services? Whatever actions you're targeting, Third Eye can help.`,
  },
  {
    id: 10,
    img: logo10,
    bg: '#B9E79C',
    name: 'Isometric',
    description: `At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? Or perhaps your goal is simply to generate more leads for your products and services? Whatever actions you're targeting, Third Eye can help.`,
  },
  {
    id: 11,
    img: logo11,
    bg: '#A2ACC2',
    name: 'The Engineers Kitchen',
    description: `At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? Or perhaps your goal is simply to generate more leads for your products and services? Whatever actions you're targeting, Third Eye can help.`,
  },
];

const LogoDesign = () => {
  return (
    <section className='container px-4'>
      {logosInfo.map((logo, index) => (
        <Card key={logo.id} item={logo} />
      ))}
    </section>
  );
};

export default LogoDesign;
