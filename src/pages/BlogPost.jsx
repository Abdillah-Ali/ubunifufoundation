import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArrowLeft, Calendar, User, Tag, Facebook, Twitter, Linkedin } from "lucide-react";
import Container from "@/components/layout/Container";
import BlogCard from "@/components/ui/BlogCard";
import usePageTitle from "@/hooks/usePageTitle";
import { client, urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";

/* ─── PortableText component overrides ─────────────────────── */
const ptComponents = {
  types: {
    image: ({ value }) => (
      <div className="my-8 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
        <img
          src={urlFor(value).width(900).url()}
          alt={value.alt || "Blog image"}
          className="w-full h-auto"
        />
      </div>
    ),
  },
  block: {
    h2: ({ children }) => (
      <h2 className="text-3xl md:text-4xl font-bold text-[#1a103d] font-serif mt-16 mb-6 leading-tight">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl md:text-3xl font-bold text-[#1a103d] font-serif mt-12 mb-5 leading-tight">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-6 font-medium">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-[6px] border-[#f59e0b] pl-8 my-12 italic text-slate-700 text-xl md:text-2xl leading-relaxed font-serif bg-slate-50/50 py-4 pr-4 rounded-r-lg">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-outside pl-6 mb-8 space-y-4 text-base md:text-lg text-slate-600 leading-relaxed font-medium">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-outside pl-6 mb-8 space-y-4 text-base md:text-lg text-slate-600 leading-relaxed font-medium">
        {children}
      </ol>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-bold text-slate-900">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary underline decoration-2 underline-offset-4 hover:text-primary/80 transition-colors font-bold"
      >
        {children}
      </a>
    ),
  },
};

/* ─── Share Button ──────────────────────────────────────────── */
const ShareRow = ({ url, title }) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Share</span>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank" rel="noopener noreferrer"
        aria-label="Share on Facebook"
        className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-blue-600 hover:text-white transition-colors"
      >
        <Facebook size={14} />
      </a>
      <a
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank" rel="noopener noreferrer"
        aria-label="Share on Twitter"
        className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-sky-500 hover:text-white transition-colors"
      >
        <Twitter size={14} />
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank" rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-blue-700 hover:text-white transition-colors"
      >
        <Linkedin size={14} />
      </a>
    </div>
  );
};

/* ─── Main Component ────────────────────────────────────────── */
const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setPost(null);

    client
      .fetch(`*[_type == "post" && slug.current == $slug][0]`, { slug })
      .then((data) => setPost(data))
      .catch((err) => console.error("Error fetching post:", err))
      .finally(() => setLoading(false));

    client
      .fetch(
        `*[_type == "post" && slug.current != $slug] | order(publishedAt desc)[0...3]`,
        { slug }
      )
      .then((data) => setRelatedPosts(data || []))
      .catch(console.error);
  }, [slug]);

  usePageTitle(post?.title || (loading ? "Loading…" : "Post Not Found"));

  /* Loading */
  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  /* Not found */
  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-3xl font-bold mb-6 text-gray-900 font-serif">Post Not Found</h1>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-bold shadow-lg transition-transform hover:scale-105"
          >
            <ArrowLeft size={16} /> Back to News
          </Link>
        </div>
      </div>
    );
  }

  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }).toUpperCase()
    : null;

  const tags = Array.isArray(post.tags) ? post.tags : [];
  const pageUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <div className="min-h-screen bg-white">
      {/* ── Purple Hero Section ────────────────────────────────── */}
      <section className="bg-[#0f0925] relative overflow-hidden py-24 md:py-32 border-b border-white/5">
        <div className="absolute inset-0 pointer-events-none">
          <svg className="w-full h-full opacity-[0.07]" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="slantedLines" x="0" y="0" width="10" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(-15)">
                <line x1="2" y1="0" x2="2" y2="10" stroke="white" strokeWidth="4" />
                <line x1="7" y1="10" x2="7" y2="20" stroke="white" strokeWidth="4" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#slantedLines)" />
          </svg>
        </div>
        <Container className="relative z-10">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-white font-serif tracking-tight leading-none">
              News
            </h1>
            <div className="w-20 h-1.5 bg-[#f59e0b] rounded-full mt-8 mb-6" />
            <p className="text-white/70 text-lg md:text-xl font-medium max-w-2xl leading-relaxed">
              Read up on the latest from Ubunifu Foundation and what's happening in our community.
            </p>
          </div>
        </Container>
      </section>

      {/* ── Main Content Layout ────────────────────────────────── */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_350px] lg:grid-cols-[1fr_450px] gap-12 md:gap-16 lg:gap-24">
            {/* Left Column: Content */}
            <div className="space-y-10">
              {/* Mobile-only Navigation */}
              <div className="md:hidden">
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-3 text-xs font-bold text-[#f59e0b] hover:text-[#f59e0b]/80 transition-all group tracking-widest uppercase"
                >
                  <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                  Back to News
                </Link>
              </div>

              <div className="space-y-6">
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#1a103d] font-serif leading-[1.1] tracking-tight">
                  {post.title}
                </h2>
                {formattedDate && (
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">
                    {formattedDate}
                  </p>
                )}
              </div>

              {/* Mobile-only Featured Image */}
              {post.coverImage?.asset && (
                 <div className="md:hidden rounded-2xl overflow-hidden shadow-2xl shadow-black/10 ring-1 ring-black/5">
                   <img
                     src={urlFor(post.coverImage).width(1000).url()}
                     alt={post.title}
                     className="w-full h-auto object-cover"
                   />
                 </div>
              )}

              <div className="prose prose-slate prose-lg max-w-none prose-headings:font-serif prose-headings:text-[#1a103d] prose-p:text-slate-600 prose-p:leading-relaxed">
                {post.body ? (
                   <PortableText value={post.body} components={ptComponents} />
                ) : (
                  <p className="text-gray-500 italic">No content available.</p>
                )}
              </div>

              {/* Tags & Sharing */}
              <div className="pt-12 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8">
                {tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-50 text-gray-500 text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-gray-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <ShareRow url={pageUrl} title={post.title} />
              </div>

              {/* Author context */}
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100/50 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div className="space-y-4">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f59e0b]">Primary Contributor</h4>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#1a103d]/5 flex items-center justify-center text-[#1a103d]">
                      <User size={24} />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-[#1a103d]">{post.author || "Ubunifu Team"}</p>
                      <p className="text-xs text-gray-500 font-medium tracking-tight">Ubunifu Foundation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Desktop Sidebar */}
            <div className="hidden md:flex flex-col gap-12 sticky top-24 h-fit">
              <div>
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-4 text-xs font-bold text-[#1a103d] hover:text-[#f59e0b] transition-all group tracking-widest uppercase"
                >
                  <span className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-[#f59e0b] group-hover:bg-[#f59e0b] group-hover:text-white transition-all duration-300">
                    <ArrowLeft size={18} />
                  </span>
                  Back to News
                </Link>
              </div>

              {post.coverImage?.asset && (
                 <div className="rounded-[2rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] ring-1 ring-black/5">
                   <img
                     src={urlFor(post.coverImage).width(800).url()}
                     alt={post.title}
                     className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                   />
                 </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* ── Related Stories ─────────────────────────────────────── */}
      {relatedPosts.length > 0 && (
        <section className="py-24 bg-slate-50 border-t border-slate-100">
          <Container>
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#001D3D] font-serif tracking-tight">
                Related Stories
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {relatedPosts.map((p) => (
                <BlogCard key={p.slug?.current} post={p} className="h-full" />
              ))}
            </div>
          </Container>
        </section>
      )}
    </div>
  );
};

export default BlogPost;