import { cn } from "@/lib/utils";
import Container from "./Container";








const PageSection = ({ children, className, variant = "default", id }) => {
  const bgClass = {
    default: "bg-background",
    alt: "bg-section-alt",
    primary: "bg-primary text-primary-foreground"
  }[variant];

  return (
    <section id={id} className={cn("py-16 md:py-24", bgClass, className)}>
      <Container>{children}</Container>
    </section>);

};

export default PageSection;