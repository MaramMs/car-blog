"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import logo from "../../../public/assets/logo.jpg";
import { useLanguage } from "../contexts/LanguageContext";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const { language, toggleLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname()

  return (
    <nav className="bg-white shadow-[0px_0px_10px_0px_#00000012]">
      <div className="container mx-auto px-6 md:px-[138px] py-[19px] flex justify-between items-center">
        <Image
          src={logo}
          alt="logo"
          className="w-[98px] h-[42px] object-cover"
        />

        <ul className="hidden md:flex items-center gap-10">
          <li>
            <Link href="/" className={`${pathname === '/' ? '!text-[#DD3B4A]' :'!text-[#1B2532]'}  !text-[18px] !no-underline`} >
              الرئيسية
            </Link>
          </li>
          <li>
            <Link href="/services" className={`${pathname === '/services' ? '!text-[#DD3B4A]' :'!text-[#1B2532]'}  !text-[18px] !no-underline`}>
              خدمات كارزفد
            </Link>
          </li>
          <li>
            <Link href="/storyUsers" className={`${pathname === '/storyUsers' ? '!text-[#DD3B4A]' :'!text-[#1B2532]'}  !text-[18px] !no-underline`}>
              قصص وتجارب المستخدمين
            </Link>
          </li>
          <li>
            <Link href="/contact" className={`${pathname === '/contact' ? '!text-[#DD3B4A]' :'!text-[#1B2532]'}  !text-[18px] !no-underline`}>
              اتصل بنا
            </Link>
          </li>
        </ul>

        <div className="hidden md:block">
          <select
            value={language}
            onChange={(e) => toggleLanguage(e.target.value)}
            className=" rounded px-2 py-1 text-sm focus:outline-none"
          >
            <option value="ar">العربية</option>
            <option value="en">English</option>
          </select>
        </div>

        <button
          className="md:hidden text-2xl text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <MdClose /> : <MdMenu />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden flex flex-col px-6 pb-4 space-y-3 bg-white text-right">
          <Link href="/" className={`${pathname === '/' ? '!text-[#DD3B4A]' :'!text-[#1B2532]'}  !text-[18px] !no-underline`}>
            الرئيسية
          </Link>
          <Link href="/services" className={`${pathname === '/services' ? '!text-[#DD3B4A]' :'!text-[#1B2532]'}  !text-[18px] !no-underline`}>
            خدمات كارزفد
          </Link>
          <Link href="/storyUsers" className={`${pathname === '/storyUsers' ? '!text-[#DD3B4A]' :'!text-[#1B2532]'}  !text-[18px] !no-underline`}>
            قصص وتجارب المستخدمين
          </Link>
          <Link href="/contact" className={`${pathname === '/contact' ? '!text-[#DD3B4A]' :'!text-[#1B2532]'}  !text-[18px] !no-underline`}>
            اتصل بنا
          </Link>
          <select
            value={language}
            onChange={(e) => toggleLanguage(e.target.value)}
            className="mt-2 border border-gray-300 rounded px-2 py-1 text-sm w-full"
          >
            <option value="ar">العربية</option>
            <option value="en">English</option>
          </select>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

