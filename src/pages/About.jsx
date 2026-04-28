import { Link } from "react-router-dom";
import { Target, Users, Sprout, Heart, BookOpen, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "@/components/layout/Container";
import usePageTitle from "@/hooks/usePageTitle";
import useScrollReveal from "@/hooks/useScrollReveal";

const objectives = [
  { title: "Women Empowerment", description: "Supporting women with skills, financial tools, and opportunities for personal and professional growth.", icon: Heart },
  { title: "Youth Livelihoods", description: "Creating income-generating opportunities to improve youth livelihoods and economic independence.", icon: Users },
  { title: "Skills & Training", description: "Providing training and mentorship to equip youth with employable and practical skills.", icon: BookOpen },
  { title: "Entrepreneurship Development", description: "Supporting entrepreneurship and self-employment through innovation and business skills development.", icon: Lightbulb },
  { title: "Community Engagement", description: "Working with local communities to develop sustainable projects and improve living conditions.", icon: Target },
  { title: "Blue Economy & Environment", description: "Promoting environmental conservation through ocean protection and sustainable practices.", icon: Sprout }
];


const boardMembers = [
  {
    name: "Hamza Khamis",
    role: "Executive Director & Co-Founder, Ubunifu Foundation",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Fatma Ali",
    role: "Co-Founder & Programs Director, Ubunifu Foundation",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Ahmed Salim",
    role: "Board Chair & Community Development Advisor",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Mariam Hassan",
    role: "Women Empowerment Lead & Vocational Trainer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Omar Juma",
    role: "Youth Entrepreneurship Mentor & Advisor",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop"
  },
];

const partners = [
  { name: "Zanzibar Youth Council", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aba9?q=80&w=200&auto=format&fit=crop" },
  { name: "Sustainable Development Goals", logo: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=200&auto=format&fit=crop" },
  { name: "Community First Initiative", logo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=200&auto=format&fit=crop" },
  { name: "Youth Empowerment Network", logo: "https://images.unsplash.com/photo-1612810806563-4cb8265db55f?q=80&w=200&auto=format&fit=crop" },
  { name: "Zanzibar Social Innovation", logo: "https://images.unsplash.com/photo-1603366445787-09714680cbf1?q=80&w=200&auto=format&fit=crop" }
];

const Underline = () => (
  <svg 
    className="absolute -bottom-2 left-0 w-full h-3 text-[#f59e0b] opacity-80" 
    viewBox="0 0 100 10" 
    preserveAspectRatio="none"
  >
    <path 
      d="M0 5 Q 25 0, 50 5 T 100 5" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinecap="round" 
    />
  </svg>
);

const About = () => {
  usePageTitle("About");
  useScrollReveal();

  return (
    <div className="bg-background min-h-screen">
      {/* 1. Hero Section - Cinematic Schwab Style */}
      <section className="relative min-h-[60vh] md:min-h-[75vh] flex items-center text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2000&auto=format&fit=crop" 
            alt="Ubunifu Foundation Hero" 
            className="w-full h-full object-cover scale-105 animate-pulse-slow"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1635]/95 via-[#1a1635]/60 to-transparent" />
          <div className="absolute inset-0 bg-[#0c0a1a]/20" />
        </div>

        <Container className="relative z-10 py-20 md:py-32">
          <div className="max-w-4xl animate-fade-in-up space-y-10">
            {/* Title with Underline */}
            <div className="relative inline-block">
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-medium text-white tracking-tight">
                About
              </h2>
              <Underline />
            </div>

            {/* Main Intro */}
            <h1 className="text-[24px] md:text-[32px] lg:text-[40px] font-medium leading-tight tracking-tight text-white/95 max-w-3xl font-serif">
              Driving social entrepreneurship, youth empowerment, and sustainable community transformation by creating opportunities and building resilient futures in Zanzibar
            </h1>

            {/* Subtitle */}
            <p className="text-base text-white/80 leading-[22px] max-w-xl font-normal font-sans">
              Supporting youth and women to create lasting impact.
            </p>

            {/* Keywords Footer */}
            <div className="pt-6 flex flex-wrap gap-x-4 gap-y-2 text-[10px] md:text-xs font-bold tracking-[0.2em] text-white uppercase opacity-90">
              <span>EMPOWERING</span>
              <span className="text-primary">|</span>
              <span>SUSTAINABLE</span>
              <span className="text-primary">|</span>
              <span>INNOVATIVE</span>
              <span className="text-primary">|</span>
              <span>IMPACTFUL</span>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Mission & Vision - Editorial Layout */}
      <section className="py-24 bg-background overflow-hidden">
        <Container>
          <div className="grid lg:grid-cols-12 items-center reveal" style={{ gap: '32px', padding: '0 80px' }}>
            <div className="lg:col-span-7" style={{ display: 'grid', gap: '32px' }}>
              <div>
                <h3 className="text-[24px] font-medium leading-[32px] mb-[15px] text-[#131313] font-serif">Problem statement.</h3>
                <p className="text-base font-normal leading-[22px] mt-[16px] text-[#131313] font-sans">
                  Youth aged 18- 30 in Zanzibar face high levels of unemployment due to limited job opportunities, lack of necessary skills and experience to compete for the few available job opportunities in the country which leads them to engage in unproductive activities such as a high crime rate, drug abuse and early marriage.
                </p>
              </div>
              <div>
                <h3 className="text-[24px] font-medium leading-[32px] mb-[15px] text-[#131313] font-serif">Solution.</h3>
                <p className="text-base font-normal leading-[22px] mt-[16px] text-[#131313] font-sans">
                  We offer a free-responsible and self-driven learning space to nature and empower leaders to be able to transform challenges in their communities into opportunities.
                </p>
              </div>
              <div>
                <h3 className="text-[24px] font-medium leading-[32px] mb-[15px] text-[#131313] font-serif">Value Proposition.</h3>
                <p className="text-base font-normal leading-[22px] mt-[16px] text-[#131313] font-sans">
                  We empower youths to become social entrepreneurs who are impact drivers of a sustainable future. 
                </p>
              </div>
            </div>
            
            {/* Graphic Side */}
            <div className="lg:col-span-5 relative w-full aspect-square flex items-center justify-center">
              {/* SVG Concentric Rings */}
              <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full opacity-80" style={{ transform: "rotate(-15deg)" }}>
                {/* Ring 1 (Inner) */}
                <g strokeWidth="12" fill="none" strokeDasharray="none">
                  <circle cx="200" cy="200" r="70" pathLength="100" stroke="#E3E1E8" strokeDasharray="15 10 10 15 10 20 10 10" />
                  <circle cx="200" cy="200" r="70" pathLength="100" stroke="#7ACCC8" strokeDasharray="0 30 8 62" />
                  <circle cx="200" cy="200" r="70" pathLength="100" stroke="#F3C06B" strokeDasharray="0 65 12 23" />
                </g>

                {/* Ring 2 */}
                <g strokeWidth="16" fill="none" strokeDasharray="none">
                  <circle cx="200" cy="200" r="110" pathLength="100" stroke="#E3E1E8" strokeDasharray="10 15 20 10 15 10 10 10" />
                  <circle cx="200" cy="200" r="110" pathLength="100" stroke="#7ACCC8" strokeDasharray="0 15 10 75" />
                  <circle cx="200" cy="200" r="110" pathLength="100" stroke="#F3C06B" strokeDasharray="0 55 15 30" />
                </g>

                {/* Ring 3 */}
                <g strokeWidth="20" fill="none" strokeDasharray="none">
                  <circle cx="200" cy="200" r="150" pathLength="100" stroke="#E3E1E8" strokeDasharray="20 10 15 15 10 20 5 5" />
                  <circle cx="200" cy="200" r="150" pathLength="100" stroke="#7ACCC8" strokeDasharray="0 85 10 5" />
                  <circle cx="200" cy="200" r="150" pathLength="100" stroke="#F3C06B" strokeDasharray="0 35 15 50" />
                </g>

                {/* Ring 4 (Outer) */}
                <g strokeWidth="24" fill="none" strokeDasharray="none">
                  <circle cx="200" cy="200" r="190" pathLength="100" stroke="#E3E1E8" strokeDasharray="15 20 10 15 15 10 10 5" />
                  <circle cx="200" cy="200" r="190" pathLength="100" stroke="#7ACCC8" strokeDasharray="0 45 15 40" />
                  <circle cx="200" cy="200" r="190" pathLength="100" stroke="#F3C06B" strokeDasharray="0 75 18 7" />
                </g>
              </svg>

              {/* Circle Image 1 (Top Right) */}
              <div className="absolute top-[12%] right-[5%] w-[45%] aspect-square rounded-full border-[6px] border-white overflow-hidden shadow-2xl z-10 transition-transform hover:scale-105 duration-500 bg-secondary">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop" 
                  alt="Student" 
                  className="w-full h-full object-cover object-[80%_center]"
                />
              </div>

              {/* Circle Image 2 (Bottom Left) */}
              <div className="absolute bottom-[12%] left-[5%] w-[42%] aspect-square rounded-full border-[6px] border-white overflow-hidden shadow-2xl z-10 transition-transform hover:scale-105 duration-500 bg-secondary">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop" 
                  alt="Student" 
                  className="w-full h-full object-cover object-[20%_center]"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Vision & Mission Split */}
      <section className="py-24 bg-slate-50 border-y border-border reveal">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Square Image */}
            <div className="aspect-square w-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000&auto=format&fit=crop"
                alt="Ubunifu Foundation Team"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Right: Vision on top, Mission below */}
            <div className="flex flex-col gap-12 max-w-3xl">
              <div className="space-y-4 pb-12 border-b border-border">
                <h3 className="text-[24px] font-medium leading-[32px] font-serif">Our Vision</h3>
                <p className="text-base font-normal leading-[22px] text-foreground font-sans">
                  Our vision is to be a catalyst for positive transformation in Zanzibar by equipping youth and women with a high-quality education in entrepreneurial skills, vocational training, and community building that inspire creativity to become leaves and legacy of youth empowerment.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-[24px] font-medium leading-[32px] font-serif">Our Mission</h3>
                <p className="text-base font-normal leading-[22px] text-foreground font-sans">
                  Our mission is to address Zanzibar's youth unemployment challenge and empower women by offering comprehensive education in entrepreneurial skills, vocational training, and community building.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Full-width Image Banner */}
      <div className="w-full h-[85vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2940&auto=format&fit=crop"
          alt="Ubunifu Foundation Community"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Our Story - Full Width */}
      <section className="py-24 bg-background reveal">
        <Container>
          <div className="max-w-none">
            <span className="block text-xs font-bold tracking-widest uppercase text-primary mb-6">Our Story</span>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
              <div className="max-w-3xl">
                <h2 className="text-[34px] md:text-[40px] font-medium text-foreground leading-[42px] font-serif">
                  From a small idea to a movement changing lives in Zanzibar.
                </h2>
              </div>
              <div className="space-y-6 text-foreground/80 text-base leading-[22px] font-normal font-sans max-w-3xl">
                <p>
                  The story of Ubunifu Foundation is a journey of "returning home to sow seeds of change."
                </p>
                <p>
                  It began in 2022, when two young Zanzibaris, Saida and Fadhil, returned from the Social Innovation Academy (SINA) in Uganda a program that funded by TUI Care Foundation. They didn't just bring back memories; they brought a mission: to prove that Zanzibar’s challenges were actually opportunities in disguise.
                </p>
                <p>
                  In September 2023, they turned this vision into reality by launching Ubunifu Foundation’s first program with 29 pioneers. As part of the SINA Community and the TUI Future Shaper initiative, the foundation became a bridge between local talent and global impact.
                </p>
                <p>
                  Today, Ubunifu empowers 100 youth and women annually. They guide them through a transformative process—from discovering their potential to launching social enterprises ensuring that the next generation of Zanzibari leaders doesn't just wait for the future, but builds it.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. Strategic Goals - Premium Redesign */}
      <section className="relative pt-12 pb-28 bg-white overflow-hidden reveal">
        {/* Subtle background grid texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #0096C7 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <Container className="relative z-10">
          {/* Goals Grid — 2 columns, 3 rows */}
          <div className="grid md:grid-cols-2 gap-5">
            {objectives.map((obj, index) => {
              const num = String(index + 1).padStart(2, '0');
              const colorAccents = [
                { bg: 'bg-sky-50', icon: 'bg-sky-100 text-sky-600', border: 'hover:border-sky-300', num: 'text-sky-200' },
                { bg: 'bg-violet-50', icon: 'bg-violet-100 text-violet-600', border: 'hover:border-violet-300', num: 'text-violet-200' },
                { bg: 'bg-amber-50', icon: 'bg-amber-100 text-amber-600', border: 'hover:border-amber-300', num: 'text-amber-200' },
                { bg: 'bg-emerald-50', icon: 'bg-emerald-100 text-emerald-600', border: 'hover:border-emerald-300', num: 'text-emerald-200' },
                { bg: 'bg-rose-50', icon: 'bg-rose-100 text-rose-600', border: 'hover:border-rose-300', num: 'text-rose-200' },
                { bg: 'bg-cyan-50', icon: 'bg-cyan-100 text-cyan-600', border: 'hover:border-cyan-300', num: 'text-cyan-200' },
              ];
              const accent = colorAccents[index % colorAccents.length];

              return (
                <div
                  key={index}
                  className={`group relative flex gap-6 p-7 rounded-2xl border border-border/50 ${accent.border} ${accent.bg} bg-opacity-40 hover:shadow-lg transition-all duration-400 overflow-hidden`}
                >
                  {/* Giant ghost number */}
                  <span className={`absolute -bottom-3 right-3 text-[7rem] font-black leading-none select-none pointer-events-none ${accent.num} transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2`}>
                    {num}
                  </span>

                  {/* Icon */}
                  <div className={`shrink-0 w-14 h-14 rounded-xl flex items-center justify-center ${accent.icon} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 z-10`}>
                    <obj.icon size={26} strokeWidth={2} />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex-1 pr-16">
                    <h4 className="text-[18px] font-medium leading-[24px] mb-2 text-foreground font-serif">
                      {obj.title}
                    </h4>
                    <p className="text-base text-foreground/60 leading-[22px] font-sans">
                      {obj.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom accent strip */}
          <div className="mt-16 flex items-center gap-6">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <p className="text-xs font-semibold tracking-widest uppercase text-foreground/35 shrink-0">
              Ubunifu Foundation · Strategic Pillars
            </p>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>
        </Container>
      </section>



      {/* Full-width YouTube Video */}
      <div className="w-full" style={{ aspectRatio: '16/9' }}>
        <iframe
          src="https://www.youtube.com/embed/m-nki6XAL7Q?autoplay=0&rel=0&modestbranding=1"
          title="Ubunifu Foundation Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
          style={{ border: 'none', display: 'block' }}
        />
      </div>

      {/* Our Board / Team Section */}
      <section className="py-24 bg-background reveal">
        <Container>
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">Our Board</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed font-medium">
              The Ubunifu Foundation Board serves as a governing body committed to guiding the Foundation's mission. Each member brings deep expertise in community development, entrepreneurship, and social innovation across Zanzibar.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10">
            {boardMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden mb-5 border-2 border-border group-hover:border-primary transition-colors duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h4 className="text-sm md:text-base font-bold text-foreground tracking-tight leading-snug mb-1">{member.name}</h4>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{member.role}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 8. Our Partners - Minimalist Strip */}
      <section className="py-20 bg-white border-t border-border reveal">
        <Container>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="shrink-0">
              <span className="text-[11px] font-bold tracking-widest uppercase text-muted-foreground/60 border-r border-border pr-8 hidden md:block">
                Trusted Partners
              </span>
              <span className="text-[11px] font-bold tracking-widest uppercase text-muted-foreground/60 text-center block md:hidden mb-8">
                Our Valued Partners
              </span>
            </div>
            <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-16 items-center opacity-40">
              {partners.map((partner, index) => (
                <div key={index} className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer group relative">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-[10px] font-bold uppercase tracking-widest text-primary">
                    {partner.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 9. Final Conclusion - Two-Card Layout */}
      <section className="py-24 bg-slate-50/50 reveal">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card 1: Theory of Change */}
            <div className="bg-white p-10 md:p-14 rounded-[2.5rem] border border-border shadow-sm flex flex-col justify-center space-y-8">
              <div className="inline-block w-fit px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[11px] font-bold tracking-widest uppercase border border-primary/20">
                Impact Strategy
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Our Theory of Change.</h3>
                <p className="text-xl md:text-2xl text-foreground font-medium italic leading-relaxed">
                  "We believe that by providing social entrepreneurship training and practical skills, young people can create opportunities, reduce poverty, and drive economic growth."
                </p>
              </div>
            </div>

            {/* Card 2: Final CTA */}
            <div className="bg-secondary/50 p-10 md:p-14 rounded-[2.5rem] border border-border flex flex-col justify-center space-y-8 relative overflow-hidden group">
              {/* Subtle background accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:bg-primary/10 transition-colors duration-500" />
              
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
                  Be Part of the <span className="text-primary">Transformation.</span>
                </h2>
                <p className="text-base md:text-lg text-foreground/70 font-medium leading-relaxed">
                  Whether through partnership, volunteering, or donation, your contribution directly empowers the next generation of leaders and innovators in Zanzibar.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/get-involved" className="flex-1 min-w-[160px]">
                  <Button className="w-full rounded-full py-7 text-sm font-bold tracking-tight bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all">
                    Get Involved
                  </Button>
                </Link>
                <Link to="/donate" className="flex-1 min-w-[160px]">
                  <Button variant="outline" className="w-full rounded-full py-7 text-sm font-bold tracking-tight border-2 border-foreground hover:bg-foreground hover:text-white hover:scale-[1.02] transition-all">
                    Support Our Work
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default About;