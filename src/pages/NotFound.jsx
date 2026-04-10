import { Link } from "react-router-dom";
import { ArrowLeft, Home, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "@/components/layout/Container";
import usePageTitle from "@/hooks/usePageTitle";

const NotFound = () => {
  usePageTitle("404 - Page Not Found");

  return (
    <div className="relative min-h-screen flex items-center justify-center text-white overflow-hidden bg-black">
      {/* Background with cinematic overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2000&auto=format&fit=crop" 
          alt="404 Background" 
          className="w-full h-full object-cover opacity-50 scale-105 animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />
      </div>

      <Container className="relative z-10 text-center py-20">
        <div className="max-w-4xl mx-auto space-y-12 animate-fade-in-up">
          <div className="space-y-4">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-primary text-[13px] font-bold tracking-tight mb-4">
              Error Code: 404
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              Page Not <span className="text-primary">Found.</span>
            </h1>
          </div>

          <p className="text-xl md:text-3xl text-white/60 max-w-2xl mx-auto font-medium leading-relaxed">
            The story you're looking for belongs to another journey. Let's get you back on track.
          </p>

          <div className="flex flex-wrap justify-center gap-6 pt-8">
            <Link to="/">
              <Button className="rounded-full px-8 py-5 text-sm md:text-base font-medium tracking-wide bg-primary hover:bg-primary/90 shadow-xl transition-all">
                <Home className="mr-3" size={18} /> Back to Home
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="rounded-full px-8 py-5 text-sm md:text-base font-medium tracking-wide border-2 border-white/20 hover:bg-white hover:text-black transition-all backdrop-blur-sm">
                <MessageSquare className="mr-3" size={18} /> Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </Container>

      {/* Decorative element */}
      <div className="absolute bottom-10 left-10 text-[11px] font-bold tracking-tight text-white/30 vertical-text hidden md:block uppercase">
        Ubunifu Foundation — Building a Resilient Future
      </div>
    </div>
  );
};

export default NotFound;