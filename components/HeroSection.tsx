import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const images = [
    '/improvedinnovatelogo.jpg',
    '/IMG_7961.jpeg',
    '/DSC_0339.jpeg',
];

const HeroSection: React.FC = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const goToPrevious = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImageIndex((prevIndex) => 
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImageIndex((prevIndex) => 
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <section className="relative w-full h-screen">
            <AnimatePresence initial={false}>
                <motion.div
                    key={currentImageIndex}
                    className="absolute inset-0 w-full h-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    <div 
                        className="w-full h-full bg-no-repeat bg-center bg-cover"
                        style={{ 
                            backgroundImage: `url(${images[currentImageIndex]})`,
                            backgroundSize: 'contain',
                            backgroundColor: 'black'
                        }}
                    />
                </motion.div>
            </AnimatePresence>
            <button 
                aria-label="Previous image"
                className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 md:p-2 rounded-full hover:bg-opacity-75 transition-all duration-300 z-20"
                onClick={goToPrevious}
            >
                <FaChevronLeft size={20} />
            </button>
            <button 
                aria-label="Next image"
                className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 md:p-2 rounded-full hover:bg-opacity-75 transition-all duration-300 z-20"
                onClick={goToNext}
            >
                <FaChevronRight size={20} />
            </button>
        </section>
    );
};

export default HeroSection;