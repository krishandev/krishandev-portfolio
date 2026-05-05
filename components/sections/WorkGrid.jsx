"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const works = [
  {
    title: "SEO Automation System",
    year: "2026",
    image: "/work1.jpg",
  },
  {
    title: "AI SEO Framework",
    year: "2025",
    image: "/work2.jpg",
  },
  {
    title: "Technical SEO Audit System",
    year: "2025",
    image: "/work3.jpg",
  },
  {
    title: "Next.js SEO Architecture",
    year: "2026",
    image: "/work4.jpg",
  },
  {
    title: "Content Clustering System",
    year: "2024",
    image: "/work5.jpg",
  },
  {
    title: "SEO Dashboard & Reporting",
    year: "2025",
    image: "/work6.jpg",
  },
];

export default function WorkGrid() {
  return (
    <section className="bg-[#FF4D1C] text-white px-6 md:px-10 py-20">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="uppercase text-xs tracking-widest text-white/80 mb-4">
            My Work
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Selected Work & Case Studies
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {works.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl bg-[#0A0A0A] cursor-pointer"
            >
              {/* Image */}
              <div className="overflow-hidden ">
                <Image
                  src={work.image}
                  alt={work.title}
                  width={600}
                  height={400}
                  className="w-full h-[250px] object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-4">
                <h3 className="text-lg font-semibold">{work.title}</h3>
                <p className="text-sm text-white/70">{work.year}</p>
              </div>

              {/* Bottom Info (visible by default) */}
              <div className="p-4">
                <h3 className="text-lg font-semibold">{work.title}</h3>
                <p className="text-sm text-white/70">{work.year}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}