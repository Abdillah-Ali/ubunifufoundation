import { Heart, Users, Lightbulb, Globe, Zap } from "lucide-react";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import usePageTitle from "@/hooks/usePageTitle";
import useScrollReveal from "@/hooks/useScrollReveal";

const coreValues = [
  {
    title: "Innovation",
    description: "We encourage creativity, problem-solving, and forward-thinking ideas.",
    icon: Lightbulb,
    color: "bg-yellow-50 text-yellow-600"
  },
  {
    title: "Empowerment",
    description: "We believe people thrive when given the tools and opportunities to grow.",
    icon: Zap,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Community",
    description: "We work together to create lasting and meaningful impact.",
    icon: Users,
    color: "bg-green-50 text-green-600"
  },
  {
    title: "Inclusion",
    description: "We support equal opportunities regardless of background or circumstance.",
    icon: Heart,
    color: "bg-pink-50 text-pink-600"
  },
  {
    title: "Sustainability",
    description: "We focus on long-term solutions that strengthen communities over time.",
    icon: Globe,
    color: "bg-emerald-50 text-emerald-600"
  }
];

const sdgGoals = [
  {
    number: 8,
    title: "Decent Work & Economic Growth",
    description: "Creating opportunities for youth entrepreneurship, vocational skills, and sustainable employment to reduce unemployment in Zanzibar.",
    image: "/SDG8.png"
  },
  {
    number: 4,
    title: "Quality Education",
    description: "Providing practical learning experiences, digital skills training, mentorship, and accessible educational opportunities.",
    image: "/SDG4.png"
  },
  {
    number: 1,
    title: "No Poverty",
    description: "Helping communities generate income through entrepreneurship, innovation, and economic empowerment programs.",
    image: "/SDG 1.png"
  },
  {
    number: 10,
    title: "Reduced Inequalities",
    description: "Supporting underserved youth, women, and marginalized communities through inclusive development initiatives.",
    image: "/SDG10.png"
  },
  {
    number: 9,
    title: "Industry, Innovation & Infrastructure",
    description: "Encouraging innovation, creativity, and social enterprise solutions that strengthen local communities and future industries.",
    image: "/SDG9.png"
  }
];

const Mission = () => {
  usePageTitle("Our Mission");
  useScrollReveal();

  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 bg-slate-100 text-slate-900 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 right-10 w-64 h-64 border-4 border-[#F4B942]/20 rounded-full opacity-40 blur-sm" />
        <div className="absolute bottom-10 left-10 w-48 h-48 border-4 border-[#1696D2]/20 rounded-full opacity-40 blur-sm" />
        <div className="absolute top-40 left-1/4 w-32 h-32 border-4 border-[#38A169]/20 rounded-full opacity-40 blur-sm" />

        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side Content */}
            <div className="space-y-8 reveal">
              <h1 className="text-[40px] md:text-[56px] lg:text-[64px] font-bold leading-[1.1] tracking-tight font-serif text-slate-900">
                Empowering Communities Through Skills, Innovation, and Opportunity
              </h1>
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-light max-w-lg">
                Ubunifu Foundation exists to equip youth and women in Zanzibar with the skills, confidence, and opportunities needed to create sustainable futures. Through entrepreneurship, vocational training, digital education, and mentorship, we help communities transform challenges into long-term growth and economic independence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  className="px-8 py-3 bg-[#00A3E1] text-white hover:bg-[#0081B3] font-bold rounded-full text-sm uppercase tracking-wider"
                  onClick={() => window.location.hash = "#programs"}
                >
                  Explore Our Programs
                </Button>
                <Button
                  className="px-8 py-3 border-2 border-slate-400 text-slate-700 hover:bg-slate-200 font-bold rounded-full text-sm uppercase tracking-wider transition-all"
                  variant="outline"
                  onClick={() => window.location.hash = "#get-involved"}
                >
                  Join Our Mission
                </Button>
              </div>
            </div>

            {/* Right Side Image */}
            <div className="relative reveal">
              <div className="aspect-square rounded-[2rem] overflow-hidden shadow-2xl border-8 border-slate-300">
                <img
                  src="/home_empowerment_new.jpg"
                  alt="Community empowerment"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Circular decorations */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 border-4 border-[#F4B942] rounded-full opacity-60" />
            </div>
          </div>
        </Container>
      </section>

      {/* 2. WHY WE EXIST SECTION */}
      <section className="py-24 bg-[#F5F5F5]">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4 reveal">
              <h2 className="text-[40px] md:text-[48px] font-bold text-slate-900 font-serif">
                Addressing Zanzibar's Challenge
              </h2>
              <div className="w-20 h-1 bg-[#F4B942] mx-auto rounded-full" />
            </div>

            <div className="space-y-6 reveal text-lg text-[#404040] leading-relaxed">
              <p>
                Young people and women in Zanzibar face significant barriers: limited employment opportunities, skills gaps, and lack of entrepreneurial support. These challenges drive youth toward unproductive activities instead of channeling their potential toward community development.
              </p>
              <p>
                Ubunifu Foundation bridges this gap by providing comprehensive training, mentorship, and practical support that transforms potential into impact.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. CORE VALUES SECTION */}
      <section className="py-24">
        <Container>
          <div className="space-y-16">
            <div className="text-center space-y-4 reveal">
              <h2 className="text-[40px] md:text-[48px] font-bold text-[#2D1457] font-serif">
                Our Core Values
              </h2>
              <div className="w-20 h-1 bg-[#F4B942] mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              {coreValues.map((value, i) => (
                <div
                  key={i}
                  className="group reveal"
                >
                  <div className={`${value.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <value.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-[#2D1457] font-serif mb-3">{value.title}</h3>
                  <p className="text-[#404040] leading-relaxed text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 4. SDG ALIGNMENT SECTION */}
      <section className="py-24 bg-[#F5F5F5]">
        <Container>
          <div className="space-y-12">
            <div className="flex justify-center mb-8 reveal">
              <img 
                src="/SDG.png" 
                alt="Sustainable Development Goals" 
                className="w-full max-w-4xl h-auto rounded-[1.5rem] shadow-lg"
              />
            </div>

            <div className="text-center max-w-3xl mx-auto reveal">
              <p className="text-lg text-[#404040]">
                Our programs and initiatives align with global sustainable development priorities focused on education, economic empowerment, innovation, and social inclusion.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {sdgGoals.map((goal, i) => (
                <div
                  key={i}
                  className="bg-white rounded-[1.5rem] overflow-hidden shadow-md hover:shadow-lg transition-shadow reveal group"
                >
                  <div className="aspect-square bg-slate-100 overflow-hidden">
                    <img
                      src={goal.image}
                      alt={`SDG ${goal.number}: ${goal.title}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 space-y-2">
                    <h3 className="text-base font-bold text-[#2D1457] font-serif">{goal.title}</h3>
                    <p className="text-[#404040] text-xs leading-relaxed">{goal.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 5. CALL TO ACTION SECTION */}
      <section
        className="relative py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(rgba(45, 20, 87, 0.85), rgba(22, 150, 210, 0.85)), url('/scholars-innovation.jpg')",
          backgroundAttachment: "fixed"
        }}
      >
        <Container>
          <div className="text-center space-y-12 max-w-3xl mx-auto reveal">
            <h2 className="text-[40px] md:text-[56px] font-bold font-serif text-white leading-tight">
              Be Part of the Change
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Together, we can create opportunities, empower communities, and build a more sustainable future for Zanzibar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button
                className="px-10 py-4 bg-[#F4B942] text-[#2D1457] hover:bg-yellow-400 font-bold rounded-full text-sm uppercase tracking-wider"
              >
                Donate Now
              </Button>
              <Button
                className="px-10 py-4 bg-white text-[#2D1457] hover:bg-gray-100 font-bold rounded-full text-sm uppercase tracking-wider"
              >
                Partner With Us
              </Button>
              <Button
                className="px-10 py-4 border-2 border-white text-white hover:bg-white hover:text-[#2D1457] font-bold rounded-full text-sm uppercase tracking-wider transition-all"
                variant="outline"
              >
                Volunteer
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Mission;
