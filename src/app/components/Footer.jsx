import Image from "next/image";
import React from "react";
import { MdOutlineCopyright } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { LuTwitter } from "react-icons/lu";
import { CiFacebook } from "react-icons/ci";

import logo from "../../../public/assets/logo-footer.png";
import Link from "next/link";
import compOne from "../../../public/assets/company1.png";
import compTwo from "../../../public/assets/company2.png";
import compThree from "../../../public/assets/company3.jpg";
import compFour from "../../../public/assets/company4.png";
import compFive from "../../../public/assets/company5.png";
import appStore from "../../../public/assets/app-store.png";
import googleStore from "../../../public/assets/google-store.png";
import { usePathname } from "next/navigation";

const Footer = () => {
   const pathname = usePathname();

  const links = [
    { text: "الرئيسية", href: "/" },
    { text: "خدمات كارزفد", href: "/services" },
    { text: "قصص وتجارب المستخدمين", href: "/storyUsers" },
    { text: "اتصل بنا", href: "/contact" },
  ];
  return (
    <footer className="!flex !flex-col">
      <div className="bg-[#F8F8F8]">
        <div className="container mx-auto py-[51px] px-4 flex flex-col gap-10 lg:flex-row lg:gap-[88px]">
          {/* Logo */}
          <div className="flex justify-center lg:block">
            <Image
              src={logo}
              width={99}
              height={42}
              objectFit="cover"
              className="h-[42px]"
              alt="logo"
            />
          </div>

       <ul className="flex flex-col gap-4 text-center lg:text-right list-none">
      {links.map((link, i) => (
        <li
          key={i}
          className={`
            relative pr-6 cursor-pointer
            before:absolute before:top-1/2 before:-translate-y-1/2
            before:h-2 before:w-2 before:rounded-full
            before:right-0
             !no-underline
            ${pathname === link.href ? "before:bg-[#DD3B4A] text-[#DD3B4A]" : "before:bg-black"}
          `}
        >
          <Link
            href={link.href}
            className={`text-[18px] block !no-underline ${
              pathname === link.href ? "!text-[#DD3B4A]" : "!text-[#1B2532] "
            } hover:text-[#DD3B4A]`}
          >
            {link.text}
          </Link>
        </li>
      ))}
    </ul>

          <div className="!flex !flex-col items-center">
            <div className="!flex !flex-col items-center">
              <div className="!flex gap-[10.5px]">
                <Image
                  src={compOne}
                  width={76}
                  height={49}
                  objectFit="cover"
                  alt="Company One"
                />
                <Image
                  src={compTwo}
                  width={76}
                  height={49}
                  objectFit="cover"
                  alt="Company Two"
                />
                <Image
                  src={compThree}
                  width={76}
                  height={49}
                  objectFit="cover"
                  alt="Company Three"
                />
              </div>
              <div className="flex gap-[10.5px] items-center mt-2">
                <Image
                  src={compFour}
                  width={76}
                  height={49}
                  objectFit="cover"
                  alt="Company Four"
                />
                <Image
                  src={compFive}
                  width={76}
                  height={49}
                  objectFit="cover"
                  alt="Company Five"
                />
              </div>
            </div>

            <p className="text-[#1B2532] text-[14px] font-normal text-center md:w-[53%] mt-4">
              كارزفد تطبيق سعودي موثق من وزارة الاستثمار ومنصة الأعمال السعودية
              برقم 102074602316278
            </p>
          </div>

          <div className="flex flex-col items-center lg:items-start gap-2">
            <p className="text-[16px] text-[#1B2532] font-medium">تابعنا على :</p>
            <div className="flex gap-4">
              <FaInstagram className="text-[#DD3B4A] text-[24px]" />
              <LuTwitter className="text-[#DD3B4A] text-[24px]" />
              <CiFacebook className="text-[#DD3B4A] text-[24px]" />
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-start gap-2">
            <p className="text-[#1B2532] font-medium text-[16px]">حمل التطبيق من:</p>
            <div className="flex flex-col gap-2">
              <Image
                src={appStore}
                width={99}
                height={23}
                className="object-contain"
                alt="App Store"
              />
              <Image
                src={googleStore}
                width={99}
                height={23}
                className="object-contain"
                alt="Google Play"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#1B2532] flex justify-center items-center gap-2 py-[28px] text-[#FFFFFF] text-[14px]">
        <MdOutlineCopyright />
        <p>جميع الحقوق محفوظة لدى كارزفد</p>
      </div>
    </footer>
  );
};

export default Footer;
