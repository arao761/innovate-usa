import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SchoolCollaborationSection: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const collaborationDetails = {
        title: "School Collaboration",
        description: "We actively engage with local schools, bringing entrepreneurial knowledge directly to students. We have collaborated with 5 elementary schools and 3 middle schools. Our team creates tailored, age-appropriate workshops that inspire young minds and introduce them to the world of business and innovation.",
        galleryImages: [
            "/sclimage1.jpg",
            "/sclimage2.jpg"
        ]
    };

    const handleImageClick = (image: string) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-900 to-blue-900">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12 sm:mb-20"
                >
                    <h2 className="text-4xl sm:text-6xl font-bold text-blue-400 mb-4">
                        {collaborationDetails.title}
                    </h2>
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