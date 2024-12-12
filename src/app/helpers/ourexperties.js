import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Slider from 'react-slick'; // Import the slider component


const OurExpertise = () => {
    const [expertiseData, setExpertiseData] = useState([]);
    const [loading, setLoading] = useState(true); // State to track loading

    useEffect(() => {
        const controller = new AbortController(); // Create an AbortController instance
        const signal = controller.signal; // Get the signal from the controller

        const fetchData = async () => {
            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/website/service/`,
                    { signal }
                );

                if (!response.ok) {
                    // Log the status code if the request fails
                    console.error(`Failed to fetch: ${response.status} ${response.statusText}`);
                    throw new Error('Failed to fetch data');
                }

                const data = await response.json();
                setExpertiseData(data);
                setLoading(false);
            } catch (error) {
                if (error.name === 'AbortError') {
                    console.log('Fetch request was aborted');
                } else {
                    console.error('Error fetching expertise data:', error);
                }
                setLoading(false);
            }
        };

        fetchData();

        return () => {
            // Cleanup function to abort the fetch when the component unmounts
            controller.abort();
        };
    }, []);

    // Slider settings
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000, // Change slide every 2 seconds
        appendDots: (dots) => (
            <div style={{ position: 'absolute', top: '9rem', width: '100%' }}>
                <ul style={{ display: 'flex', justifyContent: 'center' }}>
                    {dots}
                </ul>
            </div>
        ),
    };

    return (
        <div
            id="OurExperties"
            className="flex flex-col w-full h-full p-14 bg-slate-500 ourExperties overflow-hidden items-center"
        >
            <h1 className="text-center text-2xl md:text-3xl text-black font-bold my-3 uppercase">
                Our Expertise
            </h1>

            {loading ? (
                // Show loading state if still fetching data
                <div className="flex justify-center h-screen">
                    {/* You can display a loading spinner here */}
                    <span>Loading...</span>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 md:gap-40 gap-20 justify-center">
                    {expertiseData.map((expertise) => (
                        <motion.div
                            key={expertise.uuid}
                            className="card relative"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="image">
                                {/* Implementing the image slider */}
                                <Slider {...sliderSettings}>
                                    {expertise.images.map((image) => (
                                        <div
                                            key={`${expertise.id}-${image.id}`}
                                        >
                                            <Image
                                                src={image.image}
                                                alt={expertise.title}
                                                width={500}
                                                height={300}
                                                className="object-cover"
                                                draggable={false}
                                                priority={false}
                                            />
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                            <div className="content">
                                <a href={expertise.link}>
                                    <span className="title">
                                        {expertise.title}
                                    </span>
                                </a>
                                <p className="desc">{expertise.description}</p>
                                <a
                                    className="action"
                                    href={expertise.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Find out more
                                    <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default OurExpertise;
