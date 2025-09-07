"use client";

import React, { useState, useEffect } from 'react';

const ReadingProgressBar = () => {
    const [width, setWidth] = useState(0);

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (scrollTop / docHeight) * 100;
        setWidth(scrolled);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            className="fixed top-0 left-0 z-50 h-1 bg-violet-500 transition-all duration-75 ease-out"
            style={{ width: `${width}%` }}
        />
    );
};

export default ReadingProgressBar; 