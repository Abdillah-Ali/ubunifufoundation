import { useParams, Link } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import { ArrowLeft, Calendar, User, Tag, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
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
      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 leading-tight">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3 leading-tight">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="text-[15px] text-gray-600 leading-[1.85] mb-5">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary pl-5 my-6 italic text-gray-600 text-[15px] leading-relaxed">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-outside pl-5 mb-5 space-y-2 text-[15px] text-gray-600 leading-relaxed">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-outside pl-5 mb-5 space-y-2 text-[15px] text-gray-600 leading-relaxed">
        {children}
      </ol>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-bold text-gray-900">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
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
            <ArrowLeft size={14} /> Back to Blog
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
      <div className="border-b border-gray-100 bg-white">
        <Container className="py-4">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-primary transition-colors group"
          >
            <ArrowLeft
              size={15}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Back to Stories
          </Link>
        </Container>
      </div>

      {/* ── Two-column layout ──────────────────────────────────── */}
      <section className="py-10 md:py-14">
        <Container>
          <div className="flex flex-col lg:flex-row gap-10 xl:gap-14">

            {/* ── LEFT: Main Content ─────────────────────────── */}
            <article className="flex-1 min-w-0">
              {/* Featured Image */}
              {post.coverImage?.asset ? (
                <div className="rounded-2xl overflow-hidden mb-8 aspect-video bg-gray-100 shadow-sm border border-gray-100">
                  <img
                    src={urlFor(post.coverImage).width(1200).url()}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : null}

              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-5">
                {post.title}
              </h1>

              {/* Metadata row */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-gray-500 mb-5 pb-5 border-b border-gray-100">
                <span className="flex items-center gap-1.5 font-medium text-gray-700">
                  <User size={13} className="text-primary" />
                  {post.author || "Ubunifu Team"}
                </span>
                {formattedDate && (
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-primary" />
                    {formattedDate}
                  </span>
                )}
                {post.category && (
                  <span className="bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full">
                    {post.category}
                  </span>
                )}
                {tags.length > 0 && (
                  <span className="flex items-center gap-1.5 flex-wrap">
                    <Tag size={11} className="text-gray-400" />
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-500 text-[10px] font-semibold px-2 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </span>
                )}
              </div>

              {/* Body */}
              <div className="max-w-none">
                {post.body ? (
                  <PortableText value={post.body} components={ptComponents} />
                ) : (
                  <p className="text-gray-500 italic">No content available.</p>
                )}
              </div>

              {/* Share row */}
              <div className="mt-10 pt-6 border-t border-gray-100">
                <ShareRow url={pageUrl} title={post.title} />
              </div>
            </article>

            {/* ── RIGHT: Sidebar ─────────────────────────────── */}
            <aside className="w-full lg:w-72 xl:w-80 flex-shrink-0 space-y-8 lg:pt-0">
              {/* Pull-quote card */}
              <div className="rounded-2xl bg-primary/5 border-l-4 border-primary p-5">
                <p className="text-[14px] leading-relaxed text-gray-700 italic font-medium">
                  "{pullQuote}"
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
                    <User size={13} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-[12px] font-bold text-gray-800">
                      {post.author || "Ubunifu Team"}
                    </p>
                    {formattedDate && (
                      <p className="text-[11px] text-gray-400">{formattedDate}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Share */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
                  Share this Story
                </h3>
                <ShareRow url={pageUrl} title={post.title} />
              </div>

              {/* Recent Stories */}
              {recentPosts.length > 0 && (
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
                    Recent Stories
                  </h3>
                  <ul className="space-y-4">
                    {recentPosts
                      .filter((p) => p.slug?.current !== slug)
                      .slice(0, 4)
                      .map((p) => (
                        <li key={p.slug?.current}>
                          <Link
                            to={`/blog/${p.slug?.current}`}
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
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              )}
            </aside>
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