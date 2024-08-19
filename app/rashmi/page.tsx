import React from 'react';
import Head from 'next/head';

const RashmiPage: React.FC = () => {
    return (
        <>
            <Head>
                <title>Rashmi Mantena - InnovateUSA</title>
                <meta name="description" content="Rashmi Mantena, Partnership Director of InnovateUSA" />
            </Head>
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold mb-4">Rashmi Mantena</h1>
                <h2 className="text-2xl text-blue-500 mb-4">Partnership Director</h2>
                <img 
                    src="/image5.jpg" 
                    alt="Rashmi Mantena" 
                    className="w-64 h-64 object-cover rounded-full mb-6"
                />
                <div className="prose prose-lg max-w-none">
                    <p>
                        Rashmi Mantena is a high school senior with a passion for business and computer science, playing a crucial role in InnovateUSA&amos;s growth and success. As Partnership Director, she focuses on building strategic partnerships with businesses, educational institutions, and community organizations to support InnovateUSA&amos;s mission and enhance its impact.
                    </p>
                    <p>
                        Rashmi&amos;s dedication is evident in her active involvement in the organization&amos;s activities, ensuring InnovateUSA remains engaged with the community. Her goal is to spread awareness not only about the American Enterprise System but also business principles.
                    </p>
                    <p>
                        This year, Rashmi is determined to attract as much attention as possible, leveraging all her skills to achieve this goal.
                    </p>
                </div>
            </div>
        </>
    );
};

export default RashmiPage;