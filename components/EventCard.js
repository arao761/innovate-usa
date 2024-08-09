import React from 'react';

const EventCard = ({ title, date, description, image }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-2">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-blue-400 mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{date}</p>
        <p className="text-gray-300 text-sm">{description}</p>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default EventCard;