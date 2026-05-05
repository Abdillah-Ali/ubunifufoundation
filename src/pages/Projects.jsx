import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Filter, Layers, Zap } from "lucide-react";
import Container from "@/components/layout/Container";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";
import usePageTitle from "@/hooks/usePageTitle";
import useScrollReveal from "@/hooks/useScrollReveal";

const Projects = () => {
  usePageTitle("Programs");
  useScrollReveal();
  const [tab, setTab] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const filtered = projects.filter((p) => {
    if (tab !== "all" && p.type !== tab) return false;
    if (statusFilter !== "all" && p.status !== statusFilter) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 bg-[#001D3D] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=2000&auto=format&fit=crop" 
            alt="Programs Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001D3D] via-[#001D3D]/60 to-transparent" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-4xl space-y-6 reveal">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-[11px] font-bold tracking-[0.2em] uppercase border border-primary/20">
              Our Portfolios
            </span>
            <h1 className="text-[48px] md:text-[64px] lg:text-[72px] font-bold leading-[1.1] tracking-tight font-serif">
              Programs & <span className="text-primary italic">Initiatives.</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl font-light leading-relaxed font-sans">
              Explore our long-term frameworks and specific projects driving sustainable community transformation across Zanzibar.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. FILTERS & HEADER */}
      <section className="py-20">
        <Container>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20 reveal">
            <div className="max-w-2xl space-y-6">
              <h2 className="text-[32px] md:text-[40px] font-bold text-[#001D3D] font-serif leading-tight">
                Catalyzing Change.
              </h2>
              <p className="text-base text-slate-600 leading-relaxed font-sans">
                Our programs represent our core pillars of work, while projects are the specific, targeted activities that bring our mission to life on the ground.
              </p>
            </div>

            {/* Premium Filter UI */}
            <div className="flex flex-wrap gap-6">
              <div className="space-y-3">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-4">Type</p>
                <div className="flex bg-slate-50 p-1.5 rounded-full border border-slate-100">
                  {["all", "program", "project"].map((t) => (
                    <button
                      key={t}
                      onClick={() => setTab(t)}
                      className={cn(
                        "px-6 py-2 rounded-full text-xs font-bold transition-all uppercase tracking-wider",
                        tab === t ? "bg-white text-primary shadow-sm" : "text-slate-400 hover:text-slate-600"
                      )}
                    >
                      {t === "all" ? "All" : t + "s"}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-4">Status</p>
                <div className="flex bg-slate-50 p-1.5 rounded-full border border-slate-100">
                  {["all", "ongoing", "completed"].map((s) => (
                    <button
                      key={s}
                      onClick={() => setStatusFilter(s)}
                      className={cn(
                        "px-6 py-2 rounded-full text-xs font-bold transition-all uppercase tracking-wider",
                        statusFilter === s ? "bg-white text-[#001D3D] shadow-sm" : "text-slate-400 hover:text-slate-600"
                      )}
                    >
                      {s === "all" ? "All" : s}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 3. PROJECT GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filtered.map((project, i) => (
              <div key={project.id} className="group reveal flex flex-col h-full">
                {/* Image Card */}
                <div className="relative aspect-[16/11] rounded-[2rem] overflow-hidden shadow-sm border border-slate-100 mb-8">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  {/* Overlay Badge */}
                  <div className="absolute top-6 left-6">
                    <span className={cn(
                      "px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg",
                      project.type === "program" ? "bg-primary text-white" : "bg-white text-[#001D3D]"
                    )}>
                      {project.type}
                    </span>
                  </div>
                  {/* Subtle Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Content */}
                <div className="space-y-4 flex-1 flex flex-col">
                  <div className="flex items-center gap-3">
                    {project.type === "program" ? <Layers size={16} className="text-primary" /> : <Zap size={16} className="text-amber-500" />}
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{project.status}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#001D3D] font-serif tracking-tight leading-tight group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[15px] text-slate-500 leading-relaxed font-sans line-clamp-3">
                    {project.description}
                  </p>
                  <div className="pt-4 mt-auto">
                    <Link 
                      to="/contact" 
                      className="inline-flex items-center gap-3 text-sm font-bold text-[#001D3D] group/link"
                    >
                      <span className="border-b-2 border-transparent group-hover/link:border-primary transition-all">Support this Work</span>
                      <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover/link:bg-primary group-hover/link:text-white transition-all">
                        <ArrowRight size={14} />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-40 text-center space-y-4 reveal">
              <Filter size={48} className="mx-auto text-slate-200" />
              <p className="text-xl font-bold text-[#001D3D] font-serif">No programs match your selection.</p>
              <button 
                onClick={() => { setTab("all"); setStatusFilter("all"); }}
                className="text-primary font-bold border-b border-primary"
              >
                Clear all filters
              </button>
            </div>
          )}
        </Container>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="py-24">
        <Container>
          <div className="bg-[#001D3D] rounded-[3rem] p-12 md:p-20 text-center space-y-10 relative overflow-hidden reveal">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="max-w-3xl mx-auto space-y-6 relative z-10">
              <h2 className="text-[32px] md:text-[48px] font-bold text-white font-serif leading-tight">
                Have a project idea? <br /> <span className="text-primary italic">Let's collaborate.</span>
              </h2>
              <p className="text-lg text-white/70 font-sans leading-relaxed">
                We are always looking for partners and innovators who share our vision for a self-sufficient Zanzibar. Reach out to discuss how we can work together.
              </p>
              <div className="pt-6">
                <Link to="/contact">
                  <button className="px-12 py-4 bg-primary text-white rounded-full font-bold uppercase tracking-wider text-sm shadow-xl shadow-blue-900/20 hover:scale-105 transition-all">
                    Contact Our Team
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Projects;