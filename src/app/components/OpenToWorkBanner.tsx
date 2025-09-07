"use client";

import React, { useState, useEffect } from 'react';
import { FaBriefcase } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; // Assuming these icons are needed
import Link from 'next/link';
import { siteConfig } from "@/app/config";
import ReadingProgressBar from '@/app/components/ReadingProgressBar';

// You would likely pull this data from a config or context
const yourName = "Alvin Chang";
const yourTitle = "Full Stack Developer";
const expertiseTags = ["React", "Next.js", "TypeScript", "Node.js"];
const socialLinks = siteConfig.socialLinks;
const contactButtonText = "Get in touch";

const OpenToWorkBanner = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [hasScrolledSufficiently, setHasScrolledSufficiently] = useState(false);

    const scrollThreshold = 200; // Adjust this value as needed (in pixels)

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        if (scrollTop > scrollThreshold && !hasScrolledSufficiently) {
            setHasScrolledSufficiently(true);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        // Also check scroll position on mount in case the page is already scrolled down
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [hasScrolledSufficiently]); // Depend on hasScrolledSufficiently to re-run effect when threshold is met

    // Render null if not visible OR if scroll threshold hasn't been met yet
    if (!isVisible || !hasScrolledSufficiently) return null;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="fixed bottom-4 left-4 w-[calc(100vw_-_2rem)] bg-black/90 backdrop-blur-md border border-violet-500/20 rounded-lg shadow-lg p-4 z-50 sm:right-4 sm:left-auto sm:max-w-sm"
                >
                    <ReadingProgressBar />
                    <div className="pt-2">
                        <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-2">
                                <div className="p-2 bg-violet-500/20 rounded-full flex-shrink-0">
                                    <FaBriefcase className="text-violet-400" size={16} />
                                </div>
                                <div className="justify-center">
                                    <h3 className="text-sm font-bold text-slate-100">Let's Build Together</h3>
                                    <p className="text-xs text-slate-400">Available for projects & roles</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsVisible(false)}
                                className="text-slate-400 hover:text-white transition-colors"
                                aria-label="Close banner"
                            >
                                <IoClose size={20} />
                            </button>
                        </div>

                        <p className="text-sm text-slate-350 mb-3 md:block hidden">
                            Bringing your ideas to life with expertise in:
                        </p>

                        <div className="flex-wrap gap-2 mb-4 md:flex hidden">
                            {expertiseTags.map(tag => (
                                <span key={tag} className="px-3 py-1 bg-black/30 border border-violet-500/20 rounded-full text-xs text-slate-350">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex gap-2">
                                {siteConfig.socialLinks.map((link, index) => (
                                    <Link key={index} href={link.url === 'mailto:alvin@studioaurora.io' ? '/#contact' : link.url} target={link.url === 'mailto:alvin@studioaurora.io' ? '_self' : '_blank'} className="text-slate-400 hover:text-violet-500 transition-colors" aria-label="Social link">
                                        {link.icon}
                                    </Link>
                                ))}
                            </div>
                            <a href="/#contact">
                                <button className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white text-sm font-medium rounded-md transition-colors">
                                    Hire Me
                                </button>
                            </a>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default OpenToWorkBanner; 