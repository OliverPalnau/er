"use client";

import { translations } from "@/translations/translations"; // Adjust the import path as necessary
import { useLanguage } from "@/context/LanguageContext";
import { useForm, ValidationError } from "@formspree/react";
import { BuildingOffice2Icon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {ReactTyped} from "react-typed";
import { Button } from "./ui/moving-border";

const fadeInFromLeftVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const fadeInFromRightVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const fadeInFromBottomVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};


const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: .7,
    },
  },
};

export default function ContactSection() {
  const { language } = useLanguage();
  const [state, handleSubmit] = useForm("xrgnnjjv");
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      id="contact-section"
      className="relative isolate bg-white"
      ref={sectionRef}
    >
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={staggerVariants}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          <motion.div
            className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48"
            variants={fadeInVariants}
          >
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
                <svg
                  className="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                      width={200}
                      height={200}
                      x="100%"
                      y={-1}
                      patternUnits="userSpaceOnUse"
                    >
                      <path d="M130 200V.5M.5 .5H200" fill="none" />
                    </pattern>
                  </defs>
                  <rect
                    width="100%"
                    height="100%"
                    strokeWidth={0}
                    fill="white"
                  />
                  <svg
                    x="100%"
                    y={-1}
                    className="overflow-visible fill-gray-50"
                  >
                    <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                  </svg>
                  <rect
                    width="100%"
                    height="100%"
                    strokeWidth={0}
                    fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
                  />
                </svg>
              </div>
              <ReactTyped
                strings={[translations[language].contactHeading]}
                typeSpeed={100}
                className="text-5xl font-medium tracking-tight text-gray-900"
              />
              <motion.div variants={fadeInFromLeftVariants}>
                <p className="mt-6 text-md leading-8 text-gray-600">
                  {translations[language].contactDescription}
                </p>
              </motion.div>
              <motion.div variants={fadeInFromRightVariants} transition={{ delay: 0.2 }}>
                <p className="mt-6 text-md leading-8 text-gray-600">
                  {translations[language].contactEmailPrompt}
                </p>
              </motion.div>
              <motion.div variants={fadeInFromLeftVariants} transition={{ delay: 0.4 }}>
                <p className="mt-6 text-md leading-8 text-blue-500">
                  {translations[language].contactServiceMarkets}
                </p>
              </motion.div>
              <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                <motion.div className="flex gap-x-4" variants={fadeInVariants}>
                  <dt className="flex-none">
                    <span className="sr-only">Address</span>
                    <BuildingOffice2Icon
                      className="h-7 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>{translations[language].contactAddress}</dd>
                </motion.div>
                <motion.div className="flex gap-x-4" variants={fadeInVariants}>
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <EnvelopeIcon
                      className="h-7 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <a
                      className="hover:text-gray-900"
                      href="mailto:info@regulen.com"
                    >
                      info@regulen.com
                    </a>
                  </dd>
                </motion.div>
              </dl>
            </div>
          </motion.div>
          <form
            onSubmit={handleSubmit}
            className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
          >
            <motion.div
              className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg"
              variants={fadeInVariants}
            >
              <motion.div
                className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2"
                variants={staggerVariants}
              >
                <motion.div variants={fadeInVariants}>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    {translations[language].contactInfo}
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </motion.div>
                <motion.div variants={fadeInVariants}>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    {translations[language].lastName}
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </motion.div>
                <motion.div className="sm:col-span-2" variants={fadeInVariants}>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    {translations[language].email}
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                  </div>
                </motion.div>
                <motion.div className="sm:col-span-2" variants={fadeInVariants}>
                  <label
                    htmlFor="phone-number"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    {translations[language].phoneNumber}
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="tel"
                      name="phone-number"
                      id="phone-number"
                      autoComplete="tel"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    />
                    <ValidationError
                      prefix="Phone Number"
                      field="phone-number"
                      errors={state.errors}
                    />
                  </div>
                </motion.div>
                <motion.div className="sm:col-span-2" variants={fadeInVariants}>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    {translations[language].message}
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />
                  </div>
                </motion.div>
              </motion.div>
              <motion.div variants={fadeInVariants}>
                <div className="mt-8 flex justify-end">
                  <Button
                    className="text-xs font-base"
                    type="submit"
                    disabled={state.submitting}
                  >
                    {translations[language].sendMessage}
                  </Button>
                </div>
                {state.succeeded && (
                  <p className="mt-4 text-green-600">
                    {translations[language].thanksMessage}
                  </p>
                )}
              </motion.div>
            </motion.div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
