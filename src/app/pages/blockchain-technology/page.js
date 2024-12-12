'use client'
import React, { useEffect, useState } from 'react';
import Footer from '../../helpers/footer';
import Image from 'next/image';
import BlockchainTechnology from '../../static/images/blockchain-technology.jpeg'
import BannerBlockchainTechnology from '../../static/images/bannerblockchaintechnology.jpeg'
import { SiHiveBlockchain } from "react-icons/si";
import { FaKey } from "react-icons/fa6";
import { MdOutlinePublic } from "react-icons/md";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { GrStorage } from "react-icons/gr";
import Loader from '../../hooks/Loader'

const Page = () => {

    const [loading, setLoading] = useState(true);

    const categories = [
        {
            title: "Blockchain-as-a-Service (BaaS) Platforms",
            description:
                "Simplify blockchain adoption with platforms like Azure, AWS, IBM, and Oracle. These services manage infrastructure, scalability, and security.",
            icon: <SiHiveBlockchain />
        },
        {
            title: "Permissioned Blockchain Platforms",
            description:
                "For secure, private blockchains tailored to enterprise needs. Popular platforms include Hyperledger Fabric, Corda, and Quorum.",
            icon: <FaKey />
        },
        {
            title: "Public Blockchain Platforms",
            description:
                "Ideal for decentralized, transparent applications. Key platforms are Ethereum, Solana, Binance Smart Chain, and Polygon.",
            icon: <MdOutlinePublic />
        },
        {
            title: "Specialized Blockchain Solutions",
            description:
                "Industry-specific solutions like Ripple for payments, VeChain for supply chain, and Chainlink for decentralized oracles.",
            icon: <AiFillSafetyCertificate />
        },
        {
            title: "Decentralized Storage Solutions",
            description:
                "Secure data storage with IPFS, Filecoin, and Storj. Perfect for businesses needing decentralized cloud solutions.",
            icon: <GrStorage />
        },
    ];

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
                        <div className="flex justify-between items-center w-full h-16 px-5 sm:px-10">
                            <div className="text-logo text-black font-bold text-3xl sm:text-5xl">SagTech. </div>
                        </div>
                    </nav>
                    <main className="pt-16 ">
                        <div className='relative h-screen w-full'>
                            <div className="absolute inset-0">
                                <Image
                                    src={BlockchainTechnology}
                                    alt="Blockchain Technology Background"
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
                                        Redefining Trust and Transparency with Blockchain Solutions.
                                    </h1>
                                    {/* Description Section */}

                                    <p className="mt-4 text-base md:text-lg leading-relaxed">
                                        SagTech.  Group is a pioneering platform that leverages blockchain technology to solve real-world problems.
                                        From secure transactions to decentralized applications, we aim to empower individuals and businesses
                                        with tools to thrive in the digital age. Our mission is to create a more transparent and equitable
                                        future through cutting-edge innovations.
                                    </p>
                                    <p className="mt-4 text-base md:text-lg leading-relaxed">
                                        Join us as we explore the limitless possibilities of blockchain. Together, we can reshape industries,
                                        inspire change, and build a smarter tomorrow.
                                    </p>
                                </div>
                                {/* Right Column: Empty */}
                                <div className="hidden lg:flex"></div>
                            </div>
                        </div>
                        <div className="bg-white h-full ">
                            <div className="p-6">
                                {/* Title Section */}
                                <h2 className="text-2xl font-bold text-center text-black mb-10">
                                    Our Services
                                </h2>

                                {/* Description Section */}
                                <p className="text-center text-gray-700 mb-10">
                                    We offer a range of services designed to help you succeed. Our expert team is dedicated to providing innovative solutions tailored to your needs. Whether it&apos;s enhancing performance, delivering cutting-edge solutions, or providing continuous support, we are here to help you thrive in every aspect.
                                </p>


                                {/* Grid Section */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {categories.map((category, index) => (
                                        <div
                                            key={index}
                                            className="bg-white shadow-lg border border-slate-50 p-6  transition-shadow duration-300"
                                        >
                                            <div className="flex justify-center mb-4">
                                                <div className='p-4 border-2 border-black rounded-full text-4xl'>
                                                    {category.icon}
                                                </div>
                                            </div>
                                            <h3 className="text-lg font-bold text-center text-black">{category.title}</h3>
                                            <p className="text-gray-700 mt-4">{category.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative w-full mt-6 h-[200px] md:h-[300px] lg:h-[300px]">
                                <div className="relative w-full h-full">
                                    <Image
                                        src={BannerBlockchainTechnology}
                                        alt="writer"
                                        fill
                                        style={{ objectFit: "cover" }}
                                        className="filter grayscale"
                                    />
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
