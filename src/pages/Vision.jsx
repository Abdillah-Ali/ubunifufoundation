import { Eye, Rocket, TrendingUp, Users, Award, CheckCircle2 } from "lucide-react";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
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
    color: "bg-green-50 text-green-600"
  },
  {
    title: "Community Leadership",
    description: "Fostering strong leaders who drive positive change and sustainable development in their communities.",
    icon: Users,
    color: "bg-amber-50 text-amber-600"
  }
];

const Vision = () => {
  usePageTitle("Our Vision");
  useScrollReveal();

  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 bg-[#2D1457] text-white overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 right-10 w-64 h-64 border-4 border-[#F4B942]/20 rounded-full opacity-40 blur-sm" />
        <div className="absolute bottom-10 left-10 w-48 h-48 border-4 border-[#1696D2]/20 rounded-full opacity-40 blur-sm" />

        <Container className="relative z-10">
          <div className="max-w-4xl space-y-6 reveal">
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-[11px] font-bold tracking-[0.15em] uppercase">
              The Path Ahead
            </span>
            <h1 className="text-[48px] md:text-[64px] lg:text-[72px] font-bold leading-[1.1] tracking-tight font-serif">
              Our Vision for <span className="text-[#F4B942] italic">Zanzibar</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/85 font-light leading-relaxed max-w-2xl">
              We envision a future where every young person and woman in Zanzibar has access to opportunities that enable them to thrive economically, socially, and creatively.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. VISION PILLARS */}
      <section className="py-24 bg-[#F5F5F5]">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4 reveal">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#2D1457] font-serif">Pillars of Our Vision</h2>
            <p className="text-[#404040]">Our vision is built on three core pillars that guide every decision and program we launch.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {visionPillars.map((pillar, i) => (
              <div key={i} className="bg-white p-10 rounded-2xl border-2 border-[#F5F5F5] shadow-md hover:shadow-lg transition-all reveal group">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${pillar.color} group-hover:scale-110 transition-transform`}>
                  <pillar.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-[#2D1457] font-serif mb-4">{pillar.title}</h3>
                <p className="text-[#404040] text-[15px] leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. STRATEGIC DIRECTION */}
      <section className="py-24 bg-[#2D1457] text-white">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-6 reveal">
              <h2 className="text-[32px] md:text-[48px] font-bold font-serif leading-tight">
                Our Commitment to <br /> Sustainable Futures
              </h2>
              <div className="w-24 h-1 bg-[#F4B942] mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6 reveal">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-[#F4B942]/20 flex items-center justify-center text-[#F4B942] font-bold">1</div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold font-serif">Community-Led Change</h4>
                    <p className="text-white/80 text-sm leading-relaxed">We believe that real change must come from within the community, driven by those who understand its unique challenges.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-[#1696D2]/20 flex items-center justify-center text-[#1696D2] font-bold">2</div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold font-serif">Resilience & Agility</h4>
                    <p className="text-white/80 text-sm leading-relaxed">Our programs are designed to be adaptable, ensuring our youth can thrive in an ever-changing global economy.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6 reveal">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-[#38A169]/20 flex items-center justify-center text-[#38A169] font-bold">3</div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold font-serif">Global Connectivity</h4>
                    <p className="text-white/80 text-sm leading-relaxed">By connecting Zanzibari youth to global networks, we open doors to cross-border collaboration and learning.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-[#1696D2]/20 flex items-center justify-center text-[#1696D2] font-bold">4</div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold font-serif">Long-term Mentorship</h4>
                    <p className="text-white/80 text-sm leading-relaxed">Vision is not achieved overnight. We commit to long-term support for our graduates as they scale their impact.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. CTA SECTION */}
      <section className="py-24 bg-white">
        <Container>
          <div className="bg-gradient-to-r from-[#2D1457] to-[#1696D2] rounded-3xl p-12 md:p-20 text-center space-y-8 relative overflow-hidden text-white reveal">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            
            <h2 className="text-[32px] md:text-[48px] font-bold font-serif tracking-tight relative z-10">
              Let's build this future together
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto relative z-10">
              Whether you are a partner, a donor, or a volunteer, your support helps us turn this vision into a reality for the youth of Zanzibar.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4 relative z-10">
              <Button
                className="px-10 py-4 bg-[#F4B942] text-[#2D1457] hover:bg-yellow-400 font-bold rounded-full text-sm uppercase tracking-wider"
              >
                Become a Partner
              </Button>
              <Button
                className="px-10 py-4 border-2 border-white text-white hover:bg-white hover:text-[#2D1457] font-bold rounded-full text-sm uppercase tracking-wider transition-all"
                variant="outline"
              >
                Learn More
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Vision;
