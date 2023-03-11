import Layout from '@/components/Layout';
import OurWork from '@/components/homePage/OurWork';
import Testimonial from '@/components/common/Testimonial';
import Clients from '@/components/common/Clients';
import Hero from '@/components/homePage/hero/Hero';
import OurHelp from '@/components/homePage/OurHelp';
import HowWeWork from '@/components/common/HowWeWork';
import TechStack from '@/components/homePage/TechStack';
import OurCapabilities from '@/components/homePage/OurCapabilities';
import IndustriesWeServe from '@/components/homePage/IndustriesWeServe';
import ProjectRequirementForm from '@/components/common/ProjectRequirementForm';
import HomeForm from '@/components/common/HomeForm';

export default function Home() {
  return (
    <Layout
      noFooter
      description={
        'We are a design, development & marketing studio creating an impact'
      }
      keywords={
        'We are a design, development & marketing studio creating an impact'
      }
      title={
        'Third Eye Innovations - Futuristic & Affordable Internet Solutions'
      }
    >
      <Hero />
      <OurWork featured={true} homePage />
      <OurCapabilities />
      <Clients svg homePage />
      <IndustriesWeServe />
      <OurHelp homePage />
      <HowWeWork title='How we work' homePage />
      <TechStack homePage />
      <Testimonial homePage />
      <HomeForm />
    </Layout>
  );
}
