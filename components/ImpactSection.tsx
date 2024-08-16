import React from 'react';
import { motion } from 'framer-motion';
import { FaChalkboardTeacher, FaUsers, FaPiggyBank, FaHandshake, FaChartLine, FaBullseye, FaGlobe } from 'react-icons/fa';

const impactItems = [
    { icon: FaChalkboardTeacher, title: 'Education and Awareness', description: '100+ students participated in workshops and presentations, fostering an understanding of the American Enterprise System.' },
    { icon: FaUsers, title: 'Community Engagement', description: 'Our art competition was a huge success with over 40+ submissions from elementary and middle school students, both winners awarded a gift card.' },
    { icon: FaPiggyBank, title: 'Financial Literacy', description: 'The mini-market activity within a workshop allowed students to understand how businesses work and what goes into making products for customers to buy.' },
    { icon: FaHandshake, title: 'Networking and Collaboration', description: 'Hands-on workshops entertained and engaged students, who worked with their classmates to create lemonade stand businesses.' },
    { icon: FaChartLine, title: 'Participation', description: 'Our social media platforms gained 120 followers, and active participation in workshops remained high, reflecting strong student engagement with the American Enterprise System.' },
    { icon: FaBullseye, title: 'Main Goal', description: 'InnovateUSA aimed to leave a lasting imprint on its community and students, promoting the values of the American Enterprise System through social media and workshops.' },
    { icon: FaGlobe, title: 'Impact on Community', description: 'Social media, especially Instagram and TikTok, was our biggest source of impact, informing and inspiring the community about the American Enterprise System.' },
];

const ImpactSection: React.FC = () => {
    return (
        <section id="impact" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-6xl font-bold text-white mb-4">Our Impact</h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Discover the profound impact of our initiatives on education, community engagement, and beyond.
                    </p>
                </motion.div>
                <div className="relative">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {impactItems.map((impact, index) => (
                            <motion.div
                                key={index}
                                className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                            >
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <impact.icon size={40} className="text-white" />
                                    </div>
                                    <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300">{impact.title}</h3>
                                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">{impact.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImpactSection;