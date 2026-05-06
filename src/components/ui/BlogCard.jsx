import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { urlFor } from "@/lib/sanity";

/**
 * BlogCard — redesigned card based on academic spotlight style.
 */
const BlogCard = ({ post, className = "" }) => {
  const slug = post?.slug?.current;
  if (!slug) return null;

  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }).toUpperCase()
    : null;

  // Determine badge type (READ vs WATCH)
  const isVideo = post.category?.toLowerCase().includes("video") || 
                  post.tags?.some(tag => tag.toLowerCase().includes("video"));
  
  const badgeText = isVideo ? "WATCH" : "READ";
  const badgeColor = isVideo ? "bg-[#14B8A6]" : "bg-[#FF6B6B]";

  return (
    <div className={`group flex flex-col bg-transparent ${className}`}>
      {/* Thumbnail with Badge */}
      <Link to={`/blog/${slug}`} className="block relative aspect-square rounded-xl overflow-hidden mb-6 bg-gray-100">
        {post.coverImage?.asset ? (
          <img
            src={urlFor(post.coverImage).width(800).height(800).url()}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-slate-200 flex items-center justify-center">
            <span className="text-slate-400 font-bold">IMAGE</span>
          </div>
        )}
        
        {/* Badge */}
        <div className={`absolute bottom-0 left-0 ${badgeColor} text-white px-3.5 py-1.5 text-metadata uppercase`}>
          {badgeText}
        </div>
      </Link>

      {/* Content Area */}
      <div className="flex flex-col space-y-3.5">
        <div className="space-y-1">
          {post.category && (
            <p className="text-metadata uppercase">
              {post.category}
            </p>
          )}
          {formattedDate && (
            <p className="text-metadata">
              {formattedDate}
            </p>
          )}
        </div>

        <Link to={`/blog/${slug}`} className="block group/title">
          <h3 className="text-[24px] font-medium leading-[32px] text-body font-serif group-hover/title:text-primary transition-colors line-clamp-3">
            {post.title}
          </h3>
        </Link>

        {post.excerpt && (
          <p className="text-[16px] text-body leading-[22px] line-clamp-3 font-normal font-sans">
            {post.excerpt}
          </p>
        )}

        <div className="pt-4 mt-auto">
          <Link 
            to={`/blog/${slug}`} 
            className="inline-flex items-center gap-2.5 text-sm font-bold text-[#001D3D] hover:text-primary transition-colors group/cta"
          >
            <span className="border-b-2 border-[#001D3D] group-hover/cta:border-primary transition-colors">
              Read Full Post
            </span>
            <ArrowRight size={16} className="text-[#FBBF24] transition-transform group-hover/cta:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
