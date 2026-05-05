"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white">
      
      {/* 🔥 TOP CTA */}
      <div className="px-6 md:px-10 py-20 border-b border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            LET’S CONNECT
          </h2>

          <p className="mt-4 text-white/70 max-w-xl mx-auto">
            Open to conversations, knowledge sharing, and meaningful opportunities 
            in SEO, AI, and digital growth.
          </p>

          <Link href="/contact">
            <button className="mt-8 bg-[#FF4D1C] px-6 py-3 text-white font-medium hover:opacity-90 transition">
              Start a Conversation
            </button>
          </Link>
        </motion.div>
      </div>

      {/* 🧱 MIDDLE GRID */}
      <div className="px-6 md:px-10 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          
          {/* About */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Krishan Dev</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              SEO Manager specializing in Technical SEO, AI SEO (AEO & GEO), and 
              automation-driven growth strategies. Sharing real-world insights, 
              frameworks, and practical knowledge.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Expertise", path: "/expertise" },
                { name: "Work", path: "/work" },
                { name: "Blog", path: "/blog" },
                { name: "Training", path: "/training" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-white/70 hover:text-[#FF4D1C] transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.linkedin.com/in/krishan-dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-[#FF4D1C] transition"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/KrishanDevPrana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-[#FF4D1C] transition"
                >
                  Twitter (X)
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UC_Hn0JH9MpD4wXpldZVkBTQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-[#FF4D1C] transition"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/krishan.pranami"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-[#FF4D1C] transition"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ⚖️ BOTTOM */}
      <div className="px-6 md:px-10 py-6 border-t border-white/10 text-center text-sm text-white/50">
        <p>© {new Date().getFullYear()} Krishan Dev. All rights reserved.</p>
        <p className="mt-2">
          This website is for personal branding, knowledge sharing, and professional networking purposes.
        </p>
      </div>
    </footer>
  );
}