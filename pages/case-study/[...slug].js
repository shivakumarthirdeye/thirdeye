import content from '@/utils/projects.json';
import Goals from '@/components/casestudy/Goals';
import Hero from '@/components/casestudy/Hero';
import SummaryProblems from '@/components/casestudy/SummaryProblems';
import OurWorks from '@/components/common/OurWorks';
import Layout from '@/components/Layout';
import ClientReview from '@/components/casestudy/ClientReview';
import TypoTech from '@/components/casestudy/TypoTech';
import Functionality from '@/components/casestudy/Functionality';
import ReactHtmlParser from 'react-html-parser';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Social from '@/components/casestudy/Social';

const Projects = ({ page }) => {
  const router = useRouter();

  return (
    <Layout>
      <Hero
        heading={<>{ReactHtmlParser(page?.title)}</>}
        devDetails={page?.devDetails}
      />
      <SummaryProblems
        summaryHeading={<>{ReactHtmlParser(page?.summary?.heading)}</>}
        summaryPoints={page?.summary?.points}
        problemHeading={page?.problem?.heading}
        problemPoints={page?.problem?.points}
        summaryImg={page?.summary?.img}
        problemImg={page?.problem?.img}
      />

      <Goals img={page?.goals?.img} points={page?.goals?.points} />
      <Functionality
        highlight={page?.solutions?.heading}
        features={page?.solutions?.solutionPoints}
      />

      <ClientReview review={page?.review} />
      <TypoTech fontImg={page?.font} techImg={page?.tech} />
      <Social socialLinks={page.social} />
      <OurWorks currentPage={page.slug} />
    </Layout>
  );
};

export default Projects;

export async function getStaticPaths() {
  const paths = content.projects.map(page => {
    const slug = [page.slug];
    return { params: { slug } };
  });
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const currentPath = params.slug[0];

  const page = content.projects.find(
    project => project.slug === currentPath
  ) || {
    notfound: true,
  };

  return { props: { page } };
}
