import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
    'https://placehold.co/1920x1080/1',
    'https://placehold.co/1920x1080/2',
    'https://placehold.co/1920x1080/3',
    // Add more image URLs as needed
];

const HeroSection: React.FC = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => 
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, []);

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
        </section>
    );
};

export default HeroSection;