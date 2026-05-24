"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[#EDEBE7] text-[#0A0A0A] pt-32 pb-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[45%_55%] items-start gap-6">
        
        {/* LEFT CONTENT */}
        
<motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  className="relative z-10"
>
  {/* Small Label */}
  <p className="uppercase tracking-[0.25em] text-sm md:text-base mb-6 font-medium">
    Hi, I'm
  </p>

  {/* Main Heading */}
  <h1 className="text-[52px] leading-[0.95] md:text-[90px] lg:text-[115px] font-bold tracking-[-0.04em] uppercase">
    KRISHAN <br />
    DEV
  </h1>

  {/* Role Line */}
  <div className="mt-8 flex flex-wrap items-center gap-3 text-sm md:text-lg font-semibold uppercase tracking-wide">
  <span>SEO Manager</span>

  <span className="w-2 h-2 rounded-full bg-[#FF4D1C]"></span>

  <span>AI SEO Specialist</span>

  <span className="w-2 h-2 rounded-full bg-[#FF4D1C]"></span>

  <span>Technical SEO Expert</span>

  <span className="w-2 h-2 rounded-full bg-[#FF4D1C]"></span>

  <span>Website Developer</span>
</div>

  {/* Description */}
  <p className="mt-8 text-black/70 text-base md:text-lg leading-relaxed max-w-xl">
    Building scalable organic growth systems using AI, automation,
    and technical SEO strategies for modern search visibility.
  </p>

  {/* CTA */}
  <div className="mt-10 flex items-center gap-6">
    <Link href="/contact">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-[#FF4D1C] text-white px-8 py-4 uppercase tracking-wider text-sm font-semibold hover:opacity-90 transition"
      >
        Let’s Connect
      </motion.button>
    </Link>

    {/* Optional Small Text */}
    <span className="text-sm text-black/60 uppercase tracking-widest">
      Open to Conversations
    </span>
  </div>
</motion.div>

        {/* RIGHT IMAGE */}
<motion.div
  initial={{ opacity: 0, x: 60 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.7 }}
  className="relative flex justify-center md:justify-end"
>
  {/* Background Shape */}
  <div className="absolute top-10 right-10 w-[320px] h-[420px] md:w-[520px] md:h-[650px] bg-[#FF4D1C] rounded-3xl shadow-[0_20px_60px_rgba(255,77,28,0.35)]"></div>

  {/* Image */}
  <div className="relative z-10 w-[340px] md:w-[650px] lg:w-[750px]">
    <Image
      src="/krishanSEO.png"
      alt="Krishan Dev"
      width={1200}
      height={1200}
      priority
      className="w-full h-auto object-contain"
    />
  </div>
</motion.div>

      </div>
    </section>
  );
}