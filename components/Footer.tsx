"use client";
import React from "react";
import Image from "next/image";
import logo from "@/public/images/regulen-logo-white.svg";
import { FadeIn } from "./FadeIn";
import { SparklesCore } from "./ui/sparkles";


export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
      <FadeIn>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <div className="flex justify-center mb-4 mt-4">
            <a href="#" className="-m-1.5 p-1.5 flex items-center">
              <span className="sr-only">Regulen</span>
              <Image
                className="h-16 w-auto"
                src={logo}
                alt="Regulen"
                width={200}
                height={200}
              />
            </a>
          </div>
          <div className="mb-10 mt-10">
            <a
              href="mailto:info@regulen.com"
              className="text-md underline hover:text-blue-500"
            >
              info@Regulen.com
            </a>
          </div>
          <div className="mb-10">
            <a
              href="/"
              className="text-white text-md hover:underline hover:text-blue-500"
            >
              Home
            </a>
          </div>
          <p className="text-xs">&copy; 2024 Regulen. All rights reserved.</p>
        </div>
      </FadeIn>
    </footer>
  );
}
