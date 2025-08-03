// 'use client';
// import { useState } from "react";
// import PostsWithFilter from "./PostWithFilter";

// export default function PostsWithClientWrapper({ posts }){
//   const [searchTerm, setSearchTerm] = useState("");
//   return (
//     <PostsWithFilter
//       posts={posts}
//       searchTerm={searchTerm}
//       setSearchTerm={setSearchTerm}
//     />
//   );
// }



'use client';
import { useState } from "react";
import PostsWithFilter from "./PostWithFilter";
import hero from "../../../public/assets/hero.jpg";
import Hero from "./Hero";
// import { Container, Spinner } from "react-bootstrap";

export default function PostsWithClientWrapper({ posts,loading }) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Hero
        bg={hero}
        title="مدونة كارزفد نحو تجربة سيارات أذكى و أكثر وعياً"
        description="أخبار, مقالات, تحليلات حول عالم السيارات و خدمات كارزفد الذكية"
        image="/assets/hero-car.png"
        tags={["سيارات هجينة", "سيارات دفع رباعي", "سيارات كهربائية"]}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      /> 
      {
        loading ? (
        <div className="flex justify-center items-center h-[50vh]">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      // <Container className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
      //   <Spinner animation="border" variant="primary" />
      // </Container>
        ) : (
   <PostsWithFilter
        posts={posts}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
        )
      }
   
    </>
  );
}
