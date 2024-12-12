"use client";
import React, { useEffect, useState, useCallback, useMemo } from "react";
import bgImages from './static/images/bg.png';
import Navigation from "./helpers/navigation";
import OurExperties from "./helpers/ourexperties";
import AboutUs from "./helpers/aboutus";
import UpComing from "./helpers/upcoming";
import BlogPage from "./page/blog";
import FaqPage from "./helpers/faq"
import IamgeLayout from "./page/Imagelayout";
import Image from "next/image";
import Footer from "./helpers/footer";
import { FaInstagram, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import clsx from 'clsx';
import { useRouter } from "next/navigation"; // Import useRouter
import Loader from "./hooks/Loader";
import dotenv from 'dotenv';
dotenv.config();

const SectionNavigation = ({ sectionIds, activeSection, onClick }) => {
  return (
    <div className="fixed right-1 sm:hidden top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-6 z-50 md:block sm:block">
      <div className="p-2 rounded-full bg-opacity-65">
        {sectionIds.map((_, index) => (
          <div
            key={index}
            className={clsx(
              "relative md:w-3 md:h-3 w-2 my-2 h-2 rounded-full cursor-pointer transition-all duration-500 ease-out",
              activeSection === index ? "bg-gradient-to-r from-indigo-500 via-blue-500 to-teal-400 scale-100 shadow-lg" : "bg-gray-400"
            )}
            onClick={() => onClick(index)}
          >
            {activeSection === index && (
              <div className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-teal-400 opacity-50 animate-ping" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-between items-center mr-4">
      {/* Left Section: Animated Email Links */}
      <div
        className="overflow-hidden w-[250px] sm:w-[640px] lg:w-[1200px]"
      >
        <div
          className="flex space-x-4"
          style={{
            animation: "slideEmails 10s linear infinite",
            whiteSpace: "nowrap",
          }}
        >
          <a
            href="mailto:support@sagtechglobal.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 transition"
          >
            support@sagtechglobal.com
          </a>
          <a
            href="mailto:info@sagtechglobal.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 transition"
          >
            info@sagtechglobal.com
          </a>
          <a
            href="mailto:contact@sagtechglobal.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 transition"
          >
            contact@sagtechglobal.com
          </a>
        </div>
      </div>

      {/* Right Section: Social Media Icons */}
      <div className="flex space-x-4 border-l border-gray-600 pl-4">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram
            className="text-white hover:text-gray-400 transition"
            size={20}
          />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin
            className="text-white hover:text-gray-400 transition"
            size={20}
          />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook
            className="text-white hover:text-gray-400 transition"
            size={20}
          />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter
            className="text-white hover:text-gray-400 transition"
            size={20}
          />
        </a>
      </div>

      {/* Inline Styles for Animation */}
      <style jsx>{`
        @keyframes slideEmails {
          0% {
            transform: translateX(100%);
          }
          50% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

const PageWithDots = () => {
  const [activeSection, setActiveSection] = useState(0);

  // Use useMemo to memoize these arrays and avoid unnecessary re-renders
  const sectionIds = useMemo(() => ["home", "OurExperties", "AboutUs", "UpComing", "BlogPage"], []);
  const textLines = useMemo(() => ['Pioneering IT Solutions', 'For a', 'Digital Future'], []);

  const [animatedLines, setAnimatedLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const router = useRouter(); // Initialize useRouter

  const handleScroll = useCallback(() => {
    sectionIds.forEach((sectionId, index) => {
      const section = document.getElementById(sectionId);
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= window.innerHeight / 2 && sectionTop >= 0) {
          setActiveSection(index);
        }
      }
    });
  }, [sectionIds]);

  useEffect(() => {
    if (currentLineIndex < textLines.length) {
      const currentLine = textLines[currentLineIndex];
      const words = currentLine.split(' ');

      // Animate words one by one
      words.forEach((word, index) => {
        setTimeout(() => {
          setAnimatedLines((prev) => {
            const newLine = [...prev];
            if (!newLine[currentLineIndex]) newLine[currentLineIndex] = []; // Ensure the array exists
            newLine[currentLineIndex][index] = word; // Add word to current line
            return newLine;
          });
        }, index * 400); // Change the timing as needed
      });

      // Move to the next line after all words are animated
      setTimeout(() => {
        setCurrentLineIndex((prev) => prev + 1);
      }, words.length * 400 + 1000); // Extra time before the next line
    }
  }, [currentLineIndex, textLines]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const navigateToSection = (index) => {
    const section = document.getElementById(sectionIds[index]);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(index); // Update active section
    }
  };

  // Navigate to the login page when the "Join" button is clicked
  const handleJoinClick = () => {
    router.push("/auth/client/login"); // Adjust the path to your login page
  };

  const [loading, setLoading] = useState(true); // Initialize loading state

  // Show the loader for 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Stop loader after 3 seconds
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="relative">
      {loading ? (
        <Loader /> // Show loader while loading
      ) : (
        <>
          <div className="relative">
            {/* Header section */}
            <div className="flex w-full bg-gray-600 h-10 items-center justify-center px-4 md:justify-between lg:justify-between md:flex hidden sm:hidden">
              <div className="flex-grow"></div>
              <SocialMediaIcons />
              <button
                className="border border-white text-white font-bold bg-transparent px-4 rounded-full hover:bg-white hover:text-gray-600 transition"
                onClick={handleJoinClick} // Add onClick handler
              >
                Join
              </button>
            </div>

            <Navigation />
            <div id="home" className="relative w-full h-[88vh] overflow-hidden">
              <Image
                src={bgImages}
                alt="Background Image"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                quality={100}
                className="w-full h-full"
              />
              <div className="absolute inset-0 flex flex-col justify-start items-start mt-36 pl-4 md:pl-10">
                {textLines.map((line, lineIndex) => (
                  <h1
                    key={lineIndex}
                    className={clsx(
                      "md:text-left md:text-5xl text-3xl lg:text-6xl text-center font-normal md:font-normal lg:mt-4 md:mt-3 text-black mb-2 text-shadow",
                      currentLineIndex === lineIndex ? 'fade-in' : ''
                    )}
                  >
                    <div className="flex flex-wrap">
                      {line.split(' ').map((word, wordIndex) => (
                        <span
                          key={wordIndex}
                          className={clsx(
                            'word uppercase',
                            animatedLines[lineIndex] && animatedLines[lineIndex][wordIndex] ? 'fade-in' : ''
                          )}
                          style={{ animationDelay: `${wordIndex * 300}ms`, marginRight: '18px' }}
                        >
                          {word}
                        </span>
                      ))}
                    </div>
                  </h1>
                ))}
              </div>
            </div>
            <OurExperties />
            <AboutUs />
            {/* <ClientPage /> */}
            <IamgeLayout />
            <UpComing />
            <BlogPage />
            <FaqPage />
            <Footer />
            <SectionNavigation sectionIds={sectionIds} activeSection={activeSection} onClick={navigateToSection} />
          </div>
        </>
      )}
    </div>
  );
};

export default PageWithDots;
