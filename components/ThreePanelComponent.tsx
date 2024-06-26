"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"; // Adjust the import path as necessary
import ImageOne from "@/public/images/image-one.png"; // Replace with your image path
import ImageTwo from "@/public/images/image-two.png"; // Replace with your image path
import ImageThree from "@/public/images/image-three.png"; // Replace with your image path
import { translations } from "@/translations/translations";
import { motion, AnimatePresence } from "framer-motion";

type PanelDetail = {
  title: string;
  subtitle: string;
  description: string[];
  image: StaticImageData;
};

export default function ThreePanelComponent() {
  const { language } = useLanguage();
  const panelDetails = translations[language].panelDetails as PanelDetail[];
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [activePanel, setActivePanel] = useState<PanelDetail | null>(null);

  const handleAccordionToggle = (value: string) => {
    if (expandedItems.includes(value)) {
      setExpandedItems(expandedItems.filter((item) => item !== value));
    } else {
      setExpandedItems([...expandedItems, value]);
    }
  };

  const handlePanelClick = (panel: PanelDetail) => {
    setActivePanel(activePanel?.title === panel.title ? null : panel);
  };

  const renderDescription = (description: string[]) => {
    return description.map((desc, index) => (
      <motion.div
        key={index}
        className="flex items-start space-x-2 mt-3"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 }}
      >
        <div className="h-1 w-1 bg-black mt-2 flex-none"></div>
        <p className="text-base leading-7 text-gray-600">{desc}</p>
      </motion.div>
    ));
  };

  return (
    <div className="mx-auto w-full">
      <div className="hidden lg:block">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8 pb-8 px-8">
          {panelDetails.map((panel, index) => (
            <motion.div
              key={index}
              className="relative cursor-pointer"
              onClick={() => handlePanelClick(panel)}
              whileHover={{ scale: 1.10 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.2 }}
            >
              <div
                className={`relative w-full h-80 overflow-hidden rounded-xl shadow-lg transition-transform duration-300 ${
                  activePanel?.title === panel.title ? "bg-white" : ""
                }`}
              >
                {activePanel?.title !== panel.title && (
                  <Image
                    src={index === 0 ? ImageOne : index === 1 ? ImageTwo : ImageThree}
                    alt={panel.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl"
                  />
                )}
                <div
                  className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 ${
                    activePanel?.title === panel.title
                      ? "bg-white text-black"
                      : "bg-black bg-opacity-50 text-white"
                  }`}
                >
                  <span className="text-3xl font-bold">{panel.title}</span>
                  <ChevronDown
                    className={`h-8 w-8 mt-4 transition-transform duration-300 ${
                      activePanel?.title === panel.title ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {activePanel && (
            <motion.div
              className="mt-8 mx-auto max-w-5xl pb-20 pt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white p-12 shadow-2xl rounded-2xl">
                <h3 className="text-4xl font-semibold text-gray-900 mb-8">
                  {activePanel.title}
                </h3>
                <h4 className="text-xl font-medium text-gray-700 mb-4">
                  {activePanel.subtitle}
                </h4>
                <div className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-4">
                  {renderDescription(activePanel.description)}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="block lg:hidden">
        <Accordion type="single" collapsible>
          <div className="grid grid-cols-1 gap-8 pb-8">
            {panelDetails.map((panel, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                onToggle={() => handleAccordionToggle(`item-${index}`)}
              >
                <AccordionTrigger className="relative w-full h-48 sm:h-64 overflow-hidden text-left text-lg font-medium text-white focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                  <Image
                    src={index === 0 ? ImageOne : index === 1 ? ImageTwo : ImageThree}
                    alt={panel.title}
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <span className="text-3xl font-bold">{panel.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="p-8 bg-white mb-4">
                  <h3 className="text-4xl font-semibold text-gray-900 mb-4">
                    {panel.title}
                  </h3>
                  <h4 className="text-xl font-medium text-gray-700 mb-4">
                    {panel.subtitle}
                  </h4>
                  {renderDescription(panel.description)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </div>
        </Accordion>
      </div>
    </div>
  );
}
