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
  <div className="relative w-full aspect-square max-w-[500px] mx-auto group">
    {/* Decorative Background Glow */}
    <div className="absolute -inset-6 bg-primary/5 rounded-none blur-3xl group-hover:bg-primary/10 transition-colors duration-500" />
    
    {/* Main Image Container */}
    <div className="relative h-full w-full rounded-none overflow-hidden border-8 border-white shadow-2xl z-10 transition-transform duration-700 group-hover:scale-[1.02]">
      <img 
        src="/zanzibar_youth_innovation.png" 
        alt="Zanzibar Youth Innovation" 
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
      />
      {/* Subtle Interaction Overlay */}
      <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-500" />
    </div>
    
    {/* Geometric Accent (Bottom Left) */}
    <div className="absolute -bottom-6 -left-6 w-40 h-40 border-b-[12px] border-l-[12px] border-primary/10 rounded-none z-0" />
    {/* Geometric Accent (Top Right) */}
    <div className="absolute -top-6 -right-6 w-40 h-40 border-t-[12px] border-r-[12px] border-primary/10 rounded-none z-0" />
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
    "bg-white rounded-[2.5rem] p-10 flex flex-col items-start text-left shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 group",
    isFeatured ? "w-full lg:max-w-xl" : "h-full",
    className
  )}>
    <div className="flex items-center gap-3 mb-6">
      <div className="w-2 h-2 rounded-full bg-primary" />
      <p className="text-metadata uppercase">
        {type}
      </p>
    </div>
    <h3 className={cn(
      "font-serif font-medium text-body leading-[32px] transition-colors",
      isFeatured ? "text-3xl md:text-4xl" : "text-[24px]"
    )}>
      {title}
    </h3>
    <p className="text-[16px] text-body leading-[22px] font-normal font-sans mb-8">
      {description}
    </p>
    <Link to="/projects" className="mt-auto group/link flex items-center gap-3">
      <span className="text-sm font-bold text-[#001D3D] tracking-tight border-b-2 border-transparent group-hover/link:border-primary transition-all">
        Explore Program
      </span>
      <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-[#001D3D] group-hover/link:bg-primary group-hover/link:text-white transition-all shadow-sm">
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
                <h1 className="text-[40px] md:text-[50px] lg:text-[60px] font-medium text-white font-serif leading-[1.1] md:leading-[72px] tracking-tight">
                  Driving social entrepreneurship<br /> 
                  and youth <span className="relative inline-block">
                    empowerment
                    <Underline />
                  </span> in Zanzibar
                </h1>
                <p className="text-base md:text-lg text-white/80 font-normal leading-[22px] font-sans">
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
      <section className="pt-[120px] md:pt-[200px] pb-40 bg-background space-y-48">
        <Container>
          {/* Block 1: About Us / Purpose */}
          <div className="grid md:grid-cols-2 gap-16 lg:gap-32 items-center reveal">
            <div className="space-y-8 order-2 md:order-1 max-w-3xl">
              <div className="space-y-4">
                <p className="text-metadata uppercase">About Us</p>
                <h2 className="text-[24px] font-medium leading-[32px] text-body font-serif">
                  Why we are here
                </h2>
              </div>
              <p className="text-[16px] text-body font-normal leading-[22px] font-sans">
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
          <div className="grid md:grid-cols-2 gap-16 lg:gap-32 items-center mt-48 reveal">
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
                <p className="text-metadata uppercase">Our Mission</p>
                <h2 className="text-[24px] font-medium leading-[32px] text-body font-serif">
                  Change begins with transformation
                </h2>
              </div>
              <p className="text-[16px] text-body font-normal leading-[22px] font-sans">
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
      
      {/* Visual Separator */}
      <Container className="my-16">
        <div className="h-px w-full bg-border" />
      </Container>

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
                <h2 className="text-[34px] md:text-[42px] lg:text-[60px] font-medium tracking-tight leading-tight md:leading-[72px] font-serif">
                  Our Impact in <span className="text-primary">Zanzibar.</span>
                </h2>
                <p className="text-base md:text-lg text-foreground font-normal leading-[22px] font-sans">
                  Ubunifu Foundation is empowering youth and women in Zanzibar through skills development, mentorship, and social entrepreneurship, creating opportunities for sustainable livelihoods and positive community transformation.
                </p>
              </div>

              {/* Intermediate Subheading */}
              <div className="space-y-10">
                <h3 className="text-[20px] md:text-[24px] font-medium tracking-tight border-b border-border pb-4 w-fit mx-auto font-serif">
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
                        <h4 className="font-medium text-[18px] leading-[24px] font-serif">Youths Empowered</h4>
                        <p className="text-base text-white/90 leading-[22px] font-normal font-sans">Young people equipped with practical skills, confidence, and entrepreneurial mindset to improve their livelihoods.</p>
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
                        <h4 className="font-medium text-[18px] leading-[24px] font-serif">Social Enterprises Supported</h4>
                        <p className="text-base text-white/90 leading-[22px] font-normal font-sans">Youth-led initiatives supported to address community challenges and create sustainable solutions.</p>
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
                        <h4 className="font-medium text-[18px] leading-[24px] font-serif text-[#1e40af]">Jobs Created</h4>
                        <p className="text-base text-foreground/70 leading-[22px] font-normal font-sans">Employment opportunities generated through community-based enterprises and youth-driven initiatives.</p>
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
                        <h4 className="font-medium text-[18px] leading-[24px] font-serif">Businesses Launched</h4>
                        <p className="text-base text-white/85 leading-[22px] font-normal font-sans">Small enterprises started by participants to promote self-employment and economic independence.</p>
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
                <h3 className="text-[24px] font-medium text-body mb-3 leading-[32px] font-serif">
                  {story.title}
                </h3>

                {/* Description */}
                <p className="text-[16px] text-body leading-[22px] font-normal font-sans flex-1 mb-5">
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
            <div className="text-center mb-24 max-w-3xl mx-auto space-y-4">
              <h2 className="text-[24px] font-medium font-serif text-body leading-[32px] tracking-tight">
                Empowerment Offerings.
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
            </div>

            {/* Top Row: Mission & Feature Image */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-16 items-start">
              <div className="space-y-12">
                <p className="text-[16px] text-body leading-[22px] font-normal font-sans">
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
              <h2 className="text-[24px] font-medium mb-4 tracking-tight text-body uppercase font-serif">Latest news</h2>
              <p className="text-[16px] text-body font-normal font-sans leading-[22px]">What happens at Ubunifu Foundation around the world.</p>
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
                    <h3 className="text-[24px] font-serif font-medium leading-[32px] text-body group-hover:text-primary transition-colors tracking-tight line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-[16px] text-body line-clamp-4 leading-[22px] font-normal font-sans">
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
          <h2 className="text-[40px] md:text-[50px] lg:text-[60px] font-medium mb-12 tracking-tight leading-tight md:leading-[72px] text-white font-serif">
            Together, We Can <span className="text-primary">Do More.</span>
          </h2>
          <p className="text-[20px] md:text-[24px] text-white/90 max-w-3xl mx-auto mb-16 font-normal font-sans leading-relaxed">
            Join a collective effort to build stronger, self-sufficient communities. Every contribution is a catalyst for change.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/donate">
              <Button className="rounded-full px-12 py-6 text-sm md:text-base font-bold tracking-wide bg-primary hover:bg-primary/90 shadow-xl hover:scale-105 transition-all text-white">
                Support Our Work
              </Button>
            </Link>
            <Link to="/contact">
              <Button className="rounded-full px-12 py-6 text-sm md:text-base font-bold tracking-wide border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#001D3D] transition-all">
                Partner With Us
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </div>);
};


export default Home;