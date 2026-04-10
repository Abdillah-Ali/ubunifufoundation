import { useEffect } from "react";

const usePageTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | Ubunifu Foundation`;
  }, [title]);
};

export default usePageTitle;