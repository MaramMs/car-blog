import Image from "next/image";
import Link from "next/link";
import React from "react";
// import { Card, Button } from "react-bootstrap";
import { IoCalendarOutline } from "react-icons/io5";
import arrow from "../../../public/assets/arrow.png";

const CarCard = ({
  image,
  title,
  padding,
  date,
  user,
  installment,
  description,
  onButtonClick,
  slug,
  href,
  price,
  question,
  icon: Icon = null,
  buttonText = null,
}) => {
  console.log(image, "image date");

  const formattedDate = date
    ? new Date(date).toLocaleDateString("en-EG", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "تاريخ غير متوفر";

  return (
    <div
      className={`shadow-sm border border-gray-200 rounded-[8px] bg-white ${
        padding ? `pt-[${padding}]` : ""
      }`}
    >
    {/* <Card
    style={{ paddingTop: padding }}
      className='shadow-sm border border-secondary-subtle rounded-[8px]  bg-whit'
    > */}
      {question && (
        <>
          <p className="flex justify-center items-center font-normal text-[30px] text-[#1B2532] mt-[16px] mb-0">
            ودك
            <span className="text-[#DD3B4A] text-[30px] font-bold">
              {question}
            </span>
            ؟
          </p>

          <div className="relative w-full h-[231px]">
            <div className="pt-[25px] w-full h-[210px]">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[130px] bg-[#DD3B4A] rounded-t-full z-[1] overflow-hidden "></div>
              <div className="absolute right-[135px]">
                <Image src={arrow} width={49} height={57} />
              </div>
              <Image
                src={image}
                alt="card image"
                width={299}
                height={174}
                className="absolute bottom-[22px] left-1/2 -translate-x-1/2 z-[2] w-[299px] h-[174px] object-cover"
              />
            </div>
          </div>
        </>
      )}
      {!question && (
        <div
          className={`w-full h-[231px] ${
            padding ? "0px" : "p-[24px]"
          }  mb-[32px]`}
        >
          <img
            src={image}
            alt="card image"
            width={406}
            height={231}
            className="w-full h-[231px] rounded-[24px] object-cover"
          />
        </div>
      )}
      <div 
      style={{ paddingTop: padding }}
      className="px-[24] card-body ">
        <h5 className="text-danger fw-bold fs-3">{title}</h5>
        <div className="d-flex flex-col   text-muted gap-[8px] mb-[18px]">
          <div className="d-flex gap-[4px] ">
            {Icon && <Icon size={24} className="text-muted text-[#B7B7B7]" />}
            <small className="text-[#A5A5A5] font-medium text-[14px]">
              {user}
            </small>
          </div>

          {formattedDate && (
            <div className="d-flex  gap-[4px]">
              <IoCalendarOutline className="text-[24px] text-[#B7B7B7]" />
              {formattedDate && (
                <small className="text-[#B7B7B7] font-medium text-[14px]">
                  {formattedDate}
                </small>
              )}
            </div>
          )}
        </div>
        {price && (
          <div className="flex flex-col gap-[4px] mt-[16px]">
            <p className="text-[18px] text-[#1B2532]">
              سعر السيارة:
              <span className="font-bold">{price} ر.س </span>
            </p>
            <p className="text-[18px] text-[#1B2532]">
              سعر القسط :<span className="font-bold">{installment} ر.س </span>
            </p>
          </div>
        )}
        <p className="text-[#1B2532] text-[18px] font-normal">{description}</p>
        {buttonText && (
          <Link href={href}>
            {/* <Button
              variant="danger"
              className="w-100 fw-bold py-2"
              style={{ fontSize: "18px" }}
              onClick={onButtonClick}
            >
              {buttonText}
            </Button> */}
                     <button
              onClick={onButtonClick}
              className="w-full bg-red-600 text-white font-bold py-2 text-[18px] rounded-md mt-4 hover:bg-red-700 transition-colors"
            >
              {buttonText}
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default CarCard;
