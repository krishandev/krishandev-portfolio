"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[#EDEBE7] text-[#0A0A0A] pt-32 pb-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Small Label */}
          <p className="uppercase tracking-widest text-sm mb-4">
            Hi, I'm
          </p>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
            KRISHAN DEV
          </h1>

          {/* Role */}
          <p className="mt-6 text-lg md:text-xl font-medium">
            SEO Manager | AI SEO Specialist | Technical SEO Expert
          </p>

          {/* Description */}
          <p className="mt-4 text-black/70 max-w-lg">
            Building scalable organic growth systems using AI, automation, and
            technical SEO strategies.
          </p>

          {/* CTA */}
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-[#FF4D1C] text-white px-6 py-3 font-medium uppercase tracking-wide hover:opacity-90 transition"
            >
              Let’s Connect
            </motion.button>
          </Link>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative flex justify-center"
        >
          <div className="relative w-[280px] md:w-[380px]">
            <Image
              src="/krishanSEO.png" // 🔁 replace with your image
              alt="Krishan Dev"
              width={600}
              height={600}
              className="object-contain"
              priority
            />

            {/* Optional Background Shape */}
            <div className="absolute -z-10 top-10 left-10 w-full h-full bg-[#FF4D1C] rounded-2xl"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}