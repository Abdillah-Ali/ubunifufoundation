import { Box, Layers, RefreshCw, Zap, Users, ShieldCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "@/components/layout/Container";
import usePageTitle from "@/hooks/usePageTitle";
import useScrollReveal from "@/hooks/useScrollReveal";

const modelSteps = [
  {
    title: "Discovery",
    description: "Identifying personal potential and community challenges that can be transformed into opportunities.",
    icon: Zap,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Design",
    description: "Developing innovative solutions and business models through creative thinking and prototyping.",
    icon: Layers,
    color: "bg-emerald-50 text-emerald-600"
  },
  {
    title: "Development",
    description: "Equipping scholars with the technical and soft skills needed to bring their vision to life.",
    icon: Box,
    color: "bg-amber-50 text-amber-600"
  },
  {
    title: "Deployment",
    description: "Launching social enterprises and initiatives that create real impact and sustainable livelihoods.",
    icon: RefreshCw,
    color: "bg-rose-50 text-rose-600"
  }
];

const Model = () => {
  usePageTitle("Our Model");
  useScrollReveal();

  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 bg-[#0a3d3d] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/about_vision.jpg" 
            alt="Collaboration and Growth" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a3d3d]/70 via-[#0a3d3d]/80 to-transparent" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-4xl space-y-8 reveal">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[11px] font-bold tracking-[0.2em] uppercase border border-emerald-500/20">
              The Empowerment Engine
            </span>
            <h1 className="text-[48px] md:text-[64px] lg:text-[72px] font-bold leading-[1.1] tracking-tight font-serif">
              A Self-Driven <br /> <span className="text-emerald-400 italic">Learning Space.</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl font-light leading-relaxed font-sans">
              Our model is built on the principles of self-governance and responsible learning, empowering youth to take ownership of their future.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. THE CORE PHILOSOPHY */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative reveal">
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src="/about_vision.jpg" 
                  alt="Our vision in action" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-6 -right-6 bg-[#c49a2a] p-8 rounded-3xl shadow-xl text-white z-10">
                <Users size={40} />
                <p className="mt-4 font-bold font-serif text-lg">Community Centered</p>
              </div>
            </div>
            <div className="space-y-8 reveal">
              <h2 className="text-[32px] md:text-[42px] font-bold text-[#001D3D] font-serif leading-tight">
                Beyond traditional <br /> education.
              </h2>
              <div className="space-y-6 text-base text-slate-600 leading-relaxed font-sans">
                <p>
                  Ubunifu Foundation offers a unique, self-driven learning environment. Unlike traditional vocational schools, we don't just teach tasks; we cultivate mindsets.
                </p>
                <p className="font-medium text-[#001D3D]">
                  "We believe that true empowerment happens when a young person is given the responsibility to drive their own growth."
                </p>
                <div className="pt-4 flex items-center gap-4 text-[#0a3d3d]">
                  <ShieldCheck size={24} />
                  <span className="font-bold text-sm uppercase tracking-widest">Self-Responsible Learning</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. THE JOURNEY BLOCKS */}
      <section className="py-24 bg-slate-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4 reveal">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#001D3D] font-serif">The Empowerment Journey</h2>
            <p className="text-slate-500 font-sans">Our scholars progress through four critical stages of transformation.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modelSteps.map((step, i) => (
              <div key={i} className="group bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-all reveal">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${step.color}`}>
                  <step.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-[#001D3D] font-serif mb-3">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-sans">{step.description}</p>
                <div className="mt-6 pt-6 border-t border-slate-50 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs font-bold uppercase tracking-wider">Phase {i + 1}</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. SINA CONNECTION */}
      <section className="py-24 bg-white overflow-hidden">
        <Container>
          <div className="bg-[#0a3d3d] rounded-[3rem] text-white p-12 md:p-20 relative reveal">
            {/* Visual element */}
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="20" strokeDasharray="10 20" />
              </svg>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              <div className="space-y-8">
                <h2 className="text-[32px] md:text-[48px] font-bold font-serif leading-tight">
                  The SINA Model <br /> Partnership.
                </h2>
                <p className="text-lg text-white/70 leading-relaxed font-sans">
                  Ubunifu Foundation is proud to be part of the Social Innovation Academy (SINA) global community. We adapt the proven SINA model to the unique cultural and economic context of Zanzibar.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="px-6 py-3 bg-white/10 rounded-2xl border border-white/10">
                    <p className="text-xs font-bold uppercase tracking-widest text-emerald-400">Proven</p>
                    <p className="font-serif">Global Success</p>
                  </div>
                  <div className="px-6 py-3 bg-white/10 rounded-2xl border border-white/10">
                    <p className="text-xs font-bold uppercase tracking-widest text-emerald-400">Contextual</p>
                    <p className="font-serif">Zanzibar Focused</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 space-y-6">
                <h4 className="text-xl font-bold font-serif">Key Principles</h4>
                <ul className="space-y-4">
                  {[
                    "Learning by Doing (Hands-on experience)",
                    "Self-Governance (Scholars lead the hub)",
                    "Social Enterprise Focus (Impact + Profit)",
                    "Community Accountability (Peer support)"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span className="text-[15px] font-sans">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. FINAL CTA */}
      <section className="py-24 bg-white reveal">
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#001D3D] font-serif">See the model in action.</h2>
            <p className="text-lg text-slate-600 font-sans leading-relaxed">
              Our impact is the best evidence of our model's success. Explore the stories of youth who have transformed their lives through our self-driven learning space.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                to="/impact"
                className="px-10 py-4 bg-[#0a3d3d] text-white rounded-full font-bold uppercase tracking-wider text-sm hover:bg-[#0a3d3d]/90 transition-all"
              >
                Explore Our Impact
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Model;
