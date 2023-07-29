import { useEffect, useState } from "react"

export const useWindowWidth = (debounceTime = 400) => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    let debounceTimeoutId;

    const handleResize = () => {
      clearTimeout(debounceTimeoutId);

      debounceTimeoutId = setTimeout(() => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }, 400);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(debounceTimeoutId);
    };
  }, [debounceTime]);

  if (windowSize.width >= 1440) return "xl";
  else if (windowSize.width >= 1024) return "l";
  else if (windowSize.width >= 768) return "m";
  else return "s";
};



