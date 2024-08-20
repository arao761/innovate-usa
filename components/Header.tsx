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

    const scrollToHero = (e: React.MouseEvent) => {
        e.preventDefault();
        const heroSection = document.querySelector('section');
        if (heroSection) {
            heroSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="bg-blue-900 text-white py-4 sticky top-0 z-50 shadow-md">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <h1 
                    className="text-2xl sm:text-3xl font-bold cursor-pointer hover:text-blue-400 transition-colors"
                    onClick={scrollToHero}
                    style={{ fontSize: '24px' }}
                >
                    InnovateUSA
                </h1>
                <nav className="hidden lg:flex">
                    <ul className="flex space-x-6">
                        {['About', 'Team', 'Events', 'Competitions', 'Learn & Educate'].map((item) => (
                            <li key={item}>
                                <a 
                                    href={`#${item.toLowerCase().replace(' & ', '-')}`} 
                                    className="hover:text-blue-400 transition-colors"
                                    style={{ fontSize: '16px' }}
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="lg:hidden relative" ref={dropdownRef}>
                    <button 
                        className="text-2xl"
                        onClick={toggleDropdown}
                        aria-label="Toggle mobile menu"
                        style={{ fontSize: '24px' }}
                    >
                        {isDropdownOpen ? <FaTimes /> : <FaBars />}
                    </button>
                    {isDropdownOpen && (
                        <nav className="absolute right-0 mt-2 w-48 bg-blue-800 rounded-md shadow-lg py-1 z-10">
                            <ul className="flex flex-col">
                                {['About', 'Team', 'Events', 'Competitions', 'Learn'].map((item) => (
                                    <li key={item}>
                                        <a 
                                            href={`#${item.toLowerCase().replace(' & ', '-')}`} 
                                            className="block px-4 py-2 hover:bg-blue-700 transition-colors"
                                            style={{ fontSize: '14px' }}
                                        >
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;