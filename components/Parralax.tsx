"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import chinaSvg from "../public/images/China.svg";
import usaSvg from "../public/images/US.svg";
import womanInOffice from "../public/images/woman-in-office.jpg";

export default function Parallax() {
  const usaSvgRef = useRef<HTMLImageElement>(null);
  const chinaSvgRef = useRef<HTMLImageElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const imageHeight = window.innerHeight; // Assuming the image takes the full height of the viewport

      if (sectionRef.current && overlayRef.current && contentRef.current) {
        const sectionTop = sectionRef.current.getBoundingClientRect().top;
        const sectionHeight = sectionRef.current.offsetHeight;
        const contentTop = contentRef.current.getBoundingClientRect().top;
        const maxScroll = imageHeight + sectionHeight;

        if (scrollY > prevScrollY) {
          // Scrolling down
          if (contentTop < window.innerHeight && contentTop > -sectionHeight) {
            const opacity = Math.min(
              (scrollY - sectionRef.current.offsetTop) / maxScroll,
              0.7
            );
            overlayRef.current.style.opacity = opacity.toString();
          } else if (sectionTop >= window.innerHeight) {
            overlayRef.current.style.opacity;
            overlayRef.current.style.opacity = "0";
          }
        } else {
          // Scrolling up
          if (contentTop < window.innerHeight && contentTop > -sectionHeight) {
            const opacity = Math.min(
              (sectionRef.current.offsetTop - scrollY) / maxScroll,
              0.7
            );
            overlayRef.current.style.opacity = opacity.toString();
          } else if (sectionTop >= window.innerHeight) {
            overlayRef.current.style.opacity = "0";
          }
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, [prevScrollY]);

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
        <div className="text-center pt-12">
          <h1 className="text-5xl font-medium tracking-tight sm:text-6xl lg:text-7xl leading-tight">
            Areas We Serve
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
                United States
              </h2>
              <p className="mt-8 text-lg leading-8">
                For the US market, we specialize in facilitating New Drug
                Application (NDA) filings and Abbreviated New Drug Application
                (ANDA) filings. We ensure that pharmaceutical companies can
                quickly and efficiently submit their applications for new drugs
                or generic versions of existing drugs. For NDAs, we meticulously
                compile comprehensive information on safety, efficacy, labeling,
                manufacturing processes, and quality controls. When it comes to
                ANDAs, we focus on ensuring that bioequivalence is demonstrated
                to reference drugs in your submission. Our goal is to support
                the continuous evaluation and improvement of the pharmaceutical
                landscape, helping companies make safe and effective medications
                accessible to patients across the United States faster.
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
                China
              </h2>
              <p className="mt-8 text-lg leading-8">
                For the Chinese market, we specialize in facilitating New Drug
                Applications (NDAs). Our expertise ensures that pharmaceutical
                companies can efficiently submit their applications for new
                chemical drugs, new biological products, gene and cell
                therapies, new vaccines, and new traditional Chinese medicines
                approved for the first time in mainland China. Notably, China
                set a new record in 2023 by approving the highest number of new
                drugs in a single year—104 in total. These approvals encompassed
                a wide range of therapeutic areas, including oncology drugs,
                anti-infective drugs, and central nervous system (CNS) drugs.
                Additionally, we make sure that companies can effectively use
                the expedited regulatory pathways for rare disease drugs and
                pediatric drugs, addressing unmet clinical needs and ensuring
                that innovative treatments reach patients efficiently.
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
