import Image from 'next/image';
import React, { useState } from 'react'
import blockChain from '../blockchainbg.jpg';
const HoverCard = ({ title, imageUrl, description }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="max-w-sm rounded bg-white overflow-hidden shadow-lg m-4">
            {/* Title */}
            <div className="px-6 py-4">
                <h2 className="font-bold text-xl mb-2">{title}</h2>
            </div>

            {/* Image */}
            <div
                className="relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Image
                    src={blockChain}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                />

                {/* Description appears on hover */}
                {isHovered && (
                    <div className="absolute inset-0 bg-black bg-opacity-60 text-white flex flex-col justify-end p-4">
                        <p className="text-sm">{description.substring(0, 100)}...</p>
                        <button className="mt-2 text-blue-400">See More</button>
                    </div>
                )}
            </div>

            {/* Default description (hidden by hover) */}
            <div className="px-6 py-4">
                {!isHovered && (
                    <p className="text-gray-700 text-base">{description.substring(0, 100)}...</p>
                )}
            </div>
        </div>
    );
};


export default HoverCard
