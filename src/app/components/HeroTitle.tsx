"use client";

import { slideInFromLeft } from "../utils/motion";
import Image from "next/image";
import MotionTag from "./MotionTag";
import { useIsMobile } from "../hooks/useIsMobile";

export default function HeroTitle() {
    const isMobile = useIsMobile();

    return (
        <div>
            <MotionTag
                tag="div"
                variants={slideInFromLeft(0.5)}
                initial={isMobile ? "visible" : "hidden"}
                animate="visible"
                className="text-lg sm:text-xl md:text-2xl font-medium flex items-center w-full justify-center lg:justify-start"
            >
                <Image
                    src="/logox.png"
                    alt="Alvin Chang Portfolio Logo"
                    className="w-7 h-7 mr-1 rounded-md"
                    width={28}
                    height={28}
                />
                <h1>Hey there, I'm Alvin! 👋</h1>
            </MotionTag>
            <MotionTag
                tag="h1"
                variants={slideInFromLeft(0.6)}
                initial={isMobile ? "visible" : "hidden"}
                animate="visible"
                className="text-4xl sm:text-5xl lg:text-[2.75rem] xl:text-5xl 1640:text-[3.25rem] font-bold text-center lg:text-start"
            >
                Delivering
                <span className="gradient-accent"> the best </span>
            </MotionTag>
            <MotionTag
                tag="h1"
                variants={slideInFromLeft(0.7)}
                initial={isMobile ? "visible" : "hidden"}
                animate="visible"
                className="text-4xl sm:text-5xl lg:text-[2.75rem] xl:text-5xl 1640:text-[3.25rem] font-bold text-center lg:text-start mb-2"
            >
                in design and code.
            </MotionTag>
        </div>
    );
}
