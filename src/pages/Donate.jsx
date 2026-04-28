import { useState } from "react";
import { BookOpen, Users, Lightbulb, CheckCircle2, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import Container from "@/components/layout/Container";
import usePageTitle from "@/hooks/usePageTitle";

const donationOptions = [
  { amount: "$10 / TZS 25,000", title: "Training Materials", impact: "Supports training materials for one participant.", icon: BookOpen },
  { amount: "$25 / TZS 62,500", title: "Mentorship Session", impact: "Supports a dedicated mentorship session.", icon: Users },
  { amount: "$50 / TZS 125,000", title: "Youth Program", impact: "Supports a full youth training program.", icon: Lightbulb },
];

const testimonials = [
  { 
    quote: "Before joining UBUNIFU, I lacked confidence, clear goals, and understanding of my potential. Since joining, I have developed skills in entrepreneurship, and discovered my strength in leadership. I now have clarity and purpose.", 
    name: "Mwamvua Khamis", 
    image: "https://images.unsplash.com/photo-1531123414780-f74244c2b0d4?q=80&w=200&auto=format&fit=crop",
    bio: "Founder of Safari Queen"
  }
];

const Donate = () => {
  usePageTitle("Donate");
  const [customAmount, setCustomAmount] = useState("");

  const scrollToPayment = () => {
    document.getElementById("payment-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">

      {/* 1. Cinematic Hero */}
      <section className="relative min-h-[700px] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2000&auto=format&fit=crop"
            alt="Children learning"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
        </div>

        <Container className="relative z-10 pb-24 pt-40">
          <div className="max-w-4xl text-left text-white space-y-8">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/90 text-white text-[13px] font-bold tracking-tight mb-4">
              Make a Difference
            </div>
            <h1 className="text-[40px] md:text-[50px] lg:text-[60px] font-medium leading-tight md:leading-[72px] tracking-tight font-serif">
              Support the Future of Youth
            </h1>
            <p className="text-base sm:text-lg md:text-[20px] text-white max-w-2xl font-normal leading-[22px] md:leading-[30px] font-sans">
              Your contribution empowers young people and women with skills, opportunities, and the tools they need to build sustainable lives.
            </p>
            <Button
              className="rounded-full px-8 py-5 text-sm md:text-base font-medium tracking-wide bg-primary hover:bg-primary/90 text-white shadow-xl"
              onClick={scrollToPayment}
            >
              Donate Now
            </Button>
          </div>
        </Container>
      </section>

      {/* 2. Introduction - Zigzag */}
      <section className="py-24 bg-background">
        <Container>
          <div className="grid md:grid-cols-2 gap-24 items-start">
            <div className="space-y-12">
              <div className="space-y-4">
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[13px] font-bold tracking-tight">The Challenge</span>
                <h3 className="text-[20px] md:text-[24px] font-medium tracking-tight font-serif">The Challenge</h3>
                <p className="text-foreground font-normal leading-[22px] text-base font-sans max-w-xl">
                  Every donation helps us provide training, mentorship, and opportunities for young people and women in Zanzibar. Without these resources, many face continuous cycles of unemployment and poverty.
                </p>
              </div>
              <div className="space-y-4">
                <span className="inline-block px-4 py-1.5 rounded-full bg-foreground/5 text-foreground text-[13px] font-bold tracking-tight">Your Role</span>
                <h3 className="text-[20px] md:text-[24px] font-medium tracking-tight font-serif">Your Impact</h3>
                <p className="text-foreground font-normal leading-[22px] text-base font-sans max-w-xl">
                  Your support directly contributes to reducing unemployment, empowering communities, and building a more sustainable future.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-[20px] md:text-[24px] font-medium tracking-tight font-serif">Our Solution</h3>
              <ul className="space-y-6">
                {[
                  { title: "Skills Training Programs", desc: "Providing vocational and entrepreneurial training to youth." },
                  { title: "Women Empowerment Initiatives", desc: "Supporting women with skills, tools, and financial opportunities." },
                  { title: "Community Development Projects", desc: "Creating sustainable solutions in local communities." },
                  { title: "Environmental Programs", desc: "Supporting ocean conservation and waste management initiatives." },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-5">
                    <CheckCircle2 className="text-primary mt-1 shrink-0" size={22} />
                    <div>
                      <span className="font-medium text-foreground block text-[18px] md:text-[20px] tracking-tight font-serif">{item.title}</span>
                      <span className="text-foreground font-normal text-base font-sans leading-[22px]">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Impact of Your Gift */}
      <section className="py-24 bg-secondary border-y border-border">
        <Container>
          <div className="max-w-3xl mb-16">
            <h2 className="text-[34px] md:text-[42px] font-medium tracking-tight mb-4 font-serif">The Impact of Your Gift</h2>
            <p className="text-base text-foreground font-normal font-sans leading-[22px] max-w-2xl">Every dollar creates real, measurable change on the ground.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {donationOptions.map((option, index) => (
              <button
                key={index}
                className="group text-left p-8 rounded-[2rem] border-2 border-border hover:border-primary bg-white transition-all duration-300 hover:-translate-y-1 space-y-4"
                onClick={scrollToPayment}
              >
                <div className="p-4 rounded-2xl bg-secondary text-primary w-fit group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <option.icon size={22} />
                </div>
                <p className="text-[14px] font-normal text-primary tracking-[0.75px] font-sans">{option.amount}</p>
                <h3 className="text-[18px] md:text-[20px] font-medium tracking-tight font-serif">{option.title}</h3>
                <p className="text-foreground font-normal leading-[22px] text-base font-sans">{option.impact}</p>
              </button>
            ))}
            {/* Custom Amount */}
            <div className="p-8 rounded-[2rem] border-2 border-dashed border-border bg-white space-y-6">
              <div className="p-4 rounded-2xl bg-secondary text-foreground/40 w-fit">
                <DollarSign size={22} />
              </div>
              <h3 className="text-[18px] md:text-[20px] font-medium tracking-tight font-serif">Custom Amount</h3>
              <Input
                type="number"
                placeholder="Enter amount"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                className="h-14 rounded-full px-6 border-2 focus:border-primary text-lg font-medium"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Testimonials */}
      <section className="py-24 bg-background">
        <Container>
          <div className="max-w-3xl mb-20">
            <h2 className="text-[34px] md:text-[42px] font-medium tracking-tight mb-4 font-serif">Stories of Change</h2>
            <p className="text-base text-foreground font-normal font-sans leading-[22px]">Hear from those whose lives have been transformed by your support.</p>
          </div>
          <div className="grid md:grid-cols-1 max-w-4xl mx-auto">
            {testimonials.map((test, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-12 items-center bg-secondary/30 p-10 rounded-[3rem] border border-border reveal">
                <div className="w-24 h-24 md:w-32 md:h-32 shrink-0">
                  <img src={test.image} alt={test.name} className="w-full h-full rounded-[2rem] object-cover border-4 border-white shadow-xl" />
                </div>
                <div className="space-y-4">
                  <p className="text-[20px] md:text-[24px] font-medium tracking-tight text-primary font-serif">{test.name}</p>
                  <p className="text-[14px] font-normal text-foreground uppercase tracking-[0.75px] font-sans">{test.bio}</p>
                  <p className="text-[18px] md:text-[20px] text-foreground font-normal leading-relaxed italic font-serif">"{test.quote}"</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Social Proof */}
      <section className="py-20 bg-secondary border-y border-border">
        <Container className="max-w-4xl mx-auto text-center">
          <h2 className="text-[13px] font-bold tracking-tight text-foreground mb-12 uppercase">Trusted & Accredited By</h2>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 mb-16 grayscale">
            <span className="font-bold text-xl md:text-2xl tracking-tighter hover:opacity-100 transition-opacity">Tui Care Foundation</span>
            <span className="font-bold text-xl md:text-2xl tracking-tighter hover:opacity-100 transition-opacity">SINA (Social Innovation Academy)</span>
          </div>

          <div className="max-w-2xl mx-auto text-left space-y-6 bg-white p-10 rounded-[2rem] border-2 border-border">
            <p className="font-normal text-foreground text-base md:text-lg font-sans">
              We are <span className="text-primary font-medium">65%</span> of the way to our goal of funding the Hub for another year.
            </p>
            <Progress value={65} className="h-3 bg-secondary [&>div]:bg-primary rounded-full" />
            <p className="text-[14px] text-foreground/50 font-normal font-sans leading-[22px]">
              All donations are used responsibly and transparently — directed towards programs that create measurable impact.
            </p>
          </div>
        </Container>
      </section>

      {/* 6. Payment Section */}
      <section id="payment-section" className="py-24 bg-foreground text-background">
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-6 mb-20">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/90 text-white text-[13px] font-bold tracking-tight mb-4">
              Secure Transfer
            </div>
            <h2 className="text-[34px] md:text-[42px] font-medium tracking-tight leading-tight md:leading-[42px] font-serif">Make a Difference Now.</h2>
            <p className="text-base text-white font-normal max-w-2xl mx-auto leading-[22px] font-sans">
              Use any of our official banking channels to complete your transfer.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {/* PBZ Card */}
            <div className="p-10 rounded-[2rem] bg-background/10 border border-background/20 space-y-6">
              <div className="flex items-center gap-4 pb-6 border-b border-background/20">
                <span className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center text-sm font-medium shadow font-sans">1</span>
                <h3 className="font-medium text-[20px] md:text-[24px] tracking-tight font-serif">PBZ (TZS)</h3>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Account No.", value: "0791623001" },
                  { label: "Account Name", value: "ABDILLAH TALIB ALI" },
                  { label: "Phone Rep.", value: "+255 788 008 750" },
                ].map((row) => (
                  <div key={row.label} className="flex flex-col p-5 bg-background/10 rounded-2xl">
                    <span className="text-[11px] font-normal tracking-[0.75px] text-white/60 mb-1 uppercase font-sans">{row.label}</span>
                    <span className={`font-medium text-lg font-serif ${row.label === "Account No." ? "text-primary" : "text-background"}`}>{row.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Equity Card */}
            <div className="p-10 rounded-[2rem] bg-background/10 border border-background/20 space-y-6">
              <div className="flex items-center gap-4 pb-6 border-b border-background/20">
                <span className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center text-sm font-medium shadow font-sans">2</span>
                <h3 className="font-medium text-[20px] md:text-[24px] tracking-tight font-serif">Equity (USD)</h3>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Account No.", value: "3014111866159" },
                  { label: "Account Name", value: "ABDILLAH TALIB ALI" },
                  { label: "Phone Rep.", value: "+255 788 008 750" },
                ].map((row) => (
                  <div key={row.label} className="flex flex-col p-5 bg-background/10 rounded-2xl">
                    <span className="text-[11px] font-normal tracking-[0.75px] text-white/60 mb-1 uppercase font-sans">{row.label}</span>
                    <span className={`font-medium text-lg font-serif ${row.label === "Account No." ? "text-primary" : "text-background"}`}>{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="max-w-lg mx-auto flex flex-col items-center gap-8">
            <Button
              className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6 px-8 text-sm md:text-base rounded-full shadow-xl tracking-tight"
              onClick={() => alert("Thank you! Please make your transfer via your banking provider.")}
            >
              I Have Made My Donation ✓
            </Button>

            <div className="flex items-center gap-4 text-white/60 text-[13px] font-bold tracking-tight uppercase">
              <span>Share:</span>
              {[["f", "Facebook"], ["X", "Twitter"], ["in", "LinkedIn"]].map(([label, name]) => (
                <span key={name} className="w-10 h-10 rounded-2xl bg-background/10 text-background flex items-center justify-center cursor-pointer font-bold hover:bg-primary hover:text-white transition-all shadow-sm">
                  {label}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Donate;