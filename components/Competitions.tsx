import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaCalendarAlt } from 'react-icons/fa';
import Link from 'next/link';

const CompetitionsSection: React.FC = () => {
    const events = [
        {
            title: "Entrepreneurship 101 for Middle Schoolers",
            description: "A workshop designed to introduce middle school students to the basics of entrepreneurship and business thinking.",
            date: "August 30th, 2024"
        },
        {
            title: "Shark Tank-style Pitch Competition",
            description: "An exciting pitch competition for middle and high school students to present their innovative ideas to a panel of judges.",
            date: "September 1st, 2024"
        },
        {
            title: "Art Competition",
            description: "Our team brought awareness to the American Enterprise System by organizing an art competition for local Elementary and Middle schools. The competition encouraged creativity and business skills among students, who were tasked with designing a lemonade stand business. At the end of the competition, we had 40+ submissions!!",
            date: "Fall 2023",
            highlight: "🏆 Winners were awarded $25 Amazon gift cards!"
        }
    ];

    return (
        <section id="competitions" className="py-12 sm:py-20 bg-gradient-to-b from-gray-900 to-blue-900">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-10 sm:mb-16"
                >
                    <h2 className="text-3xl sm:text-5xl font-bold text-blue-400 mb-4 sm:mb-8">Competitions and Workshops</h2>
                    <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
                        Join us for our competitions to stay connected, learn, and grow. Each event is an opportunity to engage with industry experts and fellow innovators.
                    </p>
                </motion.div>
                <motion.div
                    className="max-w-4xl mx-auto"   
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {events.map((event, index) => (
                        <div key={index} className="bg-gray-800 p-6 sm:p-10 rounded-2xl shadow-2xl hover:shadow-blue-400/20 transition-all duration-300 border border-blue-400/20 mb-8">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6">
                                <h3 className="text-2xl sm:text-3xl font-bold text-yellow-400 flex items-center mb-2 sm:mb-0">
                                    <FaTrophy className="mr-2 sm:mr-3" />
                                    {event.title}
                                </h3>
                                <span className="text-gray-400 flex items-center text-sm sm:text-base">
                                    <FaCalendarAlt className="mr-2" />
                                    {event.date}
                                </span>
                            </div>
                            <p className="text-gray-300 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed">
                                {event.description}
                            </p>
                            {event.highlight && (
                                <div className="bg-blue-900/30 p-4 rounded-lg">
                                    <p className="text-blue-300 font-semibold text-sm sm:text-base">
                                        {event.highlight}
                                    </p>
                                </div>
                            )}
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