import React from 'react';
import Head from 'next/head';

const DeryckPage: React.FC = () => {
    return (
        <>
            <Head>
                <title>Deryck Toney - InnovateUSA</title>
                <meta name="description" content="Deryck Toney, Secretary at InnovateUSA" />
            </Head>
            <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
                <div className="container mx-auto px-4 py-16">
                    <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
                        <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
                            <div className="relative">
                                <div className="absolute inset-0 bg-blue-500 rounded-full opacity-10 blur-xl"></div>
                                <img 
                                    src="/image7.jpg" 
                                    alt="Deryck Toney" 
                                    className="relative w-64 h-64 object-cover rounded-full shadow-xl border-4 border-white"
                                />
                            </div>
                            <div className="flex-1">
                                <h1 className="text-4xl md:text-5xl font-bold mb-2 text-gray-800">Deryck Toney</h1>
                                <h2 className="text-2xl md:text-3xl text-blue-600 mb-6">Secretary</h2>
                                <div className="prose prose-lg max-w-none text-gray-600">
                                    <p className="mb-4">
                                    Deryck Toney is a dedicated high school senior with a strong interest in business and film. He is passionate about utilizing creative strategies to serve his community, a mission he aims to advance through his work with InnovateUSA.
                    </p>
                    <p>
                        As Director of Education for his school&apos;s Model UN chapter, Deryck has successfully organized a series of impactful workshops, honing his organizational skills. He is committed to creating a well-structured environment for future events and meticulously planning meetings to ensure the success of the InnovateUSA team.
                    </p>
                    <br />
                    <p>
                        Additionally, he looks forward to collaborating with Media Specialist Katie Helge to produce a short film or documentary that captures InnovateUSA&apos;s journey and impact.
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

export default DeryckPage;