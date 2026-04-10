import { cn } from "@/lib/utils";









const SectionTitle = ({ title, subtitle, centered = true, className, light = false }) =>
<div className={cn("mb-12", centered && "text-center", className)}>
    <h2 className={cn(
    "text-2xl md:text-3xl font-bold mb-4",
    light ? "text-primary-foreground" : "text-foreground"
  )}>
      {title}
    </h2>
    {subtitle &&
  <p className={cn(
    "text-lg md:text-xl font-medium max-w-2xl",
    centered && "mx-auto",
    light ? "text-primary-foreground/80" : "text-muted-foreground"
  )}>
        {subtitle}
      </p>
  }
  </div>;


export default SectionTitle;