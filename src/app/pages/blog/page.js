'use client';
import React, { useState, useEffect } from 'react';
import Footer from '../../helpers/footer';
import Image from 'next/image';
import { motion } from 'framer-motion';  // Import Framer Motion for animations
import Loader from '../../hooks/Loader'
const Page = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredCards, setFilteredCards] = useState([]);
    const [allCards, setAllCards] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch blog data from the API
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/website/blog`);
                const data = await response.json();
                setAllCards(data);  // Store the fetched blog data
                setFilteredCards(data.slice(0, 3)); // Display only the first 3 by default
            } catch (error) {
                console.error('Error fetching blog data:', error);
            }
        };

        fetchBlogs();
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

    }, [])

    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);

        const results = allCards.filter(
            (card) =>
                (card.category && card.category.toLowerCase().includes(term)) ||
                (card.description && card.description.toLowerCase().includes(term)) ||
                (card.author_name && card.author_name.toLowerCase().includes(term)) ||
                (card.title && card.title.toLowerCase().includes(term))
        );

        setFilteredCards(results.slice(0, 3)); // Limit results to 3
    };

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
                    <div className="relative bg-white p-8 md:p-10 mt-20">
                        <div
                            className="absolute inset-0  bg-gradient-to-r from-purple-100 to-purple-300"
                            style={{
                                maskImage: 'linear-gradient(135deg, rgba(0, 0, 0, 0.2) 25%, rgba(0, 0, 0, 0) 25%)',
                                maskSize: '20px 20px',
                            }}
                        ></div>

                        <div className="relative z-10 text-center mb-8">
                            <p className="text-purple-500 font-bold uppercase text-2xl ">Our blog</p>
                            <h1 className="text-xl font-bold text-gray-900">Resources and insights</h1>
                            <p className="text-gray-500 mt-2">
                                The latest industry news, interviews, technologies, and resources.
                            </p>
                        </div>

                        {/* Search bar with animation */}
                        <motion.div
                            className="relative z-10 max-w-md mx-auto mb-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <input
                                type="text"
                                placeholder="Search"
                                value={searchTerm}
                                onChange={handleSearch}
                                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </motion.div>

                        {/* Cards with animation */}
                        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredCards.length > 0 ? (
                                filteredCards.map((card, index) => (
                                    <motion.div
                                        key={card.uuid}
                                        className="bg-white shadow-md rounded-lg overflow-hidden"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.2 }}
                                    >
                                        <Image
                                            src={card.images[0].image}  // Use the image from the API
                                            alt={card.title}
                                            width={300}
                                            height={200}
                                            className="w-full h-40 object-cover"
                                        />
                                        <div className="p-4">
                                            <p className="text-purple-500 text-sm font-medium">{card.services_title}</p>
                                            <h2 className="text-lg font-semibold text-gray-900 mt-1">
                                                {card.title}{' '}
                                                <a href={card.link} className="text-purple-500">
                                                    ↗
                                                </a>
                                            </h2>
                                            <p className="text-gray-500 text-sm mt-2">{card.description}</p>
                                            <div className="flex items-center mt-4">
                                                <Image
                                                    src={card.author_profile_image}  // Use the author profile image from the API
                                                    alt={card.author_name}
                                                    width={30}
                                                    height={30}
                                                    className="w-8 h-8 rounded-full"
                                                />
                                                <div className="ml-3">
                                                    <p className="text-sm font-medium text-gray-900">{card.author_name}</p>
                                                    <p className="text-sm text-gray-500">{card.date_of_posting}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))
                            ) : (
                                <p className="text-center lg:h-[350px] md:h-[400px] h-[400px] text-gray-500">No results found.</p>
                            )}
                        </div>
                    </div>
                    <Footer />
                </>
            )}
        </div>
    );
};

export default Page;
