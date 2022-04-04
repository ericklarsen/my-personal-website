import * as React from "react";

export const UseElementOnScreen = (options: IntersectionObserverInit) => {
  const containerRef = React.useRef() as React.MutableRefObject<HTMLDivElement>;
  const [checker, setChecker] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    setChecker(entry.isIntersecting);
  };

  React.useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    let observerRefValue = null;

    if (containerRef.current) {
      observer.observe(containerRef.current);
      observerRefValue = containerRef.current;
    }
    return () => {
      if (observerRefValue) observer.unobserve(observerRefValue);
    };
  }, [containerRef, options]);

  React.useEffect(() => {
    if (checker && !isVisible) {
      setIsVisible(true);
    }
  }, [checker, isVisible]);

  return [containerRef, isVisible];
};
