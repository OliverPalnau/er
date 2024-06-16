"use client"

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FadeIn } from "./FadeIn";
import { Button } from "./ui/button";
import { CalendarDays } from "lucide-react";
import thumbnail from "@/public/images/thumbnail-regulen-video.png"; // Replace with the path to your thumbnail image

export default function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
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
  }, []);

  return (
    <div className="relative h-screen">
      <Image
        src={thumbnail}
        alt="Regulen Thumbnail"
        layout="fill"
        objectFit="cover"
        className={`absolute inset-0 w-full h-full transition-opacity duration-300 ${videoLoaded ? 'opacity-0' : 'opacity-100'}`}
      />
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
      <div className="relative z-10 flex items-center justify-center h-full bg-black bg-opacity-50 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center text-white">
          <h1 className="text-4xl font-medium tracking-tight sm:text-6xl">
            Global Pharma Made
            <br />
            Fast & Simple
          </h1>
          <FadeIn>
            <p className="mt-6 text-xl leading-8">
              Looking to penetrate new markets with your medical products or devices? We are your end-to-end regulatory partners from initial idea to market approval and throughout your product&apos;s entire lifecycle.
            </p>
          </FadeIn>
          <div className="mt-12 flex justify-center">
            <a href="https://calendly.com/your-calendly-link" target="_blank" rel="noopener noreferrer">
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
