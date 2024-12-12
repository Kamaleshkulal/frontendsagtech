import React, { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Blog = () => {
    const [developers, setDevelopers] = useState([]);
    const [loading, setLoading] = useState(true); // State to handle loading state
    const [error, setError] = useState(null); // State to handle errors
    const sliderRef = useRef(null);

    // Slider settings
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: null,
        nextArrow: null,
    };

    // Fetch developers data from API
    useEffect(() => {
        const controller = new AbortController(); // Create an AbortController instance
        const signal = controller.signal; // Get the signal from the controller

        const fetchDevelopers = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/employee/employee-review`, { signal });
                if (!response.ok) {
                    throw new Error('Failed to fetch developers');
                }
                const data = await response.json();
                setDevelopers(data);
                setLoading(false); // Set loading to false once the data is fetched
            } catch (error) {
                if (error.name === 'AbortError') {
                    console.log('Fetch aborted');
                } else {
                    setError('Error fetching developers: ' + error.message); // Handle non-abort errors
                }
                setLoading(false); // Set loading to false even if there's an error
            }
        };

        fetchDevelopers(); // Call the function to fetch data

        // Cleanup function to abort fetch request when component unmounts
        return () => {
            controller.abort(); // Abort the fetch request on unmount
        };
    }, []); // Empty dependency array means this runs once when the component mounts

    return (
        <>
            <div id="BlogPage" className="relative mx-auto px-4 py-10">
                <h2 className="text-center text-3xl mt-4 font-bold mb-10" data-aos="fade-up">
                    Meet Our Developers
                </h2>
                <div className="max-w-2xl mx-auto">
                    {/* Loading state */}
                    {loading && <p>Loading developers...</p>}

                    {/* Error state */}
                    {error && <p className="text-red-500">{error}</p>}

                    <Slider ref={sliderRef} {...settings}>
                        {developers.map((dev) => (
                            <div key={dev.uuid} className="bg-white overflow-hidden flex justify-center items-center">
                                <div className="flex flex-col sm:flex-row justify-center items-center" data-aos="fade-up">
                                    <div className="w-full sm:w-1/2 p-4 flex justify-center">
                                        <Image
                                            src={dev.employee_image}
                                            alt={dev.position}
                                            width={300}
                                            height={224}
                                            className="w-40 h-32 sm:w-64 sm:h-48 md:w-auto md:h-auto object-cover rounded-lg"
                                        />
                                    </div>
                                    <div className="w-full sm:w-1/2 p-4 text-center sm:text-left">
                                        <h3 className="text-xl font-semibold mb-2">{dev.position}</h3>
                                        <div className="flex justify-center sm:justify-start items-center mb-2">
                                            <span className="text-yellow-500">
                                                {'★'.repeat(Math.round(dev.rating)) + '☆'.repeat(5 - Math.round(dev.rating))}
                                            </span>
                                            <span className="ml-2 text-gray-600">({dev.rating}/5)</span>
                                        </div>
                                        <p className="text-gray-700 italic mb-4">
                                            &quot;{dev.description}&quot;
                                        </p>
                                        <p className="text-gray-700 text-right font-semibold">- {dev.employee_name}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>

                    {/* Navigation buttons with icons */}
                    <button
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-slate-100 p-2 py-4 rounded-r hover:bg-gray-300 transition"
                        onClick={() => sliderRef.current.slickPrev()}
                    >
                        <ChevronLeftIcon className="h-6 w-6 text-gray-700" />
                    </button>
                    <button
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-slate-100 p-2 py-4 rounded-l hover:bg-gray-300 transition"
                        onClick={() => sliderRef.current.slickNext()}
                    >
                        <ChevronRightIcon className="h-6 w-6 text-gray-700" />
                    </button>
                </div>
            </div>


            <style jsx global>{`
                .slick-prev, .slick-next {
                    display: none !important;
                }
            `}</style>
        </>
    );
};

export default Blog;
