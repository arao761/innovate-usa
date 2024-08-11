import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
    { name: 'Sahasra Jonnalagadda', role: 'Executive Director', imgSrc: 'https://media.licdn.com/dms/image/D4E03AQF8wnLbVprK5A/profile-displayphoto-shrink_400_400/0/1713407413055?e=1729123200&v=beta&t=9hE0GRLmBC7m_6u07f8b5qKfeHZQLihHMgOi0KcsHbw', description: 'Oversees the overall vision, strategy, and execution of InnovateUSA.' },
    { name: 'Roshini Mantena', role: 'Program Manager', imgSrc: '/images/image4.jpg', description: 'Manages day-to-day operations, coordinates team efforts.' },
    { name: 'Rashmi Mantena', role: 'Partnership Director', imgSrc: '/images/image5.jpg', description: 'Focuses on building strategic partnerships.' },
    { name: 'Ruhi Sharma', role: 'Treasurer', imgSrc: 'https://media.licdn.com/dms/image/v2/D4D03AQFGpuBXLPUpDA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1723264568304?e=1729123200&v=beta&t=FMXTh2dRof4NZSkln9yB0VewhIAQUq8T_eZoXrDBXeg', description: 'Manages the organization finances and budgeting.' },
    { name: 'Ankit Rao', role: 'Webmaster', imgSrc: 'https://media.licdn.com/dms/image/D4E03AQEtwmPBQtNGWA/profile-displayphoto-shrink_400_400/0/1711079713525?e=1729123200&v=beta&t=5B2hPSCos-jhaAeqckqteO6pYUznoP0i-wrhi7QdRrw', description: 'Oversees the design, development, and maintenance of the website.' },
    { name: 'Cara King', role: 'Director of Public Affairs', imgSrc: '/images/image6.jpg', description: 'Leads public relations efforts and manages media outreach.' },
    { name: 'Deryck Toney', role: 'Secretary', imgSrc: '/images/image7.jpg', description: 'Handles administrative tasks and keeps track of meetings.' },
    { name: 'Katie Helge', role: 'Director of Media', imgSrc: 'https://media.licdn.com/dms/image/D4D03AQHnAvzARWprdQ/profile-displayphoto-shrink_800_800/0/1722291581569?e=1729123200&v=beta&t=aF5dHBrrMUoZ84tPCIcTPxXJz_nTWlDTVwfMT763kd4', description: 'Oversees media production and strategy.' },
];

const TeamSection: React.FC = () => {
    return (
        <section id="team" className="py-20 bg-gray-800">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-5xl font-bold text-blue-400 mb-8">Our Team</h2>
                </motion.div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                        >
                            <img src={member.imgSrc} alt={`Portrait of ${member.name}`} className="w-32 h-32 mx-auto rounded-full mb-4" />
                            <h3 className="text-xl font-semibold mb-2 text-blue-400">{member.name}</h3>
                            <p className="text-gray-400 mb-4">{member.role}</p>
                            <p className="text-gray-300">{member.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;