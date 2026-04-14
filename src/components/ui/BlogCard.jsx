import { Link } from "react-router-dom";
import { Calendar, User } from "lucide-react";
import { urlFor } from "@/lib/sanity";

/**
 * BlogCard — shared card used in the listing grid and related stories.
 * @param {object} post - Sanity post document
 * @param {string} className - extra tailwind classes
 */
const BlogCard = ({ post, className = "" }) => {
  const slug = post?.slug?.current;
  if (!slug) return null;

  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : null;

  const tags = Array.isArray(post.tags) ? post.tags : [];

  return (
    <Link
      to={`/blog/${slug}`}
      className={`group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${className}`}
    >
      {/* Thumbnail */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 flex-shrink-0">
        {post.coverImage?.asset ? (
          <img
            src={urlFor(post.coverImage).width(600).url()}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center">
            <span className="text-primary/40 text-4xl font-bold select-none">U</span>
          </div>
        )}
        {/* Category badge */}
        {post.category && (
          <span className="absolute top-3 left-3 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full shadow-sm">
            {post.category}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        {/* Title */}
        <h3 className="text-base font-bold leading-snug text-gray-900 line-clamp-2 group-hover:text-primary transition-colors">
          {post.title}
        </h3>

        {/* Excerpt */}
        {post.excerpt && (
          <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
            {post.excerpt}
          </p>
        )}

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-semibold bg-gray-100 text-gray-500 px-2.5 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Footer: Author + Date */}
        <div className="flex items-center gap-3 pt-3 mt-auto border-t border-gray-100">
          {/* Avatar */}
          <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <User size={13} className="text-primary" />
          </div>
          <span className="text-[12px] font-semibold text-gray-700 truncate">
            {post.author || "Ubunifu Team"}
          </span>
          {formattedDate && (
            <>
              <span className="text-gray-200 select-none">•</span>
              <span className="flex items-center gap-1 text-[12px] text-gray-400 ml-auto flex-shrink-0">
                <Calendar size={11} />
                {formattedDate}
              </span>
            </>
          )}
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
