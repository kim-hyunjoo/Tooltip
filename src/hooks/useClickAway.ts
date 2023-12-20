import { useCallback, useEffect, useState, useRef, RefObject } from "react";

const useHover = (): [RefObject<HTMLButtonElement>, boolean] => {
  //hover중일 때는 true, 아닐 때는 false
  const [state, setState] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);

  const handleMouseClick = useCallback(() => setState(true), []);
  const handleMouseClickAway = useCallback(() => setState(false), []);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    element.addEventListener("mouseup", handleMouseClick);
    element.addEventListener("mousedown", handleMouseClickAway);

    return () => {
      element.removeEventListener("mouseup", handleMouseClick);
      element.removeEventListener("mousedown", handleMouseClickAway);
    };
  }, [ref, handleMouseClick, handleMouseClickAway]);

  return [ref, state];
};

export default useHover;
