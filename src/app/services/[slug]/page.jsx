import { client } from "../../../studio/sanity/lib/client";
import PortableTextComponent from "../../components/PortableTextComponent";
import SwiperCustom from "../../components/SwiperCustom";

const swiperData = [
  {
    id: 1,
    image: "/assets/cars/adsCar.jpg",
    title: "تويوتا يارس",
    buttonText: "اطلب التمويل",
    href: "/contact",
    prices: [
      { title: "سعر السيارة", price: "60,000" },
      { title: "قسط  اول يبدا من :", price: "950" },
    ],
  },
  {
    id: 2,
    image: "/assets/cars/adsCar.jpg",
    title: "تويوتا يارس",
    buttonText: "اطلب التمويل",
    href: "/contact",
    prices: [
      { title: "سعر السيارة", price: "60,000" },
      { title: "قسط  اول يبدا من :", price: "950" },
    ],
  },
  {
    id: 3,
    image: "/assets/cars/adsCar.jpg",
    title: "تويوتا يارس",
    buttonText: "اطلب التمويل",
    href: "/contact",
    prices: [
      { title: "سعر السيارة", price: "60,000" },
      { title: "قسط  اول يبدا من :", price: "950" },
    ],
  },
  {
    id: 4,
    image: "/assets/cars/adsCar.jpg",
    title: "تويوتا يارس",
    buttonText: "اطلب التمويل",
    href: "/contact",
    prices: [
      { title: "سعر السيارة", price: "60,000" },
      { title: "قسط  اول يبدا من :", price: "950" },
    ],
  },
  {
    id: 5,
    image: "/assets/cars/adsCar.jpg",
    title: "تويوتا يارس",
    buttonText: "اطلب التمويل",
    href: "/contact",
    prices: [
      { title: "سعر السيارة", price: "60,000" },
      { title: "قسط  اول يبدا من :", price: "950" },
    ],
  },

  {
    id: 6,
    image: "/assets/cars/adsCar.jpg",
    title: "تويوتا يارس",
    buttonText: "اطلب التمويل",
    href: "/contact",
    prices: [
      { title: "سعر السيارة", price: "60,000" },
      { title: "قسط  اول يبدا من :", price: "950" },
    ],
  },
  {
    id: 7,
    image: "/assets/cars/adsCar.jpg",
    title: "تويوتا يارس",
    buttonText: "اطلب التمويل",
    href: "/contact",
    prices: [
      { title: "سعر السيارة", price: "60,000" },
      { title: "قسط  اول يبدا من :", price: "950" },
    ],
  },
  {
    id: 8,
    image: "/assets/cars/adsCar.jpg",
    title: "تويوتا يارس",
    buttonText: "اطلب التمويل",
    href: "/contact",
    prices: [
      { title: "سعر السيارة", price: "60,000" },
      { title: "قسط  اول يبدا من :", price: "950" },
    ],
  },
  {
    id: 9,
    image: "/assets/cars/adsCar.jpg",
    title: "تويوتا يارس",
    buttonText: "اطلب التمويل",
    href: "/contact",
    prices: [
      { title: "سعر السيارة", price: "60,000" },
      { title: "قسط  اول يبدا من :", price: "950" },
    ],
  },
  {
    id: 10,
    image: "/assets/cars/adsCar.jpg",
    title: "تويوتا يارس",
    buttonText: "اطلب التمويل",
    href: "/contact",
    prices: [
      { title: "سعر السيارة", price: "60,000" },
      { title: "قسط  اول يبدا من :", price: "950" },
    ],
  },
];
export async function generateStaticParams() {
  const query = `*[_type == "services"]{ "slug": slug.current }`;
  const slugs = await client.fetch(query);
  return slugs.map((slug) => ({ slug: slug.slug }));
}

export default async function ServiceDetails({ params }) {
  const slug = params.slug;
  const query = `*[_type == "services" && slug.current == $slug][0]{
    title,
      question,
      description,
      publishedAt,
      slug,
      mainImage{
      asset->{
      url
      }
      },
  body,
  }`;
  const service = await client.fetch(query, { slug });
  console.log("service", service);
  if (!service) return <div>الخدمة غير موجودة</div>;
    const queryLatest = `
  *[_type == "post"] | order(publishedAt desc)[0...3] {
    title,
    slug,
    price,
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
  return (
    <div className="container mx-auto">
      <div
        className="w-full relative h-[494px] mt-[85px] mb-[157px] bg-cover"
        style={{
          backgroundImage: `url('${service.mainImage?.asset?.url}')`,
          backgroundPosition: "center 80%",
        }}
      >
        <div className="absolute inset-0 bg-[#1B2532] opacity-[50%] z-20" />
      </div>
      <div className="flex gap-[32px] flex-col">
        <div className="!flex !flex-col !gap-[16px]">
          <div className="flex flex-col gap-[8px]">
            <span className="!text-[#B7B7B7] font-500 text-[16px]">
              الرئيسية / المقال
            </span>
            <h1 className="text-[50px] font-bold !text-[#DD3B4A]">
              {service?.title}
              <span className="font-500 text-[18px] text-[#1B2532]">
                (دليلك الشامل لتمويل السيارات)
              </span>
            </h1>
          </div>
          <span className="text-[#B7B7B7] font-500 text-[16px] underline ">
            {service.publishedAt
              ? new Date(service.publishedAt).toLocaleDateString("en-EG", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              : "تاريخ غير متوفر"}
          </span>
          <p className="text-[18px] text-[#1B2532] font-normal leading-[150%]">
            {service?.description}
          </p>
        </div>
        {service.body && (
  <div className="prose max-w-none text-[#1B2532] text-[18px] leading-[150%]">
    <PortableTextComponent value={service.body} />
  </div>
)}
        <SwiperCustom swiperData={latestPosts} />
      </div>
    </div>
  );
}
