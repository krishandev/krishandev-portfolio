"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPreview() {
  return (
    <section className="bg-[#0A0A0A] px-6 md:px-10 py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-stretch">
        
        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative rounded-xl overflow-hidden"
        >
          <Image
            src="/krishanSEO.png"
            alt="Krishan Dev"
            width={600}
            height={600}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-[#FF4D1C] rounded-xl p-8 md:p-12 flex flex-col justify-center"
        >
          {/* Label */}
          <p className="text-white/80 uppercase text-xs tracking-widest mb-4">
            About Me
          </p>

          {/* Heading */}
          <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold leading-snug tracking-tight">
            Transforming SEO strategies into scalable growth using AI, automation,
            and technical excellence.
          </h2>

          {/* Optional Short Line */}
          <p className="mt-6 text-white/90 text-sm md:text-base max-w-md">
            11+ years of experience helping businesses grow through data-driven SEO,
            modern search strategies, and performance-focused development.
          </p>
        </motion.div>

      </div>
    </section>
  );
}