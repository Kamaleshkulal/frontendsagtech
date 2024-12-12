import React from 'react';
import { motion, useInView } from 'framer-motion';

const InnovationSection = () => {
    return (
        <div className="container mx-auto p-0 py-8">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
            >
                <h2 className="text-2xl md:text-3xl font-bold text-black uppercase">Next Move</h2>
                <p className="text-lg mt-4 text-gray-600">
                    Leading the future of tech with groundbreaking innovation and transformative growth.
                    Pioneering new frontiers, we redefine possibilities and set the pace for tomorrow&apos;s success.
                </p>

            </motion.div>

            {/* Grid Layout for Two Rows and Two Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 h-auto">
                {/* First Row, First Column */}

                <div className="relative  group h-80 overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative group h-80"
                    >
                        {/* Image background */}
                        <div
                            className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                            style={{
                                backgroundImage: "url('https://saggroup.s3.us-east-1.amazonaws.com/next/+InnovationinTechnology.jpeg')",
                            }}
                        >
                            {/* Dark overlay on hover */}
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-1000"></div>

                            {/* Title at the Bottom (Visible) */}
                            <div className="absolute bottom-0 left-0 w-full text-center text-white p-4 opacity-100 group-hover:opacity-0 transition-opacity duration-1000">
                                <h2 className="text-lg lg:text-2xl md:text-xl uppercase font-bold">Innovation in Technology</h2>
                            </div>

                            {/* Hover effect: Show additional data when hovered */}
                            <div className="absolute inset-0 flex items-center justify-center text-center text-white p-4 opacity-0 group-hover:opacity-100 duration-1000 transform group-hover:translate-y-0 translate-y-full transition-transform">
                                <div className="space-x-1">
                                    <h2 className="md:text-lg text-base uppercase font-bold">Innovation in Technology</h2>
                                    <p className="md:text-md text-sm font-semibold mt-2">
                                        Pioneering solutions, future-driven, creative disruption, tech advancement, seamless integration.
                                    </p>
                                    <p className="text-sm mt-2">
                                        Our innovation-driven approach ensures cutting-edge solutions that shape the future of technology and business.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>


                {/* First Row, Second Column */}
                <div className="flex">
                    {/* First Column (40% width) */}
                    <div className="relative  w-2/5  group h-80 overflow-hidden">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative group h-80"
                        >
                            {/* Image background */}
                            <div
                                className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                                style={{
                                    backgroundImage: "url('https://saggroup.s3.us-east-1.amazonaws.com/next/TransformingCustomerExperience.jpeg')",
                                }}
                            >
                                {/* Dark overlay on hover */}
                                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-1000"></div>

                                {/* Title at the Bottom (Visible) */}
                                <div className="absolute bottom-0 left-0 w-full text-center text-white p-4 opacity-100 group-hover:opacity-0 transition-opacity duration-1000">
                                    <h2 className="text-lg lg:text-2xl md:text-xl uppercase font-bold">Transforming Customer Experience</h2>
                                </div>

                                {/* Hover effect: Show additional data when hovered */}
                                <div className="absolute inset-0 flex items-center justify-center text-center text-white p-4 opacity-0 group-hover:opacity-100 duration-1000 transform group-hover:translate-y-0 translate-y-full transition-transform">
                                    <div className="space-x-1">
                                        <h2 className="md:text-lg text-base uppercase font-bold">Transforming Experience</h2>
                                        <p className="md:text-md text-sm font-semibold mt-2">
                                            User-centric, intuitive design, customer satisfaction, seamless interface.
                                        </p>
                                        <p className="text-sm  mt-2">
                                            We prioritize user-centric solutions to provide seamless experiences that drive customer satisfaction and loyalty.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Second Column (60% width) */}

                    <div className="relative  w-3/5  group h-80 overflow-hidden">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative group h-80"
                        >
                            {/* Image background */}
                            <div
                                className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                                style={{
                                    backgroundImage: "url('https://saggroup.s3.us-east-1.amazonaws.com/next/InsightsforSmarterDecisions.jpeg')",
                                }}
                            >
                                {/* Dark overlay on hover */}
                                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-1000"></div>

                                {/* Title at the Bottom (Visible) */}
                                <div className="absolute bottom-0 left-0 w-full text-center text-white p-4 opacity-100 group-hover:opacity-0 transition-opacity duration-1000">
                                    <h2 className="text-lg lg:text-2xl md:text-xl uppercase font-bold">Insights for Smarter Decisions</h2>
                                </div>

                                {/* Hover effect: Show additional data when hovered */}
                                <div className="absolute inset-0 flex items-center justify-center text-center text-white p-4 opacity-0 group-hover:opacity-100 duration-1000 transform group-hover:translate-y-0 translate-y-full transition-transform">
                                    <div>
                                        <h2 className="md:text-lg text-base uppercase font-bold">Insights for Smarter Decisions</h2>
                                        <p className="md:text-md text-sm font-semibold mt-2">
                                            Data-driven, actionable insights, predictive analysis, informed decisions, optimized outcomes.
                                        </p>
                                        <p className="text-sm mt-2">
                                            Leverage data insights to make informed, smarter business decisions, enhancing operational efficiency and success.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>

                {/* Second Row, First Column */}
                <div className="flex">
                    {/* First Column (40% width) */}
                    <div className="relative w-3/5 group h-80 overflow-hidden">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative group h-80"
                        >
                            {/* Image background */}
                            <div
                                className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                                style={{
                                    backgroundImage: "url('https://saggroup.s3.us-east-1.amazonaws.com/next/ThePowerofAccuracy.jpeg')",
                                }}
                            >
                                {/* Dark overlay on hover */}
                                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-1000"></div>

                                {/* Title at the Bottom (Visible) */}
                                <div className="absolute bottom-0 left-0 w-full text-center text-white p-4 opacity-100 group-hover:opacity-0 transition-opacity duration-1000">
                                    <h2 className="text-lg lg:text-2xl md:text-xl uppercase font-bold">The Power of Accuracy</h2>
                                </div>

                                {/* Hover effect: Show additional data when hovered */}
                                <div className="absolute inset-0 flex items-center justify-center text-center text-white p-4 opacity-0 group-hover:opacity-100 duration-1000 transform group-hover:translate-y-0 translate-y-full transition-transform">
                                    <div className="space-x-1">
                                        <h2 className="md:text-lg text-base uppercase font-bold">The Power of Accuracy</h2>
                                        <p className="md:text-md text-sm font-semibold mt-2">
                                            Precision, reliability, error-free solutions, data validation, optimized performance, excellence.
                                        </p>
                                        <p className="text-sm mt-2">
                                            Our commitment to accuracy guarantees dependable and precise solutions, eliminating errors and ensuring top performance.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Second Column (60% width) */}

                    <div className="relative w-2/5 group h-80 overflow-hidden">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative group h-80"
                        >
                            {/* Image background */}
                            <div
                                className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                                style={{
                                    backgroundImage: "url('https://saggroup.s3.us-east-1.amazonaws.com/next/EnsuringAssuredResults.jpeg')",
                                }}
                            >
                                {/* Dark overlay on hover */}
                                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-1000"></div>

                                {/* Title at the Bottom (Visible) */}
                                <div className="absolute bottom-0 left-0 w-full text-center text-white p-4 opacity-100 group-hover:opacity-0 transition-opacity duration-1000">
                                    <h2 className="text-lg lg:text-2xl md:text-xl uppercase font-bold">Assured Results</h2>
                                </div>

                                {/* Hover effect: Show additional data when hovered */}
                                <div className="absolute inset-0 flex items-center justify-center text-center text-white p-4 opacity-0 group-hover:opacity-100 duration-1000 transform group-hover:translate-y-0 translate-y-full transition-transform">
                                    <div className="space-x-1 py-2 ">
                                        <h2 className="md:text-lg text-base uppercase font-bold">Assured Results</h2>
                                        <p className="md:text-md text-sm font-semibold mt-2">
                                            Consistency, excellence, trusted outcomes.
                                        </p>
                                        <p className="text-sm mt-2">
                                            We assure consistently high-quality results, fostering trust and long-lasting relationships with our clients.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>

                {/* Second Row, Second Column */}

                <div className="relative  group h-80 overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative group h-80"
                    >
                        {/* Image background */}
                        <div
                            className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                            style={{
                                backgroundImage: "url('https://saggroup.s3.us-east-1.amazonaws.com/next/Future-ReadyInnovation.jpeg')",
                            }}
                        >
                            {/* Dark overlay on hover */}
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-1000"></div>

                            {/* Title at the Bottom (Visible) */}
                            <div className="absolute bottom-0 left-0 w-full text-center text-white p-4 opacity-100 group-hover:opacity-0 transition-opacity duration-1000">
                                <h2 className="text-lg lg:text-2xl md:text-xl uppercase font-bold">Future-Ready Innovation</h2>
                            </div>

                            {/* Hover effect: Show additional data when hovered */}
                            <div className="absolute inset-0 flex items-center justify-center text-center text-white p-4 opacity-0 group-hover:opacity-100 duration-1000 transform group-hover:translate-y-0 translate-y-full transition-transform">
                                <div className="space-x-1">
                                    <h2 className="md:text-lg text-base uppercase font-bold">Future-Ready Innovation</h2>
                                    <p className="md:text-md text-sm font-semibold mt-2">
                                        Forward-thinking, emerging technologies, scalability, adaptability, problem-solving, disruptive progress.
                                    </p>
                                    <p className="text-sm mt-2">
                                        We create solutions that are adaptable to future needs, ensuring your business stays competitive and resilient.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>


            </div>
        </div>
    );
};

export default InnovationSection;










