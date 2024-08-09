import React from 'react';
import Layout from '../components/Layout';
import TeamMember from '../components/TeamMember';

const teamMembers = [
  {
    name: "Sahasra Jonnalagadda",
    role: "Executive Director",
    description: "Oversees the overall vision, strategy, and execution of InnovateUSA.",
    image: "/images/team-members/member1.jpg"
  },
  // ... Add the rest of the team members here
];

const Team = () => {
  return (
    <Layout>
      <div className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-12 text-blue-400">Our Team</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Team;