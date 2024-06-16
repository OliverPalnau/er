import { CheckIcon } from "@heroicons/react/20/solid";
import { Button } from "./ui/button"; // Adjust the import path as necessary
import { FadeIn } from "./FadeIn";

const services = [
  {
    name: "Regulatory Intelligence",
    description:
      "Keeping up-to-date with the latest regulations and standards.",
  },
  {
    name: "Regulatory Strategy",
    description:
      "Developing plans to navigate regulatory requirements efficiently.",
  },
  {
    name: "Consultation Meetings",
    description: "Facilitating interactions with health authorities.",
  },
  {
    name: "Regulatory Operations",
    description:
      "Managing the practical aspects of compliance and submissions.",
  },
  {
    name: "Clinical Trial Operations",
    description: "Overseeing the administration of clinical trials.",
  },
  {
    name: "Medical Writing and Publishing",
    description:
      "Creating necessary documentation and reports. Performing technical document translations.*",
  },
  {
    name: "Product Registration",
    description:
      "Handling the registration of drugs, medical foods and medical devices with the relevant government and regulatory authorities.",
  },
  {
    name: "Product Life-Cycle Management",
    description: "Ensuring compliance throughout a product's life cycle.",
  },
  {
    name: "Pre-Submission Meetings",
    description: "Preparing for meetings with regulatory bodies.",
  },
  {
    name: "Post-Approval Changes",
    description: "Managing changes to a product after it has been approved.",
  },
];

export default function ServicesSectionAlternate() {
  return (
    <div>
      <div className="bg-gray-100 px-6 py-24 sm:py-32 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-4xl font-medium tracking-tight text-black sm:text-5xl lg:text-6xl leading-tight">
              All-inclusive regulatory management services throughout your
              product’s entire lifecycle.
            </h2>
          </div>
        </FadeIn>
      </div>
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
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
