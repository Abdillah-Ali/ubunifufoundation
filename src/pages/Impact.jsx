import { Users, Target, TrendingUp, Lightbulb, MapPin, Heart } from "lucide-react";
import { impactStats, successStories } from "@/data/impact";
import { cn } from "@/lib/utils";
import Container from "@/components/layout/Container";
import PageHero from "@/components/layout/PageHero";
import usePageTitle from "@/hooks/usePageTitle";


const milestones = [
  { year: "2023", title: "Foundation Founded", description: "Ubunifu Foundation was officially founded in September 2023, beginning its mission to empower the youth of Zanzibar." }
];

const futureGoals = {
  targets: [
    { label: "Youths to Train", value: "300", detail: "150 Women, 150 Men" },
    { label: "Job Opportunities", value: "100", detail: "Creating sustainable livelihoods" }
  ],
  upcomingPrograms: [
    "Concentration Bootcamp",
    "Wellbeing Program",
    "SINA Acceleration Program"
  ]
};


const Impact = () => {
  usePageTitle("Our Impact");

  return (
    <div className="min-h-screen bg-background pb-24">
      <PageHero 
        title="Our Impact" 
        subtitle="Proof of our work — in numbers, milestones, and real outcomes from the communities we serve." 
      />

      {/* Stats Dashboard - Schwab Style */}
      <section className="bg-secondary py-20 border-y border-border">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 text-center">
            {impactStats.map(({ label, value, icon: Icon }) => (
              <div key={label} className="space-y-4 group">
                <div className="mx-auto p-4 rounded-2xl bg-white text-primary w-fit shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Icon size={24} />
                </div>
                <div>
                  <p className="text-2xl md:text-4xl font-bold text-primary tracking-tight">{value}</p>
                  <p className="text-[13px] font-bold tracking-tight text-foreground mt-2">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Success Stories - Clean Cards */}
      <section className="py-24 bg-background">
        <Container>
          <div className="max-w-3xl mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 tracking-tight">Success Stories</h2>
            <p className="text-base md:text-lg text-foreground font-medium leading-relaxed max-w-2xl">
              Real outcomes from our programs, transforming lives across Zanzibar and beyond.
            </p>
          </div>
          <div className="grid md:grid-cols-1 max-w-4xl mx-auto">
            {successStories.map((story) => (
              <div key={story.author} className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="w-full lg:w-1/2 aspect-[16/10] overflow-hidden rounded-[2.5rem] shadow-xl border border-border">
                  <img 
                    src={story.image} 
                    alt={story.author} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                </div>
                <div className="w-full lg:w-1/2 space-y-6">
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight">{story.title}</h3>
                  <p className="text-sm font-bold text-primary tracking-tight uppercase">{story.stat} — {story.author}</p>
                  <div className="space-y-4 text-base md:text-lg text-foreground leading-relaxed font-medium">
                    {story.fullStory.map((paragraph, i) => (
                      <p key={i}>"{paragraph}"</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Future Impact - New Section */}
      <section className="py-24 bg-foreground text-background">
        <Container>
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Future <span className="text-primary">Impact.</span></h2>
                <p className="text-lg text-white font-medium leading-relaxed">
                  We are currently formalizing our impact tracking to provide more rigorous data. Our goals for the upcoming period are ambitious but necessary for Zanzibar's growth.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8">
                {futureGoals.targets.map((target) => (
                  <div key={target.label} className="p-6 rounded-2xl bg-background/5 border border-background/10">
                    <p className="text-4xl font-bold text-primary mb-2">{target.value}</p>
                    <p className="text-[13px] font-bold text-white uppercase tracking-tight">{target.label}</p>
                    <p className="text-xs text-white/60 mt-1">{target.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-8 p-10 rounded-[3rem] bg-background/5 border border-background/10">
              <h3 className="text-xl md:text-2xl font-bold tracking-tight">Upcoming Programs</h3>
              <div className="space-y-4">
                {futureGoals.upcomingPrograms.map((prog) => (
                  <div key={prog} className="flex items-center gap-4 p-4 rounded-xl bg-background/5 group hover:bg-primary transition-colors cursor-default">
                    <div className="w-2 h-2 rounded-full bg-primary group-hover:bg-background" />
                    <span className="font-bold tracking-tight group-hover:text-background">{prog}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Timeline - Modern Mininalist */}
      <section className="py-24 bg-secondary border-t border-border">
        <Container>
          <div className="max-w-3xl mb-20 text-center mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 tracking-tight">Our Journey</h2>
            <p className="text-base md:text-lg text-foreground font-medium">Key milestones in our story of growth and impact.</p>
          </div>
          <div className="max-w-4xl mx-auto relative">
            {/* Center line */}
            <div className="absolute left-0 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border hidden md:block" />
            
            <div className="space-y-20 md:space-y-32">
              {milestones.map((m, i) => (
                <div key={m.year} className={cn(
                  "relative flex flex-col md:flex-row gap-8 items-start",
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                )}>
                  {/* Bullet */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 w-8 h-8 rounded-full bg-primary border-4 border-white shadow-xl z-10" />
                  
                  {/* Content */}
                  <div className={cn(
                    "w-full md:w-1/2 pl-12 md:pl-0",
                    i % 2 === 0 ? "md:pr-16 text-left md:text-right" : "md:pl-16 text-left"
                  )}>
                    <div className="space-y-3">
                      <span className="text-4xl md:text-5xl font-bold text-primary/20 tracking-tight leading-none block">{m.year}</span>
                      <h4 className="text-lg md:text-xl font-bold tracking-tight">{m.title}</h4>
                      <p className="text-base text-foreground leading-relaxed font-medium">{m.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>);

};

export default Impact;