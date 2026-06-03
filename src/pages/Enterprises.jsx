import { Link } from "react-router-dom";
import {
  ArrowRight,
  Baby,
  Flame,
  GraduationCap,
  HeartPulse,
  Recycle,
  Route,
  Scissors,
  Sparkles,
  UsersRound
} from "lucide-react";
import Container from "@/components/layout/Container";
import { cn } from "@/lib/utils";
import usePageTitle from "@/hooks/usePageTitle";
import useScrollReveal from "@/hooks/useScrollReveal";

const enterprises = [
  {
    name: "Zanhalisi Charcoal Briquette",
    focus: "Clean cooking energy",
    description: "Zanhalisi Charcoal Briquette is our first enterprise born from Ubunifu Foundation. It produces affordable and eco-friendly charcoal briquettes made from recycled coconut shells, providing a sustainable clean cooking energy solution for low- and middle-income households, food vendors, hotels, and restaurants. By using coconut shell waste, the enterprise contributes to environmental conservation, reduces deforestation, and promotes clean energy for communities.",
    image: "/omar.png",
    imageAlt: "Ubunifu scholar representing clean energy enterprise work",
    icon: Flame,
    accent: "bg-[#6A8F2A]",
    text: "text-[#6A8F2A]",
    border: "border-[#6A8F2A]",
    tags: ["Coconut shell waste", "Clean cooking", "Deforestation reduction"]
  },
  {
    name: "Feel Safe",
    focus: "Menstrual health",
    description: "Feel Safe is a social enterprise dedicated to improving menstrual health by producing affordable, reusable sanitary pads for women and girls in Zanzibar. The initiative promotes healthier menstrual hygiene practices, reduces environmental waste, and provides a sustainable alternative to disposable sanitary products.",
    image: "/aisha.png",
    imageAlt: "Ubunifu scholar representing women's health enterprise work",
    icon: HeartPulse,
    accent: "bg-[#D94B2B]",
    text: "text-[#D94B2B]",
    border: "border-[#D94B2B]",
    tags: ["Reusable pads", "Women's health", "Waste reduction"]
  },
  {
    name: "Eco-Plastic Innovation",
    focus: "Environmental enterprise",
    description: "Eco-Plastic Innovation addresses the growing challenge of plastic pollution by converting plastic waste into durable construction blocks. The enterprise contributes to environmental conservation while providing innovative and affordable building materials for local communities.",
    image: "/about_vision.jpg",
    imageAlt: "Innovation workshop with participants developing enterprise ideas",
    icon: Recycle,
    accent: "bg-[#0B7A75]",
    text: "text-[#0B7A75]",
    border: "border-[#0B7A75]",
    tags: ["Plastic waste", "Construction blocks", "Circular economy"]
  },
  {
    name: "Maili Essence",
    focus: "Natural skincare",
    description: "Maili Essences develops natural skincare products designed to address common skin concerns such as acne and blemishes. By promoting healthy skin, the enterprise helps women build confidence and improve their overall well-being.",
    image: "/khamis.png",
    imageAlt: "Ubunifu scholar connected to natural skincare innovation",
    icon: Sparkles,
    accent: "bg-[#C49A2A]",
    text: "text-[#9B7618]",
    border: "border-[#C49A2A]",
    tags: ["Natural skincare", "Acne care", "Confidence"]
  },
  {
    name: "Safari Queen Rider",
    focus: "Women in tourism",
    description: "Safari Queen Rider empowers young women to participate in the tourism industry as tour riders and guides. The enterprise promotes women's economic empowerment while providing unique and safe travel experiences for visitors exploring Zanzibar.",
    image: "/mwamvua.png",
    imageAlt: "Ubunifu scholar leading tourism enterprise work",
    icon: Route,
    accent: "bg-[#008AC1]",
    text: "text-[#008AC1]",
    border: "border-[#008AC1]",
    tags: ["Tour riders", "Safe travel", "Women guides"]
  },
  {
    name: "SEMK Hair Care Solution",
    focus: "Natural hair care",
    description: "SEMK produces natural hair oils and treatments that address scalp conditions and hair health challenges. The enterprise encourages the use of locally sourced ingredients while promoting healthier and more sustainable hair care practices.",
    image: "/munira.png",
    imageAlt: "Ubunifu scholar representing natural hair care enterprise work",
    icon: Scissors,
    accent: "bg-[#6A8F2A]",
    text: "text-[#6A8F2A]",
    border: "border-[#6A8F2A]",
    tags: ["Hair oils", "Scalp health", "Local ingredients"]
  },
  {
    name: "Shape the Future",
    focus: "Child development",
    description: "Shape the Future enhances children's educational outcomes through English language development and mental well-being support. The enterprise equips young learners with essential skills and confidence to succeed academically and personally.",
    image: "/home_empowerment_new.jpg",
    imageAlt: "Young people learning during an Ubunifu Foundation session",
    icon: GraduationCap,
    accent: "bg-[#12323A]",
    text: "text-[#12323A]",
    border: "border-[#12323A]",
    tags: ["English learning", "Mental well-being", "Academic confidence"]
  },
  {
    name: "Inclusive Path",
    focus: "Inclusive education",
    description: "Inclusive Path promotes inclusive education by developing communication solutions for deaf students. Through innovative technology, the enterprise helps learners participate more effectively in classrooms and access educational opportunities on equal terms.",
    image: "/fadhil.png",
    imageAlt: "Ubunifu scholar representing inclusive education innovation",
    icon: UsersRound,
    accent: "bg-[#0A8F8A]",
    text: "text-[#0A8F8A]",
    border: "border-[#0A8F8A]",
    tags: ["Deaf learners", "Classroom access", "Education technology"]
  },
  {
    name: "Little Learning Care Zone",
    focus: "Learning support",
    description: "Little Learning Care Zone provides educational support and learning guidance for children, particularly those with busy working parents. The initiative helps learners remain engaged, improve academic performance, and develop a strong foundation for future success.",
    image: "/scholars-innovation.jpg",
    imageAlt: "Students reviewing learning materials during an Ubunifu program",
    icon: Baby,
    accent: "bg-[#008AC1]",
    text: "text-[#008AC1]",
    border: "border-[#008AC1]",
    tags: ["Learning guidance", "Working parents", "Child support"]
  }
];

const Enterprises = () => {
  usePageTitle("Enterprises");
  useScrollReveal();

  return (
    <div className="min-h-screen bg-white">
      <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-[#063A34] text-white">
        <img
          src="/about_vision.jpg"
          alt="Ubunifu scholars developing social enterprise ideas"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#063A34]/74" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#063A34]/95 via-[#063A34]/70 to-[#063A34]/20" />
        <Container className="relative z-10 pb-16 pt-36 md:pb-24">
          <div className="max-w-4xl reveal">
            <p className="text-metadata uppercase text-white/75">Scholar Enterprises</p>
            <h1 className="mt-5 text-[42px] leading-[50px] text-white md:text-[68px] md:leading-[74px]">
              Enterprises Started by Ubunifu Scholars
            </h1>
            <p className="mt-6 max-w-3xl text-[17px] leading-[28px] text-white/80">
              Through Ubunifu Foundation's entrepreneurship and innovation programs, young people and women have transformed community challenges into sustainable social enterprises. These ventures are creating positive social, environmental, and economic impact across Zanzibar.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
            <div className="reveal">
              <p className="text-metadata uppercase">Venture Portfolio</p>
              <h2 className="mt-4 text-[32px] leading-[40px] text-[#12323A] md:text-[44px] md:leading-[52px]">
                Community problems turned into practical businesses.
              </h2>
            </div>
            <div className="reveal">
              <div className="border-l-4 border-primary pl-6">
                <p className="text-[17px] leading-[28px] text-[#343434]">
                  Each enterprise began with a local challenge and a scholar willing to test a solution. Together, they show how training, mentorship, and innovation can produce ventures that serve people, protect the environment, and create new income pathways.
                </p>
              </div>
              <div className="mt-12 grid border-y border-slate-200 sm:grid-cols-3 sm:divide-x sm:divide-slate-200">
                {[
                  ["9", "Scholar ventures"],
                  ["3", "Impact areas"],
                  ["Zanzibar", "Community market"]
                ].map(([value, label]) => (
                  <div key={label} className="py-6 sm:px-6 first:sm:pl-0">
                    <p className="text-[34px] leading-[38px] font-semibold text-[#12323A]">{value}</p>
                    <p className="mt-1 text-metadata uppercase">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {enterprises.map((enterprise, index) => {
        const Icon = enterprise.icon;
        const isFlipped = index % 2 === 1;

        return (
          <section
            key={enterprise.name}
            className={cn(
              "relative overflow-hidden py-20 md:py-24",
              index % 2 === 0 ? "bg-[#FBFCFA]" : "bg-[#F2F8F7]"
            )}
          >
            <div className={cn("absolute inset-x-0 top-0 h-px", enterprise.accent)} />
            <Container>
              <div
                className={cn(
                  "grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16",
                  isFlipped && "lg:[&>div:first-child]:order-2"
                )}
              >
                <div className="reveal">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className={cn("inline-flex h-10 w-10 items-center justify-center rounded-md text-sm font-bold text-white", enterprise.accent)}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-metadata uppercase">{enterprise.focus}</span>
                  </div>

                  <div className="mt-7 flex items-start gap-4">
                    <Icon className={cn("mt-2 h-7 w-7 shrink-0", enterprise.text)} />
                    <div>
                      <h2 className="text-[30px] leading-[38px] text-[#12323A] md:text-[42px] md:leading-[50px]">
                        {enterprise.name}
                      </h2>
                      <p className="mt-5 text-[17px] leading-[28px] text-[#454545]">
                        {enterprise.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3 border-t border-slate-200 pt-6">
                    {enterprise.tags.map((tag) => (
                      <span key={tag} className={cn("border-l-4 bg-white px-4 py-2 text-[13px] font-bold uppercase tracking-[0.5px] text-[#394444]", enterprise.border)}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative reveal">
                  <div
                    className={cn(
                      "absolute hidden h-full w-full border-2 md:block",
                      enterprise.border,
                      isFlipped ? "-left-5 top-5" : "left-5 top-5"
                    )}
                    aria-hidden="true"
                  />
                  <img
                    src={enterprise.image}
                    alt={enterprise.imageAlt}
                    className="relative z-10 aspect-[4/3] w-full rounded-lg object-cover shadow-xl"
                  />
                  <div className={cn("absolute bottom-5 z-20 h-16 w-2", enterprise.accent, isFlipped ? "right-5" : "left-5")} aria-hidden="true" />
                </div>
              </div>
            </Container>
          </section>
        );
      })}

      <section className="bg-[#063A34] py-20 text-white md:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
            <div className="max-w-3xl reveal">
              <p className="text-metadata uppercase text-white/70">Build With Ubunifu</p>
              <h2 className="mt-4 text-[34px] leading-[42px] text-white md:text-[50px] md:leading-[58px]">
                Support the next generation of scholar-led enterprises.
              </h2>
              <p className="mt-6 text-[16px] leading-[26px] text-white/75">
                Partner with Ubunifu Foundation to mentor founders, strengthen early-stage ventures, or help bring more community solutions to market.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-bold uppercase text-white transition-transform hover:scale-[1.02]"
            >
              Partner With Us
              <ArrowRight size={17} />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Enterprises;
