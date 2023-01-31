import ImgSwiperInfinite from '@/components/common/ImgSwiperInfinite';
import React from 'react';

import lynktownImg1 from '/public/assets/images/subServices/graphic-works/works/social-media/lynktown/1.png';
import lynktownImg2 from '/public/assets/images/subServices/graphic-works/works/social-media/lynktown/2.png';
import spoclearnImg1 from '/public/assets/images/subServices/graphic-works/works/social-media/spoclearn/1.png';
import spoclearnImg2 from '/public/assets/images/subServices/graphic-works/works/social-media/spoclearn/2.png';
import spoclearnImg3 from '/public/assets/images/subServices/graphic-works/works/social-media/spoclearn/3.png';
const lynktownImages = [
  {
    id: 1,
    img: lynktownImg1.src,
  },
  {
    id: 2,
    img: lynktownImg2.src,
  },
];
const spoclearnImages = [
  {
    id: 1,
    img: spoclearnImg1.src,
  },
  {
    id: 2,
    img: spoclearnImg2.src,
  },
  {
    id: 3,
    img: spoclearnImg3.src,
  },
];

const SocialMedia = () => {
  return (
    <>
      <ImgSwiperInfinite
        images={spoclearnImages}
        className='bg-[#F6F6F6]'
        title='Spoclearn'
        description={`At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? `}
      />
      <ImgSwiperInfinite
        images={lynktownImages}
        className='bg-[#FFFBE3]'
        title='LynkTown'
        description={`At Third Eye, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? `}
      />
    </>
  );
};

export default SocialMedia;
