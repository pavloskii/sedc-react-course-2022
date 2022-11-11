import { useEffect, useRef } from "react";

export function useTimer() {
  const timerRef = useRef(0);

  useEffect(() => {
    setInterval(() => {
      timerRef.current++;
    }, 1000);
  }, []);

  return timerRef
}
