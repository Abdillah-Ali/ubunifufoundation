import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import Container from "@/components/layout/Container";
import PageSection from "@/components/layout/PageSection";
import usePageTitle from "@/hooks/usePageTitle";
import { useState, useEffect } from "react";
import { client, urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // Fetch post
    client
      .fetch(`*[_type == "post" && slug.current == $slug][0]`, { slug })
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch(console.error);

    // Fetch related posts
    client
      .fetch(`*[_type == "post" && slug.current != $slug] | order(publishedAt desc)[0...3]`, { slug })
      .then((data) => setRelatedPosts(data))
      .catch(console.error);
  }, [slug]);

  usePageTitle(post?.title || (loading ? "Loading..." : "Post Not Found"));

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <PageSection>
        <div className="text-center py-20">
          <h1 className="text-2xl font-bold mb-4 text-foreground">Post Not Found</h1>
          <Link to="/blog" className="text-primary hover:underline inline-flex items-center gap-1">
            <ArrowLeft size={14} /> Back to Blog
          </Link>
        </div>
      </PageSection>);

  }

  return (
    <div className="bg-background min-h-screen pb-24">
      {/* Header - Schwab style */}
      <div className="bg-secondary border-b border-border py-12 md:py-20">
        <Container>
          <Link to="/blog" className="text-sm font-bold text-primary transition-all inline-flex items-center gap-2 mb-10 group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Blog
          </Link>
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 text-[14px] font-bold text-primary mb-6">
              {post.category}
              <span className="text-foreground/20">•</span>
              <span className="text-foreground tracking-tight">{new Date(post.publishedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight">
              {post.title}
            </h1>
          </div>
        </Container>
      </div>

      {/* Cover Image - Clean Full Width/Large Container */}
      <div className="py-12 md:py-20">
        <Container>
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-border">
            <img src={urlFor(post.coverImage).url()} alt={post.title} className="w-full h-auto object-cover" />
          </div>
        </Container>
      </div>

      {/* Body - Clean Reading Focus */}
      <Container className="pb-24">
        <article
          className="max-w-3xl mx-auto prose prose-lg prose-headings:font-bold prose-headings:tracking-tight prose-p:text-foreground prose-p:leading-relaxed prose-p:text-lg prose-strong:text-foreground prose-img:rounded-[2.5rem] prose-strong:font-bold"
        >
          <PortableText 
            value={post.body} 
            components={{
              types: {
                image: ({ value }) => (
                  <div className="my-10 rounded-[2.5rem] overflow-hidden border border-border">
                    <img
                      src={urlFor(value).url()}
                      alt={value.alt || "Blog Image"}
                      className="w-full h-auto"
                    />
                  </div>
                ),
              },
            }}
          />
        </article>
      </Container>

      {/* Related Posts - Schwab Style Grid */}
      {relatedPosts.length > 0 && (
        <section className="py-24 bg-secondary border-t border-border">
          <Container>
            <div className="max-w-3xl mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 tracking-tight">More Stories</h2>
              <p className="text-base md:text-lg text-foreground font-medium">Continue reading from our latest updates.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-12">
              {relatedPosts.map((p) => (
                <Link to={`/blog/${p.slug.current}`} key={p.slug.current} className="group">
                  <div className="aspect-[16/10] overflow-hidden rounded-2xl mb-6 shadow-md border border-border">
                    <img src={urlFor(p.coverImage).url()} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-[13px] font-bold text-primary">
                      {p.category}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold leading-tight tracking-tight group-hover:text-primary transition-colors">
                      {p.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}
    </div>
  );
};

export default BlogPost;