import React from 'react';
import Head from 'next/head';

const CaraPage: React.FC = () => {
    return (
        <>
            <Head>
                <title>Cara King - InnovateUSA</title>
                <meta name="description" content="Cara King, Director of Public Affairs at InnovateUSA" />
            </Head>
            <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900">
                <div className="container mx-auto px-4 py-16">
                    <div className="bg-gray-100 rounded-3xl shadow-2xl p-8 md:p-12">
                        <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
                            <div className="relative">
                                <div className="absolute inset-0 bg-blue-500 rounded-full opacity-10 blur-xl"></div>
                                <img 
                                    src="/image6.jpg" 
                                    alt="Cara King" 
                                    className="relative w-64 h-64 object-cover rounded-full shadow-xl border-4 border-white"
                                />
                            </div>
                            <div className="flex-1">
                                <h1 className="text-4xl md:text-5xl font-bold mb-2 text-gray-800">Cara King</h1>
                                <h2 className="text-2xl md:text-3xl text-blue-600 mb-6">Outreach Coordinator</h2>
                                <div className="prose prose-lg max-w-none text-gray-600">
                                    <p className="mb-4">
                                    Cara King, a high school senior with a deep passion for journalism, uses her creativity to make a meaningful impact on her community. Whether through large or small initiatives, Cara&apos;s commitment to service shines through.
                    </p>
                    <p>
                        As a member of the school&apos;s SCA, she excels in communication and collaboration, fostering strong connections within the InnovateUSA team. Her talent for crafting strategic plans and engaging everyone in their roles strengthens the team&apos;s cohesion.
                    </p>
                    <br />
                    <p>
                        Cara is also devoted to encouraging partnerships with other organizations to promote the significance of the American Enterprise System in today&apos;s world.
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

export default CaraPage;