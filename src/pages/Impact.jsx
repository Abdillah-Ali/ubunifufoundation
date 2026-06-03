import { impactStats, successStories } from "@/data/impact";
import { cn } from "@/lib/utils";
import Container from "@/components/layout/Container";
import usePageTitle from "@/hooks/usePageTitle";
import { Link } from "react-router-dom";
import { Users, Briefcase, Quote, Sparkles } from "lucide-react";

const milestones = [
  { year: "2022", label: "Scholarship Opportunity from SINA", description: "Received a scholarship opportunity from SINA, opening the path for deeper social innovation and entrepreneurship learning." },
  { year: "2023", label: "Ubunifu Foundation Started", description: "Ubunifu Foundation began its work in Zanzibar, creating a platform for youth empowerment and community transformation." },
  { year: "2024", label: "Core Programs Grew", description: "Expanded practical learning through self-discovery, digital literacy, social innovation, and entrepreneurship programs." },
  { year: "2025", label: "Scholar Enterprises Advanced", description: "Supported scholar-led enterprises and strengthened pathways into jobs, business creation, and community impact." },
  { year: "2026", label: "Scaling Sustainable Impact", description: "Continuing to grow partnerships, programs, and enterprise support across Zanzibar for long-term sustainable change." }
];

const futureGoals = {
  description: "Ubunifu Foundation is committed to scaling our impact through ambitious goals for the next year.",
  targets: [
    { label: "Youths to Train", value: "300", detail: "150 Women, 150 Men", icon: Users },
    { label: "Job Opportunities", value: "100", detail: "Creating sustainable livelihoods", icon: Briefcase }
  ],
  upcomingPrograms: [
    "Concentration Bootcamp",
    "Wellbeing Program",
    "SINA Acceleration Program"
  ]
};

const statAccents = [
  "text-[#008AC1]",
  "text-[#C49A2A]",
  "text-[#0A8F8A]",
  "text-[#D94B2B]",
  "text-[#6A8F2A]"
];

const Impact = () => {
  usePageTitle("Our Impact");

  return (
    <div className="min-h-screen bg-white">
      {/* ─── HERO SECTION ─── */}
      <section className="relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden bg-[#063A34] text-white md:min-h-[calc(100vh-6rem)]">
        <img
          src="/scholars-innovation.jpg"
          alt="Ubunifu Foundation scholars reviewing learning materials"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#063A34]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#063A34]/95 via-[#063A34]/72 to-[#063A34]/28" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#063A34]/80 to-transparent" />
        <Container className="relative z-10 py-14 md:py-16">
          <div className="max-w-3xl">
            <p className="text-metadata uppercase text-white/70">Measured Community Change</p>
            <h1 className="mt-5 text-[44px] leading-[52px] text-white md:text-[68px] md:leading-[74px]">
              Our Impact
            </h1>
            <p className="mt-6 max-w-xl text-[17px] leading-[28px] text-white/80">
              Proof of our work in numbers, milestones, and real outcomes from the communities we serve. Every figure points back to young people and women building confidence, skills, and new opportunities.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/donate"
                className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-4 text-sm font-bold uppercase text-white transition-transform hover:scale-[1.02]"
              >
                Support the Work
              </Link>
              <a
                href="#success-stories"
                className="inline-flex items-center justify-center rounded-full border border-white/35 px-7 py-4 text-sm font-bold uppercase text-white transition-colors hover:bg-white hover:text-[#063A34]"
              >
                Read Stories
              </a>
            </div>
          </div>
        </Container>
        <div className="absolute bottom-10 right-6 z-10 hidden border-l-4 border-[#F5B51B] bg-[#063A34]/90 px-6 py-5 backdrop-blur-sm md:block lg:right-16">
          <p className="text-[34px] leading-none font-semibold text-white">194+</p>
          <p className="mt-2 text-metadata uppercase text-white/75">Youths Trained</p>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="relative z-20 bg-white">
        <Container>
          <div className="grid border-y border-[#DDEDE8] bg-white shadow-xl shadow-slate-900/5 sm:grid-cols-2 lg:grid-cols-5">
            {impactStats.map(({ label, value, icon: Icon }, index) => (
              <div
                key={label}
                className="min-h-[150px] border-b border-[#DDEDE8] p-6 last:border-b-0 sm:border-r sm:last:border-r-0 lg:border-b-0"
              >
                <div className="flex items-center justify-between gap-4">
                  <Icon className={cn("h-6 w-6", statAccents[index])} />
                  <span className="text-metadata uppercase text-slate-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-6 text-[38px] leading-none font-semibold text-[#12323A]">
                  {value}
                </p>
                <p className="mt-3 text-metadata uppercase text-[#4A5A5A]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── SUCCESS STORIES ─── */}
      <section id="success-stories" className="bg-white py-20 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="text-metadata uppercase">Success Stories</p>
              <h2 className="mt-4 text-[32px] leading-[40px] text-[#12323A] md:text-[44px] md:leading-[52px]">
                Real stories of confidence, skill, and new direction.
              </h2>
            </div>
            <div className="border-l-4 border-primary pl-6">
              <p className="text-[17px] leading-[28px] text-[#343434]">
                Behind every number is a person whose life has shifted through mentorship, learning, and opportunity. These stories show how Ubunifu Foundation helps young people move from uncertainty to purpose, practical skills, and community impact.
              </p>
            </div>
          </div>

          <div className="mt-16 space-y-20 md:space-y-24">
            {successStories.map((story, index) => {
              const isFlipped = index % 2 === 1;
              const isGold = story.accent === "gold";

              return (
                <article
                  key={story.author}
                  className={cn(
                    "grid items-center gap-10 border-t border-slate-200 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16",
                    isFlipped && "lg:[&>div:first-child]:order-2"
                  )}
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span
                        className={cn(
                          "inline-flex h-10 w-10 items-center justify-center rounded-md text-sm font-bold text-white",
                          isGold ? "bg-[#C49A2A]" : "bg-[#0A8F8A]"
                        )}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-metadata uppercase">{story.stat}</span>
                      <span className={cn("text-metadata uppercase", isGold ? "text-[#9B7618]" : "text-[#0A8F8A]")}>
                        {story.author}
                      </span>
                    </div>

                    <h3 className="mt-7 text-[30px] leading-[38px] text-[#12323A] md:text-[42px] md:leading-[50px]">
                      {story.title}
                    </h3>

                    <div className="mt-7 flex gap-4 border-l border-slate-200 pl-5">
                      <Quote className={cn("mt-1 h-6 w-6 shrink-0", isGold ? "text-[#C49A2A]" : "text-[#0A8F8A]")} />
                      <p className="text-[18px] leading-[29px] text-[#2F3A3A]">
                        "{story.description || story.fullStory[0]}"
                      </p>
                    </div>

                    <div className="mt-8 space-y-5">
                      {story.fullStory.map((paragraph) => (
                        <p key={paragraph} className="text-[16px] leading-[26px] text-[#454545]">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="relative">
                    <div
                      className={cn(
                        "absolute hidden h-full w-full border-2 md:block",
                        isGold ? "border-[#C49A2A]" : "border-[#0A8F8A]",
                        isFlipped ? "-left-5 top-5" : "left-5 top-5"
                      )}
                      aria-hidden="true"
                    />
                    <img
                      src={story.image}
                      alt={story.author}
                      className="relative z-10 aspect-[4/5] w-full rounded-lg object-cover shadow-xl"
                    />
                    <div
                      className={cn(
                        "absolute bottom-5 z-20 flex items-center gap-2 rounded-md px-4 py-3 text-sm font-bold text-white shadow-lg",
                        isGold ? "bg-[#C49A2A]" : "bg-[#0A8F8A]",
                        isFlipped ? "right-5" : "left-5"
                      )}
                    >
                      <Sparkles size={16} />
                      <span>{story.author}</span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ─── FUTURE IMPACT ─── */}
      <section className="py-16 md:py-24 bg-[#f5f0e8]">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left - Visual Placeholder */}
            <div className="space-y-6">
              <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
                <img 
                  src="/founders_hero.png" 
                  alt="Ubunifu Foundation Founders" 
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                />
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-10">
              <div className="space-y-4">
                <h2 className="text-[24px] font-medium tracking-tight font-serif text-body">
                  Future Impact
                </h2>
                <p className="text-[16px] text-body/70 font-sans leading-[22px]">
                  We are currently formalizing our impact tracking to provide more rigorous data.
                  Our goals for the upcoming period are ambitious but necessary for Zanzibar's growth.
                </p>
              </div>

              {/* Target Cards */}
              <div className="grid grid-cols-2 gap-4">
                {futureGoals.targets.map((target) => {
                  const Icon = target.icon;
                  return (
                    <div key={target.label} className="p-5 rounded-2xl bg-white border border-[#0a3d3d]/10">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-[#c49a2a]/15 flex items-center justify-center">
                          <Icon size={18} className="text-[#c49a2a]" />
                        </div>
                      </div>
                      <p className="text-[30px] font-medium text-[#0a3d3d] font-serif">{target.value}</p>
                      <p className="text-[12px] font-medium text-[#0a3d3d]/60 uppercase tracking-wider font-sans mt-1">
                        {target.label}
                      </p>
                      <p className="text-[11px] text-[#0a3d3d]/40 mt-1 font-sans">{target.detail}</p>
                    </div>
                  );
                })}
              </div>

              {/* Upcoming Programs */}
              <div className="space-y-3">
                <h3 className="text-[18px] font-medium font-serif text-[#0a3d3d]">Upcoming Programs</h3>
                {futureGoals.upcomingPrograms.map((prog) => (
                  <div
                    key={prog}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white group hover:bg-primary transition-colors cursor-default"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#c49a2a] group-hover:bg-white shrink-0" />
                    <span className="text-[14px] font-sans text-[#0a3d3d] group-hover:text-white transition-colors">{prog}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── OUR JOURNEY TIMELINE ─── */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="mb-12">
            <h2 className="text-[30px] md:text-[38px] font-medium mb-4 tracking-tight font-serif">
              Our Journey
            </h2>
          </div>

          {/* Horizontal Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 right-0 top-[44px] h-0.5 bg-border" />

            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
              {milestones.map((m, i) => (
                <div key={m.year} className="relative pt-0">
                  {/* Milestone marker */}
                  <div className="w-20 h-20 rounded-2xl bg-[#063A34] border border-[#0A8F8A]/30 flex items-center justify-center mb-4 overflow-hidden relative z-10 shadow-lg shadow-[#063A34]/10">
                    <span className="text-[18px] font-bold text-white font-serif">{m.year}</span>
                  </div>
                  {/* Dot */}
                  <div className="absolute left-[34px] top-[78px] w-3 h-3 rounded-full bg-primary border-2 border-white shadow z-20" />
                  {/* Content */}
                  <div className="mt-6 space-y-1">
                    <p className="text-[13px] font-sans text-foreground/70 leading-snug font-semibold">{m.label}</p>
                    <p className="mt-2 text-[12px] font-sans text-foreground/50 leading-[18px]">{m.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ─── SUPPORT US CTA ─── */}
      <section className="py-16 md:py-24 bg-[#f5f0e8]">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-[30px] md:text-[38px] font-medium tracking-tight font-serif text-[#0a3d3d]">
              Support Us
            </h2>
            <p className="text-base text-[#0a3d3d]/70 font-sans leading-relaxed max-w-xl mx-auto">
              Join us in our mission to empower the next generation of leaders and entrepreneurs in Zanzibar.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/donate"
                className="px-8 py-3 bg-[#0a3d3d] text-white rounded-full text-[14px] font-medium font-sans hover:bg-[#0a3d3d]/90 transition-colors tracking-wider"
              >
                Donate Now
              </Link>
              <div className="flex items-center gap-3">
                <span className="text-[13px] font-medium text-[#0a3d3d]/50 uppercase tracking-widest font-sans">Get Involved</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Link
                to="/volunteer"
                className="px-6 py-2.5 bg-white border border-[#0a3d3d]/15 text-[#0a3d3d] rounded-full text-[13px] font-medium font-sans hover:border-primary hover:text-primary transition-colors"
              >
                Volunteer
              </Link>
              <Link
                to="/volunteer"
                className="px-6 py-2.5 bg-white border border-[#0a3d3d]/15 text-[#0a3d3d] rounded-full text-[13px] font-medium font-sans hover:border-primary hover:text-primary transition-colors"
              >
                Partner Programs
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Impact;
