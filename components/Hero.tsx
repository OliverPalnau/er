"use client";

import { useLanguage } from "@/context/LanguageContext";
import ImageFour from "@/public/images/regulen-image-four.jpg";
import ImageThree from "@/public/images/regulen-image-three.jpg";
import ImageTwo from "@/public/images/regulen-image-two.jpg";
import { translations } from "@/translations/translations";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ReactTyped } from "react-typed";
import { ImagesSlider } from "./ui/images-slider";

export default function Hero() {
  const { language } = useLanguage();
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handlePlayButtonClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.5, ease: "easeOut" },
    },
  };

  const images = [ImageTwo.src, ImageThree.src, ImageFour.src];

  return (
    <div className="relative h-screen overflow-hidden">
      {isMobile ? (
        <div className="absolute inset-0 w-full h-full flex items-center justify-center z-0">
          <ImagesSlider className="h-full w-full" images={images}>
            <motion.div
              initial={{
                opacity: 0,
                y: -80,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              className="z-50 flex flex-col justify-center items-center"
            ></motion.div>
          </ImagesSlider>
        </div>
      ) : (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src="/regulen-drone-footage.mov"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
      )}
      <div className="absolute inset-0 flex items-center justify-center h-full bg-black bg-opacity-50 px-6 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-5xl text-center text-white">
          <motion.h1
            className="text-4xl font-medium tracking-tight sm:text-8xl"
            initial="hidden"
            animate="visible"
            variants={headingVariants}
          >
            <ReactTyped
              strings={[translations[language].globalPharma]}
              typeSpeed={50}
              startDelay={300}
              showCursor={false}
            />
          </motion.h1>
          <motion.p
            className="mt-6 text-xl leading-8"
            initial="hidden"
            animate="visible"
            variants={paragraphVariants}
          >
            {translations[language].heroDescription}
          </motion.p>
        </div>
      </div>
    </div>
  );
}
