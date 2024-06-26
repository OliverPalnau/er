import { useRef } from "react";
import { useInView } from "framer-motion";

export const useServiceInView = (options: object) => {
  const ref = useRef(null);
  const inView = useInView(ref, options);
  return { ref, inView };
};
