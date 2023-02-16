import Clients from '@/components/common/Clients';
import HeroSection from '@/components/common/HeroSection';
import HowWeWork from '@/components/common/HowWeWork';
import OurWorks from '@/components/common/OurWorks';
import ProjectRequirementForm from '@/components/common/ProjectRequirementForm';
import ServicesProcess from '@/components/common/ServicesProcess';
import Testimonial from '@/components/common/Testimonial';
import Layout from '@/components/Layout';

const ourWorks = [
  {
    id: 1,
    title: 'Empathise',
    description: ` Our first step in creating a fantastic piece of work begins with the Empathise step, in which we understand and consider the problems your users are facing from their perspective.
`,
  },
  {
    id: 2,
    title: 'Define',
    description: `We dive deep and analyse the situation to gain a deeper understanding of the problems your users are experiencing after we have analysed and clearly understood the same.`,
  },
  {
    id: 3,
    title: 'Prototype ',
    description: `Once we've determined the most efficient strategy for addressing your issue, a built prototype allows us to precisely understand whether the solution we created will serve its purpose or not, and if so, how efficiently or not. `,
  },
  {
    id: 4,
    title: 'Launch',
    description: `In this step, we complete the entire product, including all of its features and capabilities. After the build is finished, we rigorously test the finished product using live human interaction and launch it.

 `,
  },
];
const testimonials = [
  {
    id: 1,
    name: 'Stephanie',
    // img: testimonial.src,
    userId: '@staphania',
    review: (
      <>
        "We value Third Eye Innovation's hands-on approach as well as their
        ability to contribute not only with design <br />
        <br /> but also to the overall concept of the project
      </>
    ),
    date: '23rd April ',
  },
  {
    id: 2,
    name: 'Joseph',
    // img: testimonial1.src,
    userId: '@Joseph',
    review: (
      <>
        "Third Eye Innovations worked as an extension of our team, assisting us
        in crystallising our vision and delivering incredible results in record
        time.
      </>
    ),
    date: '23rd April ',
  },
  {
    id: 3,
    name: 'Stephanie',
    // img: testimonial.src,
    userId: '@staphania',
    review: (
      <>
        " Third Eye Innovations transformed our legacy enterprise software into
        a high-quality digital experience for consumers
      </>
    ),
    date: '23rd April ',
  },
  {
    id: 4,
    name: 'Stephanie',
    // img: testimonial.src,
    userId: '@staphania',
    review: (
      <>
        "We were featured in the App Store and on Google Play shortly after
        launching Third Eye Innovations designs.
      </>
    ),
    date: '23rd April ',
  },
];
const ourProcess = [
  {
    id: 4,
    icon: <DesignSVG />,
    title: 'UX Design',
    description: `Third Eye Innovations UX design company can help you design products with flexibility in mind, and our strategic designs can be styled, layered, and adjusted to any technical stack that consistently helps customers achieve their goals.`,
  },
  {
    id: 2,
    icon: <DesignSVG />,
    title: 'UI Design',
    description: `
     As a leading UI design company, Third Eye Innovations assists brands in navigating all aspects of today's and tomorrow's digital landscape. Good UI design begins with solid UI knowledge, which our teams have in great abundance.

    `,
  },
  {
    id: 3,
    icon: <DesignSVG />,
    title: 'Graphic Design',
    description: `Whether you need a spectacular new logo or some eye-catching flyers, the talented designers at Third Eye Innovations can help. We take pride in our high-quality designers who provide only the best graphic design services.
`,
  },
];

const design = () => {
  return (
    <Layout>
      <section className=' relative overflow-x-clip mb-16  lg:mb-60'>
        <div className=' container   '>
          <HeroSection
            content={
              <>
                <span className='bg-black text-white px-1'>Design</span> is the
                silent ambassador of your Brand.
              </>
            }
          />
        </div>
      </section>
      <Clients tag='DESIGN' />
      <HowWeWork title='How we design amazing products ' steps={ourWorks} />
      <ServicesProcess works={ourProcess} />
      <Testimonial testimonials={testimonials} />
      <OurWorks title='Design Works' tag='DESIGN' />
      <ProjectRequirementForm />
    </Layout>
  );
};

export default design;

function DesignSVG() {
  return (
    <svg
      width='48'
      height='48'
      viewBox='0 0 48 48'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M26.3334 10.0824C26.1823 9.7346 25.8076 9.54104 25.4362 9.61854C25.0651 9.69603 24.7994 10.0231 24.7998 10.4024V28.4333C24.7994 28.7194 24.9519 28.9836 25.1998 29.1268C25.8141 29.4814 26.2402 30.0896 26.3634 30.7881C26.4866 31.487 26.2945 32.204 25.8384 32.7476C25.3823 33.2911 24.709 33.6047 23.9998 33.6047C23.2906 33.6047 22.6173 33.2911 22.1612 32.7476C21.7051 32.2041 21.513 31.487 21.6362 30.7881C21.7594 30.0896 22.1855 29.4814 22.7999 29.1268C23.0477 28.9836 23.2002 28.7194 23.1999 28.4333V10.4024C23.2002 10.0231 22.9345 9.69603 22.5634 9.61854C22.192 9.54104 21.8173 9.7346 21.6663 10.0824L11.266 34.0804C11.1581 34.3278 11.182 34.6128 11.3299 34.8385C11.4778 35.0646 11.7296 35.2003 11.9996 35.2003C13.06 35.2017 14.0768 35.6234 14.8268 36.373C15.5765 37.1229 15.9982 38.1396 15.9997 39.1999V47.1992C15.9997 47.4114 16.084 47.6149 16.234 47.7649C16.384 47.9149 16.5875 47.9992 16.7997 47.9992H31.2001C31.4122 47.9992 31.6158 47.9149 31.7658 47.7649C31.9158 47.6149 32.0001 47.4114 32.0001 47.1992V39.1999C32.0015 38.1396 32.4233 37.1229 33.173 36.373C33.923 35.6234 34.9398 35.2017 36.0002 35.2003C36.2702 35.2003 36.522 35.0646 36.6699 34.8385C36.8177 34.6128 36.8417 34.3279 36.7338 34.0804L26.3334 10.0824ZM30.4 46.3993H17.5996V43.1996H30.4V46.3993ZM30.4 39.1999V41.5997H17.5996V39.1999C17.5978 37.9176 17.1567 36.6748 16.3499 35.6781C15.5431 34.6815 14.4192 33.9911 13.1652 33.7219L21.5997 14.2603V28.0008C20.9665 28.4758 20.4883 29.1275 20.225 29.8738C19.9618 30.6202 19.9254 31.428 20.1204 32.1947C20.2954 32.8961 20.659 33.536 21.1715 34.0453C21.6844 34.5545 22.3269 34.9134 23.0294 35.0833C24.2326 35.3787 25.5048 35.1041 26.4791 34.3388C27.453 33.5692 28.0145 32.391 27.9991 31.1501C27.9838 29.9092 27.3927 28.7456 26.3998 28.0008V14.2602L34.8343 33.7219C33.5803 33.9911 32.4564 34.6814 31.6496 35.6781C30.8428 36.6747 30.4017 37.9175 30.3999 39.1999L30.4 39.1999Z'
        fill='#0067BF'
      />
      <path
        d='M44.0005 8.00342C45.0149 8.00306 45.9913 7.61773 46.7324 6.92493C47.4731 6.23177 47.9228 5.28365 47.991 4.27162C48.0589 3.25959 47.7396 2.25927 47.0978 1.47396C46.4563 0.688313 45.5403 0.175882 44.5349 0.0401222C43.5295 -0.0956376 42.5101 0.155468 41.6833 0.742919C40.8562 1.33037 40.2833 2.20995 40.0805 3.20378H27.9201C27.6733 1.98889 26.8773 0.956844 25.7644 0.410056C24.6518 -0.136685 23.3482 -0.136685 22.2357 0.410056C21.1228 0.956798 20.3267 1.98889 20.0799 3.20378H7.91958C7.65278 1.89711 6.75237 0.809656 5.51878 0.303277C4.28483 -0.202755 2.88017 -0.06098 1.77221 0.681813C0.664704 1.42461 0 2.67021 0 4.00368C0 5.33714 0.664659 6.58275 1.77221 7.32554C2.88008 8.06833 4.28473 8.21011 5.51878 7.70408C6.75237 7.19769 7.65278 6.11025 7.91958 4.80357H16.5198C13.3826 6.19701 10.6993 8.44258 8.77455 11.2848C6.84983 14.1271 5.76089 17.4522 5.63161 20.8822C4.32304 21.139 3.22834 22.031 2.71294 23.261C2.19722 24.4908 2.32865 25.8964 3.06331 27.0096C3.79761 28.1227 5.0384 28.7966 6.37201 28.8065C7.70563 28.8165 8.95641 28.1612 9.70742 27.0596C10.4585 25.9575 10.611 24.5541 10.1142 23.3167C9.61706 22.0793 8.53593 21.1708 7.23167 20.8944C7.38024 17.2237 8.73242 13.7037 11.0796 10.8775C13.4269 8.05129 16.6387 6.07542 20.2199 5.25473C20.5674 6.32682 21.3535 7.20062 22.3828 7.65919C23.4121 8.11776 24.5878 8.11772 25.6172 7.65919C26.6465 7.20066 27.4325 6.32682 27.7801 5.25473C31.3612 6.07502 34.5728 8.05056 36.9203 10.8764C39.2676 13.7022 40.6201 17.2215 40.7694 20.8915C39.4647 21.1679 38.3836 22.0764 37.8869 23.3138C37.3897 24.5512 37.5422 25.9547 38.2933 27.0567C39.0444 28.1587 40.2952 28.8137 41.6287 28.8036C42.9623 28.7936 44.203 28.1197 44.9377 27.0066C45.672 25.8939 45.8034 24.4879 45.2877 23.258C44.7723 22.0285 43.6781 21.1364 42.3694 20.8793C42.2394 17.4495 41.1501 14.1252 39.2254 11.2837C37.3006 8.44184 34.6171 6.19701 31.4801 4.80357H40.0803C40.266 5.70635 40.7571 6.51771 41.4715 7.10052C42.1854 7.68333 43.0786 8.00223 44.0004 8.0033L44.0005 8.00342ZM8.79956 24.802C8.79956 25.4383 8.54669 26.049 8.09668 26.4989C7.64666 26.9488 7.0359 27.2017 6.39954 27.2017C5.76318 27.2017 5.15233 26.9489 4.70239 26.4989C4.25246 26.049 3.99952 25.4383 3.99952 24.802C3.99952 24.1657 4.25238 23.5549 4.70239 23.105C5.15241 22.6551 5.76318 22.4022 6.39954 22.4022C7.0359 22.4022 7.64675 22.6551 8.09668 23.105C8.54661 23.555 8.79956 24.1657 8.79956 24.802ZM44.0005 24.802C44.0005 25.4383 43.7477 26.049 43.2976 26.4989C42.8476 26.9488 42.2369 27.2017 41.6005 27.2017C40.9641 27.2017 40.3533 26.9489 39.9034 26.4989C39.4534 26.049 39.2005 25.4383 39.2005 24.802C39.2005 24.1657 39.4533 23.5549 39.9034 23.105C40.3534 22.6551 40.9641 22.4022 41.6005 22.4022C42.2369 22.4022 42.8477 22.6551 43.2976 23.105C43.7476 23.555 44.0005 24.1657 44.0005 24.802ZM44.0005 1.60397C44.637 1.60397 45.2477 1.8568 45.6977 2.30676C46.1476 2.75673 46.4005 3.36743 46.4005 4.00371C46.4005 4.64 46.1477 5.25078 45.6977 5.70067C45.2477 6.15055 44.6369 6.40346 44.0005 6.40346C43.3642 6.40346 42.7533 6.15063 42.3034 5.70067C41.8534 5.2507 41.6005 4.64 41.6005 4.00371C41.6005 3.36743 41.8534 2.75664 42.3034 2.30676C42.7534 1.85688 43.3642 1.60397 44.0005 1.60397ZM3.99942 6.40355C3.36298 6.40355 2.75221 6.15072 2.30228 5.70076C1.85235 5.25079 1.5994 4.64009 1.5994 4.00381C1.5994 3.36752 1.85227 2.75673 2.30228 2.30685C2.7523 1.85697 3.36306 1.60406 3.99942 1.60406C4.63578 1.60406 5.24663 1.85689 5.69657 2.30685C6.1465 2.75682 6.39944 3.36752 6.39944 4.00381C6.39944 4.64009 6.14658 5.25088 5.69657 5.70076C5.24655 6.15064 4.63578 6.40355 3.99942 6.40355ZM24 6.40355C23.3635 6.40355 22.7528 6.15072 22.3028 5.70076C21.8529 5.25079 21.6 4.64009 21.6 4.00381C21.6 3.36752 21.8528 2.75673 22.3028 2.30685C22.7528 1.85697 23.3636 1.60406 24 1.60406C24.6363 1.60406 25.2472 1.85689 25.6971 2.30685C26.147 2.75682 26.4 3.36752 26.4 4.00381C26.4 4.64009 26.1471 5.25088 25.6971 5.70076C25.2471 6.15064 24.6363 6.40355 24 6.40355Z'
        fill='#0067BF'
      />
    </svg>
  );
}
