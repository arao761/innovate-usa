import React from 'react';
import Head from 'next/head';

const SahasraPage: React.FC = () => {
    return (
        <>
            <Head>
                <title>Sahasra Jonnalagadda - InnovateUSA</title>
                <meta name="description" content="Sahasra Jonnalagadda, Founder and Executive Director of InnovateUSA" />
            </Head>
            <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
                <div className="container mx-auto px-4 py-16">
                    <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
                        <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
                            <div className="relative">
                                <div className="absolute inset-0 bg-blue-500 rounded-full opacity-10 blur-xl"></div>
                                <img 
                                    src="https://media.licdn.com/dms/image/D4E03AQF8wnLbVprK5A/profile-displayphoto-shrink_400_400/0/1713407413055?e=1729123200&v=beta&t=9hE0GRLmBC7m_6u07f8b5qKfeHZQLihHMgOi0KcsHbw" 
                                    alt="Sahasra Jonnalagadda" 
                                    className="relative w-64 h-64 object-cover rounded-full shadow-xl border-4 border-white"
                                />
                            </div>
                            <div className="flex-1">
                                <h1 className="text-4xl md:text-5xl font-bold mb-2 text-gray-800">Sahasra Jonnalagadda</h1>
                                <h2 className="text-2xl md:text-3xl text-blue-600 mb-6">Co-Founder and Executive Director</h2>
                                <div className="prose prose-lg max-w-none text-gray-600">
                                    <p className="mb-4">
                                    Sahasra Jonnalagadda, a high school senior with a deep passion for politics, economics, and business, founded InnovateUSA after recognizing a gap in business knowledge among her peers. This insight led her to launch an educational campaign focused on promoting the American Enterprise system and fostering a deeper understanding of business principles.
                                    </p>
                    <p>
                        Sahasra&apos;s commitment to empowering others through education drives the mission of InnovateUSA. Her experience as a Virginia Senate and a Congressional campaign intern helped her discover her niche interest at the intersection of politics and education.
                    </p>

                    <br />
                    
                    <p>
                        As the Co-Founder and Executive Director of InnovateUSA, she oversees the overall vision, strategy, and execution of the campaign and is responsible for guiding the project&apos;s direction. Sahasra is excited to expand InnovateUSA and work alongside her team to ensure the campaign&apos;s success.
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

export default SahasraPage;