/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import React, { useEffect, useState } from 'react';
import Footer from '../../helpers/footer';
import Loader from '../../hooks/Loader'
const page = () => {

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

                    <main className="mt-24 px-10 py-10 text-gray-700 leading-relaxed">
                        <h1 className="text-4xl font-bold text-center mb-8">Policies and Procedures</h1>

                        <section className="mb-10">
                            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
                            <p>
                                SagTech.  Group is a prominent IT company dedicated to crafting cutting-edge technological solutions for global clients. Specializing in app development, UI/UX design, blockchain technologies, cloud services, and digital marketing, we prioritize innovation and client satisfaction. This document serves as a comprehensive guide to our principles, procedures, and operational policies. It is intended to foster transparency, ethical conduct, and reliability in all our engagements. By adhering to these guidelines, we aim to build trust and ensure a seamless experience for our clients. Our commitment is to drive digital transformation while maintaining the highest standards of integrity and quality.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-semibold mb-4">Data Privacy and Security</h2>
                            <p>
                                Data protection is at the core of SagTech.  Group’s operations. We employ advanced encryption to ensure data security, whether it is stored or in transit. Regular security audits are performed to detect and mitigate vulnerabilities proactively. Our practices comply with global privacy regulations, including GDPR and CCPA, ensuring that our clients’ data is managed responsibly. Data access is strictly limited to authorized personnel, reinforcing our principle of least privilege. Clients receive detailed reports about how their data is handled, including storage, usage, and security measures. We remain committed to safeguarding client data and maintaining trust through transparency.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-semibold mb-4">Service Delivery Standards</h2>
                            <p>
                                SagTech.  Group is dedicated to delivering exceptional service quality on every project. Each project is assigned a dedicated manager to streamline communication and ensure timely delivery. Rigorous quality assurance measures are employed, including comprehensive testing to identify and resolve issues before deployment. Client feedback is integrated throughout the project lifecycle to align outcomes with expectations. After deployment, we offer maintenance and support services to address any concerns promptly. By following structured processes, we ensure projects are completed on time, within budget, and in line with agreed specifications, maintaining client satisfaction at the forefront of our efforts.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-semibold mb-4">Intellectual Property Rights</h2>
                            <p>
                                Intellectual property rights are treated with utmost respect at SagTech.  Group. Clients retain complete ownership of custom solutions tailored to their specific needs. Any open-source components utilized are carefully reviewed and incorporated according to their respective licensing agreements. We uphold strict policies against reusing or reselling proprietary code or assets without explicit client consent. By prioritizing ethical practices in handling intellectual property, we ensure fairness and trust in our collaborations. These measures reflect our dedication to maintaining integrity while fostering innovation in every project we undertake.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-semibold mb-4">Blockchain Solutions Policy</h2>
                            <p>
                                Blockchain solutions at SagTech.  Group are built on principles of security, transparency, and compliance. Smart contracts undergo rigorous auditing to identify and eliminate vulnerabilities before deployment. We ensure all solutions adhere to legal and regulatory requirements in their respective jurisdictions. Clients are actively involved in the design process to guarantee ethical and sustainable adoption of blockchain technology. Transparency in tokenomics, governance, and ledger design is prioritized to build trust and ensure the long-term success of blockchain implementations. By addressing the unique challenges of blockchain projects, we aim to deliver robust and reliable solutions.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-semibold mb-4">Digital Marketing Ethics</h2>
                            <p>
                                SagTech.  Group upholds the highest ethical standards in digital marketing to create impactful campaigns responsibly. We avoid deceptive advertising and ensure compliance with regional and international regulations. Our marketing strategies are designed to prioritize client ROI while respecting consumer privacy. Data protection laws are strictly followed to maintain trust and integrity. We believe in creating meaningful connections between brands and their audiences through honest and effective campaigns. These practices demonstrate our commitment to ethical marketing and delivering measurable results for our clients.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-semibold mb-4">Cloud Solutions Best Practices</h2>
                            <p>
                                Our cloud solutions are built for reliability, scalability, and security. We leverage industry-standard tools and protocols to design secure cloud architectures. Scalable solutions are tailored to accommodate the evolving needs of our clients. Business continuity is ensured through redundant systems, minimizing downtime in the event of disruptions. Comprehensive documentation and training empower clients to maximize the value of our cloud solutions. By following best practices, we provide robust cloud services that drive efficiency and innovation for businesses across industries.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-semibold mb-4">Environmental Sustainability</h2>
                            <p>
                                SagTech.  Group recognizes the importance of environmental sustainability in today’s world. We encourage remote work and the use of digital solutions to minimize our carbon footprint. Energy-efficient technologies and data centers are adopted to conserve resources. By integrating sustainable practices into our operations, we strive to reduce our environmental impact while delivering high-quality services. These efforts reflect our commitment to social responsibility and our vision for a greener future.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-semibold mb-4">Dispute Resolution</h2>
                            <p>
                                Disputes are resolved promptly and amicably at SagTech.  Group. Initial resolution efforts involve direct communication between the parties to address concerns transparently. If issues remain unresolved, arbitration may be pursued in accordance with applicable laws. This structured approach ensures that disputes are handled efficiently, maintaining trust and collaboration. By prioritizing open communication and fairness, we aim to resolve conflicts constructively, preserving the integrity of our relationships with clients and stakeholders.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                            <p>
                                For any questions or concerns regarding our policies, please reach out to us. You can email us at support@sag-group.com, call us at +1-234-567-8900, or visit us at 1234 Innovation Lane, Tech City, USA. Our team is dedicated to providing prompt and helpful assistance to address your needs.
                            </p>
                        </section>
                    </main>

                    <Footer />
                </>
            )}
        </div>
    );
};

export default page;
