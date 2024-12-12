'use client'
import React, { useEffect, useState } from 'react';
import Footer from '../../helpers/footer';
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
                    <div className="max-w-4xl mx-auto pt-24 p-6 shadow-lg ">
                        <h1 className="text-3xl font-semibold text-gray-800 mb-4">Welcome to SAG Group Terms and Conditions</h1>
                        <p className="text-gray-700 mb-6">
                            By using our website and services, you agree to be bound by the following terms and conditions. Please read them carefully before accessing or using our services. If you do not agree to these terms, please do not use our services. These terms govern the use of our services, which include software applications, consulting services, and other IT solutions provided by SAG Group Pvt. Ltd.
                        </p>

                        <div className="mb-4">
                            <h1 className="text-xl font-semibold text-gray-800 mb-2">Acceptance of Terms</h1>
                            <p className="text-gray-700">
                                By accessing or using the services provided by SAG Group Pvt. Ltd., including but not limited to our website, software, mobile applications, and consulting services, you agree to comply with these Terms and Services. These terms are binding and represent a legal agreement between you and SAG Group. If you do not agree to these terms, you must immediately discontinue the use of our services. Your continued use of the services will be deemed acceptance of these terms.
                            </p>
                        </div>

                        <div className="mb-4">
                            <h1 className="text-xl font-semibold text-gray-800 mb-2">Services Provided</h1>
                            <p className="text-gray-700">
                                SAG Group Pvt. Ltd, provides a range of IT services including software development, consulting, data analysis, system integration, cloud-based solutions, and enterprise resource planning (ERP) systems. We offer customized solutions tailored to your business needs, and our team works closely with clients to develop innovative technologies designed to enhance efficiency, scalability, and growth. Our services extend to industries such as healthcare, finance, education, and manufacturing. Each service is designed with best practices and industry standards in mind, ensuring high-quality results for your business.
                            </p>
                            <p className="text-gray-700">
                                Additionally, SAG Group Pvt. Ltd. offers ongoing support and maintenance services to ensure that the systems we implement continue to function optimally. This may include bug fixes, security patches, performance optimization, and regular updates. For more information about the specific services available, please refer to our website or reach out to our sales team to receive a detailed service brochure or proposal.
                            </p>
                        </div>

                        <div className="mb-4">
                            <h1 className="text-xl font-semibold text-gray-800 mb-2">User Responsibilities</h1>
                            <p className="text-gray-700">
                                As a user of SAG Group Pvt. Ltd. services, you agree to use them only for lawful purposes. You must not use our services in any way that:
                            </p>
                            <ul className="list-none text-gray-700">
                                <li>Violates any applicable local, state, national, or international law or regulation, including but not limited to data protection laws and intellectual property laws.</li>
                                <li>Infringes upon the intellectual property or privacy rights of others, including unauthorized access to or use of third-party data, software, or services.</li>
                                <li>Interferes with or disrupts the functionality of our services or networks, including introducing viruses, malware, or any other harmful code into our systems.</li>
                                <li>Engages in activities that may result in harm to the reputation or goodwill of SAG Group, including spreading false or defamatory information.</li>
                            </ul>
                            <p className="text-gray-700">
                                In addition to these responsibilities, you are also responsible for maintaining the confidentiality of any account credentials provided by SAG Group Pvt. Ltd. for accessing the services. This includes ensuring that passwords and login details are kept secure and not shared with unauthorized parties. If you believe that your account has been compromised, you must notify us immediately to prevent unauthorized use of our services.
                            </p>
                        </div>


                        <div className="mb-4">
                            <h1 className="text-xl font-semibold text-gray-800 mb-2">Account Creation and Security</h1>
                            <p className="text-gray-700">
                                In order to access some of the services provided by SAG Group Pvt. Ltd., you may be required to create an account. When creating an account, you agree to provide accurate and up-to-date information. This information may include personal identification details such as your name, email address, phone number, and payment details (where applicable). You agree to update your account information as necessary to keep it accurate, complete, and current.
                            </p>
                            <p className="text-gray-700">
                                You are responsible for maintaining the confidentiality of your account login credentials and for all activities under your account.SAG Group Pvt. Ltd. is not liable for any loss or damage arising from your failure to protect your account details. It is your responsibility to promptly inform SAG Group Pvt. Ltd. of any unauthorized use of your account or any other breach of security. You may be held liable for any activity that occurs under your account, even if such activity was conducted without your knowledge or consent.
                            </p>
                        </div>

                        {/* <div className="mb-4">
                    <h1 className="text-xl font-semibold text-gray-800 mb-2">Payment and Fees</h1>
                    <p className="text-gray-700">
                        SAG Group provides its services for a fee, which will be outlined in the service agreement or proposal. Fees are typically invoiced on a 10-day basis, with payments due within 10 days from the invoice date. The agreed-upon payment terms will be specified in the relevant agreement, and any failure to adhere to these terms may result in penalties, service suspension, or termination of access to the services.
                    </p>
                    <p className="text-gray-700">
                        Fees may include charges for initial setup, monthly subscriptions, custom development work, and ongoing maintenance or support services. In addition to the agreed fees, you may be responsible for any applicable taxes or other charges imposed by local authorities. All payments must be made in the currency specified in the agreement. Failure to make timely payments may result in suspension or termination of your access to our services. In such cases, we reserve the right to collect any outstanding payments through legal means, if necessary.
                    </p>
                </div> */}

                        <div className="mb-4">
                            <h1 className="text-xl font-semibold text-gray-800 mb-2">Termination of Services</h1>
                            <p className="text-gray-700">
                                SagTech.  Group reserves the right to suspend or terminate your access to our services at any time, without notice, if we believe you have violated these Terms and Services or if we are required to do so by law. We may also suspend services if payment is not received on time or if there is an ongoing dispute regarding the use of the services.
                            </p>
                            <p className="text-gray-700">
                                If you wish to terminate your use of our services, you may do so by contacting us in writing. However, termination will not relieve you of any payment obligations for services rendered up to the date of termination. If you have a contract with SagTech.  Group, the terms for termination will be subject to the specific conditions outlined in that agreement.
                            </p>
                        </div>

                        <div className="mb-4">
                            <h1 className="text-xl font-semibold text-gray-800 mb-2">Intellectual Property</h1>
                            <p className="text-gray-700">
                                All content, software, technology, and intellectual property provided by SagTech.  Group, including logos, trademarks, service marks, and proprietary software, are the property of SagTech.  Group or its licensors. You are granted a limited, non-transferable license to use our services for their intended purposes, subject to the terms outlined in these Terms and Services.
                            </p>
                            <p className="text-gray-700">
                                Except for the rights granted to you under this license, you do not acquire any ownership or rights to SagTech.  Group intellectual property. You may not copy, modify, distribute, decompile, or create derivative works based on our intellectual property without express written permission from SagTech.  Group. Any unauthorized use of our intellectual property will be subject to legal action.
                            </p>
                        </div>

                        <div className="mb-4">
                            <h1 className="text-xl font-semibold text-gray-800 mb-2">Data Privacy</h1>
                            <p className="text-gray-700">
                                At SagTech.  Group, we value the privacy and security of your data. We are committed to safeguarding your personal and business data in accordance with applicable privacy laws, including the General Data Protection Regulation (GDPR) for European Union residents, and other relevant data protection regulations. Our Privacy Policy outlines the types of data we collect, how we use it, and your rights regarding your data.
                            </p>
                            <p className="text-gray-700">
                                We may collect personal data such as your name, email address, phone number, and payment information in order to provide our services. This data is used solely for the purpose of delivering our services and communicating with you regarding your account. We do not share your data with third parties unless required by law or to fulfill the terms of the service agreement. You have the right to request access to your data, update your information, or request deletion of your data in accordance with our Privacy Policy.
                            </p>
                        </div>

                        <div className="mb-4">
                            <h1 className="text-xl font-semibold text-gray-800 mb-2">Limitation of Liability</h1>
                            <p className="text-gray-700">
                                SagTech.  Group’s liability for any claims arising from the use of our services is limited to the amount paid by the user for the services directly related to the claim. In no event will SAG Group be liable for any indirect, incidental, or consequential damages, including but not limited to loss of data, loss of revenue, or business interruptions.
                            </p>
                            <p className="text-gray-700">
                                You acknowledge that the use of our services is at your own risk, and SAG Group will not be held responsible for any issues arising from the failure of our services to meet your expectations or for any third-party actions beyond our control.
                            </p>
                        </div>

                        <div className="mb-4">
                            <h1 className="text-xl font-semibold text-gray-800 mb-2">Governing Law and Dispute Resolution</h1>
                            <p className="text-gray-700">
                                These Terms and Services are governed by the laws of the state or country in which SAG Group is incorporated, without regard to its conflict of law principles. Any disputes arising from or related to these terms will be resolved through binding arbitration in the location specified in the relevant agreement. Both parties agree to submit to the exclusive jurisdiction of the courts in that location.
                            </p>
                        </div>

                        <div className="mb-4">
                            <h1 className="text-xl font-semibold text-gray-800 mb-2">Miscellaneous</h1>
                            <p className="text-gray-700">
                                If any provision of these Terms and Services is found to be invalid or unenforceable, the remaining provisions will continue in full force and effect. The failure of SAG Group to enforce any provision of these Terms and Services does not constitute a waiver of that provision or the right to enforce it at a later time.
                            </p>
                        </div>

                        <div className="mb-4">
                            <h1 className="text-xl font-semibold text-gray-800 mb-2">Contact Information</h1>
                            <p className="text-gray-700">
                                If you have any questions or concerns regarding these Terms and Services, please contact SagTech.  Group at:
                            </p>
                            <p className="text-gray-700">
                                Email: support@itsaggroup.com
                            </p>
                            <p className="text-gray-700">
                                Phone: +91 08277239451
                            </p>
                            <p className="text-gray-700">
                                Address: Mangaluru, Karnataka, India
                            </p>
                        </div>
                    </div>
                    <Footer />
                </>
            )}
        </div>
    );
};

export default Page;
