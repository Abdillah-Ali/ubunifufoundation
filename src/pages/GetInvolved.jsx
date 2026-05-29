import { Link } from "react-router-dom";
import { Users, Handshake, Lightbulb, BookOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "@/components/layout/Container";
import usePageTitle from "@/hooks/usePageTitle";
import useScrollReveal from "@/hooks/useScrollReveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const waysToGetInvolved = [
  {
    title: "Volunteer",
    description: "Support our programs through mentorship, training, community engagement, or creative contributions.",
    icon: Users,
    color: "bg-blue-50 text-blue-600",
    cta: "Learn More"
  },
  {
    title: "Partner",
    description: "Collaborate with us through educational, social, or community development partnerships.",
    icon: Handshake,
    color: "bg-green-50 text-green-600",
    cta: "Explore"
  },
  {
    title: "Donate",
    description: "Help us expand access to education, vocational training, and innovation opportunities.",
    icon: Lightbulb,
    color: "bg-yellow-50 text-yellow-600",
    cta: "Contribute"
  },
  {
    title: "Research & Innovation",
    description: "Contribute through academic collaboration, research projects, or impact assessment initiatives.",
    icon: BookOpen,
    color: "bg-purple-50 text-purple-600",
    cta: "Collaborate"
  }
];

const sdgGoals = [
  {
    number: 8,
    title: "Decent Work & Economic Growth",
    description: "Supporting youth entrepreneurship, vocational skills, and sustainable economic opportunities.",
    color: "bg-[#a21942]"
  },
  {
    number: 4,
    title: "Quality Education",
    description: "Providing practical training, mentorship, and access to learning opportunities.",
    color: "bg-[#c6192d]"
  },
  {
    number: 1,
    title: "No Poverty",
    description: "Empowering communities through income-generating skills and entrepreneurship initiatives.",
    color: "bg-[#e5243b]"
  },
  {
    number: 10,
    title: "Reduced Inequalities",
    description: "Creating inclusive opportunities for underserved youth and women.",
    color: "bg-[#dd3d3d]"
  },
  {
    number: 9,
    title: "Industry, Innovation & Infrastructure",
    description: "Encouraging innovation, creativity, and social enterprise development.",
    color: "bg-[#fd6925]"
  }
];

const impactStats = [
  { number: "500+", label: "Youth Reached" },
  { number: "100+", label: "Women Empowered" },
  { number: "20+", label: "Community Initiatives" },
  { number: "5+", label: "Core Programs" }
];

const GetInvolved = () => {
  usePageTitle("Get Involved");
  useScrollReveal();

  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 bg-[#2D1457] text-white overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 right-10 w-64 h-64 border-4 border-[#F4B942]/20 rounded-full opacity-40 blur-sm" />
        <div className="absolute bottom-10 left-10 w-48 h-48 border-4 border-[#1696D2]/20 rounded-full opacity-40 blur-sm" />

        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 reveal">
              <span className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-[11px] font-bold tracking-[0.15em] uppercase">
                Join Our Community
              </span>
              <h1 className="text-[40px] md:text-[56px] lg:text-[64px] font-bold leading-[1.1] tracking-tight font-serif text-white">
                Be Part of Positive Change in Zanzibar
              </h1>
              <p className="text-lg md:text-xl text-white/85 leading-relaxed font-light max-w-lg">
                Ubunifu Foundation believes lasting impact happens when communities work together. Whether you are a volunteer, mentor, partner, researcher, donor, or supporter, your contribution can help empower youth and women through education, innovation, and entrepreneurship.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/volunteer">
                  <Button className="px-8 py-3 bg-transparent text-[#2D1457] hover:bg-gray-100 font-bold rounded-full text-sm uppercase tracking-wider w-full sm:w-auto">
                    Become a Volunteer
                  </Button>
                </Link>
                <Button
                  className="px-8 py-3 border-2 border-white text-white hover:bg-transparent hover:text-[#2D1457] font-bold rounded-full text-sm uppercase tracking-wider transition-all w-full sm:w-auto"
                  variant="outline"
                >
                  Partner With Us
                </Button>
              </div>
            </div>

            <div className="relative reveal">
              <div className="aspect-square rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white/10">
                <img
                  src="/home_empowerment_new.jpg"
                  alt="Community collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. WHY GET INVOLVED */}
      <section className="py-24 bg-[#F5F5F5]">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4 reveal">
              <h2 className="text-[40px] md:text-[48px] font-bold text-[#2D1457] font-serif">
                Together We Create Opportunity
              </h2>
              <div className="w-20 h-1 bg-[#F4B942] mx-auto rounded-full" />
            </div>

            <div className="space-y-6 reveal text-lg text-[#404040] leading-relaxed">
              <p>
                At Ubunifu Foundation, we work to build sustainable futures for young people and women across Zanzibar. By joining our mission, you become part of a growing community focused on skills development, innovation, leadership, and social impact.
              </p>
              <p>
                Every contribution matters — from sharing knowledge and mentoring youth to supporting community initiatives and entrepreneurship programs.
              </p>
            </div>

            <div className="relative reveal rounded-[2rem] overflow-hidden shadow-lg h-96">
              <img
                src="/about_seminar.jpg"
                alt="Community learning"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* 3. WAYS TO GET INVOLVED */}
      <section className="py-24">
        <Container>
          <div className="space-y-16">
            <div className="text-center space-y-4 reveal">
              <h2 className="text-[40px] md:text-[48px] font-bold text-[#2D1457] font-serif">
                Ways To Get Involved
              </h2>
              <div className="w-20 h-1 bg-[#F4B942] mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {waysToGetInvolved.map((way, i) => (
                <div key={i} className="group reveal bg-transparent p-10 rounded-2xl border-2 border-[#F5F5F5] shadow-md hover:shadow-lg transition-all">
                  <div className={`${way.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <way.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-[#2D1457] font-serif mb-3">{way.title}</h3>
                  <p className="text-[#404040] text-sm leading-relaxed mb-6">{way.description}</p>
                  <Link to={way.title === "Volunteer" ? "/volunteer" : "/contact"}>
                    <Button variant="outline" className="text-primary hover:bg-primary hover:text-white text-sm font-bold rounded-full">
                      {way.cta} <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 4. COMMUNITY IMPACT */}
      <section className="py-32 bg-gradient-to-r from-[#2D1457] to-[#1696D2] text-white relative overflow-hidden">
        <Container className="relative z-10">
          <div className="text-center mb-20 reveal space-y-4">
            <h2 className="text-[40px] md:text-[48px] font-bold font-serif">
              Your Support Creates Real Impact
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Through collaboration and community support, we continue creating opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {impactStats.map((stat, i) => (
              <div key={i} className="text-center reveal">
                <div className="text-6xl md:text-7xl font-bold font-serif mb-4">
                  <AnimatedCounter value={stat.number} />
                </div>
                <p className="text-lg text-white/90">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. SDG ALIGNMENT */}
      <section className="py-24 bg-[#F5F5F5]">
        <Container>
          <div className="space-y-12">
            <div className="text-center space-y-4 max-w-3xl mx-auto reveal">
              <h2 className="text-[40px] md:text-[48px] font-bold text-[#2D1457] font-serif">
                Aligned With The Sustainable Development Goals
              </h2>
              <div className="w-20 h-1 bg-[#F4B942] mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sdgGoals.map((goal, i) => (
                <div
                  key={i}
                  className="bg-white rounded-[1.5rem] overflow-hidden shadow-md hover:shadow-lg transition-shadow reveal group"
                >
                  <div className={`${goal.color} h-32 flex items-end justify-start p-6 text-white`}>
                    <div className="flex flex-col">
                      <span className="text-5xl font-bold font-serif">{goal.number}</span>
                      <span className="text-xs font-bold uppercase tracking-wider">SDG</span>
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <h3 className="text-lg font-bold text-[#2D1457] font-serif">{goal.title}</h3>
                    <p className="text-[#404040] text-sm leading-relaxed">{goal.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 6. FINAL CTA */}
      <section className="py-24">
        <Container>
          <div className="bg-gradient-to-r from-[#2D1457] to-[#1696D2] rounded-3xl p-12 md:p-20 text-center space-y-8 relative overflow-hidden text-white reveal">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            
            <h2 className="text-[32px] md:text-[48px] font-bold font-serif tracking-tight relative z-10">
              Start Your Journey With Us
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto relative z-10">
              Whether you want to volunteer, collaborate, mentor, or support our mission, there is a place for you at Ubunifu Foundation.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4 relative z-10">
              <Link to="/volunteer">
                <Button className="px-10 py-4 bg-[#F4B942] text-[#2D1457] hover:bg-yellow-400 font-bold rounded-full text-sm uppercase tracking-wider">
                  Apply Now
                </Button>
              </Link>
              <Link to="/contact">
                <Button className="px-10 py-4 border-2 border-white text-white hover:bg-white hover:text-[#2D1457] font-bold rounded-full text-sm uppercase tracking-wider transition-all" variant="outline">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default GetInvolved;