"use client";
import React, { useState, useEffect, useRef } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import Loader from 'react-loader'; // Importing the loader
import Footer from '../../helpers/footer';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const applications = [
    {
        applicationId: 'APP00201',
        type: 'Marketing',
        requirements: 'Knowledge of marketing strategies, social media management, etc.',
        experience: '2 years',
        level: 'Mid',
        title: 'Marketing Executive',
        postedDate: '2023-10-01',
        expiryDate: '2024-01-01'
    },
    {
        applicationId: 'APP30445',
        type: 'Advertising',
        requirements: 'Experience in digital advertising, ad campaigns, etc.',
        experience: '3 years',
        level: 'Senior',
        title: 'Advertising Specialist',
        postedDate: '2023-08-15',
        expiryDate: '2023-12-31'
    },
    {
        applicationId: 'APP0232',
        type: 'IT',
        requirements: 'Programming knowledge in Java, Python, etc.',
        experience: '5 years',
        level: 'Senior',
        title: 'IT Manager',
        postedDate: '2023-06-30',
        expiryDate: '2024-03-31'
    },
    {
        applicationId: 'APP2232',
        type: 'Business',
        requirements: 'Strong analytical skills, business development experience, etc.',
        experience: '4 years',
        level: 'Mid',
        title: 'Business Analyst',
        postedDate: '2023-09-01',
        expiryDate: '2024-02-28'
    },
    {
        applicationId: 'APP42001',
        type: 'IT',
        requirements: `
            - Strong programming skills in Java, OOP, and Data Structures & Algorithms (DSA).
            - Experience with JavaScript frameworks like React and React Native (4+ years).
            - Proficiency in Spring Boot (3+ years).
            - Hands-on experience with MySQL, NoSQL databases (2+ years).
            - AWS cloud services experience (4+ years).
            - Version control using Git and CI/CD pipelines.
            - Familiarity with Agile and DevOps methodologies.
            - Understanding of RESTful API design and microservices architecture.
            - Excellent problem-solving and debugging skills.
            - Strong communication skills and ability to work in a collaborative environment.
        `,
        experience: '4+ years',
        level: 'Senior',
        title: 'Fullstack Developer',
        postedDate: '2023-10-24',
        expiryDate: '2024-03-31',
        company: 'SagTech. groups',
        description: `
            SagTech. Globals is seeking a flexible Fullstack Developer with experience in both front-end and back-end technologies.
            The ideal candidate should have a solid understanding of software development processes and be capable of working on
            large-scale web applications. This role requires a mix of independent problem-solving and collaboration within a team.
            The developer will contribute to the design, development, and maintenance of scalable applications while ensuring high
            performance and responsiveness. We encourage a culture of continuous learning, with opportunities to explore new technologies
            and growth within the team. If you're passionate about building impactful solutions in a dynamic environment, this role is for you.
            
            
        `
    }
];



const Page = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchCriteria, setSearchCriteria] = useState({ query: '', type: '', requirements: '', experience: '', level: '' });
    const [filteredApplications, setFilteredApplications] = useState(applications);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5); // Number of items to show per page
    const [selectedApplication, setSelectedApplication] = useState(null);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };

    }, []);

    useEffect(() => {
        const filterApplications = () => {
            setLoading(true);
            const filtered = applications.filter(app => {
                const isTypeMatch = searchCriteria.type === '' || app.type === searchCriteria.type;
                const isRequirementsMatch = searchCriteria.requirements === '' || app.requirements.toLowerCase().includes(searchCriteria.requirements.toLowerCase());
                const isExperienceMatch = searchCriteria.experience === '' || app.experience.toLowerCase().includes(searchCriteria.experience.toLowerCase());
                const isLevelMatch = searchCriteria.level === '' || app.level.toLowerCase() === searchCriteria.level.toLowerCase();
                const isQueryMatch = searchCriteria.query === '' ||
                    app.title.toLowerCase().includes(searchCriteria.query.toLowerCase()) ||
                    app.applicationId.toLowerCase().includes(searchCriteria.query.toLowerCase());

                return isTypeMatch && isRequirementsMatch && isExperienceMatch && isLevelMatch && isQueryMatch;
            });

            setFilteredApplications(filtered);
            setLoading(false);
        };

        filterApplications();
    }, [searchCriteria]);

    // Handle input change for search
    const handleInputChange = (e) => {
        setSearchCriteria(prev => ({ ...prev, query: e.target.value }));
    };

    // Change page
    const nextPage = () => {
        if (currentPage < Math.ceil(filteredApplications.length / itemsPerPage)) {
            setCurrentPage(prev => prev + 1);
        }
    };

    const previousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prev => prev - 1);
        }
    };
    // Helper function for truncating strings
    const truncateString = (str, maxLength) => {
        if (str.length > maxLength) {
            return str.substring(0, maxLength - 1) + "...";
        }
        return str;
    };

    // Calculate current applications to display
    const indexOfLastApplication = currentPage * itemsPerPage;
    const indexOfFirstApplication = indexOfLastApplication - itemsPerPage;
    const currentApplications = filteredApplications.slice(indexOfFirstApplication, indexOfLastApplication);

    return (
        <div className="h-[90vh]"> {/* Set height to 90% of the screen */}
            <nav className="bg-white border-b border-gray-200">
                <div className="flex justify-between items-center w-full h-20 px-10">
                    <div className="text-logo text-black font-bold text-5xl">SagTech. </div>
                    <div className="relative" ref={dropdownRef}>
                        <FaUserCircle
                            className="text-4xl text-gray-600 cursor-pointer"
                            onClick={toggleDropdown}
                        />
                        {isOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 shadow-lg rounded-md py-2">
                                <ul>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => { alert('View Profile clicked'); setIsOpen(false); }}>View Profile</li>
                                    <li className="border-t border-gray-300">
                                        <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => { alert('Update Profile clicked'); setIsOpen(false); }}>Update Profile</div>
                                    </li>
                                    <li className="border-t border-gray-300">
                                        <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => { alert('Application Status clicked'); setIsOpen(false); }}>Application Status</div>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </nav>

            <div className="flex flex-col items-center px-10 py-5">
                <h2 className="text-xl font-semibold uppercase mb-4">Search Applications</h2>
                <div className="flex items-center mb-4 w-full lg:w-1/2">
                    <input
                        type="text"
                        placeholder="Search by Title or Application ID"
                        className="border rounded-md px-4 py-2 w-full"
                        onChange={handleInputChange}
                    />
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                    <div className="flex flex-wrap items-center gap-2">
                        {['Marketing', 'Advertising', 'IT', 'Business'].map(type => (
                            <button
                                key={type}
                                className={`px-4 py-2 rounded ${searchCriteria.type === type ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} transition`}
                                onClick={() => setSearchCriteria(prev => ({ ...prev, type }))} // Set type filter
                            >
                                {type}
                            </button>
                        ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                        {['Entry', 'Mid', 'Senior'].map(level => (
                            <button
                                key={level}
                                className={`px-4 py-2 rounded ${searchCriteria.level === level ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} transition`}
                                onClick={() => setSearchCriteria(prev => ({ ...prev, level }))} // Set level filter
                            >
                                {level}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex justify-center px-4  h-full gap-2 md:gap-8">
                {/* First Column for Filtered Applications */}
                <div className="lg:w-[30%] lg:h-[80vh] w-[40%] h-[92vh] md:h-[80vh] p-4 border-2 border-green-500 border-double rounded-lg flex flex-col justify-between">
                    <div>
                        <h2 className="lg:text-xl text-sm font-semibold mb-4">Filtered Applications</h2>
                        {loading && (
                            <div className="flex justify-center py-5">
                                <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
                            </div>
                        )}

                        {!loading &&
                            currentApplications.map((app) => (
                                <div
                                    key={app.applicationId}
                                    className={`border p-4 rounded-md mb-4 cursor-pointer ${selectedApplication && selectedApplication.applicationId === app.applicationId ? "bg-slate-200" : ""}`}
                                    onClick={() => setSelectedApplication(app)}
                                >
                                    <h3 className="lg:text-lg text-sm font-semibold">
                                        {truncateString(app.title, 20)}
                                    </h3>
                                    <p className="text-sm">
                                        {truncateString(app.applicationId, 10)}
                                    </p>
                                </div>
                            ))}
                    </div>
                    <div className="flex justify-between mt-auto">
                        <button
                            onClick={previousPage}
                            disabled={currentPage === 1}
                            className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
                        >
                            <FaChevronLeft />
                        </button>
                        <button
                            onClick={nextPage}
                            disabled={currentPage === Math.ceil(filteredApplications.length / itemsPerPage)}
                            className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
                        >
                            <FaChevronRight />
                        </button>
                    </div>
                </div>

                {/* Second Column for Application Details */}
                <div className="w-[70%] md:h-[80vh] lg:h-[80vh] h-[92vh] p-4 border-2 border-red-500 border-dotted rounded-lg flex flex-col justify-between overflow-auto">
                    {selectedApplication ? (
                        <>
                            {/* Centered Title */}
                            <h2 className=" text-md uppercase lg:text-2xl md:text-xl font-bold mb-4 text-center">
                                {selectedApplication.title}
                            </h2>

                            {/* Row for Level, Experience, Posted Date, and Expiry Date */}
                            <div className="mb-4">
                                {/* Level and Experience */}
                                <div className="flex flex-col md:flex-row md:justify-between mb-2">
                                    <div className="flex items-center space-x-0 md:space-x-2 lg:space-x-2">
                                        <span className="text-sm font-semibold">Level:</span>
                                        <span className="text-sm text-gray-600">{selectedApplication.level}</span>
                                    </div>
                                    <div className="flex items-center space-x-0 md:space-x-2 lg:space-x-2">
                                        <span className="text-sm font-semibold">Experience:</span>
                                        <span className="text-sm text-gray-600">{selectedApplication.experience}</span>
                                    </div>
                                </div>

                                {/* Posted Date and Expiry Date */}
                                <div className="flex flex-col md:flex-row md:justify-between">
                                    <div className="flex items-center space-x-0 md:space-x-2 lg:space-x-2">
                                        <span className="font-semibold text-sm">Posted Date:</span>
                                        <span className="text-gray-600 text-sm">{selectedApplication.postedDate}</span>
                                    </div>
                                    <div className="flex items-center space-x-0 md:space-x-2 lg:space-x-2">
                                        <span className="font-semibold text-sm">Expiry Date:</span>
                                        <span className="text-gray-600 text-sm">{selectedApplication.expiryDate}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Description Section */}
                            <div className="mb-4">
                                <p className="font-semibold">Description:</p>
                                <p className="text-gray-600 text-sm">{selectedApplication.description}</p>
                            </div>

                            {/* Requirements Section */}
                            <div className="mb-4">
                                <p className="font-semibold">Requirements:</p>
                                <ul className="list-disc  pl-5">
                                    <li className="text-sm">Strong programming skills in Java, OOP, and Data Structures & Algorithms (DSA).</li>
                                    <li className="text-sm">Experience with JavaScript frameworks like React and React Native (4+ years).</li>
                                    <li className="text-sm">Proficiency in Spring Boot (3+ years).</li>
                                    <li className="text-sm">Hands-on experience with MySQL, NoSQL databases (2+ years).</li>
                                    <li className="text-sm">AWS cloud services experience (4+ years).</li>
                                    <li className="text-sm">Version control using Git and CI/CD pipelines.</li>
                                    <li className="text-sm">Familiarity with Agile and DevOps methodologies.</li>
                                    <li className="text-sm">Understanding of RESTful API design and microservices architecture.</li>
                                    <li className="text-sm">Excellent problem-solving and debugging skills.</li>
                                    <li className="text-sm">Strong communication skills and ability to work in a collaborative environment.</li>
                                </ul>
                            </div>

                            {/* Apply Button at the bottom-right corner */}
                            <div className="mt-auto flex justify-end">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Apply
                                </button>
                            </div>
                        </>
                    ) : (
                        <p className="text-gray-500 text-center">Select an application to view details.</p>
                    )}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Page;
