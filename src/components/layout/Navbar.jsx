import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "./Container";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "News", to: "/blog" },
  { 
    label: "About Us", 
    to: "/about",
    children: [
      { label: "About us", to: "/about" },
      { label: "Our Mission", to: "/mission" },
      { label: "Our Vision", to: "/vision" },
      { label: "Our Model", to: "/model" }
    ]
  },
  { label: "Programs", to: "/projects" },
  { label: "Impact", to: "/impact" },
  { label: "Contact", to: "/contact" }
];


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
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
      "sticky top-0 w-full z-50 transition-all duration-300 border-b",
      isScrolled 
        ? "bg-white/80 backdrop-blur-md shadow-md border-border/80" 
        : "bg-white shadow-sm border-border/50"
    )}>
      <Container className={cn(
        "flex items-center justify-between transition-all duration-300",
        isScrolled ? "h-16 md:h-20" : "h-20 md:h-24"
      )}>
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img 
            src="/logo.png" 
            alt="Ubunifu Foundation" 
            className={cn(
              "w-auto transition-all duration-300",
              isScrolled ? "h-10 md:h-12" : "h-12 md:h-16"
            )} 
          />
          <div 
            className={cn(
              "flex flex-col justify-between leading-none font-sans transition-all duration-300",
              isScrolled ? "h-10 md:h-12" : "h-12 md:h-16"
            )}
          >
            <span className={cn(
              "font-bold text-[hsl(var(--logo-red))] transition-all duration-300",
              isScrolled ? "text-[18px] xs:text-[20px] md:text-[28px]" : "text-[22px] xs:text-[25px] md:text-[34px]"
            )}>
              Ubunifu
            </span>
            <span className={cn(
              "font-bold text-[hsl(var(--logo-blue))] transition-all duration-300",
              isScrolled ? "text-[12px] xs:text-[14px] md:text-[18px]" : "text-[15px] xs:text-[17px] md:text-[23px]"
            )}>
              Foundation
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6 lg:gap-8 h-full">
          {navLinks.map((link) => (
            <div 
              key={link.label} 
              className="relative h-full flex items-center group"
              onMouseEnter={() => link.children && setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {link.children ? (
                <div className="flex items-center gap-1 cursor-pointer py-4">
                  <Link
                    to={link.to}
                    className={cn(
                      "text-base font-normal tracking-[0.75px] transition-colors",
                      pathname.startsWith(link.to) ? "text-primary" : "text-foreground hover:text-primary"
                    )}
                  >
                    {link.label}
                  </Link>
                  <ChevronDown size={14} className={cn("transition-transform duration-200", activeDropdown === link.label && "rotate-180")} />
                  
                  {/* Dropdown Menu */}
                  <div className={cn(
                    "absolute top-[calc(100%-1px)] left-0 min-w-[200px] bg-white border border-border shadow-xl rounded-b-xl py-2 transition-all duration-200 transform origin-top z-50",
                    activeDropdown === link.label ? "opacity-100 scale-y-100 pointer-events-auto" : "opacity-0 scale-y-95 pointer-events-none"
                  )}>
                    {link.children.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        className={cn(
                          "block px-6 py-3 text-base tracking-[0.75px] transition-colors hover:bg-slate-50",
                          pathname === child.to ? "text-primary font-medium" : "text-foreground"
                        )}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  to={link.to}
                  className={cn(
                    "text-base font-normal tracking-[0.75px] transition-colors py-4",
                    pathname === link.to ? "text-primary" : "text-foreground hover:text-primary"
                  )}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
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
      {open && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-in max-h-[calc(100vh-80px)] overflow-y-auto">
          <Container className="py-6 flex flex-col gap-2">
            {navLinks.map((link) => (
              <div key={link.label} className="flex flex-col">
                {link.children ? (
                  <>
                    <button 
                      onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                      className="flex items-center justify-between px-4 py-3 rounded-md text-sm font-medium text-foreground hover:bg-muted transition-colors"
                    >
                      {link.label}
                      <ChevronDown size={16} className={cn("transition-transform", activeDropdown === link.label && "rotate-180")} />
                    </button>
                    {activeDropdown === link.label && (
                      <div className="flex flex-col ml-4 mt-1 border-l-2 border-primary/20 pl-4 animate-in slide-in-from-top-2 duration-200">
                        {link.children.map((child) => (
                          <Link
                            key={child.to}
                            to={child.to}
                            onClick={() => setOpen(false)}
                            className={cn(
                              "py-3 text-base tracking-[0.75px] transition-colors",
                              pathname === child.to ? "text-primary font-bold" : "text-muted-foreground hover:text-foreground"
                            )}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "px-4 py-3 rounded-md text-base font-normal tracking-[0.75px] transition-colors",
                      pathname === link.to ? "text-primary bg-accent" : "text-foreground hover:bg-muted"
                    )}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <Link to="/donate" onClick={() => setOpen(false)} className="mt-4">
              <Button className="w-full rounded-full py-6 font-bold uppercase tracking-tight">Donate</Button>
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
};

export default Navbar;