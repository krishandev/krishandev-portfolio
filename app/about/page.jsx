

import Link from "next/link";
import { motion } from "framer-motion";
import AboutPageClient from "../../components/pages/about/AboutPageClient";


export const metadata = {
  title: "About Krishan Dev | SEO Expert & Web Developer",

  description:
  "Krishan Dev helps brands grow with SEO, AI SEO, AEO, GEO, technical SEO, and Next.js web development for better rankings and visibility.",

  keywords: [
    "Krishan Dev",
    "SEO Expert",
    "AI SEO",
    "AEO Expert",
    "GEO Expert",
    "Next.js Developer",
  ],

  alternates: {
    canonical: "https://www.krishandev.com/about",
  },

  openGraph: {
    title: "About Krishan Dev | SEO Expert & Next.js Developer",

    description:
      "Learn more about Krishan Dev, SEO strategist and Next.js developer.",

    url: "https://www.krishandev.com/about",

    siteName: "Krishan Dev",

    images: [
      {
        url: "https://avatars.githubusercontent.com/u/46001614?v=4",
        width: 1200,
        height: 630,
        alt: "Krishan Dev",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "About Krishan Dev | SEO Expert",

    description:
      "Learn more about Krishan Dev, SEO strategist and web developer.",

    images: ["https://avatars.githubusercontent.com/u/46001614?v=4"],
  },

  robots: {
    index: true,
    follow: true,
  },
};



export default function AboutPage() {
  return (
   <AboutPageClient/> 
  );
}