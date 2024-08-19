import React from 'react';
import Head from 'next/head';

const RoshiniPage: React.FC = () => {
    return (
        <>
            <Head>
                <title>Roshini Mantena - InnovateUSA</title>
                <meta name="description" content="Roshini Mantena, Program Manager of InnovateUSA" />
            </Head>
            <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
                <div className="container mx-auto px-4 py-16">
                    <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
                        <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
                            <div className="relative">
                                <div className="absolute inset-0 bg-blue-500 rounded-full opacity-10 blur-xl"></div>
                                <img 
                                    src="/image4.jpg" 
                                    alt="Roshini Mantena" 
                                    className="relative w-64 h-64 object-cover rounded-full shadow-xl border-4 border-white"
                                />
                            </div>
                            <div className="flex-1">
                                <h1 className="text-4xl md:text-5xl font-bold mb-2 text-gray-800">Roshini Mantena</h1>
                                <h2 className="text-2xl md:text-3xl text-blue-600 mb-6">Program Manager</h2>
                                <div className="prose prose-lg max-w-none text-gray-600">
                                    <p className="mb-4">
                                    Roshini Mantena, a high school senior with a passion for business and computer science, plays a pivotal role in the development and growth of InnovateUSA. Her dedication to the organization is evident through her efforts in organizing and leading workshops that raise awareness about InnovateUSA&apos;s mission.
                    </p>
                    <p>
                        Roshini&apos;s commitment to educating the youth has been instrumental in expanding the campaign&apos;s reach, as she strives to ensure that the younger generation develops a strong understanding of the American Enterprise System.
                    </p>
                    <p>
                        As InnovateUSA continues to grow, Roshini remains focused on creating impactful educational experiences that inspire and empower future leaders.
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

export default RoshiniPage;