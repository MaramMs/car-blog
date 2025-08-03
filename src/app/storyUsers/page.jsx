// 'use client'; 

// import { useEffect, useState } from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import { CiUser } from "react-icons/ci";
// import { getClients } from "../../studio/sanity/lib/getClients";
// import CarCard from "../components/Card";
// import Filter from "../components/Filter";

// const StoryUsers = () => {
//   const [clients, setClients] = useState([]);

//   console.log(clients,'clients')

//   useEffect(() => {
//     const fetchClients = async () => {
//       const data = await getClients();
//       setClients(data);
//     };

//     fetchClients();
//   }, []);

//   return (
//     <div className="container mx-auto mt-[30px] md:mt-[120px] md:pb-[119px] pb-[100px]">
//       <div className="flex flex-wrap justify-between items-center mb-[47px]">
//         <p className="text-[#DD3B4A] font-bold text-[20px] md:text-[40px]">
//           قصص و تجارب المستخدمين
//         </p>

//         <Filter />
//       </div>

//       <Container>
//         <Row className="g-4">
//           {clients.map((client, index) => (
//             <Col key={index} md={4}>
//               <CarCard
//                 padding="p-0"
//                 image={client.mainImage?.asset?.url} 
//                 title="" 
//                 user={client?.name}
//                 date={client?.publishedAt}
//                 description={client?.message}
//                 icon={CiUser}
//               />
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default StoryUsers;

'use client';

import { useEffect, useState } from "react";
import { CiUser } from "react-icons/ci";
import { getClients } from "../../studio/sanity/lib/getClients";
import CarCard from "../components/Card";
import Filter from "../components/Filter";

const StoryUsers = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      const data = await getClients();
      setClients(data);
    };

    fetchClients();
  }, []);

  return (
    <div className="container mx-auto mt-[30px] md:mt-[120px] md:pb-[119px] pb-[100px] px-4">
      <div className="flex flex-wrap justify-between items-center mb-[47px]">
        <p className="text-[#DD3B4A] font-bold text-[20px] md:text-[40px]">
          قصص و تجارب المستخدمين
        </p>
        <Filter />
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {clients.map((client, index) => (
          <div key={index}>
            <CarCard
              padding="p-0"
              image={client.mainImage?.asset?.url}
              title=""
              user={client?.name}
              date={client?.publishedAt}
              description={client?.message}
              icon={CiUser}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoryUsers;
