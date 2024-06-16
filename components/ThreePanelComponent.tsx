"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"; // Adjust the import path as necessary
import ImageOne from "@/public/images/image-one.png"; // Replace with your image path
import ImageTwo from "@/public/images/image-two.png"; // Replace with your image path
import ImageThree from "@/public/images/image-three.png"; // Replace with your image path

const panelDetails = [
  {
    title: "Medical Foods",
    subtitle:
      "We handle the required registrations, licensing, and product lifecycle management of complete nutrient formulas for:",
    description: ` 
    ■ Diabetes mellitus
    ■ Respiratory system illness
    ■ Kidney disease
    ■ Oncological conditions
    ■ Liver disease
    ■ Sarcopenia syndrome
    ■ Trauma, infection, surgery, and other stress conditions
    ■ Inflammatory bowel disease
    ■ Food protein allergies
    ■ Refractory epilepsy
    ■ Gastrointestinal malabsorption and pancreatitis
    ■ Fatty acid metabolic abnormality
    ■ Obesity and fat reduction surgery
    And more.`,
    image: ImageOne,
  },
  {
    title: "Drugs",
    subtitle: "We offer and ensure:",

    description: `
    ■ NDA and ANDA filings in the U.S. for new and generic drugs.
    ■ Compilation of detailed information on drug safety, efficacy, labeling, manufacturing, and quality controls for NDAs.
    ■ Bioequivalence to reference drugs for ANDA submissions.
    ■ NDAs in China for various drug categories including chemical drugs, biological products, and traditional Chinese medicines.
    ■ Leveraging of expedited pathways for rare disease and pediatric drugs in China to meet clinical needs and advance treatment availability.`,
    image: ImageTwo,
  },
  {
    title: "Medical Devices",
    subtitle: "We offer and ensure:",

    description: `
    ■ PMAs and 510(k) filings in the U.S. for medical devices.
    ■ Compilation of detailed information on device safety, effectiveness, labeling, manufacturing, and quality controls for PMAs.
    ■ Substantial equivalence to predicate devices for 510k submissions.
    ■ Medical Device Registrations in China for various device categories.`,
    image: ImageThree,
  },
];

export default function ThreePanelComponent() {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

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
        <div key={index} className="flex items-start space-x-1">
          <div className="h-2.5 w-2.5 bg-black mt-2 flex-none"></div>
          <p className="text-base leading-7 text-gray-600">
            {item.trim().replace("■ ", "")}
          </p>
        </div>
      );
    });

    return (
      <div className="space-y-2 sm:grid sm:grid-cols-2 sm:gap-4 px-4">
        {items}
      </div>
    );
  };

  return (
    <div className="mx-auto w-full">
      <Accordion type="single" collapsible>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-1">
          {panelDetails.map((panel, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              onToggle={() => handleAccordionToggle(`item-${index}`)}
            >
              <AccordionTrigger className="relative w-full h-64 sm:h-96 overflow-hidden text-left text-lg font-medium text-white focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
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
              <AccordionContent className="p-4 bg-white mb-4">
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
  );
}
