"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const expertise = [
  {
    title: "Technical SEO",
    desc: "Advanced technical optimization including crawlability, indexing, Core Web Vitals, and scalable SEO architecture.",
  },
  {
    title: "AI SEO (AEO & GEO)",
    desc: "Optimizing websites and content for AI-driven search experiences and generative engines.",
  },
  {
    title: "SEO Automation",
    desc: "Building automation workflows using n8n and Make to improve SEO efficiency and scalability.",
  },
  {
    title: "Website Development",
    desc: "Modern Next.js and WordPress websites focused on SEO, speed, and performance.",
  },
  {
    title: "Social Media Marketing",
    desc: "Strategic social media growth, visibility, audience engagement, and brand positioning.",
  },
  {
    title: "Content Strategy",
    desc: "Keyword research, topic clustering, content planning, and scalable organic growth systems.",
  },
  {
    title: "SEO Audits",
    desc: "Comprehensive technical SEO audits to identify opportunities and resolve performance bottlenecks.",
  },
  {
    title: "Performance Optimization",
    desc: "Improving website speed, Core Web Vitals, mobile experience, and technical implementation.",
  },
];

const tools = [
  "GA4",
  "Google Search Console",
  "Ahrefs",
  "SEMrush",
  "Screaming Frog",
  "n8n",
  "Make",
  "Next.js",
  "WordPress",
];

const process = [
  {
    title: "Audit & Research",
    desc: "Analyzing technical issues, search visibility, competition, and growth opportunities.",
  },
  {
    title: "Strategy & Planning",
    desc: "Creating scalable SEO, AI SEO, content, and automation-driven growth strategies.",
  },
  {
    title: "Implementation",
    desc: "Executing technical improvements, optimization workflows, and development solutions.",
  },
  {
    title: "Optimization & Scaling",
    desc: "Continuous monitoring, testing, reporting, and long-term growth optimization.",
  },
];

export default function ExpertisePage() {
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
              Expertise
            </p>

            {/* Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-[64px] font-bold leading-[0.98] tracking-[-0.04em] max-w-5xl">
              Specialized expertise built for modern digital growth.
            </h1>

            {/* Description */}
            <p className="mt-8 text-white/70 text-base md:text-lg leading-[1.9] max-w-3xl">
              Combining Technical SEO, AI SEO, automation systems,
              and modern web development to help businesses improve
              search visibility, performance, scalability, and long-term growth.
            </p>

            {/* CTA */}
            <div className="mt-10">
              <a
                href="https://wa.me/917053051182"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-[#FF4D1C] text-white px-8 py-4 rounded-full uppercase tracking-wider text-sm font-semibold hover:opacity-90 transition-all duration-300 hover:scale-[1.02]">
                  Discuss Growth Strategy
                </button>
              </a>
            </div>

          </motion.div>

        </div>
      </section>

      {/* EXPERTISE GRID */}
      <section className="bg-[#EDEBE7] text-[#0A0A0A] px-6 md:px-10 pb-32 pt-24">
        <div className="max-w-[1280px] mx-auto">

          {/* Heading */}
          <div className="mb-16">

            <p className="uppercase text-xs tracking-[0.25em] text-black/50 mb-5">
              Core Expertise
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-[1.08] tracking-[-0.03em] max-w-4xl">
              Expertise designed for search visibility, scalability, and modern growth systems.
            </h2>

          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

            {expertise.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="bg-white border border-black/5 rounded-3xl p-7 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
              >

                <h3 className="text-2xl font-semibold tracking-tight">
                  {item.title}
                </h3>

                <p className="mt-5 text-black/70 leading-[1.8] text-base">
                  {item.desc}
                </p>

              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* TECHNICAL SEO */}
      <section className="px-6 md:px-10 py-24">
        <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-20 items-start">

          {/* Left */}
          <div>

            <p className="uppercase text-xs tracking-[0.25em] text-white/50 mb-5">
              Technical SEO
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-[1.05] tracking-[-0.03em]">
              Technical foundations built for scalable organic growth.
            </h2>

          </div>

          {/* Right */}
          <div className="space-y-8 text-white/70 text-base md:text-lg leading-[1.9]">

            <p>
              My technical SEO expertise focuses on creating
              search-friendly websites with strong crawlability,
              indexing efficiency, site structure, and scalable architecture.
            </p>

            <p>
              I work extensively on Core Web Vitals optimization,
              structured data implementation, internal linking systems,
              technical audits, rendering issues, and performance improvements.
            </p>

            <p>
              The goal is not just rankings — but building technically
              strong digital systems that support long-term organic growth.
            </p>

          </div>

        </div>
      </section>

      {/* AI SEO */}
      <section className="bg-[#FF4D1C] px-6 md:px-10 py-24">
        <div className="max-w-[1280px] mx-auto">

          <div className="grid lg:grid-cols-2 gap-20 items-start">

            {/* Left */}
            <div>

              <p className="uppercase text-xs tracking-[0.25em] text-white/70 mb-5">
                AI SEO & GEO
              </p>

              <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-[1.05] tracking-[-0.03em]">
                Optimizing visibility for AI-driven and generative search experiences.
              </h2>

            </div>

            {/* Right */}
            <div className="space-y-8 text-white/90 text-base md:text-lg leading-[1.9]">

              <p>
                Modern search is evolving rapidly through AI-generated experiences,
                entity-based understanding, and semantic search systems.
              </p>

              <p>
                My AI SEO approach focuses on Answer Engine Optimization (AEO),
                Generative Engine Optimization (GEO), semantic structure,
                topical authority, entity optimization, and search intent alignment.
              </p>

              <p>
                The focus is helping brands remain visible across
                AI-driven search ecosystems and future search experiences.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* AUTOMATION */}
      <section className="bg-[#EDEBE7] text-[#0A0A0A] px-6 md:px-10 py-24">
        <div className="max-w-[1280px] mx-auto">

          {/* Heading */}
          <div className="mb-16">

            <p className="uppercase text-xs tracking-[0.25em] text-black/50 mb-5">
              Automation
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-[1.08] tracking-[-0.03em] max-w-4xl">
              Automation systems designed to improve scalability and efficiency.
            </h2>

          </div>

          {/* Workflow Cards */}
          <div className="grid md:grid-cols-3 gap-6">

            {[
              "SEO Reporting Workflows",
              "AI-Assisted Operations",
              "Scalable SEO Processes",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white border border-black/5 rounded-3xl p-8"
              >

                <span className="text-[#FF4D1C] text-sm font-semibold uppercase tracking-widest">
                  0{index + 1}
                </span>

                <h3 className="mt-5 text-2xl font-semibold tracking-tight">
                  {item}
                </h3>

                <p className="mt-5 text-black/70 leading-[1.8] text-base">
                  Built using modern workflow automation systems like n8n and Make
                  to reduce manual effort and improve operational efficiency.
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* DEVELOPMENT */}
      <section className="px-6 md:px-10 py-24">
        <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-20 items-start">

          {/* Left */}
          <div>

            <p className="uppercase text-xs tracking-[0.25em] text-white/50 mb-5">
              Development
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-[1.05] tracking-[-0.03em]">
              SEO-focused development with performance-first architecture.
            </h2>

          </div>

          {/* Right */}
          <div className="space-y-8 text-white/70 text-base md:text-lg leading-[1.9]">

            <p>
              I build modern websites using Next.js and WordPress
              with strong focus on technical implementation,
              SEO architecture, performance, and scalability.
            </p>

            <p>
              Development decisions are aligned with search visibility,
              mobile optimization, user experience, Core Web Vitals,
              and conversion-focused performance.
            </p>

            <p>
              This allows seamless collaboration between
              development and SEO execution for long-term results.
            </p>

          </div>

        </div>
      </section>

      {/* TOOLS */}
      <section className="bg-[#111111] px-6 md:px-10 py-24">
        <div className="max-w-[1280px] mx-auto">

          {/* Heading */}
          <div className="mb-16">

            <p className="uppercase text-xs tracking-[0.25em] text-white/50 mb-5">
              Tools & Technology
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-[1.08] tracking-[-0.03em] max-w-4xl">
              Modern tools powering technical SEO, automation, and digital growth.
            </h2>

          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">

            {tools.map((tool, index) => (
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

      {/* PROCESS */}
      <section className="bg-[#EDEBE7] text-[#0A0A0A] px-6 md:px-10 py-24">
        <div className="max-w-[1280px] mx-auto">

          {/* Heading */}
          <div className="mb-16">

            <p className="uppercase text-xs tracking-[0.25em] text-black/50 mb-5">
              Process
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-[1.08] tracking-[-0.03em] max-w-4xl">
              A structured approach focused on measurable digital growth.
            </h2>

          </div>

          {/* Steps */}
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

      {/* TRAINING */}
      <section className="px-6 md:px-10 py-24">
        <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-20 items-start">

          {/* Left */}
          <div>

            <p className="uppercase text-xs tracking-[0.25em] text-white/50 mb-5">
              Training & Knowledge Sharing
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-[1.05] tracking-[-0.03em]">
              Practical learning focused on real-world digital growth.
            </h2>

          </div>

          {/* Right */}
          <div className="space-y-8 text-white/70 text-base md:text-lg leading-[1.9]">

            <p>
              I provide practical guidance and training
              for students, professionals, and business owners
              interested in SEO, AI SEO, automation,
              website development, and modern digital marketing.
            </p>

            <p>
              The focus is practical implementation,
              industry-level understanding,
              and scalable real-world execution.
            </p>

          </div>

        </div>
      </section>

     
    </main>
  );
}