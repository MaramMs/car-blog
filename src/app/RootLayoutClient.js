'use client';
import "./globals.css";
// import 'bootstrap/dist/css/bootstrap.min.css';


import { useLanguage } from "./contexts/LanguageContext";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default function RootLayoutClient({ children }) {
  const { language } = useLanguage();

  return (
    <div
      dir={language === 'ar' ? 'rtl' : 'ltr'}
      lang={language}
      className="min-h-screen flex flex-col"
    >
      <NavBar />
      <main className="flex-1 ">{children}</main>
      <Footer />
    </div>
  );
}
