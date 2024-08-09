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

            {/* About Section */}
            <section id="about" className="py-16 bg-gray-900">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-8 text-blue-400">About InnovateUSA</h2>
                    <div className="text-center">
                        <h3 className="text-2xl font-semibold mb-4 text-blue-400">Vision</h3>
                        <p className="text-lg mb-8">
                        Our mission is to educate and empower the community with comprehensive knowledge of the American Enterprise System and business concepts. We seek to inform, inspire, and implement these ideas, fostering a deep understanding that lays the groundwork for future success.
                        </p>
                        <h3 className="text-2xl font-semibold mb-4 text-blue-400">Impact</h3>
                        <p className="text-lg">
                            Since our inception, we have supported over 10,000 innovators, hosted 500+ events, and facilitated the creation of 200+ startups. Our community continues to grow and thrive.
                        </p>
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
                            <img src="https://placehold.co/150x150" alt="Portrait of Sahasra Jonnalagadda" className="w-24 h-24 mx-auto rounded-full mb-4" />
                            <h3 className="text-xl font-semibold text-blue-400">Sahasra Jonnalagadda</h3>
                            <p className="text-gray-400"> Executive Director</p>
                            <p className="text-gray-400 mt-4">
                                Oversees the overall vision, strategy, and execution of InnovateUSA. Responsible for guiding the projects direction, ensuring alignment with goals, and representing the campaign externally.
                            </p>
                        </div>
                        {/* Team Member 2 */}
                        <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center hover-transition">
                            <img src="https://placehold.co/150x150" alt="Portrait of Roshini Mantena" className="w-24 h-24 mx-auto rounded-full mb-4" />
                            <h3 className="text-xl font-semibold text-blue-400">Roshini Mantena</h3>
                            <p className="text-gray-400">Program Manager</p>
                            <p className="text-gray-400 mt-4">
                            Manages day-to-day operations, coordinates team efforts, and ensures the successful implementation of all project activities and initiatives.
                            </p>
                        </div>
                        {/* Team Member 3 */}
                        <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center hover-transition">
                            <img src="https://placehold.co/150x150" alt="Portrait of Rashmi Mantena" className="w-24 h-24 mx-auto rounded-full mb-4" />
                            <h3 className="text-xl font-semibold text-blue-400">Rashmi Mantena</h3>
                            <p className="text-gray-400">Partnership Director</p>
                            <p className="text-gray-400 mt-4">
                            Focuses on building strategic partnerships with businesses, educational institutions, and community organizations to support the mission of InnovateUSA and enhance its impact.
                            </p>
                        </div>
                        {/* Team Member 4 */}
                        <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center hover-transition">
                            <img src="https://placehold.co/150x150" alt="Portrait of Ruhi Sharma" className="w-24 h-24 mx-auto rounded-full mb-4" />
                            <h3 className="text-xl font-semibold text-blue-400">Ruhi Sharma</h3>
                            <p className="text-gray-400">Treasurer</p>
                            <p className="text-gray-400 mt-4">
                                Manages the organization finances, oversees budgeting, and ensures fiscal responsibility across all projects and initiatives.
                            </p>
                        </div>
                        {/* Team Member 5 */}
                        <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center hover-transition">
                            <img src="https://placehold.co/150x150" alt="Portrait of Ankit Rao" className="w-24 h-24 mx-auto rounded-full mb-4" />
                            <h3 className="text-xl font-semibold text-blue-400">Ankit Rao</h3>
                            <p className="text-gray-400">Webmaster</p>
                            <p className="text-gray-400 mt-4">
                                Oversees the design, development, and maintenance of the InnovateUSA website, ensuring a seamless user experience and up-to-date content.
                            </p>
                        </div>
                        {/* Team Member 6 */}
                        <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center hover-transition">
                            <img src="https://placehold.co/150x150" alt="Portrait of Cara King" className="w-24 h-24 mx-auto rounded-full mb-4" />
                            <h3 className="text-xl font-semibold text-blue-400">Cara King</h3>
                            <p className="text-gray-400">Director of Public Affairs</p>
                            <p className="text-gray-400 mt-4">
                                Leads public relations efforts, manages media outreach, and develops communication strategies to enhance InnovateUSA&apos; public image.
                            </p>
                        </div>
                        {/* Team Member 7 */}
                        <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center hover-transition">
                            <img src="https://placehold.co/150x150" alt="Portrait of Deryck Toney" className="w-24 h-24 mx-auto rounded-full mb-4" />
                            <h3 className="text-xl font-semibold text-blue-400">Deryck Toney</h3>
                            <p className="text-gray-400">Secretary</p>
                            <p className="text-gray-400 mt-4">
                                Handles administrative tasks, keeps minutes of meetings, and ensures effective communication within the team and with external stakeholders.
                            </p>
                        </div>
                                                {/* Team Member 8 */}
                                                <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center hover-transition">
                            <img src="https://placehold.co/150x150" alt="Portrait of Katie Helge" className="w-24 h-24 mx-auto rounded-full mb-4" />
                            <h3 className="text-xl font-semibold text-blue-400">Katie Helge</h3>
                            <p className="text-gray-400">Director of Media</p>
                            <p className="text-gray-400 mt-4">
                                Oversees media production and strategy, manages content creation for various platforms, and ensures consistent messaging across all media channels.
                            </p>
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
                                Join us for a day of inspiring talks, networking, and workshops focused on the latest trends in innovation and entrepreneurship. Keynote speakers include industry leaders and successful entrepreneurs.
                            </p>
                            <a href="#" className="inline-block mt-4 bg-blue-400 text-gray-900 px-4 py-2 rounded hover:bg-blue-500">Register Now</a>
                        </div>
                        {/* Event 2 */}
                        <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover-transition">
                            <h3 className="text-xl font-semibold mb-2 text-blue-400">Previous Activity: Startup Bootcamp</h3>
                            <p className="text-gray-400 mb-4">Date: January 10, 2024</p>
                            <p className="text-gray-300">
                                Our intensive bootcamp helped aspiring entrepreneurs develop their business ideas and pitch them to investors. Participants received hands-on mentorship and valuable feedback.
                            </p>
                            <a href="#" className="inline-block mt-4 bg-blue-400 text-gray-900 px-4 py-2 rounded hover:bg-blue-500">View Highlights</a>
                        </div>
                        {/* Event 3 */}
                        <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover-transition">
                            <h3 className="text-xl font-semibold mb-2 text-blue-400">Upcoming Event: Hackathon</h3>
                            <p className="text-gray-400 mb-4">Date: April 25, 2024</p>
                            <p className="text-gray-300">
                                A 48-hour hackathon where participants will build innovative solutions to real-world problems and compete for prizes. This event is open to developers, designers, and entrepreneurs.
                            </p>
                            <a href="#" className="inline-block mt-4 bg-blue-400 text-gray-900 px-4 py-2 rounded hover:bg-blue-500">Register Now</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Competitions Section */}
            <section id="competitions" className="py-16 bg-gray-800">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-8 text-blue-400">Competitions</h2>
                    <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold mb-4 text-blue-400">InnovateUSA Competition 2024</h3>
                        <p className="text-gray-400 mb-4">Date: June 10-12, 2024</p>
                        <p className="text-gray-300 mb-4">
                            Join our annual competition where innovators from across the country present their groundbreaking ideas and compete for funding and mentorship opportunities. The competition will feature categories such as Technology, Healthcare, Sustainability, and Education.
                        </p>
                        <ul className="list-disc list-inside text-left mx-auto mb-4 text-gray-300">
                            <li className="text-lg hover-transition"><a href="#" className="text-blue-400 hover:underline">Technology: Innovations in software, hardware, and IT.</a></li>
                            <li className="text-lg hover-transition"><a href="#" className="text-blue-400 hover:underline">Healthcare: Breakthroughs in medical technology and healthcare services.</a></li>
                            <li className="text-lg hover-transition"><a href="#" className="text-blue-400 hover:underline">Sustainability: Solutions for environmental and social sustainability.</a></li>
                            <li className="text-lg hover-transition"><a href="#" className="text-blue-400 hover:underline">Education: Innovations in educational tools and methodologies.</a></li>
                        </ul>
                        <p className="text-gray-300">
                            Winners will receive cash prizes, mentorship from industry leaders, and opportunities to showcase their work to potential investors.
                        </p>
                    </div>
                </div>
            </section>

            {/* Learn & Educate Section */}
            <section id="learn" className="py-16 bg-gray-900">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-8 text-blue-400">Learn & Educate</h2>
                    <div className="text-center max-w-3xl mx-auto">
                        <h3 className="text-2xl font-semibold mb-4 text-blue-400">The American Enterprise System</h3>
                        <p className="text-lg mb-4">The American Enterprise System is built on five key pillars:</p>
                        <ul className="list-disc list-inside text-left mx-auto mb-8 text-gray-300">
                            <li className="text-lg flex items-center mb-4"><i className="fas fa-home mr-2 text-blue-400"></i>Private Property: The right to own and control private property.</li>
                            <li className="text-lg flex items-center mb-4"><i className="fas fa-hand-holding-usd mr-2 text-blue-400"></i>Freedom of Choice: The freedom to choose how to produce, sell, and use your own resources.</li>
                            <li className="text-lg flex items-center mb-4"><i className="fas fa-piggy-bank mr-2 text-blue-400"></i>Profit Incentive: The motivation to earn profits which drives innovation and efficiency.</li>
                            <li className="text-lg flex items-center mb-4"><i className="fas fa-trophy mr-2 text-blue-400"></i>Competition: Healthy competition that encourages businesses to improve and innovate.</li>
                            <li className="text-lg flex items-center mb-4"><i className="fas fa-balance-scale mr-2 text-blue-400"></i>Limited Government: A government that provides a stable environment for the economy to thrive but does not overly interfere.</li>
                        </ul>
                        <p className="text-lg">
                            Understanding these pillars is crucial for anyone looking to innovate and succeed in the American market. We offer a range of resources and educational programs to help you navigate and leverage these principles effectively.
                        </p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-blue-900 text-white py-8">
                <div className="container mx-auto px-4 text-center">
                    <div className="flex justify-center mb-4">
                        <a href="#" target="_blank" className="mx-2 text-gray-400 hover:text-gray-300"><i className="fab fa-facebook fa-2x"></i></a>
                        <a href="#" target="_blank" className="mx-2 text-gray-400 hover:text-gray-300"><i className="fab fa-twitter fa-2x"></i></a>
                        <a href="#" target="_blank" className="mx-2 text-gray-400 hover:text-gray-300"><i className="fab fa-linkedin fa-2x"></i></a>
                        <a href="#" target="_blank" className="mx-2 text-gray-400 hover:text-gray-300"><i className="fab fa-instagram fa-2x"></i></a>
                    </div>
                    <p>&copy; 2024 InnovateUSA. All rights reserved.</p>
                    <p className="mt-1">Email: info@innovateusa.org | Phone: (123) 456-7890</p>
                    <a href="#contact" className="inline-block mt-4 bg-blue-400 text-gray-900 px-4 py-2 rounded hover:bg-blue-500">Contact Us</a>
                </div>
            </footer>
        </div>
    );
};

export default InnovateUSA;
