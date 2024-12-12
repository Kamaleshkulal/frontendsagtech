'use client';
import React, { useEffect, useState, Suspense, useMemo } from 'react';
import Footer from '../../helpers/footer';
import Image from 'next/image';
import Banner from '../../static/images/banner.jpeg';
import { motion } from 'framer-motion';
import Loader from '../../hooks/Loader'
// Dynamic imports for icons
const iconComponents = {
    FaRegHospital: React.lazy(() => import('react-icons/fa').then(mod => ({ default: mod.FaRegHospital }))),
    IoCartOutline: React.lazy(() => import('react-icons/io5').then(mod => ({ default: mod.IoCartOutline }))),
    MdOutlineSchool: React.lazy(() => import('react-icons/md').then(mod => ({ default: mod.MdOutlineSchool }))),
    BiSolidInjection: React.lazy(() => import('react-icons/bi').then(mod => ({ default: mod.BiSolidInjection }))),
    RiMoneyDollarCircleLine: React.lazy(() => import('react-icons/ri').then(mod => ({ default: mod.RiMoneyDollarCircleLine }))),
    LiaIndustrySolid: React.lazy(() => import('react-icons/lia').then(mod => ({ default: mod.LiaIndustrySolid }))),
    RiGovernmentLine: React.lazy(() => import('react-icons/ri').then(mod => ({ default: mod.RiGovernmentLine }))),
};

const Card = ({ card, icon }) => (
    <motion.div
        className="bg-white p-6 flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
            duration: 0.5,
            delay: 0.2,
            type: 'spring',
            stiffness: 100,
        }}
        viewport={{ once: true, amount: 0.2 }}
    >
        <div className="relative h-72 w-72 mb-2">
            <Image
                src={card.images[0]}
                alt={card.title}
                className="w-full h-full object-cover"
                width={288}
                height={288}
                layout="intrinsic"
                quality={75}
                priority={true} // Added priority for important images to load faster
            />
        </div>
        <div className="p-2 w-72">
            <div className="flex justify-center items-center mb-4">
                <div className="p-4 bg-white border border-black hover:border-white shadow-lg hover:bg-black text-black hover:text-white rounded-full">
                    <Suspense fallback={<div>Loading Icon...</div>}>
                        {/* Use React.createElement with the size prop */}
                        {icon && React.createElement(icon, { size: 50 })}
                    </Suspense>
                </div>
            </div>
            <div className="flex-1 flex flex-col text-center">
                <h2 className="text-xl font-bold text-black">{card.title}</h2>
            </div>
        </div>
    </motion.div>
);

const Page = () => {
    const [cards, setCards] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [loading, setLoading] = useState(true);

    // Memoize the card icons to prevent unnecessary re-render
    const memoizedIconComponents = useMemo(() => iconComponents, []);

    useEffect(() => {
        const controller = new AbortController();

        const fetchData = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/website/industry/`, {
                    signal: controller.signal,
                });
                const data = await response.json();
                setCards(data);
                setIsLoading(false);
            } catch (error) {
                if (error.name !== 'AbortError') {
                    console.error('Error fetching data:', error);
                }
            }
        };

        fetchData();

        return () => controller.abort(); // Cleanup on unmount
    }, []);

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

                    <div className="pt-20 bg-slate-200">
                        <div className="relative">
                            <Image
                                src={Banner}
                                alt="Banner"
                                className="w-full h-72 object-cover"
                                width={1920}
                                height={400}
                                loading="lazy"
                            />
                            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                                <h1 className="text-4xl font-extrabold">Welcome to SAG</h1>
                                <p className="text-lg font-semibold mt-2">Explore solutions across industries.</p>
                            </div>
                        </div>

                        <div className="mt-10 text-center">
                            <h2 className="text-black font-bold text-2xl sm:text-3xl md:text-4xl">
                                IT Services Customized for Your Industry
                            </h2>
                            <p className="text-gray-600 mt-2 text-base sm:text-lg md:text-xl">
                                We provide cutting-edge solutions tailored to meet the needs of diverse industries.
                            </p>
                        </div>

                        {isLoading ? (
                            <div className="flex h-screen justify-center items-center py-10">
                                <div className="loader"></div>
                            </div>
                        ) : (
                            <div className="flex justify-center items-center px-10 py-10">
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
                                    {cards.map((card, index) => (
                                        <Card
                                            key={index}
                                            card={card}
                                            icon={memoizedIconComponents[card.icon]} // Use memoized icon components
                                        />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <Footer />
                </>
            )}
        </div>
    );
};

export default Page;
