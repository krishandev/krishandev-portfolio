"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "11+", label: "Years Experience" },
  { value: "2000+", label: "Projects Contributed" },
  { value: "Multiple", label: "Industries Worked" },
  { value: "AI + SEO", label: "Specialization" },
];

export default function Stats() {
  return (
    <section className="bg-[#0A0A0A] text-white px-6 md:px-10 py-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="uppercase text-xs tracking-widest text-white/60 mb-4">
            My Experience
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Numbers that define my journey
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1A1A1A] rounded-xl p-6 text-center transition duration-300 hover:scale-[1.03]"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-[#FF4D1C]">
                {item.value}
              </h3>
              <p className="mt-2 text-sm text-white/70">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}