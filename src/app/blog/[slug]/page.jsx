
import SwiperClient from "../../components/SwiperClient";
import SwiperCustom from "../../components/SwiperCustom";

import { notFound } from 'next/navigation';
import { client } from "../../../studio/sanity/lib/client";
import PortableTextComponent from "../../components/PortableTextComponent";

export async function generateStaticParams() {
  const query = `*[_type == "post"]{ "slug": slug.current }`;
  const slugs = await client.fetch(query);
  return slugs.map((slug) => ({ slug: slug.slug }));
}

export default async function BlogPostPage({ params }) {
  const { slug } = params;
  const query = `
  *[_type == "post" && slug.current == $slug][0]{
    title,
    publishedAt,
    mainImage {
      asset->{
        url
      }
    },
    gallery[] {
      asset->{
        url
      }
    },
    description,
    buttonText,
    href,
    image {
      asset->{
        url
      },
      alt
    },
    body
  }
`;
  const post = await client.fetch(query, { slug });
  if (!post) {
    notFound();
  }
  const queryLatest = `
  *[_type == "post"] | order(publishedAt desc)[0...3] {
    title,
    slug,
    price,
      gallery[] {
      asset->{
        url
      }
    },
    installment,
    buttonText,
    mainImage {
      asset->{
        url
      }
    }
  }
`;

  const latestPosts = await client.fetch(queryLatest);

  const formattedDate = post.publishedAt ? new Date(post.publishedAt).toISOString().split("T")[0] : "تاريخ غير متوفر";
  return (
    <div className="container mx-auto  my-[120px] flex justify-between flex-col">
      <div className="mb-[120px] home-swiper">

        <SwiperClient images={Array.isArray(post.gallery) ? post.gallery.map((item) => item.asset.url) : []} />
      </div>
      <div className="flex flex-col gap-[32px] flex-1">
        <div className="flex flex-col gap-[16px]">
          <div className="flex flex-col gap-[8px]">
            <span className="text-[#B7B7B7] font-medium text-[16px]">
              الرئيسية / المقال
            </span>
            <h1 className="text-[50px] font-bold !text-[#DD3B4A]">
              {post.title}
            </h1>
          </div>
          <span className="text-[#B7B7B7] font-normal text-[18px] underline ">
            {formattedDate}
          </span>

          <PortableTextComponent value={post.body} />
        </div>
      </div>

      <SwiperCustom swiperData={latestPosts} />

    </div>
  );
}
