import React from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaChalkboardTeacher, FaArrowRight } from 'react-icons/fa';

const CompetitionsSection: React.FC = () => {
    return (
        <section id="competitions" className="py-12 sm:py-20 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-10 sm:mb-16"
                >
                    <h2 className="text-3xl sm:text-5xl font-bold text-blue-400 mb-4 sm:mb-8">Competitions</h2>
                    <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                        Participate in our exciting competitions to showcase your skills and creativity. Each competition is designed to challenge and inspire you.
                    </p>
                </motion.div>
                <motion.div
                    className="max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="bg-gray-800 p-6 sm:p-10 rounded-3xl shadow-2xl hover:shadow-yellow-400/20 transition-all duration-300 border border-yellow-400/20">
                        <div className="flex flex-col sm:flex-row items-center sm:items-start mb-4 sm:mb-6">
                            <FaChalkboardTeacher className="text-3xl sm:text-4xl text-yellow-400 mb-2 sm:mb-0 sm:mr-4" />
                            <h3 className="text-2xl sm:text-3xl font-bold text-blue-400 text-center sm:text-left">Workshop: Presentation and Activities</h3>
                        </div>
                        <p className="text-gray-300 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed">
                            Students learned about the American Enterprise System through interactive presentations and activities, including:
                        </p>
                        <ul className="list-none space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                            <li className="flex items-start">
                                <FaLightbulb className="text-yellow-400 mt-1 mr-3 flex-shrink-0" />
                                <span className="text-gray-300 text-sm sm:text-base">Lemonade stand simulation</span>
                            </li>
                            <li className="flex items-start">
                                <FaLightbulb className="text-yellow-400 mt-1 mr-3 flex-shrink-0" />
                                <span className="text-gray-300 text-sm sm:text-base">Mini-market exercise teaching budgeting and economic principles</span>
                            </li>
                        </ul>
                    </div>
                </motion.div>
            </div>
            <motion.div 
                className="text-center mt-10 sm:mt-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                <a href="#" className="inline-block bg-gray-800 text-blue-400 px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300 text-base sm:text-xl font-semibold border-2 border-blue-400">
                    Upcoming Competitions and Events
                </a>
            </motion.div>
        </section>
    );
};

export default CompetitionsSection;