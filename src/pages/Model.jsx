import Container from "@/components/layout/Container";
import PageHero from "@/components/layout/PageHero";
import usePageTitle from "@/hooks/usePageTitle";
import useScrollReveal from "@/hooks/useScrollReveal";

const Model = () => {
  usePageTitle("Our Model");
  useScrollReveal();

  return (
    <div className="min-h-screen bg-background pb-24">
      <PageHero 
        title="Our Model" 
        subtitle="Understanding the self-driven learning space and community building blocks." 
      />
      <Container className="py-24">
        <div className="max-w-3xl mx-auto text-center space-y-8 reveal">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">Coming Soon</h2>
          <p className="text-lg text-muted-foreground font-medium italic">
            This page is currently under construction. Please check back later to see our empowerment model in action.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Model;
