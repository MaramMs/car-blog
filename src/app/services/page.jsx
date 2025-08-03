// 'use client'
// import { useEffect, useState } from "react";
// import { Col, Row } from "react-bootstrap";
// import serCard from "../../../public/assets/cars/servCar.jpg";
// import { getServices } from "../../studio/sanity/lib/getServices";
// import CarCard from "../components/Card";
// import Hero from "../components/Hero";

// const Services = () => {
//    const [servicesData, setServicesData] = useState([]);
  
//     console.log(servicesData,'servicesData')
  
//     useEffect(() => {
//       const fetchServices = async () => {
//         const data = await getServices();
//         setServicesData(data);
//       };
  
//       fetchServices();
//     }, []);
//   const classes = "line-height: 150%";
//   return (
//     <div className="mb-[100px] md:mb-[120px]">
//       <Hero
//         minHeight={537}
//         classes={classes}
//         width={474}
//         shadow="linear-gradient(270deg, rgba(0, 0, 0, 0.6) 50%, rgba(102, 102, 102, 0.3) 202.36%)"
//         bg={serCard}
//         title="كل خدمات السيـارات فــــي مكـــان واحـــد"
//         description="نوفر لك كل ما تحتاجه لشراء وبيـــع وتمويـــل السيـــارات، بخطــــوات بسيطة وتجربة موثوقة. اكتشف خدماتنا الآن واستمتع بتجربـــــــة لا مثيــــــل لها!"
//       />

//       <div className="container mx-auto">
//         <Row>
//           {servicesData.map((item, index) => {
//             console.log(item?.mainImage?.asset?.url, "item");
//             return (
//               <Col key={index} xs={12} sm={6} md={4}>
//                 <CarCard
//                   question={item.question}
//                   image={item?.mainImage?.asset?.url}
//                   title={item?.title}
//                   date={item?.publishedAt}
//                   padding="28px"
//                   description={item?.description}
//                   buttonText="اقرأ المزيد"
//                   href={`/services/${item?.slug?.current}`}
//                 />
//               </Col>
//             );
//           })}
//         </Row>
//       </div>
//     </div>
//   );
// };

// export default Services;


'use client'
import { useEffect, useState } from "react";
import serCard from "../../../public/assets/cars/servCar.jpg";
import { getServices } from "../../studio/sanity/lib/getServices";
import CarCard from "../components/Card";
import Hero from "../components/Hero";

const Services = () => {
  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      const data = await getServices();
      setServicesData(data);
    };

    fetchServices();
  }, []);

  const classes = "line-height: 150%";

  return (
    <div className="mb-[100px] md:mb-[120px]">
      <Hero
        minHeight={537}
        classes={classes}
        width={474}
        shadow="linear-gradient(270deg, rgba(0, 0, 0, 0.6) 50%, rgba(102, 102, 102, 0.3) 202.36%)"
        bg={serCard}
        title="كل خدمات السيـارات فــــي مكـــان واحـــد"
        description="نوفر لك كل ما تحتاجه لشراء وبيـــع وتمويـــل السيـــارات، بخطــــوات بسيطة وتجربة موثوقة. اكتشف خدماتنا الآن واستمتع بتجربـــــــة لا مثيــــــل لها!"
      />

      <div className="container mx-auto px-4 mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {servicesData.map((item, index) => (
            <div key={index}>
              <CarCard
                question={item.question}
                image={item?.mainImage?.asset?.url}
                title={item?.title}
                date={item?.publishedAt}
                padding="28px"
                description={item?.description}
                buttonText="اقرأ المزيد"
                href={`/services/${item?.slug?.current}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
