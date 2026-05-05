"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "Technical SEO", level: 95 },
  { name: "AI SEO (AEO & GEO)", level: 90 },
  { name: "Automation (n8n, Make)", level: 88 },
  { name: "Next.js & Web Development", level: 85 },
];

export default function Skills() {
  return (
    <section className="bg-[#EDEBE7] text-[#0A0A0A] px-6 md:px-10 py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="uppercase text-xs tracking-widest mb-4 text-black/70">
            My Skills
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
            Why choose me for your next project?
          </h2>

          <p className="mt-4 text-black/70 max-w-md">
            I combine technical SEO expertise, AI-driven strategies, and development
            capabilities to deliver measurable growth and scalable solutions.
          </p>
        </motion.div>

        {/* RIGHT SKILLS */}
        <div>
          {skills.map((skill, index) => (
            <div key={index} className="mb-8">
              
              {/* Label */}
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-sm text-black/70">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-[6px] bg-gray-300 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className="h-full bg-[#FF4D1C]"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}