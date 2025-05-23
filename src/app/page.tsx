import HeroTitle from "./components/HeroTitle";
import DynamicTagline from "./components/DynamicTagline";
import TitleList from "./components/TitleList";
import SocialIcons from "./components/SocialIcons";
import AboutMe from "./components/AboutMe";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import { siteConfig } from "./config";
import TableOfContents from "./components/TableOfContents";
import HireMeButton from "./components/HireMeButton";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import { fetchBlogs } from "./utils/fetchWordpress";
import HomepageBlogs from "./components/HomepageBlogs";
import Technologies from "./components/Technologies";
import OpenToWorkBanner from "./components/OpenToWorkBanner";

export default async function Home() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: siteConfig.name,
        url: siteConfig.url,
        keywords: siteConfig.keywords,
    };
    const blogs = await fetchBlogs();

    return (
        <main className="w-full min-h-screen px-4 sm:px-20 xl:px-40 2xl:px-80">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <section className="w-full flex flex-wrap">
                <header className="w-full lg:h-[100dvh] lg:sticky top-0 lg:w-1/2 pt-40 lg:pb-40 flex flex-col lg:justify-between">
                    <div>
                        <HeroTitle />
                        <TitleList titles={siteConfig.titles} />
                        <DynamicTagline
                            taglines={siteConfig.taglines}
                            className="pl-1 text-center lg:text-start text-xs lg:text-sm mt-4 min-h-20 max-w-[500px] text-slate-350"
                        />
                        <TableOfContents />
                        <HireMeButton isSticky />
                    </div>
                    <div>
                        <SocialIcons isSticky />
                        <Footer isSticky />
                    </div>
                </header>
                <main className="w-full lg:w-1/2 px-4 sm:px-0 pt-20 lg:pt-40 text-slate-350 text-sm flex flex-wrap justify-center lg:block lg:mb-40">
                    <AboutMe />
                    <Experiences />
                    <Projects />
                    <Technologies />
                    <HomepageBlogs blogs={blogs} />
                    <ContactForm />
                    <Footer />
                    <SocialIcons />
                    <OpenToWorkBanner />
                </main>
            </section>
        </main>
    );
}
