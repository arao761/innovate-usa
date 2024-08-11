import React from 'react';
import { motion } from 'framer-motion';

const CompetitionsSection: React.FC = () => {
    return (
        <section id="competitions" className="py-20 bg-gray-800">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-5xl font-bold text-blue-400 mb-8">Competitions</h2>
                    <p className="text-lg mb-6">
                        Participate in our exciting competitions to showcase your skills and creativity. Each competition is designed to challenge and inspire you.
                    </p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    <motion.div
                        className="bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-xl font-semibold mb-2 text-blue-400">Workshop: Presentation and Activities</h3>
                        <p className="text-gray-300 mb-4">
                            Students learned about the American Enterprise System through interactive presentations and activities, including a lemonade stand simulation and a mini-market exercise that taught budgeting and economic principles.
                        </p>
                        <a href="#" className="text-blue-400 hover:underline">Explore More</a>
                    </motion.div>
                </div>
            </div>
            <div className="text-center my-12">
                <a href="#" className="bg-blue-400 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-500 transition-colors duration-300">
                    Upcoming Competitions and Events
                </a>
            </div>
        </section>
    );
};

export default CompetitionsSection;