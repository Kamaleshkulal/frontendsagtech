'use client'
import React, { useEffect, useState } from 'react'
import Footer from '../../helpers/footer'
import OurPartner from '../../page/ourpatner'
import OurClient from '../../page/ourclient'
import Loader from '../../hooks/Loader'

const Page = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

    }, [])

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
                    <div className='mt-20'>
                        <OurPartner />
                        <OurClient />
                    </div>
                    <Footer />
                </>
            )}
        </div>
    )
}

export default Page

