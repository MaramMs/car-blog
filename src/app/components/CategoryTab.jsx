// "use client";
// import { TbCategory } from "react-icons/tb";
// import { useState } from "react";

// // const categories = [
// //   { label: "الكل", icon: <TbCategory /> },
// //   { label: "سيارات صغيرة" },
// //   { label: " سيدان" },
// //   { label: " سيارات فاخرة" },
// //   { label: "سيارات رياضية" },
// //   { label: "كروس أوفر" },
// //   { label: "بيك أب" },
// //   { label: "ميني فان" },
// //   { label: "سيارات كهربائية" },
// // ];
// const categories = await client.fetch(`*[_type == "category"]`);

// const CategoryTabs = () => {
//   const [active, setActive] = useState("الكل");

//   return (
//     <div className="flex  overflow-x-auto gap-[10px] md:gap-[18px] border-b-[2px] border-b-[#D0D5DD]  pb-[8px]">
//       {categories.map((cat) => (
//         <div
//           key={cat.label}
//           onClick={() => setActive(cat.label)}
//           className={`cursor-pointer   text-sm font-medium flex items-center gap-[18px] 
//             ${
//               active === cat.label
//                 ? "border-b-2 border-[#DD3B4A] text-[#DD3B4A] font-medium text-[12px] md:text-[18px]"
//                 : "text-[#A5A5A5] font-medium text-[12px] md:text-[18px] hover:text-[#DD3B4A]"
//             }
//           `}
//         >
//           {cat.icon && <span className="text-lg">{cat.icon}</span>}
//           {cat.label}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CategoryTabs;



// "use client";
// import { useState, useEffect } from "react";
// import { client } from "../../sanity/lib/client"; // تأكدي من المسار الصحيح
// import { TbCategory } from "react-icons/tb";

// const CategoryTabs = () => {
//   const [categories, setCategories] = useState([]);
//   const [active, setActive] = useState("all");

//   useEffect(() => {
//     const fetchCategories = async () => {
//       const data = await client.fetch(`*[_type == "category"]{_id, title, slug}`);
//       console.log(data , 'data from cate')
//       setCategories(data);
//     };
//     fetchCategories();
//   }, []);

//   return (
//     <div className="flex overflow-x-auto gap-[10px] md:gap-[18px] border-b-[2px] border-b-[#D0D5DD] pb-[8px]">
//       {/* زر الكل */}
//       <div
//         onClick={() => setActive("all")}
//         className={`cursor-pointer flex items-center gap-[8px] ${
//           active === "all"
//             ? "border-b-2 border-[#DD3B4A] text-[#DD3B4A] font-medium text-[14px]"
//             : "text-[#A5A5A5] font-medium text-[14px] hover:text-[#DD3B4A]"
//         }`}
//       >
//         <TbCategory />
//         الكل
//       </div>

//       {/* التصنيفات القادمة من Sanity */}
//       {categories.map((cat) => (
//         <div
//           key={cat._id}
//           onClick={() => setActive(cat.slug.current)}
//           className={`cursor-pointer text-sm font-medium flex items-center gap-[8px] ${
//             active === cat.slug.current
//               ? "border-b-2 border-[#DD3B4A] text-[#DD3B4A] font-medium text-[14px]"
//               : "text-[#A5A5A5] font-medium text-[14px] hover:text-[#DD3B4A]"
//           }`}
//         >
//           {cat.title}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CategoryTabs;







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
    onChange(slug); // ← نحدث التصنيف في المكون الأب
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
