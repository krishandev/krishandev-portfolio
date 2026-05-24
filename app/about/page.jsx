"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const experience = [
  {
    company: "AdsRole LLC",
    role: "General Manager - Digital Marketing",
    year: "Current",
  },
  {
    company: "RNF Technologies",
    role: "Digital Marketing Manager",
    year: "2021 - Present",
  },
  {
    company: "RNF Technologies",
    role: "Digital Marketing Manager",
    year: "2017 - 2020",
  },
  {
    company: "Trignosoft Solutions Pvt. Ltd.",
    role: "Digital Marketing Specialist",
    year: "2016 - 2017",
  },
  {
    company: "iSearch Solution",
    role: "Digital Marketing Executive",
    year: "2015",
  },
];

const expertise = [
  {
    title: "Technical SEO",
    desc: "Core Web Vitals, crawl optimization, indexing, and technical performance improvements.",
  },
  {
    title: "AI SEO (AEO & GEO)",
    desc: "Optimizing websites and content for AI-driven and generative search experiences.",
  },
  {
    title: "SEO Automation",
    desc: "Building scalable automation systems using n8n and Make workflows.",
  },
  {
    title: "Next.js Development",
    desc: "Performance-focused modern websites with SEO-first architecture.",
  },
  {
    title: "Social Media Marketing",
    desc: "Strategic campaigns focused on visibility, engagement, and business growth.",
  },
  {
    title: "Content Strategy",
    desc: "Topic clustering, keyword research, and scalable content planning.",
  },
];

const certifications = [
  {
    title: "SEO Certification",
    org: "HubSpot Academy",
    link: "https://app-na2.hubspot.com/academy/achievements/rh8hzrgp/en/1/krishan-dev/seo",
  },
  {
    title: "AI Visibility Essentials",
    org: "Semrush Academy",
    link: "https://static.semrush.com/academy/certificates/d29c40faa9/krishan-dev_25.pdf",
  },
  {
    title: "AI Tools Workshop",
    org: "Be10x",
    link: "https://certx.in/certificate/0270772f-3809-4400-b29b-1e1c61cd0997928018",
  },
];

export default function AboutPage() {
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
              About Me
            </p>

            {/* Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-[64px] font-bold leading-[0.98] tracking-[-0.04em] max-w-5xl">
              Building scalable organic growth through SEO, AI,
              automation, and modern web development.
            </h1>

            {/* Description */}
            <p className="mt-8 text-white/70 text-base md:text-lg leading-[1.9] max-w-3xl">
              I’m Krishan Dev — an SEO Manager, AI SEO Specialist,
              and SEO-focused web developer with 11+ years of experience
              helping businesses improve search visibility, technical
              performance, automation efficiency, and scalable digital growth.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-5">
              <Link href="/contact">
                <button className="bg-[#FF4D1C] text-white px-8 py-4 rounded-full uppercase tracking-wider text-sm font-semibold hover:opacity-90 transition">
                  Let’s Connect
                </button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">

              {[
                {
                  value: "11+",
                  label: "Years Experience",
                },
                {
                  value: "2000+",
                  label: "Projects Contributed",
                },
                {
                  value: "AI SEO",
                  label: "Specialization",
                },
                {
                  value: "Multi",
                  label: "Industry Experience",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  viewport={{ once: true }}
                  className="bg-[#111111] border border-white/5 rounded-3xl p-7 md:p-8 transition-all duration-300 hover:border-[#FF4D1C]/40"
                >
                  <h3 className="text-4xl md:text-5xl font-bold text-[#FF4D1C] tracking-tight leading-none">
                    {item.value}
                  </h3>

                  <p className="mt-5 text-base text-white/60">
                    {item.label}
                  </p>
                </motion.div>
              ))}

            </div>

          </motion.div>

        </div>
      </section>

      {/* STORY */}
      <section className="bg-[#EDEBE7] text-[#0A0A0A] px-6 md:px-10 py-24">
        <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-20">

          {/* Left */}
          <div>
            <p className="uppercase text-xs tracking-[0.25em] text-black/50 mb-5">
              My Journey
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-[1.05] tracking-[-0.03em] max-w-xl">
              Combining SEO, AI, automation, and development for modern digital growth.
            </h2>
          </div>

          {/* Right */}
          <div className="space-y-8 text-black/70 text-base md:text-lg leading-[1.9]">

            <p>
              Over the years, I’ve worked across multiple industries helping
              businesses improve organic visibility, rankings, technical SEO,
              website performance, and scalable lead generation systems.
            </p>

            <p>
              My expertise combines Technical SEO, AI SEO (AEO & GEO),
              automation workflows, and performance-focused website development
              using modern technologies like Next.js and WordPress.
            </p>

            <p>
              I focus on solving real business challenges including
              indexing issues, traffic drops, crawl inefficiencies,
              poor site architecture, and scalable SEO operations.
            </p>

            <p>
              I also provide practical digital marketing training
              for students, professionals, and business owners
              who want to learn SEO, AI SEO, automation,
              and website development from real-world experience.
            </p>

          </div>

        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="px-6 md:px-10 py-24">
        <div className="max-w-[1280px] mx-auto">

          {/* Heading */}
          <div className="mb-16">

            <p className="uppercase text-xs tracking-[0.25em] text-white/50 mb-5">
              Experience
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-[1.08] tracking-[-0.03em] max-w-4xl">
              Professional experience built through real-world digital growth projects.
            </h2>

          </div>

          {/* Timeline */}
          <div className="space-y-6">

            {experience.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="bg-[#111111] border border-white/5 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 transition-all duration-300 hover:border-[#FF4D1C]/40"
              >

                <div>
                  <h3 className="text-2xl font-semibold tracking-tight">
                    {item.company}
                  </h3>

                  <p className="mt-3 text-white/60 text-base">
                    {item.role}
                  </p>
                </div>

                <span className="text-[#FF4D1C] font-semibold text-base md:text-lg">
                  {item.year}
                </span>

              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* EXPERTISE */}
      <section className="bg-[#FF4D1C] px-6 md:px-10 py-24">
        <div className="max-w-[1280px] mx-auto">

          {/* Heading */}
          <div className="mb-16">

            <p className="uppercase text-xs tracking-[0.25em] text-white/70 mb-5">
              Expertise
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-[1.08] tracking-[-0.03em] max-w-4xl">
              Specialized expertise designed for modern search and digital growth.
            </h2>

          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

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
                className="bg-black/15 backdrop-blur-md border border-white/10 rounded-3xl p-7 hover:bg-black/20 transition duration-300"
              >

                <h3 className="text-2xl font-semibold tracking-tight">
                  {item.title}
                </h3>

                <p className="mt-5 text-white/80 leading-[1.8] text-base">
                  {item.desc}
                </p>

              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* TRAINING */}
      <section className="bg-[#EDEBE7] text-[#0A0A0A] px-6 md:px-10 py-24">
        <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-20 items-start">

          {/* Left */}
          <div>

            <p className="uppercase text-xs tracking-[0.25em] text-black/50 mb-5">
              Training & Mentorship
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-[1.05] tracking-[-0.03em] max-w-xl">
              Practical digital marketing learning based on real-world experience.
            </h2>

          </div>

          {/* Right */}
          <div className="space-y-8 text-black/70 text-base md:text-lg leading-[1.9]">

            <p>
              I provide practical training and mentorship in SEO,
              AI SEO, website development, automation,
              and social media marketing.
            </p>

            <p>
              My learning approach focuses on practical implementation,
              industry-level workflows, technical understanding,
              and modern search strategies.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-5">

              {[
                "SEO Training",
                "AI SEO",
                "Website Development",
                "Social Media Marketing",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-black/5 rounded-2xl p-5 text-base font-medium"
                >
                  {item}
                </div>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="px-6 md:px-10 py-24">
        <div className="max-w-[1280px] mx-auto">

          {/* Heading */}
          <div className="mb-16">

            <p className="uppercase text-xs tracking-[0.25em] text-white/50 mb-5">
              Certifications
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-[1.08] tracking-[-0.03em] max-w-4xl">
              Industry-recognized certifications and continuous learning.
            </h2>

          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-3 gap-6">
  {certifications.map((item, index) => (
    <motion.a
      key={index}
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
      viewport={{ once: true }}
      className="bg-[#111111] border border-white/5 rounded-3xl p-8 transition-all duration-300 hover:border-[#FF4D1C]/40 hover:-translate-y-1 block"
    >
      <h3 className="text-2xl font-semibold tracking-tight">
        {item.title}
      </h3>

      <p className="mt-5 text-white/60 text-base">
        {item.org}
      </p>

      <span className="inline-block mt-6 text-[#FF4D1C] text-sm font-semibold uppercase tracking-wider">
        View Certificate →
      </span>
    </motion.a>
  ))}
</div>

        </div>
      </section>

      {/* EDUCATION */}
      <section className="bg-[#EDEBE7] text-[#0A0A0A] px-6 md:px-10 py-24">
        <div className="max-w-[1280px] mx-auto">

          {/* Heading */}
          <div className="mb-16">

            <p className="uppercase text-xs tracking-[0.25em] text-black/50 mb-5">
              Education
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-[1.08] tracking-[-0.03em] max-w-4xl">
              Academic background in computer science and technology.
            </h2>

          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-white border border-black/5 rounded-3xl p-8">

              <h3 className="text-2xl font-semibold tracking-tight">
                Master of Computer Applications (MCA)
              </h3>

              <p className="mt-5 text-black/70 leading-[1.8] text-base">
                KHANDELWAL COLLEGE OF MANAGEMENT SCIENCE AND TECHNOLOGY, BAREILLY
              </p>

            </div>

            <div className="bg-white border border-black/5 rounded-3xl p-8">

              <h3 className="text-2xl font-semibold tracking-tight">
                Bachelor of Computer Applications (BCA)
              </h3>

              <p className="mt-5 text-black/70 leading-[1.8] text-base">
                Mahatma Jyotiba Phule Rohilkhand University
              </p>

            </div>

          </div>

        </div>
      </section>

      

    </main>
  );
}