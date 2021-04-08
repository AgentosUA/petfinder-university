import { useEffect, useState } from 'react';

/**
 * Use media points
 */
const useMediaPoints = (exact: boolean = false) => {
  const [width, setWidth] = useState(1200)

  const listener = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', listener);
    const interval = setInterval(listener, 300);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', listener);
    };
  }, []);

  let tablet = width >= 800;
  let desktop = width >= 1244;

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