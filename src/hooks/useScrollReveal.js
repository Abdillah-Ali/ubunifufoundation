import { useEffect } from "react";

const useScrollReveal = (deps = []) => {
  useEffect(() => {
    // Scroll reveal animations disabled - all content displays immediately
    // This hook is kept for backward compatibility but performs no operations
    return () => {};
  }, [...deps]);
};

export default useScrollReveal;
