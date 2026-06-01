import { useState } from "react";
import { BookOpen, Users, Lightbulb, CheckCircle2, DollarSign, ArrowRight, Heart, Wallet, Target, TrendingUp, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import Container from "@/components/layout/Container";
import usePageTitle from "@/hooks/usePageTitle";
import { cn } from "@/lib/utils";

// Hero images
const donationOptions = [
  { amount: "$10", tzs: "TZS 25,000", title: "Training Materials", impact: "Supports training materials for one participant.", icon: BookOpen },
  { amount: "$25", tzs: "TZS 62,500", title: "Mentorship Session", impact: "Supports a dedicated mentorship session.", icon: Users },
  { amount: "$50", tzs: "TZS 125,000", title: "Youth Program", impact: "Supports a full youth training program.", icon: Heart },
];

const solutions = [
  { title: "Skills Training Programs", desc: "Equipping youth with practical skills to break the cycle of unemployment and build sustainable careers.", img: "/abdallah.png", color: "bg-blue-500" },
  { title: "Women Empowerment Initiatives", desc: "Providing women with the resources and mentorship they need to launch successful enterprises.", img: "/aisha.png", color: "bg-emerald-500" },
  { title: "Community Development Projects", desc: "Strengthening local communities through collaborative action and sustainable infrastructure.", img: "/khamis.png", color: "bg-amber-500" },
  { title: "Environmental Programs", desc: "Protecting Zanzibar's natural beauty through conservation efforts and environmental education.", img: "/munira.png", color: "bg-green-500" },
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
      <section className="pt-16 pb-0 bg-white overflow-hidden relative min-h-[600px] flex items-center">
        <Container>
          <div className="relative flex flex-col lg:flex-row items-center lg:items-end">
            {/* Left Content - Overlapping Text */}
            <div className="w-full lg:w-3/5 space-y-8 py-16 relative z-20">
              <div className="space-y-4">
                <p className="text-metadata uppercase">MAKE A DIFFERENCE:</p>
                <h1 className="text-[44px] md:text-[60px] lg:text-[72px] font-medium leading-[1.1] tracking-tight text-body font-serif">
                  Support the Future <br /> of Youth.
                </h1>
                <p className="text-[16px] text-body font-sans leading-[22px] max-w-md">
                  Your contribution empowers young people and women with skills, opportunities, and the tools they need to build sustainable lives.
                </p>
              </div>
              <Button
                onClick={scrollToPayment}
                className="rounded-xl bg-[#00A3E1] hover:bg-[#0081B3] text-white px-8 py-7 text-lg font-bold transition-all shadow-lg shadow-[#00A3E1]/20"
              >
                Donate Now
              </Button>
            </div>

            {/* Right Image - Transparent Cutout Effect */}
            <div className="w-full lg:w-[65%] relative h-full flex items-end justify-center lg:justify-end lg:-ml-[20%] z-10 pointer-events-none">
              <div className="relative w-full max-w-[900px] aspect-[4/3] lg:aspect-auto lg:h-[700px] -mb-1">
                <img
                  src="/founders_hero.png"
                  alt="Support the Future of Youth"
                  className="w-full h-full object-contain object-bottom transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── 2. THE CHALLENGE ─── */}
      <section className="py-20 bg-white">
        <Container>
          <h2 className="text-[24px] font-medium text-center text-body font-serif mb-16">The Challenge</h2>
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
                  <h3 className="text-[24px] font-medium text-body font-serif leading-[32px]">{item.label}</h3>
                  <p className="text-[16px] text-body leading-[22px] font-sans">{item.desc}</p>
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
            <h2 className="text-[24px] font-medium text-body font-serif leading-[32px] tracking-tight">Our Solution</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {solutions.map((sol, i) => (
              <div key={i} className="flex flex-col space-y-6">
                <div className="aspect-square rounded-full overflow-hidden border-[8px] border-slate-50 shadow-xl">
                  <img src={sol.img} alt={sol.title} className="w-full h-full object-cover" />
                </div>
                <div className="space-y-3">
                  <h4 className="flex items-start gap-3 font-medium text-body text-[24px] leading-[32px] font-serif">
                    <span className={cn("w-3 h-3 rounded-full mt-3 shrink-0", sol.color)} />
                    {sol.title}
                  </h4>
                  <p className="text-[16px] text-body leading-[22px] font-sans">{sol.desc}</p>
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
                <div className="text-center">
                  <span className="text-3xl font-bold font-serif">
                    <span className="text-red-600">Ubunifu</span>
                    <span className="text-blue-600"> Foundation</span>
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                {donationOptions.map((opt, i) => {
                  const Icon = opt.icon;
                  return (
                    <div
                      key={i}
                      className="w-full p-6 bg-white border border-slate-100 rounded-3xl shadow-sm text-center space-y-2"
                    >
                      <div className="flex justify-center">
                        <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center">
                          <Icon size={24} className="text-emerald-600" />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <p className="text-[24px] font-medium text-body font-serif leading-[32px]">{opt.amount}</p>
                        <p className="text-metadata uppercase">{opt.tzs}</p>
                        <p className="text-metadata">({opt.title})</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-2 space-y-20">
              {/* ─── 5. STORIES OF CHANGE ─── */}
              <div className="space-y-10">
                <h2 className="text-[24px] font-medium text-body font-serif leading-[32px]">Stories of Change</h2>
                <div className="grid md:grid-cols-[240px_1fr] gap-8 items-start">
                  <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl">
                    <img src="/mwamvua.png" alt="Mwamvua Khamis" className="w-full h-full object-cover" />
                  </div>
                  <div className="bg-[#eefcf3] p-10 rounded-[2.5rem] relative">
                    <div className="text-[64px] text-emerald-200 font-serif leading-none absolute top-4 left-6 opacity-80">“</div>
                    <div className="relative z-10 space-y-4">
                      <div className="space-y-1">
                        <h3 className="text-xl font-bold text-[#001D3D] font-serif leading-tight">Mwamvua Khamis,</h3>
                        <p className="text-sm font-bold text-emerald-700/70 uppercase tracking-widest">Founder of Safari Queen</p>
                      </div>
                      <p className="text-[16px] text-body font-sans leading-[22px] italic">
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
                    <img src="/tuicare.png" alt="Tui Care Foundation" className="h-10 object-contain" />
                    <div className="leading-tight">
                      <p className="text-[12px] font-bold text-[#001D3D]">Tui Care</p>
                      <p className="text-[12px] font-bold text-[#001D3D]">Foundation</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <img src="/sina.png" alt="SINA Social Innovation Academy" className="h-10 object-contain" />
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
                  All donations are used responsibly and transparently to maximize impact for our community.
                </p>
              </div>

              {/* ─── 7. SECURE TRANSFER ─── */}
              <div id="payment-section" className="space-y-10 pt-10 border-t border-slate-100 -mx-20 px-20 lg:-mx-32 lg:px-32">
                <h2 className="text-[28px] font-bold text-center text-[#001D3D] font-serif">Secure Transfer</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                  {/* Payment Methods Card */}
                  <div className="bg-emerald-50 p-10 rounded-[2rem] border border-emerald-100 shadow-sm space-y-6 h-full w-full">
                    <h3 className="font-bold text-[#001D3D] font-serif text-xl">Online Payment Methods</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm flex-shrink-0">💳</div>
                        <div>
                          <p className="font-semibold text-sm text-[#001D3D]">Credit Card (Visa/Mastercard)</p>
                          <p className="text-xs text-slate-600 mt-1">Fast and secure international transfers</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm flex-shrink-0">🅿️</div>
                        <div>
                          <p className="font-semibold text-sm text-[#001D3D]">PayPal</p>
                          <p className="text-xs text-slate-600 mt-1">Secure payment via your PayPal account</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-sm flex-shrink-0">📱</div>
                        <div>
                          <p className="font-semibold text-sm text-[#001D3D]">Mobile Money</p>
                          <p className="text-xs text-slate-600 mt-1">Send money through mobile payment services</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Amana Bank Zanzibar Card */}
                  <div className="bg-emerald-50 p-10 rounded-[2rem] border border-emerald-100 shadow-sm space-y-6 h-full w-full">
                    <div className="text-center space-y-2">
                      <h3 className="font-bold text-[#001D3D] font-serif text-xl">Amana Bank Zanzibar</h3>
                      <p className="text-emerald-600 font-semibold text-xs">Bank Transfer Details</p>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                        <p className="text-[10px] font-bold text-slate-500 mb-1 uppercase">Account Name</p>
                        <p className="text-sm font-bold text-[#001D3D]">Ubunifu Foundation</p>
                      </div>
                      <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-600">
                        <p className="text-[10px] font-bold text-slate-500 mb-1 uppercase">Account Number</p>
                        <p className="text-sm font-bold text-[#001D3D] font-mono">009142125480001</p>
                      </div>
                      <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-600">
                        <p className="text-[10px] font-bold text-slate-500 mb-1 uppercase">Swift Code</p>
                        <p className="text-sm font-bold text-[#001D3D] font-mono">AMNNTZTZ</p>
                      </div>
                    </div>
                  </div>

                  {/* Payment Inquiries Card */}
                  <div className="bg-emerald-50 p-10 rounded-[2rem] border border-emerald-100 shadow-sm space-y-6 h-full w-full flex flex-col">
                    <h3 className="font-bold text-[#001D3D] font-serif text-xl">Payment Inquiries</h3>
                    <div className="space-y-3 flex-1 flex flex-col justify-between">
                      <p className="text-sm text-body font-sans leading-relaxed">
                        If you have any questions about making a donation or need assistance with payment methods, please don't hesitate to reach out to us.
                      </p>
                      <div className="space-y-2">
                        <p className="text-xs text-slate-600 font-normal font-sans">Email us at:</p>
                        <a href="mailto:foundationubunifu@gmail.com" className="inline-block">
                          <p className="text-sm font-bold text-[#00A3E1] font-mono hover:text-[#0081B3] transition-colors">foundationubunifu@gmail.com</p>
                        </a>
                      </div>
                      <p className="text-xs text-slate-600 font-normal font-sans">We'll respond within 24 hours with details for fund accountability and donation confirmation.</p>
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