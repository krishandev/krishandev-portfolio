import Link from "next/link";

export const metadata = {
  title: "SEO Expert in Noida | Technical SEO, AI SEO & AEO – Krishan Dev",

  description:
    "Krishan Dev is an SEO professional based in Greater Noida with 11+ years of experience in Technical SEO, AI SEO, AEO, GEO, SEO automation and search strategy.",

  keywords: [
    "SEO Expert in Noida",
    "SEO Expert Noida",
    "SEO Professional Noida",
    "SEO Specialist Noida",
    "Technical SEO Expert Noida",
    "AI SEO Expert Noida",
    "AEO Expert Noida",
    "GEO Expert Noida",
    "SEO Expert Greater Noida",
    "SEO Expert Delhi NCR",
    "SEO Automation Expert",
    "AI SEO Expert India",
  ],

  alternates: {
    canonical:
      "https://www.krishandev.com/locations/seo-expert-noida",
  },

  openGraph: {
    title:
      "SEO Expert in Noida | Technical SEO, AI SEO & AEO – Krishan Dev",

    description:
      "Explore Krishan Dev's professional SEO expertise in Technical SEO, AI SEO, AEO, GEO, SEO automation and modern search.",

    url:
      "https://www.krishandev.com/locations/seo-expert-noida",

    siteName: "Krishan Dev",

    images: [
      {
        url: "https://avatars.githubusercontent.com/u/46001614?v=4",
        width: 1200,
        height: 630,
        alt: "Krishan Dev - SEO Expert in Noida",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "SEO Expert in Noida | Krishan Dev",

    description:
      "SEO professional based in Greater Noida specializing in Technical SEO, AI SEO, AEO, GEO and SEO automation.",

    images: [
      "https://avatars.githubusercontent.com/u/46001614?v=4",
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};


const expertise = [
  {
    number: "01",
    title: "Technical SEO",
    description:
      "Technical SEO expertise covering crawling, indexing, site architecture, internal linking, JavaScript SEO, performance and search accessibility.",
  },
  {
    number: "02",
    title: "AI SEO",
    description:
      "SEO expertise focused on AI-powered search experiences, generative search and changing user search behavior.",
  },
  {
    number: "03",
    title: "AEO",
    description:
      "Answer Engine Optimization focused on structuring useful information for answer-focused and conversational search experiences.",
  },
  {
    number: "04",
    title: "GEO",
    description:
      "Generative Engine Optimization focused on improving how brands, entities and information can be understood across generative search systems.",
  },
  {
    number: "05",
    title: "SEO Automation",
    description:
      "SEO automation using Python and modern tools to streamline repetitive analysis, technical checks, reporting and SEO workflows.",
  },
  {
    number: "06",
    title: "SEO Strategy",
    description:
      "Strategic SEO planning based on search intent, technical foundations, content opportunities, competition and organic search growth.",
  },
];


const professionalAreas = [
  {
    number: "01",
    title: "SEARCH STRATEGY",
    description:
      "Developing SEO strategies that connect technical foundations, content, search intent and business objectives.",
  },
  {
    number: "02",
    title: "TECHNICAL OPTIMIZATION",
    description:
      "Analyzing websites to identify technical issues affecting crawling, indexing, architecture, performance and organic visibility.",
  },
  {
    number: "03",
    title: "AI SEARCH",
    description:
      "Exploring how SEO, AEO and GEO can adapt websites and content for AI-powered search and answer experiences.",
  },
  {
    number: "04",
    title: "SEO AUTOMATION",
    description:
      "Building automation workflows and SEO tools with Python to reduce repetitive manual analysis and improve efficiency.",
  },
];


const faqs = [
  {
    question: "Who is the SEO Expert in Noida on this page?",
    answer:
      "Krishan Dev is an SEO professional based in Greater Noida with 11+ years of experience in SEO, Technical SEO, AI SEO, AEO, GEO, SEO automation and search strategy.",
  },
  {
    question: "Where is Krishan Dev based?",
    answer:
      "Krishan Dev is based in Greater Noida, Uttar Pradesh, with professional relevance to Noida and the wider Delhi NCR region.",
  },
  {
    question: "What is Krishan Dev's SEO expertise?",
    answer:
      "His areas of expertise include Technical SEO, AI SEO, AEO, GEO, SEO strategy, Local SEO, SEO automation and SEO-focused web development.",
  },
  {
    question: "Does Krishan Dev specialize in AI SEO?",
    answer:
      "Yes. AI SEO is one of his areas of professional specialization, including work related to AI-powered search, AEO, GEO and modern search experiences.",
  },
  {
    question: "What is AEO in SEO?",
    answer:
      "AEO, or Answer Engine Optimization, focuses on structuring useful information so that it can better serve answer-focused and conversational search experiences.",
  },
  {
    question: "What is GEO in SEO?",
    answer:
      "GEO, or Generative Engine Optimization, focuses on improving the clarity, usefulness and contextual understanding of information across generative search experiences.",
  },
];


export default function SEOExpertNoidaPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.krishandev.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Locations",
        item: "https://www.krishandev.com/locations",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "SEO Expert in Noida",
        item:
          "https://www.krishandev.com/locations/seo-expert-noida",
      },
    ],
  };


  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };


  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Krishan Dev",
    url: "https://www.krishandev.com/",
    jobTitle: "SEO Expert",

    description:
      "SEO professional based in Greater Noida specializing in Technical SEO, AI SEO, AEO, GEO, SEO automation and search strategy.",

    knowsAbout: [
      "Search Engine Optimization",
      "Technical SEO",
      "AI SEO",
      "Answer Engine Optimization",
      "Generative Engine Optimization",
      "SEO Automation",
      "Local SEO",
      "SEO Strategy",
      "Web Development",
      "Next.js",
    ],

    areaServed: [
      {
        "@type": "City",
        name: "Noida",
      },
      {
        "@type": "City",
        name: "Greater Noida",
      },
      {
        "@type": "AdministrativeArea",
        name: "Delhi NCR",
      },
      {
        "@type": "Country",
        name: "India",
      },
    ],
  };


  return (
    <>
      {/* ==========================================
          STRUCTURED DATA
      ========================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />


      <main className="overflow-hidden bg-[#f2f0eb] text-[#111]">


        {/* ==========================================
            HERO
        ========================================== */}

        <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-28">

          <div className="mx-auto max-w-7xl">

            {/* Breadcrumb */}

            <nav
              aria-label="Breadcrumb"
              className="mb-10 flex flex-wrap items-center gap-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#77736e] sm:mb-14"
            >
              <Link
                href="/"
                className="transition hover:text-[#ff4a1c]"
              >
                Home
              </Link>

              <span>/</span>

              <Link
                href="/locations"
                className="transition hover:text-[#ff4a1c]"
              >
                Locations
              </Link>

              <span>/</span>

              <span className="text-[#111]">
                SEO Expert in Noida
              </span>
            </nav>


            <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">

              <div>

                <span className="mb-6 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#ff4a1c]">
                  SEO EXPERT · NOIDA
                </span>


                <h1 className="max-w-5xl text-[clamp(3.3rem,8vw,7rem)] font-extrabold leading-[0.85] tracking-[-0.06em]">
                  SEO Expert
                  <br />
                  in Noida
                </h1>


                <p className="mt-8 max-w-2xl text-sm leading-7 text-[#625e59] sm:text-[15px]">
                  Krishan Dev is an SEO professional based in
                  Greater Noida with 11+ years of experience in
                  search engine optimization, Technical SEO,
                  AI SEO, AEO, GEO and SEO automation.
                </p>


                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#625e59] sm:text-[15px]">
                  His professional experience covers SEO
                  strategy, technical optimization, organic
                  search, AI-focused search initiatives and
                  SEO automation across different industries.
                </p>


                <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                  <Link
                    href="/about"
                    className="inline-flex min-h-12 items-center justify-center gap-5 rounded-md bg-[#ff4a1c] px-6 text-[10px] font-bold uppercase tracking-[0.1em] text-white transition duration-300 hover:-translate-y-1 hover:bg-[#e94218]"
                  >
                    About Krishan Dev
                    <span className="text-lg">↗</span>
                  </Link>


                  <Link
                    href="/blog"
                    className="inline-flex min-h-12 items-center justify-center gap-5 rounded-md border border-black/20 px-6 text-[10px] font-bold uppercase tracking-[0.1em] transition duration-300 hover:-translate-y-1 hover:bg-black hover:text-white"
                  >
                    Explore SEO Insights
                    <span className="text-lg">↗</span>
                  </Link>

                </div>

              </div>


              {/* Noida Visual */}

              <div className="relative hidden aspect-square overflow-hidden rounded-3xl bg-[#ff4a1c] lg:block">

                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
                    backgroundSize: "45px 45px",
                  }}
                />

                <div className="absolute inset-0 flex items-center justify-center">

                  <div className="text-center">

                    <span className="block text-[7rem] font-black leading-none tracking-[-0.08em] text-black/10 xl:text-[9rem]">
                      NOIDA
                    </span>

                    <span className="mt-5 block text-[9px] font-bold uppercase tracking-[0.25em]">
                      UTTAR PRADESH · INDIA
                    </span>

                  </div>

                </div>

                <div className="absolute left-[20%] top-[25%] h-3 w-3 rounded-full bg-black shadow-[0_0_0_7px_rgba(0,0,0,0.08)]" />

                <div className="absolute right-[25%] top-[42%] h-3 w-3 rounded-full bg-black shadow-[0_0_0_7px_rgba(0,0,0,0.08)]" />

                <div className="absolute bottom-[25%] left-[40%] h-3 w-3 rounded-full bg-black shadow-[0_0_0_7px_rgba(0,0,0,0.08)]" />

              </div>

            </div>

          </div>

        </section>


        {/* ==========================================
            DIRECT ANSWER / AEO
        ========================================== */}

        <section className="bg-[#0b0b0b] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-10 lg:py-28">

          <div className="mx-auto max-w-5xl">

            <span className="mb-6 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#ff4a1c]">
              SEO EXPERT IN NOIDA
            </span>


            <h2 className="max-w-4xl text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold leading-[0.92] tracking-[-0.05em]">
              Who is Krishan Dev?
            </h2>


            <div className="mt-8 max-w-4xl text-sm leading-8 text-[#aaa5a0] sm:text-[15px]">

              <p>
                Krishan Dev is an SEO professional based in
                Greater Noida with 11+ years of experience in
                search engine optimization. His areas of
                expertise include Technical SEO, AI SEO, AEO,
                GEO, SEO automation, search strategy and
                SEO-focused web development.
              </p>


              <p className="mt-5">
                His work focuses on understanding how websites,
                content and technical infrastructure interact
                with search engines and emerging AI-powered
                search systems. This includes traditional
                organic search as well as newer answer and
                generative search experiences.
              </p>


              <p className="mt-5">
                Based in Greater Noida, his professional
                location is closely connected with Noida and
                the wider Delhi NCR region.
              </p>

            </div>

          </div>

        </section>


        {/* ==========================================
            PROFESSIONAL EXPERTISE
        ========================================== */}

        <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32">

          <div className="mx-auto max-w-7xl">

            <div className="mb-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">

              <div>

                <span className="mb-6 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#ff4a1c]">
                  PROFESSIONAL EXPERTISE
                </span>


                <h2 className="text-[clamp(2.7rem,5vw,5rem)] font-extrabold leading-[0.9] tracking-[-0.055em]">
                  SEO expertise
                  <br />
                  built through
                  <br />
                  experience.
                </h2>

              </div>


              <div className="grid gap-3 sm:grid-cols-2">

                {expertise.map((item) => (

                  <article
                    key={item.number}
                    className="group flex min-h-[310px] flex-col rounded-xl bg-[#ff4a1c] p-6 transition duration-300 hover:-translate-y-2 sm:p-7"
                  >

                    <div className="flex items-start justify-between">

                      <span className="text-[10px] font-extrabold">
                        {item.number}
                      </span>

                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-lg text-white transition duration-300 group-hover:rotate-45">
                        ↗
                      </span>

                    </div>


                    <div className="mt-auto">

                      <h3 className="text-2xl font-extrabold tracking-[-0.04em]">
                        {item.title}
                      </h3>

                      <p className="mt-4 text-[13px] leading-6 text-black/65">
                        {item.description}
                      </p>

                    </div>

                  </article>

                ))}

              </div>

            </div>

          </div>

        </section>


        {/* ==========================================
            NOIDA PROFESSIONAL CONTEXT
        ========================================== */}

        <section className="bg-[#0b0b0b] px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-10 lg:py-32">

          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-24">

            <div>

              <span className="mb-6 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#ff4a1c]">
                NOIDA · DELHI NCR
              </span>


              <h2 className="text-[clamp(2.7rem,5vw,5rem)] font-extrabold leading-[0.9] tracking-[-0.055em]">
                A professional
                <br />
                perspective from
                <br />
                Noida.
              </h2>

            </div>


            <div className="text-sm leading-8 text-[#aaa5a0] sm:text-[15px]">

              <p>
                Noida is part of one of India&apos;s major
                technology, startup and business ecosystems.
                This creates an interesting search environment
                where businesses compete for visibility across
                local, regional, national and increasingly
                AI-driven search experiences.
              </p>


              <p className="mt-6">
                My professional connection with Greater Noida
                provides a local perspective while my SEO
                experience extends beyond a single geographic
                market.
              </p>


              <p className="mt-6">
                The focus is on understanding search intent,
                technical performance, useful content and how
                information can be discovered across modern
                search systems.
              </p>

            </div>

          </div>

        </section>


        {/* ==========================================
            AI SEO / AEO / GEO
        ========================================== */}

        <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32">

          <div className="mx-auto max-w-7xl">

            <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">

              <div>

                <span className="mb-6 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#ff4a1c]">
                  AI SEO · AEO · GEO
                </span>


                <h2 className="text-[clamp(2.7rem,5vw,5rem)] font-extrabold leading-[0.9] tracking-[-0.055em]">
                  Understanding the
                  <br />
                  next generation
                  <br />
                  of search.
                </h2>

              </div>


              <div className="text-sm leading-8 text-[#625e59] sm:text-[15px]">

                <p>
                  Search is evolving beyond traditional results
                  pages. AI-powered interfaces, answer engines
                  and generative search are changing how users
                  discover and consume information.
                </p>


                <p className="mt-6">
                  AI SEO focuses on adapting SEO thinking to
                  these changes. AEO focuses on useful,
                  answer-oriented information, while GEO explores
                  how content and entities can be represented
                  across generative search experiences.
                </p>


                <p className="mt-6">
                  These areas complement rather than replace
                  strong technical SEO fundamentals.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ==========================================
            PROFESSIONAL AREAS
        ========================================== */}

        <section className="bg-[#ff4a1c] px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32">

          <div className="mx-auto max-w-7xl">

            <span className="mb-6 block text-[10px] font-bold uppercase tracking-[0.18em]">
              AREAS OF PROFESSIONAL FOCUS
            </span>


            <h2 className="max-w-5xl text-[clamp(2.7rem,6vw,5rem)] font-extrabold leading-[0.88] tracking-[-0.055em]">
              From technical foundations
              <br />
              to modern AI search.
            </h2>


            <div className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-4">

              {professionalAreas.map((item) => (

                <article
                  key={item.number}
                  className="min-h-[300px] rounded-xl bg-black p-6 text-white sm:p-7"
                >

                  <span className="text-[10px] font-extrabold text-[#ff4a1c]">
                    {item.number}
                  </span>


                  <div className="mt-20">

                    <h3 className="text-xl font-extrabold tracking-[-0.03em]">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-[13px] leading-6 text-white/55">
                      {item.description}
                    </p>

                  </div>

                </article>

              ))}

            </div>

          </div>

        </section>


        {/* ==========================================
            EXPERIENCE
        ========================================== */}

        <section className="bg-[#0b0b0b] px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-10 lg:py-32">

          <div className="mx-auto max-w-7xl">

            <span className="mb-6 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#ff4a1c]">
              EXPERIENCE
            </span>


            <h2 className="max-w-4xl text-[clamp(2.7rem,6vw,5rem)] font-extrabold leading-[0.88] tracking-[-0.055em]">
              11+ years of SEO,
              <br />
              technology and
              <br />
              search experience.
            </h2>


            <div className="mt-14 grid grid-cols-2 gap-3 lg:grid-cols-4">

              <div className="rounded-xl border border-white/10 p-6 sm:p-8">

                <strong className="block text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                  11+
                </strong>

                <span className="mt-3 block text-[8px] font-bold uppercase tracking-[0.12em] text-[#999590]">
                  YEARS EXPERIENCE
                </span>

              </div>


              <div className="rounded-xl border border-white/10 p-6 sm:p-8">

                <strong className="block text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                  SEO
                </strong>

                <span className="mt-3 block text-[8px] font-bold uppercase tracking-[0.12em] text-[#999590]">
                  CORE EXPERTISE
                </span>

              </div>


              <div className="rounded-xl border border-white/10 p-6 sm:p-8">

                <strong className="block text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                  AI
                </strong>

                <span className="mt-3 block text-[8px] font-bold uppercase tracking-[0.12em] text-[#999590]">
                  MODERN SEARCH
                </span>

              </div>


              <div className="rounded-xl border border-white/10 p-6 sm:p-8">

                <strong className="block text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                  WEB
                </strong>

                <span className="mt-3 block text-[8px] font-bold uppercase tracking-[0.12em] text-[#999590]">
                  DEVELOPMENT
                </span>

              </div>

            </div>

          </div>

        </section>


        {/* ==========================================
            EXISTING WEBSITE PAGES
        ========================================== */}

        <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28">

          <div className="mx-auto max-w-7xl">

            <span className="mb-6 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#ff4a1c]">
              EXPLORE
            </span>


            <h2 className="max-w-4xl text-[clamp(2.7rem,6vw,5rem)] font-extrabold leading-[0.88] tracking-[-0.055em]">
              Explore more
              <br />
              about my work.
            </h2>


            <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

              {/* HOME */}

              <Link
                href="/"
                className="group rounded-xl border border-black/10 p-6 transition duration-300 hover:-translate-y-2 hover:bg-black hover:text-white sm:p-8"
              >

                <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#ff4a1c]">
                  01 · HOME
                </span>

                <h3 className="mt-14 text-2xl font-extrabold tracking-[-0.04em]">
                  Krishan Dev
                </h3>

                <p className="mt-3 text-[13px] leading-6 text-[#69645f] group-hover:text-white/60">
                  Explore the main professional profile and
                  website overview.
                </p>

                <span className="mt-6 block text-lg">
                  ↗
                </span>

              </Link>


              {/* ABOUT */}

              <Link
                href="/about"
                className="group rounded-xl border border-black/10 p-6 transition duration-300 hover:-translate-y-2 hover:bg-black hover:text-white sm:p-8"
              >

                <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#ff4a1c]">
                  02 · ABOUT
                </span>

                <h3 className="mt-14 text-2xl font-extrabold tracking-[-0.04em]">
                  About Krishan Dev
                </h3>

                <p className="mt-3 text-[13px] leading-6 text-[#69645f] group-hover:text-white/60">
                  Learn more about my professional background,
                  experience and expertise.
                </p>

                <span className="mt-6 block text-lg">
                  ↗
                </span>

              </Link>


              {/* SERVICES */}

              <Link
                href="/services"
                className="group rounded-xl border border-black/10 p-6 transition duration-300 hover:-translate-y-2 hover:bg-black hover:text-white sm:p-8"
              >

                <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#ff4a1c]">
                  03 · EXPERTISE
                </span>

                <h3 className="mt-14 text-2xl font-extrabold tracking-[-0.04em]">
                  SEO Expertise
                </h3>

                <p className="mt-3 text-[13px] leading-6 text-[#69645f] group-hover:text-white/60">
                  Explore SEO, AI SEO, Technical SEO and other
                  areas of professional expertise.
                </p>

                <span className="mt-6 block text-lg">
                  ↗
                </span>

              </Link>


              {/* BLOG */}

              <Link
                href="/blog"
                className="group rounded-xl border border-black/10 p-6 transition duration-300 hover:-translate-y-2 hover:bg-black hover:text-white sm:p-8"
              >

                <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#ff4a1c]">
                  04 · BLOG
                </span>

                <h3 className="mt-14 text-2xl font-extrabold tracking-[-0.04em]">
                  SEO & AI Insights
                </h3>

                <p className="mt-3 text-[13px] leading-6 text-[#69645f] group-hover:text-white/60">
                  Read insights and articles about SEO, AI SEO,
                  AEO, GEO and search.
                </p>

                <span className="mt-6 block text-lg">
                  ↗
                </span>

              </Link>


              {/* TRAINING */}

              <Link
                href="/training"
                className="group rounded-xl border border-black/10 p-6 transition duration-300 hover:-translate-y-2 hover:bg-black hover:text-white sm:p-8"
              >

                <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#ff4a1c]">
                  05 · TRAINING
                </span>

                <h3 className="mt-14 text-2xl font-extrabold tracking-[-0.04em]">
                  SEO Training
                </h3>

                <p className="mt-3 text-[13px] leading-6 text-[#69645f] group-hover:text-white/60">
                  Explore SEO learning and professional knowledge
                  resources.
                </p>

                <span className="mt-6 block text-lg">
                  ↗
                </span>

              </Link>


              {/* CONTACT */}

              <Link
                href="/contact"
                className="group rounded-xl border border-black/10 p-6 transition duration-300 hover:-translate-y-2 hover:bg-black hover:text-white sm:p-8"
              >

                <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#ff4a1c]">
                  06 · CONTACT
                </span>

                <h3 className="mt-14 text-2xl font-extrabold tracking-[-0.04em]">
                  Get in Touch
                </h3>

                <p className="mt-3 text-[13px] leading-6 text-[#69645f] group-hover:text-white/60">
                  Connect regarding professional opportunities,
                  knowledge sharing or other relevant enquiries.
                </p>

                <span className="mt-6 block text-lg">
                  ↗
                </span>

              </Link>

            </div>

          </div>

        </section>


        {/* ==========================================
            FAQ
        ========================================== */}

        <section className="bg-[#0b0b0b] px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-10 lg:py-32">

          <div className="mx-auto max-w-7xl">

            <span className="mb-6 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#ff4a1c]">
              FAQ
            </span>


            <h2 className="text-[clamp(2.7rem,6vw,5rem)] font-extrabold leading-[0.88] tracking-[-0.055em]">
              SEO Expert in Noida
              <br />
              FAQs
            </h2>


            <div className="mx-auto mt-14 max-w-5xl border-b border-white/10">

              {faqs.map((faq, index) => (

                <details
                  key={faq.question}
                  className="group border-t border-white/10"
                >

                  <summary className="grid min-h-[80px] cursor-pointer list-none grid-cols-[30px_1fr_25px] items-center gap-3 py-4 sm:min-h-[90px] sm:grid-cols-[50px_1fr_30px] sm:gap-5">

                    <span className="text-[9px] font-bold text-[#ff4a1c]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <strong className="text-sm font-semibold sm:text-base">
                      {faq.question}
                    </strong>

                    <span className="text-2xl font-light transition duration-300 group-open:rotate-45">
                      +
                    </span>

                  </summary>


                  <div className="pb-7 pl-[42px] pr-4 sm:pl-[70px]">

                    <p className="max-w-4xl text-[13px] leading-7 text-[#999590] sm:text-sm">
                      {faq.answer}
                    </p>

                  </div>

                </details>

              ))}

            </div>

          </div>

        </section>


        {/* ==========================================
            FINAL CTA
        ========================================== */}

        <section className="bg-[#0b0b0b] px-4 py-24 text-white sm:px-6 lg:px-10 lg:py-36">

          <div className="mx-auto max-w-5xl text-center">

            <span className="mb-7 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#ff4a1c]">
              PROFESSIONAL PROFILE
            </span>


            <h2 className="text-[clamp(3.3rem,9vw,7rem)] font-extrabold leading-[0.84] tracking-[-0.065em]">
              Explore my
              <br />
              SEO expertise.
            </h2>


            <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-[#999590]">
              Explore my professional background, SEO expertise,
              technical knowledge and insights into modern search.
            </p>


            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

              <Link
                href="/about"
                className="inline-flex min-h-12 items-center justify-center gap-5 rounded-md bg-[#ff4a1c] px-6 text-[10px] font-bold uppercase tracking-[0.1em] transition hover:-translate-y-1"
              >
                About Me
                <span className="text-lg">↗</span>
              </Link>


              <Link
                href="/blog"
                className="inline-flex min-h-12 items-center justify-center gap-5 rounded-md border border-white/20 px-6 text-[10px] font-bold uppercase tracking-[0.1em] transition hover:bg-white hover:text-black"
              >
                Read My Insights
                <span className="text-lg">↗</span>
              </Link>

            </div>

          </div>

        </section>

      </main>
    </>
  );
}