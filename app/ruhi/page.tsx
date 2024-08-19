import React from 'react';
import Head from 'next/head';

const RuhiPage: React.FC = () => {
    return (
        <>
            <Head>
                <title>Ruhi Sharma - InnovateUSA</title>
                <meta name="description" content="Ruhi Sharma, Treasurer at InnovateUSA" />
            </Head>
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold mb-4">Ruhi Sharma</h1>
                <h2 className="text-2xl text-blue-500 mb-4">Treasurer</h2>
                <img 
                    src="https://media.licdn.com/dms/image/v2/D4D03AQFGpuBXLPUpDA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1723264568304?e=1729123200&v=beta&t=FMXTh2dRof4NZSkln9yB0VewhIAQUq8T_eZoXrDBXeg" 
                    alt="Ruhi Sharma" 
                    className="w-64 h-64 object-cover rounded-full mb-6"
                />
                <div className="prose prose-lg max-w-none">
                    <p>
                        Ruhi Sharma, a high school junior with a growing passion for business and finance, aspires to become a financial advisor. She is currently spearheading fundraisers to support InnovateUSA, leveraging her skills from her involvement in her school&apos;s DECA chapter.
                    </p>
                    <p>
                        Ruhi is committed to using her financial expertise to identify and execute the most effective fundraising strategies, ensuring each initiative contributes significantly to InnovateUSA&apos;s growth.
                    </p>
                    <p>
                        Her extensive experience enables her to manage all of InnovateUSA&apos;s fundraising efforts, driving the team&apos;s success through well-planned and impactful events.
                    </p>
                </div>
            </div>
        </>
    );
};

export default RuhiPage;