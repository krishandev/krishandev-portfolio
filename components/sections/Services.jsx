"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Technical SEO",
    desc: "Crawl, indexing, and Core Web Vitals optimization for scalable performance.",
  },
  {
    title: "AI SEO (AEO & GEO)",
    desc: "Optimizing content and structure for AI-driven and generative search engines.",
  },
  {
    title: "SEO Automation",
    desc: "Building workflows using n8n and Make to scale SEO processes efficiently.",
  },
  {
    title: "Next.js Development",
    desc: "High-performance, SEO-first websites with modern architecture.",
  },
  {
    title: "Content Strategy",
    desc: "Keyword research, topic clustering, and data-driven content planning.",
  },
  {
    title: "SEO Audits",
    desc: "Deep technical audits to identify and fix growth bottlenecks.",
  },
];

export default function Services() {
  return (
    <section className="bg-[#0A0A0A] text-white px-6 md:px-10 py-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="uppercase text-xs tracking-widest text-white/60 mb-4">
            What I Do
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            My Expertise & Capabilities
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#FF4D1C] p-6 md:p-8 rounded-xl flex flex-col justify-between transition-transform duration-300 hover:scale-[1.03]"
            >
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  {service.title}
                </h3>

                <p className="text-white/90 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}