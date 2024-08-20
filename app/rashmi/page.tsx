import React from 'react';
import Head from 'next/head';

const RashmiPage: React.FC = () => {
    return (
        <>
            <Head>
                <title>Rashmi Mantena - InnovateUSA</title>
                <meta name="description" content="Rashmi Mantena, Partnership Director of InnovateUSA" />
            </Head>
            <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
                <div className="container mx-auto px-4 py-16">
                    <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
                        <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
                            <div className="relative">
                                <div className="absolute inset-0 bg-blue-500 rounded-full opacity-10 blur-xl"></div>
                                <img 
                                    src="/image5.jpg" 
                                    alt="Rashmi Mantena" 
                                    className="relative w-64 h-64 object-cover rounded-full shadow-xl border-4 border-white"
                                />
                            </div>
                            <div className="flex-1">
                                <h1 className="text-4xl md:text-5xl font-bold mb-2 text-gray-800">Rashmi Mantena</h1>
                                <h2 className="text-2xl md:text-3xl text-blue-600 mb-6">Co-Founder and Partnership Director</h2>
                                <div className="prose prose-lg max-w-none text-gray-600">
                                    <p className="mb-4">
                                    Rashmi Mantena is a high school senior with a passion for business and computer science, playing a crucial role in InnovateUSA&apos;s growth and success. As Co-Founder and Partnership Director, she focuses on building strategic partnerships with businesses, educational institutions, and community organizations to support InnovateUSA&apos;s mission and enhance its impact.
                    </p>
                    <p>
                        Rashmi&apos;s dedication is evident in her active involvement in the organization&apos;s activities, ensuring InnovateUSA remains engaged with the community. Her goal is to spread awareness not only about the American Enterprise System but also business principles.
                    </p>
                    <br />
                    <p>
                        This year, Rashmi is determined to attract as much attention as possible, leveraging all her skills to achieve this goal.
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

export default RashmiPage;