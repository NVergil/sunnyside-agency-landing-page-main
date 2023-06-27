import { useState, useEffect } from "react";

export const useReziseEvent = () => {
  const [menu, setMenu] = useState(false);

  const handleRezise = () => {
    if (window.innerWidth <= 678) {
      setMenu(true);
    } else {
      setMenu(false);
    }
  };
  window.addEventListener("resize", handleRezise);
  useEffect(() => {
    const mql = window.matchMedia("(max-width: 678px)");

    if (mql.matches) {
      setMenu(true);
    } else {
      setMenu(false);
    }
  }, []);

  return { menu };
};
