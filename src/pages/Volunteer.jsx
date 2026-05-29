import { Link } from "react-router-dom";
import { Users, Zap, Lightbulb, ArrowRight, BookOpen, Code, PenTool, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "@/components/layout/Container";
import usePageTitle from "@/hooks/usePageTitle";
import useScrollReveal from "@/hooks/useScrollReveal";

const volunteerOpportunities = [
  {
    title: "Mentorship & Training",
    description: "Support youth and women through skills training, mentorship, and entrepreneurship guidance.",
    icon: Users,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Communication & Storytelling",
    description: "Help document community stories through photography, videography, social media, or content creation.",
    icon: PenTool,
    color: "bg-purple-50 text-purple-600"
  },
  {
    title: "Research & Impact",
    description: "Assist with research projects, impact measurement, and community assessments.",
    icon: TrendingUp,
    color: "bg-green-50 text-green-600"
  },
  {
    title: "Technology & Innovation",
    description: "Support digital literacy, innovation programs, and technology-related initiatives.",
    icon: Code,
    color: "bg-orange-50 text-orange-600"
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

const whyVolunteer = [
  {
    title: "Real Community Impact",
    description: "Contribute directly to programs empowering youth and women in Zanzibar.",
    icon: Lightbulb
  },
  {
    title: "Personal Growth",
    description: "Develop leadership, teamwork, communication, and practical field experience.",
    icon: TrendingUp
  },
  {
    title: "Meaningful Connections",
    description: "Work with passionate individuals, community leaders, and change-makers.",
    icon: Users
  },
  {
    title: "Innovation & Creativity",
    description: "Be part of initiatives focused on entrepreneurship, innovation, and sustainable development.",
    icon: Zap
  }
];

const Volunteer = () => {
  usePageTitle("Volunteer");
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
                Volunteer With Us
              </span>
              <h1 className="text-[40px] md:text-[56px] lg:text-[64px] font-bold leading-[1.1] tracking-tight font-serif text-white">
                The Difference You Make Could Change Lives
              </h1>
              <p className="text-lg md:text-xl text-white/85 leading-relaxed font-light max-w-lg">
                Ubunifu Foundation welcomes passionate individuals who want to contribute to community development, youth empowerment, education, innovation, and entrepreneurship in Zanzibar.

                We believe volunteers bring valuable energy, ideas, and experiences that strengthen our mission and create meaningful impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  className="px-8 py-3 bg-white text-[#2D1457] hover:bg-gray-100 font-bold rounded-full text-sm uppercase tracking-wider w-full sm:w-auto"
                  onClick={() => window.location.href = "mailto:volunteer@ubunifufoundation.org"}
                >
                  Apply as Volunteer
                </Button>
                <Link to="/get-involved">
                  <Button
                    className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-[#2D1457] font-bold rounded-full text-sm uppercase tracking-wider transition-all w-full sm:w-auto"
                    variant="outline"
                  >
                    Explore Opportunities
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative reveal">
              <div className="aspect-square rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white/10">
                <img
                  src="/about_seminar.jpg"
                  alt="Volunteers with youth"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. ABOUT VOLUNTEERING */}
      <section className="py-24 bg-[#F5F5F5]">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4 reveal">
              <h2 className="text-[40px] md:text-[48px] font-bold text-[#2D1457] font-serif">
                Grow While Creating Impact
              </h2>
              <div className="w-20 h-1 bg-[#F4B942] mx-auto rounded-full" />
            </div>

            <div className="space-y-8 reveal text-lg text-[#404040] leading-relaxed">
              <p>
                Our volunteer opportunities provide a chance to gain practical experience, contribute to meaningful projects, and work directly with communities and youth initiatives.
              </p>
              <p className="font-bold">
                We welcome individuals with different backgrounds and skills including:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {skillAreas.map((skill, i) => (
                  <div key={i} className="flex items-center gap-3 text-[#404040]">
                    <span className="w-2 h-2 rounded-full bg-[#F4B942]" />
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. VOLUNTEER OPPORTUNITIES */}
      <section className="py-24">
        <Container>
          <div className="space-y-16">
            <div className="text-center space-y-4 reveal">
              <h2 className="text-[40px] md:text-[48px] font-bold text-[#2D1457] font-serif">
                Volunteer Opportunities
              </h2>
              <div className="w-20 h-1 bg-[#F4B942] mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {volunteerOpportunities.map((opp, i) => (
                <div key={i} className="group reveal bg-white p-10 rounded-2xl border-2 border-[#F5F5F5] shadow-md hover:shadow-lg transition-all">
                  <div className={`${opp.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <opp.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-[#2D1457] font-serif mb-3">{opp.title}</h3>
                  <p className="text-[#404040] text-sm leading-relaxed">{opp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 4. RESEARCH OPPORTUNITIES */}
      <section className="py-24 bg-[#F5F5F5]">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4 reveal">
              <h2 className="text-[40px] md:text-[48px] font-bold text-[#2D1457] font-serif">
                Research & Academic Collaboration
              </h2>
              <div className="w-20 h-1 bg-[#F4B942] mx-auto rounded-full" />
            </div>

            <div className="space-y-8 reveal text-lg text-[#404040] leading-relaxed">
              <p>
                Ubunifu Foundation welcomes researchers, university students, and academic partners interested in studying community development, entrepreneurship, innovation, youth empowerment, and sustainable social impact.
              </p>
              <div>
                <p className="font-bold mb-4">Potential collaboration areas include:</p>
                <ul className="space-y-3 ml-6">
                  {[
                    "Youth entrepreneurship impact",
                    "Community empowerment",
                    "Digital literacy programs",
                    "Women empowerment initiatives",
                    "Social innovation and sustainability"
                  ].map((area, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#1696D2]" />
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. WHO WE'RE LOOKING FOR */}
      <section className="py-24">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4 reveal">
              <h2 className="text-[40px] md:text-[48px] font-bold text-[#2D1457] font-serif">
                Passionate People Ready To Make A Difference
              </h2>
              <div className="w-20 h-1 bg-[#F4B942] mx-auto rounded-full" />
            </div>

            <div className="space-y-6 reveal text-lg text-[#404040] leading-relaxed">
              <p>
                We are looking for self-driven, creative, and community-oriented individuals who are passionate about creating positive social impact.
              </p>
              <p>
                Whether you are a student, professional, researcher, or creative contributor, your skills and ideas can help strengthen our mission and community programs.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. WHY VOLUNTEER */}
      <section className="py-24 bg-[#F5F5F5]">
        <Container>
          <div className="space-y-16">
            <div className="text-center space-y-4 reveal">
              <h2 className="text-[40px] md:text-[48px] font-bold text-[#2D1457] font-serif">
                Why Volunteer With Us
              </h2>
              <div className="w-20 h-1 bg-[#F4B942] mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {whyVolunteer.map((reason, i) => (
                <div key={i} className="group reveal bg-white p-10 rounded-2xl border-2 border-[#F5F5F5] shadow-md hover:shadow-lg transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-[#1696D2]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <reason.icon size={28} className="text-[#1696D2]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2D1457] font-serif mb-3">{reason.title}</h3>
                  <p className="text-[#404040] text-sm leading-relaxed">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 7. FINAL CTA */}
      <section className="py-24">
        <Container>
          <div className="bg-gradient-to-r from-[#2D1457] to-[#1696D2] rounded-3xl p-12 md:p-20 text-center space-y-8 relative overflow-hidden text-white reveal">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            
            <h2 className="text-[32px] md:text-[48px] font-bold font-serif tracking-tight relative z-10">
              Ready To Make An Impact?
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto relative z-10">
              Become part of a growing movement empowering communities through innovation, education, and opportunity.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4 relative z-10">
              <Button
                className="px-10 py-4 bg-[#F4B942] text-[#2D1457] hover:bg-yellow-400 font-bold rounded-full text-sm uppercase tracking-wider"
                onClick={() => window.location.href = "mailto:volunteer@ubunifufoundation.org"}
              >
                Submit Application
              </Button>
              <Link to="/contact">
                <Button className="px-10 py-4 border-2 border-white text-white hover:bg-white hover:text-[#2D1457] font-bold rounded-full text-sm uppercase tracking-wider transition-all" variant="outline">
                  Contact Our Team
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Volunteer;
