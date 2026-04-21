import { Link } from "react-router-dom";
import { ArrowRight, Heart, Users, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "@/components/layout/Container";
import usePageTitle from "@/hooks/usePageTitle";
import { projects } from "@/data/projects";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

import { successStories } from "@/data/impact";
import FeaturedImpact from "@/components/ui/FeaturedImpact";
import { useState, useEffect } from "react";
import { client, urlFor } from "@/lib/sanity";

import useScrollReveal from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";


import p1 from "@/assets/hero/p1.png";
import p2 from "@/assets/hero/p2.png";
import p3 from "@/assets/hero/p3.png";
import p4 from "@/assets/hero/p4.png";
import p5 from "@/assets/hero/p5.png";
import p6 from "@/assets/hero/p6.png";




const AboutImageDesign = () => (
  <div className="relative w-full aspect-square max-w-[600px] mx-auto p-8">
    {/* Decorative Horizontal Stripes */}
    <div className="absolute left-[-5%] top-[45%] w-[45%] space-y-1.5 z-0">
      {[...Array(6)].map((_, i) => (
        <div 
          key={i} 
          className="h-1.5 bg-accent/40 rounded-full" 
          style={{ 
            width: `${100 - (i * 12)}%`,
            backgroundColor: i % 2 === 0 ? 'hsl(var(--accent))' : 'hsl(var(--primary))',
            opacity: 0.2 + (i * 0.1)
          }}
        />
      ))}
    </div>

    {/* Decorative Arcs - Large Right Circle Frame */}
    <div className="absolute top-[10%] right-[-5%] w-[75%] aspect-square pointer-events-none z-0">
      <svg className="w-full h-full animate-pulse-slow" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="48" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeDasharray="10 8" className="opacity-50" />
        <circle cx="50" cy="50" r="44" fill="none" stroke="#f59e0b" strokeWidth="3.5" strokeDasharray="25 15" className="opacity-40" />
        <circle cx="50" cy="50" r="40" fill="none" stroke="#3b82f6" strokeWidth="2.5" className="opacity-30" />
      </svg>
    </div>

    {/* Decorative Arcs - Small Circle Frames */}
    <div className="absolute top-[0%] left-[5%] w-[45%] aspect-square pointer-events-none z-0">
      <svg className="w-full h-full rotate-45" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="48" fill="none" stroke="#22c55e" strokeWidth="2" strokeDasharray="4 8" className="opacity-40" />
      </svg>
    </div>

    {/* Image Containers */}
    
    {/* 1. Top-Center/Right (Large) */}
    <div className="absolute top-[10%] right-0 w-[62%] aspect-square rounded-full overflow-hidden border-[6px] border-white shadow-2xl z-20 group">
      <img 
        src="/zanzibar_youth_innovation.png" 
        alt="Zanzibar Youth Innovation" 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
      />
      <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
    </div>

    {/* 2. Top-Left (Medium) */}
    <div className="absolute top-0 left-[5%] w-[42%] aspect-square rounded-full overflow-hidden border-[6px] border-white shadow-xl z-10 group">
      <img 
        src="/zanzibar_youth_innovation.png" 
        alt="Zanzibar Youth Innovation" 
        className="w-full h-full object-cover object-left transition-transform duration-700 group-hover:scale-110" 
      />
      <div className="absolute inset-0 bg-accent/10 group-hover:bg-transparent transition-colors duration-500" />
    </div>

    {/* 3. Bottom-Left (Medium) */}
    <div className="absolute bottom-[5%] left-[8%] w-[52%] aspect-square rounded-full overflow-hidden border-[6px] border-white shadow-2xl z-30 group">
      <img 
        src="/zanzibar_youth_innovation.png" 
        alt="Zanzibar Youth Innovation" 
        className="w-full h-full object-cover object-right transition-transform duration-700 group-hover:scale-110" 
      />
      <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
    </div>
  </div>
);


/* ─── Hero Section Components ───────────────────────────────── */
const RipplePattern = ({ className }) => (
  <svg 
    viewBox="0 0 200 200" 
    className={cn("absolute pointer-events-none opacity-40", className)}
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="100" cy="100" r="40" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 4" />
    <circle cx="100" cy="100" r="60" stroke="#f59e0b" strokeWidth="2" strokeDasharray="8 4" />
    <circle cx="100" cy="100" r="80" stroke="#f59e0b" strokeWidth="2" strokeDasharray="12 4" />
    <circle cx="100" cy="100" r="100" stroke="#f59e0b" strokeWidth="2" strokeDasharray="16 4" />
  </svg>
);

const Underline = () => (
  <svg 
    className="absolute -bottom-2 left-0 w-full h-3 text-[#f59e0b] opacity-80" 
    viewBox="0 0 100 10" 
    preserveAspectRatio="none"
  >
    <path 
      d="M0 5 Q 25 0, 50 5 T 100 5" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinecap="round" 
    />
  </svg>
);


/* ─── Core Programs Components ───────────────────────────────── */
const ProgramCard = ({ title, type, description, className, isFeatured = false }) => (
  <div className={cn(
    "bg-white rounded-[2rem] p-8 md:p-12 flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100",
    isFeatured ? "w-full lg:max-w-xl" : "h-full",
    className
  )}>
    <p className="text-[11px] font-bold tracking-[0.2em] text-slate-400 uppercase mb-4">
      {type}
    </p>
    <h3 className={cn(
      "font-serif font-bold text-[#001D3D] tracking-tight leading-tight mb-6",
      isFeatured ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"
    )}>
      {title}
    </h3>
    <p className="text-sm md:text-base text-slate-600 leading-relaxed font-medium mb-8">
      {description}
    </p>
    <Link to="/projects" className="mt-auto group flex items-center gap-3">
      <span className="text-sm font-bold text-[#001D3D] tracking-tight border-b border-transparent group-hover:border-[#001D3D] transition-all">
        Learn More
      </span>
      <div className="w-8 h-8 rounded-full bg-[#f43f5e] flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
        <ArrowRight size={16} strokeWidth={2.5} />
      </div>
    </Link>
  </div>
);

const Home = () => {
  usePageTitle("Home");

  const [latestPosts, setLatestPosts] = useState([]);
  useScrollReveal([latestPosts]);
  const featuredProjects = projects.filter((p) => p.status === "ongoing").slice(0, 4);

  useEffect(() => {
    client
      .fetch(`*[_type == "post"] | order(publishedAt desc)[0...5]`)
      .then((data) => setLatestPosts(data))
      .catch(console.error);
  }, []);

  return (
    <div className="bg-background min-h-screen overflow-x-hidden">
      {/* ── High-Impact Hero ───────────────────────────────────── */}
      <section className="bg-[#2D1B4D] relative overflow-hidden pt-24 md:pt-32 pb-16 md:pb-24">
        {/* Background Ripple (Top Left) */}
        <RipplePattern className="top-[-50px] left-[-50px] w-96 h-96 opacity-10" />
        
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            
            {/* LEFT: Content */}
            <div className="lg:max-w-2xl space-y-10 reveal z-10">
              <div className="space-y-6 max-w-4xl">
                <h1 className="text-5xl md:text-6xl lg:text-[72px] font-bold text-white font-serif leading-[1.1] tracking-tight">
                  Driving social entrepreneurship<br /> 
                  and youth <span className="relative inline-block">
                    empowerment
                    <Underline />
                  </span> in Zanzibar
                </h1>
                <p className="text-xl md:text-2xl text-white/80 font-medium leading-relaxed">
                  Supporting young people and women through skills development, innovation, and entrepreneurship to create sustainable change.
                </p>
              </div>

            </div>

            {/* RIGHT: Circular Image Cluster */}
            <div className="relative h-[500px] md:h-[600px] reveal z-0 hidden sm:block">
              <RipplePattern className="top-0 right-0 w-[400px] h-[400px] opacity-20" />
              <RipplePattern className="bottom-0 left-20 w-[300px] h-[300px] opacity-15" />
              
              {/* Image 1: Main (Center Right) */}
              <div className="absolute top-[10%] right-0 w-[55%] aspect-square rounded-full border-4 border-white/20 overflow-hidden shadow-2xl z-20 group">
                <img src={p1} alt="Scholar 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              
              {/* Image 2: Support (Top Left) */}
              <div className="absolute top-0 left-[5%] w-[42%] aspect-square rounded-full border-4 border-white/20 overflow-hidden shadow-2xl z-10 group">
                <img src={p2} alt="Scholar 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              
              {/* Image 3: Support (Bottom Center) */}
              <div className="absolute bottom-[5%] left-[20%] w-[48%] aspect-square rounded-full border-4 border-white/20 overflow-hidden shadow-2xl z-30 group">
                <img src={p3} alt="Scholar 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>

              {/* Image 4: Small Accent */}
              <div className="absolute bottom-[15%] right-[10%] w-[25%] aspect-square rounded-full border-4 border-white/20 overflow-hidden shadow-xl z-10 group">
                <img src={p4} alt="Scholar 4" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
            </div>

          </div>
        </Container>
      </section>


      {/* 2. Overarching Mission Sections - Alternating Blocks */}
      <section className="pt-[100px] md:pt-[160px] pb-32 bg-background space-y-40">
        <Container>
          {/* Block 1: About Us / Purpose */}
          <div className="grid md:grid-cols-2 gap-16 lg:gap-32 items-center reveal">
            <div className="space-y-8 order-2 md:order-1 max-w-3xl">
              <div className="space-y-4">
                <p className="text-[11px] font-bold tracking-[0.2em] text-primary uppercase">About Us</p>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] text-foreground">
                  Why we are here
                </h2>
              </div>
              <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                Ubunifu Foundation is a community-driven organization based in Kwerekwe, Zanzibar, dedicated to addressing youth unemployment and empowering women. We provide access to entrepreneurial skills, vocational training, and mentorship, creating a supportive environment where individuals transform challenges into long-term opportunities.
              </p>
              <Link to="/about" className="inline-block mt-4">
                <Button variant="outline" className="rounded-xl border-foreground text-foreground px-10 py-6 hover:bg-foreground hover:text-white transition-all font-bold text-sm uppercase tracking-tight">
                  Learn more
                </Button>
              </Link>
            </div>
            <div className="order-1 md:order-2 relative">
              <AboutImageDesign />
            </div>
          </div>

          {/* Block 2: Our Mission / Impact */}
          <div className="grid md:grid-cols-2 gap-16 lg:gap-32 items-center mt-32 reveal">
            <div className="order-1">
              <div className="aspect-video bg-secondary border border-border overflow-hidden shadow-sm relative">
                <iframe
                  src="https://www.youtube.com/embed/m-nki6XAL7Q"
                  title="Ubunifu Foundation Introduction"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="space-y-8 order-2 max-w-3xl">
              <div className="space-y-4">
                <p className="text-[11px] font-bold tracking-[0.2em] text-primary uppercase">Our Mission</p>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] text-foreground">
                  Change begins with transformation
                </h2>
              </div>
              <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                Through its programs, Ubunifu Foundation equips youth and women to become social entrepreneurs who drive sustainable impact, improve livelihoods, and contribute to economic growth while promoting environmental responsibility. We create a legacy of empowerment and community transformation.
              </p>
              <Link to="/impact">
                <Button variant="outline" className="rounded-none border-foreground text-foreground px-10 py-6 hover:bg-foreground hover:text-white transition-all font-bold text-sm uppercase tracking-tight">
                  Learn more
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Impact Overview Section - High-Impact Redesign */}
      <section className="pt-24 pb-10 bg-background reveal overflow-hidden relative">
        {/* Island Watermarks */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-between px-[-10%] opacity-[0.1] md:opacity-[0.2]">
            <img 
              src="/pemba island.png" 
              alt="Pemba Island Watermark" 
              className="w-[60%] md:w-[35%] max-w-[600px] translate-x-[-20%] md:translate-x-[-15%] -translate-y-1/2 md:translate-y-0"
            />
            <img 
              src="/unguja island.jpg" 
              alt="Unguja Island Watermark" 
              className="w-[60%] md:w-[35%] max-w-[600px] translate-x-[20%] md:translate-x-[15%] translate-y-1/2 md:translate-y-0"
            />
          </div>
        </div>
        <Container>
          <div className="space-y-16">
              {/* Header */}
              <div className="space-y-6 text-center max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] whitespace-nowrap">
                  Our Impact in <span className="text-primary">Zanzibar.</span>
                </h2>
                <p className="text-lg md:text-xl text-foreground font-medium leading-relaxed">
                  Ubunifu Foundation is empowering youth and women in Zanzibar through skills development, mentorship, and social entrepreneurship, creating opportunities for sustainable livelihoods and positive community transformation.
                </p>
              </div>

              {/* Intermediate Subheading */}
              <div className="space-y-10">
                <h3 className="text-xl md:text-2xl font-bold tracking-tight border-b border-border pb-4 w-fit mx-auto">
                  A Legacy of Empowerment and Community Transformation.
                </h3>

                {/* Colored Stats Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Card 1: Teal */}
                  <div className="p-1.5 rounded-[2.3rem] border-2 border-[#4EB8BC]/20 bg-white/50">
                    <div className="bg-[#4EB8BC] p-8 rounded-[1.8rem] text-white h-full space-y-4 shadow-lg shadow-[#4EB8BC]/10 hover:scale-[1.01] transition-transform">
                      <div className="flex justify-between items-start">
                        <div className="text-4xl md:text-5xl font-bold tracking-tighter"><AnimatedCounter value="194+" /></div>
                        <Users className="opacity-40" size={24} />
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-bold text-lg leading-tight">Youths Empowered</h4>
                        <p className="text-sm text-white/90 leading-relaxed font-medium">Young people equipped with practical skills, confidence, and entrepreneurial mindset to improve their livelihoods.</p>
                      </div>
                    </div>
                  </div>

                  {/* Card 2: Amber */}
                  <div className="p-1.5 rounded-[2.3rem] border-2 border-[#F5B041]/20 bg-white/50">
                    <div className="bg-[#F5B041] p-8 rounded-[1.8rem] text-white h-full space-y-4 shadow-lg shadow-[#F5B041]/10 hover:scale-[1.01] transition-transform">
                      <div className="flex justify-between items-start">
                        <div className="text-4xl md:text-5xl font-bold tracking-tighter"><AnimatedCounter value="7" /></div>
                        <Target className="opacity-40" size={24} />
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-bold text-lg leading-tight">Social Enterprises Supported</h4>
                        <p className="text-sm text-white/90 leading-relaxed font-medium">Youth-led initiatives supported to address community challenges and create sustainable solutions.</p>
                      </div>
                    </div>
                  </div>

                  {/* Card 3: Light Blue */}
                  <div className="p-1.5 rounded-[2.3rem] border-2 border-[#1e40af]/10 bg-white/50">
                    <div className="bg-[#D1E9F6] p-8 rounded-[1.8rem] text-foreground h-full space-y-4 shadow-lg shadow-black/5 hover:scale-[1.01] transition-transform">
                      <div className="flex justify-between items-start">
                        <div className="text-4xl md:text-5xl font-bold tracking-tighter text-[#1e40af]"><AnimatedCounter value="47" /></div>
                        <TrendingUp className="text-[#1e40af] opacity-40" size={24} />
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-bold text-lg leading-tight">Jobs Created</h4>
                        <p className="text-sm text-foreground/70 leading-relaxed font-medium">Employment opportunities generated through community-based enterprises and youth-driven initiatives.</p>
                      </div>
                    </div>
                  </div>

                  {/* Card 4: Dark Navy */}
                  <div className="p-1.5 rounded-[2.3rem] border-2 border-[#003d52]/20 bg-white/50">
                    <div className="bg-[#003d52] p-8 rounded-[1.8rem] text-white h-full space-y-4 shadow-lg shadow-[#003d52]/20 hover:scale-[1.01] transition-transform">
                      <div className="flex justify-between items-start">
                        <div className="text-4xl md:text-5xl font-bold tracking-tighter"><AnimatedCounter value="8" /></div>
                        <Heart className="opacity-40" size={24} />
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-bold text-lg leading-tight">Businesses Launched</h4>
                        <p className="text-sm text-white/85 leading-relaxed font-medium">Small enterprises started by participants to promote self-employment and economic independence.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </Container>
      </section>

      {/* 5. Success Story Section - Reference Layout */}
      <section className="pt-6 pb-32 bg-background reveal">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-10 gap-y-14">
            {successStories.slice(0, 4).map((story, i) => (
              <div key={i} className="flex flex-col group">
                {/* Rectangle Image */}
                <div className="w-full aspect-[4/3] overflow-hidden rounded-xl mb-5 bg-muted">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold tracking-tight text-foreground mb-3 leading-snug">
                  {story.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed font-medium flex-1 mb-5">
                  {story.description}
                </p>

                {/* CTA Link */}
                <Link
                  to="/impact"
                  className="flex items-center gap-3 group/cta w-fit"
                >
                  <span className="text-sm font-bold text-foreground group-hover/cta:text-primary transition-colors tracking-tight">
                    Read Story
                  </span>
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white group-hover/cta:bg-primary/80 transition-colors shadow-md">
                    <ArrowRight size={15} />
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Our Core Programs: Redesign ── */}
      <section className="py-24 md:py-32 bg-[#F8FAFC] reveal overflow-hidden">
        <Container>
          <div className="w-full">
            
            {/* Section Header */}
            <div className="text-center mb-24">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-[#001D3D] tracking-tight">
                Academic Offerings Designed for You
              </h2>
            </div>

            {/* Top Row: Mission & Feature Image */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-16 items-start">
              <div className="space-y-12">
                <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium">
                  We provide rigorous, real-world education through our key programs without traditional barriers. Start your learning journey today with offerings designed by industry experts, delivered with impact, and focused on sustainable futures.
                </p>
                {/* Featured Card placement */}
                {featuredProjects[0] && (
                  <ProgramCard 
                    title={featuredProjects[0].title}
                    type="Core Program"
                    description={featuredProjects[0].description}
                    isFeatured={true}
                  />
                )}
              </div>
              <div className="relative">
                <div className="aspect-[16/11] rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-200">
                  <img 
                    src={featuredProjects[0]?.image} 
                    alt={featuredProjects[0]?.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Bottom Grid: Supporting Programs */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {featuredProjects.slice(1, 4).map((project) => (
                <ProgramCard 
                  key={project.id}
                  title={project.title}
                  type="Initiative"
                  description={project.description}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>


      {/* Latest Blog - Minimalist Grid Redesign */}
      <section className="py-24 bg-background border-t border-border/50">
        <Container>
          {/* Section Header */}
          <div className="flex justify-between items-start mb-16 reveal">
            <div className="max-w-xl text-left">
              <h2 className="text-3xl font-bold mb-4 tracking-tight text-foreground uppercase">Latest news</h2>
              <p className="text-base text-muted-foreground font-medium">What happens at Ubunifu Foundation around the world.</p>
            </div>
            <Link to="/blog">
              <Button variant="outline" className="rounded-none border-foreground text-foreground px-6 py-2 hover:bg-foreground hover:text-white transition-all font-bold text-xs uppercase tracking-tight">
                View all
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-x-8 gap-y-12">
            {latestPosts.map((post) => {
              const slug = post.slug?.current;
              if (!slug) return null;

              return (
                <div key={slug} className="group flex flex-col reveal h-full">
                  {/* Image */}
                  <div className="aspect-[4/3] overflow-hidden mb-6 bg-muted relative">
                    {post.coverImage?.asset ? (
                      <img
                        src={urlFor(post.coverImage).url()}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <div className="w-full h-full bg-muted flex items-center justify-center">
                        <span className="text-muted-foreground text-xs uppercase">No image</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="flex flex-col flex-1 space-y-4">
                    <h3 className="text-base font-bold leading-tight group-hover:text-primary transition-colors tracking-tight line-clamp-3">
                      {post.title}
                    </h3>
                    <p className="text-xs text-muted-foreground line-clamp-4 leading-relaxed font-medium">
                      {post.excerpt}
                    </p>
                    <div className="pt-4 mt-auto">
                      <Link to={`/blog/${slug}`}>
                        <Button className="rounded-none bg-[#001D3D] hover:bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 w-fit h-auto">
                          Read more
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA section - High Impact */}
      <section className="py-40 bg-[#001D3D] relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-10 pointer-events-none" />
        
        <Container className="text-center relative z-10 reveal">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-12 tracking-tight leading-tight text-white">
            Together, We Can <span className="text-primary">Do More.</span>
          </h2>
          <p className="text-2xl md:text-3xl text-white/90 max-w-3xl mx-auto mb-16 font-medium leading-relaxed">
            Join a collective effort to build stronger, self-sufficient communities. Every contribution is a catalyst for change.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/donate">
              <Button className="rounded-full px-12 py-6 text-sm md:text-base font-bold tracking-wide bg-primary hover:bg-primary/90 shadow-xl hover:scale-105 transition-all text-white">
                Support Our Work
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="rounded-full px-12 py-6 text-sm md:text-base font-bold tracking-wide border-2 border-white text-white hover:bg-white hover:text-[#001D3D] transition-all">
                Partner With Us
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </div>);
};


export default Home;