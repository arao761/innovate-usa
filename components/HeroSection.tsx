import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const images = [
    'https://media.licdn.com/dms/image/D4E03AQF8wnLbVprK5A/profile-displayphoto-shrink_400_400/0/1713407413055?e=1729123200&v=beta&t=9hE0GRLmBC7m_6u07f8b5qKfeHZQLihHMgOi0KcsHbw',
    'https://media.licdn.com/dms/image/D4E03AQEtwmPBQtNGWA/profile-displayphoto-shrink_400_400/0/1711079713525?e=1729123200&v=beta&t=5B2hPSCos-jhaAeqckqteO6pYUznoP0i-wrhi7QdRrw',
];

const HeroSection: React.FC = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => 
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const goToPrevious = () => {
        setCurrentImageIndex((prevIndex) => 
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentImageIndex((prevIndex) => 
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <section className="relative h-screen overflow-hidden">
            <AnimatePresence initial={false}>
                <motion.div
                    key={currentImageIndex}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                />
            </AnimatePresence>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-6xl font-bold mb-4"
                >
                    InnovateUSA
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="text-2xl mb-6"
                >
                    Empowering students and communities through education, creativity, and enterprise
                </motion.p>
            </div>
            <button 
    aria-label="Previous image"
    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-300"
    onClick={goToPrevious}
>
    <FaChevronLeft size={24} />
</button>
<button 
    aria-label="Next image"
    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-300"
    onClick={goToNext}
>
    <FaChevronRight size={24} />
</button>
        </section>
    );
};

export default HeroSection;