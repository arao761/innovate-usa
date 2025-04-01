import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTrophy, FaCalendarAlt, FaLightbulb, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const CompetitionsSection: React.FC = () => {
    const events = [
        {
            title: "Art Competition",
            description: "Our team brought awareness to the American Enterprise System by organizing an art competition for local Elementary and Middle schools. The competition encouraged creativity and business skills among students, who were tasked with designing a lemonade stand business.",
            date: "August 6th",
            highlights: [
                "40+ submissions received",
                "Elementary school winner: Arnav Kashyap from Cedar Lane",
                "Middle school winner: Saketaram from Trailside",
                "Winners awarded $25 Amazon gift cards"
            ]
        },
        {
            title: "Budgeting and Finance Workshop with Special Education Students",
            description: "A tailored workshop focused on teaching budgeting and financial literacy to special education students.",
            date: "August 18th",
            highlights: [
                "Interactive budgeting exercises",
                "Personal finance management techniques",
                "Engaging activities for 20 participants"
            ]
        },
        {
            title: "Education About American Enterprise Basics",
            description: "An informative session educating students on the fundamentals of the American enterprise system.",
            date: "August 26th",
            highlights: [
                "In-depth presentations on enterprise concepts",
                "Engaging discussions with 39 students",
                "Practical examples of American businesses"
            ]
        },
        {
            title: "Applying Business to Your Life",
            description: "A workshop teaching students how to incorporate business strategies into their personal lives.",
            date: "September 7th",
            highlights: [
                "Real-life applications of business concepts",
                "Interactive sessions with 15 students",
                "Personal development through business thinking"
            ]
        },
        {
            title: "Entrepreneurship 101 for Middle Schoolers",
            description: "A workshop designed to introduce middle school students to the basics of entrepreneurship and business thinking.",
            date: "September 24th",
            highlights: [
                "Interactive presentations on business fundamentals",
                "Hands-on entrepreneurship activities",
                "12 participants engaged"
            ]
        },
        {
            title: "Shark Tank-style Pitch Competition",
            description: "An exciting pitch competition for middle and high school students to present their innovative ideas to a panel of judges.",
            date: "October 11th",
            highlights: [
                "Opportunity to pitch business ideas",
                "Feedback from experienced entrepreneurs",
                "25+ attendees"
            ]
        },
        {
            title: "Starting from a Young Age",
            description: "A workshop focused on teaching elementary schoolers how to create meaningful businesses from a young age.",
            date: "October 26th",
            highlights: [
                "Inspiring young entrepreneurial minds",
                "18 elementary schoolers participated",
                "Foundational business concepts explored"
            ]
        },
        {
            title: "How to Create a Business 101",
            description: "A comprehensive workshop on business creation with insights from Business Ridge Designs.",
            date: "November 4th",
            highlights: [
                "30+ attendees",
                "Special guest speakers from Business Ridge Designs",
                "In-depth business creation strategies"
            ]
        },
        {
            title: "American Enterprise Day Workshop",
            description: "A collaborative workshop with SB FBLA celebrating American Enterprise Day and educating future business leaders.",
            date: "November 15th",
            highlights: [
                "Collaboration with SB FBLA",
                "60+ participants",
                "Comprehensive insights into American enterprise"
            ]
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? events.length - 3 : prevIndex - 3));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 3 >= events.length ? 0 : prevIndex + 3));
    };

    return (
        <section id="competitions" className="py-16 sm:py-24 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 relative">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12 sm:mb-20"
                >
                    <h2 className="text-4xl sm:text-6xl font-bold text-blue-400 mb-6 sm:mb-10">Past Competitions and Workshops</h2>
                    <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
                        Explore our past competitions and workshops that showcased skills and creativity. Each event was designed to challenge and inspire participants, fostering innovation and entrepreneurial spirit.
                    </p>
                </motion.div>
                
                <div className="relative">
                    <div className="absolute -top-12 w-full flex justify-between items-center z-10">
                        <button 
                            onClick={handlePrev} 
                            className="text-yellow-400 hover:text-yellow-500 transition"
                            aria-label="Previous"
                        >
                            <FaChevronLeft size={30} />
                        </button>
                        <button 
                            onClick={handleNext} 
                            className="text-yellow-400 hover:text-yellow-500 transition"
                            aria-label="Next"
                        >
                            <FaChevronRight size={30} />
                        </button>
                    </div>
                    <motion.div
                        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {events.slice(currentIndex, currentIndex + 3).map((event, index) => (
                            <div
                                key={index}
                                className="bg-gray-800 p-8 sm:p-10 rounded-3xl shadow-2xl hover:shadow-yellow-400/20 transition-all duration-300 border border-yellow-400/20"
                            >
                                <div className="flex items-center mb-6">
                                    <FaTrophy size={40} className="text-yellow-400 mr-4 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-2xl font-bold text-blue-400 mb-2">
                                            {event.title}
                                        </h3>
                                        <span className="text-gray-400 flex items-center text-base">
                                            <FaCalendarAlt size={16} className="mr-2 flex-shrink-0" />
                                            {event.date}
                                        </span>
                                    </div>
                                </div>
                                <p className="text-gray-300 mb-6 text-base leading-relaxed">
                                    {event.description}
                                </p>
                                <ul className="list-none space-y-3">
                                    {event.highlights.map((highlight, hIndex) => (
                                        <li key={hIndex} className="flex items-start">
                                            <FaLightbulb size={20} className="text-yellow-400 mt-1 mr-3 flex-shrink-0" />
                                            <span className="text-gray-300 text-base">{highlight}</span>
                                        </li>   
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CompetitionsSection;