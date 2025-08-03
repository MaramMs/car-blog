// "use client";

// import React, { useState } from "react";
// import { SiInstagram } from "react-icons/si";
// import { SlSocialTwitter } from "react-icons/sl";
// import { CiFacebook } from "react-icons/ci";
// import emailjs from "@emailjs/browser";
// import { Spinner, Toast, ToastContainer, Form, Button } from "react-bootstrap";

// const ContactUs = () => {
//   const [showToast, setShowToast] = useState(false);
//   const [toastMessage, setToastMessage] = useState("");
//   const [toastVariant, setToastVariant] = useState("success");
//   const [isLoading, setIsLoading] = useState(false);
//   const [validated, setValidated] = useState(false);

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSend = (e) => {
//     e.preventDefault();
//     const form = e.currentTarget;

//     if (form.checkValidity() === false) {
//       e.stopPropagation();
//       setValidated(true);
//       return;
//     }

//     setValidated(true);
//     setIsLoading(true);

//     emailjs
//       .send(
//         "service_os666qi",
//         "template_ckq76sl",
//         {
//           from_name: formData.name,
//           from_email: formData.email,
//           phone: formData.phone,
//           subject: formData.subject,
//           message: formData.message,
//         },
//         "vd_pA3QA5hh_Pp_xH"
//       )
//       .then(
//         () => {
//           setToastMessage("✅ تم إرسال الرسالة بنجاح!");
//           setToastVariant("success");
//           setShowToast(true);
//           setFormData({
//             name: "",
//             email: "",
//             phone: "",
//             subject: "",
//             message: "",
//           });
//           setIsLoading(false);
//           setValidated(false);
//         },
//         (error) => {
//           setToastMessage("❌ حدث خطأ أثناء الإرسال، حاول مرة أخرى.");
//           setToastVariant("danger");
//           setShowToast(true);
//           setIsLoading(false);
//           console.error(error.text);
//         }
//       );
//   };

//   return (
//     <div className="bg-[#F8F8F8] p-[8px] md:p-[24px] mx-auto shadow-md mt-[32px] w-full md:w-[926px] rounded-[8px]">
//       <ToastContainer position="top-end" className="p-3">
//         <Toast
//           show={showToast}
//           onClose={() => setShowToast(false)}
//           bg={toastVariant}
//           delay={4000}
//           autohide
//         >
//           <Toast.Body className="text-white">{toastMessage}</Toast.Body>
//         </Toast>
//       </ToastContainer>

//       <Form
//         noValidate
//         validated={validated}
//         onSubmit={handleSend}
//         className="w-full md:w-[878px] flex flex-col gap-[32px]"
//       >
//         <Form.Group controlId="formName" className="flex flex-col gap-[8px]">
//           <Form.Control
//             required
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="الاسم"
//             className="w-full px-[8px] py-[12px] rounded-[8px] border border-[#B7B7B7] focus:outline-none focus:ring-2"
//           />
//           <Form.Control.Feedback type="invalid" className="text-[14px]">
//             الرجاء إدخال الاسم.
//           </Form.Control.Feedback>
//         </Form.Group>

//         <Form.Group controlId="formEmail" className="flex flex-col gap-[8px]">
//           <Form.Control
//             required
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="البريد الإلكتروني"
//             className="w-full px-[8px] py-[12px] rounded-[8px] border border-[#B7B7B7] focus:outline-none focus:ring-2"
//           />
//           <Form.Control.Feedback type="invalid" className="text-[14px]">
//             الرجاء إدخال بريد إلكتروني صالح.
//           </Form.Control.Feedback>
//         </Form.Group>

//         <Form.Group controlId="formPhone" className="flex flex-col gap-[8px]">
//           <Form.Control
//             required
//             type="text"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             placeholder="رقم الجوال"
//             className="w-full px-[8px] py-[12px] rounded-[8px] border border-[#B7B7B7] focus:outline-none focus:ring-2"
//           />
//           <Form.Control.Feedback type="invalid" className="text-[14px]">
//             الرجاء إدخال رقم جوال صحيح.
//           </Form.Control.Feedback>
//         </Form.Group>

//         <Form.Group controlId="formSubject" className="flex flex-col gap-[8px]">
//           <Form.Control
//             required
//             type="text"
//             name="subject"
//             value={formData.subject}
//             onChange={handleChange}
//             placeholder="عنوان الرسالة"
//             className="w-full px-[8px] py-[12px] rounded-[8px] border border-[#B7B7B7] focus:outline-none focus:ring-2"
//           />
//           <Form.Control.Feedback type="invalid" className="text-[14px]">
//             الرجاء إدخال عنوان الرسالة.
//           </Form.Control.Feedback>
//         </Form.Group>

//         <Form.Group controlId="formMessage" className="flex flex-col gap-[8px]">
//           <Form.Control
//             required
//             as="textarea"
//             rows={6}
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             placeholder="موضوع الرسالة"
//             className="w-full px-[8px] py-[12px] rounded-[8px] border border-[#B7B7B7] focus:outline-none focus:ring-2"
//           />
//           <Form.Control.Feedback type="invalid" className="text-[14px]">
//             الرجاء كتابة محتوى الرسالة.
//           </Form.Control.Feedback>
//         </Form.Group>

//         <button
//           type="submit"
//           disabled={isLoading}
//           className="w-full font-bold text-[18px] rounded-[8px] bg-[#DD3B4A] text-white py-[10px]"
//         >
//           {isLoading ? (
//             <>
//               <Spinner
//                 as="span"
//                 animation="border"
//                 size="sm"
//                 role="status"
//                 aria-hidden="true"
//               />{" "}
//               جاري الإرسال...
//             </>
//           ) : (
//             "أرسل"
//           )}
//         </button>

//         <div className="flex flex-col gap-[8px] md:flex items-center md:justify-between">
//           <div className="flex items-center gap-[4px]">
//             <p className="font-medium text-[16px] text-[#1B2532] m-0">
//               راسلنا و تابعنا عبر:
//             </p>
//             <div className="flex items-center gap-[16px]">
//               <SiInstagram className="text-[#DD3B4A] text-[20px]" />
//               <SlSocialTwitter className="text-[#DD3B4A] text-[20px]" />
//               <CiFacebook className="text-[#DD3B4A] text-[20px]" />
//             </div>
//           </div>

//           <p className="text-[#1B2532] font-medium text-[16px] text-center">
//             للاستفسارات العامة أو الدعم الفني:
//             <span className="text-[#DD3B4A] font-medium text-[16px]">
//               Info@carsvid.com
//             </span>
//           </p>
//         </div>
//       </Form>
//     </div>
//   );
// };

// export default ContactUs;

"use client";

import React, { useState } from "react";
import { SiInstagram } from "react-icons/si";
import { SlSocialTwitter } from "react-icons/sl";
import { CiFacebook } from "react-icons/ci";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success"); // "success" | "error"
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // clear error on change
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "الرجاء إدخال الاسم.";
    if (!formData.email.trim() || !formData.email.includes("@"))
      newErrors.email = "الرجاء إدخال بريد إلكتروني صالح.";
    if (!formData.phone.trim()) newErrors.phone = "الرجاء إدخال رقم جوال صحيح.";
    if (!formData.subject.trim()) newErrors.subject = "الرجاء إدخال عنوان الرسالة.";
    if (!formData.message.trim()) newErrors.message = "الرجاء كتابة محتوى الرسالة.";
    return newErrors;
  };

  const handleSend = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsLoading(true);

    emailjs
      .send(
        "service_os666qi",
        "template_ckq76sl",
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
        "vd_pA3QA5hh_Pp_xH"
      )
      .then(
        () => {
          setToastMessage("✅ تم إرسال الرسالة بنجاح!");
          setToastType("success");
          setShowToast(true);
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
          setIsLoading(false);
          setTimeout(() => setShowToast(false), 4000);
        },
        () => {
          setToastMessage("❌ حدث خطأ أثناء الإرسال، حاول مرة أخرى.");
          setToastType("error");
          setShowToast(true);
          setIsLoading(false);
          setTimeout(() => setShowToast(false), 4000);
        }
      );
  };

  return (
    <div className="bg-[#F8F8F8] p-4 md:p-6 mx-auto shadow-md mt-8 w-full md:w-[926px] rounded-lg">
      {/* Toast */}
      {showToast && (
        <div
          className={`mb-4 px-4 py-3 rounded text-white ${
            toastType === "success" ? "bg-green-600" : "bg-red-600"
          }`}
        >
          {toastMessage}
        </div>
      )}

      <form onSubmit={handleSend} className="w-full flex flex-col gap-8">
        {["name", "email", "phone", "subject"].map((field) => (
          <div key={field} className="flex flex-col gap-2">
            <input
              type={field === "email" ? "email" : "text"}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              placeholder={
                field === "name"
                  ? "الاسم"
                  : field === "email"
                  ? "البريد الإلكتروني"
                  : field === "phone"
                  ? "رقم الجوال"
                  : "عنوان الرسالة"
              }
              className="w-full px-3 py-3 rounded border border-[#B7B7B7] focus:outline-none focus:ring-2"
            />
            {errors[field] && (
              <span className="text-sm text-red-500">{errors[field]}</span>
            )}
          </div>
        ))}

        <div className="flex flex-col gap-2">
          <textarea
            name="message"
            rows={6}
            value={formData.message}
            onChange={handleChange}
            placeholder="موضوع الرسالة"
            className="w-full px-3 py-3 rounded border border-[#B7B7B7] focus:outline-none focus:ring-2"
          />
          {errors.message && (
            <span className="text-sm text-red-500">{errors.message}</span>
          )}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full font-bold text-lg rounded bg-[#DD3B4A] text-white py-3 disabled:opacity-50"
        >
          {isLoading ? (
            <div className="flex items-center justify-center gap-2">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>جاري الإرسال...</span>
            </div>
          ) : (
            "أرسل"
          )}
        </button>

        {/* Social & Info */}
        <div className="flex flex-col gap-2 md:flex-row items-center justify-between text-center md:text-start">
          <div className="flex items-center gap-2">
            <p className="font-medium text-base text-[#1B2532] m-0">
              راسلنا و تابعنا عبر:
            </p>
            <div className="flex items-center gap-4">
              <SiInstagram className="text-[#DD3B4A] text-xl" />
              <SlSocialTwitter className="text-[#DD3B4A] text-xl" />
              <CiFacebook className="text-[#DD3B4A] text-xl" />
            </div>
          </div>

          <p className="text-[#1B2532] font-medium text-base">
            للاستفسارات العامة أو الدعم الفني:{" "}
            <span className="text-[#DD3B4A]">Info@carsvid.com</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
