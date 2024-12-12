import React, { useState, useEffect } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa'; // Importing icons

const FAQ = () => {
    const [faqs, setFaqs] = useState([]);
    const [activeFAQ, setActiveFAQ] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        const fetchFAQs = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/website/faq`, { signal });
                if (!response.ok) {
                    throw new Error('Failed to fetch FAQs');
                }
                const data = await response.json();
                setFaqs(data);
                setLoading(false);
            } catch (error) {
                if (error.name === 'AbortError') {
                    console.log('Fetch aborted');
                } else {
                    setError('Error fetching FAQs: ' + error.message);
                }
                setLoading(false);
            }
        };

        fetchFAQs();
        return () => {
            controller.abort();
        };
    }, []);

    const toggleFAQ = (index) => {
        setActiveFAQ(activeFAQ === index ? null : index);
    };

    return (
        <div className="h-screen relative">
            {/* Blurred background */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: 'url(https://saggroup.s3.us-east-1.amazonaws.com/faqbg.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'blur(2px)',
                    zIndex: -1,
                }}
            ></div>

            {/* Overlay for darker tone */}
            <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

            {/* Content Container */}
            <div
                className="relative max-w-3xl mx-auto px-4 py-8 z-10"
                style={{
                    top: '50%',
                    transform: 'translateY(-50%)',
                }}
            >
                <h2 className="text-center text-white text-2xl lg:text-4xl font-bold mb-4">
                    Frequently Asked Questions
                </h2>

                {/* Description below the title */}
                <h3 className="text-center text-lg text-gray-300 mb-24 line-clamp-4">
                    Discover answers to the most frequently asked questions about SAG Group&apos;s comprehensive IT services. Whether you&apos;re exploring our solutions or need guidance, our FAQ section provides insights to help you understand how we can support your business needs.
                </h3>

                {loading && <p className="text-center text-white">Loading FAQs...</p>}
                {error && <p className="text-red-500 text-center">{error}</p>}

                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <div key={faq.id} className="border-b border-gray-700 pb-4">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full text-left text-xl font-semibold text-white flex justify-between items-center"
                            >
                                <span>{faq.question}</span>
                                <span className="ml-4">
                                    {activeFAQ === index ? <FaMinus /> : <FaPlus />}
                                </span>
                            </button>
                            {activeFAQ === index && (
                                <p className="text-white mt-3">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
