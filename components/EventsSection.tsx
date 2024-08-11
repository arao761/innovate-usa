import React from 'react';
import { motion } from 'framer-motion';

const EventsSection: React.FC = () => {
    return (
        <section id="events" className="py-20 bg-gray-900">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-5xl font-bold text-blue-400 mb-8">Upcoming Events</h2>
                    <p className="text-lg mb-6">
                        Join us for our upcoming events to stay connected, learn, and grow. Each event is an opportunity to engage with industry experts and fellow innovators.
                    </p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    <motion.div
                        className="bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-xl font-semibold mb-2 text-blue-400">Art Competition</h3>
                        <p className="text-gray-300 mb-4">
                            In the fall of 2023, our team brought awareness to the American Enterprise System by organizing an art competition for local Elementary and Middle schools. The competition encouraged creativity and business skills among students, who were tasked with designing a lemonade stand business. Winners were awarded $25 Amazon gift cards.
                        </p>
                        <a href="#" className="text-blue-400 hover:underline">Learn More</a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default EventsSection;