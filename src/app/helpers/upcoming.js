import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

const Upcoming = ({ onLoad }) => {
    const [upcomingData, setUpcomingData] = useState([]);

    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
            once: true, // Whether animation should happen only once
        });

        const controller = new AbortController(); // Create an AbortController instance
        const signal = controller.signal; // Access the signal

        // Fetch data from the API
        const fetchUpcomingData = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/website/upcoming`, { signal });
                const data = await response.json();
                setUpcomingData(data);
            } catch (error) {
                // Handle abort error specifically
                if (error.name !== 'AbortError') {
                    console.error('Error fetching data:', error);
                }
            }
        };

        fetchUpcomingData();

        // Cleanup function to abort the request when the component is unmounted
        return () => {
            controller.abort(); // Abort the fetch request when the component unmounts
        };
    }, [onLoad]);

    return (
        <>
            <div id="UpComing" className="flex flex-col w-full h-full p-6 md:p-14 items-center relative z-10 overflow-hidden">
                <h1 className="text-center text-2xl md:text-3xl text-black font-bold uppercase">Upcoming</h1>

                {/* Data One */}
                {upcomingData[0] && (
                    <div className="flex mt-10 justify-center w-full" data-aos="fade-up">
                        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="md:col-span-1"></div>
                            <div className="col-span-1">
                                <h2 className="text-2xl text-orange-500 font-bold uppercase">{upcomingData[0].title}</h2>
                                <p className="mt-4 text-gray-700">
                                    <span className="font-bold text-lg text-logo">SagTech. </span> <span className="font-bold">Group,</span> {upcomingData[0].description}
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Data One Video Section */}
                {upcomingData[0] && upcomingData[0].choice === 'video' && (
                    <div className="flex mt-10 justify-center w-full" data-aos="fade-up">
                        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="col-span-1">
                                <video width="100%" autoPlay muted loop>
                                    <source src={upcomingData[0].video_file} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <div className="md:col-span-1"></div>
                        </div>
                    </div>
                )}

                {/* Data Two */}
                {upcomingData[1] && (
                    <div className="flex mt-10 justify-center w-full" data-aos="fade-up">
                        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="md:col-span-1"></div>
                            <div className="col-span-1">
                                <h2 className="text-2xl text-orange-500 font-bold uppercase">{upcomingData[1].title}</h2>
                                <p className="mt-4 text-gray-700">
                                    <span className="font-bold text-lg text-logo">SagTech. </span> <span className="font-bold">Group,</span> {upcomingData[1].description}
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Data Two Video Section */}
                {upcomingData[1] && upcomingData[1].choice === 'video' && (
                    <div className="flex mt-10 justify-center w-full" data-aos="fade-up">
                        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="col-span-1">
                                <video width="100%" autoPlay muted loop>
                                    <source src={upcomingData[1].video_file} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <div className="md:col-span-1"></div>
                        </div>
                    </div>
                )}

                {/* Data Three */}
                {upcomingData[2] && (
                    <div className="flex mt-10 justify-center w-full" data-aos="fade-up">
                        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="md:col-span-1"></div>
                            <div className="col-span-1">
                                <h2 className="text-2xl text-orange-500 font-bold uppercase">{upcomingData[2].title}</h2>
                                <p className="mt-4 text-gray-700">
                                    <span className="font-bold text-lg text-logo">SagTech. </span> <span className="font-bold">Group,</span> {upcomingData[2].description}
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Data Three Image Section */}
                {upcomingData[2] && upcomingData[2].choice === 'image' && (
                    <div className="flex mt-10 justify-center w-full" data-aos="fade-up">
                        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="col-span-1">
                                <Image
                                    src={upcomingData[2].images[0].image} // Corrected path
                                    alt="AI Voice Assistant"
                                    width={600}
                                    height={100}
                                    className="object-cover w-full h-auto"
                                />
                            </div>
                            <div className="md:col-span-1"></div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Upcoming;
