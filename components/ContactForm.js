import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to an API)
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return ( 
    <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-lg">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="4"
          className="w-full px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        ></textarea>
      </div>
      <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;