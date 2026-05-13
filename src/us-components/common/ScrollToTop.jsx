import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const target = document.getElementById(id);

      if (target) {
        // allow existing route render to finish before scrolling
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 50);
        return;
      }
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
