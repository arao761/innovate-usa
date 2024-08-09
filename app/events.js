import React from 'react';
import Layout from '../components/Layout';
import EventCard from '../components/EventCard';

const events = [
  {
    title: "Innovation Summit",
    date: "March 15, 2024",
    description: "Join us for a day of inspiring talks, networking, and workshops focused on the latest trends in innovation and entrepreneurship.",
    image: "/images/events/innovation-summit.jpg"
  },
  // ... Add more events here
];

const Events = () => {
  return (
    <Layout>
      <div className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-12 text-blue-400">Upcoming Events</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Events;