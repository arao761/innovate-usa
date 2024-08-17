import React, { useState, useRef, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

interface HeaderProps {
    isMobileMenuOpen: boolean;
    toggleMobileMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ isMobileMenuOpen, toggleMobileMenu }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const scrollToHero = () => {
        const heroSection = document.getElementById('hero-section');
        if (heroSection) {
            heroSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="bg-blue-900 text-white py-6 sticky top-0 z-50 shadow-md">
            <div className="container mx-auto px-6 flex justify-between items-center">
                <h1 
                    className="text-4xl font-bold cursor-pointer hover:text-blue-400 transition-colors"
                    onClick={scrollToHero}
                >
                    InnovateUSA
                </h1>
                <nav className="hidden md:flex">
                    <ul className="flex space-x-8">
                        <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
                        <li><a href="#team" className="hover:text-blue-400 transition-colors">Team</a></li>
                        <li><a href="#events" className="hover:text-blue-400 transition-colors">Events</a></li>
                        <li><a href="#competitions" className="hover:text-blue-400 transition-colors">Competitions</a></li>
                        <li><a href="#learn-education" className="hover:text-blue-400 transition-colors">Learn & Educate</a></li>
                    </ul>
                </nav>
                <div className="md:hidden relative" ref={dropdownRef}>
                    <button 
                        className="text-2xl"
                        onClick={toggleDropdown}
                        aria-label="Toggle mobile menu"
                    >
                        {isDropdownOpen ? <FaTimes /> : <FaBars />}
                    </button>
                    {isDropdownOpen && (
                        <nav className="absolute right-0 mt-2 w-48 bg-blue-800 rounded-md shadow-lg py-1 z-10">
                            <ul className="flex flex-col">
                                <li><a href="#about" className="block px-4 py-2 hover:bg-blue-700 transition-colors">About</a></li>
                                <li><a href="#team" className="block px-4 py-2 hover:bg-blue-700 transition-colors">Team</a></li>
                                <li><a href="#events" className="block px-4 py-2 hover:bg-blue-700 transition-colors">Events</a></li>
                                <li><a href="#competitions" className="block px-4 py-2 hover:bg-blue-700 transition-colors">Competitions</a></li>
                                <li><a href="#learn-education" className="block px-4 py-2 hover:bg-blue-700 transition-colors">Learn & Educate</a></li>
                            </ul>
                        </nav>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;