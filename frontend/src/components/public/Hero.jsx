import React from "react";
export default function HeroSection({ onToast }) {
  const featured = {
    id: 1,
    title: "The Future of Remote Work: Trends That Will Define 2025",
    category: "Technology",
    author: {
      name: "Sarah Mitchell",
      img: "https://picsum.photos/seed/auth1/80/80",
    },
    date: "Jan 15, 2025",
    readTime: "5 min",
    image: "https://picsum.photos/seed/blogremote/800/500",
    excerpt:
      "As companies embrace hybrid models, the landscape of work continues to evolve at an unprecedented pace.",
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* ── Background layers ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient blobs */}
        <div
          className="absolute top-32 left-[8%] w-72 h-72 rounded-full bg-brand-100/60 blur-3xl"
          style={{ animation: "float2 9s ease-in-out infinite" }}
        ></div>
        <div
          className="absolute bottom-20 right-[12%] w-80 h-80 rounded-full bg-sage-100/50 blur-3xl"
          style={{ animation: "float1 11s ease-in-out infinite" }}
        ></div>

        {/* Floating dots */}
        <div
          className="absolute top-[45%] left-[52%] w-4 h-4 rounded-full bg-brand-400/30"
          style={{ animation: "float2 5s ease-in-out infinite" }}
        ></div>
        <div
          className="absolute top-[25%] right-[28%] w-2.5 h-2.5 rounded-full bg-sage-400/40"
          style={{ animation: "float1 7s ease-in-out infinite" }}
        ></div>
        <div
          className="absolute bottom-[35%] left-[18%] w-3 h-3 rounded-full bg-brand-300/25"
          style={{ animation: "float2 8s ease-in-out infinite" }}
        ></div>

        {/* Dot grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #1A1A2E 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        ></div>

        {/* Noise grain overlay */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            animation: "grain 8s steps(10) infinite",
          }}
        ></div>
      </div>

      {/* ── Main content ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div>
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 bg-brand-50 text-brand-600 px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-brand-100"
              style={{ animation: "fadeInUp 0.6s ease" }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              Welcome to Blogosphere
            </div>

            {/* Headline */}
            <h1
              className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-black leading-[1.08] mb-6"
              style={{ animation: "fadeInUp 0.7s ease 0.1s both" }}
            >
              Stories That <span className="gradient-text">Inspire</span>, Ideas
              That <span className="text-ink-900">Transform</span>
            </h1>

            {/* Subtext */}
            <p
              className="text-ink-500 text-lg sm:text-xl leading-relaxed mb-8 max-w-lg"
              style={{ animation: "fadeInUp 0.7s ease 0.2s both" }}
            >
              Discover thoughtfully crafted articles on technology, design,
              lifestyle, and business. Written by experts, curated for the
              curious mind.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-3 mb-10"
              style={{ animation: "fadeInUp 0.7s ease 0.3s both" }}
            >
              <a
                href="#blogs"
                className="relative overflow-hidden group px-7 py-3.5 bg-brand-500 hover:bg-brand-600 text-black font-semibold rounded-xl transition-colors duration-200 text-sm flex items-center gap-2.5 shadow-lg shadow-brand-500/20 hover:shadow-brand-500/30"
              >
                <span className="relative z-10 flex items-center gap-2.5">
                  Explore Articles
                  <i className="fa-solid fa-arrow-right text-xs transition-transform duration-300 group-hover:translate-x-1"></i>
                </span>
              </a>
              <button
                onClick={() => onToast("Subscribed successfully!", "success")}
                className="px-7 py-3.5 border-2 border-ink-900 text-ink-900 hover:bg-ink-900 hover:text-black font-semibold rounded-xl transition-all duration-300 text-sm"
              >
                Subscribe Free
              </button>
            </div>

            {/* Stats row */}
            <div
              className="flex flex-wrap gap-x-8 gap-y-3"
              style={{ animation: "fadeInUp 0.7s ease 0.4s both" }}
            >
              {[
                { val: "500+", label: "Articles" },
                { val: "50K+", label: "Readers" },
                { val: "20+", label: "Writers" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-baseline gap-1.5">
                  <span className="text-xl font-bold text-ink-900">
                    {stat.val}
                  </span>
                  <span className="text-sm text-ink-400">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Featured card */}
          <div
            className="hidden lg:flex justify-center relative"
            style={{ animation: "fadeInUp 0.8s ease 0.35s both" }}
          >
            <div className="relative max-w-md w-full">
              {/* Background shadow card */}
              <div className="absolute inset-0 rounded-3xl bg-brand-100/70 rotate-3 translate-y-5"></div>

              {/* Main card */}
              <div
                className="relative rounded-2xl overflow-hidden shadow-2xl shadow-ink-900/10 border border-warm-200 bg-white"
                style={{ animation: "float1 6s ease-in-out infinite" }}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 via-ink-900/10 to-transparent"></div>

                  {/* Featured badge */}
                  <span className="absolute top-3 left-3 bg-brand-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md shadow-brand-500/30">
                    Featured
                  </span>

                  {/* Category on image */}
                  <span className="absolute bottom-3 left-3 bg-white/20 backdrop-blur-md text-white text-xs font-medium px-3 py-1 rounded-full border border-white/20">
                    {featured.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-bold text-ink-900 mb-2 leading-snug text-[15px]">
                    {featured.title}
                  </h3>
                  <p className="text-ink-400 text-sm leading-relaxed mb-4 line-clamp-2">
                    {featured.excerpt}
                  </p>

                  {/* Author row */}
                  <div className="flex items-center justify-between pt-4 border-t border-warm-200">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={featured.author.img}
                        alt={featured.author.name}
                        className="w-8 h-8 rounded-full object-cover ring-2 ring-warm-100"
                      />
                      <div>
                        <p className="text-sm font-medium text-ink-800">
                          {featured.author.name}
                        </p>
                        <p className="text-xs text-ink-400">{featured.date}</p>
                      </div>
                    </div>
                    <span className="text-xs text-ink-400 flex items-center gap-1">
                      <i className="fa-regular fa-clock"></i>
                      {featured.readTime}
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative floating mini card */}
              <div
                className="absolute -bottom-4 -left-8 bg-white rounded-xl shadow-xl shadow-ink-900/8 border border-warm-200 px-4 py-3 flex items-center gap-2.5"
                style={{ animation: "float2 5s ease-in-out infinite" }}
              >
                <div className="w-9 h-9 rounded-lg bg-sage-100 flex items-center justify-center">
                  <i className="fa-solid fa-book-open text-sage-600 text-sm"></i>
                </div>
                <div>
                  <p className="text-xs text-ink-400">Published</p>
                  <p className="text-sm font-bold text-ink-900">This Week</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
