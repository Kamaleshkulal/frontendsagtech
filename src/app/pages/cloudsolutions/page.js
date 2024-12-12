'use client'
import React, { useEffect, useState } from 'react';
import Footer from '../../helpers/footer';
import cloud from '../../static/images/cloudsolutionbg.png';
import Image from 'next/image';
import HighSecurity from '../../static/images/datahighsecurity.png'
import Forever from '../../static/images/forever.png'
import { BsFillCloudsFill } from "react-icons/bs";
import { RiLock2Fill } from "react-icons/ri";
import { BsTools } from "react-icons/bs";
import { FaHeadset, FaSyncAlt } from 'react-icons/fa';
import Loader from '../../hooks/Loader'

const Page = () => { // Change "page" to "Page"

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

    }, [])

    const services = [
        { title: 'Scalable Infrastructure', description: 'Scalable infrastructure for growing businesses', icon: <BsFillCloudsFill /> },
        { title: 'Data Protection', description: 'Advanced data protection and encryption', icon: <RiLock2Fill /> },
        { title: '24/7 Support', description: '24/7 support to ensure your operations run smoothly', icon: <FaHeadset /> },
        { title: 'Cloud Migration', description: 'Cloud migration and optimization services', icon: <FaSyncAlt /> },
        { title: 'Collaboration Tools', description: 'Innovative tools for improving collaboration and efficiency', icon: <BsTools /> },
    ];

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
                        {/* Gray Section */}
                        <div className="relative bg-gray-200 h-[90vh] flex items-center justify-center px-10">
                            <div className="flex flex-col md:flex-row w-full max-w-screen-xl items-center justify-between">
                                <div className="text-left w-full md:w-3/5 mx-auto mb-6 md:mb-0">
                                    <h1 className="md:text-3xl text-center text-xl font-extrabold mb-4">
                                        Empowering Businesses with Premium Cloud Solutions
                                    </h1>
                                    <p className="text-sm md:text-lg">
                                        At SagTech.  Group, we deliver cutting-edge, secure, and scalable cloud services tailored to
                                        meet your business&apos;s unique needs. Our solutions ensure seamless performance and unmatched
                                        reliability for your critical operations.
                                    </p>
                                    <p className="text-sm md:text-lg mt-4">
                                        Join the leaders in cloud innovation. With SagTech.  Group, experience the future of cloud
                                        technology, empowering your business to achieve greater efficiency, security, and success.
                                    </p>
                                </div>
                                <div className="w-full md:w-2/5 relative h-[300px] md:h-[400px]">
                                    <Image
                                        src={cloud}
                                        alt="Cloud Solution"
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-lg"
                                        draggable={false}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* White Section */}
                        <div className="relative h-ful mb-10">
                            <div className='flex items-center justify-center'>
                                <div className="absolute  -top-20 left-1/2 transform -translate-x-1/2 w-11/12 md:w-3/4">
                                    <div className="grid grid-cols-2 gap-4">
                                        {/* Column 1 */}
                                        <div className="flex items-center bg-white p-6 shadow-lg w-full">
                                            <div className="w-1/5 md:w-2/5 flex justify-center">
                                                <Image
                                                    src={HighSecurity}
                                                    alt="Column Image"
                                                    className="w-16 md:w-32 h-16 md:h-32 object-cover"
                                                    width={64}
                                                    height={64}
                                                    draggable={false}
                                                />
                                            </div>
                                            <div className="w-4/5 md:w-3/5 items-center pl-4">
                                                <h3 className="font-bold md:text-lg text-sm">Data Security</h3>
                                                <p className="text-sm  text-gray-600">
                                                    Advanced encryption ensures secure data access.
                                                </p>
                                            </div>
                                        </div>

                                        {/* Column 2 */}
                                        <div className="flex items-center bg-white p-6 shadow-lg w-full">
                                            <div className="w-1/5 md:w-2/5 flex justify-center">
                                                <Image
                                                    src={Forever}
                                                    alt="Column Image"
                                                    className="w-16 md:w-32 h-16 md:h-32 object-cover"
                                                    width={64} // Width in pixels
                                                    height={64}
                                                    draggable={false}// Height in pixels
                                                />
                                            </div>
                                            <div className="w-4/5 md:w-3/5 pl-4">
                                                <h3 className="font-bold text-sm md:text-lg">24x7 Support</h3>
                                                <p className="text-sm text-gray-600">
                                                    Always available for uninterrupted service support.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center justify-center mt-40 text-xl md:text-2xl font-semibold uppercase'>
                                <span className="relative">
                                    Our services
                                    <div className="absolute bottom-0 top-6 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-black mt-2"></div>
                                </span>
                            </div>

                            <p className="text-center p-6 text-sm md:text-lg text-gray-600 mt-4 mb-10">
                                We offer a variety of services to help you scale your business, improve efficiency, and ensure your operations run smoothly.
                            </p>
                            <div className="relative bg-white py-2 p-20">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {services.map((service, index) => (
                                        <div key={index} className="bg-white shadow-lg p-6 text-center border-2 border-gray-100 ">
                                            <div className="flex justify-center  items-center text-xl md:text-3xl mb-4">
                                                <div className='p-4 rounded-full border-2 shadow-lg hover:bg-black border-black hover:text-white text-2xl '>
                                                    {service.icon}
                                                </div>
                                            </div>
                                            <h3 className="text-xl font-semibold">{service.title}</h3>
                                            <p>{service.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>

                    </main>
                    <Footer />
                </>
            )}
        </div>
    );
};

export default Page; // Change "page" to "Page"
