"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white border-t border-white/5 overflow-hidden">

      {/* 🔥 TOP CTA */}
      <div className="px-6 md:px-10 py-24 border-b border-white/5">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-[1280px] mx-auto text-center"
        >

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-[64px] font-bold tracking-[-0.04em] leading-[1]">
            LET’S CONNECT
          </h2>

          {/* Description */}
          <p className="mt-6 text-white/65 text-base md:text-lg leading-[1.9] max-w-2xl mx-auto">
            Open to conversations, knowledge sharing, digital growth discussions,
            training opportunities, and meaningful professional connections
            in SEO, AI, automation, and modern marketing.
          </p>

          {/* CTA */}
          <a
  href="https://wa.me/917053051182"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="mt-10 bg-[#FF4D1C] text-white px-8 py-4 rounded-full uppercase tracking-wider text-sm font-semibold hover:opacity-90 transition-all duration-300 hover:scale-[1.02]">
    Chat on WhatsApp
  </button>
</a>

        </motion.div>
      </div>

      {/* 🧱 MAIN FOOTER */}
      <div className="px-6 md:px-10 py-20">
        <div className="max-w-[1280px] mx-auto grid md:grid-cols-3 gap-14">

          {/* About */}
          <div>

            <h3 className="text-2xl font-semibold tracking-tight mb-6">
              Krishan Dev
            </h3>

            <p className="text-white/65 text-base leading-[1.9]">
              SEO Manager specializing in Technical SEO,
              AI SEO (AEO & GEO), automation-driven growth systems,
              and performance-focused website development.
            </p>

            <p className="mt-5 text-white/45 text-base leading-[1.9]">
              Sharing practical insights, real-world frameworks,
              and scalable digital growth strategies.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-2xl font-semibold tracking-tight mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-base">

              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Expertise", path: "/expertise" },
                { name: "Works", path: "/work" },
                { name: "Blog", path: "/blog" },
                { name: "Training", path: "/training" },
                { name: "Connect", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-white/65 hover:text-[#FF4D1C] transition duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}

            </ul>

          </div>

          {/* Social Links */}
          <div>

            <h3 className="text-2xl font-semibold tracking-tight mb-6">
              Connect
            </h3>

            <ul className="space-y-4 text-base">

              <li>
                <a
                  href="https://www.linkedin.com/in/krishan-dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/65 hover:text-[#FF4D1C] transition duration-300"
                >
                  LinkedIn
                </a>
              </li>

              <li>
                <a
                  href="https://twitter.com/KrishanDevPrana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/65 hover:text-[#FF4D1C] transition duration-300"
                >
                  Twitter (X)
                </a>
              </li>

              <li>
                <a
                  href="https://www.youtube.com/channel/UC_Hn0JH9MpD4wXpldZVkBTQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/65 hover:text-[#FF4D1C] transition duration-300"
                >
                  YouTube
                </a>
              </li>

              <li>
                <a
                  href="https://www.facebook.com/krishan.pranami"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/65 hover:text-[#FF4D1C] transition duration-300"
                >
                  Facebook
                </a>
              </li>

            </ul>

          </div>

        </div>
      </div>

      {/* ⚖️ BOTTOM */}
      <div className="px-6 md:px-10 py-8 border-t border-white/5">
        <div className="max-w-[1280px] mx-auto text-center">

          <p className="text-sm md:text-base text-white/45">
            © {new Date().getFullYear()} Krishan Dev. All rights reserved.
          </p>

          <p className="mt-3 text-sm md:text-base text-white/35 leading-[1.8] max-w-3xl mx-auto">
            This website is created for personal branding,
            knowledge sharing, professional networking,
            training, and digital growth discussions.
          </p>

        </div>
      </div>

    </footer>
  );
}