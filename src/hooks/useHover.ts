import { useCallback, useEffect, useState, useRef, RefObject } from "react";

const useHover = (): [RefObject<HTMLButtonElement>, boolean] => {
  //hover중일 때는 true, 아닐 때는 false
  const [state, setState] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);

  const handleMouseOver = useCallback(() => setState(true), []);
  const handleMouseOut = useCallback(() => setState(false), []);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    element.addEventListener("mouseover", handleMouseOver);
    element.addEventListener("mouseout", handleMouseOut);

    return () => {
      element.removeEventListener("mouseover", handleMouseOver);
      element.removeEventListener("mouseout", handleMouseOut);
    };
  }, [ref, handleMouseOver, handleMouseOut]);

  return [ref, state];
};

export default useHover;