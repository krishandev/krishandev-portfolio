"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const contactCards = [
  {
    title: "WhatsApp",
    desc: "Connect directly for professional discussions, training, and networking.",
    cta: "Chat on WhatsApp",
    link: "https://wa.me/917053051182",
  },
  {
    title: "LinkedIn",
    desc: "Connect professionally and stay updated with SEO and AI insights.",
    cta: "View LinkedIn",
    link: "https://www.linkedin.com/in/krishan-dev/",
  },
  {
    title: "Twitter / X",
    desc: "Follow updates around SEO, AI SEO, automation, and digital growth.",
    cta: "Follow on X",
    link: "https://twitter.com/KrishanDevPrana",
  },
  {
    title: "YouTube",
    desc: "Watch practical SEO, AI SEO, and digital marketing insights.",
    cta: "Visit Channel",
    link: "https://www.youtube.com/channel/UC_Hn0JH9MpD4wXpldZVkBTQ",
  },
  {
    title: "Facebook",
    desc: "Stay connected for updates, discussions, and knowledge sharing.",
    cta: "Connect on Facebook",
    link: "https://www.facebook.com/krishan.pranami",
  },
];

const discussionTopics = [
  "SEO Strategy Discussions",
  "AI SEO & GEO",
  "Website Development",
  "Technical SEO",
  "Automation Systems",
  "Training & Mentorship",
];

const faqs = [
  {
    question: "What topics can we discuss?",
    answer:
      "SEO, AI SEO, technical optimization, website development, automation systems, digital growth, and training-related discussions.",
  },
  {
    question: "Do you provide SEO guidance?",
    answer:
      "Yes, I share practical SEO insights, technical guidance, and modern search strategies based on real-world experience.",
  },
  {
    question: "Can students connect for learning?",
    answer:
      "Yes, students and professionals can connect for practical learning, mentorship, and guidance.",
  },
  {
    question: "Do you discuss AI SEO?",
    answer:
      "Yes, AI SEO, AEO, GEO, semantic SEO, and AI-driven search visibility are major focus areas.",
  },
  {
    question: "Are training sessions available?",
    answer:
      "Yes, training discussions are open around SEO, AI SEO, website development, and automation.",
  },
  {
    question: "Can businesses discuss growth strategy?",
    answer:
      "Yes, businesses can connect for digital growth discussions, SEO strategy, and technical implementation conversations.",
  },
];

export default function ContactPage() {
  const [activeFAQ, setActiveFAQ] = useState(null);

  return (
    <main className="bg-[#0A0A0A] text-white overflow-hidden">

      {/* HERO */}
      <section className="px-6 md:px-10 pt-36 pb-24">
        <div className="max-w-[1280px] mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >

            <p className="uppercase text-xs tracking-[0.25em] text-white/50 mb-6">
              Contact
            </p>

            <h1 className="text-4xl md:text-6xl lg:text-[64px] font-bold leading-[0.98] tracking-[-0.04em] max-w-5xl">
              Let’s connect and discuss digital growth.
            </h1>

            <p className="mt-8 text-white/70 text-base md:text-lg leading-[1.9] max-w-3xl">
              Open to professional discussions around SEO, AI SEO,
              automation systems, website development, training,
              and knowledge sharing.
            </p>

            <div className="mt-10">
              <a
                href="https://wa.me/917053051182"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-[#FF4D1C] text-white px-8 py-4 rounded-full uppercase tracking-wider text-sm font-semibold hover:opacity-90 transition-all duration-300 hover:scale-[1.02]">
                  Chat on WhatsApp
                </button>
              </a>
            </div>

          </motion.div>

        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="bg-[#EDEBE7] text-[#0A0A0A] px-6 md:px-10 py-24">
        <div className="max-w-[1280px] mx-auto">

          <div className="mb-16">

            <p className="uppercase text-xs tracking-[0.25em] text-black/50 mb-5">
              Contact Information
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-[1.08] tracking-[-0.03em] max-w-4xl">
              Multiple ways to connect professionally and stay in touch.
            </h2>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

            {contactCards.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="bg-white border border-black/5 rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
              >

                <h3 className="text-2xl font-semibold tracking-tight">
                  {item.title}
                </h3>

                <p className="mt-5 text-black/70 leading-[1.8] text-base">
                  {item.desc}
                </p>

                <span className="inline-block mt-7 text-[#FF4D1C] text-sm font-semibold uppercase tracking-wider">
                  {item.cta} →
                </span>

              </motion.a>
            ))}

          </div>

        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="px-6 md:px-10 py-24">
        <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-20 items-start">

          {/* Left */}
          <div>

            <p className="uppercase text-xs tracking-[0.25em] text-white/50 mb-5">
              Contact Form
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-[1.05] tracking-[-0.03em]">
              Send a message for professional discussions and networking.
            </h2>

            <p className="mt-8 text-white/70 text-base md:text-lg leading-[1.9]">
              Whether it’s SEO, AI SEO, automation,
              website development, training,
              or digital growth discussions —
              feel free to connect.
            </p>

          </div>

          {/* Form */}
          <div className="bg-[#111111] border border-white/5 rounded-[32px] p-8 md:p-10">

            <form className="space-y-6">

              <div>
                <label className="block text-sm text-white/60 mb-3">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/30 outline-none focus:border-[#FF4D1C]"
                />
              </div>

              <div>
                <label className="block text-sm text-white/60 mb-3">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/30 outline-none focus:border-[#FF4D1C]"
                />
              </div>

              <div>
                <label className="block text-sm text-white/60 mb-3">
                  Company / Organization
                </label>

                <input
                  type="text"
                  placeholder="Company or organization name"
                  className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/30 outline-none focus:border-[#FF4D1C]"
                />
              </div>

              <div>
                <label className="block text-sm text-white/60 mb-3">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Enter subject"
                  className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/30 outline-none focus:border-[#FF4D1C]"
                />
              </div>

              <div>
                <label className="block text-sm text-white/60 mb-3">
                  Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Write your message..."
                  className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/30 outline-none focus:border-[#FF4D1C] resize-none"
                />
              </div>

              <button
                type="submit"
                className="bg-[#FF4D1C] text-white px-8 py-4 rounded-full uppercase tracking-wider text-sm font-semibold hover:opacity-90 transition-all duration-300 hover:scale-[1.02]"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>
      </section>

      {/* DISCUSSIONS */}
      <section className="bg-[#FF4D1C] px-6 md:px-10 py-24">
        <div className="max-w-[1280px] mx-auto">

          <div className="mb-16">

            <p className="uppercase text-xs tracking-[0.25em] text-white/70 mb-5">
              Professional Discussions
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-[1.08] tracking-[-0.03em] max-w-4xl">
              Open to discussions around modern search and digital growth systems.
            </h2>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

            {discussionTopics.map((item, index) => (
              <div
                key={index}
                className="bg-black/15 backdrop-blur-md border border-white/10 rounded-3xl p-8"
              >

                <h3 className="text-2xl font-semibold tracking-tight">
                  {item}
                </h3>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* RESPONSE */}
      <section className="bg-[#EDEBE7] text-[#0A0A0A] px-6 md:px-10 py-24">
        <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-20 items-start">

          <div>

            <p className="uppercase text-xs tracking-[0.25em] text-black/50 mb-5">
              Professional Networking
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-[1.05] tracking-[-0.03em]">
              Open to meaningful conversations and knowledge sharing.
            </h2>

          </div>

          <div className="space-y-8 text-black/70 text-base md:text-lg leading-[1.9]">

            <p>
              I’m open to professional networking,
              SEO discussions, AI SEO conversations,
              technical implementation talks,
              and knowledge sharing opportunities.
            </p>

            <p>
              Students, professionals, business owners,
              and marketing teams can connect
              for practical discussions and growth-focused insights.
            </p>

            <p>
              Conversations around automation systems,
              website performance, modern search evolution,
              and scalable digital growth are always welcome.
            </p>

          </div>

        </div>
      </section>

      {/* SOCIAL */}
      <section className="bg-[#111111] px-6 md:px-10 py-24">
        <div className="max-w-[1280px] mx-auto">

          <div className="mb-16">

            <p className="uppercase text-xs tracking-[0.25em] text-white/50 mb-5">
              Social Connections
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-[1.08] tracking-[-0.03em] max-w-4xl">
              Connect across social platforms and stay updated.
            </h2>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

            {[
              {
                title: "LinkedIn",
                link: "https://www.linkedin.com/in/krishan-dev/",
              },
              {
                title: "Twitter / X",
                link: "https://twitter.com/KrishanDevPrana",
              },
              {
                title: "YouTube",
                link: "https://www.youtube.com/channel/UC_Hn0JH9MpD4wXpldZVkBTQ",
              },
              {
                title: "Facebook",
                link: "https://www.facebook.com/krishan.pranami",
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black border border-white/5 rounded-3xl p-8 hover:border-[#FF4D1C]/40 transition duration-300"
              >

                <h3 className="text-2xl font-semibold tracking-tight">
                  {item.title}
                </h3>

                <span className="inline-block mt-6 text-[#FF4D1C] text-sm font-semibold uppercase tracking-wider">
                  Visit Profile →
                </span>

              </a>
            ))}

          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 md:px-10 pt-24 pb-32">
        <div className="max-w-[1000px] mx-auto">

          <div className="mb-16 text-center">

            <p className="uppercase text-xs tracking-[0.25em] text-white/50 mb-5">
              FAQ
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-[1.08] tracking-[-0.03em]">
              Frequently asked questions.
            </h2>

          </div>

          <div className="space-y-5">

            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#111111] border border-white/5 rounded-3xl overflow-hidden"
              >

                <button
                  onClick={() =>
                    setActiveFAQ(activeFAQ === index ? null : index)
                  }
                  className="w-full flex items-center justify-between px-8 py-6 text-left"
                >

                  <span className="text-lg md:text-xl font-medium">
                    {faq.question}
                  </span>

                  <span className="text-[#FF4D1C] text-2xl">
                    {activeFAQ === index ? "−" : "+"}
                  </span>

                </button>

                {activeFAQ === index && (
                  <div className="px-8 pb-8 text-white/70 text-base leading-[1.9]">
                    {faq.answer}
                  </div>
                )}

              </div>
            ))}

          </div>

        </div>
      </section>

    </main>
  );
}