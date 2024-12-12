'use client'
import React, { useEffect, useState } from 'react';
import Footer from '../../helpers/footer';
import { motion } from 'framer-motion';
import { PiSealCheckFill } from "react-icons/pi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import './input.css';
import { debounce } from 'lodash';
import Loader from '../../hooks/Loader'

const ContactPage = () => {
    const [companyDetails, setCompanyDetails] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [emailValid, setEmailValid] = useState(null); // To store email validity status
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch company details on page load
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/website/company-details`)
            .then(response => response.json())
            .then(data => setCompanyDetails(data))
            .catch(error => console.error('Error fetching company details:', error));
    }, []);

    useEffect(() => {
        // Disable scrolling when the popup is visible
        if (showSuccessPopup) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [showSuccessPopup]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));

        if (name === 'email') {
            validateEmail(value); // Validate email on each change
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

    }, [])
    const validateEmail = debounce((email) => {
        // List of reserved email addresses
        const reservedEmails = ['support@itsaggroups.com', 'info@itsaggroups.com'];

        // Check if the email is in the reserved list
        if (reservedEmails.includes(email)) {
            setEmailValid(false); // Mark the email as invalid
            return; // Exit the function early
        }

        // Validate email using AbstractAPI
        fetch(`${process.env.NEXT_PUBLIC_ABSTRACT_API_URL}?api_key=${process.env.ABSTRACT_API_KEY}&email=${email}`)
            .then(response => response.json())
            .then(data => {
                if (data && data.is_valid_format && data.is_valid_format.value !== undefined &&
                    data.is_mx_found && data.is_mx_found.value !== undefined &&
                    data.is_smtp_valid && data.is_smtp_valid.value !== undefined) {
                    if (data.is_valid_format.value && data.is_mx_found.value && data.is_smtp_valid.value) {
                        setEmailValid(true); // Email is valid
                    } else {
                        setEmailValid(false); // Email is invalid
                    }
                } else {
                    setEmailValid(false); // If properties are missing, assume invalid
                }
            })
            .catch(error => {
                console.error('Error validating email:', error);
                setEmailValid(false); // Assume invalid in case of an error
            });
    }, 1000);


    const handleSubmit = (e) => {
        e.preventDefault();

        if (!emailValid) {
            alert('Please enter a valid email address.');
            return; // Prevent form submission if email is invalid
        }

        // Post data to the get-in-touch endpoint
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/website/get-in-touch/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Form submitted successfully:', data);
                setShowSuccessPopup(true); // Show success popup on successful submission

                // Reset form fields after submission
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            })
            .catch(error => {
                console.error('Error sending message:', error);
                alert('There was an error sending your message. Please try again.');
            });
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.2,
                staggerChildren: 0.3,
                when: "beforeChildren"
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <div className="relative">
            {loading ? (
                <Loader /> // Show loader while loading
            ) : (
                <>
                    {/* Navbar */}
                    <nav className="bg-white border-b border-gray-200 fixed top-0 left-0 w-full z-50">
                        <div className="flex justify-between items-center w-full h-16 px-4 md:px-10">
                            <div className="text-logo text-black font-bold text-3xl md:text-5xl">SagTech. </div>
                        </div>
                    </nav>

                    {/* Success Popup */}
                    {showSuccessPopup && (
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                            <div className="bg-white p-8 rounded shadow-lg w-96 text-center relative">
                                <button
                                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                                    onClick={() => setShowSuccessPopup(false)}
                                >
                                    <IoIosCloseCircleOutline size={30} />
                                </button>
                                <div className="flex justify-center mb-4">
                                    <PiSealCheckFill size={60} className="text-green-500" />
                                </div>
                                <h2 className="text-xl font-semibold text-green-600">Success!</h2>
                                <p className="mt-4 text-gray-600">Your message has been sent successfully!</p>
                            </div>
                        </div>
                    )}

                    {/* Contact Section */}
                    <motion.div
                        className="bg-gradient-to-b mb-8 from-cyan-50 to-white min-h-screen pt-20 md:pt-32 flex flex-col items-center"
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                    >
                        <motion.h1
                            className="text-3xl md:text-4xl font-bold text-gray-800 mb-2"
                            variants={itemVariants}
                        >
                            Get In Touch
                        </motion.h1>
                        <motion.p
                            className="text-gray-600 mb-8 text-center px-6 md:px-10 lg:px-16 xl:px-24 max-w-2xl lg:max-w-3xl mx-auto text-base lg:text-lg"
                            variants={itemVariants}
                        >
                            At <span className="font-bold text-lg text-logo">SagTech. </span>
                            <span className="font-bold"> Group,</span> we specialize in delivering innovative IT consulting and development solutions. Our team is dedicated to helping businesses succeed by leveraging cutting-edge technology and creating customized solutions tailored to your needs.
                        </motion.p>

                        <motion.div
                            className="flex flex-col md:flex-row max-w-4xl w-full p-4 bg-white rounded-lg shadow-lg relative"
                            variants={itemVariants}
                        >
                            {/* Contact Information with Bubble */}
                            {companyDetails && (
                                <motion.div
                                    className="bg-gray-400 text-white p-6 md:p-8 rounded-t-lg md:rounded-l-lg md:rounded-tr-none w-full md:w-1/3 relative overflow-hidden"
                                    variants={itemVariants}
                                // whileHover={{ scale: 1.05 }}
                                >
                                    <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
                                    <p className="mb-4 text-sm md:mb-6">
                                        {companyDetails.description}
                                    </p>
                                    <p className="flex items-center mb-3">{companyDetails.company_phone_number}</p>
                                    <p className="flex items-center mb-3">{companyDetails.company_additional_phone_number}</p>
                                    <p className="flex items-center mb-3">{companyDetails.company_email}</p>
                                    <p className="flex items-center">{companyDetails.company_location}</p>

                                    <motion.div
                                        className="absolute -bottom-8 -right-8 md:-bottom-12 md:-right-12 w-24 h-24 md:w-40 md:h-40 bg-white opacity-20 rounded-full"
                                        animate={{ scale: [1, 1.3, 1] }}
                                        transition={{ repeat: Infinity, duration: 2 }}
                                    ></motion.div>
                                </motion.div>
                            )}

                            {/* Contact Form with Floating Labels */}
                            <motion.div className="p-6 md:p-8 w-full md:w-2/3" variants={itemVariants}>
                                <form className="space-y-6" onSubmit={handleSubmit}>
                                    <motion.div className="relative mb-4" variants={itemVariants}>
                                        <input
                                            required
                                            className="customInput w-full p-3 bg-transparent border-b-2 border-gray-400 outline-none text-gray-700 focus:border-gray-500"
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            placeholder=" "
                                        />
                                        <label className="inputLabel absolute top-3 left-0  transform transition-all duration-300 pointer-events-none">Your Name</label>
                                        <div className="inputUnderline absolute left-0 bottom-0 h-0.5 w-full bg-gray-400"></div>
                                    </motion.div>

                                    <motion.div className="relative mb-4" variants={itemVariants}>
                                        <input
                                            required
                                            className={`customInput w-full p-3 bg-transparent border-b-2 outline-none text-gray-700 ${emailValid === false ? 'border-red-500' : 'border-gray-400'} focus:border-gray-500`}
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder=" "
                                        />
                                        <label className="inputLabel absolute top-3 left-0  transform transition-all duration-300 pointer-events-none">Your Email</label>
                                        <div className={` absolute left-0  h-0.1 w-full ${emailValid === false ? 'bg-red-500' : ''}`}></div>
                                        {emailValid === false && (
                                            <p className="text-xs text-red-500 mt-1">Please enter a valid email address.</p>
                                        )}
                                    </motion.div>

                                    <motion.div className="relative mb-4" variants={itemVariants}>
                                        <input
                                            required
                                            className="customInput w-full p-3 bg-transparent border-b-2 border-gray-400 outline-none text-gray-700 focus:border-gray-500"
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            placeholder=" "
                                        />
                                        <label className="inputLabel absolute top-3 left-0  transform transition-all duration-300 pointer-events-none">Subject</label>
                                        <div className="inputUnderline absolute left-0 bottom-0 h-0.5 w-full bg-gray-400"></div>
                                    </motion.div>

                                    <motion.div className="relative mb-4" variants={itemVariants}>
                                        <textarea
                                            required
                                            className="customInput w-full p-3 bg-transparent outline-none text-gray-700 focus:border-gray-500"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            placeholder=" "
                                            rows="4"
                                        ></textarea>
                                        <label className="inputLabel absolute top-3 left-0  transform transition-all duration-300 pointer-events-none">Your Message</label>
                                        <div className="inputUnderline absolute left-0 bottom-0 h-0.5 w-full bg-gray-400"></div>
                                    </motion.div>

                                    <motion.button
                                        className="w-full py-3 px-6 mt-6  bg-gray-400  text-white rounded-lg shadow-md"
                                        type="submit"
                                        variants={itemVariants}

                                        whileTap={{ scale: 0.95 }}
                                        disabled={emailValid === false}
                                    >
                                        Send Message
                                    </motion.button>
                                </form>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Footer */}
                    <Footer />
                </>
            )}
        </div>
    );
};

export default ContactPage;
