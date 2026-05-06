import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * FeaturedImpact Component
 * 
 * Reusable component for showcasing success stories or key impact metrics with a cinematic card-like layout.
 * 
 * @param {string} image - URL of the background/featured image.
 * @param {string} title - Main heading for the impact block.
 * @param {string} description - Detailed paragraph text.
 * @param {string} author - Name of the featured person (optional).
 * @param {string} stat - Title/role of the featured person (optional).
 * @param {string} href - Navigation destination for the CTA button.
 * @param {string} ctaText - Label for the CTA button (default: "Explore more").
 * @param {string} className - Additional CSS classes for the container.
 */
const FeaturedImpact = ({ 
  image, 
  title, 
  description, 
  author, 
  stat, 
  href = "/impact", 
  ctaText = "Explore impact",
  className 
}) => {
  return (
    <div className={cn("w-full transition-all duration-500", className)}>
      {/* Rectangular Image Header */}
      <div className="aspect-[16/10] overflow-hidden rounded-[1rem] shadow-sm mb-6 border border-border bg-secondary">
        <img 
          src={image} 
          alt={author || title} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
          loading="lazy"
        />
      </div>

      {/* Content Body */}
      <div className="space-y-4">
        <h3 className="text-[24px] font-medium text-body leading-[32px] font-serif">
          {title}
        </h3>
        <p className="text-[16px] text-body leading-[22px] font-normal font-sans">
          {description}
        </p>
        
        {/* Attribution and CTA Block (Conditional) */}
        {(author || stat || href) && (
          <div className="space-y-6 pt-2">
            {(author || stat) && (
              <p className="text-metadata uppercase">
                {author} {(author && stat) && <span className="mx-2 opacity-10">|</span>} 
                <span className="normal-case opacity-60">{stat}</span>
              </p>
            )}

            {href && (
              <Link to={href} className="inline-block">
                <Button variant="outline" className="rounded-full px-6 py-4 text-[14px] font-bold tracking-tight border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 h-auto">
                  {ctaText}
                </Button>
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedImpact;
