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

      <Goals
        img={page?.goals?.img}
        noId={page?.goals?.noId}
        points={page?.goals?.points}
      />
      <Functionality
        highlight={page?.solutions?.heading}
        features={page?.solutions?.solutionPoints}
        points={page?.solutions?.points}
        description={page?.solutions?.description}
        image={page?.solutions?.img}
        results={page?.results?.points}
        resultImage={page?.results?.img}
        big={page?.solutions?.big}
      />

      <TypoTech fontImg={page?.font} techImg={page?.tech} />
      <ClientReview review={page?.review} />
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
//  {
//       "id": 15,
//       "title": "Increase your organic traffic by 51%- Clever Corp SEO Case Study",
//       "smallTitle": "The clever corp",
//       "featured": true,
//       "featuredVideo": "/assets/images/case-study/clever-crop/featured.m4v",
//       "thumbnail": "/assets/images/case-study/clever-crop/thumbnail.png",
//       "slug": "clever-crop",
//       "tag": "Design",
//       "tags": [
//         "WEBSITE",
//         "WEBAPPLICATION",
//         "MVP"
//       ],
//       "devDetails": [
//         {
//           "id": 1,
//           "title": "Platform",
//           "value": "Website"
//         },
//         {
//           "id": 2,
//           "title": "Industry",
//           "value": "Real estate"
//         },
//         {
//           "id": 3,
//           "title": "Service Provided",
//           "value": "SEO"
//         }
//       ],
//       "description": "Clever Corp is a leading professional Business Setup consultant in Dubai, offering world-class services by assisting locals and expats in establishing their businesses or corporations in Dubai and other emirates with varying jurisdictions. They provide 'tailored solutions to companies of various sizes' to get started quickly and with a seamless approach.",
//       "summary": {
//         "points": [
//           "Clever Corp is a leading professional Business Setup consultant in Dubai, offering world-class services by assisting locals and expats in establishing their businesses or corporations in Dubai and other emirates with varying jurisdictions. They provide 'tailored solutions to companies of various sizes' to get started quickly and with a seamless approach."
//         ],
//         "img": "/assets/images/case-study/rfq/summary.png"
//       },
//       "problem": {
//         "heading": "Why to design this Website?",
//         "points": [
//           "The client wants a home page that includes information about them, how to contact them, why they should choose them, customer FAQs, supplier FAQs, and a slider section. It should also include registration buttons for customers and suppliers.",
//           "Improve overall aesthetic and user experience and make the site more authentic and engaging.",
//           "Drive conversion of site visitors into contacts and ultimately customers.",
//           "Establish SEO foundations to increase search engine traffic and drive future growth.",
//           "An impressive UI that’s uncluttered and simple to use with neatly designed dashboards.",
//           "A growing platform requires expertise on multiple fronts, requiring a dedicated software team to be available at all times."
//         ],
//         "img": "/assets/images/case-study/rfq/problems.png"
//       },
//       "goals": {
//         "img": "/assets/images/case-study/rfq/project1.png",
//         "noId": true,
//         "points": [
//           {
//             "id": 1,
//             "heading": "Provide a total procurement solution for engineering companies and industries.",
//             "points": [
//               "They require a web application to provide a total procurement solution for engineering companies and industries.",
//               "The home page should have a section about us, contact us, why choose us, Customer FAQ, Supplier FAQ and a slider section.",
//               "It should also contain buttons for customer and supplier registration.",
//               "Easily navigable website to make it useful for farmers."
//             ]
//           }
//         ]
//       },
//       "solutions": {
//         "description": "We planned the user testing sessions and the main screens that needed to be created for those testing days. We created a platform for buyers and sellers where the customer can submit his requirements, the admin reviews them and forwards them to suppliers, suppliers submit bids to the admin, and the admin processes them and provides a quote to the customer. When the customer accepts the quote and pays on the RFQ platform, the supplier is notified, and the work begins. When the work is finished, the customer marks the request as completed.",
//         "img": "/assets/images/case-study/rfq/solution.png"
//       },
//       "results": {
//         "points": [
//           "Boost site speed to 97% during launch; boost conversion rate to 9.7%.Enhanced user productivity.",
//           "Sales have increased.",
//           "Lower customer support costs."
//         ],
//         "img": "/assets/images/case-study/rfq/result.png"
//       },
//       "review": "To provide a great user experience, you must remain relevant to what people are looking for and then build your website around that, which I believe you did and which has allowed us to achieve these successful results.",
//       "font": "/assets/images/case-study/rfq/font.png",
//       "tech": "/assets/images/case-study/rfq/tech.png",
//       "social": [
//         {
//           "id": 1,
//           "img": "/assets/images/case-study/behance.png",
//           "href": "https://www.behance.net/"
//         },
//         {
//           "id": 2,
//           "img": "/assets/images/case-study/dribbble.png",
//           "href": "https://www.dribbble.com/"
//         }
//       ]
//     },
