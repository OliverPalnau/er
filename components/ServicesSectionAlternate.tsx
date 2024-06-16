import { CheckIcon } from "@heroicons/react/20/solid";
import { Button } from "./ui/button"; // Adjust the import path as necessary
import { FadeIn } from "./FadeIn";

const services = [
  {
    name: "Initial license applications",
    description:
      "Complete assistance with initial license applications for new products.",
  },
  {
    name: "License renewals",
    description: "Guidance and support for timely license renewals.",
  },
  {
    name: "Post-market product regulatory management",
    description:
      "Management of post-market product regulatory requirements, including major change submissions and annual reporting.",
  },
  {
    name: "Market & regulatory intel",
    description:
      "Access to market and regulatory intelligence to stay ahead of the competition.",
  },
  {
    name: "Technical document translations",
    description:
      "Accurate translations of technical documents to meet regulatory standards.",
  },
];

export default function ServicesSectionAlternate() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <FadeIn>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div>
              <h2 className="text-base font-semibold leading-7 text-blue-600">
                Serving USA and China*
              </h2>
              <p className="mt-2 text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl">
                Our Services Include:
              </p>
              <p className="mt-6 text-base leading-7 text-gray-600">
                We provide a wide range of services to help you navigate the
                regulatory landscape and ensure compliance with industry
                standards.
              </p>
            </div>
            <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
              {services.map((service) => (
                <div key={service.name} className="relative pl-9">
                  <dt className="font-semibold text-gray-900">
                    <CheckIcon
                      className="absolute left-0 top-1 h-5 w-5 text-blue-500"
                      aria-hidden="true"
                    />
                    {service.name}
                  </dt>
                  <dd className="mt-2">{service.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="mt-12 flex justify-center">
            <a href="#contact-section"><Button variant="learnMore">Learn more</Button></a>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
