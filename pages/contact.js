import React from 'react';
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <Layout>
      <div className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-12 text-blue-400">Contact Us</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl mb-8 text-gray-300 text-center">
              Have questions or want to get involved? We&apos;d love to hear from you!
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;