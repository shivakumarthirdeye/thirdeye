import Hero from '@/components/hero/Hero';
import Layout from '@/components/Layout';
import OurWork from '@/components/OurWork';

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
    </Layout>
  );
}
