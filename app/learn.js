import React from 'react';
import Layout from '../components/Layout';

const Learn = () => {
  return (
    <Layout>
      <div className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-12 text-blue-400">Learn & Educate</h1>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6 text-blue-300">The American Enterprise System</h2>
            <p className="text-xl mb-8 text-gray-300 leading-relaxed">
              The American Enterprise System is built on five key pillars that form the foundation of our economic structure and business environment. Understanding these pillars is crucial for anyone looking to innovate and succeed in the American market.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <PillarCard
                icon="fas fa-home"
                title="Private Property"
                description="The right to own and control private property."
              />
              <PillarCard
                icon="fas fa-hand-holding-usd"
                title="Freedom of Choice"
                description="The freedom to choose how to produce, sell, and use your own resources."
              />
              <PillarCard
                icon="fas fa-piggy-bank"
                title="Profit Incentive"
                description="The motivation to earn profits which drives innovation and efficiency."
              />
              <PillarCard
                icon="fas fa-trophy"
                title="Competition"
                description="Healthy competition that encourages businesses to improve and innovate."
              />
              <PillarCard
                icon="fas fa-balance-scale"
                title="Limited Government"
                description="A government that provides a stable environment for the economy to thrive but does not overly interfere."
              />
            </div>
            <p className="text-xl text-gray-300 leading-relaxed">
              We offer a range of resources and educational programs to help you navigate and leverage these principles effectively. Explore our courses, workshops, and mentorship programs to deepen your understanding of the American Enterprise System.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const PillarCard = ({ icon, title, description }) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-2">
    <i className={`${icon} text-4xl text-blue-400 mb-4`}></i>
    <h3 className="text-xl font-semibold mb-2 text-blue-300">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

export default Learn;