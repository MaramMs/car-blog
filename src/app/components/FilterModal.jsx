"use client";
import React, { useEffect, useState } from "react";
import { FiFilter } from "react-icons/fi";
import YearRangeSlider from "./YearRangeSlider";
import { IoIosArrowDown } from "react-icons/io";
// import { getAllCarModels } from '../../sanity/lib/getCarModal';

const FilterModal = ({
  models,
  selectedModels,
  setSelectedModels,
  yearRange,
  setYearRange,
  handleFilter,
}) => {
  const [openModel, setOpenModel] = useState(false);
  const [openYear, setOpenYear] = useState(false);
  const toggleModel = (model) => {
    const alreadySelected = selectedModels.some((m) => m._id === model._id);
    if (alreadySelected) {
      setSelectedModels(selectedModels.filter((m) => m._id !== model._id));
    } else {
      setSelectedModels([...selectedModels, model]);
    }
  };

  console.log(models , 'models from filter')
  return (
    <div className="bg-[#F8F8F8] rounded-[8px] shadow-[0px_1px_2px_0px_#0000000D]  px-[16px] py-[26px] relative z-0 flex flex-col ">
      <div className="flex gap-[4px] items-center mb-[24px]">
        <FiFilter className="text-[#DD3B4A] text-[24px]" />
        <span className="text-[#DD3B4A] text-[18px] font-medium">
          فلترة النتائج
        </span>
      </div>

      <div className="relative z-10 mb-[24px]">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => {
            setOpenModel(!openModel);
            setOpenYear(false);
          }}
        >
          <p className="text-[#1B2532] font-medium text-[14px]">
            موديل السيارة
          </p>
          <IoIosArrowDown className="text-[#1B253280]" />
        </div>

        {openModel && (
          <div className="mt-2 w-full rounded-[8px] bg-white p-[8px] flex flex-col gap-[19px] mx-auto">
            {models.map((label, idx) => {
              console.log(label, "label");
              return (
                <label key={idx} className="flex items-center gap-2 mb-2">
                  <input
                    type="checkbox"
                    className="form-checkbox text-red-600"
                    onChange={() => toggleModel(label)}
                  />
                  <span>{label.title}</span>
                </label>
              );
            })}
          </div>
        )}
      </div>

      <div className="relative z-10 mb-[24px]">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setOpenYear(!openYear)}
        >
          <p className="text-[#1B2532] font-medium text-[14px]">سنة الصنع</p>
          <IoIosArrowDown className="text-[#1B253280]" />
        </div>

        {openYear && (
          <div className="mt-4 z-20 relative">
            <YearRangeSlider yearRange={yearRange} setYearRange={setYearRange}/>
          </div>
        )}
      </div>

      <div className="mt-auto pt-4">
        <button
          onClick={handleFilter}
          className="bg-[#1B2532] rounded-[8px] w-full text-white text-[18px] font-bold py-2 m-auto flex justify-center items-center cursor-pointer"
        >
          فلترة
        </button>
      </div>
    </div>
  );
};

export default FilterModal;
