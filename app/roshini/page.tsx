import React from 'react';
import Head from 'next/head';

const RoshiniPage: React.FC = () => {
    return (
        <>
            <Head>
                <title>Roshini Mantena - InnovateUSA</title>
                <meta name="description" content="Roshini Mantena, Program Manager of InnovateUSA" />
            </Head>
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold mb-4">Roshini Mantena</h1>
                <h2 className="text-2xl text-blue-500 mb-4">Program Manager</h2>
                <img 
                    src="/image4.jpg" 
                    alt="Roshini Mantena" 
                    className="w-64 h-64 object-cover rounded-full mb-6"
                />
                <div className="prose prose-lg max-w-none">
                    <p>
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
        </>
    );
};

export default RoshiniPage;