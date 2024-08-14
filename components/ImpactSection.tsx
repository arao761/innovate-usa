import React from 'react';
import { motion } from 'framer-motion';
import { FaChalkboardTeacher, FaUsers, FaPiggyBank, FaHandshake, FaChartLine, FaBullseye, FaGlobe } from 'react-icons/fa';

const impactItems = [
    { icon: <FaChalkboardTeacher size={40} className="text-blue-400 mb-4" />, title: 'Education and Awareness', description: '100+ students participated in workshops and presentations, fostering an understanding of the American Enterprise System.' },
    { icon: <FaUsers size={40} className="text-blue-400 mb-4" />, title: 'Community Engagement', description: 'Our art competition was a huge success with over 40+ submissions from elementary and middle school students, both winners awarded a gift card.' },
    { icon: <FaPiggyBank size={40} className="text-blue-400 mb-4" />, title: 'Financial Literacy', description: 'The mini-market activity within a workshop allowed students to understand how businesses work and what goes into making products for customers to buy.' },
    { icon: <FaHandshake size={40} className="text-blue-400 mb-4" />, title: 'Networking and Collaboration', description: 'Hands-on workshops entertained and engaged students, who worked with their classmates to create lemonade stand businesses.' },
    { icon: <FaChartLine size={40} className="text-blue-400 mb-4" />, title: 'Participation', description: 'Our social media platforms gained 120 followers, and active participation in workshops remained high, reflecting strong student engagement with the American Enterprise System.' },
    { icon: <FaBullseye size={40} className="text-blue-400 mb-4" />, title: 'Main Goal', description: 'InnovateUSA aimed to leave a lasting imprint on its community and students, promoting the values of the American Enterprise System through social media and workshops.' },
    { icon: <FaGlobe size={40} className="text-blue-400 mb-4" />, title: 'Impact on Community', description: 'Social media, especially Instagram and TikTok, was our biggest source of impact, informing and inspiring the community about the American Enterprise System.' },
];

const ImpactSection: React.FC = () => {
    return (
        <section id="impact" className="relative py-20 bg-gray-700 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-600 to-gray-700 opacity-25"></div>
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-5xl font-bold text-blue-400 mb-4">Impact</h2>
                    <p className="text-lg text-gray-300 mb-10">
                        Discover the profound impact of our initiatives on education, community engagement, and beyond.
                    </p>
                </motion.div>
                <div className="relative">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {impactItems.map((impact, index) => (
                            <motion.div
                                key={index}
                                className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2, duration: 0.8 }}
                            >
                                <div className="absolute top-0 left-0 w-full h-1 bg-blue-400"></div>
                                <div className="absolute top-0 right-0 w-1 h-full bg-blue-400"></div>
                                <div className="relative z-10 flex flex-col items-center text-center">
                                    {impact.icon}
                                    <h3 className="text-xl font-semibold mb-2 text-blue-400">{impact.title}</h3>
                                    <p className="text-gray-300">{impact.description}</p>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-transparent to-gray-800 opacity-50"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImpactSection;
