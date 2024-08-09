import React from 'react';

const TeamMember = ({ name, role, description, image }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-2">
      <img src={image} alt={name} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-blue-400 mb-2">{name}</h3>
        <p className="text-gray-400 mb-4">{role}</p>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default TeamMember;