import Goals from '@/components/casestudy/Goals';
import Hero from '@/components/casestudy/Hero';
import SummaryProblems from '@/components/casestudy/SummaryProblems';
import OurWorks from '@/components/common/OurWorks';
import Layout from '@/components/Layout';
import ClientReview from '@/components/casestudy/ClientReview';
import TypoTech from '@/components/casestudy/TypoTech';
import Functionality from '@/components/casestudy/Functionality';

import summaryImg from '/public/assets/images/case-study/project1/summary.png';
import goal1 from '/public/assets/images/case-study/project1/goal1.png';
import goal2 from '/public/assets/images/case-study/project1/goal2.png';
import goal3 from '/public/assets/images/case-study/project1/goal3.png';
import typo from '/public/assets/images/case-study/project1/typo.png';
import tech from '/public/assets/images/case-study/project1/tech.png';
import features from '/public/assets/images/case-study/project1/features.png';

const ProjectOne = () => {
  return (
    <Layout>
      <Hero
        heading={
          <>
            Car Dealer Website for <br /> Mercedes-Benz Ukraine
          </>
        }
        domain='Design + Development'
        industry='Automotive'
        platform='Web'
      />
      <SummaryProblems
        summaryHeading={
          <>
            Mercedes-Benz Ukraine wanted to <br className='hidden xl:block' />{' '}
            create a new & more efficient
            <br className='hidden xl:block' />
            website to replace the old one
          </>
        }
        summaryPoints={[
          {
            id: 1,
            point:
              'The previous website was based on the official Mercedes Benz template resulting in low usability, poor conversion & lack of all necessary functions.',
          },
          {
            id: 2,
            point:
              'So, we decided to develop an appealing and functional website that would require less time to maintain, be more user-friendly, and increase user trust.',
          },
        ]}
        problemHeading='Why to redesign old website?'
        problemPoints={[
          {
            id: 1,
            point: 'Complicated CJM ( Customer Journey Map)',
          },
          {
            id: 2,
            point: 'Low conversion rate',
          },
          {
            id: 3,
            point: 'No personalized approach for customers',
          },
          {
            id: 4,
            point: 'Bad website navigation',
          },
          {
            id: 5,
            point:
              'Lack of extremely important functionality for car dealer website (loan calculator, spare parts shop, etc)',
          },
          {
            id: 6,
            point: 'Hard to compare different car models',
          },
        ]}
        summaryImg={summaryImg}
        problemImg={summaryImg}
      />
      <Goals
        img={goal1}
        points={[
          {
            id: 1,
            title: 'Create a Responsive Car Dealer Website',
            description: `We aimed to create a well-thought-out responsive webdesign to deliver fast-loading experience on all devices.`,
          },
          {
            id: 2,
            title: 'Impress with Efficient UX/UI Design',
            description: `We strived to provide stunning UX/UI solutions within simple yet effective car dealer's website design.`,
          },
          {
            id: 3,
            title: 'Deliver Conversion-Focused Design ',
            description: `We improved conversion rate of the website via call-to-action buttons, logical structure, advanced search functionality, comfortable menus & much more.`,
            img: goal2,
          },

          {
            id: 4,
            title: 'Build a Functional Admin Panel',
            description: `Our goal was to create a functional and user-friendly admin panel to allow managing content manually (for website administrators).  `,
            img: goal3,
          },
        ]}
      />
      <Functionality
        title={'FUNCTIONAL ADMIN PANEL'}
        highlight='Full control over all features and functions. Customizable website content allowing perform changes without external help'
        features={[
          {
            id: 1,
            img: features,
            title: 'Admin Panel',
            points: [
              {
                id: 1,
                point: 'Functional dashboard',
              },
              {
                id: 2,
                point: 'Multiple website administrator roles',
              },
              {
                id: 3,
                point: 'No personalized approach for customers',
              },
              {
                id: 4,
                point: 'Widget administration',
              },
              {
                id: 5,
                point: 'Newsletter and SMS management',
              },
            ],
          },
        ]}
      />
      <TypoTech fontImg={typo} techImg={tech} />
      <ClientReview
        review={`"They've analyzed what we need and had provided us with a design of an innovative, functional & user-friendly website"`}
      />
      <OurWorks />
    </Layout>
  );
};

export default ProjectOne;
