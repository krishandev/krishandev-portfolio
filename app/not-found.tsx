"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white overflow-hidden relative flex items-center justify-center px-6 py-20">
      
      {/* Background Glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-[#FF4D1C]/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-[#FF4D1C]/10 blur-[120px] rounded-full"></div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        
        {/* 404 */}
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-[120px] md:text-[220px] font-black leading-none tracking-tight text-[#FF4D1C]"
        >
          404
        </motion.h1>

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mt-4">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-6 text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          The page you’re looking for may have been moved,
          deleted, or never existed.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          
          {/* Home Button */}
          <Link href="/">
            <button className="group bg-[#FF4D1C] hover:bg-[#ff5d31] transition-all duration-300 px-8 py-4 rounded-full text-white font-medium flex items-center gap-2 shadow-[0_0_30px_rgba(255,77,28,0.3)]">
              <Home size={18} />
              Back to Homepage

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </Link>

          {/* Work Button */}
          <Link href="/work">
            <button className="group border border-white/15 hover:border-[#FF4D1C] hover:bg-[#FF4D1C]/10 transition-all duration-300 px-8 py-4 rounded-full text-white font-medium flex items-center gap-2">
              View My Work

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </Link>
        </div>

        {/* Small Text */}
        <p className="mt-12 text-sm text-white/40 tracking-wide uppercase">
          Krishan Dev • SEO • AI SEO • Web Development
        </p>
      </motion.div>
    </main>
  );
}