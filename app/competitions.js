import React from 'react';
import Layout from '../components/Layout';

const Competitions = () => {
  return (
    <Layout>
      <div className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-12 text-blue-400">InnovateUSA Competitions</h1>
          <div className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-6 text-blue-300">Annual Innovation Challenge 2024</h2>
            <p className="text-xl mb-6 text-gray-300">Date: June 10-12, 2024</p>
            <p className="text-lg mb-8 text-gray-300 leading-relaxed">
              Join our annual competition where innovators from across the country present their groundbreaking ideas and compete for funding and mentorship opportunities. The competition features categories such as Technology, Healthcare, Sustainability, and Education.
            </p>
            <h3 className="text-2xl font-semibold mb-4 text-blue-300">Categories</h3>
            <ul className="list-disc list-inside text-lg text-gray-300 mb-8">
              <li>Technology: Innovations in software, hardware, and IT</li>
              <li>Healthcare: Breakthroughs in medical technology and healthcare services</li>
              <li>Sustainability: Solutions for environmental and social sustainability</li>
              <li>Education: Innovations in educational tools and methodologies</li>
            </ul>
            <a href="#" className="bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 inline-block">
              Register Now
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Competitions;