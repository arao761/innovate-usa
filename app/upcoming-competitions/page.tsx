import React from 'react';
import Link from 'next/link';

const UpcomingEvent: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 flex flex-col items-center justify-center px-4 py-12">
            <h1 className="text-4xl md:text-6xl font-bold text-blue-400 mb-8 text-center">
                Upcoming Events
            </h1>
            <div className="w-full max-w-4xl">
                <div className="bg-gray-800 rounded-lg p-8 border-2 border-blue-400 shadow-lg">
                    <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
                        Stay Tuned!
                    </h2>
                    <p className="text-lg md:text-xl text-gray-300">
                        We are busy planning our next exciting event. Check back soon for updates!
                    </p>
                </div>
            </div>
            <Link href="/" passHref>
                <a className="mt-8 bg-gray-800 text-blue-400 px-6 py-3 rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300 text-lg font-semibold border-2 border-blue-400">
                    Back to Home
                </a>
            </Link>
        </div>
    );
};

export default UpcomingEvent;
