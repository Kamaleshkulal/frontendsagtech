"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const OurPartner = () => {
    const [partners, setPartners] = useState([]);

    // Fetch partner data from the API
    useEffect(() => {
        const fetchPartners = async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/website/our-partner`);
            const data = await response.json();
            setPartners(data); // Store the fetched partners data in state
        };

        fetchPartners();
    }, []);

    return (
        <div className="text-center p-8">
            <h2 className="text-3xl font-bold mb-4">Our Partners</h2>
            {/* Description Section */}
            <p className="md:text-lg text-sm p-8 text-black mb-8">
                We are proud to collaborate with leading companies in the fields of
                <span className="font-semibold"> Web Application Development, Mobile Application Development, Blockchain, Digital Marketing, Designing, and Cloud Computing.</span>
                These partnerships help us create innovative and cutting-edge solutions for our clients.
            </p>

            {/* Partner Images Section */}
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 p-8">
                {partners.map((partner, partnerIndex) => (
                    partner.images.map((imageObj, index) => {

                        if (partnerIndex * partner.images.length + index >= 18) {
                            return null; // Skip rendering for images beyond the 18th one
                        }

                        return (
                            <div key={partner.uuid + '-' + index} className="max-w-xs">
                                <Image
                                    src={imageObj.image}
                                    alt={`Partner ${partner.name} - ${index + 1}`}
                                    width={150}
                                    height={150}
                                    draggable={false}
                                />
                            </div>
                        );
                    })
                ))}
            </div>
        </div>
    );
}

export default OurPartner;

