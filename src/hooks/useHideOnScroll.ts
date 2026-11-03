import { useEffect, useState } from "react";

type Options = {
  offset?: number;
  delta?: number;
};

export function useHideOnScroll({ offset = 80, delta = 8 }: Options = {}): boolean {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let frame = 0;

    const update = () => {
      frame = 0;
      const y = Math.max(window.scrollY, 0);

      if (y <= offset) {
        setHidden(false);
        lastY = y;
        return;
      }

      if (Math.abs(y - lastY) >= delta) {
        setHidden(y > lastY);
        lastY = y;
      }
    };

    const onScroll = () => {
      if (frame === 0) {
        frame = window.requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.cancelAnimationFrame(frame);
    };
  }, [offset, delta]);

  return hidden;
}
