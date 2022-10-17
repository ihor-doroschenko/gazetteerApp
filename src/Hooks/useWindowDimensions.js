import { useEffect, useState } from 'react';

// Hook to get initial window dimensions as well as window dimensions on window size change

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getDimensionsLocally());
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getDimensionsLocally());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

function getDimensionsLocally() {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
}
