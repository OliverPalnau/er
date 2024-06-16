"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FadeIn } from "./FadeIn";
import { Button } from "./ui/button";
import { CalendarDays, Play } from "lucide-react"; // Importing a play icon
import thumbnail from "@/public/images/thumbnail-regulen-video.png"; // Replace with the path to your thumbnail image

export default function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [showThumbnail, setShowThumbnail] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const handleVideoLoad = () => {
      setVideoLoaded(true);
    };

    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener("loadeddata", handleVideoLoad);

      return () => {
        videoElement.removeEventListener("loadeddata", handleVideoLoad);
      };
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handlePlayButtonClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setShowThumbnail(false);
    }
  };

  useEffect(() => {
    if (!isMobile && videoRef.current) {
      videoRef.current.play();
      setShowThumbnail(false);
    }
  }, [isMobile]);

  return (
    <div className="relative h-screen">
      {showThumbnail && (
        <div className="absolute inset-0 w-full h-full flex items-center justify-center z-20">
          <Image
            src={thumbnail}
            alt="Regulen Thumbnail"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 w-full h-full"
          />
          {isMobile && (
            <button
              onClick={handlePlayButtonClick}
              className="bg-white text-black p-4 rounded-full"
            >
              <Play size={48} />
            </button>
          )}
        </div>
      )}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="/regulen-drone-footage.mov"
        autoPlay={!isMobile}
        loop
        muted
        playsInline
        preload="auto"
        style={{ display: showThumbnail && isMobile ? "none" : "block" }}
      />
      <div className="relative z-10 flex items-center justify-center h-full bg-black bg-opacity-50 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center text-white">
          <h1 className="text-4xl font-medium tracking-tight sm:text-6xl">
            Global Pharma Made
            <br />
            Fast & Simple
          </h1>
          <FadeIn>
            <p className="mt-6 text-xl leading-8">
              Looking to penetrate new markets with your medical products or
              devices? We are your end-to-end regulatory partners from initial
              idea to market approval and throughout your product&apos;s entire
              lifecycle.
            </p>
          </FadeIn>
          <div className="mt-12 flex justify-center">
            <a
              href="https://calendly.com/your-calendly-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="bookCall" className="flex items-center">
                <CalendarDays className="mr-2" />
                Schedule a Call
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
