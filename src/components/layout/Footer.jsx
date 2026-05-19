import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from "lucide-react";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#06402B] to-[#0a5d3d] text-white pt-16 pb-8 overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/15 -skew-x-12 translate-x-1/2 pointer-events-none" />

      <Container>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Column */}
            <div className="space-y-6">
              <div>
                <Link to="/" className="flex items-center gap-3 mb-6">
                  <img src="/logo.png" alt="Ubunifu Foundation" className="h-12 w-auto" />
                <div 
                  className="flex flex-col justify-between h-12 leading-none font-sans" 
                >
                  <span className="text-[25px] font-bold text-[hsl(var(--logo-red))]">
                    Ubunifu
                  </span>
                  <span className="text-[17px] font-bold text-[hsl(var(--logo-blue))]">
                    Foundation
                  </span>
                </div>
                </Link>
                <p className="text-base leading-[22px] text-white font-sans">
                  Empowering youth and women in Zanzibar through sustainable development, education, and social entrepreneurship since 2023.
                </p>
              </div>
              
              <div className="flex gap-4">
                {[
                  { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=100090323392111", label: "Facebook" },
                  { Icon: Instagram, href: "https://www.instagram.com/ubunifufoundation?igsh=MTVoNGZubm00eTh2cA==", label: "Instagram" },
                  { Icon: Linkedin, href: "https://www.linkedin.com/in/ubunifu-foundation-future-shaper-zanzibar-676638302", label: "LinkedIn" }
                ].map((social, i) => (
                  <a 
                    key={i} 
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-2xl bg-[#4ECDC4] flex items-center justify-center hover:bg-white text-white hover:text-[#06402B] transition-all transform hover:-translate-y-1 border-2 border-[#4ECDC4] font-bold" 
                    aria-label={social.label}
                  >
                    <social.Icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-[18px] font-bold text-[#4ECDC4] font-serif mb-6 pb-2 border-b-2 border-[#4ECDC4] w-fit">Company</h4>
              <ul className="space-y-4">
                {[
                  { label: "About", to: "/about" },
                  { label: "Programs", to: "/projects" },
                  { label: "Latest News", to: "/blog" },
                  { label: "Contact Us", to: "/contact" }
                ].map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="group flex items-center text-base font-sans font-normal tracking-[0.75px] text-white/90 hover:text-[#4ECDC4] transition-all">
                      <ArrowRight size={14} className="mr-2 text-[#4ECDC4] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-[18px] font-bold text-[#4ECDC4] font-serif mb-6 pb-2 border-b-2 border-[#4ECDC4] w-fit">Support</h4>
              <ul className="space-y-4">
                {[
                  { label: "Donate Now", to: "/donate" },
                  { label: "Volunteer", to: "/get-involved" },
                  { label: "Partner Programs", to: "/contact" },
                  { label: "Get Involved", to: "/get-involved" }
                ].map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="group flex items-center text-base font-sans font-normal tracking-[0.75px] text-white/90 hover:text-[#4ECDC4] transition-all">
                      <ArrowRight size={14} className="mr-2 text-[#4ECDC4] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-[18px] font-bold text-[#4ECDC4] font-serif mb-6 pb-2 border-b-2 border-[#4ECDC4] w-fit">HQ Office</h4>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 border-2 border-[#4ECDC4]">
                    <MapPin size={18} className="text-[#4ECDC4]" />
                  </div>
                  <div>
                    <span className="block text-[#4ECDC4] text-base font-bold mb-1 font-sans">Visit Us</span>
                    <span className="text-base text-white/90 leading-[22px] font-sans">
                      Kwerekwe, Zanzibar,<br/>Tanzania
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 border-2 border-[#4ECDC4]">
                    <Phone size={18} className="text-[#4ECDC4]" />
                  </div>
                  <div>
                    <span className="block text-[#4ECDC4] text-base font-bold mb-1 font-sans">Call Us</span>
                    <span className="text-base text-white/90 leading-[22px] font-sans block">+255 623 067 338</span>
                    <span className="text-base text-white/90 leading-[22px] font-sans block">+255 629 766 203</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 border-2 border-[#4ECDC4]">
                    <Mail size={18} className="text-[#4ECDC4]" />
                  </div>
                  <div>
                    <span className="block text-[#4ECDC4] text-base font-bold mb-1 font-sans">Email Us</span>
                    <span className="text-base text-white/90 leading-[22px] font-sans">info@ubunifufoundation.org</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[14px] font-normal tracking-[0.75px] font-sans text-white/80">
            <p className="text-white">© 2026 Ubunifu Foundation. Empowering Sustainable Futures.</p>
            <div className="flex gap-8">
              <Link to="/" className="hover:text-[#4ECDC4] transition-colors">Privacy Policy</Link>
              <Link to="/" className="hover:text-[#4ECDC4] transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;