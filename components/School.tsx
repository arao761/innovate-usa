import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSchool } from 'react-icons/fa';

const SchoolCollaborationSection: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const collaborationDetails = {
        title: "School Collaboration",
        description: "We actively engage with local schools, bringing entrepreneurial knowledge directly to students. Our team creates tailored, age-appropriate workshops that inspire young minds and introduce them to the world of business and innovation.",
        galleryImages: [
            "/api/placeholder/500/400",
            "/api/placeholder/500/400"
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
                    <div className="flex justify-center items-center mb-6">
                        <FaSchool size={50} className="text-yellow-400 mr-4" />
                        <h2 className="text-4xl sm:text-6xl font-bold text-blue-400">
                            {collaborationDetails.title}
                        </h2>
                    </div>
                    <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
                        {collaborationDetails.description}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center space-x-6"
                >
                    {collaborationDetails.galleryImages.map((image, index) => (
                        <div 
                            key={index} 
                            className="w-1/2 max-w-xl cursor-pointer hover:opacity-75 transition-opacity"
                            onClick={() => handleImageClick(image)}
                        >
                            <img 
                                src={image} 
                                alt={`School collaboration moment ${index + 1}`} 
                                className="w-full h-96 object-cover rounded-2xl shadow-2xl border-4 border-yellow-400/20"
                            />
                        </div>
                    ))}
                </motion.div>
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