"use client";

import { motion, useInView, HTMLMotionProps } from "framer-motion";
import { useRef } from "react";
import { useIsMobile } from "../hooks/useIsMobile";

type MotionTags = keyof typeof motion;

interface TProps extends HTMLMotionProps<any> {
    tag: MotionTags;
    children: React.ReactNode;
    variants: any;
    initial: any;
    animate: any;
    className?: string;
    once?: boolean;
    transition?: any;
    style?: any;
}

export default function MotionTag({
    tag,
    children,
    variants,
    initial,
    animate,
    className,
    once = true,
    transition = { duration: 0.3 },
    style,
    ...props
}: TProps) {
    const isMobile = useIsMobile();
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once,
        margin: "-150px",
    });

    // On mobile, return the appropriate HTML element without animations
    if (isMobile) {
        const staticProps = { className, style };
        switch (tag) {
            case "h1":
                return <h1 {...staticProps}>{children}</h1>;
            case "h2":
                return <h2 {...staticProps}>{children}</h2>;
            case "section":
                return <section {...staticProps}>{children}</section>;
            default:
                return <div {...staticProps}>{children}</div>;
        }
    }

    // Desktop: Create the animated component based on tag type
    switch (tag) {
        case "h1":
            return (
                <motion.h1
                    ref={ref}
                    variants={variants}
                    initial={initial}
                    animate={isInView ? animate : initial}
                    transition={transition}
                    className={className}
                    {...props}
                >
                    {children}
                </motion.h1>
            );
        case "h2":
            return (
                <motion.h2
                    ref={ref}
                    variants={variants}
                    initial={initial}
                    animate={isInView ? animate : initial}
                    transition={transition}
                    className={className}
                    {...props}
                >
                    {children}
                </motion.h2>
            );
        case "section":
            return (
                <motion.section
                    ref={ref}
                    variants={variants}
                    initial={initial}
                    animate={isInView ? animate : initial}
                    transition={transition}
                    className={className}
                    {...props}
                >
                    {children}
                </motion.section>
            );
        default:
            return (
                <motion.div
                    ref={ref}
                    variants={variants}
                    initial={initial}
                    animate={isInView ? animate : initial}
                    transition={transition}
                    className={className}
                    {...props}
                >
                    {children}
                </motion.div>
            );
    }
}

// ref={ref}
// variants={variants}
// initial={initial}
// animate={isInView ? animate : initial}
// transition={transition}
// className={className}
// viewport={{ once }}
