"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const works = [
  {
    title: "SEO Tools Platform",
    category: "SEO Tools Website",
    image: "/work1a.png",
    link: "https://seo-tools-xi.vercel.app/",
  },
  {
    title: "Modern Ecommerce Website",
    category: "Ecommerce Development",
    image: "/work2a.png",
    link: "https://ecommerce-website-gamma-drab.vercel.app/",
  },
  {
    title: "Business Listing Platform",
    category: "Directory Website",
    image: "/work3a.png",
    link: "https://business-listing-seven.vercel.app/",
  },
  {
    title: "Manmohan Panda Portfolio",
    category: "Personal Branding Website",
    image: "/work4a.png",
    link: "https://manmohan-panda.vercel.app/",
  },
  {
    title: "NPS International School",
    category: "School Website",
    image: "/work5a.png",
    link: "https://npsinternationalschool.in/",
  },
];

export default function WorkGrid() {
  return (
    <section className="bg-[#FF4D1C] text-white px-6 md:px-10 py-24">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          {/* Label */}
          <p className="uppercase text-xs tracking-[0.25em] text-white/80 mb-5">
            My Work
          </p>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-[1.1] tracking-[-0.03em] max-w-4xl">
            Selected projects built for real-world businesses.
          </h2>

          {/* Description */}
          <p className="mt-6 text-white/80 text-base md:text-lg leading-[1.8] max-w-3xl">
            A selection of websites, SEO-focused platforms, and digital experiences
            designed for businesses, brands, and organizations.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
          {works.map((work, index) => (
            <motion.a
              key={index}
              href={work.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="group bg-[#0A0A0A] rounded-3xl overflow-hidden border border-black/10 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition-all duration-300"
            >
              
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-cover object-top transition duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-7">
                
                {/* Category */}
                <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                  {work.category}
                </p>

                {/* Title */}
                <h3 className="text-2xl font-semibold mt-4 leading-tight tracking-tight">
                  {work.title}
                </h3>

                {/* CTA */}
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm text-white/60">
                    Live Website
                  </span>

                  <div className="w-10 h-10 rounded-full bg-[#FF4D1C] flex items-center justify-center text-lg transition duration-300 group-hover:rotate-45">
                    ↗
                  </div>
                </div>

              </div>

            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}