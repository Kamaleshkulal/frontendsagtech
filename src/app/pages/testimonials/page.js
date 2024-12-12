'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion'; // Import framer-motion
import Footer from '../../helpers/footer';
import Loader from '../../hooks/Loader'

const TestimonialCard = ({ testimonial }) => (
    <motion.div
        className="flex flex-col md:flex-row items-center p-6 max-w-3xl mx-auto mb-4 md:mb-6 space-x-0 md:space-x-20"
        initial={{ opacity: 0, x: -100 }} // Initial state: off-screen to the left with opacity 0
        animate={{ opacity: 1, x: 0 }} // Animate to full opacity and center
        transition={{ duration: 0.8, ease: "easeOut" }} // Animation duration and easing
    >
        <div className="w-40 h-40 mb-2 md:mb-0">
            <Image
                src={testimonial.employee_image}
                alt={testimonial.employee_name}
                className="border-8 border-white rounded-full object-cover"
                width={300} // Set appropriate width
                height={300} // Set appropriate height
            />
        </div>
        <div className="flex-1">
            <div className="relative">
                {/* Styled double quotes with closer placement */}
                <span className="absolute top-0 left-5 md:left-0 text-5xl text-white -translate-x-5 translate-y-1">“</span>
                <span className="absolute bottom-0 md:right-0 right-5 text-5xl text-white translate-x-5 -translate-y-1">”</span>
                <blockquote className="text-gray-600 italic mb-4 pl-10 pr-10 text-xl">
                    {testimonial.description}
                </blockquote>
            </div>
            <p className="ml-10 font-semibold text-lg">{testimonial.employee_name}</p>
            <p className="ml-10 text-gray-500 text-sm">{testimonial.position}</p>
        </div>
    </motion.div>
);

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true); // Add a loading state

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/website/testimonial`);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                setTestimonials(data);
                setLoading(false); // Set loading to false once the data is fetched
            } catch (error) {
                console.error('Error fetching testimonials:', error);
                setLoading(false); // Set loading to false even if an error occurs
            }
        };

        fetchTestimonials();
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

                    <section className="py-12 bg-gray-100 mt-20">
                        <h2 className="lg:text-3xl md:text-2xl text-xl font-bold text-center mb-10 text-gray-800">
                            Comprehensive IT Services for Innovation, Consulting, and Development
                        </h2>

                        {/* Display loader while data is loading */}
                        {loading ? (
                            <div className="flex justify-center h-screen items-center">
                                <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
                            </div>
                        ) : (
                            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
                                {testimonials.map((testimonial, index) => (
                                    <TestimonialCard key={index} testimonial={testimonial} />
                                ))}
                            </div>
                        )}
                    </section>

                    <Footer />
                </>
            )}
        </div>
    );
};

export default Testimonials;
