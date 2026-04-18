import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "./Container";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Programs", to: "/projects" },
  { label: "Impact", to: "/impact" },
  { label: "News", to: "/blog" },
  { label: "Contact", to: "/contact" }
];


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 w-full z-50 transition-colors duration-300",
      (pathname === "/" && !isScrolled) ? "bg-[#003d52]" : "bg-white shadow-sm border-b border-border/50"
    )}>
      <Container className="flex items-center justify-between h-20 md:h-24">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo} alt="Ubunifu Foundation" className="h-12 md:h-16 w-auto" />
          <div 
            className="flex flex-col justify-between h-12 md:h-16 leading-none font-sans" 
          >
            <span className="text-[25px] md:text-[34px] font-bold text-[hsl(var(--logo-red))]">
              Ubunifu
            </span>
            <span className="text-[17px] md:text-[23px] font-bold text-[hsl(var(--logo-blue))]">
              Foundation
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-10">
          {navLinks.map((link) =>
          <Link
            key={link.to}
            to={link.to}
            className={cn(
              "text-[15px] font-normal tracking-tight transition-colors",
              pathname === link.to ?
              "text-primary" :
              "text-foreground hover:text-primary"
            )}>
              {link.label}
            </Link>
          )}
          <Link to="/donate" className="ml-4">
            <Button className="rounded-full px-8 py-6 text-sm font-bold tracking-tight bg-primary hover:bg-primary/90 shadow-lg hover:scale-105 transition-all uppercase">
              Donate
            </Button>
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu">
          
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {/* Mobile nav */}
      {open &&
      <div className="lg:hidden border-t border-border bg-background animate-fade-in">
          <Container className="py-4 flex flex-col gap-1">
            {navLinks.map((link) =>
          <Link
            key={link.to}
            to={link.to}
            onClick={() => setOpen(false)}
            className={cn(
              "px-4 py-3 rounded-md text-sm font-medium transition-colors",
              pathname === link.to ?
              "text-primary bg-accent" :
              "text-foreground hover:text-foreground hover:bg-muted"
            )}>
            
                {link.label}
              </Link>
          )}
            <Link to="/donate" onClick={() => setOpen(false)} className="mt-2">
              <Button className="w-full rounded-full">Donate</Button>
            </Link>
          </Container>
        </div>
      }
    </header>);

};

export default Navbar;