"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

interface MovingBorderProps {
  children: ReactNode;
  className?: string;
}

const MovingBorder: React.FC<MovingBorderProps> = ({ children, className }) => {
  return (
    <div className={cn("relative", className)}>
      {children}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-500"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{
          repeat: Infinity,
          duration: 100,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default MovingBorder;
