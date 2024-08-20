import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaLightbulb, FaHandshake } from 'react-icons/fa';

const AboutSection: React.FC = () => {
    const features = [
        { icon: FaRocket, title: 'Inform', description: 'Provide comprehensive knowledge of the American Enterprise System' },
        { icon: FaLightbulb, title: 'Inspire', description: 'Foster innovative thinking and entrepreneurial spirit' },
        { icon: FaHandshake, title: 'Implement', description: 'Apply business concepts for future success' },
    ];

    return (
        <section id="about" className="py-12 md:py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-10 md:mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mb-4 md:mb-6">About InnovateUSA</h2>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Our mission is to educate and empower the community with comprehensive knowledge of the American Enterprise System and business concepts. We seek to inform, inspire, and implement these ideas, fostering a deep understanding that lays the groundwork for future success.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg p-6 md:p-8 rounded-xl shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                        >
                            <feature.icon className="text-4xl md:text-5xl text-blue-400 mb-3 md:mb-4" />
                            <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 md:mb-3">{feature.title}</h3>
                            <p className="text-sm md:text-base text-gray-300">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutSection;