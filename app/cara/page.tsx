import React from 'react';
import Head from 'next/head';

const CaraPage: React.FC = () => {
    return (
        <>
            <Head>
                <title>Cara King - InnovateUSA</title>
                <meta name="description" content="Cara King, Director of Public Affairs at InnovateUSA" />
            </Head>
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold mb-4">Cara King</h1>
                <h2 className="text-2xl text-blue-500 mb-4">Director of Public Affairs</h2>
                <img 
                    src="/image6.jpg" 
                    alt="Cara King" 
                    className="w-64 h-64 object-cover rounded-full mb-6"
                />
                <div className="prose prose-lg max-w-none">
                    <p>
                        Cara King, a high school senior with a deep passion for journalism, uses her creativity to make a meaningful impact on her community. Whether through large or small initiatives, Cara&apos;s commitment to service shines through.
                    </p>
                    <p>
                        As a member of the school&apos;s SCA, she excels in communication and collaboration, fostering strong connections within the InnovateUSA team. Her talent for crafting strategic plans and engaging everyone in their roles strengthens the team&apos;s cohesion.
                    </p>
                    <p>
                        Cara is also devoted to encouraging partnerships with other organizations to promote the significance of the American Enterprise System in today&apos;s world.
                    </p>
                </div>
            </div>
        </>
    );
};

export default CaraPage;