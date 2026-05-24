"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "SEO Tools Platform",
    category: "SEO Tools Website",
    image: "/work1a.png",
    link: "https://seo-tools-xi.vercel.app/",
    desc: "Modern SEO tools platform built with performance-focused architecture and clean UX.",
  },
  {
    title: "Modern Ecommerce Website",
    category: "Ecommerce Development",
    image: "/work2a.png",
    link: "https://ecommerce-website-gamma-drab.vercel.app/",
    desc: "Responsive ecommerce experience focused on modern UI, speed, and usability.",
  },
  {
    title: "Business Listing Platform",
    category: "Directory Website",
    image: "/work3a.png",
    link: "https://business-listing-seven.vercel.app/",
    desc: "Scalable business listing platform with search-focused structure and modern UI.",
  },
  {
    title: "Manmohan Panda Portfolio",
    category: "Personal Branding Website",
    image: "/work4a.png",
    link: "https://manmohan-panda.vercel.app/",
    desc: "Minimal premium portfolio website designed for personal branding and authority.",
  },
  {
    title: "NPS International School",
    category: "School Website",
    image: "/work5a.png",
    link: "https://npsinternationalschool.in/",
    desc: "Modern educational institution website focused on clarity, accessibility, and performance.",
  },
];

const technologies = [
  "Next.js",
  "WordPress",
  "Tailwind CSS",
  "Framer Motion",
  "GA4",
  "Google Search Console",
  "Ahrefs",
  "SEMrush",
];

const process = [
  {
    title: "Research & Planning",
    desc: "Understanding goals, technical requirements, SEO structure, and scalable architecture.",
  },
  {
    title: "UI/UX & Architecture",
    desc: "Designing responsive layouts, modern interfaces, and SEO-first structure.",
  },
  {
    title: "Development & Optimization",
    desc: "Building fast, scalable websites with performance-focused implementation.",
  },
  {
    title: "Testing & Launch",
    desc: "Testing speed, responsiveness, SEO, and deployment for production readiness.",
  },
];

export default function WorkPage() {
  return (
    <main className="bg-[#0A0A0A] text-white overflow-hidden">

      {/* HERO */}
      <section className="px-6 md:px-10 pt-36 pb-24">
        <div className="max-w-[1280px] mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >

            {/* Label */}
            <p className="uppercase text-xs tracking-[0.25em] text-white/50 mb-6">
              Selected Work
            </p>

            {/* Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-[64px] font-bold leading-[0.98] tracking-[-0.04em] max-w-5xl">
              Selected projects built for real-world businesses.
            </h1>

            {/* Description */}
            <p className="mt-8 text-white/70 text-base md:text-lg leading-[1.9] max-w-3xl">
              A collection of modern websites, SEO-focused platforms,
              and scalable digital experiences designed with performance,
              usability, and search visibility in mind.
            </p>

            {/* CTA */}
            <div className="mt-10">
              <a href="#projects">
                <button className="bg-[#FF4D1C] text-white px-8 py-4 rounded-full uppercase tracking-wider text-sm font-semibold hover:opacity-90 transition-all duration-300 hover:scale-[1.02]">
                  View Projects
                </button>
              </a>
            </div>

          </motion.div>

        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="bg-[#EDEBE7] text-[#0A0A0A] px-6 md:px-10 py-24"
      >
        <div className="max-w-[1280px] mx-auto">

          {/* Heading */}
          <div className="mb-16">

            <p className="uppercase text-xs tracking-[0.25em] text-black/50 mb-5">
              Featured Projects
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-[1.08] tracking-[-0.03em] max-w-4xl">
              Real-world websites and digital experiences designed for performance and growth.
            </h2>

          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7">

            {projects.map((project, index) => (
              <motion.a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="group bg-white border border-black/5 rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
              >

                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">

                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition duration-700 group-hover:scale-110"
                  />

                </div>

                {/* Content */}
                <div className="p-7">

                  {/* Category */}
                  <p className="uppercase text-xs tracking-[0.2em] text-black/40">
                    {project.category}
                  </p>

                  {/* Title */}
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight leading-tight">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-5 text-black/70 leading-[1.8] text-base">
                    {project.desc}
                  </p>

                  {/* CTA */}
                  <div className="mt-7 flex items-center justify-between">

                    <span className="text-[#FF4D1C] text-sm font-semibold uppercase tracking-wider">
                      Visit Website
                    </span>

                    <div className="w-10 h-10 rounded-full bg-[#FF4D1C] text-white flex items-center justify-center group-hover:rotate-45 transition duration-300">
                      ↗
                    </div>

                  </div>

                </div>

              </motion.a>
            ))}

          </div>

        </div>
      </section>

      {/* DEVELOPMENT APPROACH */}
      <section className="px-6 md:px-10 py-24">
        <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-20 items-start">

          {/* Left */}
          <div>

            <p className="uppercase text-xs tracking-[0.25em] text-white/50 mb-5">
              Development Approach
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-[1.05] tracking-[-0.03em]">
              SEO-first development with performance-focused architecture.
            </h2>

          </div>

          {/* Right */}
          <div className="space-y-8 text-white/70 text-base md:text-lg leading-[1.9]">

            <p>
              Every website is built with strong focus on performance,
              search visibility, responsiveness, scalability,
              and modern user experience.
            </p>

            <p>
              My development process combines modern technologies like Next.js
              with SEO best practices including Core Web Vitals optimization,
              technical structure, mobile responsiveness, and accessibility.
            </p>

            <p>
              The goal is creating websites that are not only visually modern,
              but technically optimized for long-term growth and performance.
            </p>

          </div>

        </div>
      </section>

      {/* SEO + DEVELOPMENT */}
      <section className="bg-[#FF4D1C] px-6 md:px-10 py-24">
        <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-20 items-start">

          {/* Left */}
          <div>

            <p className="uppercase text-xs tracking-[0.25em] text-white/70 mb-5">
              SEO + Development
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-[1.05] tracking-[-0.03em]">
              Bridging technical SEO and modern development for scalable digital growth.
            </h2>

          </div>

          {/* Right */}
          <div className="space-y-8 text-white/90 text-base md:text-lg leading-[1.9]">

            <p>
              Modern search visibility depends heavily on technical implementation,
              website structure, performance, and user experience.
            </p>

            <p>
              My approach combines technical SEO expertise with development execution
              to improve crawlability, indexing, speed, Core Web Vitals,
              semantic structure, and overall search performance.
            </p>

            <p>
              This creates technically strong websites optimized
              for both search engines and users.
            </p>

          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#EDEBE7] text-[#0A0A0A] px-6 md:px-10 py-24">
        <div className="max-w-[1280px] mx-auto">

          {/* Heading */}
          <div className="mb-16">

            <p className="uppercase text-xs tracking-[0.25em] text-black/50 mb-5">
              Process
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-[1.08] tracking-[-0.03em] max-w-4xl">
              A structured process focused on scalable and performance-driven execution.
            </h2>

          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

            {process.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-black/5 rounded-3xl p-8"
              >

                <span className="text-[#FF4D1C] text-sm font-semibold uppercase tracking-widest">
                  Step 0{index + 1}
                </span>

                <h3 className="mt-5 text-2xl font-semibold tracking-tight">
                  {item.title}
                </h3>

                <p className="mt-5 text-black/70 leading-[1.8] text-base">
                  {item.desc}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* TECH STACK */}
      <section className="bg-[#111111] px-6 md:px-10 py-24">
        <div className="max-w-[1280px] mx-auto">

          {/* Heading */}
          <div className="mb-16">

            <p className="uppercase text-xs tracking-[0.25em] text-white/50 mb-5">
              Technology Stack
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-[1.08] tracking-[-0.03em] max-w-4xl">
              Modern technologies powering performance-focused digital experiences.
            </h2>

          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

            {technologies.map((tool, index) => (
              <div
                key={index}
                className="bg-black border border-white/5 rounded-2xl p-6 flex items-center justify-center text-center hover:border-[#FF4D1C]/40 transition duration-300"
              >

                <span className="text-base md:text-lg font-medium">
                  {tool}
                </span>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* RESULTS */}
      <section className="bg-[#EDEBE7] text-[#0A0A0A] px-6 md:px-10 py-24">
        <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-20 items-start">

          {/* Left */}
          <div>

            <p className="uppercase text-xs tracking-[0.25em] text-black/50 mb-5">
              Results & Impact
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-[1.05] tracking-[-0.03em]">
              Building technically strong and scalable digital experiences.
            </h2>

          </div>

          {/* Right */}
          <div className="space-y-8 text-black/70 text-base md:text-lg leading-[1.9]">

            <p>
              My focus is building websites that combine
              modern design, technical performance,
              responsive architecture, and search visibility.
            </p>

            <p>
              This includes SEO-focused implementation,
              Core Web Vitals optimization,
              mobile-first design, and scalable systems
              designed for long-term digital growth.
            </p>

            <p>
              Every project aims to improve usability,
              performance, visibility, and technical quality.
            </p>

          </div>

        </div>
      </section>

      {/* TRAINING */}
      <section className="px-6 md:px-10 pt-24 pb-32">
        <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-20 items-start">

          {/* Left */}
          <div>

            <p className="uppercase text-xs tracking-[0.25em] text-white/50 mb-5">
              Training & Knowledge Sharing
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-[1.05] tracking-[-0.03em]">
              Practical learning focused on real-world implementation.
            </h2>

          </div>

          {/* Right */}
          <div className="space-y-8 text-white/70 text-base md:text-lg leading-[1.9]">

            <p>
              I also provide practical learning and mentorship
              around SEO implementation, website development,
              AI SEO, automation systems, and modern digital marketing.
            </p>

            <p>
              The goal is helping students, professionals,
              and business owners understand scalable
              real-world digital growth execution.
            </p>

          </div>

        </div>
      </section>

    </main>
  );
}