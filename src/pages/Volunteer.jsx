import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpenCheck,
  Camera,
  Code,
  GraduationCap,
  Handshake,
  HeartHandshake,
  Lightbulb,
  Mail,
  Microscope,
  PenTool,
  SearchCheck,
  Sparkles,
  TrendingUp,
  UsersRound
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "@/components/layout/Container";
import usePageTitle from "@/hooks/usePageTitle";
import useScrollReveal from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

const waysToGetInvolved = [
  {
    title: "Volunteer",
    description: "Support our programs directly through mentorship, training, community engagement, or creative contributions.",
    icon: UsersRound,
    accent: "text-[#008AC1]",
    border: "border-[#008AC1]"
  },
  {
    title: "Partner",
    description: "Collaborate with us through educational programs, social initiatives, or community development projects.",
    icon: Handshake,
    accent: "text-[#0A8F8A]",
    border: "border-[#0A8F8A]"
  },
  {
    title: "Donate",
    description: "Help expand access to education, vocational training, and entrepreneurship opportunities for underserved communities.",
    icon: HeartHandshake,
    accent: "text-[#D94B2B]",
    border: "border-[#D94B2B]"
  },
  {
    title: "Research & Innovation",
    description: "Contribute through academic collaboration, research, or impact evaluation to help strengthen and scale our work.",
    icon: Lightbulb,
    accent: "text-[#C49A2A]",
    border: "border-[#C49A2A]"
  }
];

const skillAreas = [
  "Education and Training",
  "Technology and Digital Skills",
  "Entrepreneurship",
  "Media and Storytelling",
  "Community Development",
  "Graphic Design and Communication",
  "Research and Monitoring"
];

const volunteerOpportunities = [
  {
    title: "Mentorship & Training",
    description: "Support youth and women through skills development, coaching, and entrepreneurship guidance.",
    focus: "Facilitate sessions, mentor scholars, and help participants turn ideas into practical next steps.",
    icon: GraduationCap,
    accent: "text-[#008AC1]"
  },
  {
    title: "Communication & Storytelling",
    description: "Capture and share powerful community stories through photography, videography, social media, and content creation.",
    focus: "Document programs, prepare campaign content, and help community voices reach wider audiences.",
    icon: Camera,
    accent: "text-[#D94B2B]"
  },
  {
    title: "Research & Impact",
    description: "Assist in research, data collection, and impact measurement to help improve and expand our programs.",
    focus: "Support surveys, field learning, reports, and simple tools that show what is changing.",
    icon: SearchCheck,
    accent: "text-[#0A8F8A]"
  },
  {
    title: "Technology & Innovation",
    description: "Support digital literacy initiatives and innovation programs that prepare youth for the modern world.",
    focus: "Help learners build digital confidence through practical tech support and innovation activities.",
    icon: Code,
    accent: "text-[#C49A2A]"
  }
];

const researchAreas = [
  "Youth entrepreneurship and economic empowerment",
  "Community development and social impact",
  "Digital literacy and education access",
  "Women empowerment initiatives",
  "Social innovation and sustainability"
];

const whyGetInvolved = [
  {
    title: "Real Community Impact",
    description: "Be part of programs that directly empower youth and women in Zanzibar.",
    icon: Sparkles
  },
  {
    title: "Personal Growth",
    description: "Develop leadership, communication, teamwork, and real-world experience.",
    icon: TrendingUp
  },
  {
    title: "Meaningful Connections",
    description: "Work with passionate individuals, community leaders, and changemakers.",
    icon: UsersRound
  },
  {
    title: "Innovation & Creativity",
    description: "Engage in initiatives focused on entrepreneurship, innovation, and sustainable development.",
    icon: Lightbulb
  }
];

const Volunteer = () => {
  usePageTitle("Volunteer");
  useScrollReveal();

  return (
    <div className="min-h-screen bg-white">
      <section className="relative flex min-h-[72vh] items-end overflow-hidden bg-[#063A34] text-white">
        <img
          src="/Hero section background image.png"
          alt="Ubunifu Foundation community members celebrating together"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#063A34]/78" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#063A34]/96 via-[#063A34]/74 to-[#063A34]/18" />
        <Container className="relative z-10 pb-16 pt-36 md:pb-24">
          <div className="max-w-4xl reveal">
            <p className="text-metadata uppercase text-white/75">Join Our Community</p>
            <h1 className="mt-5 text-[42px] leading-[50px] text-white md:text-[68px] md:leading-[74px]">
              Be Part of Positive Change in Zanzibar
            </h1>
            <p className="mt-6 max-w-3xl text-[17px] leading-[28px] text-white/80">
              Ubunifu Foundation believes lasting impact happens when people come together with a shared purpose. Whether you want to volunteer, collaborate, mentor, or support our programs, your involvement can help create real opportunities for youth and women across Zanzibar.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:foundationubunifu@gmail.com?subject=Volunteer%20Application"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-bold uppercase text-white transition-transform hover:scale-[1.02]"
              >
                Become a Volunteer
                <ArrowRight size={17} />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/40 px-8 py-4 text-sm font-bold uppercase text-white transition-colors hover:bg-white hover:text-[#063A34]"
              >
                Partner With Us
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <div className="reveal">
              <p className="text-metadata uppercase">Together We Create Opportunity</p>
              <h2 className="mt-4 text-[34px] leading-[42px] text-[#12323A] md:text-[50px] md:leading-[58px]">
                Real change happens through collaboration.
              </h2>
              <div className="mt-7 space-y-5">
                <p className="text-[17px] leading-[28px] text-[#454545]">
                  At Ubunifu Foundation, we work to build sustainable futures by equipping young people and women with the tools they need to succeed. But real change does not happen alone.
                </p>
                <p className="text-[17px] leading-[28px] text-[#454545]">
                  By getting involved, you become part of a growing network of changemakers committed to empowering communities through skills development, innovation, and opportunity creation.
                </p>
              </div>
            </div>

            <div className="relative reveal">
              <div className="absolute -left-5 top-5 hidden h-full w-full border-2 border-[#F5B51B] md:block" aria-hidden="true" />
              <img
                src="/about_seminar.jpg"
                alt="Community learning session at Ubunifu Foundation"
                className="relative z-10 aspect-[4/3] w-full rounded-lg object-cover shadow-xl"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#F8FCFA] py-20 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
            <div className="reveal">
              <p className="text-metadata uppercase">Ways To Get Involved</p>
              <h2 className="mt-4 text-[32px] leading-[40px] text-[#12323A] md:text-[44px] md:leading-[52px]">
                Choose how you want to contribute.
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {waysToGetInvolved.map((way, index) => {
                const Icon = way.icon;

                return (
                  <div key={way.title} className={cn("border-l-4 bg-white p-6 shadow-lg shadow-slate-900/5 reveal", way.border)}>
                    <div className="flex items-start gap-4">
                      <Icon className={cn("mt-1 h-6 w-6 shrink-0", way.accent)} />
                      <div>
                        <p className="text-metadata uppercase">{String(index + 1).padStart(2, "0")}</p>
                        <h3 className="mt-2 text-[24px] leading-[32px] text-[#12323A]">{way.title}</h3>
                        <p className="mt-3 text-[15px] leading-[23px] text-[#4A5A5A]">{way.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div className="reveal">
              <p className="text-metadata uppercase">Volunteer With Us</p>
              <h2 className="mt-4 text-[34px] leading-[42px] text-[#12323A] md:text-[50px] md:leading-[58px]">
                The Difference You Make Could Change Lives
              </h2>
              <p className="mt-6 text-[17px] leading-[28px] text-[#454545]">
                Volunteering at Ubunifu Foundation is more than giving your time. It is about creating meaningful impact while growing personally and professionally.
              </p>
              <p className="mt-5 text-[17px] leading-[28px] text-[#454545]">
                Our volunteer opportunities are designed to give you hands-on experience while working on real community initiatives.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 border-t border-slate-200 pt-6">
                {skillAreas.map((skill) => (
                  <span key={skill} className="border-l-4 border-[#0A8F8A] bg-[#F8FCFA] px-4 py-2 text-[13px] font-bold uppercase tracking-[0.5px] text-[#394444]">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative reveal">
              <img
                src="/home_empowerment_new.jpg"
                alt="Ubunifu Foundation participants in a program session"
                className="aspect-[4/3] w-full rounded-lg object-cover shadow-xl"
              />
              <div className="absolute left-5 top-5 h-16 w-2 bg-[#F5B51B]" aria-hidden="true" />
            </div>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-[#063A34] py-20 text-white md:py-24">
        <img
          src="/about_vision.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-[0.08]"
        />
        <div className="absolute inset-0 bg-[#063A34]/92" aria-hidden="true" />
        <Container>
          <div className="relative z-10 grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <div className="reveal">
              <p className="text-metadata uppercase text-white/75">Volunteer Opportunities</p>
              <h2 className="mt-4 text-[32px] leading-[40px] text-white md:text-[44px] md:leading-[52px]">
                Put your skills to work in real community programs.
              </h2>
              <p className="mt-6 text-[16px] leading-[27px] text-white/75">
                Choose a contribution path that matches your strengths. Each role connects directly to active programs supporting education, entrepreneurship, communication, research, and digital skills.
              </p>
              <div className="mt-8 overflow-hidden rounded-lg border border-white/15 bg-white/10">
                <img
                  src="/scholars-innovation.jpg"
                  alt="Ubunifu Foundation scholars learning together"
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="border-t border-white/15 p-5">
                  <p className="text-[13px] font-bold uppercase tracking-[0.8px] text-[#F5B51B]">
                    Flexible ways to serve
                  </p>
                  <p className="mt-2 text-[14px] leading-[22px] text-white/75">
                    Volunteer onsite, support project preparation, or contribute remotely through research, design, content, or digital guidance.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {volunteerOpportunities.map((opportunity, index) => {
                const Icon = opportunity.icon;

                return (
                  <div key={opportunity.title} className="border border-white/15 bg-white/[0.07] p-6 shadow-xl shadow-black/10 backdrop-blur-sm reveal">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-white/10">
                        <Icon className={cn("h-5 w-5", opportunity.accent)} />
                      </div>
                      <span className="text-[13px] font-bold uppercase tracking-[1px] text-white/45">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="mt-6">
                      <h3 className={cn("text-[18px] font-bold uppercase tracking-[0.8px]", opportunity.accent)}>
                        {opportunity.title}
                      </h3>
                      <p className="mt-3 text-[15px] leading-[24px] text-white/80">{opportunity.description}</p>
                      <div className="mt-5 border-t border-white/10 pt-4">
                        <p className="text-[12px] font-bold uppercase tracking-[0.8px] text-white/50">What you'll do</p>
                        <p className="mt-2 text-[14px] leading-[22px] text-white/75">{opportunity.focus}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="relative z-10 mt-12 grid items-center gap-6 border border-white/15 bg-white/10 p-6 backdrop-blur-sm md:grid-cols-[1fr_auto] reveal">
            <div>
              <h3 className="text-[24px] leading-[32px] text-white">Ready to contribute your skills?</h3>
              <p className="mt-2 max-w-2xl text-[15px] leading-[24px] text-white/75">
                Tell us how you would like to help and our team will connect you with the right program area.
              </p>
            </div>
            <a
              href="mailto:foundationubunifu@gmail.com?subject=Volunteer%20Application"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-primary px-7 py-4 text-sm font-bold uppercase text-white transition-transform hover:scale-[1.02]"
            >
              Apply to Volunteer
              <ArrowRight size={17} />
            </a>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-24">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div className="reveal">
              <p className="text-metadata uppercase">Research & Academic Collaboration</p>
              <h2 className="mt-4 text-[32px] leading-[40px] text-[#12323A] md:text-[44px] md:leading-[52px]">
                Study real-world impact with us.
              </h2>
              <p className="mt-6 text-[17px] leading-[28px] text-[#454545]">
                We welcome researchers, students, and academic partners who are interested in contributing to meaningful, real-world impact.
              </p>
            </div>
            <div className="border-y border-[#DDEDE8] reveal">
              {researchAreas.map((area) => (
                <div key={area} className="flex items-start gap-4 border-b border-[#DDEDE8] py-4 last:border-b-0">
                  <Microscope className="mt-1 h-5 w-5 shrink-0 text-[#008AC1]" />
                  <p className="text-[16px] leading-[24px] text-[#394444]">{area}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#F8FCFA] py-20 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
            <div className="reveal">
              <p className="text-metadata uppercase">Who We're Looking For</p>
              <h2 className="mt-4 text-[32px] leading-[40px] text-[#12323A] md:text-[44px] md:leading-[52px]">
                Passionate people ready to make a difference.
              </h2>
              <p className="mt-6 text-[17px] leading-[28px] text-[#454545]">
                We are looking for self-driven, creative, and community-oriented individuals who are committed to making a positive difference.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {whyGetInvolved.map((reason) => {
                const Icon = reason.icon;

                return (
                  <div key={reason.title} className="border border-[#DDEDE8] bg-white p-6 shadow-lg shadow-slate-900/5 reveal">
                    <Icon className="h-6 w-6 text-[#0A8F8A]" />
                    <h3 className="mt-4 text-[22px] leading-[30px] text-[#12323A]">{reason.title}</h3>
                    <p className="mt-3 text-[15px] leading-[23px] text-[#4A5A5A]">{reason.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-24">
        <Container>
          <div className="grid items-center gap-10 border-y border-[#DDEDE8] py-14 lg:grid-cols-[1fr_auto]">
            <div className="max-w-3xl reveal">
              <p className="text-metadata uppercase">Start Your Journey With Us</p>
              <h2 className="mt-4 text-[34px] leading-[42px] text-[#12323A] md:text-[50px] md:leading-[58px]">
                Whether you want to volunteer, collaborate, or support our mission, this is your opportunity.
              </h2>
              <p className="mt-6 text-[16px] leading-[26px] text-[#454545]">
                Together, we can create lasting change.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
              <a
                href="mailto:foundationubunifu@gmail.com?subject=Volunteer%20Application"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-bold uppercase text-white transition-transform hover:scale-[1.02]"
              >
                Apply Now
                <Mail size={17} />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-[#12323A] px-8 py-4 text-sm font-bold uppercase text-[#12323A] transition-colors hover:bg-[#12323A] hover:text-white"
              >
                Contact Our Team
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Volunteer;
