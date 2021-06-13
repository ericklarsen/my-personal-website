import { useEffect, useRef, useState } from "react";

export const UseElementOnScreen = (options) => {
  const containerRef = useRef(null);
  const [checker, setChecker] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    setChecker(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);

    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, options]);

  useEffect(() => {
    if (checker && !isVisible) {
      setIsVisible(true);
    }
  }, [checker]);

  return [containerRef, isVisible];
};
