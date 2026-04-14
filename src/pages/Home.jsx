import { Link } from "react-router-dom";
import { ArrowRight, Heart, Users, Target, Eye, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PageSection from "@/components/layout/PageSection";
import SectionTitle from "@/components/layout/SectionTitle";
import Container from "@/components/layout/Container";
import usePageTitle from "@/hooks/usePageTitle";
import { projects } from "@/data/projects";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { cn } from "@/lib/utils";
import { galleryImages } from "@/data/gallery";
import { successStories } from "@/data/impact";
import FeaturedImpact from "@/components/ui/FeaturedImpact";
import { useState, useEffect } from "react";
import { client, urlFor } from "@/lib/sanity";

import useScrollReveal from "@/hooks/useScrollReveal";

const stats = [
  { 
    label: "Youths Empowered", 
    value: "194+", 
    description: "Young people equipped with practical skills, confidence, and entrepreneurial mindset to improve their livelihoods." 
  },
  { 
    label: "Social Enterprises Supported", 
    value: "7", 
    description: "Youth-led initiatives supported to address community challenges and create sustainable solutions." 
  },
  { 
    label: "Jobs Created", 
    value: "47", 
    description: "Employment opportunities generated through community-based enterprises and youth-driven initiatives." 
  },
  { 
    label: "Businesses Launched", 
    value: "8", 
    description: "Small enterprises started by participants to promote self-employment and economic independence." 
  }
];

const Home = () => {
  usePageTitle("Home");

  const [latestPosts, setLatestPosts] = useState([]);
  useScrollReveal([latestPosts]);
  const featuredProjects = projects.filter((p) => p.status === "ongoing").slice(0, 3);

  useEffect(() => {
    client
      .fetch(`*[_type == "post"] | order(publishedAt desc)[0...3]`)
      .then((data) => setLatestPosts(data))
      .catch(console.error);
  }, []);

  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[75vh] flex items-center text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/Hero section background image.png" 
            alt="Hero Background" 
            className="w-full h-full object-cover scale-105 animate-pulse-slow"
          />
          <div className="absolute inset-0 bg-black/65" /> {/* Cinematic Overlay */}
        </div>

        <Container className="relative z-10 py-16">
          <div className="max-w-4xl animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 tracking-tight drop-shadow-2xl">
              Driving social entrepreneurship and youth empowerment in Zanzibar
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-2xl font-medium">
              Supporting young people and women through skills development, innovation, and entrepreneurship to create sustainable change.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link to="/about">
                <Button className="rounded-full px-8 py-6 text-sm md:text-base font-medium tracking-wide bg-primary hover:bg-primary/90 shadow-[0_0_40px_rgba(0,150,199,0.2)] hover:scale-105 transition-all">
                  Learn More <ArrowRight className="ml-3" size={18} />
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-background reveal">
        <Container>
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight">
                Ubunifu <span className="text-primary">Foundation.</span>
              </h2>
              <p className="text-base md:text-lg text-foreground font-medium leading-relaxed max-w-2xl">
                Ubunifu Foundation is a community-driven organization based in Kwerekwe, Zanzibar, dedicated to addressing youth unemployment and empowering women. We provide access to entrepreneurial skills, vocational training, and mentorship, creating a supportive environment where individuals transform challenges into long-term opportunities. Through its programs, Ubunifu Foundation equips youth and women to become social entrepreneurs who drive sustainable impact, improve livelihoods, and contribute to economic growth while promoting environmental responsibility.
              </p>
            </div>

            {/* Video Content */}
            <div className="w-full">
              <div className="aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/10 bg-secondary relative">
                <iframe
                  src="https://www.youtube.com/embed/m-nki6XAL7Q"
                  title="Ubunifu Foundation Introduction"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Impact Overview Section - High-Impact Redesign */}
      <section className="pt-24 pb-10 bg-background reveal overflow-hidden">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
            
            {/* Left Column: Narrative and Stats */}
            <div className="space-y-16">
              {/* Header */}
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] whitespace-nowrap">
                  Our Impact in <span className="text-primary">Zanzibar.</span>
                </h2>
                <p className="text-lg md:text-xl text-foreground font-medium leading-relaxed">
                  Ubunifu Foundation is empowering youth and women in Zanzibar through skills development, mentorship, and social entrepreneurship, creating opportunities for sustainable livelihoods and positive community transformation.
                </p>
              </div>

              {/* Intermediate Subheading */}
              <div className="space-y-10">
                <h3 className="text-xl md:text-2xl font-bold tracking-tight border-b border-border pb-4 w-fit">
                  A Legacy of Empowerment and Community Transformation.
                </h3>

                {/* Colored Stats Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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

            {/* Right Column: Intricate Photo Collage in Dark Frame */}
            <div className="relative group lg:mt-0 xl:mt-8">
              <div className="bg-[#003d52] rounded-[3.5rem] p-4 sm:p-5 lg:p-8 shadow-2xl xl:translate-x-4 w-full h-fit flex flex-col relative overflow-hidden ring-4 ring-[#4EB8BC]/10">
                {/* 1. TOPOGRAPHIC LINES (SVG) */}
                <svg className="absolute top-0 left-0 w-full h-full opacity-[0.15] pointer-events-none" viewBox="0 0 400 600" preserveAspectRatio="none">
                  <path d="M-50,150 C50,130 150,220 250,180 S400,100 450,120" stroke="#4EB8BC" strokeWidth="1.5" fill="none" />
                  <path d="M-50,250 C80,230 180,320 280,280 S400,200 450,220" stroke="#4EB8BC" strokeWidth="1.5" fill="none" />
                  <path d="M-50,350 C110,330 210,420 310,380 S400,300 450,320" stroke="#4EB8BC" strokeWidth="1.5" fill="none" />
                  <path d="M-50,450 C140,430 240,520 340,480 S400,400 450,420" stroke="#4EB8BC" strokeWidth="1.5" fill="none" />
                </svg>

                {/* 2. COLORFUL ABSTRACT SHAPE (SVG) - Mid Left */}
                <div className="absolute left-[-2rem] bottom-[15%] w-48 h-48 opacity-40 pointer-events-none">
                  <svg viewBox="0 0 200 200">
                    <path d="M44.4,-77.4C57.4,-68.8,67.6,-56.3,75.4,-42.6C83.2,-28.9,88.7,-14.5,88.5,-0.1C88.2,14.3,82.3,28.7,73.5,41.1C64.6,53.5,52.8,63.9,39.6,72.4C26.3,80.9,11.7,87.6,-2.4,91.8C-16.4,95.9,-29.9,97.6,-43,93.4C-56.1,89.1,-68.9,78.9,-78.9,66.1C-88.9,53.2,-96.2,37.8,-98,22C-99.8,6.1,-96.1,-10.2,-89.1,-24.8C-82.1,-39.3,-71.8,-52.1,-59.3,-60.9C-46.7,-69.7,-31.9,-74.4,-17.3,-78.1C-2.6,-81.8,11.5,-84.6,24.4,-82.9C37.3,-81.2,49,-75.1,44.4,-77.4Z" fill="#F5B041" transform="translate(100 100)" />
                    <path d="M44.3,-74.6C56.6,-66.2,65.2,-52.4,70.9,-37.9C76.6,-23.4,79.5,-8.3,77.5,6.1C75.5,20.4,68.7,33.9,59,45C49.3,56,36.9,64.6,23.3,69.5C9.7,74.5,-5.2,75.8,-20.1,73.1C-35,70.5,-50,63.9,-61,53.3C-72,42.7,-79.1,28.1,-80.6,13.2C-82.1,-1.7,-78.1,-16.9,-71,-30.2C-64,-43.5,-53.8,-54.9,-41.8,-63.4C-29.8,-71.9,-15.9,-77.4,-0.6,-76.4C14.7,-75.4,29.4,-67.9,44.3,-74.6Z" fill="#4EB8BC" transform="translate(110 110)" />
                  </svg>
                </div>
                
                {/* Mosaic Collage Grid */}
                <div className="grid grid-cols-4 gap-2 sm:gap-3 auto-rows-[70px] sm:auto-rows-[90px] grid-flow-dense relative z-10">
                  {galleryImages.slice(0, 16).map((img, i) => {
                    const spans = [
                      "col-span-2 row-span-2", "col-span-1 row-span-1", "col-span-1 row-span-2", "col-span-1 row-span-1",
                      "col-span-1 row-span-2", "col-span-2 row-span-1", "col-span-1 row-span-1", "col-span-1 row-span-2",
                      "col-span-1 row-span-1", "col-span-1 row-span-1", "col-span-1 row-span-2", "col-span-2 row-span-2",
                      "col-span-1 row-span-1", "col-span-1 row-span-2", "col-span-1 row-span-1", "col-span-1 row-span-1"
                    ];
                    
                    // Special case for the "Market scene" with yellow border
                    const isYellowCard = i === 12; // Example index for the bottom left card

                    return (
                      <div 
                        key={i} 
                        className={cn(
                          "overflow-hidden transition-all duration-500",
                          spans[i] || "col-span-1 row-span-1",
                          isYellowCard ? "rounded-[1.2rem] p-1.5 bg-[#F5B041]" : "rounded-[1rem] shadow-md border border-white/5"
                        )}
                      >
                        <img 
                          src={img.src} 
                          alt="Impact Collage" 
                          className={cn(
                            "w-full h-full object-cover hover:scale-110 transition-transform duration-700",
                            isYellowCard ? "rounded-[0.8rem]" : "rounded-none"
                          )} 
                          loading="lazy" 
                        />
                      </div>
                    );
                  })}
                </div>
                
                {/* 3. BOTTOM CONNECTOR / TAB (SVG/CSS) */}
                <div className="absolute -bottom-1 left-1.2/2 -translate-x-1.2/2 w-48 h-6 bg-[#F5B041] rounded-t-3xl mx-auto flex items-center justify-center opacity-90 hidden sm:flex left-1/2 -translate-x-1/2">
                   <div className="w-12 h-1.5 bg-white/30 rounded-full" />
                </div>

                {/* Bottom Accent Decor Decoration Strip */}
                <div className="mt-8 flex items-center justify-between opacity-30">
                  <div className="h-[1px] w-1/4 bg-gradient-to-r from-transparent via-[#4EB8BC] to-transparent" />
                  <div className="flex gap-4">
                    <div className="h-2 w-2 rounded-full bg-[#4EB8BC]" />
                    <div className="h-2 w-2 rounded-full bg-[#F5B041]" />
                    <div className="h-2 w-2 rounded-full bg-white" />
                  </div>
                  <div className="h-[1px] w-1/4 bg-gradient-to-r from-transparent via-[#4EB8BC] to-transparent" />
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* 5. Success Story Section - Clean Grid Redesign */}
      <section className="pt-6 pb-32 bg-background reveal">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 lg:gap-16">
            {successStories.slice(0, 4).map((story, i) => (
              <FeaturedImpact 
                key={i}
                image={story.image}
                title={story.title}
                description={story.description}
                href={null}
                author={null}
                stat={null}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Programs - Zigzag Layout */}
      <section className="py-32 bg-background">
        <Container>
          <div className="max-w-4xl mb-24 reveal">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 tracking-tight leading-tight">Our Core <span className="text-primary">Programs.</span></h2>
            <p className="text-base md:text-lg text-foreground leading-relaxed font-medium max-w-2xl">
              Driving transformational change through targeted vertical tracks across the region.
            </p>
          </div>

          <div className="space-y-40">
            {featuredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className={cn(
                  "flex flex-col gap-16 lg:gap-32 items-center reveal",
                  index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                )}
              >
                {/* Image */}
                <div className="w-full lg:w-3/5">
                  <div className="aspect-[16/10] rounded-[3rem] overflow-hidden shadow-2xl group border border-border bg-secondary relative">
                     <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-2/5 space-y-8">
                  <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[13px] font-bold tracking-tight">
                    Program Track
                  </div>
                  <h3 className="text-xl md:text-3xl font-bold tracking-tight leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-base md:text-lg text-foreground leading-relaxed font-medium max-w-xl">
                    {project.description}
                  </p>
                  <Link to="/projects">
                    <Button className="rounded-full px-8 py-5 text-sm font-medium tracking-wide bg-primary hover:bg-primary/90 mt-4 group">
                      Learn More <ArrowRight className="ml-3 group-hover:translate-x-3 transition-transform" size={18} />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Latest Blog - Premium Grid */}
      <section className="py-32 bg-secondary border-y border-border">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8 reveal">
            <div className="max-w-2xl text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 tracking-tight leading-tight">News & <span className="text-primary">Stories.</span></h2>
              <p className="text-base md:text-lg text-foreground font-medium">Insights and updates from the frontline of impact.</p>
            </div>
            <Link to="/blog">
              <Button variant="outline" className="rounded-full px-8 py-4 border-2 border-foreground hover:bg-foreground hover:text-white transition-all font-bold text-[13px] tracking-tight uppercase">
                View All Intelligence
              </Button>
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-16">
            {latestPosts.map((post) => {
              const slug = post.slug?.current;
              if (!slug) return null;

              return (
                <Link to={`/blog/${slug}`} key={slug} className="group reveal">
                  <div className="aspect-[16/10] overflow-hidden rounded-[2rem] mb-10 shadow-xl border border-border relative">
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors z-10" />
                    {post.coverImage?.asset ? (
                      <img
                        src={urlFor(post.coverImage).url()}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <div className="w-full h-full bg-muted flex items-center justify-center">
                        <span className="text-muted-foreground">No image</span>
                      </div>
                    )}
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 text-[13px] font-bold tracking-tight text-primary">
                      {post.category}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold leading-tight group-hover:text-primary transition-colors tracking-tight">
                      {post.title}
                    </h3>
                    <p className="text-lg text-foreground line-clamp-2 font-medium leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA section - High Impact */}
      <section className="py-40 bg-background relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-20 pointer-events-none" />
        
        <Container className="text-center relative z-10 reveal">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-12 tracking-tight leading-tight">
            Together, We Can <span className="text-primary">Do More.</span>
          </h2>
          <p className="text-2xl md:text-3xl text-foreground max-w-3xl mx-auto mb-16 font-medium leading-relaxed">
            Join a collective effort to build stronger, self-sufficient communities. Every contribution is a catalyst for change.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/donate">
              <Button className="rounded-full px-12 py-6 text-sm md:text-base font-medium tracking-wide bg-primary hover:bg-primary/90 shadow-xl hover:scale-105 transition-all">
                Support Our Work
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="rounded-full px-12 py-6 text-sm md:text-base font-medium tracking-wide border-2 border-foreground hover:bg-foreground hover:text-white transition-all">
                Partner With Us
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </div>);
};


export default Home;