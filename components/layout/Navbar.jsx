"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Me", path: "/about" },
  { name: "Expertise", path: "/expertise" },
  { name: "Works", path: "/work" },
  { name: "Blog", path: "/blog" },
  { name: "Training", path: "/training" },
  { name: "Connect", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll background effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Header */}
      <header
        className="fixed top-0 left-0 w-full z-50 bg-black shadow-lg transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="text-white font-bold text-xl tracking-wide">
            KRISHAN
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wide">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;

              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`relative transition ${
                    isActive ? "text-[#FF4D1C]" : "text-white"
                  }`}
                >
                  {link.name}

                  {/* Underline Animation */}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-[#FF4D1C] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              );
            })}
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden text-white text-2xl"
            aria-label="Open Menu"
          >
            ☰
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-white text-3xl"
              aria-label="Close Menu"
            >
              ✕
            </button>

            {/* Menu Links */}
            <nav className="flex flex-col gap-8 text-2xl uppercase">
              {navLinks.map((link) => {
                const isActive = pathname === link.path;

                return (
                  <Link
                    key={link.name}
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`transition ${
                      isActive ? "text-[#FF4D1C]" : "text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}