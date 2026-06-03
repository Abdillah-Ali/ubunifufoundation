import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpenCheck,
  CheckCircle2,
  Compass,
  Lightbulb,
  Monitor,
  Sparkles,
  Target,
  UsersRound
} from "lucide-react";
import Container from "@/components/layout/Container";
import { cn } from "@/lib/utils";
import usePageTitle from "@/hooks/usePageTitle";
import useScrollReveal from "@/hooks/useScrollReveal";

const programSections = [
  {
    number: "01",
    title: "Self Discovery and Purpose Alignment",
    status: "Ongoing",
    eyebrow: "Identity and direction",
    shortDescription: "Helping youth identify their potential, build confidence, and align their lives with meaningful goals.",
    description: [
      "Many young people struggle with direction, self-confidence, and understanding their true potential. This program focuses on personal development as the foundation for long-term success.",
      "Through mentorship, guided workshops, and reflective exercises, participants explore their strengths, values, and passions. They learn how to set clear goals, overcome limiting beliefs, and build a strong sense of identity.",
      "This program is not just about career guidance. It helps individuals understand who they are, what they stand for, and how they can contribute meaningfully to society."
    ],
    outcomes: [
      "Improved self-confidence and self-awareness",
      "Clear personal and career direction",
      "Stronger decision-making and life skills",
      "Increased motivation and purpose"
    ],
    image: "/home_empowerment_new.jpg",
    imageAlt: "Youth participants taking notes during an Ubunifu Foundation program session",
    icon: Compass,
    accentBg: "bg-[#008AC1]",
    accentText: "text-[#008AC1]",
    accentBorder: "border-[#008AC1]"
  },
  {
    number: "02",
    title: "Digital Literacy",
    status: "Ongoing",
    eyebrow: "Practical technology skills",
    shortDescription: "Equipping youth with essential digital skills to succeed in a modern, technology-driven world.",
    description: [
      "In today's world, digital skills are no longer optional. They are essential. This program ensures that young people are not left behind in the digital economy.",
      "Participants are trained in a wide range of skills, from basic computer literacy to more advanced tools used in education, business, and communication.",
      "By bridging the digital gap, we empower youth to access information, create opportunities, and compete in the global job market."
    ],
    outcomes: [
      "Basic to advanced computer skills",
      "Confidence in using digital tools and platforms",
      "Improved employability",
      "Access to online learning and income opportunities"
    ],
    image: "/scholars-innovation.jpg",
    imageAlt: "Students reviewing learning materials during a digital literacy session",
    icon: Monitor,
    accentBg: "bg-[#0B7A75]",
    accentText: "text-[#0B7A75]",
    accentBorder: "border-[#0B7A75]"
  },
  {
    number: "03",
    title: "Social Innovation and Entrepreneurship",
    status: "Ongoing",
    eyebrow: "Ideas into action",
    shortDescription: "Developing impact-driven entrepreneurs who solve real community problems.",
    description: [
      "This program focuses on turning ideas into action. It supports young people in identifying community challenges and developing innovative, sustainable solutions through entrepreneurship.",
      "Participants learn how to build businesses that are not only profitable, but also socially impactful. From idea validation to business planning and execution, the program provides the tools and mentorship needed to succeed.",
      "The goal is to create a new generation of entrepreneurs who are not just job seekers, but job creators."
    ],
    outcomes: [
      "Business and entrepreneurial skills",
      "Development of real startup ideas",
      "Problem-solving and innovation mindset",
      "Creation of sustainable social enterprises"
    ],
    image: "/about_vision.jpg",
    imageAlt: "Participants developing ideas with sticky notes during an innovation workshop",
    icon: Lightbulb,
    accentBg: "bg-[#D94B2B]",
    accentText: "text-[#D94B2B]",
    accentBorder: "border-[#D94B2B]"
  },
  {
    number: "04",
    title: "Women Empowerment and Vocational Training",
    status: "Ongoing",
    eyebrow: "Skills and independence",
    shortDescription: "Empowering women with skills, confidence, and economic opportunities.",
    description: [
      "Women play a vital role in community development, yet many face barriers to education, employment, and financial independence. This program is designed to break those barriers.",
      "Through vocational training, financial literacy, and entrepreneurship support, women gain practical skills that allow them to earn income and support their families.",
      "Beyond skills, the program builds confidence, leadership, and a sense of independence, enabling women to become active contributors and leaders in their communities."
    ],
    outcomes: [
      "Practical vocational skills",
      "Financial independence and income generation",
      "Increased confidence and leadership",
      "Stronger role of women in community development"
    ],
    image: "/about_seminar.jpg",
    imageAlt: "Women and youth attending an Ubunifu Foundation skills development seminar",
    icon: UsersRound,
    accentBg: "bg-[#6A8F2A]",
    accentText: "text-[#6A8F2A]",
    accentBorder: "border-[#6A8F2A]"
  }
];

const journeySteps = [
  {
    title: "Awareness and Discovery",
    description: "Understanding personal strengths, interests, and community realities.",
    icon: Compass
  },
  {
    title: "Skills Development",
    description: "Learning practical, relevant skills through guided sessions and mentorship.",
    icon: BookOpenCheck
  },
  {
    title: "Application",
    description: "Applying knowledge through real projects, teamwork, and enterprise thinking.",
    icon: Target
  },
  {
    title: "Growth and Impact",
    description: "Creating businesses, careers, leadership paths, or community change.",
    icon: Sparkles
  }
];

const islandCoverage = [
  {
    name: "Unguja",
    image: "/unguja island.jpg",
    alt: "Unguja island map",
    description: "Program reach across Zanzibar's main island communities."
  },
  {
    name: "Pemba",
    image: "/pemba island.png",
    alt: "Pemba island map",
    description: "Expanding learning and entrepreneurship pathways in Pemba."
  }
];

const Projects = () => {
  usePageTitle("Programs");
  useScrollReveal();

  return (
    <div className="min-h-screen bg-white">
      <section className="relative flex min-h-[68vh] items-end overflow-hidden bg-[#062F2F] text-white">
        <img
          src="/Hero section background image.png"
          alt="Ubunifu Foundation participants celebrating together"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#062F2F]/75" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#062F2F] to-transparent" />

        <Container className="relative z-10 pb-16 pt-36 md:pb-24">
          <div className="max-w-4xl reveal">
            <p className="text-metadata uppercase text-white/75">Our Portfolios</p>
            <h1 className="mt-5 text-[40px] leading-[48px] text-white md:text-[64px] md:leading-[70px]">
              Programs & Initiatives
            </h1>
              <p className="mt-6 max-w-2xl text-[16px] leading-[24px] text-white/80">
              Explore our long-term programs and targeted initiatives that are driving sustainable change across Zanzibar. Each program represents a core pillar of our mission, designed to empower individuals, strengthen communities, and create lasting opportunities.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
            <div className="reveal">
              <p className="text-metadata uppercase">Intro Section</p>
              <h2 className="mt-4 text-[32px] leading-[40px] text-[#12323A] md:text-[44px] md:leading-[52px]">
                Catalyzing Change
              </h2>
            </div>

            <div className="reveal">
              <div className="border-l-4 border-primary pl-6">
                <p className="text-[17px] leading-[28px] text-[#343434]">
                  At Ubunifu Foundation, our work is structured around impactful programs that address real challenges faced by youth and women in our communities. These programs are not just ideas. They are active, evolving systems designed to equip individuals with skills, confidence, and opportunities.
                </p>
                <p className="mt-5 text-[17px] leading-[28px] text-[#343434]">
                  Our programs serve as long-term frameworks, while our projects are the practical, on-the-ground activities that bring these frameworks to life. Together, they create a powerful cycle of learning, growth, and sustainable development.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-1 border-y border-slate-200 sm:grid-cols-3 sm:divide-x sm:divide-slate-200">
                {[
                  ["4", "Core programs"],
                  ["2023", "Foundation launch"],
                  ["Zanzibar", "Community focus"]
                ].map(([value, label]) => (
                  <div key={label} className="py-6 sm:px-6 first:sm:pl-0">
                    <p className="text-[32px] leading-[38px] font-semibold text-[#12323A]">{value}</p>
                    <p className="mt-1 text-metadata uppercase">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {programSections.map((program, index) => {
        const Icon = program.icon;
        const isFlipped = index % 2 === 1;

        return (
          <section
            key={program.title}
            className={cn(
              "relative overflow-hidden py-20 md:py-24",
              index % 2 === 0 ? "bg-[#FBFCFA]" : "bg-[#F2F8F7]"
            )}
          >
            <div className={cn("absolute inset-x-0 top-0 h-px", program.accentBg)} />
            <Container>
              <div
                className={cn(
                  "grid items-center gap-12 lg:grid-cols-2 lg:gap-16",
                  isFlipped && "lg:[&>div:first-child]:order-2"
                )}
              >
                <div className="reveal">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className={cn("inline-flex h-10 w-10 items-center justify-center rounded-md text-sm font-bold text-white", program.accentBg)}>
                      {program.number}
                    </span>
                    <span className="text-metadata uppercase">{program.status}</span>
                    <span className={cn("text-metadata uppercase", program.accentText)}>{program.eyebrow}</span>
                  </div>

                  <div className="mt-7 flex items-start gap-4">
                    <Icon className={cn("mt-2 h-7 w-7 shrink-0", program.accentText)} />
                    <div>
                      <h2 className="text-[30px] leading-[38px] text-[#12323A] md:text-[42px] md:leading-[50px]">
                        {program.title}
                      </h2>
                      <p className="mt-5 text-[18px] leading-[29px] text-[#2F3A3A]">
                        {program.shortDescription}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 space-y-5">
                    {program.description.map((paragraph) => (
                      <p key={paragraph} className="text-[16px] leading-[26px] text-[#454545]">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <div className="mt-9 border-t border-slate-200 pt-6">
                    <p className="text-metadata uppercase">Key Outcomes</p>
                    <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                      {program.outcomes.map((outcome) => (
                        <li key={outcome} className="flex items-start gap-3 text-[15px] leading-[22px] text-[#394444]">
                          <CheckCircle2 className={cn("mt-0.5 h-5 w-5 shrink-0", program.accentText)} />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="relative reveal">
                  <div
                    className={cn(
                      "absolute hidden h-full w-full border-2 md:block",
                      program.accentBorder,
                      isFlipped ? "-left-5 top-5" : "left-5 top-5"
                    )}
                    aria-hidden="true"
                  />
                  <img
                    src={program.image}
                    alt={program.imageAlt}
                    className="relative z-10 aspect-[4/3] w-full rounded-lg object-cover shadow-xl"
                  />
                  <div className={cn("absolute bottom-5 z-20 h-16 w-2", program.accentBg, isFlipped ? "right-5" : "left-5")} aria-hidden="true" />
                </div>
              </div>
            </Container>
          </section>
        );
      })}

      <section className="bg-[#063A34] py-20 text-white md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
            <div className="reveal">
              <p className="text-metadata uppercase text-white/70">How Our Programs Work</p>
              <h2 className="mt-4 text-[32px] leading-[40px] text-white md:text-[44px] md:leading-[52px]">
                A structured journey from discovery to real-world impact.
              </h2>
              <p className="mt-6 text-[16px] leading-[26px] text-white/75">
                Our programs follow a clear path that supports individuals from self-discovery to skill building, practical application, and meaningful community contribution.
              </p>
            </div>

            <ol className="relative space-y-10 border-l border-white/20 pl-8 reveal">
              {journeySteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <li key={step.title} className="relative">
                    <span className="absolute -left-[47px] flex h-8 w-8 items-center justify-center rounded-md bg-white text-sm font-bold text-[#063A34]">
                      {index + 1}
                    </span>
                    <div className="flex items-start gap-4">
                      <Icon className="mt-1 h-6 w-6 shrink-0 text-[#F5B51B]" />
                      <div>
                        <h3 className="text-[22px] leading-[30px] text-white">{step.title}</h3>
                        <p className="mt-2 text-[16px] leading-[25px] text-white/70">{step.description}</p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-24">
        <Container>
          <div className="grid items-center gap-12 border-y border-[#DDEDE8] py-14 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
            <div className="reveal">
              <p className="text-metadata uppercase">Call to Action</p>
              <h2 className="mt-4 text-[34px] leading-[42px] text-[#12323A] md:text-[50px] md:leading-[58px]">
                Have a Project Idea?
                <span className="block text-primary">Let's Collaborate</span>
              </h2>
              <p className="mt-6 max-w-2xl text-[16px] leading-[26px] text-[#454545]">
                We believe great ideas can come from anyone. If you are passionate about creating impact and have a project or initiative that aligns with our mission, we would love to hear from you.
              </p>
              <p className="mt-4 max-w-2xl text-[16px] leading-[26px] text-[#454545]">
                We are open to working with individuals, organizations, researchers, and innovators who share our vision of building a self-sufficient and empowered Zanzibar.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-primary px-7 py-4 text-sm font-bold uppercase text-white transition-transform hover:scale-[1.02]"
                >
                  Contact Our Team
                  <ArrowRight size={17} />
                </Link>
                <Link
                  to="/volunteer"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-[#12323A] px-7 py-4 text-sm font-bold uppercase text-[#12323A] transition-colors hover:bg-[#12323A] hover:text-white"
                >
                  Propose a Project
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>

            <div className="grid gap-5 reveal sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {islandCoverage.map((island) => (
                <div key={island.name} className="relative border border-[#DDEDE8] bg-white p-5 shadow-xl">
                  <div className="absolute left-5 top-5 h-16 w-2 bg-[#F5B51B]" aria-hidden="true" />
                  <div className="flex min-h-[320px] items-center justify-center pl-5">
                    <img
                      src={island.image}
                      alt={island.alt}
                      className="max-h-[280px] w-full object-contain"
                    />
                  </div>
                  <div className="border-t border-[#DDEDE8] pt-4">
                    <p className="text-[24px] leading-[32px] font-semibold text-[#12323A]">{island.name}</p>
                    <p className="mt-2 text-[15px] leading-[22px] text-[#4A5A5A]">{island.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Projects;
