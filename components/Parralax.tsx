"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations/translations"; 
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import chinaSvg from "../public/images/China.svg";
import usaSvg from "../public/images/US.svg";
import womanInOffice from "../public/images/woman-in-office.jpg";

export default function Parallax() {
  const { language } = useLanguage();
  const usaSvgRef = useRef<HTMLImageElement>(null);
  const chinaSvgRef = useRef<HTMLImageElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [headingInView, setHeadingInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      if (
        sectionRef.current &&
        overlayRef.current &&
        contentRef.current &&
        headingRef.current
      ) {
        const sectionTop = sectionRef.current.getBoundingClientRect().top;
        const sectionHeight = sectionRef.current.offsetHeight;
        const contentTop = contentRef.current.getBoundingClientRect().top;
        const headingTop = headingRef.current.getBoundingClientRect().top;

        const headingVisibleStart =
          headingTop + window.scrollY - viewportHeight;
        const headingVisibleEnd = headingTop + window.scrollY;

        if (scrollY > headingVisibleStart && scrollY < headingVisibleEnd) {
          const opacity = Math.min(
            (scrollY - headingVisibleStart) /
              (headingVisibleEnd - headingVisibleStart) /
              2,
            0.7
          );
          overlayRef.current.style.opacity = opacity.toString();
        } else if (scrollY >= headingVisibleEnd) {
          overlayRef.current.style.opacity = "0.7";
        } else {
          overlayRef.current.style.opacity = "0";
        }
      }

      if (usaSvgRef.current) {
        const scale =
          window.innerWidth < 1024
            ? Math.min(1 + scrollY / 2000, 1.1)
            : Math.min(1 + scrollY / 800, 2);
        const translateY =
          window.innerWidth < 1024
            ? Math.min(scrollY / 4, 100)
            : Math.min(scrollY / 2, 300);
        usaSvgRef.current.style.transform = `translateY(${translateY}px) scale(${scale})`;
      }

      if (chinaSvgRef.current) {
        const scale =
          window.innerWidth < 1024
            ? Math.min(1 + (scrollY - 800) / 2000, 1.1)
            : Math.min(1 + (scrollY - 800) / 800, 2);
        const translateY =
          window.innerWidth < 1024
            ? Math.min((scrollY - 800) / 4, 100)
            : Math.min((scrollY - 800) / 2, 300);
        chinaSvgRef.current.style.transform = `translateY(${translateY}px) scale(${scale})`;
      }

      setPrevScrollY(scrollY);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setHeadingInView(entry.isIntersecting);
          if (entry.isIntersecting) {
            window.addEventListener("scroll", handleScroll);
          } else {
            window.removeEventListener("scroll", handleScroll);
            if (overlayRef.current && entry.boundingClientRect.top >= 0) {
              overlayRef.current.style.opacity = "0";
            }
          }
        });
      },
      { threshold: 0.5 }
    ); // Adjusted threshold for half the viewport height

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, [prevScrollY, headingInView]);

  return (
    <div className="relative bg-black text-white min-h-screen">
      {/* Sticky Background Image */}
      <div ref={sectionRef} className="sticky top-0 h-screen">
        <div className="relative h-full">
          <Image
            src={womanInOffice}
            alt="Woman in Office"
            layout="fill"
            objectFit="cover"
            objectPosition="bottom left"
            priority
          />
          <div
            ref={overlayRef}
            className="absolute inset-0 bg-black opacity-0 transition-opacity duration-5000"
          ></div>
        </div>
      </div>

      {/* Parallax Content */}
      <div
        ref={contentRef}
        className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 space-y-24 pb-32"
      >
        {/* Heading Section */}
        <div ref={headingRef} className="text-center pt-12">
          <h1 className="text-5xl font-medium tracking-tight sm:text-6xl lg:text-7xl leading-tight">
            {translations[language].parallaxHeading}
          </h1>
        </div>

        {/* USA Section */}
        <section className="parallax-section py-24 sm:py-32 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="flex justify-center lg:justify-start relative">
              <div className="usa-svg-container">
                <Image
                  src={usaSvg}
                  alt="United States"
                  width={300}
                  height={180}
                  className="object-contain usa-image"
                  ref={usaSvgRef}
                />
              </div>
            </div>
            <div className="usa-text-container flex flex-col justify-center mt-8 lg:mt-0 lg:pl-24">
              <h2 className="text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl leading-tight">
                {translations[language].usaSectionTitle}
              </h2>
              <p className="mt-8 text-lg leading-8">
                {translations[language].usaSectionDescription}
              </p>
            </div>
          </div>
        </section>

        {/* China Section */}
        <section className="parallax-section py-24 sm:py-32 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="flex justify-center lg:justify-start relative">
              <div className="china-svg-container">
                <Image
                  src={chinaSvg}
                  alt="China"
                  width={300}
                  height={180}
                  className="object-contain china-image"
                  ref={chinaSvgRef}
                />
              </div>
            </div>
            <div className="china-text-container flex flex-col justify-center mt-8 lg:mt-0 lg:pl-24">
              <h2 className="text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl leading-tight">
                {translations[language].chinaSectionTitle}
              </h2>
              <p className="mt-8 text-lg leading-8">
                {translations[language].chinaSectionDescription}
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Custom CSS for Parallax Effect */}
      <style jsx>{`
        .usa-svg-container,
        .china-svg-container {
          position: absolute;
          top: -200px;
          left: 50%;
          transform: translateX(-50%);
        }
        .china-svg-container {
          top: -200px;
        }
        .usa-image,
        .china-image {
          transition: transform 0.1s ease-out;
        }
        @media (max-width: 1024px) {
          .usa-svg-container,
          .china-svg-container {
            position: relative;
            top: 0;
            left: 0;
            transform: none;
            margin-bottom: 80px; /* Increase margin to separate SVG and text on small screens */
          }
          .usa-text-container,
          .china-text-container {
            text-align: center;
            padding-left: 0;
          }
          .usa-image,
          .china-image {
            width: 200px; /* Smaller width for SVGs on smaller screens */
            height: auto;
          }
        }
      `}</style>
    </div>
  );
}
