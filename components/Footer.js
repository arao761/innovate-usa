import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">InnovateUSA</h3>
            <p className="text-gray-300">Empowering innovators, fostering entrepreneurship, and shaping the future of American enterprise.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-blue-300 transition duration-300">About Us</Link></li>
              <li><Link href="/team" className="hover:text-blue-300 transition duration-300">Our Team</Link></li>
              <li><Link href="/events" className="hover:text-blue-300 transition duration-300">Events</Link></li>
              <li><Link href="/competitions" className="hover:text-blue-300 transition duration-300">Competitions</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact</h4>
            <p className="text-gray-300 mb-2">Email: info@innovateusa.org</p>
            <p className="text-gray-300 mb-2">Phone: (123) 456-7890</p>
            <p className="text-gray-300">Address: 123 Innovation St, Tech City, USA</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-blue-300 transition duration-300"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-white hover:text-blue-300 transition duration-300"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-white hover:text-blue-300 transition duration-300"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="text-white hover:text-blue-300 transition duration-300"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2024 InnovateUSA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;