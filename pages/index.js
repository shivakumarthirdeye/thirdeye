import Layout from '@/components/Layout';
import OurWork from '@/components/homePage/OurWork';
import TechStack from '@/components/homePage/TechStack';
import Testimonial from '@/components/common/Testimonial';
import Clients from '@/components/common/Clients';
import Hero from '@/components/homePage/hero/Hero';
import OurHelp from '@/components/homePage/OurHelp';
import HowWeWork from '@/components/common/HowWeWork';

export default function Home() {
  return (
    <Layout
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
      <OurWork />
      <Clients svg />
      <OurHelp />
      <HowWeWork title='How we work' />
      <TechStack />
      <Testimonial />
    </Layout>
  );
}
