import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import AboutUs from '../static/images/aboutbg.jpg';
import DigitalSign from '../static/images/digitalSign.png';

const AboutUsPage = () => {
    const [aboutData, setAboutData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Create an AbortController to manage aborting the request
        const controller = new AbortController();
        const signal = controller.signal;

        // Define an async function to fetch data
        const fetchData = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/website/our-story/`, { signal });
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setAboutData(data[0]);
                setLoading(false);
            } catch (err) {
                if (err.name === 'AbortError') {
                    // Request was aborted
                    console.log('Request was aborted');
                } else {
                    // Handle other types of errors
                    console.error('Error:', err.message);
                    setError('Error fetching data: ' + err.message);
                }
                setLoading(false);
            }
        };

        // Call the fetch function
        fetchData();

        // Cleanup function to abort the request if the component unmounts
        return () => {
            controller.abort();
        };
    }, []);

    if (loading) {
        return <div className="bg-white h-screen"></div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div id="AboutUs" className="relative w-full h-screen">
            {/* Background Image */}
            <Image
                src={AboutUs}
                alt="Background Image"
                fill
                quality={100}
                className="object-cover object-center"
            />

            {/* Content */}
            <div className="flex flex-col w-full h-full p-6 md:p-14 items-center relative z-10">
                <h1 className="text-center text-2xl md:text-3xl text-white font-bold uppercase">About Us</h1>

                <div className="grid grid-cols-1 mt-10 md:mt-20 md:gap-40 gap-10 justify-center">
                    {/* Centered Card */}
                    <div className="p-4 md:p-8 mt-4 md:mt-6">
                        <div className="bg-white p-6 w-full max-w-md sm:max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl rounded-lg shadow-lg text-center relative">

                            <h2 className="text-lg md:text-2xl font-bold mb-4 uppercase">Our Story</h2>
                            <p className="text-gray-700 text-left mt-6 text-sm md:text-base">
                                <span className="font-bold text-lg text-logo">SagTech. </span> <span className="font-bold">Group,</span> {aboutData?.description1 || 'Default story text...'}
                            </p>
                            <p className="mt-4 text-left text-sm md:text-base">
                                {aboutData?.description2 || 'Default additional info...'}
                            </p>

                            {/* Digital Sign Image */}
                            <div className="flex flex-col items-end justify-center mt-8">
                                <Image
                                    src={DigitalSign}
                                    alt="Digital Sign"
                                    width={120}
                                    height="auto" // Set to "auto" to maintain aspect ratio
                                    className="object-contain"
                                    draggable={false}
                                    priority
                                />
                                <p className="text-gray-700 text-sm md:text-base mr-7">
                                    <span className="font-bold text-lg text-logo ">SagTech. </span> <span className="font-bold">CEO</span>
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
    );
};

export default AboutUsPage;
