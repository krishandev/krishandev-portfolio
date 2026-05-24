"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="bg-[#0A0A0A] px-6 md:px-10 py-20">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-[#FF4D1C] rounded-3xl p-8 md:p-14 lg:p-20"
        >
          {/* Label */}
          <p className="text-white/80 uppercase text-xs tracking-[0.25em] mb-6">
            About Me
          </p>

          {/* Heading */}
        <h2 className="text-white text-3xl md:text-4xl lg:text-[48px] font-bold leading-[1.12] tracking-[-0.03em] max-w-4xl">
  Helping businesses grow through Technical SEO, AI SEO, automation, and performance-focused web development.
</h2>

          {/* Description */}
          <div className="grid md:grid-cols-2 gap-10 mt-12">
            
            <div>
              <p className="text-white/90 text-base md:text-lg leading-relaxed">
                I’m Krishan Dev, an SEO Manager and AI SEO Specialist with
                11+ years of experience helping businesses improve organic visibility,
                rankings, and lead generation through scalable search strategies.
              </p>

              <p className="mt-6 text-white/90 text-base md:text-lg leading-relaxed">
                My expertise combines Technical SEO, AI-driven search optimization
                (AEO & GEO), automation workflows, and modern website development
                using Next.js and WordPress.
              </p>
            </div>

            <div>
              <p className="text-white/90 text-base md:text-lg leading-relaxed">
                I focus on solving real business challenges including traffic drops,
                indexing issues, poor search visibility, low lead generation,
                slow website performance, and scalable SEO operations.
              </p>

              <p className="mt-6 text-white/90 text-base md:text-lg leading-relaxed">
                I also provide practical digital marketing training for students,
                professionals, and business owners who want to learn SEO,
                AI SEO, automation, and website development from real-world experience.
              </p>
            </div>

          </div>

          {/* Expertise Highlights */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-14">
            
            {[
              "Technical SEO",
              "AI SEO (AEO & GEO)",
              "SEO Automation",
              "Next.js Development",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-black/15 backdrop-blur-sm border border-white/10 rounded-xl px-5 py-5 text-white font-medium"
              >
                {item}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 flex flex-wrap items-center gap-5">
            <Link href="/contact">
              <button className="bg-black text-white px-8 py-4 uppercase tracking-wider text-sm font-semibold hover:bg-[#111] transition">
                Let’s Connect
              </button>
            </Link>

            <span className="text-white/80 text-sm uppercase tracking-widest">
              Open to discussions, collaborations & training
            </span>
          </div>

        </motion.div>

      </div>
    </section>
  );
}