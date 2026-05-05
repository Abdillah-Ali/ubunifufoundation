import { useState } from "react";
import { impactStats, successStories } from "@/data/impact";
import { cn } from "@/lib/utils";
import Container from "@/components/layout/Container";
import usePageTitle from "@/hooks/usePageTitle";
import { Link } from "react-router-dom";
import { Users, Briefcase, ChevronRight, X } from "lucide-react";

const milestones = [
  { year: "2020", label: "Foundation Launched", description: "Ubunifu Foundation started its journey in Zanzibar." },
  { year: "2021", label: "Program Expansion", description: "Introduced specialized training for women and entrepreneurs." },
  { year: "2022", label: "Innovation Hub", description: "Opened our physical hub in Kwerekwe to provide a dedicated space for learning." },
  { year: "2023", label: "Scaling Impact", description: "Reached significant milestones in youth employment and business creation." }
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

const Impact = () => {
  usePageTitle("Our Impact");
  const [expandedStory, setExpandedStory] = useState(null);

  return (
    <div className="min-h-screen bg-background">
      {/* ─── HERO SECTION ─── */}
      <section className="relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/Hero section background image.png"
            alt="Ubunifu Foundation community members"
            className="w-full h-full object-cover"
          />
          {/* Dark gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a3d3d]/90 via-[#0a3d3d]/75 to-[#0a3d3d]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a3d3d]/80 via-transparent to-[#0a3d3d]/30" />
        </div>

        {/* Subtle decorative accents */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-8 right-8 w-24 h-24 rounded-2xl border border-[#c49a2a]/25 rotate-12 hidden lg:block" />
          <div className="absolute top-16 right-16 w-16 h-16 rounded-2xl bg-[#c49a2a]/15 rotate-6 hidden lg:block" />
        </div>

        <Container className="relative z-10">
          <div className="min-h-[55vh] py-20 lg:py-28 flex items-center">
            {/* Left Content */}
            <div className="max-w-xl space-y-6 animate-fade-in-up">
              <h1 className="text-[40px] md:text-[52px] lg:text-[64px] font-medium tracking-tight leading-[1.08] text-white font-serif">
                Our Impact
              </h1>
              <p className="text-base md:text-lg text-white/85 max-w-md font-sans leading-relaxed">
                Proof of our work — in numbers, milestones, and real outcomes from the communities we serve.
              </p>
            </div>
          </div>
        </Container>

      </section>

      {/* Stats Bar — Overlaps Hero Bottom */}
      <div className="relative z-20 -mt-16 mb-8">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
            {impactStats.map(({ label, value, icon: Icon, color }) => (
              <div
                key={label}
                className={cn(
                  "rounded-2xl p-5 md:p-6 text-white shadow-lg",
                  color
                )}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                    <Icon size={18} />
                  </div>
                </div>
                <p className="text-[28px] md:text-[34px] font-medium tracking-tight font-serif leading-none">
                  {value}
                </p>
                <p className="text-[11px] md:text-[12px] font-medium tracking-wider uppercase mt-2 text-white/80 font-sans">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* ─── SUCCESS STORIES ─── */}
      <section className="py-16 md:py-24 bg-background">
        <Container>
          <div className="max-w-3xl mb-12">
            <h2 className="text-[30px] md:text-[38px] font-medium mb-4 tracking-tight font-serif">
              Success Stories:
            </h2>
            <p className="text-base text-foreground/70 font-normal leading-relaxed max-w-2xl font-sans">
              Real outcomes from our programs, transforming lives across Zanzibar and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {successStories.map((story, i) => (
              <div
                key={story.author}
                className={cn(
                  "group rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-xl cursor-pointer",
                  story.accent === "gold"
                    ? "bg-[#f5e6c8] hover:shadow-[#c49a2a]/10"
                    : "bg-[#0a3d3d] text-white hover:shadow-primary/10"
                )}
                onClick={() => setExpandedStory(expandedStory === i ? null : i)}
              >
                <div className="p-6 md:p-8">
                  {/* Image placeholder + Header */}
                  <div className="flex items-start gap-5">
                    <div className={cn(
                      "w-16 h-16 md:w-20 md:h-20 rounded-2xl shrink-0 flex items-center justify-center overflow-hidden",
                      story.accent === "gold" ? "bg-[#c49a2a]/20" : "bg-white/10"
                    )}>
                      {story.image?.startsWith('/placeholder') ? (
                        <span className={cn(
                          "text-2xl font-serif font-medium uppercase",
                          story.accent === "gold" ? "text-[#c49a2a]" : "text-white/60"
                        )}>
                          {story.author[0]}
                        </span>
                      ) : (
                        <img
                          src={story.image}
                          alt={story.author}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={cn(
                        "text-[18px] md:text-[20px] font-medium tracking-tight font-serif leading-tight mb-1",
                        story.accent === "gold" ? "text-[#0a3d3d]" : "text-white"
                      )}>
                        {story.title}
                      </h3>
                      <p className={cn(
                        "text-[12px] font-medium uppercase tracking-wider font-sans",
                        story.accent === "gold" ? "text-[#c49a2a]" : "text-primary/70"
                      )}>
                        {story.stat}
                      </p>
                      <p className={cn(
                        "text-[13px] font-sans mt-0.5",
                        story.accent === "gold" ? "text-[#0a3d3d]/70" : "text-white/60"
                      )}>
                        {story.author}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mt-5">
                    <p className={cn(
                      "text-[14px] font-sans leading-relaxed italic",
                      story.accent === "gold" ? "text-[#0a3d3d]/70" : "text-white/70"
                    )}>
                      "{story.description || story.fullStory[0]}"
                    </p>
                  </div>

                  {/* Expanded Full Story */}
                  {expandedStory === i && (
                    <div className={cn(
                      "mt-5 pt-5 border-t space-y-3 animate-fade-in-up",
                      story.accent === "gold" ? "border-[#c49a2a]/20" : "border-white/15"
                    )}>
                      {story.fullStory.map((paragraph, j) => (
                        <p
                          key={j}
                          className={cn(
                            "text-[13px] font-sans leading-relaxed",
                            story.accent === "gold" ? "text-[#0a3d3d]/80" : "text-white/70"
                          )}
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  )}

                  {/* Read more indicator */}
                  <div className={cn(
                    "flex items-center gap-1 mt-4 text-[12px] font-medium uppercase tracking-wider font-sans group-hover:gap-2 transition-all",
                    story.accent === "gold" ? "text-[#c49a2a]" : "text-primary/70"
                  )}>
                    {expandedStory === i ? (
                      <>
                        <span>Read less</span>
                        <X size={12} />
                      </>
                    ) : (
                      <>
                        <span>Read more</span>
                        <ChevronRight size={12} />
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── FUTURE IMPACT ─── */}
      <section className="py-16 md:py-24 bg-[#f5f0e8]">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left - Visual Placeholder */}
            <div className="space-y-6">
              <div className="w-full aspect-[4/3] rounded-3xl bg-[#0a3d3d]/10 border border-[#0a3d3d]/10 flex items-center justify-center overflow-hidden">
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 rounded-2xl bg-[#0a3d3d]/10 flex items-center justify-center mx-auto">
                    <Users size={28} className="text-[#0a3d3d]/30" />
                  </div>
                  <p className="text-[#0a3d3d]/30 text-sm font-sans">Impact Visual</p>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-10">
              <div className="space-y-4">
                <h2 className="text-[30px] md:text-[38px] font-medium tracking-tight font-serif text-[#0a3d3d]">
                  Future Impact
                </h2>
                <p className="text-base text-[#0a3d3d]/70 font-sans leading-relaxed">
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

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {milestones.map((m, i) => (
                <div key={m.year} className="relative pt-0">
                  {/* Image placeholder */}
                  <div className="w-20 h-20 rounded-2xl bg-secondary border border-border flex items-center justify-center mb-4 overflow-hidden relative z-10">
                    <span className="text-xs text-foreground/30 font-sans">Photo</span>
                  </div>
                  {/* Dot */}
                  <div className="absolute left-[34px] top-[78px] w-3 h-3 rounded-full bg-primary border-2 border-white shadow z-20" />
                  {/* Content */}
                  <div className="mt-6 space-y-1">
                    <p className="text-[24px] font-medium text-primary/30 font-serif">{m.year}</p>
                    <p className="text-[13px] font-sans text-foreground/60 leading-snug">{m.label}</p>
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
                to="/get-involved"
                className="px-6 py-2.5 bg-white border border-[#0a3d3d]/15 text-[#0a3d3d] rounded-full text-[13px] font-medium font-sans hover:border-primary hover:text-primary transition-colors"
              >
                Volunteer
              </Link>
              <Link
                to="/get-involved"
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