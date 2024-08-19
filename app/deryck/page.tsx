import React from 'react';
import Head from 'next/head';

const DeryckPage: React.FC = () => {
    return (
        <>
            <Head>
                <title>Deryck Toney - InnovateUSA</title>
                <meta name="description" content="Deryck Toney, Secretary at InnovateUSA" />
            </Head>
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold mb-4">Deryck Toney</h1>
                <h2 className="text-2xl text-blue-500 mb-4">Secretary</h2>
                <img 
                    src="/image7.jpg" 
                    alt="Deryck Toney" 
                    className="w-64 h-64 object-cover rounded-full mb-6"
                />
                <div className="prose prose-lg max-w-none">
                    <p>
                        Deryck Toney is a dedicated high school senior with a strong interest in business and film. He is passionate about utilizing creative strategies to serve his community, a mission he aims to advance through his work with InnovateUSA.
                    </p>
                    <p>
                        As Director of Education for his school&apos;s Model UN chapter, Deryck has successfully organized a series of impactful workshops, honing his organizational skills. He is committed to creating a well-structured environment for future events and meticulously planning meetings to ensure the success of the InnovateUSA team.
                    </p>
                    <p>
                        Additionally, he looks forward to collaborating with Media Specialist Katie Helge to produce a short film or documentary that captures InnovateUSA&apos;s journey and impact.
                    </p>
                </div>
            </div>
        </>
    );
};

export default DeryckPage;