"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { createPortal } from "react-dom";
import ProjectTechStack from "./ProjectTechStack";
import { FaGithub, FaLink, FaArrowLeft, FaArrowRight, FaImage, FaVideo } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useInView } from "react-intersection-observer";

type TProps = {
    title: string;
    description: string;
    logo: string;
    repoLink: string;
    technologies: {
        icon: React.ReactNode;
        name: string;
    }[];
    link: string;
    previewImages?: string[]; // Array of preview images
    previewVideos?: string[]; // Array of preview videos
};

type MediaItem = {
    src: string;
    type: 'image' | 'video';
};

// LazyVideo component for optimized video loading
const LazyVideo = ({ src, className }: { src: string; className?: string }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '50px 0px',
    });
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div ref={ref} className={className}>
            {inView && (
                <video
                    src={src}
                    className={`w-full h-full object-cover transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                    preload="none"
                    playsInline
                    onLoadedData={() => setIsLoaded(true)}
                />
            )}
        </div>
    );
};

export default function ProjectCard({
    title,
    description,
    logo,
    technologies,
    link,
    repoLink,
    previewImages = ["/Portfolio.png"], // Default placeholder
    previewVideos = [], // Default empty
}: TProps) {
    const [showModal, setShowModal] = useState(false);
    const [activeMediaIndex, setActiveMediaIndex] = useState(0);
    const [mounted, setMounted] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    // Combine images and videos into a single array for easier navigation
    const allMedia: MediaItem[] = [
        ...previewVideos.map(src => ({ src, type: 'video' as const })),
        ...previewImages.map(src => ({ src, type: 'image' as const }))
    ];
    
    // Only show up to 4 media items in the card preview
    const combinedPreviews = [...previewVideos, ...previewImages].slice(0, 4);
    const hasMorePreviews = allMedia.length > 4;
    const extraPreviewsCount = allMedia.length - 4;

    // Handle client-side mounting for the portal
    useEffect(() => {
        setMounted(true);
        
        // Prevent scrolling when modal is open
        if (showModal) {
            document.body.style.overflow = 'hidden';
        }
        
        return () => {
            document.body.style.overflow = '';
        };
    }, [showModal]);

    // Navigate between media with keyboard
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!showModal) return;
            
            if (e.key === 'Escape') {
                setShowModal(false);
            } else if (e.key === 'ArrowRight') {
                if (allMedia.length > 0) {
                    setActiveMediaIndex(prev => 
                        prev === allMedia.length - 1 ? 0 : prev + 1
                    );
                }
            } else if (e.key === 'ArrowLeft') {
                if (allMedia.length > 0) {
                    setActiveMediaIndex(prev => 
                        prev === 0 ? allMedia.length - 1 : prev - 1
                    );
                }
            }
        };
        
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [showModal, allMedia.length]);

    // Function to navigate to next/previous media
    const handleNext = () => {
        if (allMedia.length > 0) {
            setActiveMediaIndex(prev => prev === allMedia.length - 1 ? 0 : prev + 1);
        }
    };
    
    const handlePrev = () => {
        if (allMedia.length > 0) {
            setActiveMediaIndex(prev => prev === 0 ? allMedia.length - 1 : prev - 1);
        }
    };

    return (
        <div className="lg:hover:bg-[rgb(255,255,255,0.05)] pl-0 lg:pl-2 p-2 rounded-lg transition-all duration-300 group relative">
            {/* Title and logo */}
            <Link href={link} target="_blank"> 
                <div className="flex items-center gap-2 mb-3 -translate-x-1 lg:translate-x-0">
                    <Image src={logo} alt={title} width={32} height={32} />
                    <h2 className="text-slate-100 text-sm font-bold group-hover:text-orange-500 transition-all duration-300">
                        {title}
                    </h2>
                </div>
            </Link>

            {/* Description */}
            <p className="text-slate-350 text-xs lg:text-sm lg:px-2 mb-3">
                {description}
            </p>

            {/* Preview media gallery */}
            {combinedPreviews.length > 0 && (
                <div className="grid grid-cols-4 gap-2 mb-3">
                    {combinedPreviews.map((media, index) => {
                        const isVideoPreview = media.endsWith('.mp4') || media.endsWith('.webm') || media.endsWith('.mov');
                        const mediaIndex = allMedia.findIndex(item => item.src === media);
                        
                        return (
                            <div 
                                key={index}
                                className="relative aspect-video rounded-md overflow-hidden cursor-pointer border border-violet-500/20 hover:border-violet-500/50 transition-all"
                                onClick={() => {
                                    setActiveMediaIndex(mediaIndex);
                                    setShowModal(true);
                                }}
                            >
                                {isVideoPreview ? (
                                    <>
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/60 z-10">
                                            <FaVideo className="text-violet-400 text-2xl" />
                                        </div>
                                        {/* Use the first image as thumbnail for videos */}
                                        <Image 
                                            src={previewImages[0]} 
                                            alt={`${title} preview thumbnail`} 
                                            fill 
                                            className="object-cover"
                                        />
                                    </>
                                ) : (
                                    <Image 
                                        src={media} 
                                        alt={`${title} preview ${index + 1}`} 
                                        fill 
                                        className="object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                )}
                                
                                {/* Show "+X more" overlay on the last visible preview if there are more */}
                                {hasMorePreviews && index === combinedPreviews.length - 1 && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/70">
                                        <span className="text-white text-sm font-medium">+{extraPreviewsCount} more</span>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            )}

            {/* Links */}
            <div className="my-4 space-y-1">
                <Link
                    href={link}
                    target="_blank"
                    className="text-slate-350 !text-[11px] lg:text-sm lg:px-2 block hover:text-pink-500 transition-all duration-300"
                >
                    <FaLink
                        size={16}
                        className="inline-block mr-2 text-violet-500"
                    />
                    {link.split("://")[1]}
                </Link>
                {repoLink && (
                    <Link
                        href={repoLink}
                        target="_blank"
                        className="text-slate-350 !text-[11px] lg:text-sm lg:px-2 block hover:text-pink-500 transition-all duration-300"
                    >
                        <FaGithub
                            size={16}
                            className="inline-block mr-2 text-violet-500"
                        />
                        {repoLink.split("://")[1]}
                    </Link>
                )}
            </div>

            {/* Tech stack */}
            <ProjectTechStack technologies={technologies} />

            {/* View Project button */}
            {allMedia.length > 0 && (
                <button 
                    onClick={() => {
                        setActiveMediaIndex(0);
                        setShowModal(true);
                    }}
                    className="w-full mt-3 py-2 text-xs font-medium text-white bg-violet-600/70 hover:bg-violet-700 rounded-md transition-colors"
                >
                    View Project
                </button>
            )}

            {/* Full-screen modal - Using portal to break out of layout constraints */}
            {mounted && showModal && createPortal(
                <div 
                    className="fixed inset-0 w-screen h-screen bg-black/95 z-[1000] flex items-center justify-center p-4 sm:p-8 md:p-12"
                    onClick={(e) => {
                        if (e.target === e.currentTarget) {
                            setShowModal(false);
                        }
                    }}
                >
                    <div className="bg-[#111]/90 backdrop-blur-md border border-violet-500/20 rounded-xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col">
                        {/* Modal header */}
                        <header className="flex items-center justify-between px-4 py-3 border-b border-violet-500/20 bg-black/60">
                            <div className="flex items-center gap-2">
                                <Image src={logo} alt={title} width={28} height={28} className="rounded" />
                                <h3 className="text-base font-medium text-slate-100">{title}</h3>
                            </div>
                            
                            <button 
                                className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-white hover:bg-violet-600/20 rounded-full transition-colors"
                                onClick={() => setShowModal(false)}
                                aria-label="Close"
                            >
                                <IoClose size={20} />
                            </button>
                        </header>
                        
                        {/* Content area with scrolling */}
                        <div className="flex-1 overflow-y-auto">
                            {/* Media display with navigation */}
                            <div className="relative h-[50vh] flex items-center justify-center px-2">
                                {allMedia.length > 0 ? (
                                    <div className="relative h-full max-w-full aspect-video mx-auto">
                                        {allMedia[activeMediaIndex]?.type === 'image' ? (
                                            <Image 
                                                src={allMedia[activeMediaIndex].src}
                                                alt={`${title} preview ${activeMediaIndex + 1}`}
                                                fill
                                                className="object-contain"
                                                quality={100}
                                                priority
                                            />
                                        ) : (
                                            <video 
                                                ref={videoRef}
                                                src={allMedia[activeMediaIndex].src}
                                                className="w-full h-full object-contain"
                                                controls
                                                autoPlay
                                                loop
                                                preload="auto" // Only preload when modal is open
                                            />
                                        )}
                                    </div>
                                ) : (
                                    <div className="flex items-center justify-center text-slate-500">
                                        <p>No media available</p>
                                    </div>
                                )}
                                
                                {/* Media navigation controls */}
                                {allMedia.length > 1 && (
                                    <>
                                        <button 
                                            onClick={handlePrev}
                                            className="absolute left-2 p-2 rounded-full bg-black/50 text-slate-300 hover:bg-violet-600/70 transition-colors"
                                            aria-label="Previous image"
                                        >
                                            <FaArrowLeft size={14} />
                                        </button>
                                        <button 
                                            onClick={handleNext}
                                            className="absolute right-2 p-2 rounded-full bg-black/50 text-slate-300 hover:bg-violet-600/70 transition-colors"
                                            aria-label="Next image"
                                        >
                                            <FaArrowRight size={14} />
                                        </button>
                                    </>
                                )}
                            </div>
                            
                            {/* Thumbnails and details */}
                            <div className="px-4 py-4">
                                {/* Thumbnails */}
                                {allMedia.length > 1 && (
                                    <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-thin scrollbar-thumb-violet-500/50 scrollbar-track-black/20">
                                        {allMedia.map((media, index) => (
                                            <div 
                                                key={index}
                                                className={`
                                                    relative min-w-[100px] h-[60px] rounded-md overflow-hidden cursor-pointer flex-shrink-0
                                                    ${activeMediaIndex === index ? 'ring-2 ring-violet-500 scale-105' : 'opacity-60 hover:opacity-100'}
                                                    transition-all duration-200
                                                `}
                                                onClick={() => setActiveMediaIndex(index)}
                                            >
                                                {media.type === 'image' ? (
                                                    <Image 
                                                        src={media.src} 
                                                        alt={`Thumbnail ${index + 1}`} 
                                                        fill 
                                                        className="object-cover"
                                                    />
                                                ) : (
                                                    <div className="relative w-full h-full">
                                                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 z-10">
                                                            <FaVideo className="text-violet-400" />
                                                        </div>
                                                        <LazyVideo 
                                                            src={media.src}
                                                            className="absolute inset-0 w-full h-full"
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                                
                                {/* Project details */}
                                <div className="mt-5 grid md:grid-cols-2 gap-5">
                                    {/* Project description */}
                                    <div className="bg-black/30 p-4 rounded-lg">
                                        <h4 className="text-xs uppercase text-white font-semibold mb-2">About this project</h4>
                                        <p className="text-slate-350 text-sm">{description}</p>
                                    </div>
                                    
                                    {/* Project details */}
                                    <div className="bg-black/30 p-4 rounded-lg flex flex-col">
                                        <h4 className="text-xs uppercase text-white font-semibold mb-2">Project details</h4>
                                        
                                        {/* Links */}
                                        <div className="mb-4 space-y-2">
                                            <div className="flex items-center gap-2">
                                                <FaLink className="text-violet-500" size={14} /> 
                                                <Link 
                                                    href={link} 
                                                    target="_blank" 
                                                    className="text-slate-350 text-xs hover:text-pink-500 transition-colors"
                                                >
                                                    {link.split("://")[1]}
                                                </Link>
                                            </div>
                                            
                                            {repoLink && (
                                                <div className="flex items-center gap-2">
                                                    <FaGithub className="text-violet-500" size={14} /> 
                                                    <Link 
                                                        href={repoLink} 
                                                        target="_blank" 
                                                        className="text-slate-350 text-xs hover:text-pink-500 transition-colors"
                                                    >
                                                        {repoLink.split("://")[1]}
                                                    </Link>
                                                </div>
                                            )}
                                        </div>
                                        
                                        {/* Tech stack */}
                                        <h4 className="text-xs uppercase text-white font-semibold mb-2">Built with</h4>
                                        <div className="flex flex-wrap gap-1.5 mb-4">
                                            {technologies.map((tech, i) => (
                                                <div 
                                                    key={i} 
                                                    className="flex items-center gap-1 bg-black/50 px-2 py-1 rounded text-slate-350"
                                                >
                                                    <span className="text-base">{tech.icon}</span>
                                                    <span className="text-xs">{tech.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                        
                                        {/* Visit buttons */}
                                        <div className="mt-auto pt-2 flex gap-2">
                                            <Link 
                                                href={link} 
                                                target="_blank" 
                                                className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-violet-600/80 hover:bg-violet-700 text-white rounded transition-colors text-xs"
                                            >
                                                <FaLink size={12} />
                                                Visit Website
                                            </Link>
                                            {repoLink && (
                                                <Link 
                                                    href={repoLink} 
                                                    target="_blank" 
                                                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-[#333]/50 hover:bg-[#333] text-white rounded transition-colors text-xs"
                                                >
                                                    <FaGithub size={12} />
                                                    View Code
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </div>
    );
}
