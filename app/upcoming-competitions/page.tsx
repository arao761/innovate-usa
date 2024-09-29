import React from 'react';
import Link from 'next/link';

const UpcomingEvent: React.FC = () => {
    const event = {
        title: "Ridge Designs Small Business & Entrepreneurship Workshop",
        description: "Join us for an exciting workshop led by Deryck and Ruhi, focusing on small business strategies and entrepreneurship fundamentals. This event is designed to inspire and educate aspiring entrepreneurs with practical insights and hands-on activities.",
        date: "October 4th, 2024",
        time: "11:00 AM - 12:30 PM",
        location: "Ridge Community Center",
        leaders: "Deryck and Ruhi"
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 flex flex-col items-center justify-center px-4 py-12">
            <h1 className="text-4xl md:text-6xl font-bold text-blue-400 mb-8 text-center">
                Upcoming Events
            </h1>
            <div className="w-full max-w-4xl">
                <div className="bg-gray-800 rounded-lg p-8 border-2 border-blue-400 shadow-lg">
                    <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">{event.title}</h2>
                    <p className="text-lg md:text-xl text-gray-300 mb-6">{event.description}</p>
                    <div className="space-y-2">
                        <p className="text-md md:text-lg text-blue-400 font-semibold">Date: {event.date}</p>
                        <p className="text-md md:text-lg text-blue-400 font-semibold">Time: {event.time}</p>
                        <p className="text-md md:text-lg text-blue-400 font-semibold">Location: {event.location}</p>
                        <p className="text-md md:text-lg text-blue-400 font-semibold">Led by: {event.leaders}</p>
                    </div>
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