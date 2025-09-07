import BlogContent from "@/app/components/BlogContent";
import BlogHeader from "@/app/components/BlogHeader";
import { fetchBlog } from "@/app/utils/fetchWordpress";
import { createHighlighter } from "shiki";
import { JSDOM } from "jsdom";
import { Metadata } from "next";
import { stripHtmlAndDecode } from "@/app/utils/helpers";
import Footer from "@/app/components/Footer";
import SocialIcons from "@/app/components/SocialIcons";
import OpenToWorkBanner from "@/app/components/OpenToWorkBanner";

type TProps = {
    params: Promise<{
        slug: string;
    }>;
};

export async function generateMetadata(props: TProps): Promise<Metadata> {
    const params = await props.params;
    const blog = await fetchBlog(params.slug);

    const description = stripHtmlAndDecode(blog.excerpt.rendered);
    return {
        title: blog.title.rendered + " - Alvin Chang",
        description,
        keywords:
            blog.title.rendered +
            ", " +
            blog._embedded["wp:term"][1].map((tag: any) => tag.name).join(", "),
        alternates: {
            canonical: `https://alvinchang.dev/blogs/${blog.slug}`,
        },
        openGraph: {
            title: blog.title.rendered + " - Alvin Chang",
            description,
            url: `https://alvinchang.dev/blogs/${blog.slug}`,
            type: "article",
            siteName: "Alvin Chang",
            images: [
                {
                    url: "/horizontal-logo.png",
                    width: 1100,
                    height: 300,
                    alt: "Alvin Chang Portfolio Logo",
                },
            ],
        },
    };
}

export default async function BlogPage(props: TProps) {
    const params = await props.params;
    const blog = await fetchBlog(params.slug);

    // Function to highlight code blocks
    const highlightCodeBlocks = async (htmlContent: string) => {
        const highlighter = await createHighlighter({
            langs: ["javascript"],
            themes: ["ayu-dark"],
        });
        const dom = new JSDOM(htmlContent);
        const document = dom.window.document;

        const blocks = Array.from(document.querySelectorAll("pre code"));
        await Promise.all(
            blocks.map(async (block: any) => {
                block.innerHTML = block.innerHTML.replaceAll("<br>", "\n");
                const content = block.textContent;

                const highlighted = await highlighter.codeToHtml(
                    content || "",
                    {
                        lang: "javascript",
                        theme: "ayu-dark",
                    }
                );
                block.parentElement.innerHTML = highlighted;
            })
        );

        // Dispose of the highlighter
        highlighter.dispose();

        return document.body.innerHTML;
    };

    // Preprocess the content to highlight code blocks
    const highlightedContent = await highlightCodeBlocks(blog.content.rendered);

    return (
        <div className="w-full flex justify-center">
            <main className="w-full min-h-screen max-w-[800px] p-2">
                <BlogHeader />
                {blog && (
                    <BlogContent blog={blog} content={highlightedContent} />
                )}
                <Footer noAnimate />
                <SocialIcons noAnimate />
                <OpenToWorkBanner />
            </main>
        </div>
    );
}
