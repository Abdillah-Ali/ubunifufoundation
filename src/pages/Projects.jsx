import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import usePageTitle from "@/hooks/usePageTitle";
import { projects } from "@/data/projects";
import Container from "@/components/layout/Container";
import { cn } from "@/lib/utils";

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
    <div className="min-h-screen bg-background pb-24">
      <PageHero title="Programs" subtitle="Explore our long-term programs and specific project activities driving sustainable change across Tanzania." />

      <section className="py-20 reveal">
        <Container>
          <div className="max-w-3xl mb-16">
            <h2 className="text-[34px] md:text-[42px] font-medium mb-6 tracking-tight font-serif">What We Do</h2>
            <p className="text-base text-foreground font-normal font-sans leading-[22px] max-w-2xl">Programs are our long-term areas of work. Projects are specific activities under those programs.</p>
          </div>

          {/* Filters - Schwab style */}
          <div className="flex flex-wrap gap-4 mb-20 reveal" style={{ transitionDelay: '200ms' }}>
            <div className="flex bg-secondary p-1.5 rounded-full border border-border">
              {["all", "program", "project"].map((t) =>
                <button
                  key={t}
                  className={cn(
                    "px-6 py-2.5 rounded-full text-[13px] font-medium transition-all",
                    tab === t ? "bg-primary text-white shadow-lg" : "text-foreground hover:text-foreground"
                  )}
                  onClick={() => setTab(t)}>
                  {t === "all" ? "All" : t + "s"}
                </button>
              )}
            </div>
            
            <div className="flex bg-secondary p-1.5 rounded-full border border-border">
              {["all", "ongoing", "completed"].map((s) =>
                <button
                  key={s}
                  className={cn(
                    "px-6 py-2.5 rounded-full text-[13px] font-medium transition-all",
                    statusFilter === s ? "bg-foreground text-white shadow-lg" : "text-foreground hover:text-foreground"
                  )}
                  onClick={() => setStatusFilter(s)}>
                  {s === "all" ? "All Status" : s}
                </button>
              )}
            </div>
          </div>

          {/* Grid - Clean Schwab style */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-12">
            {filtered.map((project) =>
              <div key={project.id} className="group cursor-pointer reveal">
                <div className="aspect-[16/10] overflow-hidden rounded-2xl mb-6 shadow-md border border-border relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="text-[13px] font-medium px-4 py-1.5 rounded-full bg-primary text-white tracking-tight">{project.type}</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-[20px] md:text-[24px] font-medium leading-tight tracking-tight group-hover:text-primary transition-colors font-serif">
                    {project.title}
                  </h3>
                  <p className="text-base text-foreground font-normal leading-[22px] font-sans line-clamp-3">
                    {project.description}
                  </p>
                  <div className="pt-2">
                    <Link to="/projects" className="text-sm font-bold text-primary transition-all flex items-center gap-2 group">
                      Explore Details <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {filtered.length === 0 &&
            <p className="text-center text-foreground py-32 font-medium">No items match your filters.</p>
          }
        </Container>
      </section>
    </div>
  );
};

export default Projects;