import React from 'react';
import { motion } from 'framer-motion';

const pillars = [
    { title: 'Private Enterprise', description: 'An industry or business owned by individual people or commercial companies, not by the government or an official organization.' },
    { title: 'Competition', description: 'Buyers attempt to acquire goods for lower prices while sellers attempt to sell goods for higher prices. Market equilibrium occurs when both agree.' },
    { title: 'Private Property', description: 'Allows individuals and businesses the right to own and control their property. They can buy, sell, or use their property as they see fit, without government control.' },
    { title: 'Profit Motive', description: 'The drive to earn a profit encourages businesses and individuals to create better products, work efficiently, and take risks to earn more.' },
    { title: 'Consumer Sovereignty', description: 'Consumers have the power to shape the market by choosing what to purchase. Businesses respond by producing goods and services that meet those demands.' },
];

const LearnEducationSection: React.FC = () => {
    return (
        <section id="learn-education" className="py-20 bg-gray-800">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-5xl font-bold text-blue-400 mb-8">Learn and Education</h2>
                    <p className="text-lg mb-6">
                        Explore the fundamentals of the American Enterprise System and its impact on businesses and individuals.
                    </p>
                </motion.div>
                <div className="bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 mb-12">
                    <h3 className="text-2xl font-semibold mb-4 text-blue-400">What is the American Enterprise System?</h3>
                    <p className="text-gray-300 mb-4">
                        The American Enterprise System is the U.S.A&amos;s free enterprise system, meaning that individuals, not the government, own most of our country&amos;s resources. Free enterprise also means that supply and demand determine how our resources are used.
                    </p>
                    <h3 className="text-2xl font-semibold mb-4 text-blue-400">How are businesses and the American Enterprise System related?</h3>
                    <p className="text-gray-300 mb-4">
                        The U.S&amos;s American Enterprise System promotes individual freedom, allowing individuals to choose their occupations, start businesses, and make their own economic decisions. This encourages people to pursue their passions, take risks, and reach their full potential.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                        >
                            <h3 className="text-xl font-semibold mb-2 text-blue-400">{pillar.title}</h3>
                            <p className="text-gray-300 mb-4">{pillar.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LearnEducationSection;