"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const blogs = [
  {
    title: "What is AI SEO (AEO & GEO)?",
    date: "20 Jan 2026",
    image: "/blog1.jpg",
    type: "image",
  },
  {
    title: "Future of Search in 2026",
    date: "19 Jan 2026",
    type: "text",
  },
  {
    title: "How I automate SEO using n8n",
    date: "18 Jan 2026",
    image: "/blog2.jpg",
    type: "image",
  },
  {
    title: "Technical SEO Checklist (Real-world)",
    date: "17 Jan 2026",
    type: "text",
  },
  {
    title: "How to rank in AI answers",
    date: "16 Jan 2026",
    image: "/blog3.jpg",
    type: "image",
  },
  {
    title: "SEO roadmap for beginners",
    date: "15 Jan 2026",
    type: "text",
  },
];

export default function BlogPreview() {
  return (
    <section className="bg-[#0A0A0A] text-white px-6 md:px-10 py-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="uppercase text-xs tracking-widest text-white/60 mb-4">
            My Blog
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Insights, Ideas & SEO Strategies
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href="/blog">
                <div className="group cursor-pointer rounded-xl overflow-hidden">
                  
                  {/* IMAGE CARD */}
                  {blog.type === "image" && (
                    <div className="relative w-full aspect-[4/3] overflow-hidden">
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        className="object-cover object-top transition duration-500 group-hover:scale-110"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-4">
                        <h3 className="text-lg font-semibold">
                          {blog.title}
                        </h3>
                        <p className="text-sm text-white/70">
                          {blog.date}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* TEXT CARD */}
                  {blog.type === "text" && (
                    <div className="bg-[#FF4D1C] p-6 h-full flex flex-col justify-between transition duration-300 group-hover:scale-[1.03]">
                      <div>
                        <h3 className="text-lg font-semibold">
                          {blog.title}
                        </h3>
                      </div>

                      <p className="text-sm mt-4 text-white/90">
                        {blog.date}
                      </p>
                    </div>
                  )}

                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}