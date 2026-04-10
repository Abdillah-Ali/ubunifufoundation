import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Container from "@/components/layout/Container";
import PageHero from "@/components/layout/PageHero";
import usePageTitle from "@/hooks/usePageTitle";
import { galleryImages } from "@/data/gallery";
import useScrollReveal from "@/hooks/useScrollReveal";

const categories = ["All", ...Array.from(new Set(galleryImages.map((img) => img.category)))];

const Gallery = () => {
  usePageTitle("Gallery");
  useScrollReveal();
  const [filter, setFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = filter === "All" ? galleryImages : galleryImages.filter((img) => img.category === filter);

  const openLightbox = (i) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => i !== null && i > 0 ? i - 1 : filtered.length - 1);
  const next = () => setLightboxIndex((i) => i !== null && i < filtered.length - 1 ? i + 1 : 0);

  return (
    <div className="min-h-screen bg-background pb-24">
      <PageHero 
        title="Gallery" 
        subtitle="A visual journey through our work and the communities we serve across Zanzibar." 
      />

      <section className="py-24 reveal">
        <Container>
          {/* Category filter - Schwab Style Pill */}
          <div className="flex flex-wrap gap-4 mb-20 justify-center">
            <div className="flex bg-secondary p-1.5 rounded-full border border-border">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={cn(
                    "px-6 py-2.5 rounded-full text-[13px] font-bold transition-all",
                    filter === cat ? "bg-primary text-white shadow-lg" : "text-foreground hover:text-foreground"
                  )}
                  onClick={() => setFilter(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid - Clean Masonry-like spacing */}
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filtered.map((img, i) => (
              <button
                key={i}
                onClick={() => openLightbox(i)}
                className="relative aspect-square overflow-hidden rounded-[2rem] group border border-border transition-all hover:scale-[1.02] reveal"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 text-left">
                  <span className="bg-white/95 backdrop-blur-sm text-primary text-[13px] font-bold px-4 py-1.5 rounded-full tracking-tight">
                    {img.category}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Lightbox */}
      <Dialog open={lightboxIndex !== null} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-4xl p-0 bg-foreground border-0 overflow-hidden">
          {lightboxIndex !== null && (
            <div className="relative">
              <img
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].alt}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <p className="text-center text-sm text-white py-3">{filtered[lightboxIndex].alt}</p>
              <button 
                onClick={prev} 
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/20 text-white hover:bg-background/40 transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={next} 
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/20 text-white hover:bg-background/40 transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;