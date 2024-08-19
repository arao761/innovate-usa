import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const images = [
    '/31473C17-B77B-49A8-BF3D-50638977AEE9.jpeg',
    '/DSC_0339.jpeg',
    '/IMG_7961.jpeg',
    '/IMG_8962.jpeg',
    '/IMG_8964.jpeg',
    '/IMG_8965.jpeg'
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
        <section className="relative w-full h-screen overflow-hidden">
            <AnimatePresence initial={false}>
                <motion.div
                    key={currentImageIndex}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ 
                        backgroundImage: `url(${images[currentImageIndex]})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center center',
                        backgroundColor: 'black'
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                />
            </AnimatePresence>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 md:px-6">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-3xl sm:text-4xl md:text-6xl font-bold mb-2 md:mb-4"
                >
                    InnovateUSA
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="text-base sm:text-lg md:text-2xl mb-4 md:mb-6"
                >
                    Empowering students and communities through education, creativity, and enterprise
                </motion.p>
            </div>
            <button 
                aria-label="Previous image"
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-300 z-20"
                onClick={goToPrevious}
            >
                <FaChevronLeft size={16} />
            </button>
            <button 
                aria-label="Next image"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-300 z-20"
                onClick={goToNext}
            >
                <FaChevronRight size={16}/>
            </button>
        </section>
    );
};

export default HeroSection;