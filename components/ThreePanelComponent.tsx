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
      <div key={index} className="flex items-start space-x-2 mt-3">
        <div className="h-1 w-1 bg-black mt-2 flex-none"></div>
        <p className="text-base leading-7 text-gray-600">{desc}</p>
      </div>
    ));
  };

  return (
    <div className="mx-auto w-full">
      <div className="hidden lg:block">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 mt-1 pb-1">
          {panelDetails.map((panel, index) => (
            <div
              key={index}
              className="relative cursor-pointer"
              onClick={() => handlePanelClick(panel)}
            >
              <div className="relative w-full h-72">
                <Image
                  src={
                    index === 0 ? ImageOne : index === 1 ? ImageTwo : ImageThree
                  }
                  alt={panel.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
                  <span className="text-3xl text-white ">{panel.title}</span>
                  <ChevronDown
                    className={`h-8 w-8 text-white mt-4 transition-transform duration-300 ${
                      activePanel?.title === panel.title
                        ? "rotate-180"
                        : "rotate-0"
                    }`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {activePanel && (
          <div className="mt-4 mx-auto max-w-5xl lg:mt-4 lg:max-w-5xl pb-20 pt-16">
            <div className="bg-gray-100 p-12 shadow-lg rounded-md">
              <h3 className="text-4xl font-medium text-gray-900 mb-8 text-left">
                {activePanel.title}
              </h3>
              <h4 className="text-xl font-medium text-gray-900 mb-4 text-left">
                {activePanel.subtitle}
              </h4>
              <div className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-4">
                {renderDescription(activePanel.description)}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="block lg:hidden">
        <Accordion type="single" collapsible>
          <div className="grid grid-cols-1 gap-1 pb-1">
            {panelDetails.map((panel, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                onToggle={() => handleAccordionToggle(`item-${index}`)}
              >
                <AccordionTrigger className="relative w-full h-48 sm:h-64 overflow-hidden text-left text-lg font-medium text-white focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                  <Image
                    src={
                      index === 0
                        ? ImageOne
                        : index === 1
                        ? ImageTwo
                        : ImageThree
                    }
                    alt={panel.title}
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <span className="text-3xl">{panel.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="p-8 bg-white mb-4">
                  <h3 className="text-4xl font-medium text-gray-900 mb-4">
                    {panel.title}
                  </h3>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">
                    {panel.subtitle}
                  </h3>
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
