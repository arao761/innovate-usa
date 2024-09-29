import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaCalendarAlt, FaLightbulb } from 'react-icons/fa';
import Link from 'next/link';

const CompetitionsSection: React.FC = () => {
    const events = [
        {
            title: "Entrepreneurship 101 for Middle Schoolers",
            description: "A workshop designed to introduce middle school students to the basics of entrepreneurship and business thinking.",
            date: "August 30th, 2024",
            highlights: [
                "Interactive presentations on business fundamentals",
                "Hands-on entrepreneurship activities"
            ]
        },
        {
            title: "Shark Tank-style Pitch Competition",
            description: "An exciting pitch competition for middle and high school students to present their innovative ideas to a panel of judges.",
            date: "September 1st, 2024",
            highlights: [
                "Opportunity to pitch business ideas",
                "Feedback from experienced entrepreneurs"
            ]
        },
        {
            title: "Art Competition",
            description: "Our team brought awareness to the American Enterprise System by organizing an art competition for local Elementary and Middle schools. The competition encouraged creativity and business skills among students, who were tasked with designing a lemonade stand business.",
            date: "Fall 2023",
            highlights: [
                "40+ submissions received",
                "Winners awarded $25 Amazon gift cards"
            ]
        }
    ];

    return (
        <section id="competitions" className="py-12 sm:py-20 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-10 sm:mb-16"
                >
                    <h2 className="text-3xl sm:text-5xl font-bold text-blue-400 mb-4 sm:mb-8">Competitions and Workshops</h2>
                    <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                    Explore our past competitions and workshops that showcased skills and creativity. Each event was designed to challenge and inspire participants, fostering innovation and entrepreneurial spirit.                    </p>
                </motion.div>
                <motion.div
                    className="max-w-4xl mx-auto space-y-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {events.map((event, index) => (
                        <div key={index} className="bg-gray-800 p-6 sm:p-10 rounded-3xl shadow-2xl hover:shadow-yellow-400/20 transition-all duration-300 border border-yellow-400/20">
                            <div className="flex flex-col sm:flex-row items-center sm:items-start mb-4 sm:mb-6">
                                <FaTrophy className="text-3xl sm:text-4xl text-yellow-400 mb-2 sm:mb-0 sm:mr-4" />
                                <div>
                                    <h3 className="text-2xl sm:text-3xl font-bold text-blue-400 text-center sm:text-left mb-2">{event.title}</h3>
                                    <span className="text-gray-400 flex items-center justify-center sm:justify-start text-sm sm:text-base">
                                        <FaCalendarAlt className="mr-2" />
                                        {event.date}
                                    </span>
                                </div>
                            </div>
                            <p className="text-gray-300 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed">
                                {event.description}
                            </p>
                            <ul className="list-none space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                                {event.highlights.map((highlight, hIndex) => (
                                    <li key={hIndex} className="flex items-start">
                                        <FaLightbulb className="text-yellow-400 mt-1 mr-3 flex-shrink-0" />
                                        <span className="text-gray-300 text-sm sm:text-base">{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </motion.div>
                <div className="text-center mt-10">
                    <Link href="/" passHref>
                        <a className="bg-gray-800 text-blue-400 px-6 py-3 rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300 text-lg font-semibold border-2 border-blue-400">
                            Back to Home
                        </a>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CompetitionsSection;