'use client'
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Footer from '../../helpers/footer';
import Image from 'next/image';
import Flower from '../../static/images/flower.png';
import FrogCatch from '../../static/images/frogcatch.png';
import Tiger from '../../static/images/tiger.png';
import { useInView } from 'react-intersection-observer';
import Loader from '../../hooks/Loader'

const Page = () => {
    const [loading, setLoading] = useState(true);

    const { ref: firstSectionRef, inView: firstSectionInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const { ref: secondSectionRef, inView: secondSectionInView } = useInView({
        triggerOnce: true,
        threshold: 0.8, // Trigger second section at 80% scroll
    });
    const { ref: thirdSectionRef, inView: thirdSectionInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

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
                    <main className="flex flex-col items-center pt-20 w-full">

                        <div className="w-full">

                            {/* First Screen */}
                            <motion.div
                                ref={firstSectionRef}
                                className="h-screen bg-red-500 flex flex-col w-full items-center justify-center relative"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: firstSectionInView ? 1 : 0 }}
                                transition={{ duration: 1 }}
                            >
                                <h1 className='absolute top-6 text-white font-semibold text-2xl md:text-4xl uppercase'>Developments</h1>

                                <div className="absolute z-10 left-6 md:left-20 p-2 top-1/3 md:top-1/2 transform -translate-y-1/2 text-white">
                                    <p className="text-xl italic md:text-2xl lg:text-4xl max-w-xl">
                                        At <span className="text-logo text-black font-bold">SagTech. </span> we specialize in creating innovative and robust mobile and web applications that drive success for businesses and individuals alike.
                                    </p>
                                </div>

                                <motion.div
                                    className="absolute right-12 md:right-32 lg:right-44 top-2/3  md:top-3/2 transform -translate-y-1/2"
                                    initial={{ x: 300, opacity: 0 }}  // Start from right (off-screen)
                                    animate={{ x: firstSectionInView ? 0 : 300, opacity: firstSectionInView ? 1 : 0 }}  // Move to the left when in view
                                    transition={{ duration: 1, type: "spring", stiffness: 100 }}
                                >
                                    <Image
                                        src={Flower}
                                        alt="App Development"
                                        width={400}
                                        height={400}
                                        className="max-w-full h-auto"
                                        draggable={false}
                                    />
                                </motion.div>


                                <div className="absolute right-0 top-0 h-full w-1/6 flex flex-col justify-between bg-yellow-400">
                                    <div className="h-1/3 bg-yellow-500"></div>
                                    <div className="h-1/3 bg-yellow-500"></div>
                                    <div className="h-1/3 bg-yellow-500"></div>
                                </div>
                            </motion.div>

                            {/* Second Screen */}
                            <motion.div
                                ref={secondSectionRef}
                                className="h-screen bg-blue-500 flex flex-col w-full items-center justify-center relative"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: secondSectionInView ? 1 : 0 }}
                                transition={{ duration: 1 }}
                            >
                                <motion.div
                                    className="absolute left-6 md:left-44 top-2/3 md:top-3/2 transform -translate-y-1/2"
                                    initial={{ x: -200, opacity: 0 }}
                                    animate={{ x: secondSectionInView ? 0 : -200, opacity: secondSectionInView ? 1 : 0 }}
                                    transition={{ duration: 1 }}
                                >
                                    <Image
                                        src={FrogCatch}
                                        alt="App Development"
                                        width={400}
                                        height={400}
                                        className="max-w-full h-auto"
                                        draggable={false}
                                    />
                                </motion.div>

                                <div className="absolute z-10 lg:right-6 p-4 top-1/3 md:top-1/2 transform -translate-y-1/2 text-white">
                                    <p className="text-xl italic md:text-2xl lg:text-4xl max-w-4xl">
                                        From ideation to deployment, our team of experienced developers and designers ensures the delivery of high-quality, scalable, and user-friendly applications.
                                        Whether you need a simple mobile app or a complex enterprise solution, <span className="text-logo text-black font-bold">SagTech. </span> is your trusted partner in bringing your vision to life.
                                    </p>
                                </div>

                                <div className="absolute left-0 top-0 h-full w-1/6 flex flex-col justify-between bg-pink-400">
                                    <div className="h-1/3 bg-pink-500"></div>
                                    <div className="h-1/3 bg-pink-500"></div>
                                    <div className="h-1/3 bg-pink-500"></div>
                                </div>
                            </motion.div>

                            {/* Third Screen */}
                            <motion.div
                                ref={thirdSectionRef}
                                className="h-screen bg-green-500 flex flex-col w-full items-center justify-center relative"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: thirdSectionInView ? 1 : 0 }}
                                transition={{ duration: 1 }}
                            >
                                <div className="absolute z-10 left-6 md:left-20 p-2 top-1/3 md:top-1/2 transform -translate-y-1/2 text-white text-center">
                                    <p className="text-xl italic md:text-2xl lg:text-4xl mb-8 max-w-4xl">
                                        Join us in revolutionizing the digital landscape with cutting-edge technology and unparalleled innovation. Your success is our mission!
                                    </p>
                                    <motion.button
                                        className="bg-purple-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-500 hover:text-white border hover:border-double transition duration-300 ease-in-out"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        Join Now
                                    </motion.button>
                                </div>

                                <motion.div
                                    className="absolute right-1 md:right-32 lg:right-40 top-2/3 md:top-3/2 transform -translate-y-1/2"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: thirdSectionInView ? 1 : 0 }}
                                    transition={{ duration: 1, type: "spring", stiffness: 100 }}
                                >
                                    <Image
                                        src={Tiger}
                                        alt="App Development"
                                        width={400}
                                        height={400}
                                        className="max-w-full h-auto"
                                        draggable={false}
                                    />
                                </motion.div>

                                <div className="absolute right-0 top-0 h-full w-1/6 flex flex-col justify-between bg-purple-500">
                                    <div className="h-1/3 bg-purple-500"></div>
                                    <div className="h-1/3 bg-purple-500"></div>
                                    <div className="h-1/3 bg-purple-500"></div>
                                </div>
                            </motion.div>
                        </div>
                    </main>

                    <Footer />
                </>
            )}
        </div>
    );
};

export default Page;
