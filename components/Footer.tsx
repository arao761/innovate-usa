import React from 'react';
import { FaTiktok, FaInstagram } from 'react-icons/fa';
import { FaSpotify } from 'react-icons/fa6';

const Footer: React.FC = () => {
    return (
        <footer className="bg-blue-900 text-white py-8">
            <div className="container mx-auto px-6 flex flex-col items-center">
                <div className="mb-4 text-center">
                    <h2 className="text-3xl font-bold mb-2">Connect with Us</h2>
                    <p className="text-lg mb-6">Follow us on social media to stay updated with the latest news and updates.</p>
                    <div className="flex justify-center">
                        <a href="https://www.tiktok.com/@innovateusa?_t=8onHfJRk6lK&_r=1" className="text-white text-3xl mx-2 hover:text-blue-400" target="_blank" rel="noopener noreferrer">
                            <FaTiktok />
                        </a>
                        <a href="https://www.instagram.com/innovateusa24?igsh=dTFpczV6bXFndTR4" className="text-white text-3xl mx-2 hover:text-blue-400" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                        <a href="https://open.spotify.com/show/0VCChyeG3WrmjVqvlYasPG" className="text-white text-3xl mx-2 hover:text-blue-400" target="_blank" rel="noopener noreferrer">
                            <FaSpotify />
                        </a>
                    </div>
                </div>
                <div className="text-center">
                    <p className="mb-2">© 2024 InnovateUSA. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;