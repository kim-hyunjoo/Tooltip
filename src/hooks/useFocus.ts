import { useCallback, useEffect, useState, useRef, RefObject } from "react";

const useHover = (): [RefObject<HTMLInputElement>, boolean] => {
  //hover중일 때는 true, 아닐 때는 false
  const [state, setState] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  const handleFocusIn = useCallback(() => setState(true), []);
  const handleFocusOut = useCallback(() => setState(false), []);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    element.addEventListener("focusin", handleFocusIn);
    element.addEventListener("focusout", handleFocusOut);

    return () => {
      element.removeEventListener("focusin", handleFocusIn);
      element.removeEventListener("focusout", handleFocusOut);
    };
  }, [ref, handleFocusIn, handleFocusOut]);

  return [ref, state];
};

export default useHover;
