import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import Container from "@/components/layout/Container";
import PageHero from "@/components/layout/PageHero";
import usePageTitle from "@/hooks/usePageTitle";
import useScrollReveal from "@/hooks/useScrollReveal";

const Contact = () => {
  usePageTitle("Contact Us");
  useScrollReveal();

  const contactInfo = [
    { icon: MapPin, title: "Visit Us", lines: ["Fuoni Afya, Zanzibar", "Tanzania"], href: "https://maps.app.goo.gl/uVmoM8aKghBUgpKb8", external: true },
    { icon: Phone, title: "Call Us", lines: ["+255 623 067 338", "+255 629 766 203"], href: "tel:+255623067338" },
    { icon: Mail, title: "Email Us", lines: ["foundationubunifu@gmail.com"], href: "mailto:foundationubunifu@gmail.com" },
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      <PageHero
        title="Contact Us"
        subtitle="We're here to collaborate. Reach out for partnerships, inquiries, or to learn more about our impact."
      />

      {/* Contact Cards */}
      <section className="py-24 bg-secondary border-b border-border">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {contactInfo.map((item) => (
              <div key={item.title} className="space-y-6 group reveal">
                <a
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  aria-label={item.title === "Visit Us" ? "Open Fuoni Afya in Google Maps" : item.title}
                  className="block p-6 rounded-2xl bg-white text-primary w-fit shadow-md group-hover:bg-primary group-hover:text-white transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                >
                  <item.icon size={32} strokeWidth={2.5} />
                </a>
                <div className="space-y-2">
                  <h3 className="text-[20px] md:text-[24px] font-medium tracking-tight font-serif">
                    {item.title}
                  </h3>
                  {item.lines.map((line) => (
                    item.title === "Visit Us" ? (
                      <a key={line} href={item.href} target="_blank" rel="noopener noreferrer" className="block text-base text-foreground font-normal font-sans leading-[22px] hover:text-primary">
                        {line}
                      </a>
                    ) : item.title === "Call Us" ? (
                      <a key={line} href={`tel:${line.replace(/\s/g, "")}`} className="block text-base text-foreground font-normal font-sans leading-[22px] hover:text-primary">{line}</a>
                    ) : (
                      <a key={line} href={item.href} className="block text-base text-foreground font-normal font-sans leading-[22px] hover:text-primary">{line}</a>
                    )
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Digital Presence */}
      <section className="py-32 bg-background overflow-hidden">
        <Container>
          <div className="grid gap-12 pt-8 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-8">
            <h4 className="text-[14px] font-normal tracking-[0.75px] text-foreground border-b border-border pb-4 w-fit uppercase font-sans">
              Digital Presence
            </h4>
            <div className="flex gap-6">
              {[
                { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=100090323392111", label: "Facebook" },
                { Icon: Instagram, href: "https://www.instagram.com/ubunifufoundation?igsh=MTVoNGZubm00eTh2cA==", label: "Instagram" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/ubunifu-foundation-future-shaper-zanzibar-676638302", label: "LinkedIn" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 rounded-2xl bg-secondary text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all transform hover:-translate-y-2 shadow-sm border border-border"
                  aria-label={social.label}
                >
                  <social.Icon size={24} />
                </a>
              ))}
            </div>
            </div>
            <div className="space-y-8">
              <h4 className="text-[14px] font-normal tracking-[0.75px] text-foreground border-b border-border pb-4 w-fit uppercase font-sans">Find Us</h4>
              <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
                <iframe
                  title="Map showing Ubunifu Foundation in Fuoni Afya, Zanzibar"
                  src="https://maps.google.com/maps?q=Fuoni%20Afya%2C%20Zanzibar%2C%20Tanzania&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="h-72 w-full md:h-80"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <a href="https://maps.app.goo.gl/uVmoM8aKghBUgpKb8" target="_blank" rel="noopener noreferrer" className="inline-block text-sm font-medium text-primary underline underline-offset-4 hover:text-primary/80">Open in Google Maps</a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Contact;
