"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

type LanguageContextType = {
  language: string;
  switchLanguage: (lang: string) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [language, setLanguage] = useState<string>("en");

  useEffect(() => {
    const pathLang = pathname.split("/")[1];
    if (pathLang === "cn") {
      setLanguage("zh");
    } else if (pathLang === "en") {
      setLanguage("en");
    } else {
      setLanguage("en");
    }
  }, [pathname]);

  const switchLanguage = (lang: string) => {
    setLanguage(lang);
    const newPath = lang === "zh" ? "/cn" : lang === "en" ? "/en" : "/";
    router.push(newPath);
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
