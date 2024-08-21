import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

const UpcomingCompetitionsButton: React.FC = () => {
    return (
        <section id="upcoming-events" className="bg-gradient-to-b from-blue-800 to-blue-900 py-12 sm:py-20">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-center"
                >
                    <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 sm:mb-8">
                        Upcoming Events
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-8 sm:mb-12">
                        Stay up-to-date with our latest competitions and workshops. Click the button below to learn more.
                    </p>
                    <Link href="/upcoming-competitions" passHref>
                        <motion.a 
                            className="inline-flex items-center bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg hover:bg-blue-500 transition-all duration-300 text-base sm:text-xl font-semibold"
                            whileHover={{ scale: 1.05 }}
                        >
                            View Upcoming Events <FaArrowRight className="ml-3" />
                        </motion.a>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default UpcomingCompetitionsButton;
