import React from 'react';
import Head from 'next/head';

const KatiePage: React.FC = () => {
    return (
        <>
            <Head>
                <title>Katie Helge - InnovateUSA</title>
                <meta name="description" content="Katie Helge, Director of Media at InnovateUSA" />
            </Head>
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold mb-4">Katie Helge</h1>
                <h2 className="text-2xl text-blue-500 mb-4">Director of Media</h2>
                <img 
                    src="https://media.licdn.com/dms/image/D4D03AQHnAvzARWprdQ/profile-displayphoto-shrink_800_800/0/1722291581569?e=1729123200&v=beta&t=aF5dHBrrMUoZ84tPCIcTPxXJz_nTWlDTVwfMT763kd4" 
                    alt="Katie Helge" 
                    className="w-64 h-64 object-cover rounded-full mb-6"
                />
                <div className="prose prose-lg max-w-none">
                    <p>
                        Katie Helge is a high school junior with a passion for aviation and business. As President of the debate club, she has refined her skills to become a poised and influential leader, determined to make a meaningful impact on her community and school.
                    </p>
                    <p>
                        With her natural charisma, Katie excels in competitive events and is committed to leveraging her social media prowess to expand the reach of InnovateUSA beyond her school and local community.
                    </p>
                    <p>
                        Her dedication to consistent, impactful posting is driving the initiative&apos;s growth and success.
                    </p>
                </div>
            </div>
        </>
    );
};

export default KatiePage;