import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaCalendarAlt, FaLightbulb } from 'react-icons/fa';

const CompetitionsSection: React.FC = () => {
    const events = [
        {
            title: "Art Competition",
            description: "Our team brought awareness to the American Enterprise System by organizing an art competition for local Elementary and Middle schools. The competition encouraged creativity and business skills among students, who were tasked with designing a lemonade stand business.",
            date: "Fall 2023",
            highlights: [
                "40+ submissions received",
                "Winners awarded $25 Amazon gift cards"
            ]
        },
        {
            title: "Budgeting and Finance Workshop with Special Education Students",
            description: "A tailored workshop focused on teaching budgeting and financial literacy to special education students.",
            date: "March 2024",
            highlights: [
                "Interactive budgeting exercises",
                "Personal finance management techniques",
                "Engaging activities for 20 participants"
            ]
        },
        {
            title: "Education About American Enterprise Basics",
            description: "An informative session educating students on the fundamentals of the American enterprise system.",
            date: "April 2024",
            highlights: [
                "In-depth presentations on enterprise concepts",
                "Engaging discussions with 39 students",
                "Practical examples of American businesses"
            ]
        },
        {
            title: "Applying Business to Your Life",
            description: "A workshop teaching students how to incorporate business strategies into their personal lives.",
            date: "June 2024",
            highlights: [
                "Real-life applications of business concepts",
                "Interactive sessions with 20 students",
                "Personal development through business thinking"
            ]
        },
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
                "Feedback from experienced entrepreneurs",
                "25+ attendees"
            ]
        }
    ];

    return (
        <section id="competitions" className="py-16 sm:py-24 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12 sm:mb-20"
                >
                    <h2 className="text-4xl sm:text-6xl font-bold text-blue-400 mb-6 sm:mb-10">Past Competitions and Workshops</h2>
                    <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
                        Explore our past competitions and workshops that showcased skills and creativity. Each event was designed to challenge and inspire participants, fostering innovation and entrepreneurial spirit.
                    </p>
                </motion.div>
                <motion.div
                    className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {events.map((event, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 p-8 sm:p-10 rounded-3xl shadow-2xl hover:shadow-yellow-400/20 transition-all duration-300 border border-yellow-400/20"
                        >
                            <div className="flex items-center mb-6">
                                <FaTrophy className="text-4xl text-yellow-400 mr-4" />
                                <div>
                                    <h3 className="text-2xl font-bold text-blue-400 mb-2">
                                        {event.title}
                                    </h3>
                                    <span className="text-gray-400 flex items-center text-base">
                                        <FaCalendarAlt className="mr-2" />
                                        {event.date}
                                    </span>
                                </div>
                            </div>
                            <p className="text-gray-300 mb-6 text-base leading-relaxed">
                                {event.description}
                            </p>
                            <ul className="list-none space-y-3">
                                {event.highlights.map((highlight, hIndex) => (
                                    <li key={hIndex} className="flex items-start">
                                        <FaLightbulb className="text-yellow-400 mt-1 mr-3 flex-shrink-0" />
                                        <span className="text-gray-300 text-base">{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default CompetitionsSection;
