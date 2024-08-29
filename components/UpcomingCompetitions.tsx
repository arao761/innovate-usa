import React from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaChalkboardTeacher } from 'react-icons/fa';
import Link from 'next/link';

const UpcomingCompetitionsButton: React.FC = () => {
    const events = [
        {
            title: "Entrepreneurship 101",
            description: "For middle schoolers",
            icon: FaLightbulb,
            color: "from-blue-400 to-blue-600"
        },
        {
            title: "Shark a Pitch Competition",
            description: "For middle and high school students",
            icon: FaChalkboardTeacher,
            color: "from-blue-600 to-blue-800"
        }
    ];

    return (
        <section id="upcoming-events" className="py-12 sm:py-20 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <h2 className="text-3xl sm:text-5xl font-extrabold text-blue-400 mb-4 sm:mb-8">
                        Upcoming Events
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        {events.map((event, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
                                className={`bg-gradient-to-br ${event.color} rounded-lg p-6 shadow-lg`}
                            >
                                <event.icon className="text-4xl text-white mb-4 mx-auto" />
                                <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                                <p className="text-gray-200">{event.description}</p>
                            </motion.div>
                        ))}
                    </div>
                    <Link href="/upcoming-competitions" passHref>
                        <motion.a 
                            className="inline-flex items-center bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg hover:bg-blue-500 transition-all duration-300 text-base sm:text-xl font-semibold"
                            whileHover={{ scale: 1.05 }}
                        >
                            Learn More
                        </motion.a>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default UpcomingCompetitionsButton;