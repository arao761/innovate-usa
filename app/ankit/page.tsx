import React from 'react';
import Head from 'next/head';

const AnkitPage: React.FC = () => {
    return (
        <>
            <Head>
                <title>Ankit Rao - InnovateUSA</title>
                <meta name="description" content="Ankit Rao, Webmaster of InnovateUSA" />
            </Head>
            <div className="min-h-screen bg-gradient-to-br from-purple-100 to-purple-200">
                <div className="container mx-auto px-4 py-16">
                    <div className="bg-gray rounded-3xl shadow-2xl p-8 md:p-12">
                        <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
                            <div className="relative">
                                <div className="absolute inset-0 bg-blue-500 rounded-full opacity-10 blur-xl"></div>
                                <img 
                                    src="https://media.licdn.com/dms/image/D4E03AQEtwmPBQtNGWA/profile-displayphoto-shrink_400_400/0/1711079713525?e=1729123200&v=beta&t=5B2hPSCos-jhaAeqckqteO6pYUznoP0i-wrhi7QdRrw" 
                                    alt="Ankit Rao" 
                                    className="relative w-64 h-64 object-cover rounded-full shadow-xl border-4 border-white"
                                />
                            </div>
                            <div className="flex-1">
                                <h1 className="text-4xl md:text-5xl font-bold mb-2 text-gray-800">Ankit Rao</h1>
                                <h2 className="text-2xl md:text-3xl text-blue-600 mb-6">Webmaster</h2>
                                <div className="prose prose-lg max-w-none text-gray-600">
                                    <p className="mb-4">
                                        Ankit Rao, a high school senior with a strong passion for computer science and business, is dedicated to coding and website development. As the President and Founder of his school&apos;s Web and Mobile App Development Club, Ankit has developed his skills to a professional level, specializing in creating and managing websites.
                                    </p>
                                    <p>
                                        His extensive experience equips him to oversee the InnovateUSA website, ensuring that it remains a reliable and consistent platform for documenting all campaign activities.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AnkitPage;