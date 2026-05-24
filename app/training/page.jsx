"use client";

import { motion } from "framer-motion";

const trainingAreas = [
  {
    title: "Technical SEO",
    desc: "Learn crawl optimization, indexing, Core Web Vitals, technical audits, and scalable SEO systems.",
  },
  {
    title: "AI SEO (AEO & GEO)",
    desc: "Understand AI-driven search visibility, semantic SEO, entity optimization, and generative search.",
  },
  {
    title: "Website Development",
    desc: "Build SEO-friendly modern websites with strong structure, responsiveness, and performance.",
  },
  {
    title: "Next.js Development",
    desc: "Learn modern frontend development using Next.js with performance-focused architecture.",
  },
  {
    title: "WordPress Development",
    desc: "Understand practical WordPress setup, optimization, structure, and SEO implementation.",
  },
  {
    title: "Social Media Marketing",
    desc: "Learn visibility strategies, audience growth, branding, and content-driven marketing.",
  },
  {
    title: "SEO Automation",
    desc: "Build automation workflows using n8n and Make for scalable SEO operations.",
  },
  {
    title: "Content Strategy",
    desc: "Keyword research, topical authority, content planning, and search-focused content systems.",
  },
  {
    title: "GA4 & Search Console",
    desc: "Practical analytics, reporting, indexing analysis, and SEO performance tracking.",
  },
  {
    title: "SEO Audits",
    desc: "Learn how to identify technical issues, growth bottlenecks, and optimization opportunities.",
  },
];

const learners = [
  "Students",
  "Working Professionals",
  "Business Owners",
  "Marketing Teams",
  "Freelancers",
  "Website Owners",
];

const learningPoints = [
  "Technical SEO Implementation",
  "AI SEO Concepts",
  "SEO Audits",
  "Keyword Research",
  "Website Optimization",
  "SEO Tools Usage",
  "Website Performance",
  "Automation Workflows",
  "SEO + Development Integration",
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

export default function TrainingPage() {
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
              Training & Mentorship
            </p>

            {/* Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-[64px] font-bold leading-[0.98] tracking-[-0.04em] max-w-5xl">
              Practical digital marketing learning based on real-world experience.
            </h1>

            {/* Description */}
            <p className="mt-8 text-white/70 text-base md:text-lg leading-[1.9] max-w-3xl">
              Learn Technical SEO, AI SEO, website development,
              automation systems, and modern digital growth strategies
              through practical implementation and industry-focused workflows.
            </p>

            {/* CTA */}
            <div className="mt-10">
              <a
                href="https://wa.me/917053051182"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-[#FF4D1C] text-white px-8 py-4 rounded-full uppercase tracking-wider text-sm font-semibold hover:opacity-90 transition-all duration-300 hover:scale-[1.02]">
                  Start Learning Journey
                </button>
              </a>
            </div>

          </motion.div>

        </div>
      </section>

      {/* TRAINING AREAS */}
      <section className="bg-[#EDEBE7] text-[#0A0A0A] px-6 md:px-10 py-24">
        <div className="max-w-[1280px] mx-auto">

          {/* Heading */}
          <div className="mb-16">

            <p className="uppercase text-xs tracking-[0.25em] text-black/50 mb-5">
              Training Areas
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-[1.08] tracking-[-0.03em] max-w-4xl">
              Industry-focused learning designed for practical implementation.
            </h2>

          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6">

            {trainingAreas.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
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

      {/* LEARNING APPROACH */}
      <section className="px-6 md:px-10 py-24">
        <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-20 items-start">

          {/* Left */}
          <div>

            <p className="uppercase text-xs tracking-[0.25em] text-white/50 mb-5">
              Learning Approach
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-[1.05] tracking-[-0.03em]">
              Practical learning focused on real-world implementation and execution.
            </h2>

          </div>

          {/* Right */}
          <div className="space-y-8 text-white/70 text-base md:text-lg leading-[1.9]">

            <p>
              The focus is practical understanding,
              modern workflows, and industry-level implementation
              instead of only theoretical concepts.
            </p>

            <p>
              Students learn technical SEO execution,
              AI SEO concepts, website optimization,
              automation systems, and scalable digital growth strategies.
            </p>

            <p>
              The learning process includes real-world examples,
              practical workflows, technical understanding,
              and performance-focused implementation.
            </p>

          </div>

        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="bg-[#FF4D1C] px-6 md:px-10 py-24">
        <div className="max-w-[1280px] mx-auto">

          {/* Heading */}
          <div className="mb-16">

            <p className="uppercase text-xs tracking-[0.25em] text-white/70 mb-5">
              Who This Is For
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-[1.08] tracking-[-0.03em] max-w-4xl">
              Designed for learners interested in modern digital growth systems.
            </h2>

          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

            {learners.map((item, index) => (
              <div
                key={index}
                className="bg-black/15 backdrop-blur-md border border-white/10 rounded-3xl p-8 flex items-center justify-center text-center"
              >

                <h3 className="text-2xl font-semibold tracking-tight">
                  {item}
                </h3>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* WHAT STUDENTS WILL LEARN */}
      <section className="bg-[#EDEBE7] text-[#0A0A0A] px-6 md:px-10 py-24">
        <div className="max-w-[1280px] mx-auto">

          {/* Heading */}
          <div className="mb-16">

            <p className="uppercase text-xs tracking-[0.25em] text-black/50 mb-5">
              What You Will Learn
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-[1.08] tracking-[-0.03em] max-w-4xl">
              Practical skills focused on modern SEO and digital implementation.
            </h2>

          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

            {learningPoints.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-black/5 rounded-3xl p-7"
              >

                <span className="text-[#FF4D1C] text-sm font-semibold uppercase tracking-widest">
                  0{index + 1}
                </span>

                <h3 className="mt-5 text-2xl font-semibold tracking-tight">
                  {item}
                </h3>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* TOOLS */}
      <section className="bg-[#111111] px-6 md:px-10 py-24">
        <div className="max-w-[1280px] mx-auto">

          {/* Heading */}
          <div className="mb-16">

            <p className="uppercase text-xs tracking-[0.25em] text-white/50 mb-5">
              Tools & Technologies
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-[1.08] tracking-[-0.03em] max-w-4xl">
              Modern tools used in practical SEO and digital growth workflows.
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

      {/* WHY LEARN FROM ME */}
      <section className="px-6 md:px-10 py-24">
        <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-20 items-start">

          {/* Left */}
          <div>

            <p className="uppercase text-xs tracking-[0.25em] text-white/50 mb-5">
              Why Learn From Me
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-[1.05] tracking-[-0.03em]">
              Real-world experience combined with modern SEO and development expertise.
            </h2>

          </div>

          {/* Right */}
          <div className="space-y-8 text-white/70 text-base md:text-lg leading-[1.9]">

            <p>
              With 11+ years of industry experience,
              my focus is sharing practical implementation,
              technical understanding, and scalable digital growth systems.
            </p>

            <p>
              The training combines SEO, AI SEO,
              development, automation, and modern search strategies
              used in real-world projects and workflows.
            </p>

            <p>
              The goal is helping learners understand
              modern search evolution and technical implementation
              with practical industry perspective.
            </p>

          </div>

        </div>
      </section>

      {/* TRAINING FORMAT */}
      <section className="bg-[#FF4D1C] px-6 md:px-10 py-24">
        <div className="max-w-[1280px] mx-auto">

          {/* Heading */}
          <div className="mb-16">

            <p className="uppercase text-xs tracking-[0.25em] text-white/70 mb-5">
              Training Format
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-[1.08] tracking-[-0.03em] max-w-4xl">
              Learning designed around practical workflows and implementation.
            </h2>

          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

            {[
              "Online Learning",
              "Practical Sessions",
              "Real-World Examples",
              "Workflow-Based Learning",
              "Strategy Discussions",
              "Technical Implementation",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-black/15 backdrop-blur-md border border-white/10 rounded-3xl p-8"
              >

                <h3 className="text-2xl font-semibold tracking-tight">
                  {item}
                </h3>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* KNOWLEDGE SHARING */}
      <section className="px-6 md:px-10 pt-24 pb-32">
        <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-20 items-start">

          {/* Left */}
          <div>

            <p className="uppercase text-xs tracking-[0.25em] text-white/50 mb-5">
              Knowledge Sharing
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-[1.05] tracking-[-0.03em]">
              Sharing practical insights around modern search and digital growth.
            </h2>

          </div>

          {/* Right */}
          <div className="space-y-8 text-white/70 text-base md:text-lg leading-[1.9]">

            <p>
              I regularly share practical SEO insights,
              AI SEO updates, tutorials, implementation workflows,
              and search evolution concepts.
            </p>

            <p>
              The focus is helping learners understand
              how modern SEO, AI-driven search,
              development, and automation work together
              in real-world digital growth systems.
            </p>

          </div>

        </div>
      </section>

    </main>
  );
}