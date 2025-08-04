"use client";
import { useEffect, useState } from "react";
import { client } from "../../studio/sanity/lib/client";

export default function CategoryTabs({ onChange }) {
  const [categories, setCategories] = useState([]);
  const [active, setActive] = useState("all");

  useEffect(() => {
    async function fetchCategories() {
      const data = await client.fetch(`*[_type == "category"]{
        title,
        slug
      }`);
      setCategories(data);
    }
    fetchCategories();
  }, []);

  const handleClick = (slug) => {
    setActive(slug);
    onChange(slug); 
  };

  return (
    <div className="flex overflow-x-auto gap-[10px] md:gap-[18px] border-b-[2px] border-b-[#D0D5DD] pb-[8px]">
      <div
        onClick={() => handleClick("all")}
        className={`cursor-pointer text-sm font-medium text-[12px] md:text-[18px] ${
          active === "all"
            ? "border-b-2 border-[#DD3B4A] text-[#DD3B4A]"
            : "text-[#A5A5A5] hover:text-[#DD3B4A]"
        }`}
      >
        الكل
      </div>

      {categories.map((cat) => (
        <div
          key={cat.slug.current}
          onClick={() => handleClick(cat.slug.current)}
          className={`cursor-pointer text-sm font-medium flex items-center gap-[10px] text-[12px] md:text-[18px] ${
            active === cat.slug.current
              ? "border-b-2 border-[#DD3B4A] text-[#DD3B4A]"
              : "text-[#A5A5A5] hover:text-[#DD3B4A]"
          }`}
        >
          {cat.title}
        </div>
      ))}
    </div>
  );
}
