import { useState } from "react";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Container from "@/components/layout/Container";
import PageHero from "@/components/layout/PageHero";
import usePageTitle from "@/hooks/usePageTitle";
import useScrollReveal from "@/hooks/useScrollReveal";

const Contact = () => {
  usePageTitle("Contact Us");
  useScrollReveal();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }
    setLoading(true);
    // Simulated submission — replace with EmailJS later
    await new Promise((r) => setTimeout(r, 1000));
    toast({ title: "Message Sent!", description: "Thank you for reaching out. We'll get back to you soon." });
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    setLoading(false);
  };

  const contactInfo = [
  { icon: MapPin, title: "Visit Us", lines: ["Kwerekwe, Zanzibar", "Tanzania"] },
  { icon: Phone, title: "Call Us", lines: ["+255 788 008 750"] },
  { icon: Mail, title: "Email Us", lines: ["info@ubunifufoundation.org"] }];


  return (
    <div className="min-h-screen bg-background pb-24">
      <PageHero 
        title="Contact Us" 
        subtitle="We're here to collaborate. Reach out for partnerships, inquiries, or to learn more about our impact." 
      />

      {/* Contact Cards - Schwab Style */}
      <section className="py-24 bg-secondary border-b border-border">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {contactInfo.map((item) => (
              <div key={item.title} className="space-y-6 group reveal">
                <div className="p-6 rounded-2xl bg-white text-primary w-fit shadow-md group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <item.icon size={32} strokeWidth={2.5} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight">{item.title}</h3>
                  {item.lines.map((line) => (
                    <p key={line} className="text-base md:text-lg text-foreground font-medium">{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Form & Map Section */}
      <section className="py-32 bg-background overflow-hidden">
        <Container>
          <div className="grid lg:grid-cols-2 gap-24 xl:gap-32">
            {/* Form */}
            <div className="space-y-12 reveal max-w-xl w-full mx-auto lg:mx-0">
              <div className="space-y-4">
                <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[13px] font-bold tracking-tight">
                  Get in Touch
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Send a Message</h2>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[13px] font-bold tracking-tight text-foreground ml-6 uppercase">Full Name</label>
                    <Input name="name" placeholder="John Doe" className="h-16 rounded-full px-8 border-2 focus:border-primary transition-all text-lg font-medium" value={form.name} onChange={handleChange} required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[13px] font-bold tracking-tight text-foreground ml-6 uppercase">Email Address</label>
                    <Input name="email" type="email" placeholder="john@example.com" className="h-16 rounded-full px-8 border-2 focus:border-primary transition-all text-lg font-medium" value={form.email} onChange={handleChange} required />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[13px] font-bold tracking-tight text-foreground ml-6 uppercase">Phone Number</label>
                    <Input name="phone" placeholder="+255..." className="h-16 rounded-full px-8 border-2 focus:border-primary transition-all text-lg font-medium" value={form.phone} onChange={handleChange} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[13px] font-bold tracking-tight text-foreground ml-6 uppercase">Subject</label>
                    <Input name="subject" placeholder="Partnership Inquiry" className="h-16 rounded-full px-8 border-2 focus:border-primary transition-all text-lg font-medium" value={form.subject} onChange={handleChange} />
                  </div>
                </div>
                <div className="space-y-2">
                    <label className="text-[13px] font-bold tracking-tight text-foreground ml-6 uppercase">Message</label>
                  <Textarea name="message" placeholder="How can we help you?" rows={6} className="rounded-[2rem] px-8 py-6 border-2 focus:border-primary transition-all text-lg font-medium" value={form.message} onChange={handleChange} required />
                </div>
                
                <Button type="submit" className="rounded-full px-10 py-5 text-sm md:text-base font-medium tracking-wide bg-primary hover:bg-primary/90 shadow-xl transition-all" disabled={loading}>
                  {loading ? "Sending..." : "Submit Message"}
                </Button>
              </form>
            </div>

            {/* Map & Social */}
            <div className="space-y-12 reveal">
              <div className="space-y-4">
                <div className="inline-block px-5 py-2 rounded-full bg-foreground/5 text-foreground text-[13px] font-bold tracking-tight border border-border/5">
                  Location
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Our <span className="text-primary">Space.</span></h2>
              </div>
              
              <div className="rounded-[4rem] bg-secondary aspect-square lg:aspect-[4/3] flex items-center justify-center border border-border shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/dark-v11/static/39.2742, -6.1627,13,0/800x600?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTAwM2YycXBndWR6MjFvNjMifQ.mQ_S-7p6wPZz_F8Z6Wz_A')] bg-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="relative z-10 p-10 text-white space-y-4 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(0,150,199,0.5)] animate-bounce">
                    <MapPin size={32} />
                  </div>
                  <div>
                    <p className="text-xl font-bold tracking-tight">Main Headquarters</p>
                    <p className="text-sm font-medium text-white">Zanzibar, Tanzania</p>
                  </div>
                </div>
              </div>

              <div className="space-y-8 pt-8">
                <h4 className="text-[13px] font-bold tracking-tight text-foreground border-b border-border pb-4 w-fit uppercase">Digital Presence</h4>
                <div className="flex gap-6">
                  {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                    <a key={i} href="#" className="w-16 h-16 rounded-2xl bg-secondary text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all transform hover:-translate-y-2 shadow-sm border border-border" aria-label="Social link">
                      <Icon size={24} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>);

};

export default Contact;