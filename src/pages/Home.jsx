import { Link } from "react-router-dom";
import { ArrowRight, BookOpenCheck, Compass, Heart, Lightbulb, Monitor, Target, TrendingUp, Users, UsersRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "@/components/layout/Container";
import usePageTitle from "@/hooks/usePageTitle";
import { projects } from "@/data/projects";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

import { successStories } from "@/data/impact";
import { useState, useEffect } from "react";
import { client, urlFor } from "@/lib/sanity";

import useScrollReveal from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

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
const impactMetrics = [
  {
    value: "194+",
    label: "Youths Empowered",
    description: "Young people equipped with confidence, practical skills, and an entrepreneurial mindset.",
    icon: Users,
    accent: "text-[#008AC1]"
  },
  {
    value: "7",
    label: "Enterprises Supported",
    description: "Scholar-led initiatives developed to solve real community challenges.",
    icon: Target,
    accent: "text-[#C49A2A]"
  },
  {
    value: "47",
    label: "Jobs Created",
    description: "Employment opportunities generated through youth-driven ventures and local projects.",
    icon: TrendingUp,
    accent: "text-[#0A8F8A]"
  },
  {
    value: "8",
    label: "Businesses Launched",
    description: "Small enterprises started by participants to promote self-employment.",
    icon: Heart,
    accent: "text-[#D94B2B]"
  }
];

const programIcons = [Compass, Monitor, Lightbulb, UsersRound];

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
      <section className="bg-[#2D1B4D] relative overflow-hidden pt-16 md:pt-20 pb-10 md:pb-14">
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
            <div className="relative h-[380px] md:h-[460px] reveal z-0 hidden sm:block">
              <RipplePattern className="top-0 right-0 w-[400px] h-[400px] opacity-20" />
              <RipplePattern className="bottom-0 left-20 w-[300px] h-[300px] opacity-15" />
              
              {/* Image 1: Main (Center Right) */}
              <div className="absolute top-[10%] right-0 w-[55%] aspect-square rounded-full border-4 border-white/20 overflow-hidden shadow-2xl z-20 group">
                <img src="/impact.png" alt="Founders" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              
              {/* Image 2: Support (Top Left) */}
              <div className="absolute top-0 left-[5%] w-[42%] aspect-square rounded-full border-4 border-white/20 overflow-hidden shadow-2xl z-10 group">
                <img src="/saida.png" alt="Saida Malik" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              
              {/* Image 3: Support (Bottom Center) */}
              <div className="absolute bottom-[5%] left-[20%] w-[48%] aspect-square rounded-full border-4 border-white/20 overflow-hidden shadow-2xl z-30 group">
                <img src="/fadhil.png" alt="Fadhil" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
            </div>

          </div>
        </Container>
      </section>


      {/* 2. About & Mission */}
      <section className="bg-white py-24 md:py-32">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 reveal">
            <div className="space-y-8">
              <div>
                <p className="text-metadata uppercase">About Us</p>
                <h2 className="mt-4 text-[36px] leading-[44px] text-[#12323A] md:text-[56px] md:leading-[64px] font-serif">
                  Why we are here
                </h2>
              </div>
              <p className="max-w-2xl text-[17px] leading-[28px] text-[#454545] font-sans">
                Ubunifu Foundation is a community-driven organization based in Kwerekwe, Zanzibar, dedicated to addressing youth unemployment and empowering women. We provide access to entrepreneurial skills, vocational training, and mentorship, creating a supportive environment where individuals transform challenges into long-term opportunities.
              </p>
              <div className="grid border-y border-[#DDEDE8] sm:grid-cols-3">
                {[
                  ["Kwerekwe", "Community base"],
                  ["Youth", "Primary focus"],
                  ["Women", "Empowerment priority"]
                ].map(([value, label]) => (
                  <div key={label} className="border-b border-[#DDEDE8] py-5 sm:border-b-0 sm:border-r sm:px-5 first:sm:pl-0 last:sm:border-r-0">
                    <p className="text-[24px] leading-[32px] font-semibold text-[#12323A]">{value}</p>
                    <p className="mt-1 text-metadata uppercase">{label}</p>
                  </div>
                ))}
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-3 text-sm font-bold uppercase text-[#12323A] group"
              >
                Learn More
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white transition-transform group-hover:translate-x-1">
                  <ArrowRight size={16} />
                </span>
              </Link>
            </div>

            <div className="relative">
              <div className="absolute -left-5 top-5 hidden h-full w-full border-2 border-[#F5B51B] md:block" aria-hidden="true" />
              <img
                src="/scholars-innovation.jpg"
                alt="Ubunifu Foundation scholars during a learning session"
                className="relative z-10 aspect-[4/3] w-full rounded-lg object-cover shadow-2xl"
              />
              <div className="absolute bottom-5 left-5 z-20 border-l-4 border-[#F5B51B] bg-[#063A34]/95 px-5 py-4 backdrop-blur-sm">
                <p className="text-[24px] leading-none font-semibold text-white">Transformation</p>
                <p className="mt-2 text-metadata uppercase text-white/75">Skills into opportunity</p>
              </div>
            </div>
          </div>

          <div className="mt-20 border-y border-[#DDEDE8] bg-slate-50 px-6 py-14 md:mt-28 md:px-10 lg:px-14 reveal">
            <div className="max-w-3xl space-y-6">
              <p className="text-metadata uppercase">Our Mission</p>
              <h2 className="text-[34px] leading-[42px] text-[#12323A] md:text-[46px] md:leading-[54px] font-serif">
                Change begins with transformation.
              </h2>
              <p className="text-[17px] leading-[28px] text-[#454545] font-sans">
                Through its programs, Ubunifu Foundation equips youth and women to become social entrepreneurs who drive sustainable impact, improve livelihoods, and contribute to economic growth while promoting environmental responsibility.
              </p>
              <Link
                to="/impact"
                className="inline-flex items-center gap-3 text-sm font-bold uppercase text-[#12323A] group"
              >
                Learn More
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white transition-transform group-hover:translate-x-1">
                  <ArrowRight size={16} />
                </span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Full-width YouTube Video */}
      <div className="w-full" style={{ aspectRatio: '16/9' }}>
        <iframe
          src="https://www.youtube.com/embed/m-nki6XAL7Q?autoplay=0&rel=0&modestbranding=1"
          title="Ubunifu Foundation Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
          style={{ border: 'none', display: 'block' }}
        />
      </div>
      
      {/* Visual Separator */}
      <Container className="my-16">
        <div className="h-px w-full bg-border" />
      </Container>

      {/* 4. Impact Overview Section */}
      <section className="bg-white py-24 md:py-32 reveal overflow-hidden">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
            <div className="space-y-8">
              <div>
                <p className="text-metadata uppercase">Our Impact in Zanzibar</p>
                <h2 className="mt-4 text-[36px] leading-[44px] text-[#12323A] md:text-[56px] md:leading-[64px] font-serif">
                  A growing record of skills, enterprise, and community change.
                </h2>
              </div>
              <p className="max-w-2xl text-[17px] leading-[28px] text-[#454545] font-sans">
                Ubunifu Foundation is empowering youth and women through practical learning, mentorship, and social entrepreneurship. The result is a growing network of young people creating jobs, launching ventures, and strengthening communities across Zanzibar.
              </p>
              <Link to="/impact" className="inline-flex items-center gap-3 text-sm font-bold uppercase text-[#12323A] group">
                View Impact Stories
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white transition-transform group-hover:translate-x-1">
                  <ArrowRight size={16} />
                </span>
              </Link>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {[
                { name: "Unguja", image: "/unguja island.jpg", alt: "Unguja island map" },
                { name: "Pemba", image: "/pemba island.png", alt: "Pemba island map" }
              ].map((island) => (
                <div key={island.name} className="border border-[#DDEDE8] bg-[#F8FCFA] p-6 shadow-xl shadow-slate-900/5">
                  <div className="flex min-h-[280px] items-center justify-center border-l-4 border-[#F5B51B] pl-5">
                    <img src={island.image} alt={island.alt} className="max-h-[250px] w-full object-contain" />
                  </div>
                  <div className="mt-5 border-t border-[#DDEDE8] pt-4">
                    <p className="text-[24px] leading-[32px] font-semibold text-[#12323A]">{island.name}</p>
                    <p className="mt-1 text-metadata uppercase">Zanzibar reach</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 grid border-y border-[#DDEDE8] sm:grid-cols-2 lg:grid-cols-4">
            {impactMetrics.map((metric, index) => {
              const Icon = metric.icon;

              return (
                <div key={metric.label} className="border-b border-[#DDEDE8] p-6 last:border-b-0 sm:border-r sm:last:border-r-0 lg:border-b-0">
                  <div className="flex items-center justify-between gap-4">
                    <Icon className={cn("h-6 w-6", metric.accent)} />
                    <span className="text-metadata uppercase text-slate-400">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <p className="mt-6 text-[40px] leading-none font-semibold text-[#12323A]">
                    <AnimatedCounter value={metric.value} />
                  </p>
                  <h3 className="mt-4 text-[20px] leading-[28px] text-[#12323A] font-serif">{metric.label}</h3>
                  <p className="mt-2 text-[15px] leading-[23px] text-[#4A5A5A]">{metric.description}</p>
                </div>
              );
            })}
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

      {/* Trusted Partners Section */}
      <section className="py-24 bg-slate-50/50 border-t border-border/50 reveal">
        <Container>
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-[24px] font-medium text-body font-serif uppercase">Trusted Partners</h2>
            <p className="text-[16px] text-body font-normal font-sans leading-[22px] max-w-2xl mx-auto">
              We collaborate with leading organizations to amplify our impact and reach more young people across the region.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-16 lg:gap-20">
            <div className="flex items-center gap-3">
              <img src="/tuicare.png" alt="Tui Care Foundation" className="h-12 object-contain" />
              <div className="leading-tight border-l border-slate-300 pl-4">
                <p className="text-[13px] font-bold text-[#001D3D]">Tui Care</p>
                <p className="text-[13px] font-bold text-[#001D3D]">Foundation</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <img src="/sina.png" alt="SINA Social Innovation Academy" className="h-12 object-contain" />
              <div className="leading-tight border-l border-slate-300 pl-4">
                <p className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">Social Innovation</p>
                <p className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">Academy</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Empowerment Offerings ── */}
      <section className="bg-[#063A34] py-24 text-white md:py-32 reveal overflow-hidden">
        <Container>
          <div className="grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div className="space-y-8">
              <div>
                <p className="text-metadata uppercase text-white/70">Empowerment Offerings</p>
                <h2 className="mt-4 text-[36px] leading-[44px] text-white md:text-[56px] md:leading-[64px] font-serif">
                  Programs built for confidence, skills, and enterprise.
                </h2>
              </div>
              <p className="max-w-xl text-[17px] leading-[28px] text-white/75">
                We provide practical, real-world learning through programs that help participants discover purpose, build digital skills, design solutions, and create sustainable livelihoods.
              </p>
              <div className="relative mt-10">
                <div className="absolute -left-5 top-5 hidden h-full w-full border-2 border-[#F5B51B] md:block" aria-hidden="true" />
                <img
                  src="/home_empowerment_new.jpg"
                  alt="Ubunifu Foundation participants in an empowerment program"
                  className="relative z-10 aspect-[4/3] w-full rounded-lg object-cover shadow-2xl"
                />
              </div>
            </div>

            <div className="space-y-5">
              {featuredProjects.map((project, index) => {
                const Icon = programIcons[index] || BookOpenCheck;
                const accents = ["text-[#008AC1]", "text-[#0A8F8A]", "text-[#F5B51B]", "text-[#B7D66B]"];

                return (
                  <div key={project.id} className="grid gap-5 border-t border-white/15 pt-6 md:grid-cols-[auto_1fr_auto] md:items-start">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-white/10">
                      <Icon className={cn("h-6 w-6", accents[index])} />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-metadata uppercase text-white/60">{String(index + 1).padStart(2, "0")}</span>
                        <span className={cn("text-metadata uppercase", accents[index])}>Core pathway</span>
                      </div>
                      <h3 className="mt-2 text-[26px] leading-[34px] text-white font-serif">{project.title}</h3>
                      <p className="mt-3 text-[16px] leading-[25px] text-white/70">{project.description}</p>
                    </div>
                    <Link
                      to="/projects"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white hover:text-[#063A34]"
                      aria-label={`Explore ${project.title}`}
                    >
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                );
              })}

              <div className="border-t border-white/15 pt-8">
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-bold uppercase text-white transition-transform hover:scale-[1.02]"
                >
                  Explore All Programs
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Latest Blog - Minimalist Grid Redesign */}
      <section className="py-24 bg-background border-t border-border/50 reveal">
        <Container>
          {/* Section Header */}
          <div className="flex justify-between items-start mb-16">
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
