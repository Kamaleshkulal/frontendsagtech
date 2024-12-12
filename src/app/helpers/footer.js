import React from 'react'

const footer = () => {
    return (
        <>
            <footer className="grid border-t overflow-hidden grid-cols-1 md:grid-cols-2 lg:grid-cols-5 bg-white w-full h-auto p-4 mx-auto   mb-8">
                {/* Column 1: Logo and Company Name */}
                <div className="flex flex-col items-center mb-4 sm:mb-0">
                    <div className="text-logo text-black font-bold text-3xl">SagTech. </div>
                    <h2 className="text-lg font-semibold">Group</h2>
                </div>

                {/* Column 2: Navigation Links */}
                <div className="col-span-1 sm:col-span-2 lg:col-span-3 flex flex-wrap justify-center space-x-8">
                    <div className="flex flex-col">
                        <ul className="text-base">
                            <li><a href="/pages/about-us" className="text-gray-600 hover:text-gray-400">About Us</a></li>
                            <li><a href="/pages/business" className="text-gray-600 hover:text-gray-400">Business</a></li>
                            <li><a href="/pages/services" className="text-gray-600 hover:text-gray-400">Services</a></li>
                            <li><a href="/pages/blog" className="text-gray-600 hover:text-gray-400">Blog</a></li>
                        </ul>
                    </div>
                    <div className="flex flex-col">
                        <ul className="text-base">
                            <li><a href="#" className="text-gray-600 hover:text-gray-400">Silicon</a></li>
                            <li><a href="/pages/industry" className="text-gray-600 hover:text-gray-400">Industry</a></li>
                            <li><a href="/pages/testimonials" className="text-gray-600 hover:text-gray-400">Testimonials</a></li>
                            <li><a href="/pages/careers" className="text-gray-600 hover:text-gray-400">Careers</a></li>
                        </ul>
                    </div>
                    <div className="flex flex-col">
                        <ul className="text-base">
                            <li><a href="/pages/app-development" className="text-gray-600 hover:text-gray-400">Development</a></li>
                            <li><a href="/pages/design" className="text-gray-600 hover:text-gray-400">Design</a></li>
                            <li><a href="/pages/digital-marketing" className="text-gray-600 hover:text-gray-400">Marketing</a></li>
                        </ul>
                    </div>
                    <div className="flex flex-col">
                        <ul className="text-base">
                            <li><a href="/pages/cloudsolutions" className="text-gray-600 hover:text-gray-400">Cloud Solution</a></li>
                            <li><a href="/pages/blockchain-technology" className="text-gray-600 hover:text-gray-400">BlockChain</a></li>
                            <li><a href="/pages/terms-and-services" className="text-gray-600 hover:text-gray-400">Term & Service&apos;s</a></li>
                        </ul>
                    </div>
                </div>

                {/* Column 3: Office Address */}
                <div className="flex flex-col items-center  mt-10 md:mt-5 lg:mt-0">
                    <h3 className="font-semibold"></h3>
                    <p className="text-sm text-gray-600 text-center">
                        Mangaluru<br />
                        Karnataka, <br />
                        India
                    </p>
                    <p className="text-sm text-gray-600 text-center">support@itsaggroups.com</p>
                    <p className="text-sm text-gray-600 text-center">+91 08277239451</p>
                </div>
            </footer>

            {/* Copyright Section */}
            <div className="flex flex-col items-center  mt-4 mb-4">
                <hr className="w-full border-gray-300" />
                <p className="text-sm text-gray-600 mt-2">© 2024 <span className="font-bold text-lg text-logo">SagTech. </span> <span className="font-bold">Group</span>. All rights reserved.</p>
            </div>
        </>
    )
}

export default footer
