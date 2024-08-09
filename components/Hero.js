import React from 'react';
import Link from 'next/link';

const Hero = ({ title, subtitle }) => {
  return (
    <div className="relative h-screen flex items-center justify-center text-center bg-cover bg-center" style={{backgroundImage: "url('/images/hero-bg.jpg')"}}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 max-w-3xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white animate-fade-in">{title}</h1>
        <p className="text-xl md:text-2xl mb-12 text-gray-200 animate-fade-in-delayed">{subtitle}</p>
        <Link href="/about" className="bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 inline-block animate-fade-in-delayed">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default Hero;