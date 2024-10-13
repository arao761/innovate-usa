import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const teamMembers = [
    { name: 'Sahasra Jonnalagadda', role: 'Co-Founder and Executive Director', imgSrc: '/image1.jpg', description: 'Oversees the overall vision, strategy, and execution of InnovateUSA.' },
    { name: 'Roshini Mantena', role: 'Co-Founder and Program Manager', imgSrc: '/image4.jpg', description: 'Manages day-to-day operations, coordinates team efforts.' },
    { name: 'Rashmi Mantena', role: 'Co-Founder and Partnership Director', imgSrc: '/image8.JPG', description: 'Focuses on building strategic partnerships.' },
    { name: 'Ruhi Sharma', role: 'Treasurer', imgSrc: '/image3.jpg', description: 'Manages the organization finances and budgeting.' },
    { name: 'Ankit Rao', role: 'Webmaster', imgSrc: 'https://media.licdn.com/dms/image/D4E03AQEtwmPBQtNGWA/profile-displayphoto-shrink_400_400/0/1711079713525?e=1729123200&v=beta&t=5B2hPSCos-jhaAeqckqteO6pYUznoP0i-wrhi7QdRrw', description: 'Oversees the design, development, and maintenance of the website.' },
    { name: 'Cara King', role: 'Outreach Coordinator', imgSrc: '/image6.jpg', description: 'Leads public relations efforts and manages media outreach.' },
    { name: 'Deryck Toney', role: 'Secretary', imgSrc: '/image7.jpg', description: 'Handles administrative tasks and keeps track of meetings.' },
    { name: 'Katie Helge', role: 'Media Specialist', imgSrc: '/image2.jpg', description: 'Oversees media production and strategy.' },
];

const TeamSection: React.FC = () => {
    return (
        <section id="team" className="py-12 md:py-20 bg-gradient-to-b from-gray-800 to-blue-900">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-10 md:mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-blue-500 mb-2 md:mb-4">Our Innovative Team</h2>
                    <p className="text-base md:text-lg text-gray-300">Meet the minds behind InnovateUSA</p>
                </motion.div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            className="relative group h-80 w-full overflow-hidden rounded-lg shadow-lg"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                        >
                            <img
                                src={member.imgSrc}
                                alt={`Portrait of ${member.name}`}
                                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-4">
                                <h3 className="text-lg font-bold text-white">{member.name}</h3>
                                <p className="text-sm font-semibold text-blue-300">{member.role}</p>
                            </div>
                            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="text-center px-4">
                                    <p className="text-sm text-white mb-4 hidden md:block">{member.description}</p>
                                    <Link href={`/${member.name.toLowerCase().split(' ')[0]}`}>
                                        <a className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                                            Learn More
                                        </a>
                                    </Link>
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
