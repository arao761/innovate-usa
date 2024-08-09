import React from 'react';
import Link from 'next/link';

const FeatureCard = ({ title, description, icon, link }) => {
  return (
    <Link href={link} className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-2">
      <div className="text-center">
        <i className={`${icon} text-5xl text-blue-400 mb-6`}></i>
        <h3 className="text-2xl font-semibold mb-4 text-white">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </Link>
  );
};

export default FeatureCard;