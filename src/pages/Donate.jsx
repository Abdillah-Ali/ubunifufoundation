import { useState } from "react";
import { BookOpen, Users, Lightbulb, CheckCircle2, DollarSign, ArrowRight, Heart, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import Container from "@/components/layout/Container";
import usePageTitle from "@/hooks/usePageTitle";
import { cn } from "@/lib/utils";

// Hero images
import p1 from "@/assets/hero/p1.png";
import p2 from "@/assets/hero/p2.png";
import p3 from "@/assets/hero/p3.png";
import p4 from "@/assets/hero/p4.png";

const donationOptions = [
  { amount: "$10", tzs: "TZS 25,000", title: "Training Materials", impact: "Supports training materials for one participant.", icon: BookOpen },
  { amount: "$25", tzs: "TZS 62,500", title: "Mentorship Session", impact: "Supports a dedicated mentorship session.", icon: Users },
  { amount: "$50", tzs: "TZS 125,000", title: "Youth Program", impact: "Supports a full youth training program.", icon: Heart },
];

const solutions = [
  { title: "Skills Training Programs", desc: "Youth engaged quality to training continuous cycles of unemployment and opportunities.", img: p1 },
  { title: "Women Empowerment Initiatives", desc: "Every donation empowers young people and skills, opportunities, and the tools they need to build as.", img: p2 },
  { title: "Community Development Projects", desc: "Community community, community service, community action community communities.", img: p3 },
  { title: "Environmental Programs", desc: "Environment in support directly contributes to reducing unemployment and empowering programs.", img: p4 },
];

const Donate = () => {
  usePageTitle("Donate");
  const [customAmount, setCustomAmount] = useState("");

  const scrollToPayment = () => {
    document.getElementById("payment-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">

      {/* ─── 1. SPLIT HERO SECTION ─── */}
      <section className="pt-32 pb-20 bg-background overflow-hidden">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 reveal">
              <div className="space-y-4">
                <p className="text-[11px] font-bold tracking-[0.2em] text-slate-500 uppercase">Make a Difference:</p>
                <h1 className="text-[42px] md:text-[56px] lg:text-[68px] font-medium leading-[1.05] tracking-tight text-[#001D3D] font-serif">
                  Support the Future of Youth.
                </h1>
                <p className="text-base md:text-lg text-slate-600 max-w-md font-sans leading-relaxed">
                  Your contribution empowers young people and women with skills, opportunities, and the tools they need to build sustainable lives.
                </p>
              </div>
              <Button
                onClick={scrollToPayment}
                className="rounded-full bg-[#007BFF] hover:bg-[#0056b3] text-white px-10 py-6 text-sm font-bold uppercase tracking-wider shadow-lg shadow-blue-200"
              >
                Donate Now
              </Button>
            </div>

            {/* Right Image */}
            <div className="relative reveal">
              <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden border-[12px] border-slate-50 shadow-2xl skew-y-1">
                <img
                  src="/zanzibar_youth_innovation.png"
                  alt="Ubunifu Youth Innovation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── 2. THE CHALLENGE ─── */}
      <section className="py-20 bg-slate-50/50">
        <Container>
          <h2 className="text-[28px] md:text-[32px] font-medium text-center text-[#001D3D] font-serif mb-16">The Challenge</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: "The Challenge", icon: Wallet, desc: "Without these resources, many face continuous cycles of unemployment and poverty.", color: "text-emerald-600", bg: "bg-emerald-50" },
              { label: "Your Role", icon: Users, desc: "Every donation helps us provide training, mentorship, and opportunities.", color: "text-blue-600", bg: "bg-blue-50" },
              { label: "Your Impact", icon: Target, desc: "Your support directly contributes to reducing unemployment and empowering communities.", color: "text-emerald-600", bg: "bg-emerald-50" }
            ].map((item, i) => {
              const Icon = item.icon || DollarSign;
              return (
                <div key={i} className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm space-y-4 hover:shadow-md transition-shadow">
                  <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center", item.bg)}>
                    <Icon size={24} className={item.color} />
                  </div>
                  <h3 className="font-bold text-[#001D3D] font-serif">{item.label}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-sans">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ─── 3. OUR SOLUTION ─── */}
      <section className="py-24 bg-background">
        <Container>
          <div className="text-center space-y-4 mb-20">
            <h2 className="text-[28px] md:text-[36px] font-medium text-[#001D3D] font-serif tracking-tight">Our Solution</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
            {solutions.map((sol, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-6 group">
                <div className="w-48 h-48 rounded-full overflow-hidden border-[6px] border-slate-50 shadow-xl group-hover:scale-105 transition-transform duration-500">
                  <img src={sol.img} alt={sol.title} className="w-full h-full object-cover" />
                </div>
                <div className="space-y-3">
                  <h4 className="flex items-center justify-center gap-2 font-bold text-[#001D3D] text-[15px] leading-tight font-serif px-4">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    {sol.title}
                  </h4>
                  <p className="text-[13px] text-slate-500 leading-relaxed font-sans max-w-[240px] mx-auto">{sol.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 bg-slate-50/30 border-y border-slate-100">
        <Container>
          <div className="grid lg:grid-cols-3 gap-20 items-start">

            {/* ─── 4. DONATION OPTIONS PANEL ─── */}
            <div className="lg:col-span-1 bg-white p-10 rounded-[3rem] shadow-2xl shadow-blue-900/5 space-y-10 border border-slate-100 relative overflow-hidden">
              <div className="flex flex-col items-center text-center space-y-4">
                <img src="/favicon.png" alt="Logo" className="w-16 h-16 object-contain grayscale opacity-60" />
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                  <Heart size={16} fill="currentColor" />
                </div>
              </div>

              <div className="space-y-4">
                {donationOptions.map((opt, i) => (
                  <button
                    key={i}
                    onClick={scrollToPayment}
                    className="w-full p-6 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 border border-transparent hover:border-slate-100 rounded-3xl transition-all group group-hover:-translate-y-1"
                  >
                    <div className="flex flex-col items-center gap-2">
                      <opt.icon size={28} className="text-[#0a3d3d] mb-2" />
                      <span className="text-3xl font-bold text-[#001D3D] font-serif leading-none">{opt.amount}</span>
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">{opt.tzs}</span>
                      <span className="text-[12px] text-slate-500 font-sans mt-1">({opt.title})</span>
                    </div>
                  </button>
                ))}

                {/* Custom Amount */}
                <div className="p-8 rounded-[2.5rem] bg-slate-50/30 border-2 border-dashed border-slate-200 text-center space-y-4">
                  <h4 className="font-bold text-[#001D3D] font-serif">Custom Amount</h4>
                  <div className="relative group">
                    <button
                      onClick={scrollToPayment}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#007BFF] text-white flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <ArrowRight size={18} />
                    </button>
                    <div className="h-14 w-full rounded-full border border-slate-200 bg-white" />
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-24">
              {/* ─── 5. STORIES OF CHANGE ─── */}
              <div className="space-y-12">
                <h2 className="text-[28px] md:text-[34px] font-medium text-[#001D3D] font-serif text-center md:text-left">Stories of Change</h2>
                <div className="bg-emerald-50/50 p-8 md:p-12 rounded-[2.5rem] grid md:grid-cols-[200px_1fr] gap-10 items-center border border-emerald-100/50">
                  <div className="aspect-square rounded-3xl overflow-hidden shadow-xl">
                    <img src="/success-story-mwamvua.png" alt="Mwamvua Khamis" className="w-full h-full object-cover" />
                  </div>
                  <div className="space-y-6 relative">
                    <div className="text-[64px] text-emerald-200 font-serif leading-none absolute -top-10 -left-6 opacity-80">“</div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-[#001D3D] font-serif">Mwamvua Khamis,</h3>
                      <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Founder of Safari Queen</p>
                    </div>
                    <p className="text-lg text-slate-600 font-serif leading-relaxed italic pr-4">
                      Before joining UBUNIFU, I lacked confidence, clear goals... Since joining, I have developed skills in entrepreneurship... I now have clarity and purpose.
                    </p>
                  </div>
                </div>
              </div>

              {/* ─── 6. PARTNER LOGOS & PROGRESS ─── */}
              <div className="space-y-16">
                <div className="flex flex-wrap justify-between items-center gap-12 opacity-80 filter grayscale">
                  <div className="flex flex-col items-center gap-2">
                    <img src="/favicon.png" alt="Tui Care" className="h-10 opacity-30 object-contain" />
                    <span className="text-sm font-bold tracking-tighter text-[#001D3D]">Tui Care Foundation</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-3xl font-bold tracking-tighter text-[#001D3D]">SINA</span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] -mt-1">Social Innovation Academy</span>
                  </div>
                </div>

                <div className="space-y-6 bg-white p-10 rounded-3xl border border-slate-100 shadow-sm relative">
                  <div className="flex items-center justify-between text-sm font-bold mb-2">
                    <p className="text-[#001D3D]">We are <span className="text-blue-600">65%</span> of the way to our goal of funding the Hub for another year.</p>
                    <TrendingUp size={24} className="text-emerald-500" />
                  </div>
                  <Progress value={65} className="h-3 bg-slate-100 [&>div]:bg-blue-500" />
                  <p className="text-[12px] text-slate-400 font-sans leading-relaxed text-center">
                    All donations are used responsibly and transparently and overforements ovs profitons.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── 7. SECURE TRANSFER (BANK DETAILS) ─── */}
      <section id="payment-section" className="py-24 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <h2 className="text-[32px] md:text-[38px] font-medium text-center text-[#001D3D] font-serif">Secure Transfer</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* PBZ Card */}
              <div className="p-10 rounded-[3rem] bg-blue-50/30 border border-blue-100 space-y-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 text-blue-100 group-hover:text-blue-200 transition-colors">
                  <Users size={120} strokeWidth={1} />
                </div>
                <div className="flex items-center gap-5 relative">
                  <span className="w-12 h-12 rounded-2xl bg-blue-500 text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-blue-200">1</span>
                  <h3 className="text-2xl font-bold text-[#001D3D] font-serif">PBZ (TZS)</h3>
                </div>
                <div className="space-y-5 relative">
                  <div>
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">Account No</p>
                    <p className="text-2xl font-bold text-[#001D3D] font-serif">0791623001</p>
                  </div>
                  <div className="pt-5 border-t border-blue-100/50">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">Account Name</p>
                    <p className="text-sm font-medium text-slate-600">Ubunifu Foundation</p>
                  </div>
                </div>
              </div>

              {/* Equity Card */}
              <div className="p-10 rounded-[3rem] bg-emerald-50/30 border border-emerald-100 space-y-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 text-emerald-100 group-hover:text-emerald-200 transition-colors">
                  <Target size={120} strokeWidth={1} />
                </div>
                <div className="flex items-center gap-5 relative">
                  <span className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-emerald-200">2</span>
                  <h3 className="text-2xl font-bold text-[#001D3D] font-serif">Equity (USD)</h3>
                </div>
                <div className="space-y-5 relative">
                  <div>
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">Account No</p>
                    <p className="text-2xl font-bold text-[#001D3D] font-serif">3014111866159</p>
                  </div>
                  <div className="pt-5 border-t border-emerald-100/50">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">Account Name</p>
                    <p className="text-sm font-medium text-slate-600">Equity (USD)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#001D3D] p-12 rounded-[3.5rem] flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl">
              <div className="flex items-center gap-6">
                <img src="/favicon.png" alt="Logo" className="w-[60px] h-[60px] object-contain invert brightness-0" />
                <div className="space-y-1">
                  <p className="text-xl font-bold text-white font-serif tracking-tight">Ubunifu Foundation</p>
                  <p className="text-blue-300 text-sm font-sans uppercase tracking-[0.2em] font-medium">Empowering Sustainable Futures</p>
                </div>
              </div>
              <div className="flex gap-4">
                {/* Social placeholders representing the FB/TW/LI icons in ref */}
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-500 transition-all cursor-pointer">
                    <div className="w-4 h-4 bg-white/20 rounded-sm" />
                  </div>
                ))}
                <Button className="rounded-full bg-[#007BFF] hover:bg-[#0056b3] text-white px-8 ml-4">Donate Now</Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Donate;