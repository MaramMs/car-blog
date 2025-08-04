// "use client";
// import { useEffect, useState } from "react";
// import { Alert, Col, Container, Row } from "react-bootstrap";
// import { filterPosts } from "../../studio/sanity/lib/FilterByModelOrYear";
// import { getAllCarModels } from "../../studio/sanity/lib/getCarModal";
// import CarCard from "./Card";
// import CategoryTabs from "./CategoryTab";
// import Filter from "./Filter";
// import FilterModal from "./FilterModal";

// export default function PostsWithFilter({ posts, searchTerm,setSearchTerm }) {
//   const [filteredResults, setFilteredResults] = useState(posts);
//   const [selectedModels, setSelectedModels] = useState([]);
//   const [yearRange, setYearRange] = useState([2000, 2025]);
//   const [activeCategory, setActiveCategory] = useState("all");
//   const [models, setModels] = useState([]);

//   console.log(yearRange, 'yearRange from post')
//   useEffect(() => {
//     const fetchModels = async () => {
//       const data = await getAllCarModels();
//       setModels(data);
//     };
//     fetchModels();
//   }, []);

//   const handleFilter = async () => {
//     const modelIds = selectedModels.map((m) => m._id);
//     const [minYear, maxYear] = yearRange;
//     console.log(minYear,'minYear from post')
//     console.log(maxYear,'minYear from post')

//     const filterParams = { modelIds, minYear, maxYear };
//     const filtered = await filterPosts(filterParams);
//     setFilteredResults(filtered);
//   };

//   const finalPosts = filteredResults.filter((post) => {
//   const matchesCategory =
//     activeCategory === "all" || post.category?.slug?.current === activeCategory;

//   const matchesSearch = post.title?.includes(searchTerm) || 
//     post.body?.some((block) =>
//       block?.children?.some((child) =>
//         child?.text?.toLowerCase()?.includes(searchTerm.toLowerCase())
//       )
//     );

//   return matchesCategory && matchesSearch;
// });

//   return (
//     <div className="flex flex-col gap-[40px] mb-[120px]">
//       <Row>
//         <Col sm={10} md={10}>
//           <CategoryTabs onChange={setActiveCategory} />
//         </Col>
//         <Col sm={2} md={2}>
//           <Filter />
//         </Col>
//       </Row>

//       <Row className="g-4 align-items-start">
//         <Col md={10}>
//           <Row className="g-4">
//             {finalPosts.length > 0 ? (
//               finalPosts.map((item, index) => {
//                 const firstBlock = item.body?.[0];
//                 const description =
//                   firstBlock?.children?.[0]?.text?.slice(0, 100) + "..." || "";
//                 const imageUrl =
//                   item.mainImage?.asset?.url || "/fallback.jpg";
//                 return (
//                   <Col md={6} key={index}>
//                     <CarCard
//                       image={imageUrl}
//                       title={item?.title}
//                       date={item?.publishedAt}
//                       slug={item?.slug?.current}
//                       description={description}
//                       buttonText="اقرأ المزيد"
//                       padding="p-0"
//                       href={`/blog/${item?.slug?.current}`}
//                     />
//                   </Col>
//                 );
//               })
//             ) : (
//                     <Container className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
//         <Alert  className="text-center bg-[#DD3B4A]">
//           لا توجد بيانات حالياً.
//         </Alert>
//       </Container>
//             )}
//           </Row>
//         </Col>

//         <Col md={2}>
//           <FilterModal
//             models={models}
//             selectedModels={selectedModels}
//             setSelectedModels={setSelectedModels}
//             yearRange={yearRange}
//             setYearRange={setYearRange}
//             handleFilter={handleFilter}
//           />
//         </Col>
//       </Row>
//     </div>
//   );
// }


"use client";
import { useEffect, useState } from "react";
import { filterPosts } from "../../studio/sanity/lib/FilterByModelOrYear";
import { getAllCarModels } from "../../studio/sanity/lib/getCarModal";
import CarCard from "./Card";
import CategoryTabs from "./CategoryTab";
import Filter from "./Filter";
import FilterModal from "./FilterModal";

export default function PostsWithFilter({ posts, searchTerm}) {
  const [filteredResults, setFilteredResults] = useState(posts);
  const [selectedModels, setSelectedModels] = useState([]);
  const [yearRange, setYearRange] = useState([2000, 2025]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [models, setModels] = useState([]);

  useEffect(() => {
    const fetchModels = async () => {
      const data = await getAllCarModels();
      setModels(data);
    };
    fetchModels();
  }, []);

  
  const handleFilter = async () => {
    const modelIds = selectedModels.map((m) => m._id);
    const [minYear, maxYear] = yearRange;

    const filterParams = { modelIds, minYear, maxYear };
    const filtered = await filterPosts(filterParams);
    setFilteredResults(filtered);
  };

  const finalPosts = filteredResults.filter((post) => {
    const matchesCategory =
      activeCategory === "all" || post.category?.slug?.current === activeCategory;

    const matchesSearch =
      post.title?.includes(searchTerm) ||
      post.body?.some((block) =>
        block?.children?.some((child) =>
          child?.text?.toLowerCase()?.includes(searchTerm.toLowerCase())
        )
      );

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col gap-10 mb-[120px]">
      {/* Tabs + Filter */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <CategoryTabs onChange={setActiveCategory} />
        </div>
        <div className="w-full md:w-[200px]">
          <Filter />
        </div>
      </div>

      {/* Posts + FilterModal */}
      <div className="flex flex-col-reverse lg:flex-row gap-6 items-start">
        {/* Posts */}
        <div className="w-full lg:w-5/6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {finalPosts.length > 0 ? (
            finalPosts.map((item, index) => {
              console.log(item ,'item')
              const firstBlock = item.body?.[0];
              const description =
                firstBlock?.children?.[0]?.text?.slice(0, 100) + "..." || "";
              const imageUrl = item.mainImage?.asset?.url || "/fallback.jpg";

              return (
                <CarCard
                  key={index}
                  image={imageUrl}
                  title={item?.title}
                  date={item?.publishedAt}
                  slug={item?.slug?.current}
                  description={description}
                  buttonText="اقرأ المزيد"
                  padding="24px"
                  href={`/blog/${item?.slug?.current}`}
                />
              );
            })
          ) : (
            <div className="w-full flex justify-center items-center h-[50vh]">
              <div className="bg-[#DD3B4A] text-white text-center px-4 py-3 rounded-md">
                لا توجد بيانات حالياً.
              </div>
            </div>
          )}
        </div>

        {/* Filter Modal */}
        <div className="w-full lg:w-1/6">
          <FilterModal
            models={models}
            selectedModels={selectedModels}
            setSelectedModels={setSelectedModels}
            yearRange={yearRange}
            setYearRange={setYearRange}
            handleFilter={handleFilter}
          />
        </div>
      </div>
    </div>
  );
}
