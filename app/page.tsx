import Image from "next/image";
import Hero from "@/components/sections/Hero";
import MarqueeBar from "@/components/sections/Marquee";
import AboutPreview from "@/components/sections/AboutPreview";
import Skills from "@/components/sections/Skills";
import Services from "@/components/sections/Services";
import Stats from "@/components/sections/Stats";
import WorkGrid from "@/components/sections/WorkGrid";
import BlogPreview from "@/components/sections/BlogPreview";

export default function Home() {
  return (
    <div>
      <Hero />
      <MarqueeBar />
      <AboutPreview />
      <Skills/>
      <Services/>
      <Stats/>
      <WorkGrid/>
      <BlogPreview/>
    </div>
  );
}
