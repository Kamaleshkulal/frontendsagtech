import React, { useState, useEffect } from 'react'
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";  // Import Framer Motion

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    // Effect to prevent scrolling when the mobile menu is open
    useEffect(() => {
        if (isOpen) {
            // Disable scroll
            document.body.style.overflow = "hidden";
        } else {
            // Enable scroll
            document.body.style.overflow = "auto";
        }

        // Cleanup on unmount or when menu state changes
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    return (
        <>
            <nav className="bg-white border-b border-gray-200">
                <div className="flex justify-between items-center w-full h-20 px-10">
                    {/* Right side logo */}
                    <div className="text-logo text-black font-bold text-5xl">
                        SagTech.
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-black focus:outline-none"
                        >
                            {isOpen ? (
                                <IoMdClose className="w-8 h-8" />
                            ) : (
                                <FaBars className="w-6 h-6" />
                            )}
                        </button>
                    </div>

                    {/* Left side navigation links for larger screens */}
                    <div className="hidden md:flex space-x-4 lg:space-x-10 text-black font-medium text-base lg:text-lg">
                        <a href="pages/about-us" className="hover:text-gray-600 font-semibold">About Us</a>
                        <a href="pages/business" className="hover:text-gray-600  font-semibold">Business</a>
                        <a href="pages/services" className="hover:text-gray-600  font-semibold">Services</a>
                        <a href="pages/get-in-touch" className="hover:text-gray-600  font-semibold">Get in Touch</a>
                        <a href="pages/industry" className="hover:text-gray-600  font-semibold">Industry</a>
                        <a href="pages/careers" className="hover:text-gray-600  font-semibold">Careers</a>
                    </div>
                </div>

                {/* Mobile Menu Links - Render only on small screens */}
                <AnimatePresence>  {/* This allows us to animate the presence of the mobile menu */}
                    {isOpen && (
                        <motion.div
                            className="bg-white border-t border-gray-200 md:hidden"
                            initial={{ opacity: 0, y: -20 }}  // Start with the menu hidden and slightly above
                            animate={{ opacity: 1, y: 0 }}  // Animate into view
                            exit={{ opacity: 0, y: -20 }}   // Animate out when the menu is closed
                            transition={{ duration: 0.3 }}   // Transition duration for smooth animation
                        >
                            <div className="flex flex-col items-stretch">
                                <a href="pages/about-us" className="text-black hover:text-gray-600 uppercase font-semibold block w-full py-4 border-b border-gray-200 text-left px-4 mb-2">About Us</a>
                                <a href="pages/business" className="text-black hover:text-gray-600 uppercase font-semibold block w-full py-4 border-b border-gray-200 text-left px-4 mb-2">Business</a>
                                <a href="pages/services" className="text-black hover:text-gray-600 uppercase font-semibold block w-full py-4 border-b border-gray-200  text-left px-4 mb-2">Services</a>
                                <a href="pages/careers" className="text-black hover:text-gray-600 uppercase font-semibold block w-full py-4 border-b border-gray-200 text-left px-4 mb-2">Careers</a>
                                <a href="pages/industry" className="text-black hover:text-gray-600 uppercase font-semibold block w-full py-4 border-b border-gray-200 text-left px-4 mb-2">Industry</a>
                                <a href="pages/blog" className="text-black hover:text-gray-600 uppercase font-semibold block w-full py-4 border-b border-gray-200 text-left px-4 mb-2">Blog</a>
                                <a href="pages/overview" className="text-black hover:text-gray-600 uppercase font-semibold block w-full py-4 border-b border-gray-200 text-left px-4 mb-2">Overview</a>
                                <a href="pages/testimonials" className="text-black hover:text-gray-600 uppercase font-semibold block w-full py-4 border-b border-gray-200 text-left px-4 mb-2">Testimonials</a>
                                <a href="pages/get-in-touch" className="text-black hover:text-gray-600 uppercase font-semibold block w-full py-4 text-left px-4 mb-2">Get in Touch</a>
                                {/* Join Button with border */}
                                <div className="flex justify-center py-4 border-t bg-gray-400 border-gray-200">
                                    <button className="border shadow-lg border-gray-600 text-gray-600 font-bold bg-transparent px-6 py-1 rounded-full  bg-white hover:text-gray-600 transition">
                                        Join
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </>
    )
}

export default Navigation;
