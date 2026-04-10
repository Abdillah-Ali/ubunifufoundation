import { cn } from "@/lib/utils";






const Container = ({ children, className }) =>
<div className={cn("w-full px-6 lg:px-12 xl:px-20", className)}>
    {children}
  </div>;


export default Container;