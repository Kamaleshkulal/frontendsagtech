/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import React, { useState, useEffect } from 'react';
import Footer from '../../helpers/footer';
import Image from 'next/image';
import MissionImage from '../../static/images/ourmission.jpeg';
import VisionImage from '../../static/images/ourvision.jpeg'
import { motion } from 'framer-motion';
import Loader from '../../hooks/Loader'

const page = () => {
    const [isClient, setIsClient] = useState(false);
    const [loading, setLoading] = useState(true);

    // UseEffect to ensure this runs only in the client-side environment
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        if (typeof window !== "undefined") {
            setIsClient(true);
        }
        return () => clearTimeout(timer);
    }, []);


    // Dynamically import 'motion' from 'framer-motion' only on the client-side
    if (typeof window !== 'undefined') {
        const { motion } = require('framer-motion');
    }

    if (!isClient) {
        return null; // Prevent rendering during server-side rendering
    }

    return (
        <div className="relative">
            {loading ? (
                <Loader /> // Show loader while loading
            ) : (
                <>
                    <nav className="bg-white border-b border-gray-200 fixed top-0 left-0 w-full z-50">
                        <div className="flex justify-between items-center w-full h-20 px-10">
                            <div className="text-logo text-black font-bold text-5xl">SagTech.</div>
                        </div>
                    </nav>

                    <div className="pt-20">
                        {/* About Us Section */}
                        <motion.div
                            className="h-screen flex flex-col justify-center items-center bg-gray-200 px-10"
                            initial={{ opacity: 0 }} // Set initial opacity to 0 (invisible)
                            animate={{ opacity: 1 }} // Animate opacity to 1 (visible)
                            transition={{ duration: 1 }} // Set duration of the animation
                        >
                            <div className="max-w-6xl mx-auto text-center">
                                {/* "Our Mission" Text Animation from bottom to top */}
                                <motion.h2
                                    className="lg:text-4xl md:text-3xl text-2xl uppercase font-bold text-gray-800 mb-8 md:mb-16 lg:mb-40"
                                    initial={{ y: 50, opacity: 0 }} // Initial position from the bottom
                                    animate={{ y: 0, opacity: 1 }} // Animate upwards and fade in
                                    transition={{ duration: 1 }}
                                >
                                    Mission
                                </motion.h2>
                                {/* Mission Statement */}
                                <div className="max-w-6xl mx-auto w-full flex flex-col sm:flex-row items-center">
                                    {/* Left Side: Mission Content (Text) Animation from left to right */}
                                    <motion.div
                                        className="w-full sm:w-1/2 sm:pr-10 mb-8 sm:mb-0"
                                        initial={{ x: -200, opacity: 0 }} // Initial position to the left
                                        animate={{ x: 0, opacity: 1 }} // Animate to the original position and fade in
                                        transition={{ duration: 1 }}
                                    >
                                        <motion.p
                                            className="text-gray-600 text-start lg:text-xl leading-7 text-sm relative"
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{ once: true }} // Animation triggers when in view
                                            transition={{ duration: 1 }}
                                        >
                                            <span className="absolute left-0 top-0 text-6xl -translate-x-4 -translate-y-4 text-gray-500">“</span>
                                            <span className="ml-[3ch]"></span> {/* Add 7 character space */}
                                            At IT  <span className="font-bold text-xl gap-4 text-logo">SagTech. </span><span className="font-semibold text-lg">Group,</span>  we are driven by a passion to revolutionize the digital world with innovative software solutions.
                                            Our mission is to empower businesses and individuals by creating cutting-edge technologies that are not only
                                            efficient and secure but also adaptable to the ever-changing landscape of the IT industry.
                                            We strive to foster collaboration, creativity, and continuous learning, ensuring that each project we deliver
                                            exceeds expectations and paves the way for a smarter, more connected future.
                                            <span className="absolute right-0 bottom-0 text-6xl translate-x-4 translate-y-4 text-gray-500">”</span>
                                        </motion.p>
                                    </motion.div>

                                    {/* Right Side: Mission Image Animation from right to left */}
                                    <motion.div
                                        className="w-full sm:w-1/2"
                                        initial={{ x: 200, opacity: 0 }} // Initial position to the right
                                        animate={{ x: 0, opacity: 1 }} // Animate to the original position and fade in
                                        transition={{ duration: 1 }}
                                    >
                                        <motion.div
                                            className="w-full h-auto relative"
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1 }}
                                        >

                                            <Image
                                                src={MissionImage}
                                                alt="Mission Image"
                                                className="w-full h-auto object-cover rounded-lg shadow-lg clip-complex-random-shape"
                                                layout="responsive"
                                                width={500}
                                                height={500}
                                            />
                                        </motion.div>
                                    </motion.div>

                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="h-screen flex flex-col justify-center items-center bg-white px-10"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <div className="max-w-6xl mx-auto text-center">
                                {/* "Our Mission" Text Animation from bottom to top */}
                                <motion.h2
                                    className="lg:text-4xl uppercase md:text-3xl text-2xl font-bold text-gray-800 mb-8 md:mb-16 lg:mb-40"
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 1 }}
                                >
                                    Vision
                                </motion.h2>
                                {/* Mission Statement */}
                                <div className="max-w-6xl mx-auto w-full flex flex-col sm:flex-row items-center">

                                    <motion.div
                                        className="w-full sm:w-1/2"
                                        initial={{ x: 200, opacity: 0 }} // Initial position to the right
                                        animate={{ x: 0, opacity: 1 }} // Animate to the original position and fade in
                                        transition={{ duration: 1 }}
                                    >
                                        <motion.div
                                            className="w-full h-auto relative"
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1 }}
                                        >

                                            <Image
                                                src={VisionImage}
                                                alt="Mission Image"
                                                className="w-full h-auto object-cover rounded-lg shadow-[0px_4px_10px_rgba(0,0,0,0.3)] clip-amoeba-shape"
                                                layout="responsive"
                                                width={500}
                                                height={500}
                                            />

                                        </motion.div>
                                    </motion.div>

                                    <motion.div
                                        className="w-full sm:w-1/2 sm:pr-10 mb-8 sm:mb-0"
                                        initial={{ x: -200, opacity: 0 }} // Initial position to the left
                                        animate={{ x: 0, opacity: 1 }} // Animate to the original position and fade in
                                        transition={{ duration: 1 }}
                                    >
                                        <motion.p
                                            className="text-gray-600 text-start lg:text-xl leading-7 text-sm relative"
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{ once: true }} // Animation triggers when in view
                                            transition={{ duration: 1 }}
                                        >
                                            <span className="absolute left-0 top-0 text-6xl -translate-x-4 -translate-y-4 text-gray-500">“</span>
                                            <span className="ml-[3ch]"></span> {/* Add 7 character space */}
                                            Our vision is to become a global leader in IT solutions, recognized for our unwavering commitment to excellence,
                                            sustainability, and innovation. We aim to build a future where technology bridges gaps, drives progress, and transforms lives.
                                            Through relentless innovation, ethical practices, and a focus on customer-centricity, IT <span className="font-bold text-xl gap-4 text-logo">SagTech. </span><span className="font-semibold text-lg">Group,</span> aspires to inspire and lead the IT industry,
                                            shaping a world where digital experiences are seamless, empowering, and impactful for all.
                                            <span className="absolute right-0 bottom-0 text-6xl translate-x-4 translate-y-4 text-gray-500">”</span>
                                        </motion.p>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <Footer />
                </>
            )}
        </div>
    );
};

export default page;
