import { FaGithub, FaFacebook } from "react-icons/fa";
import { FaLinkedin, FaSquareXTwitter, FaDiscord, FaThreads } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { SiBluesky } from "react-icons/si";
import {
    RiNextjsFill,
    RiTailwindCssFill,
    RiOpenaiFill,
    RiWordpressFill,
} from "react-icons/ri";
import {
    SiTypescript,
    SiShadcnui,
    SiPrisma,
    SiWoocommerce,
    SiReact,
    SiSupabase,
    SiExpress,
    SiPuppeteer,
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiNodedotjs,
    SiPhp,
    SiMysql,
    SiMongodb,
    SiGraphql,
    SiFramer,
    SiThreedotjs,
    SiElectron,
    SiDocker,
    SiDrizzle,
    SiMui,
    SiGit,
} from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { TbApi, TbBrandReactNative } from "react-icons/tb";
import { DiRedis } from "react-icons/di";


export const siteConfig = {
    name: "Alvin Chang",
    title: "Alvin Chang | Full-Stack Developer",
    email: "alvin@studioaurora.io",
    alias: "Aurora",
    description:
        "Alvin Chang is a web developer who builds scalable, user-centric applications using Next.js, WordPress, and other frameworks. With a focus on performance, accessibility, and clean code, Alvin creates digital solutions that are both functional and aesthetically pleasing.",
    keywords:
        "Alvin Chang, full-stack developer, web development, Next.js, WordPress, React, Node.js, scalable applications, clean code",
    url: "https://alvinchang.dev",
    taglines: [
        "🚀 Coding Simplicity, Crafting Solutions: Bringing Ideas to Life, One Line at a Time. ✨ Let's transform challenges into digital possibilities with precision and creativity!",
        "🎨 Where Code Meets Creativity: Building Digital Experiences that Matter. 🌐 From intuitive interfaces to powerful backend systems, I create solutions that engage and inspire.",
        "💡 Innovating Beyond the Screen: Crafting Seamless Digital Journeys. 🌟 From concept to completion, let's build the future, one pixel and one line of code at a time.",
    ],
    titles: ["Full-Stack Developer", "NextJS Developer", "Wordpress Developer"],
    socialLinks: [
        {
            icon: <FaGithub />,
            url: "https://github.com/auroradream04",
        },
        {
            icon: <FaLinkedin />,
            url: "https://www.linkedin.com/in/auroradream04/",
        },
        {
            icon: <FaSquareXTwitter />,
            url: "https://x.com/aurora_dream04",
        },
        {
            icon: <FaThreads />,
            url: "https://www.threads.com/@schrodinger0404",
        },
        {
            icon: <SiBluesky />,
            url: "https://bsky.app/profile/alvinchang.dev",
        },
        {
            icon: <FaDiscord />,
            url: "https://discord.gg/pwYGjDebkF",
        },
        {
            icon: <IoIosMail />,
            url: "mailto:alvin@studioaurora.io",
        },
    ],
    sections: {
        tableOfContents: [
            {
                id: "about-me",
                label: "ABOUT ME",
            },
            {
                id: "experiences",
                label: "EXPERIENCES",
            },
            {
                id: "projects",
                label: "PROJECTS",
            },
            {
                id: "technologies",
                label: "TECHNOLOGIES",
            },
            {
                id: "blogs",
                label: "BLOGS",
            },
            {
                id: "contact",
                label: "CONTACT",
            },
        ],
        aboutMe: `
            <p style="margin-bottom: 1rem;">
              Hi! I'm Alvin, a <strong>full-stack developer</strong> specializing in building <strong>responsive websites</strong>, engaging blogs, e-commerce solutions, and interactive streaming platforms. I focus on crafting <strong>clean and efficient code</strong>, from polished front-end designs to robust back-end systems.
            </p>
            <p style="margin-bottom: 1rem;">
              When I'm not developing web applications, you'll find me experimenting in the kitchen or exploring the latest tech trends. Let's connect to discuss your next <strong>web or API project</strong>!
            </p>
        `,
        experiences: [
            {
                company: "Freelance",
                position: "Full-stack Web Developer",
                duration: "2024 - Present",
                description:
                    "Built responsive web apps, e-commerce platforms, and custom API solutions primarily using Next.js, Tailwind CSS, and TypeScript. Managed entire development lifecycles from initial client consultation and strategic planning to development, deployment, and ongoing support. Focused heavily on delivering high-performance, SEO-friendly solutions with modern, intuitive user experiences, ensuring client satisfaction through proactive communication and timely project delivery.",
            },
            {
                company: "Altera Karna Business Corp.",
                position: "Software Engineer",
                duration: "2023 - 2024",
                description:
                    "Developed and maintained various dynamic websites such as streaming services, interactive landing pages, and content-driven news platforms utilizing Next.js, WordPress, and Express.js. Engineered robust APIs and automated internal processes with advanced web scraping tools, significantly enhancing operational efficiency. Additionally, designed and built desktop applications using Electron to streamline internal workflows and support team productivity.",
            },
        ],
        projects: [
            {
                title: "Alvin Chang | Portfolio Website",
                description:
                    "This is my portfolio website. I built it to showcase my projects and skills. It is a static site built with Next.js, Tailwind CSS, and Shadcn/UI. I used the following technologies to build it:",
                logo: "/projects/portfolio/portfolio-logo.webp",
                thumbnail: "/projects/portfolio/portfolio-thumbnail.webp",
                repoLink: "https://github.com/auroradream04/aurora-portfolio",
                technologies: [
                    {
                        icon: <RiNextjsFill className="text-[#FFF]" />,
                        name: "Next.js",
                    },
                    {
                        icon: <RiTailwindCssFill className="text-[#06B6D4]" />,
                        name: "Tailwind CSS",
                    },
                    {
                        icon: <SiShadcnui className="text-[#FFF]" />,
                        name: "Shadcn/UI",
                    },
                    {
                        icon: <SiTypescript className="text-[#3178C6]" />,
                        name: "TypeScript",
                    },
                ],
                link: "https://alvinchang.dev",
                previewImages: [
                    "/projects/portfolio/1.webp",
                    "/projects/portfolio/2.webp",
                    "/projects/portfolio/3.webp",
                    "/projects/portfolio/4.webp",
                    "/projects/portfolio/5.webp",
                    "/projects/portfolio/6.webp"
                ],
                previewVideos: [
                    "https://video-proxy-worker.alvs131313.workers.dev/portfolio-video-4k/output.m3u8"
                ]
            },
            {
                title: "Genzify AI",
                description:
                    "GenZify is an AI-powered tool I developed to transform everyday text into trendy Gen Z-style language. I managed both the front-end design and back-end development, integrating AI functionality for smooth and creative rephrasings. The platform delivers a fun, engaging experience, perfect for anyone looking to add a modern twist to their communication. This project highlights my skills in blending AI with user-centric design to create a playful, interactive web tool.",
                logo: "/projects/genz/genz-logo.webp",
                thumbnail: "/projects/genz/genz-thumbnail.webp",
                repoLink: "https://github.com/auroradream04/genzify-app",
                technologies: [
                    {
                        icon: <RiNextjsFill className="text-[#FFF]" />,
                        name: "Next.js",
                    },
                    {
                        icon: <RiOpenaiFill className="text-[#412991]" />,
                        name: "OpenAI API",
                    },
                    {
                        icon: <RiTailwindCssFill className="text-[#06B6D4]" />,
                        name: "Tailwind CSS",
                    },
                    {
                        icon: <SiTypescript className="text-[#3178C6]" />,
                        name: "TypeScript",
                    },
                    {
                        icon: <SiShadcnui className="text-[#FFF]" />,
                        name: "Shadcn/UI",
                    },
                ],
                link: "https://genzify-app-wine.vercel.app/",
                previewImages: [
                    "/projects/genz/1.webp",
                    "/projects/genz/2.webp",
                    "/projects/genz/3.webp",
                    "/projects/genz/4.webp",
                    "/projects/genz/5.webp"
                ],
                previewVideos: [
                    "https://video-proxy-worker.alvs131313.workers.dev/genz-video-4k/output.m3u8"
                ]
            },
            {
                title: "WhatAboutPets",
                description:
                    "WhatAboutPets is a comprehensive blog and e-commerce platform I built to provide valuable insights into pet care, health, and wellness. Alongside engaging articles, the site features an integrated WooCommerce store, offering a variety of pet-related products. I managed everything from designing the user-friendly interface to implementing SEO strategies and setting up the online shop. This project highlights my expertise in both content-driven sites and e-commerce solutions, creating a complete experience for pet lovers.",
                logo: "/projects/whataboutpets/whataboutpets-logo.webp",
                thumbnail: "/projects/whataboutpets/whataboutpets-thumbnail.webp",
                repoLink: "",
                technologies: [
                    {
                        icon: <RiNextjsFill className="text-[#FFF]" />,
                        name: "Next.js",
                    },
                    {
                        icon: <RiWordpressFill className="text-[#21759B]" />,
                        name: "WordPress",
                    },
                    {
                        icon: <SiTypescript className="text-[#3178C6]" />,
                        name: "TypeScript",
                    },
                    {
                        icon: <RiTailwindCssFill className="text-[#06B6D4]" />,
                        name: "Tailwind CSS",
                    },
                    {
                        icon: <SiShadcnui className="text-[#FFF]" />,
                        name: "Shadcn/UI",
                    },
                    {
                        icon: <GrGraphQl className="text-[#E10098]" />,
                        name: "GraphQL",
                    },
                    {
                        icon: <SiWoocommerce className="text-[#96588A]" />,
                        name: "Woocommerce",
                    },
                ],
                link: "https://whataboutpets.com",
                previewImages: [
                    "/projects/whataboutpets/1.webp",
                    "/projects/whataboutpets/2.webp",
                    "/projects/whataboutpets/3.webp",
                    "/projects/whataboutpets/4.webp",
                    "/projects/whataboutpets/5.webp",
                    "/projects/whataboutpets/6.webp",
                ],
                previewVideos: [
                    "https://video-proxy-worker.alvs131313.workers.dev/whataboutpets-video-4k/output.m3u8"
                ]
            },
            {
                title: "Plaiful - AI Agent Directory",
                description:
                    "Developed for a client, Plaiful is a comprehensive AI agent directory platform built on Next.js. This project involved significant customization of the OpenAlternative codebase to create a dedicated platform for discovering and comparing AI agents focused on the banking and credit union sector. I implemented advanced filtering, search capabilities, and built a modern, intuitive interface for users to easily find AI solutions tailored to their specific needs.",
                logo: "/projects/plaiful/plaiful-logo.webp",
                thumbnail: "/projects/plaiful/plaiful-thumbnail.webp",
                repoLink: "https://github.com/Plaifully/Plai",
                technologies: [
                    {
                        icon: <RiNextjsFill className="text-[#FFF]" />,
                        name: "Next.js",
                    },
                    {
                        icon: <SiTypescript className="text-[#3178C6]" />,
                        name: "TypeScript",
                    },
                    {
                        icon: <RiTailwindCssFill className="text-[#06B6D4]" />,
                        name: "Tailwind CSS",
                    },
                    {
                        icon: <SiPrisma className="text-[#2D3748]" />,
                        name: "Prisma",
                    },
                    {
                        icon: <SiSupabase className="text-[#0084d4]" />,
                        name: "Supabase",
                    },
                ],
                link: "https://plai-web.vercel.app/",
                previewImages: [
                    "/projects/plaiful/1.webp",
                    "/projects/plaiful/2.webp",
                    "/projects/plaiful/3.webp",
                    "/projects/plaiful/4.webp",
                    "/projects/plaiful/5.webp", 
                    "/projects/plaiful/6.webp" 
                ],
                previewVideos: [
                    "https://video-proxy-worker.alvs131313.workers.dev/plaiful-video-4k/output.m3u8"
                ]
            },
            {
                title: "Zambia Casino",
                description:
                    "Built for a client, Zambia Casino is a sleek landing page for an online casino targeting the Zambian market. I designed and developed a responsive, high-performance site that effectively showcases the casino's offerings, promotions, and games. The project emphasizes strong visual elements, fast loading times, and intuitive navigation to optimize user engagement and conversion rates in the competitive online gambling space.",
                logo: "/projects/zambia/zambia-logo.webp",
                thumbnail: "/projects/zambia/zambia-thumbnail.webp",
                repoLink: "",
                technologies: [
                    {
                        icon: <RiNextjsFill className="text-[#FFF]" />,
                        name: "Next.js",
                    },
                    {
                        icon: <SiTypescript className="text-[#3178C6]" />,
                        name: "TypeScript",
                    },
                    {
                        icon: <RiTailwindCssFill className="text-[#06B6D4]" />,
                        name: "Tailwind CSS",
                    },
                    {
                        icon: <SiFramer className="text-[#0055FF]" />,
                        name: "Framer Motion",
                    },
                    {
                        icon: <SiShadcnui className="text-[#FFF]" />,
                        name: "Shadcn/UI",
                    },
                ],
                link: "https://zambia-casino.vercel.app/",
                previewImages: [
                    "/projects/zambia/1.webp",
                    "/projects/zambia/2.webp",
                    "/projects/zambia/3.webp",
                    "/projects/zambia/4.webp",
                    "/projects/zambia/5.webp",
                    "/projects/zambia/6.webp",
                    "/projects/zambia/7.webp"
                ],
                previewVideos: [
                    "https://video-proxy-worker.alvs131313.workers.dev/zambia-video-4k/output.m3u8"
                ]
            },
        ],
        technologies: {
            main: [
                {
                    name: "Next.js",
                    icon: <RiNextjsFill className="text-[#FFF]" />,
                    description: "A React framework",
                },
                {
                    name: "React",
                    icon: <SiReact className="text-[#61DAFB]" />,
                    description: "A JavaScript UI library",
                },
                {
                    name: "Tailwind CSS",
                    icon: <RiTailwindCssFill className="text-[#06B6D4]" />,
                    description: "A CSS framework",
                },
                {
                    name: "TypeScript",
                    icon: <SiTypescript className="text-[#3178C6]" />,
                    description: "Typed Javascript",
                },
                {
                    name: "Git",
                    icon: <SiGit className="text-[#F05032]" />,
                    description: "A version control system",
                },
                {
                    name: "Prisma",
                    icon: <SiPrisma className="text-[#4a5b77]" />,
                    description: "An ORM for databases",
                },
                {
                    name: "WordPress",
                    icon: <RiWordpressFill className="text-[#21759B]" />,
                    description: "A CMS for websites",
                },
                {
                    name: "Express.js",
                    icon: <SiExpress className="text-[#FFF]" />, // ORIGINALLY BLACK
                    description: "A Node.js framework",
                },
                {
                    name: "Puppeteer",
                    icon: <SiPuppeteer className="text-[#7a56f1]" />,
                    description: "A library for browser automation",
                },
            ],
            other: [
                {
                    name: "HTML5",
                    icon: <SiHtml5 className="text-[#E34F26]" />,
                },
                {
                    name: "CSS",
                    icon: <SiCss3 className="text-[#009df7]" />,
                },
                {
                    name: "JavaScript",
                    icon: <SiJavascript className="text-[#F7DF1E]" />,
                },
                {
                    name: "NodeJS",
                    icon: <SiNodedotjs className="text-[#339933]" />,
                },
                {
                    name: "PHP",
                    icon: <SiPhp className="text-[#5d6dad]" />,
                },
                {
                    name: "MySQL",
                    icon: <SiMysql className="text-[#5798ca]" />,
                },
                {
                    name: "Supabase",
                    icon: <SiSupabase className="text-[#0084d4]" />,
                },
                {
                    name: "MongoDB",
                    icon: <SiMongodb className="text-[#47A248]" />,
                },
                {
                    name: "Redis",
                    icon: <DiRedis className="text-[#DC382D]" />,
                },
                {
                    name: "GraphQL",
                    icon: <SiGraphql className="text-[#E10098]" />,
                },
                {
                    name: "RESTful API",
                    icon: <TbApi className="text-[#FF5733]" />,
                },
                {
                    name: "Framer Motion",
                    icon: <SiFramer className="text-[#0055FF]" />,
                },
                {
                    name: "Three.js",
                    icon: <SiThreedotjs className="text-[#FFF]" />, // ORIGINALLY BLACK
                },
                {
                    name: "WooCommerce",
                    icon: <SiWoocommerce className="text-[#96588A]" />,
                },
                {
                    name: "React Native",
                    icon: <TbBrandReactNative className="text-[#61DAFB]" />,
                },
                {
                    name: "Electron",
                    icon: <SiElectron className="text-[#47848F]" />,
                },
                {
                    name: "Docker",
                    icon: <SiDocker className="text-[#2496ED]" />,
                },
                {
                    name: "Shadcn/UI",
                    icon: <SiShadcnui className="text-[#FFF]" />,
                },
                {
                    name: "Drizzle",
                    icon: <SiDrizzle className="text-[#00A7E1]" />,
                },
            ],
        },
    },
};
