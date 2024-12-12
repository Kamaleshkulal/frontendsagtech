'use client'
import React, { useEffect, useState } from 'react';
import { IoSearch } from "react-icons/io5";
import { MdDeveloperMode } from "react-icons/md";
import { MdRocketLaunch } from "react-icons/md";
import { LuBrainCircuit } from "react-icons/lu";
import { CgIfDesign } from "react-icons/cg";
import Footer from '../../helpers/footer';
import Image from 'next/image';
import BusinessDevelopment from '../../static/images/businessdevelopment.png';
import Loader from '../../hooks/Loader'

const categories = [
    {
        icon: <IoSearch />,
        title: 'Discovery and Research',
        description: 'We begin by conducting thorough research to identify opportunities, challenges, and market trends to guide strategy development.',
    },
    {
        icon: <LuBrainCircuit />,
        title: 'Strategy and Planning',
        description: 'Our team collaborates to devise actionable strategies that align with business goals and objectives, ensuring measurable outcomes.',
    },
    {
        icon: <CgIfDesign />,
        title: 'Design and Prototyping',
        description: 'We focus on developing creative solutions, from initial designs to working prototypes, ensuring every detail meets client needs.',
    },
    {
        icon: <MdDeveloperMode />,
        title: 'Development and Implementation',
        description: 'Our development process is focused on building high-quality, scalable solutions that can be efficiently implemented and optimized.',
    },
    {
        icon: <MdRocketLaunch />,
        title: 'Launch and Optimization',
        description: 'We ensure successful deployment and provide ongoing optimization to ensure maximum performance and sustained growth.',
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
                                    src={BusinessDevelopment}
                                    alt="Business Development Background"
                                    layout="fill"
                                    objectFit="cover"
                                    quality={100}
                                    className="-z-10"
                                />
                            </div>
                            {/* Two-Column Layout */}
                            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 h-full w-full">
                                {/* Left Column: Content */}
                                <div className="flex flex-col items-center justify-center text-black px-4 sm:px-10">
                                    <h1 className="mt-2 text-center text-xl md:text-2xl  font-bold lg:text-3xl mb-10 uppercase">
                                        Empowering Growth with Business Development Solutions.
                                    </h1>
                                    {/* Description Section */}
                                    <p className="mt-4 text-base md:text-lg leading-relaxed">
                                        SagTech.  Group specializes in delivering innovative business development strategies that drive success.
                                        From identifying growth opportunities to crafting tailored solutions, we empower organizations to
                                        achieve their goals and stay ahead in competitive markets.
                                    </p>
                                    <p className="mt-4 text-base md:text-lg leading-relaxed">
                                        Join us in creating pathways for sustainable growth and innovation. Together, we can build a
                                        prosperous future by transforming challenges into opportunities.
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
                                    Explore the variety of business solutions we provide to help you thrive.
                                </p>


                                {/* Grid Section */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {categories.map((category, index) => (
                                        <div
                                            key={index}
                                            className="bg-white shadow-lg border border-slate-50 p-6  transition-shadow duration-300"
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
    );
};


export default Page;

