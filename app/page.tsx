'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const InnovateUSA: React.FC = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="font-roboto text-gray-100 bg-black">
            {/* Header */}
            <header className="bg-blue-900 text-white py-6 sticky top-0 z-50 shadow-md">
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <h1 className="text-4xl font-bold">InnovateUSA</h1>
                    <nav className="hidden md:flex">
                        <ul className="flex space-x-8">
                            <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
                            <li><a href="#team" className="hover:text-blue-400 transition-colors">Team</a></li>
                            <li><a href="#events" className="hover:text-blue-400 transition-colors">Events</a></li>
                            <li><a href="#competitions" className="hover:text-blue-400 transition-colors">Competitions</a></li>
                            <li><a href="#learn" className="hover:text-blue-400 transition-colors">Learn & Educate</a></li>
                        </ul>
                    </nav>
                    <button 
                        className="md:hidden text-2xl"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle mobile menu"
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
                {isMobileMenuOpen && (
                    <nav className="bg-blue-800 py-4 md:hidden">
                        <ul className="flex flex-col items-center space-y-4">
                            <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
                            <li><a href="#team" className="hover:text-blue-400 transition-colors">Team</a></li>
                            <li><a href="#events" className="hover:text-blue-400 transition-colors">Events</a></li>
                            <li><a href="#competitions" className="hover:text-blue-400 transition-colors">Competitions</a></li>
                            <li><a href="#learn" className="hover:text-blue-400 transition-colors">Learn & Educate</a></li>
                        </ul>
                    </nav>
                )}
            </header>

            {/* Hero Section */}
            <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://placehold.co/1920x1080)' }}>
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
                        Empowering Innovation and Business Growth
                    </motion.p>
                    <motion.a
                        href="#about"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-3 rounded-lg text-xl font-semibold"
                    >
                        Learn More
                    </motion.a>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 bg-gray-900">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-5xl font-bold text-blue-400 mb-4">About InnovateUSA</h2>
                        <p className="text-lg mb-6">
                            Our mission is to educate and empower the community with comprehensive knowledge of the American Enterprise System and business concepts. We seek to inform, inspire, and implement these ideas, fostering a deep understanding that lays the groundwork for future success.
                        </p>
                        <p className="text-lg">
                            Since our inception, we have supported over 10,000 innovators, hosted 500+ events, and facilitated the creation of 200+ startups. Our community continues to grow and thrive.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Team Section */}
            <section id="team" className="py-20 bg-gray-800">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-5xl font-bold text-blue-400 mb-8">Our Team</h2>
                    </motion.div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {/* Team Member Component */}
                        {[
                            { name: 'Sahasra Jonnalagadda', role: 'Executive Director', imgSrc: 'https://placehold.co/150x150', description: 'Oversees the overall vision, strategy, and execution of InnovateUSA.' },
                            { name: 'Roshini Mantena', role: 'Program Manager', imgSrc: 'https://placehold.co/150x150', description: 'Manages day-to-day operations, coordinates team efforts.' },
                            { name: 'Rashmi Mantena', role: 'Partnership Director', imgSrc: 'https://placehold.co/150x150', description: 'Focuses on building strategic partnerships.' },
                            { name: 'Ruhi Sharma', role: 'Treasurer', imgSrc: 'https://placehold.co/150x150', description: 'Manages the organization finances and budgeting.' },
                            { name: 'Ankit Rao', role: 'Webmaster', imgSrc: 'https://placehold.co/150x150', description: 'Oversees the design, development, and maintenance of the website.' },
                            { name: 'Cara King', role: 'Director of Public Affairs', imgSrc: 'https://placehold.co/150x150', description: 'Leads public relations efforts and manages media outreach.' },
                            { name: 'Deryck Toney', role: 'Secretary', imgSrc: 'https://placehold.co/150x150', description: 'Handles administrative tasks and keeps minutes of meetings.' },
                            { name: 'Katie Helge', role: 'Director of Media', imgSrc: 'https://placehold.co/150x150', description: 'Oversees media production and strategy.' },
                        ].map((member, index) => (
                            <motion.div
                                key={index}
                                className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                            >
                                <img src={member.imgSrc} alt={`Portrait of ${member.name}`} className="w-32 h-32 mx-auto rounded-full mb-4" />
                                <h3 className="text-xl font-semibold mb-2 text-blue-400">{member.name}</h3>
                                <p className="text-gray-400 mb-4">{member.role}</p>
                                <p className="text-gray-300">{member.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Events & Activities Section */}
            <section id="events" className="py-20 bg-gray-900">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-5xl font-bold text-blue-400 mb-8">Upcoming Events</h2>
                        <p className="text-lg mb-6">
                            Join us for our upcoming events to stay connected, learn, and grow. Each event is an opportunity to engage with industry experts and fellow innovators.
                        </p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {/* Event Component */}
                        {[
                            { title: 'Innovation Summit 2024', date: 'August 15, 2024', description: 'A conference bringing together thought leaders and innovators to discuss the future of technology.', linkText: 'Learn More' },
                            { title: 'Startup Networking Night', date: 'September 10, 2024', description: 'An evening of networking with entrepreneurs and investors.', linkText: 'Register Now' },
                            { title: 'Tech Trends Workshop', date: 'October 5, 2024', description: 'A workshop focusing on the latest trends in technology and their impact on businesses.', linkText: 'View Details' },
                        ].map((event, index) => (
                            <motion.div
                                key={index}
                                className="bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2, duration: 0.8 }}
                            >
                                <h3 className="text-xl font-semibold mb-2 text-blue-400">{event.title}</h3>
                                <p className="text-gray-400 mb-2">{event.date}</p>
                                <p className="text-gray-300 mb-4">{event.description}</p>
                                <a href="#" className="text-blue-400 hover:underline">{event.linkText}</a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Competitions Section */}
            <section id="competitions" className="py-20 bg-gray-800">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-5xl font-bold text-blue-400 mb-8">Competitions</h2>
                        <p className="text-lg mb-6">
                            Participate in our exciting competitions to showcase your skills and creativity. Each competition is designed to challenge and inspire you.
                        </p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {/* Competition Component */}
                        {[
                            { title: 'Tech Innovators Challenge', description: 'Solve complex tech problems and win exciting prizes.', linkText: 'Learn More' },
                            { title: 'Business Pitch Competition', description: 'Pitch your startup idea to a panel of experts.', linkText: 'Register Now' },
                            { title: 'Creative Solutions Contest', description: 'Submit your creative solutions to real-world problems.', linkText: 'View Details' },
                        ].map((competition, index) => (
                            <motion.div
                                key={index}
                                className="bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2, duration: 0.8 }}
                            >
                                <h3 className="text-xl font-semibold mb-2 text-blue-400">{competition.title}</h3>
                                <p className="text-gray-300 mb-4">{competition.description}</p>
                                <a href="#" className="text-blue-400 hover:underline">{competition.linkText}</a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Learn & Educate Section */}
            <section id="learn" className="py-20 bg-gray-900">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-5xl font-bold text-blue-400 mb-8">Learn & Educate</h2>
                        <p className="text-lg mb-6">
                            Dive into our educational resources to expand your knowledge and skills. We offer various materials and courses to support your learning journey.
                        </p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {/* Learning Resource Component */}
                        {[
                            { title: 'Web Development Basics', description: 'A comprehensive guide to getting started with web development.', linkText: 'Explore Course' },
                            { title: 'Entrepreneurship 101', description: 'Learn the fundamentals of starting and running a business.', linkText: 'Start Learning' },
                            { title: 'Innovative Problem-Solving', description: 'Techniques and strategies for tackling complex challenges.', linkText: 'View Resources' },
                        ].map((resource, index) => (
                            <motion.div
                                key={index}
                                className="bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2, duration: 0.8 }}
                            >
                                <h3 className="text-xl font-semibold mb-2 text-blue-400">{resource.title}</h3>
                                <p className="text-gray-300 mb-4">{resource.description}</p>
                                <a href="#" className="text-blue-400 hover:underline">{resource.linkText}</a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-blue-900 text-white py-8">
                <div className="container mx-auto px-6 flex flex-col items-center">
                    <div className="mb-4">
                        <h2 className="text-3xl font-bold mb-2">Connect with Us</h2>
                        <p className="text-lg mb-6">Follow us on social media to stay updated with the latest news and updates.</p>
                        <div className="flex space-x-6 mb-4">
                            <a href="https://tiktok.com/@innovateusa" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                                <i className="fab fa-tiktok fa-2x"></i>
                            </a>
                            <a href="https://instagram.com/innovateusa" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                                <i className="fab fa-instagram fa-2x"></i>
                            </a>
                        </div>
                    </div>
                    <div className="text-center">
                        <p className="mb-2">© 2024 InnovateUSA. All rights reserved.</p>
                        <div className="flex justify-center space-x-6">
                            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
                            <a href="#" className="hover:text-blue-400 transition-colors">Contact Us</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default InnovateUSA;
