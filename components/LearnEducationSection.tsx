import React from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaHandshake, FaBalanceScale, FaChartLine, FaUsers } from 'react-icons/fa';

const pillars = [
    { title: 'Private Enterprise', description: 'An industry or business owned by individual people or commercial companies, not by the government or an official organization.', icon: FaHandshake },
    { title: 'Competition', description: 'Buyers attempt to acquire goods for lower prices while sellers attempt to sell goods for higher prices. Market equilibrium occurs when both agree.', icon: FaBalanceScale },
    { title: 'Private Property', description: 'Allows individuals and businesses the right to own and control their property. They can buy, sell, or use their property as they see fit, without government control.', icon: FaLightbulb },
    { title: 'Profit Motive', description: 'The drive to earn a profit encourages businesses and individuals to create better products, work efficiently, and take risks to earn more.', icon: FaChartLine },
    { title: 'Consumer Sovereignty', description: 'Consumers have the power to shape the market by choosing what to purchase. Businesses respond by producing goods and services that meet those demands.', icon: FaUsers },
];

const LearnEducationSection: React.FC = () => {
    return (
        <section id="learn-education" className="py-12 sm:py-20 bg-gradient-to-b from-gray-900 to-blue-900">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-10 sm:mb-16"
                >
                    <h2 className="text-4xl sm:text-6xl font-bold text-blue-400 mb-4 sm:mb-8">Learn and Education</h2>
                    <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                        Explore the fundamentals of the American Enterprise System and its impact on businesses and individuals.
                    </p>
                </motion.div>

                <motion.div 
                    className="bg-gray-800 p-6 sm:p-10 rounded-3xl shadow-2xl hover:shadow-blue-400/20 transition-all duration-300 border border-blue-400/20 mb-10 sm:mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-blue-400">American Enterprise System</h3>
                    <div className="space-y-4 sm:space-y-6">
                        <div>
                            <h4 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-200">What is it?</h4>
                            <p className="text-gray-300 text-base sm:text-lg">
                                The American Enterprise System is the U.S.A free enterprise system, meaning that individuals, not the government, own most of our country&apos;s resources. Free enterprise also means that supply and demand determine how our resources are used.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-200">How does it relate to businesses?</h4>
                            <p className="text-gray-300 text-base sm:text-lg">
                                The U.S&apos;s American Enterprise System promotes individual freedom, allowing individuals to choose their occupations, start businesses, and make their own economic decisions. This encourages people to pursue their passions, take risks, and reach their full potential.
                            </p>
                        </div>
                    </div>
                </motion.div>

                <h3 className="text-3xl sm:text-4xl font-bold text-blue-400 mb-6 sm:mb-10 text-center">Five Pillars of the American Enterprise System</h3>
                <div className="grid grid-cols-1 gap-6 sm:gap-8">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-blue-400/20 transition-all duration-300 border border-blue-400/20 flex flex-col items-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                        >
                            <pillar.icon className="text-4xl sm:text-5xl text-blue-400 mb-3 sm:mb-4" />
                            <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-blue-400 text-center">{pillar.title}</h3>
                            <p className="text-gray-300 text-center text-sm sm:text-base">{pillar.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LearnEducationSection;