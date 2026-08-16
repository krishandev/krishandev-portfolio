import Link from "next/link";

export const metadata = {
  title: "SEO Expert Locations | Noida, Delhi NCR, UP & India – Krishan Dev",

  description:
    "Explore the locations where Krishan Dev provides SEO expertise, including Noida, Greater Noida, Delhi NCR, Uttar Pradesh, Bareilly and businesses across India.",

  keywords: [
    "SEO Expert Noida",
    "SEO Expert Greater Noida",
    "SEO Expert Delhi NCR",
    "SEO Expert Delhi",
    "SEO Expert Uttar Pradesh",
    "SEO Expert Bareilly",
    "SEO Expert India",
    "AI SEO Expert",
    "AEO Expert",
    "GEO Expert",
    "Technical SEO Expert",
  ],

  alternates: {
    canonical: "https://www.krishandev.com/locations",
  },

  openGraph: {
    title: "SEO Expert Locations | Noida, Delhi NCR, UP & India – Krishan Dev",

    description:
      "SEO expertise across Noida, Greater Noida, Delhi NCR, Uttar Pradesh, Bareilly and India.",

    url: "https://www.krishandev.com/locations",

    siteName: "Krishan Dev",

    images: [
      {
        url: "https://avatars.githubusercontent.com/u/46001614?v=4",
        width: 1200,
        height: 630,
        alt: "Krishan Dev - SEO Expert",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "SEO Expert Locations | Krishan Dev",

    description:
      "SEO expertise across Noida, Greater Noida, Delhi NCR, Uttar Pradesh, Bareilly and India.",

    images: ["https://avatars.githubusercontent.com/u/46001614?v=4"],
  },

  robots: {
    index: true,
    follow: true,
  },
};


const locations = [
  {
    number: "01",
    location: "NOIDA",
    title: "SEO Expert in Noida",
    description:
      "Technical SEO, AI SEO, AEO and GEO strategies for businesses in Noida.",
    services: "Technical SEO · AI SEO · AEO · GEO",
  },
  {
    number: "02",
    location: "GREATER NOIDA",
    title: "SEO Expert in Greater Noida",
    description:
      "Technical SEO, AI SEO and SEO automation expertise for businesses in Greater Noida.",
    services: "Technical SEO · AI SEO · SEO Automation",
  },
  {
    number: "03",
    location: "DELHI NCR",
    title: "SEO Expert in Delhi NCR",
    description:
      "SEO strategy, Technical SEO and AI search optimization for businesses across Delhi NCR.",
    services: "SEO Strategy · Technical SEO · AI Search",
  },
  {
    number: "04",
    location: "DELHI",
    title: "SEO Expert in Delhi",
    description:
      "SEO strategy, Technical SEO, AI SEO and modern search optimization for businesses in Delhi.",
    services: "Technical SEO · AI SEO · AEO",
  },
  {
    number: "05",
    location: "UTTAR PRADESH",
    title: "SEO Expert in Uttar Pradesh",
    description:
      "Technical SEO, AI SEO and organic search strategies for businesses across Uttar Pradesh.",
    services: "SEO Strategy · Technical SEO · AI SEO",
  },
  {
    number: "06",
    location: "BAREILLY",
    title: "SEO Expert in Bareilly",
    description:
      "SEO consulting, Technical SEO and AI SEO expertise for businesses in Bareilly.",
    services: "SEO Consulting · Local SEO · AI SEO",
  },
  {
    number: "07",
    location: "INDIA",
    title: "SEO Expert in India",
    description:
      "Technical SEO, AI SEO, AEO, GEO and SEO automation expertise for businesses across India.",
    services: "SEO · AI SEO · AEO · GEO · Automation",
  },
];


const faqs = [
  {
    question: "Where is Krishan Dev based?",
    answer:
      "Krishan Dev is based in Greater Noida, Uttar Pradesh, and works with businesses across Noida, Delhi NCR, Uttar Pradesh and India.",
  },
  {
    question: "Do you provide SEO expertise in Noida?",
    answer:
      "Yes. Noida is one of the primary locations served, with expertise covering Technical SEO, AI SEO, AEO, GEO and SEO automation.",
  },
  {
    question: "Do you work with businesses outside Greater Noida?",
    answer:
      "Yes. SEO strategy and consulting can be provided to businesses across Delhi NCR, Uttar Pradesh and India depending on project requirements.",
  },
  {
    question: "What type of SEO do you specialize in?",
    answer:
      "I specialize in Technical SEO, AI SEO, AEO, GEO, SEO automation, SEO strategy and SEO-focused web development.",
  },
  {
    question: "Do you provide AI SEO and AEO expertise?",
    answer:
      "Yes. AI SEO, AEO and GEO are core areas of my modern search strategy alongside Technical SEO and content optimization.",
  },
  {
    question: "Do you work with businesses in Bareilly?",
    answer:
      "Yes. I work with businesses in Bareilly as well as other locations across Uttar Pradesh and India.",
  },
];


export default function LocationsPage() {
  return (
    <main className="overflow-hidden bg-[#f2f0eb] text-[#111]">

      {/* ==========================================
          HERO
      ========================================== */}

      <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">

          <div>
            <span className="mb-6 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#ff4a1c]">
              Locations
            </span>

            <h1 className="max-w-4xl text-[clamp(3.2rem,8vw,7rem)] font-extrabold leading-[0.86] tracking-[-0.06em]">
              SEO Expertise
              <br />
              Across Locations
            </h1>

            <p className="mt-8 max-w-2xl text-sm leading-7 text-[#625e59] sm:text-[15px]">
              Based in Greater Noida, Uttar Pradesh, I work with
              businesses across Noida, Delhi NCR, Uttar Pradesh and
              India, helping improve organic visibility through
              Technical SEO, AI SEO, AEO, GEO and SEO automation.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <a
                href="#locations"
                className="inline-flex min-h-12 items-center justify-center gap-5 rounded-md bg-[#ff4a1c] px-6 text-[10px] font-bold uppercase tracking-[0.1em] text-white transition duration-300 hover:-translate-y-1 hover:bg-[#e94218]"
              >
                Explore Locations
                <span className="text-lg">↗</span>
              </a>

              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-5 rounded-md border border-black/20 px-6 text-[10px] font-bold uppercase tracking-[0.1em] transition duration-300 hover:-translate-y-1 hover:bg-black hover:text-white"
              >
                Let&apos;s Connect
                <span className="text-lg">↗</span>
              </Link>

            </div>
          </div>


          {/* HERO VISUAL */}

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
              <span className="rotate-[-7deg] text-[8rem] font-black tracking-[-0.08em] text-black/5 xl:text-[10rem]">
                INDIA
              </span>
            </div>

            <div className="absolute left-[25%] top-[28%]">
              <LocationDot label="DELHI" />
            </div>

            <div className="absolute left-[55%] top-[39%]">
              <LocationDot label="NOIDA" />
            </div>

            <div className="absolute left-[42%] top-[58%]">
              <LocationDot label="GREATER NOIDA" />
            </div>

            <div className="absolute left-[65%] top-[70%]">
              <LocationDot label="UTTAR PRADESH" />
            </div>

          </div>

        </div>
      </section>


      {/* ==========================================
          ORANGE INTRO
      ========================================== */}

      <section className="bg-[#0b0b0b] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-28">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 rounded-2xl bg-[#ff4a1c] p-7 sm:p-10 lg:grid-cols-2 lg:gap-20 lg:p-16">

            <div>
              <span className="mb-6 block text-[10px] font-bold uppercase tracking-[0.18em]">
                Where I Work
              </span>

              <h2 className="text-[clamp(2.6rem,5vw,4.8rem)] font-extrabold leading-[0.9] tracking-[-0.055em]">
                Local relevance.
                <br />
                Technical depth.
                <br />
                Search expertise.
              </h2>
            </div>


            <div className="flex flex-col justify-end">

              <p className="max-w-xl text-sm leading-7 text-black/70 sm:text-[15px]">
                I&apos;m based in Greater Noida and work with
                businesses across local, regional and national
                markets. My SEO approach combines Technical SEO,
                AI search optimization, AEO, GEO, automation and
                performance-focused web development.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">

                {[
                  "NOIDA",
                  "GREATER NOIDA",
                  "DELHI NCR",
                  "UTTAR PRADESH",
                  "INDIA",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-md bg-black/10 px-4 py-3 text-[9px] font-extrabold tracking-[0.1em]"
                  >
                    {item}
                  </span>
                ))}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ==========================================
          LOCATION CARDS
      ========================================== */}

      <section
        id="locations"
        className="bg-[#0b0b0b] px-4 pb-20 pt-8 text-white sm:px-6 sm:pb-24 lg:px-10 lg:pb-32"
      >

        <div className="mx-auto max-w-7xl">

          {/* Heading */}

          <div className="mb-12 grid gap-7 md:grid-cols-[1fr_0.55fr] md:items-end lg:mb-16 lg:gap-20">

            <div>

              <span className="mb-6 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#ff4a1c]">
                Locations I Serve
              </span>

              <h2 className="text-[clamp(2.7rem,6vw,5.2rem)] font-extrabold leading-[0.88] tracking-[-0.055em]">
                SEO expertise across
                <br className="hidden sm:block" />
                {" "}local, regional and
                <br className="hidden sm:block" />
                {" "}national markets.
              </h2>

            </div>


            <p className="max-w-md text-sm leading-7 text-[#999590]">
              Explore the locations where I provide SEO consulting,
              Technical SEO, AI SEO, AEO, GEO and SEO automation
              expertise.
            </p>

          </div>


          {/* Cards */}

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">

            {locations.map((location) => (

              <article
                key={location.number}
                className={`
                  group relative flex min-h-[330px] min-w-0
                  flex-col overflow-hidden rounded-xl bg-[#ff4a1c]
                  p-6 text-black transition duration-300
                  hover:-translate-y-2
                  hover:shadow-[0_25px_50px_rgba(255,74,28,0.15)]
                  sm:min-h-[350px] sm:p-7
                  lg:min-h-[370px]
                  ${
                    location.number === "07"
                      ? "sm:col-span-2 lg:col-span-3 lg:min-h-[280px]"
                      : ""
                  }
                `}
              >

                {/* Top */}

                <div className="flex items-start justify-between">

                  <span className="text-[10px] font-extrabold tracking-[0.1em]">
                    {location.number}
                  </span>

                  <span
                    className="
                      flex h-9 w-9 shrink-0 items-center justify-center
                      rounded-full bg-black text-lg text-white
                      transition-transform duration-300
                      group-hover:rotate-45
                    "
                  >
                    ↗
                  </span>

                </div>


                {/* Content */}

                <div
                  className={`
                    mt-auto
                    ${
                      location.number === "07"
                        ? "lg:max-w-3xl"
                        : ""
                    }
                  `}
                >

                  <span className="mb-3 block text-[9px] font-extrabold uppercase tracking-[0.15em]">
                    {location.location}
                  </span>

                  <h3 className="max-w-full break-words text-[clamp(1.9rem,4vw,2.7rem)] font-extrabold leading-[0.92] tracking-[-0.045em]">
                    {location.title}
                  </h3>

                  <p className="mt-5 max-w-lg text-[13px] leading-6 text-black/65">
                    {location.description}
                  </p>

                </div>


                {/* Bottom */}

                <div className="mt-7 border-t border-black/20 pt-4 text-[8px] font-extrabold uppercase leading-5 tracking-[0.08em] text-black/70">
                  {location.services}
                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* ==========================================
          APPROACH
      ========================================== */}

      <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="mb-12 grid gap-7 md:grid-cols-[1fr_0.55fr] md:items-end lg:mb-16 lg:gap-20">

            <div>

              <span className="mb-6 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#ff4a1c]">
                My Approach
              </span>

              <h2 className="text-[clamp(2.7rem,6vw,5rem)] font-extrabold leading-[0.9] tracking-[-0.055em]">
                Local relevance backed
                <br className="hidden sm:block" />
                {" "}by technical and AI
                <br className="hidden sm:block" />
                {" "}search expertise.
              </h2>

            </div>

            <p className="max-w-md text-sm leading-7 text-[#69645f]">
              Location is only one part of an effective SEO strategy.
              The foundation is a technically strong website, useful
              content, clear search intent and expertise that works
              across traditional and AI-powered search.
            </p>

          </div>


          <div className="grid gap-3 md:grid-cols-3">

            {[
              {
                number: "01",
                title: "LOCAL SEARCH",
                description:
                  "Understand how customers discover businesses in specific geographic markets and optimize websites for relevant local search intent.",
              },
              {
                number: "02",
                title: "TECHNICAL SEO",
                description:
                  "Improve crawling, indexing, website architecture, performance, internal linking and search accessibility.",
              },
              {
                number: "03",
                title: "AI SEARCH",
                description:
                  "Build useful and structured content for modern search experiences including AI-powered search and answer engines.",
              },
            ].map((item) => (

              <article
                key={item.number}
                className="group relative flex min-h-[300px] flex-col rounded-xl bg-[#ff4a1c] p-6 sm:p-7 lg:min-h-[340px]"
              >

                <span className="text-[10px] font-extrabold">
                  {item.number}
                </span>

                <div className="mt-auto">

                  <h3 className="text-2xl font-extrabold tracking-[-0.04em]">
                    {item.title}
                  </h3>

                  <p className="mt-5 max-w-sm text-[13px] leading-6 text-black/65">
                    {item.description}
                  </p>

                </div>

                <span className="absolute bottom-6 right-6 flex h-9 w-9 items-center justify-center rounded-full bg-black text-lg text-white transition group-hover:rotate-45">
                  ↗
                </span>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* ==========================================
          EXPERTISE
      ========================================== */}

      <section className="bg-[#0b0b0b] px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-10 lg:py-32">

        <div className="mx-auto max-w-7xl">

          <span className="mb-6 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#ff4a1c]">
            SEO Expertise
          </span>

          <h2 className="max-w-4xl text-[clamp(2.7rem,6vw,5rem)] font-extrabold leading-[0.9] tracking-[-0.055em]">
            One SEO framework.
            <br />
            Multiple search markets.
          </h2>


          <div className="mt-14 grid gap-2 md:grid-cols-2">

            {[
              "Technical SEO",
              "AI SEO",
              "AEO",
              "GEO",
              "SEO Automation",
              "SEO Strategy",
              "SEO-focused Web Development",
              "Enterprise SEO",
            ].map((item, index) => (

              <div
                key={item}
                className="group grid min-h-[78px] grid-cols-[35px_1fr_25px] items-center gap-3 rounded-lg border border-white/10 px-5 transition duration-300 hover:bg-[#ff4a1c] hover:text-black sm:grid-cols-[45px_1fr_30px] sm:gap-5 sm:px-6"
              >

                <span className="text-[9px] font-bold text-[#ff4a1c] group-hover:text-black">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <strong className="text-sm sm:text-[15px]">
                  {item}
                </strong>

                <span className="text-lg text-[#ff4a1c] group-hover:text-black">
                  ↗
                </span>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ==========================================
          FAQ
      ========================================== */}

      <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32">

        <div className="mx-auto max-w-7xl">

          <span className="mb-6 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#ff4a1c]">
            FAQ
          </span>

          <h2 className="text-[clamp(2.7rem,6vw,5rem)] font-extrabold leading-[0.9] tracking-[-0.055em]">
            Frequently Asked
            <br />
            Questions
          </h2>


          <div className="mt-14 border-b border-black/15">

            {faqs.map((faq, index) => (

              <details
                key={faq.question}
                className="group border-t border-black/15"
              >

                <summary className="grid min-h-[80px] cursor-pointer list-none grid-cols-[30px_1fr_30px] items-center gap-3 py-4 sm:min-h-[90px] sm:grid-cols-[50px_1fr_30px] sm:gap-5">

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

                  <p className="max-w-3xl text-[13px] leading-7 text-[#69645f] sm:text-sm">
                    {faq.answer}
                  </p>

                </div>

              </details>

            ))}

          </div>

        </div>

      </section>


      {/* ==========================================
          CTA
      ========================================== */}

      <section className="bg-[#0b0b0b] px-4 py-24 text-white sm:px-6 lg:px-10 lg:py-36">

        <div className="mx-auto max-w-5xl text-center">

          <span className="mb-7 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#ff4a1c]">
            Let&apos;s Work Together
          </span>

          <h2 className="text-[clamp(3.5rem,9vw,7rem)] font-extrabold leading-[0.84] tracking-[-0.065em]">
            Looking for an
            <br />
            SEO Expert?
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-[#999590]">
            Let&apos;s discuss your website, search visibility and
            opportunities for organic growth.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-5 rounded-md bg-[#ff4a1c] px-6 text-[10px] font-bold uppercase tracking-[0.1em] transition hover:-translate-y-1"
            >
              Let&apos;s Connect
              <span className="text-lg">↗</span>
            </Link>

            <Link
              href="/expertise"
              className="inline-flex min-h-12 items-center justify-center gap-5 rounded-md border border-white/20 px-6 text-[10px] font-bold uppercase tracking-[0.1em] transition hover:bg-white hover:text-black"
            >
              View Expertise
              <span className="text-lg">↗</span>
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}


/* ==========================================
   SMALL LOCATION DOT
========================================== */

function LocationDot({ label }) {
  return (
    <div className="flex items-center gap-2 whitespace-nowrap">
      <span className="h-3 w-3 rounded-full bg-black shadow-[0_0_0_6px_rgba(0,0,0,0.08)]" />

      <span className="text-[8px] font-extrabold tracking-[0.1em]">
        {label}
      </span>
    </div>
  );
}