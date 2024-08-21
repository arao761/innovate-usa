import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

const UpcomingCompetitionsButton: React.FC = () => {
    return (
        <section id='upcoming-events' className="bg-gradient-to-b from-gray-900 to-blue-900 py-12 sm:py-20">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-center"
                >
                    <h2 className="text-3xl sm:text-5xl font-bold text-blue-400 mb-4 sm:mb-8">
                        Upcoming Events
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-8 sm:mb-12">
                        Stay up-to-date with our latest competitions and workshops. Click the button below to learn more.
                    </p>
                    <Link href="/upcoming-competitions" passHref>
                        <a className="inline-block bg-gray-800 text-blue-400 px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300 text-base sm:text-xl font-semibold border-2 border-blue-400">
                            View Upcoming Events
                        </a>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default UpcomingCompetitionsButton;