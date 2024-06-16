"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"; // Adjust the import path as necessary
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

const panelDetails = [
  {
    title: "Medical Foods",
    subtitle:
      "We handle the required registrations, licensing, and product lifecycle management of complete nutrient formulas for:",
    description: ` 
    • Diabetes mellitus
    • Respiratory system illness
    • Kidney disease
    • Oncological conditions
    • Liver disease
    • Sarcopenia syndrome
    • Trauma, infection, surgery, and other stress conditions
    • Inflammatory bowel disease
    • Food protein allergies
    • Refractory epilepsy
    • Gastrointestinal malabsorption and pancreatitis
    • Fatty acid metabolic abnormality
    • Obesity and fat reduction surgery
    And more.`,
    image: ImageOne,
  },
  {
    title: "Drugs",
    subtitle: "We offer and ensure:",

    description: `
    • NDA and ANDA filings in the U.S. for new and generic drugs.
    • Compilation of detailed information on drug safety, efficacy, labeling, manufacturing, and quality controls for NDAs.
    • Bioequivalence to reference drugs for ANDA submissions.
    • NDAs in China for various drug categories including chemical drugs, biological products, and traditional Chinese medicines.
    • Leveraging of expedited pathways for rare disease and pediatric drugs in China to meet clinical needs and advance treatment availability.`,
    image: ImageTwo,
  },
  {
    title: "Medical Devices",
    subtitle: "We offer and ensure:",

    description: `
    • PMAs and 510(k) filings in the U.S. for medical devices.
    • Compilation of detailed information on device safety, effectiveness, labeling, manufacturing, and quality controls for PMAs.
    • Substantial equivalence to predicate devices for 510k submissions.
    • Medical Device Registrations in China for various device categories.`,
    image: ImageThree,
  },
];

export default function ThreePanelComponent() {
  const [activePanel, setActivePanel] = useState<null | number>(null);
  const [hoveredPanel, setHoveredPanel] = useState<null | number>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  useEffect(() => {
    if (isInView) {
      controls.start("show");
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize(); // Check on initial load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isInView, controls]);

  const handlePanelClick = (index: number) => {
    setActivePanel(activePanel === index ? null : index);
  };

  const handleAccordionToggle = (value: string) => {
    if (expandedItems.includes(value)) {
      setExpandedItems(expandedItems.filter((item) => item !== value));
    } else {
      setExpandedItems([...expandedItems, value]);
    }
  };

  const renderDescription = (description: string) => {
    const items = description.split("\n").map((item, index) => {
      if (item.trim() === "") return null;
      return (
        <div key={index} className="flex items-start space-x-2">
          <CheckCircleIcon
            className="h-6 w-6 flex-none text-blue-600"
            aria-hidden="true"
          />
          <p className="text-base leading-7 text-gray-600">
            {item.trim().replace("• ", "")}
          </p>
        </div>
      );
    });

    return (
      <div className="space-y-2 sm:grid sm:grid-cols-2 sm:gap-4">
        {items}
      </div>
    );
  };

  return (
    <div className="mx-auto w-full">
      {!isMobile && (
        <motion.div
          className="flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-1 mb-1"
          ref={ref}
          variants={fadeInStagger}
          initial="hidden"
          animate={controls}
        >
          {panelDetails.map((panel, index) => (
            <motion.div
              key={index}
              className={`relative w-full h-64 sm:h-96 overflow-hidden cursor-pointer transition-all duration-300 ease-in-out ${
                activePanel === index
                  ? "bg-white text-black"
                  : "bg-gray-100 text-white"
              }`}
              onClick={() => handlePanelClick(index)}
              onMouseEnter={() => setHoveredPanel(index)}
              onMouseLeave={() => setHoveredPanel(null)}
              variants={fadeIn}
            >
              <Image
                src={panel.image}
                alt={panel.title}
                layout="fill"
                objectFit="cover"
                className={`absolute inset-0 transition-transform duration-300 ease-in-out transform ${
                  activePanel === index || hoveredPanel === index
                    ? "opacity-0"
                    : "opacity-100"
                }`}
              />
              <div className="absolute inset-0 flex space-x-10 flex-col items-center justify-center transition-all duration-300 ease-in-out">
                <h2
                  className={`text-3xl sm:text-5xl font-medium text-center transition-colors ${
                    activePanel === index || hoveredPanel === index
                      ? "text-black underline"
                      : "text-white"
                  }`}
                >
                  {panel.title}
                </h2>
                <div className="absolute bottom-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={4}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
      {!isMobile && activePanel !== null && (
        <motion.div
          className="max-w-5xl mx-auto bg-white px-6 py-8 mt-4 shadow-md"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {panelDetails[activePanel].title}
          </h3>
          <h3 className="text-xl font-medium text-gray-900 mb-4">
            {panelDetails[activePanel].subtitle}
          </h3>
          {renderDescription(panelDetails[activePanel].description)}
        </motion.div>
      )}
      {isMobile && (
        <Accordion type="single" collapsible>
          {panelDetails.map((panel, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              onToggle={() => handleAccordionToggle(`item-${index}`)}
            >
              <AccordionTrigger className="relative w-full h-64 overflow-hidden text-left text-lg font-medium text-white focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                <Image
                  src={panel.image}
                  alt={panel.title}
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <span className="text-3xl">{panel.title}</span>

                </div>
              </AccordionTrigger>
              <AccordionContent className="p-4 bg-white">
                <h3 className="text-xl font-medium text-gray-900 mb-4">
                  {panel.subtitle}
                </h3>
                {renderDescription(panel.description)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )}
    </div>
  );
}
