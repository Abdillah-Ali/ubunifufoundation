import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "@/components/layout/Container";
import BlogCard from "@/components/ui/BlogCard";
import usePageTitle from "@/hooks/usePageTitle";
import useScrollReveal from "@/hooks/useScrollReveal";
import { client } from "@/lib/sanity";
import { cn } from "@/lib/utils";

const IMPACT_AREAS = ["Youth", "Women", "Education", "Innovation", "Environment", "Richasses"];

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeArea, setActiveArea] = useState(null);

  usePageTitle("News & Stories");
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

  const BackgroundPatterns = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large cluster top right */}
      <svg className="absolute -top-[20%] -right-[10%] w-[70%] h-[140%] opacity-[0.12] text-white" viewBox="0 0 100 100">
        {[45, 40, 35, 30, 25, 20].map((r, i) => (
          <circle 
            key={i} 
            cx="80" cy="30" r={r} 
            fill="none" 
            stroke="currentColor" 
            strokeWidth={0.5 + i * 0.2} 
            strokeDasharray={`${10 + i * 5} ${5 + i * 2}`} 
          />
        ))}
      </svg>
      
      {/* Cluster bottom left */}
      <svg className="absolute -bottom-[30%] -left-[15%] w-[80%] h-[160%] opacity-[0.08] text-white" viewBox="0 0 100 100">
        {[55, 48, 41, 34, 27].map((r, i) => (
          <circle 
            key={i} 
            cx="20" cy="80" r={r} 
            fill="none" 
            stroke="currentColor" 
            strokeWidth={0.4 + i * 0.3} 
            strokeDasharray={`${8 + i * 4} ${4 + i * 2}`} 
          />
        ))}
      </svg>

      {/* Center cluster */}
      <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[120%] opacity-[0.06] text-white" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="20 10" />
        <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="15 5" />
        <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="8 4" />
      </svg>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* ── Page Header: High-Impact Redesign ──────────────────── */}
      <section className="bg-[#14B8A6] relative flex flex-col items-start overflow-hidden py-24 md:py-32 lg:py-40">
        <BackgroundPatterns />
        <Container className="relative z-10">
          <div className="max-w-3xl space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1]">
              News & Media
            </h1>
            <p className="text-white/90 text-lg md:text-xl lg:text-2xl font-medium leading-relaxed max-w-2xl">
              Read the latest from Ubunifu Foundation, stay updated with our impact,
              and connect with our social innovation experts.
            </p>
            <div className="pt-4">
              <Link to="/contact">
                <Button className="rounded-full bg-[#f59e0b] hover:bg-[#d97706] text-white px-10 py-7 h-auto text-lg font-bold shadow-xl shadow-black/10 transition-all hover:scale-105">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Main Layout ─────────────────────────────────────────── */}
      <section className="py-16 md:py-24">
        <Container>
          {/* ── Card Grid ─────────────────────────────────────────── */}
          <div className="min-w-0">
            {loading ? (
              <div className="flex items-center justify-center py-32">
                <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
              </div>
            ) : error ? (
              <div className="text-center py-24 bg-red-50 rounded-[2.5rem] border border-red-100">
                <p className="text-red-600 font-bold text-lg">{error}</p>
              </div>
            ) : filteredPosts.length === 0 ? (
              <div className="text-center py-24 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                <p className="text-slate-500 font-bold text-xl mb-6">No stories found matching your selection.</p>
                {(searchQuery || activeArea) && (
                  <button
                    onClick={() => { setSearchQuery(""); setActiveArea(null); }}
                    className="text-sm font-bold text-primary underline underline-offset-4 decoration-2 hover:text-primary/70 transition-colors"
                  >
                    Clear all filters
                  </button>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
                {filteredPosts.map((post) => (
                  <div key={post.slug?.current} className="reveal">
                    <BlogCard post={post} className="h-full" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Blog;