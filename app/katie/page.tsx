import React from 'react';
import Head from 'next/head';

const KatiePage: React.FC = () => {
    return (
        <>
            <Head>
                <title>Katie Helge - InnovateUSA</title>
                <meta name="description" content="Ankit Rao, Webmaster of InnovateUSA" />
            </Head>
            <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
                <div className="container mx-auto px-4 py-16">
                    <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
                        <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
                            <div className="relative">
                                <div className="absolute inset-0 bg-blue-500 rounded-full opacity-10 blur-xl"></div>
                                <img 
                                    src="https://media.licdn.com/dms/image/D4D03AQHnAvzARWprdQ/profile-displayphoto-shrink_800_800/0/1722291581569?e=1729123200&v=beta&t=aF5dHBrrMUoZ84tPCIcTPxXJz_nTWlDTVwfMT763kd4" 
                                    alt="Katie Helge" 
                                    className="relative w-64 h-64 object-cover rounded-full shadow-xl border-4 border-white"
                                />
                            </div>
                            <div className="flex-1">
                                <h1 className="text-4xl md:text-5xl font-bold mb-2 text-gray-800">Katie Helge</h1>
                                <h2 className="text-2xl md:text-3xl text-blue-600 mb-6">Director of Media</h2>
                                <div className="prose prose-lg max-w-none text-gray-600">
                                    <p className="mb-4">
                                    Katie Helge is a high school junior with a passion for aviation and business. As President of the debate club, she has refined her skills to become a poised and influential leader, determined to make a meaningful impact on her community and school.
                    </p>
                    <p>
                        With her natural charisma, Katie excels in competitive events and is committed to leveraging her social media prowess to expand the reach of InnovateUSA beyond her school and local community.
                    </p>
                    <br />
                    <p>
                        Her dedication to consistent, impactful posting is driving the initiative&apos;s growth and success.
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

export default KatiePage;