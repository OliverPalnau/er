"use client";

import { Button } from "./ui/button"; // Adjust the import path as necessary

const services = [
  "Initial license applications.",
  "License renewals.",
  "Post-market product regulatory management such as major change submissions, annual reporting, etc.",
  "Market & regulatory intel.",
  "Technical document translations.",
];

export default function ServicesSection() {
  return (
    <div className="flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <h2 className="text-2xl font-semibold sm:text-3xl text-center mb-8">
        Our services include:
      </h2>
      <ul className="list-disc pl-6 space-y-4 text-left max-w-lg">
        {services.map((service, index) => (
          <li key={index} className="text-lg">
            <span className="inline-block align-baseline">{service}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Button variant="learnMore">Learn more</Button>
      </div>
    </div>
  );
}
