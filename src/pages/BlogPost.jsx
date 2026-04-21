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
      <h2 className="text-3xl md:text-4xl font-bold text-[#001D3D] font-serif mt-16 mb-6 leading-tight">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl md:text-3xl font-bold text-[#001D3D] font-serif mt-12 mb-5 leading-tight">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-6 font-medium">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary pl-8 my-12 italic text-slate-700 text-xl md:text-2xl leading-relaxed font-serif">
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
      <section className="bg-[#3B2A5A] relative overflow-hidden py-24 md:py-32 lg:py-40">
        <div className="absolute inset-0 opacity-[0.12] pointer-events-none">
          <svg className="absolute top-0 right-0 w-1/2 h-full text-white" viewBox="0 0 100 100" preserveAspectRatio="none">
            <rect x="70" y="20" width="8" height="15" fill="currentColor" opacity="0.8" />
            <rect x="80" y="30" width="8" height="15" fill="currentColor" opacity="0.6" />
            <rect x="70" y="45" width="8" height="15" fill="currentColor" opacity="0.4" />
            <rect x="90" y="10" width="8" height="15" fill="currentColor" opacity="0.5" />
            <rect x="80" y="55" width="8" height="15" fill="currentColor" opacity="0.7" />
            <rect x="60" y="70" width="8" height="15" fill="currentColor" opacity="0.3" />
            <rect x="90" y="75" width="8" height="15" fill="currentColor" opacity="0.9" />
            <rect x="80" y="85" width="8" height="15" fill="currentColor" opacity="0.4" />
            <rect x="70" y="90" width="8" height="15" fill="currentColor" opacity="0.2" />
          </svg>
        </div>
        <Container className="relative z-10">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white font-serif tracking-tight">
              News
            </h1>
            <p className="text-white/80 text-lg md:text-xl md:text-2xl font-medium max-w-2xl leading-relaxed">
              Read up on the latest from Ubunifu Foundation and what's happening in our community.
            </p>
          </div>
        </Container>
      </section>

      {/* ── Main Content Layout ────────────────────────────────── */}
      <section className="py-16 md:py-24">
        <Container>
          {/* Navigation Row */}
          <div className="max-w-3xl mx-auto flex justify-end mb-12">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#001D3D] hover:text-primary transition-all group"
            >
              <ArrowLeft size={16} className="text-[#f59e0b] group-hover:-translate-x-1 transition-transform" />
              <span className="border-b-2 border-transparent hover:border-primary">Back to News</span>
            </Link>
          </div>

          <div className="max-w-3xl mx-auto flex flex-col gap-12">
            {/* Text Content */}
            <div className="space-y-10">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-[#001D3D] font-serif leading-[1.15]">
                  {post.title}
                </h2>
                {formattedDate && (
                  <p className="text-xs md:text-sm font-bold text-gray-400 uppercase tracking-widest">
                    {formattedDate}
                  </p>
                )}
              </div>

              {post.coverImage?.asset && (
                 <div className="rounded-2xl overflow-hidden shadow-xl shadow-black/5 ring-1 ring-black/5 mt-8 mb-8">
                   <img
                     src={urlFor(post.coverImage).width(1000).url()}
                     alt={post.title}
                     className="w-full h-auto object-cover"
                   />
                 </div>
              )}

              <div className="prose prose-slate prose-lg max-w-none">
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
              <div className="bg-slate-50 rounded-2xl p-8 space-y-4 mt-8">
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#f59e0b]">Primary Contributor</h4>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <User size={24} />
                  </div>
                  <div>
                    <p className="text-base font-bold text-[#001D3D]">{post.author || "Ubunifu Team"}</p>
                    <p className="text-xs text-gray-500 font-medium tracking-tight">Ubunifu Foundation</p>
                  </div>
                </div>
              </div>

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