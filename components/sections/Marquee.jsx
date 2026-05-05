"use client";

import Marquee from "react-fast-marquee";

const items = [
  "SEO",
  "AI SEO",
  "TECHNICAL SEO",
  "AUTOMATION",
  "NEXT.JS",
  "SEO STRATEGY",
];

export default function MarqueeBar() {
  return (
    <section className="bg-[#0A0A0A] py-3 border-y border-white/10 overflow-hidden">
      <Marquee
        speed={60}
        gradient={false}
        pauseOnHover={true}
        className="flex items-center"
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center mx-6 text-white uppercase tracking-widest text-sm md:text-base font-semibold"
          >
            <span>{item}</span>

            {/* Orange Dot Separator */}
            <span className="mx-6 w-2 h-2 bg-[#FF4D1C] rounded-full"></span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}