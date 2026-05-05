import { Eye, Target, TrendingUp, Compass, Rocket, Shield } from "lucide-react";
import Container from "@/components/layout/Container";
import usePageTitle from "@/hooks/usePageTitle";
import useScrollReveal from "@/hooks/useScrollReveal";

const visionPillars = [
  {
    title: "Youth-Led Innovation",
    description: "Empowering the next generation to solve local challenges with creative, sustainable solutions.",
    icon: Rocket,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Inclusive Economic Growth",
    description: "Creating a landscape where every young person and woman has the opportunity to achieve financial independence.",
    icon: TrendingUp,
    color: "bg-emerald-50 text-emerald-600"
  },
  {
    title: "Sustainable Ecosystems",
    description: "Fostering businesses and initiatives that protect Zanzibar's natural resources and blue economy.",
    icon: Shield,
    color: "bg-amber-50 text-amber-600"
  }
];

const Vision = () => {
  usePageTitle("Our Vision");
  useScrollReveal();

  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 bg-[#1a1635] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2000&auto=format&fit=crop" 
            alt="Visionary Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1635] via-transparent to-[#1a1635]" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-4xl space-y-6 reveal">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary text-[11px] font-bold tracking-[0.2em] uppercase border border-primary/20">
              The Path Ahead
            </span>
            <h1 className="text-[48px] md:text-[64px] lg:text-[80px] font-bold leading-[1.1] tracking-tight font-serif">
              Our Vision for <span className="text-primary italic">Zanzibar.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl font-light leading-relaxed">
              We envision a future where every Zanzibari youth is empowered to transform their community's challenges into sustainable opportunities.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. THE CORE VISION STATEMENT */}
      <section className="py-24 bg-white border-b border-slate-100">
        <Container>
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8 reveal">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Eye className="text-primary" size={32} />
              </div>
              <h2 className="text-[32px] md:text-[40px] font-bold text-[#001D3D] font-serif leading-tight">
                Empowering leaders to build a resilient legacy.
              </h2>
              <div className="space-y-4 text-base text-slate-600 leading-relaxed font-sans">
                <p>
                  At Ubunifu Foundation, our vision extends beyond immediate skills training. We are working toward a systemic shift in how Zanzibar's youth perceive their role in the economy and society.
                </p>
                <p>
                  We strive to be a catalyst for positive transformation, equipping youth and women with a high-quality education in entrepreneurial skills and vocational training that inspires creativity and leadership.
                </p>
              </div>
            </div>
            <div className="relative reveal">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop" 
                  alt="Students learning" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Stat Card */}
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl border border-slate-100 hidden md:block">
                <p className="text-5xl font-bold text-primary font-serif">2030</p>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-2">Vision Horizon</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. VISION PILLARS */}
      <section className="py-24 bg-slate-50/50">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4 reveal">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#001D3D] font-serif">Pillars of Transformation</h2>
            <p className="text-slate-500 font-sans">Our vision is built on three core pillars that guide every decision and program we launch.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {visionPillars.map((pillar, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow reveal">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${pillar.color}`}>
                  <pillar.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-[#001D3D] font-serif mb-4">{pillar.title}</h3>
                <p className="text-slate-600 text-[15px] leading-relaxed font-sans">{pillar.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. STRATEGIC DIRECTION */}
      <section className="py-24 bg-[#1a1635] text-white">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-6 reveal">
              <h2 className="text-[32px] md:text-[48px] font-bold font-serif leading-tight">
                Our Commitment to <br /> Sustainable Futures.
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6 reveal">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">1</div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold font-serif">Community-Led Change</h4>
                    <p className="text-white/60 text-sm leading-relaxed">We believe that real change must come from within the community, driven by those who understand its unique challenges.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">2</div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold font-serif">Resilience & Agility</h4>
                    <p className="text-white/60 text-sm leading-relaxed">Our programs are designed to be adaptable, ensuring our youth can thrive in an ever-changing global economy.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6 reveal">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">3</div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold font-serif">Global Connectivity</h4>
                    <p className="text-white/60 text-sm leading-relaxed">By connecting Zanzibari youth to global networks, we open doors to cross-border collaboration and learning.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">4</div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold font-serif">Long-term Mentorship</h4>
                    <p className="text-white/60 text-sm leading-relaxed">Vision is not achieved overnight. We commit to long-term support for our graduates as they scale their impact.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. CTA SECTION */}
      <section className="py-24 bg-white reveal">
        <Container>
          <div className="bg-slate-50 rounded-[3rem] p-12 md:p-20 text-center space-y-8 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            
            <h2 className="text-[32px] md:text-[48px] font-bold text-[#001D3D] font-serif tracking-tight">
              Let's build this future together.
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-sans">
              Whether you are a partner, a donor, or a volunteer, your support helps us turn this vision into a reality for the youth of Zanzibar.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <button className="px-10 py-4 bg-primary text-white rounded-full font-bold uppercase tracking-wider text-sm shadow-lg shadow-blue-200 hover:scale-105 transition-all">
                Become a Partner
              </button>
              <button className="px-10 py-4 border-2 border-[#001D3D] text-[#001D3D] rounded-full font-bold uppercase tracking-wider text-sm hover:bg-[#001D3D] hover:text-white transition-all">
                Learn More
              </button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Vision;
