'use client'
import React, { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TeamSection from '@/components/TeamSection';
import ImpactSection from '@/components/ImpactSection';
import Competitions from '@/components/Competitions';
import Workshops from '@/components/Workshops';
import LearnEducationSection from '@/components/LearnEducationSection';
import Footer from '@/components/Footer';
import UpcomingCompetitions from '@/components/UpcomingCompetitions';
import { Analytics } from "@vercel/analytics/react"

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
            <Workshops />
            <UpcomingCompetitions />
            <LearnEducationSection />
            <Footer />
            <Analytics />
        </div>
    );
};

export default InnovateUSA;