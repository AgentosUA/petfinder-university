import { useEffect, useState } from 'react';

/**
 * Use media points
 */
const useMediaPoints = (exact: boolean = false) => {
  const isSSR = typeof window === "undefined";
  const [windowSize, setWindowSize] = useState({
    width: isSSR ? 767 : window.innerWidth,
    height: isSSR ? 800 : window.innerHeight,
  });

  function changeWindowSize() {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }

  useEffect(() => {
    window.addEventListener("resize", changeWindowSize);

    return () => {
      window.removeEventListener("resize", changeWindowSize);
    };
  }, []);

  let tablet = windowSize.width >= 767;
  let desktop = windowSize.width >= 1244;

  if (exact) {
    tablet = tablet && !desktop;
  }

  return {
    tablet,
    desktop,
    mobile: !tablet && !desktop
  };
};

export { useMediaPoints };
