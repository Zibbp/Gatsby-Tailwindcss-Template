import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import catAndHumanIllustration from '../images/cat-and-human-illustration.svg';

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title='Home'
      />
      <div class='py-20' className='heroBG'>
        <div class='container mx-auto px-6'>
          <h2 class='text-4xl font-bold mb-2 text-white'>
            Smart Health Monitoring Wristwatch!
          </h2>
          <h3 class='text-2xl mb-8 text-gray-200'>
            Monitor your health vitals smartly anywhere you go.
          </h3>
          <button class='bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider'>
            Pre Order
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage;
