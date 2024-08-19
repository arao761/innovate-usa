import React from 'react';
import Head from 'next/head';

const SahasraPage: React.FC = () => {
    return (
        <>
            <Head>
                <title>Sahasra Jonnalagadda - InnovateUSA</title>
                <meta name="description" content="Sahasra Jonnalagadda, Founder and Executive Director of InnovateUSA" />
            </Head>
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold mb-4">Sahasra Jonnalagadda</h1>
                <h2 className="text-2xl text-blue-500 mb-4">Founder and Executive Director</h2>
                <img 
                    src="https://media.licdn.com/dms/image/D4E03AQF8wnLbVprK5A/profile-displayphoto-shrink_400_400/0/1713407413055?e=1729123200&v=beta&t=9hE0GRLmBC7m_6u07f8b5qKfeHZQLihHMgOi0KcsHbw" 
                    alt="Sahasra Jonnalagadda" 
                    className="w-64 h-64 object-cover rounded-full mb-6"
                />
                <div className="prose prose-lg max-w-none">
                    <p>
                        Sahasra Jonnalagadda, a high school senior with a deep passion for politics, economics, and business, founded InnovateUSA after recognizing a gap in business knowledge among her peers. This insight led her to launch an educational campaign focused on promoting the American Enterprise system and fostering a deeper understanding of business principles.
                    </p>
                    <p>
                        Sahasra&amos;s commitment to empowering others through education drives the mission of InnovateUSA. Her experience as a Virginia Senate and a Congressional campaign intern helped her discover her niche interest at the intersection of politics and education.
                    </p>
                    <p>
                        As the Founder and Executive Director of InnovateUSA, she oversees the overall vision, strategy, and execution of the campaign and is responsible for guiding the project&amos;s direction. Sahasra is excited to expand InnovateUSA and work alongside her team to ensure the campaign&amos;s success.
                    </p>
                </div>
            </div>
        </>
    );
};

export default SahasraPage;