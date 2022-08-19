import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout
      description={'This is a description'}
      keywords={'This is a keywords'}
      title={'This is a title'}
    >
      <div>
        <h1 className='text-3xl font-bold underline'>Hello World</h1>
      </div>
    </Layout>
  );
}
