import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSchool, FaImage } from 'react-icons/fa';

const SchoolCollaborationSection: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const collaborationDetails = {
        title: "School Collaboration Initiative",
        description: "Our mission extends beyond workshops - we actively engage with local schools to inspire and educate students about entrepreneurship and business concepts.",
        approaches: [
            "Age-Tailored Presentations",
            "Interactive Learning Experiences",
            "Hands-On Business Skill Development"
        ],
        schoolVisits: [
            {
                schoolLevel: "Elementary Schools",
                approach: "Transform complex business concepts into engaging, age-appropriate activities that spark curiosity and creativity.",
                activities: [
                    "Lemonade Stand Simulations",
                    "Basic Problem-Solving Challenges",
                    "Creative Thinking Workshops"
                ]
            },
            {
                schoolLevel: "Middle Schools",
                approach: "Introduce foundational entrepreneurship skills through interactive and dynamic presentations.",
                activities: [
                    "Mock Business Pitch Sessions",
                    "Team-Based Innovation Challenges",
                    "Real-World Business Scenario Explorations"
                ]
            },
            {
                schoolLevel: "High Schools",
                approach: "Provide in-depth insights into business strategy, innovation, and career development.",
                activities: [
                    "Advanced Entrepreneurship Workshops",
                    "Mentorship and Career Guidance",
                    "Startup Ideation and Development"
                ]
            }
        ],
        galleryImages: [
            "/api/placeholder/400/300",
            "/api/placeholder/400/300",
            "/api/placeholder/400/300",
            "/api/placeholder/400/300"
        ]
    };

    const handleImageClick = (image: string) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <section className="py-16 sm:py-24 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12 sm:mb-20"
                >
                    <h2 className="text-4xl sm:text-6xl font-bold text-blue-400 mb-6 sm:mb-10">
                        School Collaboration
                    </h2>
                    <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
                        {collaborationDetails.description}
                    </p>
                </motion.div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* School Visit Approaches */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-gray-800 p-8 sm:p-10 rounded-3xl shadow-2xl hover:shadow-yellow-400/20 transition-all duration-300 border border-yellow-400/20"
                    >
                        <div className="flex items-center mb-6">
                            <FaSchool size={40} className="text-yellow-400 mr-4 flex-shrink-0" />
                            <h3 className="text-2xl font-bold text-blue-400">
                                Our Approach
                            </h3>
                        </div>
                        <ul className="space-y-4 text-gray-300">
                            {collaborationDetails.schoolVisits.map((level, index) => (
                                <li key={index} className="bg-gray-700 p-4 rounded-xl">
                                    <h4 className="text-xl font-semibold text-blue-300 mb-2">
                                        {level.schoolLevel}
                                    </h4>
                                    <p className="text-gray-400 mb-3">{level.approach}</p>
                                    <div className="grid grid-cols-2 gap-2">
                                        {level.activities.map((activity, actIndex) => (
                                            <span 
                                                key={actIndex} 
                                                className="bg-blue-900/50 text-blue-200 px-3 py-1 rounded-full text-sm"
                                            >
                                                {activity}
                                            </span>
                                        ))}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Image Gallery */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-gray-800 p-8 sm:p-10 rounded-3xl shadow-2xl hover:shadow-yellow-400/20 transition-all duration-300 border border-yellow-400/20"
                    >
                        <div className="flex items-center mb-6">
                            <FaImage size={40} className="text-yellow-400 mr-4 flex-shrink-0" />
                            <h3 className="text-2xl font-bold text-blue-400">
                                Our Moments
                            </h3>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {collaborationDetails.galleryImages.map((image, index) => (
                                <div 
                                    key={index} 
                                    className="cursor-pointer hover:opacity-75 transition-opacity"
                                    onClick={() => handleImageClick(image)}
                                >
                                    <img 
                                        src={image} 
                                        alt={`School collaboration moment ${index + 1}`} 
                                        className="w-full h-40 object-cover rounded-xl"
                                    />
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Image Modal */}
            {selectedImage && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
                    onClick={closeModal}
                >
                    <div className="max-w-4xl max-h-[90vh] overflow-hidden">
                        <img 
                            src={selectedImage} 
                            alt="Enlarged school collaboration moment" 
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>
            )}
        </section>
    );
};

export default SchoolCollaborationSection;