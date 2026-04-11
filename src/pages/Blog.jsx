import { Link } from "react-router-dom";
import Container from "@/components/layout/Container";
import PageHero from "@/components/layout/PageHero";
import usePageTitle from "@/hooks/usePageTitle";
import { useState, useEffect } from "react";
import { client, urlFor } from "@/lib/sanity";
import useScrollReveal from "@/hooks/useScrollReveal";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  usePageTitle("Blog & News");
  useScrollReveal();

  useEffect(() => {
    client
      .fetch(`*[_type == "post"] | order(publishedAt desc)`)
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <>
    <div className="min-h-screen bg-background pb-24">
      <PageHero 
        title="News & Stories" 
        subtitle="Stories from the field, organizational updates, and announcements from our experts." 
      />

      <section className="py-24 reveal">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {posts.map((post) => (
              <Link to={`/blog/${post.slug.current}`} key={post.slug.current} className="group reveal">
                <div className="aspect-[16/10] overflow-hidden rounded-2xl mb-6 shadow-md border border-border">
                  <img
                    src={urlFor(post.coverImage).url()}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-[13px] font-bold tracking-tight text-primary">
                    {post.category}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold leading-tight tracking-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-base text-foreground leading-relaxed font-medium line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="pt-2 text-[13px] font-bold tracking-tight text-foreground">
                    {new Date(post.publishedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </div>
    </>);

};

export default Blog;