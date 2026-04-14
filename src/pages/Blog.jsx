import { useState, useEffect, useMemo } from "react";
import { Search, ChevronRight } from "lucide-react";
import Container from "@/components/layout/Container";
import BlogCard from "@/components/ui/BlogCard";
import usePageTitle from "@/hooks/usePageTitle";
import useScrollReveal from "@/hooks/useScrollReveal";
import { client } from "@/lib/sanity";

const IMPACT_AREAS = ["Youth", "Women", "Education", "Innovation", "Environment", "Richasses"];

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeArea, setActiveArea] = useState(null);

  usePageTitle("Stories & Insights");
  useScrollReveal([loading]);

  useEffect(() => {
    client
      .fetch(`*[_type == "post"] | order(publishedAt desc)`)
      .then((data) => setPosts(data || []))
      .catch((err) => {
        console.error("Error fetching posts:", err);
        setError("Failed to load blog posts. Please check your connection or CORS settings in Sanity.");
      })
      .finally(() => setLoading(false));
  }, []);

  // Client-side filter
  const filteredPosts = useMemo(() => {
    let result = posts;

    if (activeArea) {
      result = result.filter(
        (p) =>
          p.category?.toLowerCase() === activeArea.toLowerCase() ||
          (Array.isArray(p.tags) &&
            p.tags.some((t) => t.toLowerCase() === activeArea.toLowerCase()))
      );
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title?.toLowerCase().includes(q) ||
          p.excerpt?.toLowerCase().includes(q) ||
          p.category?.toLowerCase().includes(q)
      );
    }

    return result;
  }, [posts, activeArea, searchQuery]);

  const recentPosts = useMemo(() => posts.slice(0, 5), [posts]);

  return (
    <div className="min-h-screen bg-white">
      {/* ── Page Header ─────────────────────────────────────────── */}
      <section className="border-b border-gray-100 bg-white py-12 md:py-16">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-3">
            Stories &amp; Insights
          </h1>
          <p className="text-gray-500 text-base md:text-lg max-w-xl leading-relaxed">
            Exploring the impactful journeys of youth leadership, rural innovation,
            and sustainable development across Africa.
          </p>
        </Container>
      </section>

      {/* ── Main Layout ─────────────────────────────────────────── */}
      <section className="py-10 md:py-14">
        <Container>
          <div className="flex flex-col lg:flex-row gap-10 xl:gap-14">
            {/* ── LEFT: Card Grid ─────────────────────────────── */}
            <div className="flex-1 min-w-0">
              {loading ? (
                <div className="flex items-center justify-center py-32">
                  <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                </div>
              ) : error ? (
                <div className="text-center py-20 bg-red-50 rounded-2xl border border-red-100">
                  <p className="text-red-600 font-medium">{error}</p>
                </div>
              ) : filteredPosts.length === 0 ? (
                <div className="text-center py-20 bg-gray-50 rounded-2xl border border-gray-100">
                  <p className="text-gray-500 font-medium text-lg">No stories found.</p>
                  {(searchQuery || activeArea) && (
                    <button
                      onClick={() => { setSearchQuery(""); setActiveArea(null); }}
                      className="mt-4 text-sm text-primary underline underline-offset-2"
                    >
                      Clear filters
                    </button>
                  )}
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredPosts.map((post) => (
                    <div key={post.slug?.current} className="reveal">
                      <BlogCard post={post} className="h-full" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* ── RIGHT: Sidebar ──────────────────────────────── */}
            <aside className="w-full lg:w-72 xl:w-80 flex-shrink-0 space-y-8">
              {/* Search */}
              <div>
                <div className="relative">
                  <Search
                    size={15}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                  />
                  <input
                    type="text"
                    placeholder="Search stories..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-full border border-gray-200 bg-gray-50 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                    id="blog-search"
                  />
                </div>
              </div>

              {/* Impact Areas */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
                  Impact Areas
                </h3>
                <ul className="space-y-1.5">
                  {IMPACT_AREAS.map((area) => (
                    <li key={area}>
                      <button
                        onClick={() =>
                          setActiveArea(activeArea === area ? null : area)
                        }
                        className={`flex items-center gap-2 w-full text-left text-[14px] font-medium transition-colors py-0.5 ${
                          activeArea === area
                            ? "text-primary"
                            : "text-gray-600 hover:text-primary"
                        }`}
                      >
                        <ChevronRight
                          size={13}
                          className={`flex-shrink-0 transition-transform ${
                            activeArea === area ? "rotate-90 text-primary" : ""
                          }`}
                        />
                        {area}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Stories */}
              {recentPosts.length > 0 && (
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
                    Recent Stories
                  </h3>
                  <ul className="space-y-4">
                    {recentPosts.map((p) => (
                      <li key={p.slug?.current}>
                        <a
                          href={`/blog/${p.slug?.current}`}
                          className="group block"
                        >
                          <p className="text-[13px] font-semibold text-gray-800 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                            {p.title}
                          </p>
                          {p.category && (
                            <p className="text-[11px] text-gray-400 mt-0.5">
                              {p.category}
                              {p.publishedAt && (
                                <>
                                  {" · "}
                                  {new Date(p.publishedAt).toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                  })}
                                </>
                              )}
                            </p>
                          )}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Blog;