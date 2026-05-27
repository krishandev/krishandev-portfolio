import type { Metadata } from "next";
import { siteConfig } from "./seo";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },

  description: siteConfig.description,

  keywords: siteConfig.keywords,

  authors: [
    {
      name: siteConfig.creator,
    },
  ],

  creator: siteConfig.creator,

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: siteConfig.url,
  },
};

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://www.krishandev.com/#person",

      "name": "Krishan Dev",

      "url": "https://www.krishandev.com",

      "image": {
        "@type": "ImageObject",
        "url": "https://avatars.githubusercontent.com/u/46001614?v=4"
      },

      "sameAs": [
        "https://www.linkedin.com/in/krishan-dev/",
        "https://x.com/KrishanDevPrana",
        "https://www.youtube.com/channel/UC_Hn0JH9MpD4wXpldZVkBTQ",
        "https://www.facebook.com/krishan.pranami",
        "https://github.com/krishandev"
      ],

      "jobTitle":
        "SEO Expert, AI SEO Specialist, AEO Expert, GEO Expert & Next.js Developer"
    },

    {
      "@type": "WebSite",
      "@id": "https://www.krishandev.com/#website",

      "url": "https://www.krishandev.com",

      "name": "Krishan Dev",

      "publisher": {
        "@id": "https://www.krishandev.com/#person"
      },

      "inLanguage": "en-US"
    },

    {
      "@type": "ProfessionalService",
      "@id": "https://www.krishandev.com/#service",

      "name": "Krishan Dev",

      "url": "https://www.krishandev.com",

      "image": "https://avatars.githubusercontent.com/u/46001614?v=4",

      "description":
        "Professional SEO, AEO, GEO, AI SEO, Next.js development, and digital marketing consulting services.",

      "priceRange": "$$",

      "areaServed": {
        "@type": "Place",
        "name": "Worldwide"
      },

      "founder": {
        "@id": "https://www.krishandev.com/#person"
      }
    }
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={`${poppins.className} min-h-full flex flex-col`}>
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(schema),
  }}
/>
        <Navbar />
        {children}
        <Footer/>

      </body>
    </html>
  );
}
