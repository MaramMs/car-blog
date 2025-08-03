"use client";

import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("ar");

  const toggleLanguage = (lang) => {
    if (lang) {
      setLanguage(lang);
    } else {
      setLanguage((prev) => (prev === "ar" ? "en" : "ar"));
    }
  };
  

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
    {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
