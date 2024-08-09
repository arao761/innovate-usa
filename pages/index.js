import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';

const Home = () => {
  return (
    <Layout>
      <Hero 
        title="Welcome to InnovateUSA" 
        subtitle="Empowering innovators, fostering entrepreneurship, and shaping the future of American enterprise."
      />
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="Events"
              description="Join our exciting events and workshops."
              icon="far fa-calendar-alt"
              link="/events"
            />
            <FeatureCard
              title="Competitions"
              description="Showcase your innovation and win big."
              icon="fas fa-trophy"
              link="/competitions"
            />
            <FeatureCard
              title="Learn"
              description="Explore the American Enterprise System."
              icon="fas fa-graduation-cap"
              link="/learn"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;