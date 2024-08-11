'use client'
import React, { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TeamSection from '@/components/TeamSection';
import ImpactSection from '@/components/ImpactSection';
import EventsSection from '@/components/EventsSection';
import CompetitionsSection from '@/components/CompetitionsSection';
import LearnEducationSection from '@/components/LearnEducationSection';
import Footer from '@/components/Footer';

// ... rest of the code
const InnovateUSA: React.FC = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="font-roboto text-gray-100 bg-black">
            <Header isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />
            <HeroSection />
            <AboutSection />
            <TeamSection />
            <ImpactSection />
            <EventsSection />
            <CompetitionsSection />
            <LearnEducationSection />
            <Footer />
        </div>
    );
};

export default InnovateUSA;