"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Technical SEO",
    desc: "Advanced technical optimization including crawlability, indexing, Core Web Vitals, and site architecture improvements.",
  },
  {
    title: "AI SEO (AEO & GEO)",
    desc: "Optimizing websites and content for AI-driven search experiences and generative engine visibility.",
  },
  {
    title: "SEO Automation",
    desc: "Building scalable automation workflows using n8n and Make to improve efficiency and SEO operations.",
  },
  {
    title: "Next.js Development",
    desc: "Creating fast, SEO-focused, modern websites with scalable architecture and performance optimization.",
  },
  
  {
    title: "SEO Audits",
    desc: "Comprehensive technical audits to identify SEO issues, growth opportunities, and performance bottlenecks.",
  },
  {
    title: "Social Media Marketing",
    desc: "Building brand visibility, audience engagement, and growth through strategic social media campaigns.",
  },
];

export default function Services() {
  return (
    <section className="bg-[#0A0A0A] text-white px-6 md:px-10 py-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          {/* Label */}
          <p className="uppercase text-xs tracking-[0.25em] text-white/60 mb-5">
            What I Do
          </p>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-[1.1] tracking-[-0.03em] max-w-4xl">
            Specialized expertise designed for modern digital growth.
          </h2>

          {/* Description */}
          <p className="mt-6 text-white/60 text-base md:text-lg leading-[1.8] max-w-3xl">
            Helping businesses improve search visibility, technical performance,
            automation efficiency, and scalable digital growth through SEO,
            AI-driven strategies, and modern web development.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="group bg-[#FF4D1C] rounded-3xl p-7 md:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(255,77,28,0.35)]"
            >
              
              {/* Top */}
              <div>
                {/* Number */}
                <span className="text-white/50 text-sm font-medium">
                  0{index + 1}
                </span>

                {/* Title */}
                <h3 className="text-2xl font-semibold mt-5 leading-tight tracking-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-5 text-white/90 leading-[1.8] text-sm md:text-base">
                  {service.desc}
                </p>
              </div>

              {/* Bottom Arrow */}
              <div className="mt-10 flex items-center justify-between">
                <span className="text-sm uppercase tracking-widest text-white/70">
                  Expertise
                </span>

                <div className="w-10 h-10 rounded-full bg-black/15 flex items-center justify-center transition duration-300 group-hover:bg-black/25">
                  <span className="text-lg">↗</span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}