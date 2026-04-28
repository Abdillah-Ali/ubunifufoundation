import { cn } from "@/lib/utils";

const SectionTitle = ({ title, subtitle, centered = true, className, light = false }) =>
<div className={cn("mb-12", centered && "text-center", className)}>
    <h2 className={cn(
    "text-[34px] md:text-[42px] font-medium mb-4 font-serif",
    light ? "text-primary-foreground" : "text-foreground"
  )}>
      {title}
    </h2>
    {subtitle &&
  <p className={cn(
    "text-base font-normal max-w-2xl font-sans leading-[22px]",
    centered && "mx-auto",
    light ? "text-primary-foreground/80" : "text-muted-foreground"
  )}>
        {subtitle}
      </p>
  }
  </div>;


export default SectionTitle;