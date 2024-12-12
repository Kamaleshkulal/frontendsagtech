'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const OurClient = () => {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Loading state

    useEffect(() => {
        // Fetch data from the API
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/project/project_image_details/`)
            .then((response) => response.json())
            .then((data) => {
                setProjects(data);
                setIsLoading(false); // Data fetched, set loading to false
                console.log(data);
            })
            .catch((error) => {
                setIsLoading(false); // In case of error, stop loading
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="text-center p-8">
            {isLoading ? (
                // Loader while fetching data
                <div className="fixed inset-0 flex justify-center items-center bg-white opacity-90 z-50">
                    <div className="w-16 h-16 border-4 border-t-4 bg-white border-gray-300 rounded-full animate-spin"></div>
                </div>
            ) : (
                <>
                    <h2 className="text-3xl font-semibold">Our Happy Customer</h2>
                    <p className="md:text-lg text-sm p-8 text-gray-600 mt-2">
                        We take pride in delivering exceptional services and building strong relationships with our clients.
                        Their satisfaction is our top priority, and we are thrilled to have contributed to their success.
                    </p>
                    <div className="flex flex-wrap justify-center gap-5 mt-5">
                        {projects.map((project, index) => (
                            <div key={index} className="text-center mx-2 my-4 max-w-xs">
                                {/* Fixed container size to avoid flickering */}
                                <div className="w-24 h-24 mx-auto mb-3">
                                    {/* Display project logo using the next/image component with blur-up effect */}
                                    <Image
                                        src={project.project_logo}
                                        alt={`Project ${project.title}`}
                                        width={100}
                                        height={100}
                                        draggable={false}
                                        className="object-cover"
                                        placeholder="blur" // Adds a blur-up effect on loading
                                        blurDataURL="/path/to/your/placeholder-image.jpg" // Optional: Use a base64 image or a small placeholder
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default OurClient;
