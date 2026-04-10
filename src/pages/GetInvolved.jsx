import { useState } from "react";
import { Link } from "react-router-dom";
import { Users, Handshake, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import Container from "@/components/layout/Container";
import PageHero from "@/components/layout/PageHero";
import usePageTitle from "@/hooks/usePageTitle";

const volunteerRoles = [
  { title: "Digital Literacy Tutor", location: "Kwerekwe, Zanzibar", commitment: "3–6 months", description: "Support our digital literacy program by assisting students in learning computer basics and online tools." },
  { title: "Entrepreneurship Mentor", location: "Kwerekwe, Zanzibar", commitment: "6+ months", description: "Lend your expertise to help young entrepreneurs develop their social enterprises and business models." },
  { title: "Impact Tracking Assistant", location: "Remote / Zanzibar", commitment: "3 months", description: "Help us formalize our impact tracking and data collection for our various youth initiatives." },
  { title: "Community Outreach", location: "Kwerekwe, Zanzibar", commitment: "Flexible", description: "Help us engage with the local community to identify new opportunities for youth and women empowerment." },
];

const GetInvolved = () => {
  usePageTitle("Get Involved");
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (!email) return;
    toast({ title: "Subscribed!", description: "You'll receive our updates in your inbox." });
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      <PageHero
        title="Get Involved"
        subtitle="There are many ways to contribute to our mission — beyond financial donations."
      />

      {/* Volunteer Roles */}
      <section className="py-24 bg-background">
        <Container>
          <div className="max-w-3xl mb-20">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[13px] font-bold tracking-tight mb-6">
              Volunteer
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-6">Volunteer With Us</h2>
            <p className="text-base md:text-lg text-foreground/70 font-medium leading-relaxed max-w-2xl">
              Lend your time and skills to make a real, lasting difference in people's lives.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 mb-16">
            {volunteerRoles.map((role) => (
              <div key={role.title} className="group p-10 rounded-[2rem] border-2 border-border hover:border-primary transition-all duration-300 bg-white space-y-4">
                <div className="p-4 rounded-2xl bg-secondary text-primary w-fit group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Users size={22} />
                </div>
                <h3 className="text-lg md:text-xl font-bold tracking-tight">{role.title}</h3>
                <p className="text-[13px] font-bold tracking-tight text-foreground/50 uppercase">
                  {role.location} · {role.commitment}
                </p>
                <p className="text-base text-foreground/70 font-medium leading-relaxed">{role.description}</p>
              </div>
            ))}
          </div>

          <div>
            <Link to="/contact">
              <Button className="rounded-full px-8 py-5 text-sm md:text-base font-medium tracking-wide bg-primary hover:bg-primary/90 shadow-xl">
                Apply to Volunteer <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Partnership Section - Zigzag layout */}
      <section className="py-24 bg-secondary border-t border-border">
        <Container>
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <div className="space-y-8">
              <div className="p-5 rounded-2xl bg-white text-primary w-fit shadow-sm">
                <Handshake size={32} />
              </div>
              <div className="space-y-4">
                <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[13px] font-bold tracking-tight">
                  Collaborate
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Partner With Us</h2>
                <p className="text-base md:text-lg text-foreground/70 font-medium leading-relaxed max-w-xl">
                  We collaborate with governments, international organizations, corporations, and community groups. Whether you offer expertise, funding, or in-kind support — there's a place for you.
                </p>
              </div>
              <Link to="/contact">
                <Button variant="outline" className="rounded-full px-8 py-5 text-sm font-medium tracking-wide border-2 hover:border-primary hover:text-primary transition-all">
                  Explore Partnership →
                </Button>
              </Link>
            </div>

            <div className="p-10 rounded-[2rem] bg-white border-2 border-border space-y-6">
              <h3 className="text-xl font-bold tracking-tight">Current Partners</h3>
              <ul className="space-y-4">
                {[
                  "Tui Care Foundation",
                  "SINA (Social Innovation Academy)",
                  "Local Community Leaders",
                  "Zanzibar Youth Councils"
                ].map((partner) => (
                  <li key={partner} className="flex items-center gap-4 text-foreground/70 font-medium">
                    <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    {partner}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-foreground text-background">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-10">
            <div className="space-y-4">
              <div className="mx-auto p-5 rounded-2xl bg-primary text-white w-fit">
                <Mail size={32} />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Stay Updated</h2>
              <p className="text-base md:text-lg text-background/60 font-medium">
                Subscribe to our newsletter for stories, updates, and ways to get involved.
              </p>
            </div>
            <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-16 rounded-full px-8 border-2 border-background/20 bg-background/10 text-background placeholder:text-background/40 flex-1 text-lg font-medium focus:border-primary"
                required
              />
              <Button type="submit" className="rounded-full h-16 px-8 font-bold tracking-tight bg-primary hover:bg-primary/90 text-white shrink-0">
                Subscribe
              </Button>
            </form>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default GetInvolved;