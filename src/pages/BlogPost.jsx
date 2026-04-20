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
  const [recentPosts, setRecentPosts] = useState([]);
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

    client
      .fetch(`*[_type == "post"] | order(publishedAt desc)[0...5]`)
      .then((data) => setRecentPosts(data || []))
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
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-gray-900">Post Not Found</h1>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-primary hover:underline text-sm font-semibold"
          >
            <ArrowLeft size={14} /> Back to News
          </Link>
        </div>
      </div>
    );
  }

  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : null;

  const tags = Array.isArray(post.tags) ? post.tags : [];
  const pageUrl = typeof window !== "undefined" ? window.location.href : "";

  /* Pull-quote: first excerpt sentence as sidebar highlight */
  const pullQuote = post.excerpt
    ? post.excerpt.split(".")[0] + "."
    : "The connections we build are the foundation for a resilient community.";

  return (
    <div className="min-h-screen bg-white">
      {/* ── Back link ──────────────────────────────────────────── */}
      <div className="bg-white">
        <Container className="py-8 md:py-12">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-primary transition-colors group"
          >
            <ArrowLeft
              size={14}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Back to News & Media
          </Link>
        </Container>
      </div>

      {/* ── Focused Header ─────────────────────────────────────── */}
      <section className="pb-16 md:pb-24">
        <Container>
          <div className="max-w-3xl mx-auto space-y-10">
            {/* Category & Date */}
            <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em]">
              {post.category && (
                <span className="text-primary">{post.category}</span>
              )}
              {post.category && formattedDate && (
                <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
              )}
              {formattedDate && (
                <span className="text-slate-400">{formattedDate}</span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#001D3D] font-serif leading-[1.1] tracking-tight">
              {post.title}
            </h1>

            {/* Author */}
            <div className="flex items-center gap-4 pt-6">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-primary overflow-hidden border-2 border-white shadow-sm">
                <User size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-slate-900 leading-none">
                  {post.author || "Ubunifu Team"}
                </span>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-1">
                  Author & Contributor
                </span>
              </div>
            </div>

            {/* Featured Image */}
            {post.coverImage?.asset ? (
              <div className="rounded-[2.5rem] overflow-hidden aspect-[16/9] bg-slate-100 shadow-2xl shadow-slate-200/50 border border-slate-100 mt-12">
                <img
                  src={urlFor(post.coverImage).width(1200).url()}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : null}
          </div>
        </Container>
      </section>

      {/* ── Article Content ────────────────────────────────────── */}
      <section className="pb-32">
        <Container>
          <div className="max-w-2xl md:max-w-3xl mx-auto">
            <div className="prose prose-slate lg:prose-lg max-w-none">
              {post.body ? (
                <PortableText value={post.body} components={ptComponents} />
              ) : (
                <p className="text-slate-500 italic">No content available.</p>
              )}
            </div>

            {/* Tags & Share */}
            <div className="mt-20 pt-10 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-10">
              {tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-slate-50 text-slate-500 text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-slate-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <ShareRow url={pageUrl} title={post.title} />
            </div>
          </div>
        </Container>
      </section>

      {/* ── Related Stories ─────────────────────────────────────── */}
      {relatedPosts.length > 0 && (
        <section className="py-12 bg-gray-50 border-t border-gray-100">
          <Container>
            <div className="mb-7">
              <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                Related Stories
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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