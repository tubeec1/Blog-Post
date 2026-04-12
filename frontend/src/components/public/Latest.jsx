import React, { useState, useRef } from "react";

const posts = [
  {
    id: 1,
    category: "Technology",
    title: "The Future of AI in Everyday Life",
    excerpt:
      "How artificial intelligence is reshaping our daily routines and decision-making processes.",
    date: "Jun 15, 2025",
    image: "https://picsum.photos/seed/post1/600/400.jpg",
  },
  {
    id: 2,
    category: "Design",
    title: "Minimalism in Modern Web Design",
    excerpt:
      "Exploring the principles of clean, functional design that puts content first.",
    date: "Jun 12, 2025",
    image: "https://picsum.photos/seed/post2/600/400.jpg",
  },
  {
    id: 3,
    category: "Business",
    title: "Scaling Startups in 2025",
    excerpt:
      "Key strategies founders are using to grow their companies in a competitive landscape.",
    date: "Jun 10, 2025",
    image: "https://picsum.photos/seed/post3/600/400.jpg",
  },
  {
    id: 4,
    category: "Culture",
    title: "The Rise of Digital Nomad Communities",
    excerpt:
      "How remote work is creating new social structures and collaborative spaces worldwide.",
    date: "Jun 08, 2025",
    image: "https://picsum.photos/seed/post4/600/400.jpg",
  },
  {
    id: 5,
    category: "Science",
    title: "Breakthroughs in Quantum Computing",
    excerpt:
      "Recent advances that bring practical quantum applications closer to reality.",
    date: "Jun 05, 2025",
    image: "https://picsum.photos/seed/post5/600/400.jpg",
  },
  {
    id: 6,
    category: "Health",
    title: "Mental Health in the Digital Age",
    excerpt:
      "Understanding the impact of screen time on wellbeing and practical solutions.",
    date: "Jun 03, 2025",
    image: "https://picsum.photos/seed/post6/600/400.jpg",
  },
  {
    id: 7,
    category: "Finance",
    title: "Decentralized Finance Explained",
    excerpt:
      "A plain-language guide to DeFi protocols and what they mean for everyday users.",
    date: "Jun 01, 2025",
    image: "https://picsum.photos/seed/post7/600/400.jpg",
  },
  {
    id: 8,
    category: "Technology",
    title: "Edge Computing and IoT Integration",
    excerpt:
      "Why processing data closer to the source is becoming essential for smart devices.",
    date: "May 28, 2025",
    image: "https://picsum.photos/seed/post8/600/400.jpg",
  },
  {
    id: 9,
    category: "Design",
    title: "Color Theory for Dark Interfaces",
    excerpt:
      "How to choose palettes that feel vibrant and readable on dark backgrounds.",
    date: "May 25, 2025",
    image: "https://picsum.photos/seed/post9/600/400.jpg",
  },
  {
    id: 10,
    category: "Business",
    title: "Building Remote-First Teams",
    excerpt:
      "Lessons from companies that have embraced fully distributed workforces.",
    date: "May 22, 2025",
    image: "https://picsum.photos/seed/post10/600/400.jpg",
  },
  {
    id: 11,
    category: "Culture",
    title: "The Evolution of Podcasting",
    excerpt:
      "From niche hobby to mainstream media — how audio content transformed over a decade.",
    date: "May 20, 2025",
    image: "https://picsum.photos/seed/post11/600/400.jpg",
  },
  {
    id: 12,
    category: "Science",
    title: "Mars Colonization: Progress & Challenges",
    excerpt:
      "Where we stand on the technical and biological hurdles of living on another planet.",
    date: "May 18, 2025",
    image: "https://picsum.photos/seed/post12/600/400.jpg",
  },
  {
    id: 13,
    category: "Health",
    title: "Wearable Tech and Preventive Care",
    excerpt:
      "How smartwatches and biosensors are shifting healthcare toward early detection.",
    date: "May 15, 2025",
    image: "https://picsum.photos/seed/post13/600/400.jpg",
  },
  {
    id: 14,
    category: "Finance",
    title: "Sustainable Investing Trends",
    excerpt:
      "ESG funds are outperforming — here's what smart money is paying attention to.",
    date: "May 12, 2025",
    image: "https://picsum.photos/seed/post14/600/400.jpg",
  },
  {
    id: 15,
    category: "Technology",
    title: "WebAssembly Beyond the Browser",
    excerpt:
      "How WASM is breaking out of web pages and into servers, edge nodes, and embedded systems.",
    date: "May 10, 2025",
    image: "https://picsum.photos/seed/post15/600/400.jpg",
  },
  {
    id: 16,
    category: "Design",
    title: "Typography Trends for 2025",
    excerpt:
      "Variable fonts, kinetic type, and the return of serif — what's shaping visual language.",
    date: "May 08, 2025",
    image: "https://picsum.photos/seed/post16/600/400.jpg",
  },
  {
    id: 17,
    category: "Business",
    title: "The Creator Economy Matures",
    excerpt:
      "As the gold rush fades, creators are building sustainable businesses with real infrastructure.",
    date: "May 05, 2025",
    image: "https://picsum.photos/seed/post17/600/400.jpg",
  },
  {
    id: 18,
    category: "Science",
    title: "Gene Editing and Ethical Boundaries",
    excerpt:
      "CRISPR advances raise new questions about where science should draw the line.",
    date: "May 02, 2025",
    image: "https://picsum.photos/seed/post18/600/400.jpg",
  },
];

const POSTS_PER_PAGE = 6;

const categoryColors = {
  Technology: "bg-blue-500/10 text-blue-400",
  Design: "bg-purple-500/10 text-purple-400",
  Business: "bg-amber-500/10 text-amber-400",
  Culture: "bg-pink-500/10 text-pink-400",
  Science: "bg-emerald-500/10 text-emerald-400",
  Health: "bg-red-500/10 text-red-400",
  Finance: "bg-cyan-500/10 text-cyan-400",
};

export default function Latest() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [slideDirection, setSlideDirection] = useState("");
  const containerRef = useRef(null);

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const currentPosts = posts.slice(
    currentPage * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE + POSTS_PER_PAGE,
  );

  const goTo = (direction) => {
    if (isSliding) return;
    const nextPage =
      direction === "next"
        ? (currentPage + 1) % totalPages
        : (currentPage - 1 + totalPages) % totalPages;

    setSlideDirection(direction);
    setIsSliding(true);

    setTimeout(() => {
      setCurrentPage(nextPage);
      setSlideDirection("");
    }, 300);

    setTimeout(() => {
      setIsSliding(false);
    }, 600);
  };

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-500/[0.07] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-500 mb-3 block">
              From the Blog
            </span>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-black">
              Latest Posts
            </h2>
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => goTo("prev")}
              disabled={isSliding}
              className="group w-11 h-11 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm flex items-center justify-center hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Previous posts"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-neutral-400 group-hover:text-white transition-colors duration-300"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={() => goTo("next")}
              disabled={isSliding}
              className="group w-11 h-11 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm flex items-center justify-center hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Next posts"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-neutral-400 group-hover:text-white transition-colors duration-300"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Posts Grid */}
        <div ref={containerRef} className="relative overflow-hidden">
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-300 ease-in-out ${
              slideDirection === "next"
                ? "opacity-0 translate-x-8"
                : slideDirection === "prev"
                  ? "opacity-0 -translate-x-8"
                  : "opacity-100 translate-x-0"
            }`}
          >
            {currentPosts.map((post) => (
              <article
                key={post.id}
                className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm overflow-hidden hover:border-white/[0.15]  transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
              >
                {/* Image */}
                <div className="relative aspect-[3/2] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                  {/* Category badge */}
                  <span
                    className={`absolute top-4 left-4 text-[11px] font-medium tracking-wide uppercase px-3 py-1 rounded-full backdrop-blur-md border border-white/10 ${
                      categoryColors[post.category] || "bg-white/10 text-white"
                    }`}
                  >
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <time className="text-xs text-neutral-500 font-medium tracking-wide">
                    {post.date}
                  </time>
                  <h3 className="mt-2 text-lg font-medium text-black leading-snug group-hover:text-black transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm text-neutral-400 leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Read more */}
                  <div className="mt-5 flex items-center gap-2 text-sm font-medium text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300">
                    <span>Read more</span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Pagination dots */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (isSliding) return;
                setSlideDirection(i > currentPage ? "next" : "prev");
                setIsSliding(true);
                setTimeout(() => {
                  setCurrentPage(i);
                  setSlideDirection("");
                }, 300);
                setTimeout(() => setIsSliding(false), 600);
              }}
              disabled={isSliding}
              className={`rounded-full transition-all duration-300 disabled:cursor-not-allowed ${
                i === currentPage
                  ? "w-8 h-2 bg-indigo-500"
                  : "w-2 h-2 bg-gray-500 hover:bg-gray-900"
              }`}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
