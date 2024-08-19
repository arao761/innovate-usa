import React from 'react';
import Head from 'next/head';

const AnkitPage: React.FC = () => {
    return (
        <>
            <Head>
                <title>Ankit Rao - InnovateUSA</title>
                <meta name="description" content="Ankit Rao, Webmaster of InnovateUSA" />
            </Head>
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold mb-4">Ankit Rao</h1>
                <h2 className="text-2xl text-blue-500 mb-4">Webmaster</h2>
                <img 
                    src="https://media.licdn.com/dms/image/D4E03AQEtwmPBQtNGWA/profile-displayphoto-shrink_400_400/0/1711079713525?e=1729123200&v=beta&t=5B2hPSCos-jhaAeqckqteO6pYUznoP0i-wrhi7QdRrw" 
                    alt="Ankit Rao" 
                    className="w-64 h-64 object-cover rounded-full mb-6"
                />
                <div className="prose prose-lg max-w-none">
                    <p>
                        Ankit Rao, a high school senior with a strong passion for computer science and business, is dedicated to coding and website development. As the President and Founder of his school&amos;s Web and Mobile App Development Club, Ankit has developed his skills to a professional level, specializing in creating and managing websites.
                    </p>
                    <p>
                        His extensive experience equips him to oversee the InnovateUSA website, ensuring that it remains a reliable and consistent platform for documenting all campaign activities.
                    </p>
                </div>
            </div>
        </>
    );
};

export default AnkitPage;