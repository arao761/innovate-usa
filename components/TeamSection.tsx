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
        <section id="team" className="py-20 bg-gradient-to-b from-gray-800 to-blue-800">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-6xl font-bold text-blue-500 mb-4">Our Innovative Team</h2>
                    <p className="text-xl text-gray-300">Meet the minds behind InnovateUSA</p>
                </motion.div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            className="relative group"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                        >
                            <div className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105">
                                <img src={member.imgSrc} alt={`Portrait of ${member.name}`} className="w-full h-80 object-cover object-center" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                                    <p className="text-blue-300 font-semibold mb-2">{member.role}</p>
                                    <p className="text-gray-200 text-sm">{member.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;