"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "11+",
    label: "Years Experience",
  },
  {
    value: "2000+",
    label: "Projects Contributed",
  },
  {
    value: "Multi",
label: "Industry Experience",
  },
  {
    value: "AI + SEO",
    label: "Specialization",
  },
];

export default function Stats() {
  return (
    <section className="bg-[#0A0A0A] text-white px-6 md:px-10 py-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          {/* Label */}
          <p className="uppercase text-xs tracking-[0.25em] text-white/60 mb-5">
            Experience
          </p>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-[1.1] tracking-[-0.03em] max-w-4xl">
            Experience backed by measurable impact and long-term growth.
          </h2>

          {/* Description */}
          <p className="mt-6 text-white/60 text-base md:text-lg leading-[1.8] max-w-3xl">
            Over the years, I’ve worked across multiple industries helping businesses
            improve search visibility, technical performance, automation efficiency,
            and scalable organic growth.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="bg-[#141414] border border-white/5 rounded-3xl p-7 md:p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#FF4D1C]"
            >
              
              {/* Value */}
              <h3 className="text-4xl md:text-5xl  font-bold text-[#FF4D1C] tracking-tight leading-none">
                {item.value}
              </h3>

              {/* Label */}
              <p className="mt-5 text-sm md:text-base text-white/70 leading-relaxed">
                {item.label}
              </p>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}