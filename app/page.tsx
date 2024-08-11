'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTiktok, FaInstagram } from 'react-icons/fa';


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
                        Empowering students and communities through education, creativity, and enterprise
                    </motion.p>
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

            {/* Impact Section */}
<section id="impact" className="py-20 bg-gray-700">
    <div className="container mx-auto px-6">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
        >
            <h2 className="text-5xl font-bold text-blue-400 mb-8">Impact</h2>
            <p className="text-lg mb-6">
                Discover the profound impact of our initiatives on education, community engagement, and beyond.
            </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Impact Component */}
            {[
                { title: 'Education and Awareness', description: '100+ students participated in workshops and presentations, fostering an understanding of the American Enterprise System.' },
                { title: 'Community Engagement', description: 'Our art competition was a huge success with over 40+ submissions from elementary and middle school students, both winners awarded a gift card.' },
                { title: 'Financial Literacy', description: 'The mini-market activity within a workshop allowed students to understand how businesses work and what goes into making products for customers to buy.' },
                { title: 'Networking and Collaboration', description: 'Hands-on workshops entertained and engaged students, who worked with their classmates to create lemonade stand businesses.' },
                { title: 'Participation', description: 'Our social media platforms gained 120 followers, and active participation in workshops remained high, reflecting strong student engagement with the American Enterprise System.' },
                { title: 'Main Goal', description: 'InnovateUSA aimed to leave a lasting imprint on its community and students, promoting the values of the American Enterprise System through social media and workshops.' },
                { title: 'Impact on Community', description: 'Social media, especially Instagram and TikTok, was our biggest source of impact, informing and inspiring the community about the American Enterprise System.' },
            ].map((impact, index) => (
                <motion.div
                    key={index}
                    className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.8 }}
                >
                    <h3 className="text-xl font-semibold mb-2 text-blue-400">{impact.title}</h3>
                    <p className="text-gray-300 mb-4">{impact.description}</p>
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
            <motion.div
                className="bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h3 className="text-xl font-semibold mb-2 text-blue-400">Art Competition</h3>
                <p className="text-gray-300 mb-4">
                    In the fall of 2023, our team brought awareness to the American Enterprise System by organizing an art competition for local Elementary and Middle schools. The competition encouraged creativity and business skills among students, who were tasked with designing a lemonade stand business. Winners were awarded $25 Amazon gift cards.
                </p>
                <a href="#" className="text-blue-400 hover:underline">Learn More</a>
            </motion.div>
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
            <motion.div
                className="bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h3 className="text-xl font-semibold mb-2 text-blue-400">Workshop: Presentation and Activities</h3>
                <p className="text-gray-300 mb-4">
                    Students learned about the American Enterprise System through interactive presentations and activities, including a lemonade stand simulation and a mini-market exercise that taught budgeting and economic principles.
                </p>
                <a href="#" className="text-blue-400 hover:underline">Explore More</a>
            </motion.div>
        </div>
    </div>
</section>

{/* Upcoming Competitions and Events Button */}
<div className="text-center my-12">
    <a href="#" className="bg-blue-400 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-500 transition-colors duration-300">
        Upcoming Competitions and Events
    </a>
</div>

{/* Learn and Education Section */}
<section id="learn-education" className="py-20 bg-gray-800">
    <div className="container mx-auto px-6">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
        >
            <h2 className="text-5xl font-bold text-blue-400 mb-8">Learn and Education</h2>
            <p className="text-lg mb-6">
                Explore the fundamentals of the American Enterprise System and its impact on businesses and individuals.
            </p>
        </motion.div>
        <div className="bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">What is the American Enterprise System?</h3>
            <p className="text-gray-300 mb-4">
                The American Enterprise System is the U.S.A’s free enterprise system, meaning that individuals, not the government, own most of our country’s resources. Free enterprise also means that supply and demand determine how our resources are used.
            </p>
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">How are businesses and the American Enterprise System related?</h3>
            <p className="text-gray-300 mb-4">
                The U.S’s American Enterprise System promotes individual freedom, allowing individuals to choose their occupations, start businesses, and make their own economic decisions. This encourages people to pursue their passions, take risks, and reach their full potential.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Pillar Component */}
            {[
                { title: 'Private Enterprise', description: 'An industry or business owned by individual people or commercial companies, not by the government or an official organization.' },
                { title: 'Competition', description: 'Buyers attempt to acquire goods for lower prices while sellers attempt to sell goods for higher prices. Market equilibrium occurs when both agree.' },
                { title: 'Private Property', description: 'Allows individuals and businesses the right to own and control their property. They can buy, sell, or use their property as they see fit, without government control.' },
                { title: 'Profit Motive', description: 'The drive to earn a profit encourages businesses and individuals to create better products, work efficiently, and take risks to earn more.' },
                { title: 'Consumer Sovereignty', description: 'Consumers have the power to shape the market by choosing what to purchase. Businesses respond by producing goods and services that meet those demands.' },
            ].map((pillar, index) => (
                <motion.div
                    key={index}
                    className="bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.8 }}
                >
                    <h3 className="text-xl font-semibold mb-2 text-blue-400">{pillar.title}</h3>
                    <p className="text-gray-300 mb-4">{pillar.description}</p>
                </motion.div>
            ))}
        </div>
    </div>
</section>





            {/* Footer */}
<footer className="bg-blue-900 text-white py-8">
    <div className="container mx-auto px-6 flex flex-col items-center">
        <div className="mb-4 text-center">
            <h2 className="text-3xl font-bold mb-2">Connect with Us</h2>
            <p className="text-lg mb-6">Follow us on social media to stay updated with the latest news and updates.</p>
            <div className="flex justify-center">
            <a href="https://www.tiktok.com/@innovateusa?_t=8onHfJRk6lK&_r=1" className="text-white text-3xl mx-2 hover:text-blue-400" target="_blank" rel="noopener noreferrer">
                <FaTiktok />
            </a>
            <a href="https://www.instagram.com/innovateusa24?igsh=dTFpczV6bXFndTR4" className="text-white text-3xl mx-2 hover:text-blue-400" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
            </a>
        </div>
        </div>
        <div className="text-center">
            <p className="mb-2">© 2024 InnovateUSA. All rights reserved.</p>
        </div>
    </div>
</footer>

</div>

    );
};

export default InnovateUSA;
