import React from "react";
import ContactUs from "../components/ContactUs";

const Contact = () => {
  return (
    <div className="container mx-auto md:my-[120px] my-[100px]">
      <div className="flex flex-col gap-[16px]">
        <h3 className="text-[20px] md:!text-[30px] !font-bold !text-[#1B2532] ">
          <span className="!text-[#DD3B4A] !font-bold"> مرحبًا بك </span>
          في كارزفد!
        </h3>
        <p className="text-[#1B2532] font-normal text-[18px] m-0">
          نحن هنا للإجابة على استفساراتك وتقديم الدعم الذي تحتاجه.
        </p>
      </div>
      <ContactUs />
    </div>
  );
};

export default Contact;
