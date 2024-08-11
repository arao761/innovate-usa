import React from 'react';

interface HeaderProps {
    isMobileMenuOpen: boolean;
    toggleMobileMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ isMobileMenuOpen, toggleMobileMenu }) => {
    return (
        <header className="bg-blue-900 text-white py-6 sticky top-0 z-50 shadow-md">
            <div className="container mx-auto px-6 flex justify-between items-center">
                <h1 className="text-4xl font-bold">InnovateUSA</h1>
                <nav className="hidden md:flex">
                    <ul className="flex space-x-8">
                        <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
                        <li><a href="#team" className="hover:text-blue-400 transition-colors">Team</a></li>
                        <li><a href="#events" className="hover:text-blue-400 transition-colors">Events</a></li>
                        <li><a href="#competitions" className="hover:text-blue-400 transition-colors">Competitions</a></li>
                        <li><a href="#learn-education" className="hover:text-blue-400 transition-colors">Learn & Educate</a></li>
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
    );
};

export default Header;