"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import ImageOne from "@/public/images/image-one.png"; // Replace with your image path
import ImageTwo from "@/public/images/image-two.png"; // Replace with your image path
import ImageThree from "@/public/images/image-three.png"; // Replace with your image path

const fadeInStagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5 } },
};

export default function ThreePanelComponent() {
  const [hoveredPanel, setHoveredPanel] = useState<null | number>(null);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("show");
    }
  }, [isInView, controls]);

  const panels = [
    {
      title: "Medical Foods",
      description: "Description for Medical Foods.",
      image: ImageOne,
    },
    {
      title: "Drugs",
      description: "Description for Drugs.",
      image: ImageTwo,
    },
    {
      title: "Medical Devices",
      description: "Description for Medical Devices.",
      image: ImageThree,
    },
  ];

  return (
    <motion.div
      className="flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-1"
      ref={ref}
      variants={fadeInStagger}
      initial="hidden"
      animate={controls}
    >
      {panels.map((panel, index) => (
        <motion.div
          key={index}
          className="relative w-full sm:w-1/3 h-64 sm:h-96 overflow-hidden"
          onMouseEnter={() => setHoveredPanel(index)}
          onMouseLeave={() => setHoveredPanel(null)}
          variants={fadeIn}
        >
          <Image
            src={panel.image}
            alt={panel.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 ease-in-out transform hover:scale-110"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <h2 className="text-3xl sm:text-5xl font-medium text-white text-center">
              {panel.title}
            </h2>
          </div>
          <div
            className={`absolute inset-0 flex items-center justify-center bg-white text-black p-4 transition-opacity duration-300 ${
              hoveredPanel === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="text-base sm:text-lg text-center">
              {panel.description}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
