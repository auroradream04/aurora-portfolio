"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { slideInFromLeft } from "../utils/motion";
import MotionTag from "./MotionTag";

type TProps = {
    taglines: string[];
    className?: string;
};

// Separate component for the typing animation
function TypingAnimation({ taglines, className }: TProps) {
    const typedRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (typedRef.current) {
            const typed = new Typed(typedRef.current, {
                strings: taglines,
                typeSpeed: 18,
                backSpeed: 9,
                loop: true,
                startDelay: 100,
            });

            return () => {
                typed.destroy();
            };
        }
    }, [taglines]);

    return (
        <div className={className}>
            <span ref={typedRef}>{taglines[0]}</span>
        </div>
    );
}

export default function DynamicTagline({ taglines, className }: TProps) {
    return (
        <MotionTag
            tag="div"
            variants={slideInFromLeft(0.8)}
            initial="hidden"
            animate="visible"
            className="w-full flex justify-center lg:justify-start"
        >
            <TypingAnimation taglines={taglines} className={className} />
        </MotionTag>
    );
}
