import { useAnimation } from "framer-motion";
import { useEffect } from "react";

export const useAnimationControls = (inView: boolean, animation: object) => {
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start(animation);
    }
  }, [inView, controls, animation]);

  return controls;
};
