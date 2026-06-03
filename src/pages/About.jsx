import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Compass,
  Handshake,
  Heart,
  Lightbulb,
  MapPin,
  Sprout,
  Target,
  Users
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "@/components/layout/Container";
import usePageTitle from "@/hooks/usePageTitle";
import useScrollReveal from "@/hooks/useScrollReveal";

const focusAreas = [
  {
    title: "Women Empowerment",
    description: "Supporting women with skills, financial tools, and opportunities for personal and professional growth.",
    icon: Heart,
    color: "text-[#D94B2B]"
  },
  {
    title: "Youth Livelihoods",
    description: "Creating income-generating opportunities that strengthen youth livelihoods and economic independence.",
    icon: Users,
    color: "text-[#008AC1]"
  },
  {
    title: "Skills & Training",
    description: "Providing practical training and mentorship so young people can build employable, future-ready skills.",
    icon: BookOpen,
    color: "text-[#0A8F8A]"
  },
  {
    title: "Entrepreneurship Development",
    description: "Helping youth and women transform community challenges into sustainable social enterprises.",
    icon: Lightbulb,
    color: "text-[#C49A2A]"
  },
  {
    title: "Community Engagement",
    description: "Working with local communities to develop responsive projects and improve everyday living conditions.",
    icon: Target,
    color: "text-[#008AC1]"
  },
  {
    title: "Blue Economy & Environment",
    description: "Promoting ocean protection, environmental conservation, and practical sustainable practices.",
    icon: Sprout,
    color: "text-[#0A8F8A]"
  }
];

const storySteps = [
  {
    year: "2022",
    title: "Learning Through SINA",
    description: "Saida and Fadhil returned from the Social Innovation Academy in Uganda with a mission to turn local challenges into opportunities."
  },
  {
    year: "2023",
    title: "Ubunifu Foundation Began",
    description: "The first program launched in September 2023 with 29 pioneers, creating a bridge between local talent and global impact."
  },
  {
    year: "Today",
    title: "Building Sustainable Futures",
    description: "Ubunifu now supports youth and women through self-discovery, skills training, social enterprise, and community-led change."
  }
];

const boardMembers = [
  {
    name: "Saida Malik",
    role: "Co-Founder & Strategic Lead",
    image: "/saida.png"
  },
  {
    name: "Fadhil",
    role: "Co-Founder & Innovation Lead",
    image: "/fadhil.png"
  }
];

const partners = [
  { name: "TUI Care Foundation", logo: "/tuicare.png" },
  { name: "Social Innovation Academy", logo: "/sina.png" }
];

const stats = [
  { value: "2023", label: "Foundation started" },
  { value: "29", label: "First pioneers" },
  { value: "100+", label: "Youth and women reached annually" }
];

const About = () => {
  usePageTitle("About");
  useScrollReveal();

  return (
    <div className="min-h-screen bg-white">
      <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-[#063A34] text-white md:min-h-[78vh]">
        <img
          src="/hero_about.jpg"
          alt="Ubunifu Foundation founders and community members"
          className="absolute inset-0 h-full w-full object-cover object-center md:object-[68%_center]"
        />
        <div className="absolute inset-0 bg-[#052F2B]/58" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#052F2B] via-[#052F2B]/88 to-[#052F2B]/54" />
        <Container className="relative z-10 pb-14 pt-36 md:pb-20">
          <div className="max-w-3xl reveal">
            <p className="text-metadata uppercase text-white">About Ubunifu Foundation</p>
            <h1 className="mt-5 text-[38px] leading-[46px] text-white drop-shadow-lg md:text-[58px] md:leading-[64px] lg:text-[62px] lg:leading-[68px]">
              Empowering Zanzibar's next generation of changemakers.
            </h1>
            <p className="mt-6 max-w-2xl text-[17px] leading-[29px] text-white">
              Ubunifu Foundation equips youth and women with social entrepreneurship, vocational skills, mentorship, and community-building support so they can create resilient futures.
            </p>
            <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="border-l-4 border-[#F5B51B] bg-[#052F2B]/76 px-5 py-4 shadow-lg shadow-black/15 backdrop-blur-sm">
                  <p className="text-[30px] leading-[34px] text-white">{stat.value}</p>
                  <p className="mt-1 text-[12px] font-bold uppercase tracking-[0.8px] text-white">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#F8FCFA] py-20 md:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div className="relative reveal">
              <div className="absolute -left-5 top-5 hidden h-full w-full border-2 border-[#F5B51B] md:block" aria-hidden="true" />
              <img
                src="/scholars-innovation.jpg"
                alt="Ubunifu Foundation scholars in a learning program"
                className="relative z-10 aspect-[4/3] w-full rounded-lg object-cover shadow-xl"
              />
            </div>
            <div className="space-y-8 reveal">
              <div className="border-l-4 border-[#008AC1] bg-white p-7 shadow-lg shadow-slate-900/5">
                <Compass className="h-7 w-7 text-[#008AC1]" />
                <h2 className="mt-4 text-[30px] leading-[38px] text-[#12323A]">Our Vision</h2>
                <p className="mt-4 text-[16px] leading-[26px] text-[#4A5A5A]">
                  To be a catalyst for positive transformation in Zanzibar by equipping youth and women with quality education in entrepreneurial skills, vocational training, and community building that inspires creativity and leaves a legacy of youth empowerment.
                </p>
              </div>
              <div className="border-l-4 border-[#0A8F8A] bg-white p-7 shadow-lg shadow-slate-900/5">
                <CheckCircle2 className="h-7 w-7 text-[#0A8F8A]" />
                <h2 className="mt-4 text-[30px] leading-[38px] text-[#12323A]">Our Mission</h2>
                <p className="mt-4 text-[16px] leading-[26px] text-[#4A5A5A]">
                  To address Zanzibar's youth unemployment challenge and empower women by offering comprehensive education in entrepreneurial skills, vocational training, and community building.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div className="reveal">
              <p className="text-metadata uppercase">Our Story</p>
              <h2 className="mt-4 text-[34px] leading-[42px] text-[#12323A] md:text-[50px] md:leading-[58px]">
                Returning home to sow seeds of change.
              </h2>
              <p className="mt-6 text-[17px] leading-[28px] text-[#4A5A5A]">
                Ubunifu Foundation began with two young Zanzibaris who came home determined to prove that community challenges can become opportunities in disguise.
              </p>
            </div>
            <div className="space-y-6 reveal">
              {storySteps.map((step) => (
                <div key={step.year} className="grid gap-4 border-t border-[#DDEDE8] pt-6 sm:grid-cols-[120px_1fr]">
                  <div className="flex items-center gap-3">
                    <CalendarDays className="h-5 w-5 text-[#F5B51B]" />
                    <span className="text-[24px] leading-[30px] text-[#12323A]">{step.year}</span>
                  </div>
                  <div>
                    <h3 className="text-[24px] leading-[31px] text-[#12323A]">{step.title}</h3>
                    <p className="mt-3 text-[16px] leading-[25px] text-[#4A5A5A]">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#063A34] py-20 text-white md:py-24">
        <Container>
          <div className="grid items-end gap-10 md:grid-cols-[1fr_auto]">
            <div className="max-w-3xl reveal">
              <p className="text-metadata uppercase text-white/70">Strategic Pillars</p>
              <h2 className="mt-4 text-[34px] leading-[42px] text-white md:text-[50px] md:leading-[58px]">
                The work is practical, local, and built for long-term impact.
              </h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/40 px-7 py-4 text-sm font-bold uppercase text-white transition-colors hover:bg-white hover:text-[#063A34] reveal"
            >
              View Programs
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((area, index) => {
              const Icon = area.icon;

              return (
                <div key={area.title} className="border border-white/15 bg-white/[0.07] p-6 backdrop-blur-sm reveal">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-white/10">
                      <Icon className={`h-5 w-5 ${area.color}`} />
                    </div>
                    <span className="text-[13px] font-bold uppercase tracking-[1px] text-white/50">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-6 text-[22px] leading-[29px] text-white">{area.title}</h3>
                  <p className="mt-3 text-[15px] leading-[24px] text-white/75">{area.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <div className="reveal">
              <p className="text-metadata uppercase">Our Board</p>
              <h2 className="mt-4 text-[34px] leading-[42px] text-[#12323A] md:text-[50px] md:leading-[58px]">
                Guided by people rooted in community and innovation.
              </h2>
              <p className="mt-6 text-[17px] leading-[28px] text-[#4A5A5A]">
                The Ubunifu Foundation Board guides the mission with expertise in community development, entrepreneurship, and social innovation across Zanzibar.
              </p>
              <div className="mt-8 flex items-start gap-3 border-l-4 border-[#F5B51B] bg-[#F8FCFA] p-5">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#008AC1]" />
                <p className="text-[15px] leading-[24px] text-[#4A5A5A]">
                  Based in Kwerekwe, Zanzibar, the foundation works close to the communities it serves.
                </p>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {boardMembers.map((member) => (
                <div key={member.name} className="border border-[#DDEDE8] bg-[#F8FCFA] p-5 reveal">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="aspect-[4/5] w-full rounded-md object-cover object-top"
                  />
                  <h3 className="mt-5 text-[24px] leading-[30px] text-[#12323A]">{member.name}</h3>
                  <p className="mt-2 text-[14px] font-bold uppercase tracking-[0.6px] text-[#008AC1]">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#F8FCFA] py-16">
        <Container>
          <div className="grid items-center gap-10 md:grid-cols-[auto_1fr] reveal">
            <div>
              <p className="text-metadata uppercase">Trusted Partners</p>
              <h2 className="mt-3 text-[30px] leading-[38px] text-[#12323A]">Built through collaboration.</h2>
            </div>
            <div className="flex flex-wrap items-center justify-start gap-8 md:justify-end lg:gap-14">
              {partners.map((partner) => (
                <div key={partner.name} className="flex min-h-28 items-center justify-center bg-white px-8 py-5 shadow-lg shadow-slate-900/5">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-16 w-auto object-contain md:h-20"
                  />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-24">
        <Container>
          <div className="grid items-center gap-10 border-y border-[#DDEDE8] py-14 lg:grid-cols-[1fr_auto]">
            <div className="max-w-3xl reveal">
              <div className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[1px] text-[#008AC1]">
                <Handshake className="h-4 w-4" />
                Be Part of the Transformation
              </div>
              <h2 className="mt-4 text-[34px] leading-[42px] text-[#12323A] md:text-[50px] md:leading-[58px]">
                Help youth and women build sustainable futures in Zanzibar.
              </h2>
              <p className="mt-5 text-[16px] leading-[26px] text-[#4A5A5A]">
                Whether through partnership, volunteering, or donation, your contribution supports practical learning, enterprise creation, and community-led impact.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col reveal">
              <Link to="/volunteer">
                <Button className="w-full rounded-full px-8 py-7 text-sm font-bold uppercase tracking-tight">
                  Get Involved
                </Button>
              </Link>
              <Link to="/donate">
                <Button variant="outline" className="w-full rounded-full border-2 border-[#12323A] px-8 py-7 text-sm font-bold uppercase tracking-tight text-[#12323A] hover:bg-[#12323A] hover:text-white">
                  Support Our Work
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default About;
