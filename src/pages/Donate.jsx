import { useState } from "react";
import { BookOpen, Users, Lightbulb, CheckCircle2, DollarSign, ArrowRight, Heart, Wallet, Target, TrendingUp, MapPin } from "lucide-react";
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
  { title: "Skills Training Programs", desc: "Youth engaged quality to training continuous cycles of unemployment and onnplontes.", img: p1, color: "bg-blue-500" },
  { title: "Women Empowerment Initiatives", desc: "Every donation empowers young people and skills, opportunities, and the tools they need to build as.", img: p2, color: "bg-emerald-500" },
  { title: "Community Development Projects", desc: "Community community, community service, community action community communities.", img: p3, color: "bg-amber-500" },
  { title: "Environmental Programs", desc: "Environment in support directly contributes to reducing unemployment and empowering programs.", img: p4, color: "bg-green-500" },
];

const Donate = () => {
  usePageTitle("Donate");
  const [customAmount, setCustomAmount] = useState("");

  const scrollToPayment = () => {
    document.getElementById("payment-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">

      {/* ─── 1. HERO SECTION ─── */}
      <section className="pt-32 pb-20 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-[14px] font-bold tracking-widest text-slate-500 uppercase">MAKE A DIFFERENCE:</p>
                <h1 className="text-[48px] md:text-[64px] font-bold leading-[1.1] tracking-tight text-[#001D3D] font-serif">
                  Support the Future <br /> of Youth.
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
            <div className="relative">
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl">
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
      <section className="py-20 bg-white">
        <Container>
          <h2 className="text-[32px] font-bold text-center text-[#001D3D] font-serif mb-16">The Challenge</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: "The Challenge", icon: Wallet, desc: "Without these resources, many face continuous cycles of unemployment and poverty.", color: "text-[#1a4d2e]", bg: "bg-[#eefcf3]" },
              { label: "Your Role", icon: Users, desc: "Every donation helps us provide training, mentorship, and opportunities.", color: "text-[#1a4d2e]", bg: "bg-[#eefcf3]" },
              { label: "Your Impact", icon: Target, desc: "Your support directly contributes to reducing unemployment and empowering communities.", color: "text-[#1a4d2e]", bg: "bg-[#eefcf3]" }
            ].map((item, i) => {
              const Icon = item.icon || DollarSign;
              return (
                <div key={i} className={cn("p-10 rounded-[2rem] space-y-4 border border-emerald-100/50 shadow-sm", item.bg)}>
                  <div className="w-12 h-12 rounded-xl flex items-start justify-start">
                    <Icon size={32} className={item.color} />
                  </div>
                  <h3 className="font-bold text-[#001D3D] text-lg font-serif">{item.label}</h3>
                  <p className="text-[14px] text-slate-600 leading-relaxed font-sans">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ─── 3. OUR SOLUTION ─── */}
      <section className="py-24 bg-white">
        <Container>
          <div className="text-center space-y-4 mb-20">
            <h2 className="text-[32px] font-bold text-[#001D3D] font-serif tracking-tight">Our Solution</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {solutions.map((sol, i) => (
              <div key={i} className="flex flex-col space-y-6">
                <div className="aspect-square rounded-full overflow-hidden border-[8px] border-slate-50 shadow-xl">
                  <img src={sol.img} alt={sol.title} className="w-full h-full object-cover" />
                </div>
                <div className="space-y-3">
                  <h4 className="flex items-start gap-3 font-bold text-[#001D3D] text-[16px] leading-tight font-serif">
                    <span className={cn("w-3 h-3 rounded-full mt-1 shrink-0", sol.color)} />
                    {sol.title}
                  </h4>
                  <p className="text-[13px] text-slate-500 leading-relaxed font-sans">{sol.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 bg-slate-50/30 border-y border-slate-100">
        <Container>
          <div className="grid lg:grid-cols-3 gap-20 items-start">

            {/* ─── 4. DONATION OPTIONS PANEL (SIDEBAR) ─── */}
            <div className="lg:col-span-1 bg-white p-8 rounded-[2.5rem] shadow-2xl shadow-blue-900/5 space-y-8 border border-slate-100">
              <div className="flex justify-center">
                <img src="/favicon.png" alt="Logo" className="w-16 h-16 object-contain" />
              </div>

              <div className="space-y-4">
                {donationOptions.map((opt, i) => {
                  const Icon = opt.icon;
                  return (
                    <button
                      key={i}
                      onClick={scrollToPayment}
                      className="w-full p-6 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-md transition-all group text-center space-y-2"
                    >
                      <div className="flex justify-center">
                        <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center">
                          <Icon size={24} className="text-emerald-600" />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <p className="text-2xl font-bold text-[#001D3D] font-serif">{opt.amount}</p>
                        <p className="text-[12px] font-bold text-slate-400 uppercase tracking-widest">{opt.tzs}</p>
                        <p className="text-[12px] text-slate-500 font-sans">({opt.title})</p>
                      </div>
                    </button>
                  );
                })}

                {/* Custom Amount */}
                <div className="p-6 rounded-3xl bg-white border border-slate-100 shadow-sm text-center space-y-3">
                  <h4 className="font-bold text-[#001D3D] font-serif">Custom Amount</h4>
                  <div className="flex justify-center">
                    <button
                      onClick={scrollToPayment}
                      className="w-10 h-10 rounded-full bg-[#007BFF] text-white flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-20">
              {/* ─── 5. STORIES OF CHANGE ─── */}
              <div className="space-y-10">
                <h2 className="text-[28px] font-bold text-[#001D3D] font-serif">Stories of Change</h2>
                <div className="grid md:grid-cols-[240px_1fr] gap-8 items-start">
                  <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl">
                    <img src="/success-story-mwamvua.png" alt="Mwamvua Khamis" className="w-full h-full object-cover" />
                  </div>
                  <div className="bg-[#eefcf3] p-10 rounded-[2.5rem] relative">
                    <div className="text-[64px] text-emerald-200 font-serif leading-none absolute top-4 left-6 opacity-80">“</div>
                    <div className="relative z-10 space-y-4">
                      <div className="space-y-1">
                        <h3 className="text-xl font-bold text-[#001D3D] font-serif leading-tight">Mwamvua Khamis,</h3>
                        <p className="text-sm font-bold text-emerald-700/70 uppercase tracking-widest">Founder of Safari Queen</p>
                      </div>
                      <p className="text-[15px] text-slate-700 font-sans leading-relaxed italic">
                        "Before joining UBUNIFU, I lacked confidence, clear goals... Since joining, I have developed skills in entrepreneurship... I now have clarity and purpose."
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ─── 6. PARTNER LOGOS & PROGRESS ─── */}
              <div className="space-y-12">
                <div className="flex flex-wrap items-center gap-12">
                  <div className="flex items-center gap-3">
                    <img src="/favicon.png" alt="Tui Care" className="h-10 opacity-60 grayscale" />
                    <div className="leading-tight">
                      <p className="text-[12px] font-bold text-[#001D3D]">Tui Care</p>
                      <p className="text-[12px] font-bold text-[#001D3D]">Foundation</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-bold tracking-tighter text-[#001D3D]">SINA</span>
                    <div className="leading-tight border-l border-slate-200 pl-3">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Social Innovation</p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Academy</p>
                    </div>
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center justify-between text-[13px] font-bold">
                      <p className="text-[#001D3D]">We are <span className="text-blue-600">65%</span> of the way to our goal of funding the Hub for another year.</p>
                      <TrendingUp size={20} className="text-emerald-500" />
                    </div>
                    <Progress value={65} className="h-2.5 bg-slate-100 [&>div]:bg-blue-500" />
                  </div>
                </div>
                <p className="text-[12px] text-slate-400 font-sans leading-relaxed text-center">
                  All donations are used responsibly and transparently and overforements ovs profitons.
                </p>
              </div>

              {/* ─── 7. SECURE TRANSFER ─── */}
              <div id="payment-section" className="space-y-10 pt-10 border-t border-slate-100">
                <h2 className="text-[28px] font-bold text-center text-[#001D3D] font-serif">Secure Transfer</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* PBZ Card */}
                  <div className="p-8 rounded-[2rem] bg-blue-50/20 border border-blue-100/50 space-y-6">
                    <div className="flex items-center gap-3">
                      <span className="text-blue-600 font-bold">1.</span>
                      <h3 className="font-bold text-[#001D3D] font-serif">PBZ (TZS)</h3>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Account No</p>
                        <p className="text-lg font-bold text-[#001D3D]">0791623001</p>
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Account Name</p>
                        <p className="text-sm font-medium text-slate-600">Ubunifu Foundation</p>
                      </div>
                      <div className="flex items-center gap-2 text-blue-600">
                        <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center">
                          <span className="text-[10px]">+</span>
                        </div>
                        <p className="text-xs font-bold">+255 623 067 338</p>
                      </div>
                    </div>
                  </div>

                  {/* Equity Card */}
                  <div className="p-8 rounded-[2rem] bg-[#eefcf3] border border-emerald-100/50 space-y-6">
                    <div className="flex items-center gap-3">
                      <span className="text-emerald-600 font-bold">2.</span>
                      <h3 className="font-bold text-[#001D3D] font-serif">Equity (USD)</h3>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Account No</p>
                        <p className="text-lg font-bold text-[#001D3D]">3014111866159</p>
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Account Name</p>
                        <p className="text-sm font-medium text-slate-600">Equity (USD)</p>
                      </div>
                      <div className="flex items-center gap-2 text-emerald-600">
                        <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center">
                          <span className="text-[10px]">+</span>
                        </div>
                        <p className="text-xs font-bold">+255 629 766 203</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Donate;