"use client";

import { motion } from "framer-motion";

const skills = [
  {
    name: "Technical SEO",
    level: 95,
    label: "Expert",
  },
  {
    name: "AI SEO (AEO & GEO)",
    level: 90,
    label: "Advanced",
  },
  {
    name: "Automation (n8n, Make)",
    level: 88,
    label: "Specialized",
  },
  {
    name: "Next.js & Web Development",
    level: 85,
    label: "Advanced",
  },
];

export default function Skills() {
  return (
    <section className="bg-[#EDEBE7] text-[#0A0A0A] px-6 md:px-10 py-24">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[42%_58%] gap-16 items-start">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="sticky top-28"
        >
          {/* Label */}
          <p className="uppercase text-xs tracking-[0.25em] mb-5 text-black/60">
            Expertise
          </p>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-[1.1] tracking-[-0.03em] max-w-xl">
            Expertise built through 11+ years of SEO, AI, and development experience.
          </h2>

          {/* Description */}
          <p className="mt-6 text-black/70 text-base md:text-lg leading-[1.8] max-w-lg">
            I help businesses improve search visibility, technical performance,
            and scalable growth through Technical SEO, AI SEO, automation,
            and modern web development.
          </p>

          {/* Small Stats */}
          <div className="flex flex-wrap gap-8 mt-10">
            <div>
              <h3 className="text-3xl font-bold">11+</h3>
              <p className="text-sm text-black/60 mt-1">
                Years Experience
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">2000+</h3>
              <p className="text-sm text-black/60 mt-1">
                Projects Contributed
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SKILLS */}
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/70 backdrop-blur-sm border border-black/5 rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-md transition duration-300"
            >
              
              {/* Top Row */}
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-lg md:text-xl font-semibold tracking-tight">
                  {skill.name}
                </h3>

                <span className="text-sm uppercase tracking-widest text-[#FF4D1C] font-semibold">
                  {skill.label}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-[10px] bg-black/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.2 }}
                  viewport={{ once: true }}
                  className="h-full rounded-full bg-[#FF4D1C]"
                />
              </div>

              {/* Bottom Percentage */}
              <div className="mt-4 flex justify-end">
                <span className="text-sm text-black/50 font-medium">
                  {skill.level}% proficiency
                </span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}