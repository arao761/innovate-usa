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
        <section className="relative h-screen overflow-hidden">
            <AnimatePresence initial={false}>
                <motion.div
                    key={currentImageIndex}
                    className="absolute inset-0 bg-cover bg-center hero-image"
                    style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                />
            </AnimatePresence>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 md:px-6">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Our Site</h1>
                <p className="text-xl md:text-2xl mb-8">Discover amazing opportunities with us</p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                    Learn More
                </button>
            </div>
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
                <FaChevronRight size={20}/>
            </button>
            <style jsx>{`
                .hero-image {
                    background-size: cover;
                    background-position: center;
                }
                @media (max-width: 640px) {
                    .hero-image {
                        background-size: contain;
                        background-repeat: no-repeat;
                        background-position: center center;
                        background-color: black;
                    }
                }
            `}</style>
        </section>
    );
};

export default HeroSection;