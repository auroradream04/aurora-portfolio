"use client";

import Link from "next/link";
import { siteConfig } from "../config";
import { motion } from "framer-motion";
import { slideInFromTop, slideInFromLeft } from "../utils/motion";

type TProps = {
    isSticky?: boolean;
    noAnimate?: boolean
};

export default function Footer({ isSticky, noAnimate }: TProps) {
    return (
        <motion.footer
            variants={!isSticky ? slideInFromTop(1) : slideInFromLeft(1)}
            initial={noAnimate ? "visible" : "hidden"}
            animate="visible"
            className={`text-center lg:text-left text-slate-350 text-[9px] w-full mt-8 ${noAnimate && '!block lg:!block p-2 lg:!text-center'} ${
                isSticky ? "hidden lg:block" : "lg:hidden"
            }`}
        >
            <p className="mb-0 leading-none">
                Made with ❤️ by{" "}
                <Link
                    className="underline uppercase font-bold text-blue-400 hover:text-pink-400 transition-colors duration-300"
                    href={
                        siteConfig.socialLinks.find((link) =>
                            link.url.includes("github")
                        )?.url ?? "/"
                    }
                >
                    {siteConfig.alias}
                </Link>
            </p>
            <p className="mb-0">
                &copy; 2024 {siteConfig.title}. All rights
                reserved.
            </p>
        </motion.footer>
    );
}
