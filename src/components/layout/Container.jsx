import { cn } from "@/lib/utils";






const Container = ({ children, className }) =>
<div className={cn("w-full section-padding", className)}>
    {children}
  </div>;


export default Container;