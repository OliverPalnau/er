"use client";

import { Dialog, DialogPanel } from "@headlessui/react";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import { useState } from "react";
import logo from "@/public/images/regulen-logo-white.svg";
import usFlag from "@/public/images/us-flag.png";
import cnFlag from "@/public/images/cn-flag.png";
import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { translations } from "@/translations/translations";
import { Button } from "./ui/moving-border";

export default function Header() {
  const { language, switchLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);

  const handleLanguageSwitch = (lang: string) => {
    switchLanguage(lang);
    setLanguageMenuOpen(false);
  };

  return (
    <header className="bg-black relative z-50">
      <nav
        className="mx-auto flex items-center justify-between gap-x-6 p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5 flex items-center">
            <span className="sr-only">Regulen</span>
            <Image
              className="h-8 w-auto"
              src={logo}
              alt="Regulen"
              width={32}
              height={32}
            />
          </a>
        </div>
        <div className="flex flex-1 items-center justify-end gap-x-6">
          <Button className="text-xs font-base" borderRadius="1.75rem">
            {translations[language].contact}
          </Button>
          <div className="relative">
            <button
              type="button"
              className="flex items-center gap-x-1"
              onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
            >
              <Image
                src={language === "en" ? usFlag : cnFlag}
                alt={language === "en" ? "English" : "中文"}
                width={24}
                height={24}
                className="h-6 w-6 rounded-full"
              />
              <ChevronDownIcon
                className="h-5 w-5 text-white"
                aria-hidden="true"
              />
            </button>
            {languageMenuOpen && (
              <div className="absolute right-0 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                <div className="py-1">
                  <button
                    onClick={() => handleLanguageSwitch("en")}
                    className="flex items-center gap-x-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <Image
                      src={usFlag}
                      alt="English"
                      width={24}
                      height={24}
                      className="h-6 w-6 rounded-full"
                    />
                    <span>English</span>
                  </button>
                  <button
                    onClick={() => handleLanguageSwitch("zh")}
                    className="flex items-center gap-x-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <Image
                      src={cnFlag}
                      alt="中文"
                      width={24}
                      height={24}
                      className="h-6 w-6 rounded-full"
                    />
                    <span>中文</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center gap-x-6">
            <a href="/" className="-m-1.5 p-1.5 flex items-center">
              <span className="sr-only">Regulen</span>
              <Image
                className="h-8 w-auto"
                src={logo}
                alt="Regulen"
                width={32}
                height={32}
              />
              <span className="ml-2 text-white text-xl font-bold">Regulen</span>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
