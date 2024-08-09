import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-blue-900 shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-3xl font-bold text-white">
            InnovateUSA
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <NavItem href="/" text="Home" currentPath={router.pathname} />
              <NavItem href="/about" text="About" currentPath={router.pathname} />
              <NavItem href="/team" text="Team" currentPath={router.pathname} />
              <NavItem href="/events" text="Events" currentPath={router.pathname} />
              <NavItem href="/competitions" text="Competitions" currentPath={router.pathname} />
              <NavItem href="/learn" text="Learn" currentPath={router.pathname} />
              <NavItem href="/contact" text="Contact" currentPath={router.pathname} />
            </ul>
          </nav>
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-blue-800 py-4">
          <ul className="flex flex-col items-center space-y-4">
            <NavItem href="/" text="Home" currentPath={router.pathname} mobile />
            <NavItem href="/about" text="About" currentPath={router.pathname} mobile />
            <NavItem href="/team" text="Team" currentPath={router.pathname} mobile />
            <NavItem href="/events" text="Events" currentPath={router.pathname} mobile />
            <NavItem href="/competitions" text="Competitions" currentPath={router.pathname} mobile />
            <NavItem href="/learn" text="Learn" currentPath={router.pathname} mobile />
            <NavItem href="/contact" text="Contact" currentPath={router.pathname} mobile />
          </ul>
        </nav>
      )}
    </header>
  );
};

const NavItem = ({ href, text, currentPath, mobile }) => (
  <li>
    <Link href={href} className={`text-white hover:text-blue-300 transition duration-300 ${mobile ? 'text-lg py-2' : ''} ${currentPath === href ? 'border-b-2 border-blue-400' : ''}`}>
      {text}
    </Link>
  </li>
);

export default Header;