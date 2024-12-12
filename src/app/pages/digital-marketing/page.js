'use client';
import React, { useEffect, useState } from 'react';
import Footer from '../../helpers/footer';
import Image from 'next/image';
import DigitalMarketing from '../../static/images/digitalmarketing.png';
import { FaBullhorn, FaRegHandshake, FaChartLine, FaUsers } from 'react-icons/fa';
import { SiGoogleanalytics } from "react-icons/si";
import { HiSearch } from "react-icons/hi";
import { IoIosMail } from "react-icons/io";
import Loader from '../../hooks/Loader';

const categories = [
    {
        title: "SEO Optimization",
        description: "Improve your website&apos;s visibility on search engines to drive organic traffic and increase conversions.",
        icon: <HiSearch />,
    },
    {
        title: "PPC Advertising",
        description: "Leverage paid ads on platforms like Google and social media to generate immediate traffic and targeted leads.",
        icon: <FaBullhorn />,
    },
    {
        title: "Content Marketing",
        description: "Create high-quality, valuable content that engages your audience, builds brand trust, and drives leads.",
        icon: <FaRegHandshake />,
    },
    {
        title: "Email Campaigns",
        description: "Engage with your audience directly through personalized email marketing campaigns that build lasting relationships.",
        icon: <IoIosMail />,
    },
    {
        title: "Social Media Strategy",
        description: "Develop a comprehensive social media strategy to boost brand visibility and foster engagement on platforms like Facebook, Instagram, and LinkedIn.",
        icon: <FaUsers />,
    },
    {
        title: "Analytics & Reporting",
        description: "Use data-driven insights to track performance, optimize campaigns, and improve ROI with detailed analytics and reporting.",
        icon: <SiGoogleanalytics />,
    },
];

const Page = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, [])

    return (
        <div className="relative">
            {loading ? (
                <Loader /> // Show loader while loading
            ) : (
                <>
                    <nav className="bg-white border-b border-gray-200 fixed top-0 left-0 w-full z-50">
                        <div className="flex justify-between items-center w-full h-16 px-10">
                            <div className="text-logo text-black font-bold text-5xl ">SagTech. </div>
                        </div>
                    </nav>
                    <main className="pt-16 mb-10">
                        <div className='relative h-screen w-full'>
                            <div className="absolute inset-0">
                                <Image
                                    src={DigitalMarketing}
                                    alt="Digital Marketing Background"
                                    layout="fill"
                                    objectFit="cover"
                                    quality={100}
                                    className="-z-10"
                                />
                            </div>
                            {/* Two-Column Layout */}
                            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 h-full w-full">
                                {/* Left Column: Content */}
                                <div className="flex flex-col items-center justify-center text-white px-4 sm:px-10">
                                    <h1 className="mt-2 text-center text-xl md:text-2xl font-bold lg:text-3xl mb-10 uppercase">
                                        Accelerating Digital Transformation with Cutting-Edge Solutions.
                                    </h1>
                                    {/* Description Section */}
                                    <p className="mt-4 text-base md:text-lg leading-relaxed">
                                        At SagTech.  Group, we specialize in innovative digital marketing strategies that drive business growth.
                                        Our team leverages the latest trends and technologies to help your brand succeed in the digital era.
                                    </p>
                                    <p className="mt-4 text-base md:text-lg leading-relaxed">
                                        From SEO optimization to data-driven campaigns, we deliver tailored solutions that meet the unique needs
                                        of your business. Let us help you navigate the complexities of the digital landscape and unlock new
                                        opportunities for your brand.
                                    </p>
                                    <p className="mt-4 text-base md:text-lg leading-relaxed">
                                        Join SagTech.  Group in transforming your digital presence and accelerating growth. Together, we’ll elevate
                                        your business to new heights through targeted digital marketing strategies.
                                    </p>
                                </div>
                                {/* Right Column: Empty */}
                                <div className="hidden lg:flex"></div>
                            </div>
                        </div>
                        <div className="bg-white h-full">
                            <div className="p-6">
                                {/* Title Section */}
                                <h2 className="text-2xl font-bold text-center text-black mb-10">
                                    Our Services
                                </h2>

                                {/* Description Section */}
                                <p className="text-center text-gray-700 mb-10">
                                    Explore the variety of digital marketing strategies we offer to drive growth and success for your business.
                                </p>

                                {/* Grid Section */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {categories.map((category, index) => (
                                        <div
                                            key={index}
                                            className="bg-white shadow-lg border border-slate-50 p-6 transition-shadow duration-300"
                                        >
                                            <div className="flex justify-center mb-4">
                                                <div className="p-4 border-2 border-black hover:bg-black hover:text-white rounded-full text-4xl">
                                                    {category.icon}
                                                </div>
                                            </div>
                                            <h3 className="text-lg font-bold text-center text-black">{category.title}</h3>
                                            <p className="text-gray-700 mt-4">{category.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </main>
                    <Footer />
                </>
            )}
        </div>
    )
}

export default Page;
