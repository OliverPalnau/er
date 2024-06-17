"use client";

import { useLanguage } from "@/context/LanguageContext";
import { CheckIcon } from "@heroicons/react/20/solid";
import { FadeIn } from "./FadeIn";
import { translations } from "@/translations/translations";

export default function ServicesSectionAlternate() {
  const { language } = useLanguage();
  const serviceTranslations = translations[language].serviceItems;

  return (
    <div>
      <div className="bg-gray-100 px-6 py-24 sm:py-32 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-4xl font-medium tracking-tight text-black sm:text-5xl lg:text-6xl leading-tight">
              {translations[language].servicesHeading}
            </h2>
          </div>
        </FadeIn>
      </div>
      <div className="bg-white py-24 sm:py-32">
        <FadeIn>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              <div>
                <p className="mt-2 text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl">
                  {translations[language].ourServicesInclude}
                </p>
                <p className="mt-6 text-base leading-7 text-gray-600">
                  {translations[language].servicesDescription}
                </p>
              </div>
              <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
                {serviceTranslations.map((service, index) => (
                  <div key={index} className="relative pl-9">
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
