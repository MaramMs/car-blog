'use client';
import { useEffect, useState } from "react";
import PostsWithFilter from "./PostWithFilter";
import hero from "../../../public/assets/hero.jpg";
import Hero from "./Hero";
import { getAllCarModels } from "@/studio/sanity/lib/getCarModal";
export default function PostsWithClientWrapper({ posts,loading }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [models, setModels] = useState([]);

  useEffect(() => {
    const fetchModels = async () => {
      const data = await getAllCarModels();
      setModels(data);
    };
    fetchModels();
  }, []);

  return (
    <>
      <Hero
        bg={hero}
        title="مدونة كارزفد نحو تجربة سيارات أذكى و أكثر وعياً"
        description="أخبار, مقالات, تحليلات حول عالم السيارات و خدمات كارزفد الذكية"
        image="/assets/hero-car.png"
        tags={models.map((model) => model.title)}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      /> 
      {
        loading ? (
        <div className="flex justify-center items-center h-[50vh]">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
  
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
