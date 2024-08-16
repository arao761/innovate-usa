import React from 'react';
import { motion } from 'framer-motion';
import { FaPaintBrush, FaCalendarAlt } from 'react-icons/fa';

const EventsSection: React.FC = () => {
    return (
        <section id="events" className="py-20 bg-gradient-to-b from-gray-900 to-blue-900">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl font-bold text-blue-400 mb-8">Upcoming Events</h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Join us for our upcoming events to stay connected, learn, and grow. Each event is an opportunity to engage with industry experts and fellow innovators.
                    </p>
                </motion.div>
                <motion.div
                    className="max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="bg-gray-800 p-10 rounded-2xl shadow-2xl hover:shadow-blue-400/20 transition-all duration-300 border border-blue-400/20">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-3xl font-bold text-blue-400 flex items-center">
                                <FaPaintBrush className="mr-3" />
                                Art Competition
                            </h3>
                            <span className="text-gray-400 flex items-center">
                                <FaCalendarAlt className="mr-2" />
                                Fall 2023
                            </span>
                        </div>
                        <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                            Our team brought awareness to the American Enterprise System by organizing an art competition for local Elementary and Middle schools. The competition encouraged creativity and business skills among students, who were tasked with designing a lemonade stand business.
                        </p>
                        <div className="bg-blue-900/30 p-4 rounded-lg mb-8">
                            <p className="text-blue-300 font-semibold">
                                🏆 Winners were awarded $25 Amazon gift cards!
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default EventsSection;