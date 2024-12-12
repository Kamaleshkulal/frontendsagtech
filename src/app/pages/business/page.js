'use client'
import { useEffect, useState } from 'react';
import Footer from '../../helpers/footer';
import Image from 'next/image';
import WelcomeBg from '../../static/images/welcomebg.jpeg';
import CoffeeShop from '../../static/images/tomscaffee.png';
import University from '../../static/images/university.png';
import HealthCare from '../../static/images/healthcare.png';
import { motion } from 'framer-motion';
import Loader from '../../hooks/Loader'

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
                        <div className="flex justify-between items-center w-full h-20 px-10">
                            <div className="text-logo text-black font-bold text-5xl">SagTech. </div>
                        </div>
                    </nav>
                    <div className="pt-20">
                        <div className="relative h-screen w-full">
                            {/* Directly using Image for the background */}
                            <Image
                                src={WelcomeBg}
                                alt="Background"
                                fill
                                priority
                                className="absolute inset-0 z-[-1]"
                                style={{ objectFit: 'cover' }}
                            />
                            {/* Single card with images and content */}
                            <div className="absolute inset-0 flex items-center justify-center px-4">
                                {/* Card wrapped with motion for animation */}
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1.5 }}
                                    className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 md:p-8 max-w-4xl text-center"
                                >
                                    {/* Content description */}
                                    <motion.div
                                        className="text-xl font-semibold text-gray-600"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 1 }}
                                    >
                                        Comprehensive IT Solutions
                                    </motion.div>
                                    <motion.div
                                        className="text-gray-700 mt-4 text-justify"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 1.2 }}
                                    >
                                        At SAG Group, we specialize in delivering customized IT solutions to a diverse range of industries. Whether it’s supporting Retail and E-commerce, Pharmaceuticals, Finance and Banking, Industry and Manufacturing, educational institutions, Government, or healthcare organizations, we provide reliable IT resources and innovative services designed to optimize operations and boost productivity.
                                    </motion.div>
                                    <motion.div
                                        className="text-gray-700 mt-4 text-justify"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 1.4 }}
                                    >
                                        Our expertise includes cutting-edge services like app development, web design, blockchain
                                        solutions, and emerging technologies such as silicon computing. We also excel in software
                                        consulting, cloud solutions, digital advertising, and creating customized solutions for
                                        businesses of all sizes.
                                    </motion.div>
                                    {/* Images below the text */}
                                    <div className="flex flex-wrap justify-center gap-6 mt-6">
                                        <motion.div
                                            className="relative w-32 h-32 md:w-40 md:h-40"
                                            initial={{ opacity: 0, y: 50 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 1, delay: 0.2 }}
                                        >
                                            <Image
                                                src={CoffeeShop}
                                                alt="Coffee Shop"
                                                fill
                                                style={{ objectFit: 'cover' }}
                                                className="rounded-lg"
                                                draggable={false}
                                            />
                                        </motion.div>
                                        <motion.div
                                            className="relative  w-32 h-32 md:w-40 md:h-40"
                                            initial={{ opacity: 0, y: 50 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 1, delay: 0.4 }}
                                        >
                                            <Image
                                                src={University}
                                                alt="Schools"
                                                fill
                                                style={{ objectFit: 'cover' }}
                                                className="rounded-lg"
                                                draggable={false}
                                            />
                                        </motion.div>
                                        <motion.div
                                            className="relative  w-32 h-32 md:w-40 md:h-40"
                                            initial={{ opacity: 0, y: 50 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 1, delay: 0.6 }}
                                        >
                                            <Image
                                                src={HealthCare}
                                                alt="Healthcare"
                                                fill
                                                style={{ objectFit: 'cover' }}
                                                className="rounded-lg"
                                                draggable={false}
                                            />
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </>
            )}
        </div>
    );
};

export default Page;
