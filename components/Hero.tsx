"use client";

import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import thumbnail from "@/public/images/thumbnail-regulen.png";
import { translations } from "@/translations/translations";
import { motion } from "framer-motion";
import Typed, { ReactTyped } from "react-typed";

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

  const paragraphVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <div className="relative h-screen">
      {isMobile ? (
        <div className="absolute inset-0 w-full h-full flex items-center justify-center z-0">
          <Image
            src={thumbnail}
            alt="Regulen Thumbnail"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 w-full h-full"
          />
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
      <div className="relative z-20 flex items-center justify-center h-full bg-black bg-opacity-50 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-5xl text-center text-white">
          <h1 className="text-4xl font-medium tracking-tight sm:text-8xl">
            <ReactTyped
              strings={[translations[language].globalPharma]}
              typeSpeed={50}
              startDelay={300}
              showCursor={false}
            />
          </h1>
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
