import { fetchBlogs } from "../utils/fetchWordpress";
import BlogList from "../components/BlogList";
import BlogHeader from "../components/BlogHeader";
import { Metadata } from "next";
import Footer from "../components/Footer";
import SocialIcons from "../components/SocialIcons";

export const metadata: Metadata = {
    title: "Blogs - Alvin Chang",
    description: "Alvin Chang's Blog, fragments of my imagination",
    keywords: "Alvin Chang, blog, nextjs, react, javascript, typescript, web development, programming",
    alternates: {
        canonical: "https://alvinchang.dev/blogs",
    },
    openGraph: {
        title: "Blogs - Alvin Chang",
        description: "Alvin Chang's Blog, fragments of my imagination",
        url: "https://alvinchang.dev/blogs",
        type: "website",
        images: [
            {
                url: "/horizontal-logo.png",
                width: 1100,
                height: 300,
                alt: "Alvin Chang Portfolio Logo",
            },
        ],
    }
}

export default async function Blogs() {
    const blogs = await fetchBlogs();

    return (
        <div className="w-full flex justify-center">
            <main className="w-full min-h-screen max-w-[800px] p-2">
                <BlogHeader/>
                <div className="p-2">
                    <h2 className="text-sm font-bold">BLOGS</h2>
                    <p className="text-xs text-slate-350 mb-0">
                        Fragments of my imagination
                    </p>
                </div>
                {blogs ? <BlogList blogs={blogs} /> : <div className="text-center text-xs w-full mt-20">No blogs found, try refreshing the page or check back later.</div>}
                <Footer noAnimate/>
                <SocialIcons noAnimate/>
            </main>
        </div>
    );
}
