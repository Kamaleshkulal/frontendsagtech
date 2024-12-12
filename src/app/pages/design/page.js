'use client';
import React, { useState, useEffect, useMemo, useCallback } from 'react';

import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { IoBulbOutline } from 'react-icons/io5';
import { IoIosColorPalette } from 'react-icons/io';
import { PiChartLineUpBold } from 'react-icons/pi';
import { ImBullhorn } from 'react-icons/im';
import { TiChartPieOutline } from 'react-icons/ti';
import { FaUsers } from 'react-icons/fa';
import dynamic from 'next/dynamic';
import Footer from '../../helpers/footer';
import BgDesignbannerA from '../../static/images/designerimagea.jpeg';
import BgDesignbannerB from '../../static/images/designerimagesb.jpeg';
import BgDesignbannerC from '../../static/images/designerimagesc.jpeg';
import Writing from '../../static/images/writing.jpeg';
import Typing from '../../static/images/typing.jpeg';
import Loader from '../../hooks/Loader'

// Lazy load Footer component to reduce initial load time
const LazyFooter = dynamic(() => import('../../helpers/footer'), { ssr: false });

const DesignPage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loading, setLoading] = useState(true);

    // Memoize images array to prevent unnecessary re-creation
    const images = useMemo(() => [
        { id: 1, src: BgDesignbannerA, alt: 'Banner 1' },
        { id: 2, src: BgDesignbannerB, alt: 'Banner 2' },
        { id: 3, src: BgDesignbannerC, alt: 'Banner 3' },
    ], []);


    const goToNextSlide = useCallback(() => setCurrentSlide((prev) => (prev + 1) % images.length), [images.length]);

    const goToPrevSlide = useCallback(() => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length), [images.length]);

    // Use debounced slide transition
    useEffect(() => {
        const interval = setInterval(goToNextSlide, 3000);
        return () => clearInterval(interval);
    }, [goToNextSlide]);



    const benefits = useMemo(() => [
        {
            icon: <IoIosColorPalette />,
            title: 'Innovative IT Solutions & Design',
            description: 'Creating cutting-edge software solutions and designs for streamlined operations.',
        },
        {
            icon: <IoBulbOutline />,
            title: 'Fresh Ideas & Brainstorming',
            description: 'Driving unique solutions through creativity and collaboration.',
        },
        {
            icon: <ImBullhorn />,
            title: 'Promotion and Digital Marketing',
            description: 'Boosting brand visibility and engagement with targeted strategies.',
        },
        {
            icon: <FaUsers />,
            title: 'Team and Group Work',
            description: 'Enhancing teamwork and collaboration through self-assurance.',
        },
        {
            icon: <PiChartLineUpBold />,
            title: 'Strategy for Development',
            description: 'Providing strategic solutions for growth and brand identity.',
        },
        {
            icon: <TiChartPieOutline />,
            title: 'Sales and Calculation Charts',
            description: 'Offering tools to track performance and optimize market strategies.',
        },
    ], []);

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

                    <main className="pt-20">
                        {/* Banner Section */}
                        <div className="relative w-full h-[200px] md:h-[300px] lg:h-[350px]">
                            <Image
                                src={images[currentSlide].src}
                                alt={images[currentSlide].alt}
                                fill
                                style={{ objectFit: "cover" }}
                                className="filter grayscale"
                                priority={currentSlide === 0} // Load the first image with priority
                            />
                            <div className="absolute top-0 left-0 w-full h-full bg-black/40 flex items-center justify-center">
                                <div className="text-center px-6 md:px-0">
                                    <h1 className="text-white text-2xl md:text-6xl font-bold">Welcome to SagTech. Global</h1>
                                    <p className="text-white text-sm md:text-xl mt-4">
                                        Cutting-edge design and development for your digital presence.
                                    </p>
                                </div>
                            </div>
                            <button
                                className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-black/40 p-3 md:p-4 rounded-r-md"
                                onClick={goToPrevSlide}
                            >
                                <FaChevronLeft />
                            </button>
                            <button
                                className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-black/40 p-3 md:p-4 rounded-l-md"
                                onClick={goToNextSlide}
                            >
                                <FaChevronRight />
                            </button>
                        </div>

                        {/* Benefits Section */}
                        <div className="p-10">
                            <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
                                What Are the Benefits of Our Design Services?
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {benefits.map((card, index) => (
                                    <div key={index} className="p-6 rounded-lg flex flex-col items-center">
                                        <div className="text-6xl border-2 border-black shadow-lg rounded-full p-3 text-black mb-4">
                                            {card.icon}
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-800">{card.title}</h3>
                                        <p className="text-gray-600 mt-4">{card.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Image Grid */}
                        <div className="grid bg-gray-200 grid-cols-2 gap-4 p-8">
                            {/* Column 1 */}
                            <div className="p-4 flex justify-center items-center">
                                <div className="relative w-52 md:w-72 h-96"> {/* Adjusted height */}
                                    <Image
                                        src={Writing}
                                        alt="Writing"
                                        fill
                                        style={{ objectFit: "cover" }}
                                        draggable={false}
                                    />
                                </div>
                            </div>

                            {/* Column 2 */}
                            <div className="p-4 flex items-center justify-center">
                                <div className="text-center">
                                    <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4">
                                        It&apos;s Time to Start Your Business and Make it Look more Attractive
                                    </h2>
                                    <p className="text-sm md:text-lg text-gray-700">
                                        At SagTech. Global, we specialize in crafting unique and engaging designs that help elevate your business.
                                        Whether you need a logo, branding, or a complete website overhaul, we&apos;ve got you covered with
                                        professional design services tailored to your needs.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Additional Banner */}
                        <div className="relative w-full h-[100px] md:h-[200px] lg:h-[200px]">
                            <div className="relative w-full h-full">
                                <Image
                                    src={Typing}
                                    alt="writer"
                                    fill
                                    style={{ objectFit: "cover" }}
                                    className="filter grayscale"
                                />
                            </div>
                            <div className="absolute top-0 left-0 w-full h-full bg-black/40 flex items-center justify-center">
                                <div className="text-center px-6 md:px-0">
                                    <p className="text-white text-sm px-20 md:text-3xl mt-4">
                                        Through the storm of doubt, imagination reigns as the sovereign force, sculpting triumphs from the shards of fear.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </main>
                    <LazyFooter />  {/* Lazy loaded Footer */}
                </>
            )}
        </div>
    );
};

export default DesignPage;
