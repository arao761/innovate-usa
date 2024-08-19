import React from 'react';
import Link from 'next/link';

const UpcomingCompetitions: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 flex flex-col items-center justify-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-blue-400 mb-8 text-center">
                Upcoming Competitions and Events
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 text-center">
                Stay tuned! Our upcoming competitions and events will be announced here soon.
            </p>
            <p className="text-lg md:text-xl text-yellow-400 mb-12 text-center">
                TBA
            </p>
            <Link href="/" passHref>
                <a className="bg-gray-800 text-blue-400 px-6 py-3 rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300 text-lg font-semibold border-2 border-blue-400">
                    Back to Home
                </a>
            </Link>
        </div>
    );
};

export default UpcomingCompetitions;