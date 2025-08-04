import Image from "next/image";
import Link from "next/link";
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

  console.log(padding, "padding");
  const formattedDate = date
    ? new Date(date).toLocaleDateString("en-EG", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    : "تاريخ غير متوفر";

  return (
    <div
      style={{ padding: padding }}
      className='flex flex-col shadow-sm border border-gray-200 rounded-[8px] bg-white h-[551px]'
    >
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
          className={`w-full h-[231px] ${padding ? "0px" : "p-[24px]"
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
        className="flex-1 flex flex-col card-body ">
        <h5 className="text-[#DD3B4A] font-bold  text-[30px]">{title}</h5>
        <div className="flex flex-col   text-muted gap-[8px] mb-[18px]">
          <div className="flex gap-[4px] ">
            {Icon && <Icon size={24} className="text-muted text-[#B7B7B7]" />}
            <small className="text-[#A5A5A5] font-medium text-[14px]">
              {user}
            </small>
          </div>

          {formattedDate && (
            <div className="flex  gap-[4px]">
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
        <p className="text-[#707070] text-[18px] font-normal">{description}</p>
        {buttonText && (
          <Link href={href} className="mt-auto">
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
              className="w-full bg-[#DD3B4A] text-white font-bold py-2 text-[18px] rounded-md mt-auto hover:bg-red-700 transition-colors mt-auto"
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
