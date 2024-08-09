'use client'
import React, { useState } from 'react';

const InnovateUSA: React.FC = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="font-roboto text-gray-100" style={{ backgroundColor: '#000' }}>
            {/* Header */}
            <header className="bg-blue-900 text-white py-6 sticky top-0 z-50">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <h1 className="text-3xl font-bold">InnovateUSA</h1>
                    <nav className="desktop-menu hidden md:block">
                        <ul className="flex space-x-6">
                            <li><a href="#about" className="hover:underline">About</a></li>
                            <li><a href="#team" className="hover:underline">Team</a></li>
                            <li><a href="#events" className="hover:underline">Events</a></li>
                            <li><a href="#competitions" className="hover:underline">Competitions</a></li>
                            <li><a href="#learn" className="hover:underline">Learn & Educate</a></li>
                        </ul>
                    </nav>
                    <button 
                        className="mobile-menu-button block md:hidden" 
                        onClick={toggleMobileMenu} 
                        aria-label="Toggle mobile menu"
                    >
                        <i className="fas fa-bars" aria-hidden="true"></i>
                    </button>
                </div>
                {isMobileMenuOpen && (
                    <nav id="mobile-menu" className="bg-blue-800 py-4">
                        <ul className="flex flex-col items-center space-y-4">
                            <li><a href="#about" className="hover:underline">About</a></li>
                            <li><a href="#team" className="hover:underline">Team</a></li>
                            <li><a href="#events" className="hover:underline">Events</a></li>
                            <li><a href="#competitions" className="hover:underline">Competitions</a></li>
                            <li><a href="#learn" className="hover:underline">Learn & Educate</a></li>
                        </ul>
                    </nav>
                )}
            </header>

            {/* Hero Section */}
            <section id="hero" className="hero-section bg-cover bg-center h-screen flex items-center justify-center" style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}>
                <div className="text-center">
                    <h2 className="text-6xl font-bold text-white mb-4">Innovate for a Better Tomorrow</h2>
                    <p className="text-xl text-gray-200 mb-8">Empowering the next generation of innovators and entrepreneurs</p>
                    <a href="#about" className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600">Learn More</a>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-16 bg-gray-900">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-8 text-blue-400">About InnovateUSA</h2>
                    <div className="text-center">
                        <h3 className="text-2xl font-semibold mb-4 text-blue-400">Vision</h3>
                        <p className="text-lg mb-8 text-gray-300">
                            Our mission is to educate and empower the community with comprehensive knowledge of the American Enterprise System and business concepts. We seek to inform, inspire, and implement these ideas, fostering a deep understanding that lays the groundwork for future success.
                        </p>
                        <h3 className="text-2xl font-semibold mb-4 text-blue-400">Impact</h3>
                        <p className="text-lg text-gray-300">
                            Since our inception, we have supported over 10,000 innovators, hosted 500+ events, and facilitated the creation of 200+ startups. Our community continues to grow and thrive.
                        </p>
                        {/* Add impact graphic */}
                        <div className="my-8">
                            <img src="/images/impact-graphic.jpg" alt="Impact Graphic" className="mx-auto rounded-lg shadow-lg" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section id="team" className="py-16 bg-gray-800">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-8 text-blue-400">Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Team Member 1 */}
                        <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center hover-transition">
                            <img src="/images/team/sahasra.jpg" alt="Portrait of Sahasra Jonnalagadda, Executive Director" className="w-24 h-24 mx-auto rounded-full mb-4" />
                            <h3 className="text-xl font-semibold text-blue-400">Sahasra Jonnalagadda</h3>
                            <p className="text-gray-400">Executive Director</p>
                            <p className="text-gray-400 mt-4">
                                Oversees the overall vision, strategy, and execution of InnovateUSA. Responsible for guiding the project direction, ensuring alignment with goals, and representing the campaign externally.
                            </p>
                            <a href="/team/sahasra" className="mt-4 inline-block text-blue-400 hover:underline">Learn More</a>
                        </div>
                        {/* Team Member 2 */}
                        <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center hover-transition">
                            <img src="/images/team/roshini.jpg" alt="Portrait of Roshini Mantena, Program Manager" className="w-24 h-24 mx-auto rounded-full mb-4" />
                            <h3 className="text-xl font-semibold text-blue-400">Roshini Mantena</h3>
                            <p className="text-gray-400">Program Manager</p>
                            <p className="text-gray-400 mt-4">
                                Manages day-to-day operations, coordinates team efforts, and ensures the successful implementation of all project activities and initiatives.
                            </p>
                            <a href="/team/roshini" className="mt-4 inline-block text-blue-400 hover:underline">Learn More</a>
                        </div>
                        {/* Team Member 3 */}
                        <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center hover-transition">
                            <img src="/images/team/rashmi.jpg" alt="Portrait of Rashmi Mantena, Partnership Director" className="w-24 h-24 mx-auto rounded-full mb-4" />
                            <h3 className="text-xl font-semibold text-blue-400">Rashmi Mantena</h3>
                            <p className="text-gray-400">Partnership Director</p>
                            <p className="text-gray-400 mt-4">
                                Focuses on building strategic partnerships with businesses, educational institutions, and community organizations to support the mission of InnovateUSA and enhance its impact.
                            </p>
                            <a href="/team/rashmi" className="mt-4 inline-block text-blue-400 hover:underline">Learn More</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Events & Activities Section */}
            <section id="events" className="py-16 bg-gray-900">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-8 text-blue-400">Events & Activities</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Event 1 */}
                        <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover-transition">
                            <h3 className="text-xl font-semibold mb-2 text-blue-400">Upcoming Event: Innovation Summit</h3>
                            <p className="text-gray-400 mb-4">Date: March 15, 2024</p>
                            <p className="text-gray-300">
                                Join us for a day of inspiring talks, networking opportunities, and workshops led by industry leaders. Get insights into the latest trends and innovations shaping the future.
                            </p>
                            <a href="#" className="mt-4 inline-block text-blue-400 hover:underline">Register Now</a>
                        </div>
                        {/* Event 2 */}
                        <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover-transition">
                            <h3 className="text-xl font-semibold mb-2 text-blue-400">Workshop: Startup Funding 101</h3>
                            <p className="text-gray-400 mb-4">Date: April 10, 2024</p>
                            <p className="text-gray-300">
                                Learn the essentials of startup funding, including how to pitch to investors, create a winning business plan, and secure the financial support you need to grow your venture.
                            </p>
                            <a href="#" className="mt-4 inline-block text-blue-400 hover:underline">Learn More</a>
                        </div>
                        {/* Event 3 */}
                        <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover-transition">
                            <h3 className="text-xl font-semibold mb-2 text-blue-400">Networking Mixer: Meet the Innovators</h3>
                            <p className="text-gray-400 mb-4">Date: May 5, 2024</p>
                            <p className="text-gray-300">
                                Connect with fellow innovators, entrepreneurs, and professionals in a relaxed and informal setting. Share ideas, find collaborators, and expand your network.
                            </p>
                            <a href="#" className="mt-4 inline-block text-blue-400 hover:underline">RSVP</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Competitions Section */}
            <section id="competitions" className="py-16 bg-gray-800">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-8 text-blue-400">Competitions</h2>
                    <div className="text-center text-gray-300">
                        <p className="text-lg">
                            Compete with the best and brightest in our series of innovation challenges. Show off your skills, win exciting prizes, and gain valuable experience.
                        </p>
                        <div className="my-8">
                            <img src="/images/competitions-graphic.jpg" alt="Competitions Graphic" className="mx-auto rounded-lg shadow-lg" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Learn & Educate Section */}
            <section id="learn" className="py-16 bg-gray-900">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-8 text-blue-400">Learn & Educate</h2>
                    <div className="text-center text-gray-300">
                        <p className="text-lg">
                            Access a wealth of resources, including articles, tutorials, and webinars, to enhance your understanding of business, innovation, and technology.
                        </p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-6 bg-gray-800">
                <div className="container mx-auto px-4 text-center text-gray-500">
                    <p>&copy; 2024 InnovateUSA. All rights reserved.</p>
                    <p>Follow us on <a href="#" className="text-blue-400 hover:underline">Twitter</a>, <a href="#" className="text-blue-400 hover:underline">LinkedIn</a>, and <a href="#" className="text-blue-400 hover:underline">Facebook</a>.</p>
                </div>
            </footer>
        </div>
    );
};

export default InnovateUSA;
