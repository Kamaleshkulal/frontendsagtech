// import React, { useState, useEffect } from 'react';
// import { MdBusinessCenter } from "react-icons/md";
// import { FaPlus, FaUser } from "react-icons/fa";
// import DottedMap from 'dotted-map'; // Import dotted-map

// const Client = () => {
//     const map = new DottedMap({ height: 30, grid: 'diagonal' }); // Reduced height
//     const [businessCount, setBusinessCount] = useState(1);

//     // Add pins for business locations
//     map.addPin({ lat: 40.73061, lng: -73.935242, svgOptions: { color: '#d6ff79', radius: 0.4 } });
//     map.addPin({ lat: 48.8534, lng: 2.3488, svgOptions: { color: '#fffcf2', radius: 0.4 } });

//     const svgMap = map.getSVG({
//         radius: 0.22,
//         color: '#423B38',
//         shape: 'circle',
//         backgroundColor: '#020300',
//     });

//     useEffect(() => {
//         const interval = setInterval(() => {
//             if (businessCount < 6) {
//                 setBusinessCount(prevCount => prevCount + 1);
//             }
//         }, 500);
//         return () => clearInterval(interval);
//     }, [businessCount]);

//     return (
//         <div className="relative  flex flex-col items-center mt-8">
//             {/* Title */}
//             <h1 className="text-4xl font-extrabold text-black uppercase mb-8">
//                 Business
//             </h1>

//             {/* Background Video */}
//             <div className="relative w-full h-[250px] md:h-[350px] lg:h-[400px] overflow-hidden shadow-md mb-8">
//                 <video autoPlay loop muted >
//                     <source src="https://saggroup.s3.us-east-1.amazonaws.com/bannermp.mp4" type="video/mp4" />
//                 </video>
//             </div>

//             {/* Cards */}
//             <div className="flex flex-wrap justify-center gap-8 w-full px-4">
//                 <div className="flex items-center bg-white border rounded-lg shadow-xl p-6 w-64 space-x-4 hover:shadow-2xl transform hover:scale-105 transition duration-300">
//                     <div className="flex justify-center border-2 border-gray-800 rounded-full p-4">
//                         <MdBusinessCenter className="text-3xl text-gray-800" />
//                     </div>
//                     <div>
//                         <h3 className="text-xl font-semibold uppercase text-gray-800">Business</h3>
//                         <div className="flex items-center mt-2">
//                             <FaPlus className="text-gray-600" />
//                             <h3 className="text-2xl font-bold ml-2 text-gray-800">{businessCount}</h3>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="flex items-center bg-white border rounded-lg shadow-xl p-6 w-64 space-x-4 hover:shadow-2xl transform hover:scale-105 transition duration-300">
//                     <div className="flex justify-center border-2 border-gray-800 rounded-full p-4">
//                         <FaUser className="text-3xl text-gray-800" />
//                     </div>
//                     <div>
//                         <h3 className="text-xl font-semibold uppercase text-gray-800">Client</h3>
//                         <div className="flex items-center mt-2">
//                             <FaPlus className="text-gray-600" />
//                             <h3 className="text-2xl font-bold ml-2 text-gray-800">{businessCount}</h3>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Dotted Map */}
//             <div className="flex justify-center mt-8">
//                 <div
//                     className="p-6"
//                     dangerouslySetInnerHTML={{ __html: svgMap }}
//                     style={{
//                         width: '500px', // Adjust width
//                         height: '500px', // Adjust height
//                         filter: 'invert(1)',
//                         borderRadius: '12px',
//                         boxShadow: '0 8px 12px rgba(0, 0, 0, 0.2)',
//                     }}
//                 />
//             </div>
//         </div>
//     );
// };

// export default Client;
