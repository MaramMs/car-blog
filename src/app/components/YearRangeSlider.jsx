// "use client";
// import { useState } from "react";

// const YearRangeSlider = ({yearRange,setYearRange}) => {
//     const [minYear, maxYear] = yearRange;

//   const handleMinChange = (e) => {
//     const newMin = Number(e.target.value);
//     if (newMin <= maxYear) {
//       setYearRange([newMin, maxYear]);
//     }
//   };

//   const handleMaxChange = (e) => {
//     const newMax = Number(e.target.value);
//     if (newMax >= minYear) {
//       setYearRange([minYear, newMax]);
//     }
//   };
//   return (
//     <div className="w-full max-w-md mx-auto bg-white p-[8px]">
//       <div className="flex justify-between mb-2 text-sm text-gray-600">
//         <span>{minYear}</span>
//         <span>{maxYear}</span>
//       </div>

//       <div className="relative h-10">
//         <input
//           type="range"
//           min="2000"
//           max="2025"
//           value={minYear}
//           onChange={handleMaxChange}
//           className="absolute z-10 w-full h-2 bg-transparent appearance-none pointer-events-auto"
//         />
//         <input
//           type="range"
//           min="2000"
//           max="2025"
//           value={maxYear}
//           onChange={handleMinChange}
//           className="absolute z-10 w-full h-2 bg-transparent appearance-none pointer-events-auto"
//         />

//         <div className="h-2 bg-gray-300 rounded relative z-0" />
//       </div>

//       <div className="flex items-center justify-between">
//         <div className="flex gap-[4px]">
//           <span className="text-[18px] font-normal text-[#1B2532]">من:</span>
//           <p className="border border-[#D8D8D8] rounded-[5px] p-[4px] text-[#A5A5A5]">
//             {minYear}
//           </p>

//           {/* <input value='2015' className="border"/> */}
//         </div>
//         <div className="flex gap-[4px]">
//           <span className="text-[18px] font-normal text-[#1B2532]">إلى:</span>
//           <p className="border border-[#D8D8D8] rounded-[5px] p-[4px] text-[#A5A5A5]">
//             {maxYear}
//           </p>
//           {/* <input value='2025' className="border"/> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default YearRangeSlider;

"use client";
import React from "react";
import ReactSlider from "react-slider";

const YearRangeSlider = ({ yearRange, setYearRange }) => {
  return (
    <div className="w-full max-w-md mx-auto bg-white p-[8px]">
      <div className="flex justify-between mb-2 text-sm text-gray-600">
        <span>{yearRange[0]}</span>
        <span>{yearRange[1]}</span>
      </div>

      <ReactSlider
        className="w-full h-2 bg-gray-300 rounded"
        thumbClassName="bg-[#DD3B4A] h-4 w-4 rounded-full cursor-pointer"
        trackClassName="bg-[#DD3B4A]"
        min={2000}
        max={2025}
        step={1}
        value={yearRange}
        onChange={(value) => setYearRange(value)}
        minDistance={1} 
        withTracks={true}
      />

      <div className="flex items-center justify-between mt-4">
        <div className="flex gap-[4px]">
          <span className="text-[18px] font-normal text-[#1B2532]">من:</span>
          <p className="border border-[#D8D8D8] rounded-[5px] px-[8px] py-[4px] text-[#1B2532]">
            {yearRange[0]}
          </p>
        </div>
        <div className="flex gap-[4px]">
          <span className="text-[18px] font-normal text-[#1B2532]">إلى:</span>
          <p className="border border-[#D8D8D8] rounded-[5px] px-[8px] py-[4px] text-[#1B2532]">
            {yearRange[1]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default YearRangeSlider;
