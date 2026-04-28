import Container from "@/components/layout/Container";
import PageHero from "@/components/layout/PageHero";
import usePageTitle from "@/hooks/usePageTitle";
import useScrollReveal from "@/hooks/useScrollReveal";

const Vision = () => {
  usePageTitle("Our Vision");
  useScrollReveal();

  return (
    <div className="min-h-screen bg-background pb-24">
      <PageHero 
        title="Our Vision" 
        subtitle="Catalyzing positive transformation in Zanzibar through high-quality education and youth empowerment." 
      />
      <Container className="py-24">
        <div className="max-w-3xl mx-auto text-center space-y-8 reveal">
          <h2 className="text-[34px] md:text-[42px] font-medium tracking-tight text-foreground font-serif">Coming Soon</h2>
          <p className="text-base text-muted-foreground font-normal italic font-sans leading-[22px]">
            This page is currently under construction. Please check back later for detailed information about our vision for Zanzibar.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Vision;
