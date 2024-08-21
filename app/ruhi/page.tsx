import React from 'react';
import Head from 'next/head';

const RuhiPage: React.FC = () => {
    return (
        <>
            <Head>
                <title>Ruhi Sharma - InnovateUSA</title>
                <meta name="description" content="Ruhi Sharma, Treasurer at InnovateUSA" />
            </Head>
            <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900">
                <div className="container mx-auto px-4 py-16">
                    <div className="bg-gray-100 rounded-3xl shadow-2xl p-8 md:p-12">
                        <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
                            <div className="relative">
                                <div className="absolute inset-0 bg-blue-500 rounded-full opacity-10 blur-xl"></div>
                                <img 
                                    src="https://media.licdn.com/dms/image/v2/D4D03AQFGpuBXLPUpDA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1723264568304?e=1729123200&v=beta&t=FMXTh2dRof4NZSkln9yB0VewhIAQUq8T_eZoXrDBXeg" 
                                    alt="Ruhi Sharma" 
                                    className="relative w-64 h-64 object-cover rounded-full shadow-xl border-4 border-white"
                                />
                            </div>
                            <div className="flex-1">
                                <h1 className="text-4xl md:text-5xl font-bold mb-2 text-gray-800">Ruhi Sharma</h1>
                                <h2 className="text-2xl md:text-3xl text-blue-600 mb-6">Treasurer</h2>
                                <div className="prose prose-lg max-w-none text-gray-600">
                                    <p className="mb-4">
                                    Ruhi Sharma, a high school junior with a growing passion for business and finance, aspires to become a financial advisor. She is currently spearheading fundraisers to support InnovateUSA, leveraging her skills from her involvement in her school&apos;s DECA chapter.
                    </p>
                    <p>
                        Ruhi is committed to using her financial expertise to identify and execute the most effective fundraising strategies, ensuring each initiative contributes significantly to InnovateUSA&apos;s growth.
                    </p>
                    <br />
                    <p>
                        Her extensive experience enables her to manage all of InnovateUSA&apos;s fundraising efforts, driving the team&apos;s success through well-planned and impactful events.
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

export default RuhiPage;