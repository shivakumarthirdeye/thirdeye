import Clients from '@/components/homePage/Clients';
import Hero from '@/components/homePage/hero/Hero';
import HowWeWork from '@/components/homePage/HowWeWork';
import Layout from '@/components/Layout';
import OurWork from '@/components/homePage/OurWork';
import TechStack from '@/components/homePage/TechStack';
import Testimonial from '@/components/common/Testimonial';

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
      <Clients />
      <HowWeWork />
      <TechStack />
      <Testimonial />
    </Layout>
  );
}
