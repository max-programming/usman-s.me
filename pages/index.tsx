import Hero from '@/components/Hero';
import Layout from '@/components/Layout';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div>
      <Layout
        title='Usman Sabuwala - Web Developer'
        description='Web Developer, Content Creator and Learner'
      >
        <Hero />
      </Layout>
    </div>
  );
};

export default Home;