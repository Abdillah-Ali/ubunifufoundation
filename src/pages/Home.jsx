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

const ProgramCard = ({ project }) => (
  <div className="group bg-card rounded-[2.5rem] overflow-hidden border border-border/40 shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 flex flex-col h-full reveal">
    <div className="aspect-[4/3] overflow-hidden relative">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
        <span className="text-white text-xs font-bold tracking-widest uppercase bg-primary/80 backdrop-blur-sm px-4 py-2 rounded-full">
          View Details
        </span>
      </div>
    </div>
    <div className="p-8 md:p-10 flex flex-col flex-1">
      <h3 className="text-xl font-bold leading-tight mb-4 group-hover:text-primary transition-colors tracking-tight">
        {project.title}
      </h3>
      <p className="text-base text-muted-foreground leading-relaxed flex-1 mb-8 font-medium line-clamp-3">
        {project.description}
      </p>
      
      {project.partner && (
        <div className="pt-6 border-t border-border/50 mb-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-2">
            In partnership with
          </p>
          <p className="text-sm font-bold text-foreground">
            {project.partner}
          </p>
        </div>
      )}
      
      <Link to="/projects">
        <Button className="w-full rounded-2xl bg-secondary hover:bg-primary text-foreground hover:text-white transition-all duration-300 font-bold py-6">
          See details
        </Button>
      </Link>
    </div>
  </div>
);


const Home = () => {
  usePageTitle("Home");

  const [latestPosts, setLatestPosts] = useState([]);
  useScrollReveal([latestPosts]);
  const featuredProjects = projects.filter((p) => p.status === "ongoing").slice(0, 4);

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

      {/* Featured Programs - Premium Card Grid Layout */}
      <section className="py-32 bg-background border-t border-border/50">
        <Container>
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 reveal">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-foreground mb-4">
                Our Core <span className="text-primary">Programs.</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground font-medium">
                Transforming lives through structured initiatives and community-driven progress.
              </p>
            </div>
            <Link to="/projects" className="hidden md:inline-block">
              <Button variant="outline" className="rounded-full px-8 py-6 border-2 border-foreground hover:bg-foreground hover:text-white transition-all font-bold text-sm tracking-tight">
                View All Programs
              </Button>
            </Link>
          </div>

          {/* 4-Column Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {featuredProjects.map((project) => (
              <ProgramCard key={project.id} project={project} />
            ))}
          </div>

          {/* Mobile view all */}
          <div className="md:hidden mt-12 text-center">
            <Link to="/projects">
              <Button variant="outline" className="w-full rounded-2xl border-2 border-foreground text-foreground hover:bg-foreground hover:text-white font-bold py-6 transition-all">
                View all programs
              </Button>
            </Link>
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
                View All News
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