import { useEffect, useLayoutEffect, useState } from 'react';
import MobileScreen from './MobileScreen';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';
import Item from './Item';
import { BoxSVG, Circle1, Circle2, Circle3, PenSVG, TvSVG } from './SVGs';

gsap.registerPlugin(ScrollTrigger);

const subDesign = [
  {
    id: 1,
    title: 'UX Design',
    description: `At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? Or perhaps your goal is simply to generate more leads for your products and services? Whatever actions you're targeting, Third Eye can help.`,
    to: '/design/ux-design',
  },
  {
    id: 2,
    title: 'UI Design',
    description: `At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? Or perhaps your goal is simply to generate more leads for your products and services? Whatever actions you're targeting, Third Eye can help.`,
    to: '/design/ui-design',
  },
  {
    id: 3,
    title: 'Illustrations',
    description: `At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? Or perhaps your goal is simply to generate more leads for your products and services? Whatever actions you're targeting, Third Eye can help.`,
    to: '/design/illustrations',
  },
  {
    id: 4,
    title: 'Marketing',
    description: `At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? Or perhaps your goal is simply to generate more leads for your products and services? Whatever actions you're targeting, Third Eye can help.`,
    to: '/design/marketing',
  },
];
const subDevelopment = [
  {
    id: 1,
    title: 'Frontend Dev',
    description: `At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? Or perhaps your goal is simply to generate more leads for your products and services? Whatever actions you're targeting, Third Eye can help.`,
    to: '/development/front-end',
  },
  {
    id: 2,
    title: 'Backend Dev ',
    description: `At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? Or perhaps your goal is simply to generate more leads for your products and services? Whatever actions you're targeting, Third Eye can help.`,
    to: '/development/back-end',
  },
  {
    id: 3,
    title: 'Mobile Apps',
    description: `At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? Or perhaps your goal is simply to generate more leads for your products and services? Whatever actions you're targeting, Third Eye can help.`,
    to: '/development/mobile-apps',
  },
  {
    id: 4,
    title: 'Websites',
    description: `At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? Or perhaps your goal is simply to generate more leads for your products and services? Whatever actions you're targeting, Third Eye can help.`,
    to: '/development/websites',
  },
];
const subMarketing = [
  {
    id: 1,
    title: 'Social Media',
    description: `At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? Or perhaps your goal is simply to generate more leads for your products and services? Whatever actions you're targeting, Third Eye can help.`,
    to: '/marketing/social-media',
  },
  {
    id: 2,
    title: 'Strategy',
    description: `At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? Or perhaps your goal is simply to generate more leads for your products and services? Whatever actions you're targeting, Third Eye can help.`,
    to: '/marketing/strategy',
  },
  {
    id: 3,
    title: 'Copywirting',
    description: `At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? Or perhaps your goal is simply to generate more leads for your products and services? Whatever actions you're targeting, Third Eye can help.`,
    to: '/marketing/copywirting',
  },
  {
    id: 4,
    title: 'Marketing',
    description: `At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? Or perhaps your goal is simply to generate more leads for your products and services? Whatever actions you're targeting, Third Eye can help.`,
    to: '/marketing/marketing',
  },
];

const OurCapabilities = () => {
  useEffect(() => {
    const scrollAnim = (totalItems, pinSec, nextSec) => {
      ScrollTrigger.create({
        trigger: pinSec,
        start: 'top 13%',
        end: totalItems.offsetHeight - 500 + 'px',
        pin: pinSec,
        scrub: 1,
        invalidateOnRefresh: true,

        // markers: {
        //   startColor: '#ff0000',
        //   endColor: 'green',
        // },
      });

      const scrollTl1 = gsap.timeline({
        scrollTrigger: {
          trigger: nextSec,
          start: 'bottom 20%',
          toggleActions: 'play none none reverse',
          invalidateOnRefresh: true,
        },

        ease: 'power4.inOut',
      });

      scrollTl1.fromTo(
        '#container',
        {
          background: `linear-gradient(42.36deg, #7ce7ff 1.63%, #3e4fa8 100%), #ffffff`,
        },
        {
          background: `linear-gradient(42.36deg, #c57cff 1.63%, #621e82 100%), #ffffff`,
        }
      );
      scrollTl1.fromTo(
        '#titleText1',
        {
          opacity: 1,
        },
        {
          opacity: 0,
        },
        '<='
      );
      scrollTl1.fromTo(
        '#titleText2',
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
        '<='
      );
      scrollTl1.fromTo(
        '#link1',
        {
          opacity: 1,
        },
        {
          opacity: 0,
        },
        '<='
      );
      scrollTl1.fromTo(
        '#link2',
        {
          display: 'none',
          opacity: 0,
        },
        {
          display: 'block',

          opacity: 1,
        },
        '<='
      );
      scrollTl1.fromTo(
        '#SVG1',
        {
          opacity: 1,
        },
        {
          opacity: 0,
        },
        '<='
      );
      scrollTl1.fromTo(
        '#SVG2',
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
        '<='
      );

      const scrollTl2 = gsap.timeline({
        scrollTrigger: {
          trigger: '#dev-section',
          start: 'bottom 20%',
          toggleActions: 'play none none reverse',
          invalidateOnRefresh: true,
        },
        ease: 'power4.inOut',
      });
      scrollTl2.to('#container', {
        background: `linear-gradient(223.64deg, #137266 21.73%, #BCFFF3 109.36%)`,
      });

      scrollTl2.to(
        '#titleText2',
        {
          opacity: 0,
        },
        '<='
      );
      scrollTl2.fromTo(
        '#titleText3',
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
        '<='
      );
      scrollTl2.to(
        '#link2',
        {
          opacity: 0,
          display: 'none',
        },
        '<='
      );
      scrollTl2.fromTo(
        '#link3',
        {
          display: 'none',
          opacity: 0,
        },
        {
          opacity: 1,
          display: 'block',
        },
        '<='
      );

      scrollTl2.to(
        '#SVG2',

        {
          opacity: 0,
        },
        '<='
      );
      scrollTl2.fromTo(
        '#SVG3',
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
        '<='
      );
    };

    scrollAnim(
      document.getElementById('total-items'),
      document.getElementById('pinSection'),
      document.getElementById('design-section')
    );
  }, []);
  return (
    <>
      <div className='hidden overflow-hidden lg:block'>
        <div id='container' className='relative pt-20'>
          <div className='container mx-auto px-4 text-white   relative'>
            <div id='pinSection' className='relative h-[90vh]'>
              <h1 id='mainHeading' className='heading !text-white'>
                Our Capabilities
              </h1>
              <div className='max-w-xl justify-items-end mx-auto my-20  relative'>
                <div className='text-right'>
                  <div className='relative'>
                    <h2
                      className='text-3xl xl:text-5xl pb-4 absolute  top-0'
                      id='titleText1'
                    >
                      Design
                    </h2>
                    <h2
                      className='text-3xl xl:text-5xl pb-4 absolute top-0'
                      id='titleText2'
                    >
                      Development
                    </h2>
                    <h2
                      className='text-3xl xl:text-5xl pb-4 absolute top-0'
                      id='titleText3'
                    >
                      Marketing
                    </h2>
                  </div>
                  <div className='relative'>
                    <Link href='/design'>
                      <a
                        id='link1'
                        className='text-right text-lg my-14 xl:my-20 block absolute w-[120px] left-0'
                      >
                        <span className='relative'>
                          Learn more
                          <div className='w-[85%] absolute bottom-0 bg-white h-[2px] left-0' />{' '}
                          -&gt;
                        </span>
                      </a>
                    </Link>

                    <Link href='/development'>
                      <a
                        id='link2'
                        className='text-right text-lg hidden my-14 xl:my-20  absolute w-[120px] left-0'
                      >
                        <span className='relative'>
                          Learn more
                          <div className='w-[85%] absolute bottom-0 bg-white h-[2px] left-0' />{' '}
                          -&gt;
                        </span>
                      </a>
                    </Link>
                    <Link href='/marketing'>
                      <a
                        id='link3'
                        className='text-right text-lg hidden my-14 xl:my-20  absolute w-[120px] left-0'
                      >
                        <span className='relative'>
                          Learn more
                          <div className='w-[85%] absolute bottom-0 bg-white h-[2px] left-0' />{' '}
                          -&gt;
                        </span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <Circle1 />
                <Circle2 />
                <Circle3 />
                <PenSVG />
                <BoxSVG />
                <TvSVG />
              </div>
            </div>
            <div
              id='total-items'
              className='absolute right-[5vw] xl:right-[10vw] top-48'
            >
              <div className='grid gap-96'>
                <div id='design-section'>
                  {subDesign.map(design => {
                    const { id, description, title, to } = design;

                    return <Item key={id} item={design} />;
                  })}
                </div>
                <div id='dev-section'>
                  {subDevelopment.map(dev => {
                    const { id, description, title, to } = dev;

                    return <Item key={id} item={dev} />;
                  })}
                </div>
                <div id='market-section'>
                  {subMarketing.map(market => {
                    const { id, description, title, to } = market;

                    return <Item key={id} item={market} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='lg:hidden'>
        <MobileScreen />
      </div>
    </>
  );
};

export default OurCapabilities;
