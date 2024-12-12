"use client";
import React, { useEffect, useState } from 'react';
import bg from '../../static/images/dd.jpeg'; // Background image
import Image from 'next/image'; // Next.js image component
import Footer from '@/app/helpers/footer'; // Footer component
import { motion } from 'framer-motion'; // Framer Motion for animations
import AppDevelopment from '../../static/images/appdevelopement.png'; // Image for Mobile Development service
import BlockChainDevelopment from '../../static/images/blockchaindevelopment.png';
import SoftwareConsulting from '../../static/images/softwareconsulting.png';
import CloudSolution from '../../static/images/clouddevelopment.jpg';
import DigitalAdvertising from '../../static/images/digitaladversting.png';
import Loader from '../../hooks/Loader'

const services = [
    {
        title: 'App Development',
        description: 'We specialize in creating user-friendly mobile applications tailored to meet your business needs. Our team utilizes the latest technologies to develop high-performance apps for both iOS and Android platforms, ensuring seamless user experiences.',
        icon: AppDevelopment,
    },
    {
        title: 'Blockchain Services',
        description: 'Our blockchain services provide secure and transparent solutions for various industries. We offer smart contract development, decentralized application (dApp) creation, and blockchain integration to enhance security, transparency, and efficiency in your operations.',
        icon: BlockChainDevelopment,
    },
    {
        title: 'Software Consulting',
        description: 'Our experienced consultants will help you navigate the complexities of software development. We provide strategic advice, project management, and technical expertise to help you achieve your software goals efficiently and effectively.',
        icon: SoftwareConsulting,
    },
    {
        title: 'Cloud Solutions',
        description: 'Transform your business with our cloud solutions that offer scalability, flexibility, and security. We help you migrate to the cloud, optimize cloud infrastructure, and manage your cloud services for enhanced performance and cost efficiency.',
        icon: CloudSolution,
    },
    {
        title: 'Digital Advertising',
        description: 'Maximize your reach with our digital advertising services. We create targeted advertising campaigns across various platforms, utilizing data analytics to ensure your message reaches the right audience at the right time, boosting your brand visibility and engagement.',
        icon: DigitalAdvertising,
    },
];

const OurServices = () => {
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
                    {/* Fixed Navbar */}
                    <nav className="bg-white border-b border-gray-200 fixed top-0 left-0 w-full z-50">
                        <div className="flex justify-between items-center w-full h-20 px-10">
                            <div className="text-logo text-black font-bold text-5xl">SagTech. </div>
                        </div>
                    </nav>

                    {/* Main Content */}
                    <div className="flex flex-col items-center p-8 mt-20">
                        {/* Title */}
                        <h2 className="text-3xl font-semibold mb-6">Our Services</h2>

                        {/* Central Image with Fade-In Animation */}
                        <motion.div
                            className="w-full flex p-3 justify-center mb-8"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Image
                                src={bg}
                                alt="Our Services"
                                className="rounded-lg object-cover w-full max-w-6xl md:max-h-96"
                                width={1920}
                                height={1080}
                            />
                        </motion.div>

                        {/* Services Cards with Hover and Staggered Animation */}
                        <motion.div
                            className="flex flex-wrap justify-center gap-6 w-full -mt-20"
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        delayChildren: 0.3,
                                        staggerChildren: 0.2
                                    }
                                }
                            }}
                        >
                            {services.map((service, index) => (
                                <motion.div
                                    key={index}
                                    className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md text-center w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 relative"
                                    style={{ minHeight: '300px', maxWidth: '400px' }}
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0 }
                                    }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    {/* Icon */}
                                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black rounded-full p-3 border-4 border-white flex items-center justify-center" style={{ width: '100px', height: '100px' }}>
                                        <Image
                                            src={service.icon}
                                            alt={service.title}
                                            className="object-cover rounded-full"
                                            width={100}
                                            height={100}
                                            style={{ objectFit: 'contain' }}
                                        />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-semibold mb-2 mt-12">{service.title}</h3>

                                    {/* Description */}
                                    <p className="text-gray-600 mb-4 line-clamp-4">{service.description}</p>

                                    {/* More Button */}
                                    <button className="text-blue-500 font-semibold">MORE</button>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Footer */}
                    <Footer />
                </>
            )}
        </div>
    );
};

export default OurServices;
