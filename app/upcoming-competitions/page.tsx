import React from 'react';
import Link from 'next/link';

const UpcomingCompetitions: React.FC = () => {
    const events = [
        {
            title: "Entrepreneurship 101 for Middle Schoolers",
            description: "A workshop designed to introduce middle school students to the basics of entrepreneurship and business thinking.",
            date: "Coming Soon"
        },
        {
            title: "Shark Tank-style Pitch Competition",
            description: "An exciting pitch competition for middle and high school students to present their innovative ideas to a panel of judges.",
            date: "Coming Soon"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 flex flex-col items-center justify-center px-4 py-12">
            <h1 className="text-4xl md:text-6xl font-bold text-blue-400 mb-8 text-center">
                Upcoming Competitions and Events
            </h1>
            <div className="w-full max-w-4xl">
                {events.map((event, index) => (
                    <div key={index} className="bg-gray-800 rounded-lg p-6 mb-8 border-2 border-blue-400 shadow-lg">
                        <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-4">{event.title}</h2>
                        <p className="text-lg md:text-xl text-gray-300 mb-4">{event.description}</p>
                        <p className="text-md md:text-lg text-blue-400 font-semibold">{event.date}</p>
                    </div>
                ))}
            </div>
            <p className="text-lg md:text-xl text-gray-300 mt-8 mb-12 text-center">
                Stay tuned for more details and registration information!
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