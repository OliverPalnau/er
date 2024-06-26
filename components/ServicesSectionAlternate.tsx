/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations/translations";
import { CheckIcon } from "@heroicons/react/20/solid";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { FadeInStagger } from "./FadeIn";
import { AnimatedText } from "./AnimatedText";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ServicesSectionAlternate() {
  const { language } = useLanguage();
  const serviceTranslations = translations[language].serviceItems;
  const words = translations[language].servicesHeading;
  const lifecycleTranslation = translations[language].lifecycle;
  const controls = useAnimation();
  const highlightControls = useAnimation();
  const sectionRef = useRef(null);
  const highlightRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });
  const highlightInView = useInView(highlightRef, { once: true, amount: 0.1 });

  const highlightText = (text: string) => {
    const parts = text.split("entire lifecycle.");
    return (
      <>
        {parts[0]}
        <Highlight
          ref={highlightRef}
          className="text-black dark:text-white mt-4 mb-4"
        >
          {lifecycleTranslation}
        </Highlight>
        {parts[1]}
      </>
    );
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (highlightInView) {
      highlightControls.start({
        backgroundColor: "#00f",
        transition: { duration: 0.5 },
      });
    }
  }, [inView, highlightInView, controls, highlightControls]);

  return (
    <div ref={sectionRef} className="w-full overflow-hidden">
      <div className="border-b-2 border-blue-500 px-6 py-10 sm:py-10 lg:px-8 relative z-10 w-full">
        <div className="mx-auto max-w-9xl text-center w-full">
          <HeroHighlight containerClassName="w-full">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              variants={{
                visible: { opacity: 1, y: [20, -5, 0] },
              }}
              transition={{
                duration: 0.5,
                ease: [0.4, 0.0, 0.2, 1],
              }}
              className="text-4xl px-4 md:text-4xl lg:text-6xl font-bold text-neutral-700 dark:text-white max-w-full leading-relaxed lg:leading-snug text-center mx-auto"
            >
              {highlightText(words)}
            </motion.h1>
          </HeroHighlight>
        </div>
      </div>
      <div className="relative z-70 bg-white py-6 overflow-hidden">
        <div className="relative py-4 bg-white z-50 overflow-hidden">
          <motion.div
            className="text-6xl lg:text-9xl font-bold"
            animate={{ x: ["100%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: 15,
              ease: "linear",
            }}
            style={{ whiteSpace: "nowrap" }}
          >
            <span className="text-outline text-transparent">
              {translations[language].ourServicesInclude}
            </span>
          </motion.div>
        </div>
      </div>
      <div className="relative bg-white py-24 sm:py-32 overflow-hidden">
        <FadeInStagger>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial="hidden"
              animate={controls}
              variants={staggerContainer}
              className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
            >
              <div>
                <AnimatedText
                  text={translations[language].servicesDescription}
                  el="h1"
                  className="leading-tight gradient-text mt-2 text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl"
                />
              </div>
              <motion.dl
                className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16"
                variants={staggerContainer}
              >
                {serviceTranslations.map((service, index) => {
                  const serviceRef = useRef(null);
                  const serviceInView = useInView(serviceRef, {
                    once: true,
                    amount: 0.1,
                  });
                  const serviceControls = useAnimation();

                  useEffect(() => {
                    if (serviceInView) {
                      serviceControls.start("visible");
                    }
                  }, [serviceInView, serviceControls]);

                  return (
                    <motion.div
                      key={index}
                      ref={serviceRef}
                      initial="hidden"
                      animate={serviceControls}
                      variants={fadeInUp}
                      className="relative flex items-start pl-9 group p-4 rounded-lg transform hover:scale-105 transition-transform duration-300"
                    >
                      <dt className="flex-shrink-0">
                        <CheckIcon
                          className="mr-2 h-6 w-6 text-blue-500"
                          aria-hidden="true"
                        />
                      </dt>
                      <div className="ml-4">
                        <dt className="text-lg leading-6 font-medium text-gray-900">
                          {service.name}
                        </dt>
                        <dd className="mt-2 text-base text-gray-500">
                          {service.description}
                        </dd>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.dl>
            </motion.div>
          </div>
        </FadeInStagger>
      </div>
    </div>
  );
}
