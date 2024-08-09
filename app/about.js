import React from 'react';
import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout>
      <div className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-12 text-blue-400">About InnovateUSA</h1>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6 text-blue-300">Our Vision</h2>
            <p className="text-xl mb-12 text-gray-300 leading-relaxed">
              Our mission is to educate and empower the community with comprehensive knowledge of the American Enterprise System and business concepts. We seek to inform, inspire, and implement these ideas, fostering a deep understanding that lays the groundwork for future success.
            </p>
            <h2 className="text-3xl font-semibold mb-6 text-blue-300">Our Impact</h2>
            <p className="text-xl mb-12 text-gray-300 leading-relaxed">
              Since our inception, we have supported over 10,000 innovators, hosted 500+ events, and facilitated the creation of 200+ startups. Our community continues to grow and thrive, driving innovation and economic growth across the nation.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;