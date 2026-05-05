import { ShieldCheck, Heart, Sparkles, Globe, MapPin, CheckCircle2 } from "lucide-react";
import Container from "@/components/layout/Container";
import usePageTitle from "@/hooks/usePageTitle";
import useScrollReveal from "@/hooks/useScrollReveal";

const values = [
  {
    title: "Innovation with Purpose",
    description: "We don't just innovate for the sake of it; we solve real community problems.",
    icon: Sparkles,
    color: "text-amber-600 bg-amber-50"
  },
  {
    title: "Radical Inclusion",
    description: "We ensure that youth and women from all backgrounds have a seat at the table.",
    icon: Heart,
    color: "text-rose-600 bg-rose-50"
  },
  {
    title: "Local Ownership",
    description: "Zanzibari challenges are solved by Zanzibari youth, ensuring long-term sustainability.",
    icon: MapPin,
    color: "text-emerald-600 bg-emerald-50"
  },
  {
    title: "Integrity & Trust",
    description: "We operate with full transparency and accountability to our community and partners.",
    icon: ShieldCheck,
    color: "text-blue-600 bg-blue-50"
  }
];

const WhyUF = () => {
  usePageTitle("Why UF");
  useScrollReveal();

  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 bg-[#1a4d2e] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2000&auto=format&fit=crop" 
            alt="Community Impact" 
            className="w-full h-full object-cover"
          />
        </div>

        <Container className="relative z-10">
          <div className="max-w-4xl space-y-8 reveal">
            <h1 className="text-[48px] md:text-[64px] lg:text-[72px] font-bold leading-[1.1] tracking-tight font-serif">
              Why <span className="text-emerald-300 italic">Ubunifu Foundation?</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl font-light leading-relaxed font-sans">
              Because we believe that the people closest to the problems are the ones best equipped to solve them.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. OUR UNIQUE APPROACH */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8 reveal">
              <h2 className="text-[32px] md:text-[42px] font-bold text-[#001D3D] font-serif leading-tight">
                A bridge between local <br /> talent and global impact.
              </h2>
              <div className="space-y-6 text-base text-slate-600 leading-relaxed font-sans">
                <p>
                  Ubunifu Foundation was born from a simple but powerful realization: Zanzibar is rich in talent, but lacks the structured support systems to turn that talent into economic opportunity.
                </p>
                <p>
                  By adapting global best practices in social innovation to our local culture, we create a unique space where tradition meets transformation.
                </p>
                <ul className="space-y-3 pt-4">
                  {[
                    "Hands-on mentorship from local leaders",
                    "Access to a global network of innovators",
                    "Focus on the blue economy and tourism",
                    "A culture of peer-to-peer learning"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 size={20} className="text-emerald-600 shrink-0" />
                      <span className="font-medium text-[#001D3D]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative reveal">
              <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200&auto=format&fit=crop" 
                  alt="Zanzibar Landscape" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Globe size={24} className="text-emerald-600" />
                </div>
                <div>
                  <p className="font-bold text-[#001D3D] font-serif">Global Standards</p>
                  <p className="text-xs text-slate-500">Local Implementation</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. CORE VALUES GRID */}
      <section className="py-24 bg-slate-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4 reveal">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#001D3D] font-serif">Our Core Values</h2>
            <p className="text-slate-500 font-sans">The principles that guide our work every single day.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow reveal">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${value.color}`}>
                  <value.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-[#001D3D] font-serif mb-4">{value.title}</h3>
                <p className="text-slate-600 text-[15px] leading-relaxed font-sans">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. THE UBUNIFU DIFFERENCE */}
      <section className="py-24 bg-white reveal">
        <Container>
          <div className="bg-[#1a4d2e] rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
            <div className="max-w-3xl space-y-12 relative z-10">
              <h2 className="text-[32px] md:text-[48px] font-bold font-serif leading-tight">
                The Ubunifu Difference.
              </h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <h4 className="text-xl font-bold font-serif text-emerald-300">Empowerment over Charity</h4>
                  <p className="text-white/70 text-[15px] leading-relaxed font-sans">
                    We don't just give handouts; we provide the tools for youth to create their own livelihoods and become independent impact drivers.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-xl font-bold font-serif text-emerald-300">Holistic Support</h4>
                  <p className="text-white/70 text-[15px] leading-relaxed font-sans">
                    We address the whole person—from technical skills and business acumen to confidence building and mental well-being.
                  </p>
                </div>
              </div>
            </div>
            {/* Background Accent */}
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full translate-y-1/3 translate-x-1/3 blur-3xl" />
          </div>
        </Container>
      </section>

      {/* 5. FINAL CTA */}
      <section className="py-24 bg-white reveal">
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#001D3D] font-serif">Support the movement.</h2>
            <p className="text-lg text-slate-600 font-sans leading-relaxed">
              Your contribution helps us scale our methodology and reach more youth in Zanzibar. Together, we can build a resilient and innovative future.
            </p>
            <div className="flex justify-center gap-4">
              <button className="px-10 py-4 bg-[#1a4d2e] text-white rounded-full font-bold uppercase tracking-wider text-sm hover:bg-[#1a4d2e]/90 transition-all">
                Donate Now
              </button>
              <button className="px-10 py-4 border-2 border-[#1a4d2e] text-[#1a4d2e] rounded-full font-bold uppercase tracking-wider text-sm hover:bg-[#1a4d2e] hover:text-white transition-all">
                Get Involved
              </button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default WhyUF;
