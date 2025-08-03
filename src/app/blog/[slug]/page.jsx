
import SwiperCustom from "../../components/SwiperCustom";

import { client } from "../../../studio/sanity/lib/client";
import PortableTextComponent from "../../components/PortableTextComponent";



// const components = {
//   block: {
//     h1: ({ children }) => (
//       <h1 className="text-4xl font-bold mb-4">{children}</h1>
//     ),
//     h2: ({ children }) => (
//       <h2 className="text-2xl font-semibold mb-3">{children}</h2>
//     ),
//     h3: ({ children }) => (
//       <h3 className="text-[#1B2532] font-bold text-[30px] underline">
//         {children}
//       </h3>
//     ),
//     h4: ({ children }) => (
//       <h4 className="!text-[#DD3B4A] font-bold text-[18px]">{children}</h4>
//     ),
//     normal: ({ children }) => (
//       <p className="text-base text-gray-700 mb-4">{children}</p>
//     ),
//   },
//   list: {
//     bullet: ({ children }) => (
//       <ul className="list-disc pl-6 flex flex-col gap-[8px]">{children}</ul>
//     ),
//   },
//   listItem: {
//     bullet: ({ children }) => (
//       <li className="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
//         <span className="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>
//         <span>{children}</span>
//       </li>
//     ),
//   },
//   marks: {
//     strong: ({ children }) => <strong className="font-bold">{children}</strong>,
//     em: ({ children }) => <em className="italic">{children}</em>,
//     link: ({ value, children }) => (
//       <a
//         href={value.href}
//         className="text-blue-600 underline"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         {children}
//       </a>
//     ),
//   },
//   types: {
//     image: ({ value }) => (
//       <img
//         src={value.asset.url}
//         alt={value.alt || "صورة"}
//         className="rounded-md my-4"
//       />
//     ),
//   },
// };

// function PortableTextComponent({ value }) {
//   return <PortableText value={value} components={components} />;
// }

export async function generateStaticParams() {
  const query = `*[_type == "post"]{ "slug": slug.current }`;
  const slugs = await client.fetch(query);
  return slugs.map((slug) => ({ slug: slug.slug }));
}

export default async function BlogPostPage({ params }) {
  console.log(params, "params from page");
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
    sliderItems[] {
  title,
  description,
  buttonText,
  href,
  image {
    asset->{
      url
    },
    alt
  }
},

      body
    }
  `;
  const post = await client.fetch(query, { slug });
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


  console.log(post, "post from details");

  console.log(latestPosts, "latestPosts");

  const formattedDate = new Date(post.publishedAt)?.toISOString()?.split("T")[0];
  return (
    <div className="container mx-auto  my-[120px]">
      <div className="flex flex-col gap-[32px]">
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
          <SwiperCustom swiperData={latestPosts} />
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="mb-[120px] home-swiper">
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 1,
            },
          }}
          pagination={{ clickable: true }}
          className="w-full m-0 !pb-10"
        >
          {images.map((image) => (
            <SwiperSlide key={image.id} className='h-[494px] py-[16px]'>
              <img src={image}  className="h-[494px] w-full object-cover"/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div> */
}

{
  /* <p className="text-[18px] text-[#1B2532] font-normal leading-[150%]">
            شيفروليه تاهو 2024 هي سيارة دفع رباعي كبيرة الحجم، تجمع بين الأداء
            القوي، الراحة، والتكنولوجيا المتقدمة، مما يجعلها من أبرز الخيارات في
            فئتها. تأتي هذه السيارة لتلبي تطلعات العائلات والمسافرين الذين
            يبحثون عن مساحة داخلية رحبة وتجربة قيادة مريحة وآمنة على مختلف أنواع
            الطرق.تصميمها الخارجي يبرز بشكله القوي والجريء، بينما توفر المقصورة
            الداخلية مستويات عالية من الراحة، مع مقاعد قابلة للتعديل، ومساحات
            تخزين مرنة، بالإضافة إلى تقنيات ترفيه ومعلومات متقدمة تناسب كل أفراد
            العائلة. كما تتوفر بعدة خيارات من المحركات القوية التي توفر أداءً
            متميزًا سواء في المدينة أو على الطرق الوعرة.اختصار، شيفروليه تاهو
            2024 ليست مجرد سيارة عائلية، بل هي رفيق مثالي لكل من يبحث عن الأمان،
            الاعتمادية، والفخامة في مركبة واحدة.
          </p>
        </div>
        <div className="flex flex-col gap-[16px]">
          <div className="flex gap-[8px] items-center">
            <PiCarLight className="text-[#DD3B4A] text-[24px]" />

            <h3 className="text-[#1B2532] font-bold text-[30px] underline">
              {" "}
              المواصفات الفنية
            </h3>
          </div>

          <div className="flex flex-col gap-[16px]">
            <h4 className="!text-[#DD3B4A] font-bold text-[18px]">
              المحركات المتاحة:
            </h4>
            <ul className="flex flex-col gap-[8px]">
              <li className="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
                <span className="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>
                <span>
                  نظام الدفع: ثنائي الدفع (2WD) أو رباعي الدفع (4WD) حسب الفئة.
                </span>
              </li>
              <li className="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
                <span className="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>
                <span>
                  نظام الدفع: ثنائي الدفع (2WD) أو رباعي الدفع (4WD) حسب الفئة.
                </span>
              </li>
              <li className="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
                <span className="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>
                <span>
                  نظام الدفع: ثنائي الدفع (2WD) أو رباعي الدفع (4WD) حسب الفئة.
                </span>
              </li>
              <li className="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
                <span className="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>
                <span>
                  نظام الدفع: ثنائي الدفع (2WD) أو رباعي الدفع (4WD) حسب الفئة.
                </span>
              </li>
              <li className="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
                <span className="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>
                <span>
                  نظام الدفع: ثنائي الدفع (2WD) أو رباعي الدفع (4WD) حسب الفئة.
                </span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-[16px]">
            <h4 className="!text-[#DD3B4A] font-bold text-[18px]">
              استهلاك الوقود:
            </h4>
            <ul className="flex flex-col gap-[8px]">
              <li className="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
                <span className="w-[8px] h-[8px] mt-2 bg-[#D9D9D94D] opacity-[30%] rounded-full block"></span>
                <span>المحركات البنزين: تقريبًا 17 ميل/جالون.</span>
              </li>
              <li className="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
                <span className="w-[8px] h-[8px] mt-2 bg-[#D9D9D94D] opacity-[30%] rounded-full block"></span>
                <span>المحرك الديزل: تقريبًا 25 ميل/جالون.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-[16px]">
          <div className="flex gap-[8px] items-center">
            <TbColorSwatch className="text-[#DD3B4A] text-[24px]" />
            <h3 className="text-[#1B2532] font-bold text-[30px] underline">
              التصميم الداخلي والراحة
            </h3>
          </div>
          <ul className="flex flex-col gap-[8px]">
            <li className="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
              <span className="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>
              <span>
                المقاعد: تتوفر بخيارات قماشية وفاخرة وجلدية، مع إمكانية تعديل
                المقاعد الأمامية كهربائيًا في 8 أو 10 اتجاهات.​{" "}
              </span>
            </li>
            <li className="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
              <span className="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>
              <span>
                المقاعد: تتوفر بخيارات قماشية وفاخرة وجلدية، مع إمكانية تعديل
                المقاعد الأمامية كهربائيًا في 8 أو 10 اتجاهات.​{" "}
              </span>
            </li>
            <li className="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
              <span className="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>
              <span>
                المقاعد: تتوفر بخيارات قماشية وفاخرة وجلدية، مع إمكانية تعديل
                المقاعد الأمامية كهربائيًا في 8 أو 10 اتجاهات.​{" "}
              </span>
            </li>
            <li className="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
              <span className="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>
              <span>
                المقاعد: تتوفر بخيارات قماشية وفاخرة وجلدية، مع إمكانية تعديل
                المقاعد الأمامية كهربائيًا في 8 أو 10 اتجاهات.​{" "}
              </span>
            </li>
            <li className="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
              <span className="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>
              <span>
                المقاعد: تتوفر بخيارات قماشية وفاخرة وجلدية، مع إمكانية تعديل
                المقاعد الأمامية كهربائيًا في 8 أو 10 اتجاهات.​{" "}
              </span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-[16px]">
          <div className="flex gap-[8px] items-center">
            <FaCarOn className="text-[#DD3B4A] text-[24px]" />
            <h3 className="text-[#1B2532] font-bold text-[30px] underline">
              السلامة والتكنولوجيا{" "}
            </h3>
          </div>
          <ul className="flex flex-col gap-[8px]">
            <p className="text-[18px] font-normal text-[#1B2532]">
              تأتي تاهو 2024 مزودة بأحدث تقنيات الأمان:​
            </p>
            <li className="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
              <span className="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>
              <span>
                المقاعد: تتوفر بخيارات قماشية وفاخرة وجلدية، مع إمكانية تعديل
                المقاعد الأمامية كهربائيًا في 8 أو 10 اتجاهات.​{" "}
              </span>
            </li>
            <li className="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
              <span className="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>
              <span>
                المقاعد: تتوفر بخيارات قماشية وفاخرة وجلدية، مع إمكانية تعديل
                المقاعد الأمامية كهربائيًا في 8 أو 10 اتجاهات.​{" "}
              </span>
            </li>
            <li className="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
              <span className="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>
              <span>
                المقاعد: تتوفر بخيارات قماشية وفاخرة وجلدية، مع إمكانية تعديل
                المقاعد الأمامية كهربائيًا في 8 أو 10 اتجاهات.​{" "}
              </span>
            </li>
            <li className="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
              <span className="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>
              <span>
                المقاعد: تتوفر بخيارات قماشية وفاخرة وجلدية، مع إمكانية تعديل
                المقاعد الأمامية كهربائيًا في 8 أو 10 اتجاهات.​{" "}
              </span>
            </li>
            <li className="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
              <span className="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>
              <span>
                المقاعد: تتوفر بخيارات قماشية وفاخرة وجلدية، مع إمكانية تعديل
                المقاعد الأمامية كهربائيًا في 8 أو 10 اتجاهات.​{" "}
              </span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-[16px]">
          <div className="flex gap-[8px] items-center">
            <AiOutlineDollarCircle className="text-[#DD3B4A] text-[24px]" />
            <h3 className="text-[#1B2532] font-bold text-[30px] underline">
              الأسعار في السعودية
            </h3>
          </div>
          <p className="text-[#1B2532] font-normal text-[18px] leading-[150%]">
            تتوفر تاهو 2024 في السعودية بأسعار تبدأ من 221,625 ريال سعودي،
            وتختلف حسب الفئة والتجهيزات. على سبيل المثال، فئة LS تبدأ من 221,625
            ريال، بينما فئة RST تبدأ من 269,680 ريال سعودي , تتدرج باقي الفئات
            في السعر حسب أنظمة الدفع والتقنيات المضافة، مما يمنح العملاء حرية
            الاختيار حسب احتياجاتهم وميزانياتهم.
          </p>
          <p className="text-[#1B2532] font-normal text-[18px] leading-[150%]">
            تُعتبر شيفروليه تاهو 2024 خيارًا مثاليًا لمن يبحث عن سيارة دفع رباعي
            كبيرة تجمع بين القوة، الفخامة، والراحة العائلية. مع مجموعة متنوعة من
            المحركات، تجهيزات داخلية متميزة، وتقنيات أمان متطورة، تظل تاهو 2024
            من أبرز الخيارات في فئتها.
          </p>
        </div>

        <div className="flex flex-col gap-[16px]">
          <div className="flex gap-[8px] items-center">
            <RiMagicLine className="text-[#DD3B4A] text-[24px]" />
            <h3 className="text-[#1B2532] font-bold text-[30px] underline">
              احصل على سيارة أحلامك{" "}
            </h3>
          </div>
          <p className="text-[#000000] font-normal text-[18px] leading-[150%]">
            هل أعجبتك مواصفات السيارة اللي حكينا عنها؟ جمعنالك مجموعة من
            السيارات المشابهة بأسعار منافسة ومواصفات ممتازة, شوف أفضل العروض على
            السيارات الجديدة والمستعملة من خلال موقعنا الآن!
            <span className="text-[#DD3B4A]">
              تصفحها الآن وشوف أي وحدة بتناسبك!
            </span>
          </p>
        </div> */
}

// const swiperData = [
//   {
//     id: 1,
//     image: "/assets/cars/adsCar.jpg",
//     title: "شيفروليه تاهو",
//     buttonText: "المزيد من التفاصيل",
//     href: "/adsCar/1",
//     prices: [
//       { title: "سعر السيارة ", price: "150,000" },
//       { title: "سعر القسط", price: "30,000" },
//     ],
//     description: "سيارة عائلية قوية ومريحة للرحلات الطويلة.",
//     user: "شركة شيفروليه",
//     date: "2025-04-28",
//   },
//   {
//     id: 2,
//     image: "/assets/cars/adsCar.jpg",
//     title: "تويوتا لاندكروزر",
//     buttonText: "المزيد من التفاصيل",
//     href: "/adsCar/2",
//      prices: [
//       { title: "سعر السيارة ", price: "150,000" },
//       { title: "سعر القسط", price: "30,000" },
//     ],
//     description: "أداء ممتاز في الطرق الوعرة مع فخامة داخلية.",
//     user: "شركة تويوتا",
//     date: "2025-04-28",
//   },
//   {
//     id: 3,
//     image: "/assets/cars/adsCar.jpg",
//     title: "نيسان باترول",
//     buttonText: "المزيد من التفاصيل",
//     href: "/adsCar/3",
//    prices: [
//       { title: "سعر السيارة ", price: "150,000" },
//       { title: "سعر القسط", price: "30,000" },
//     ],
//     description: "سيارة دفع رباعي قوية وواسعة.",
//     user: "شركة نيسان",
//     date: "2025-04-28",
//   },
//   {
//     id: 4,
//     image: "/assets/cars/adsCar.jpg",
//     title: "كيا سبورتاج",
//     buttonText: "المزيد من التفاصيل",
//     href: "/adsCar/4",
//    prices: [
//       { title: "سعر السيارة ", price: "150,000" },
//       { title: "سعر القسط", price: "30,000" },
//     ],
//     description: "سيارة اقتصادية وعملية للاستخدام اليومي.",
//     user: "شركة كيا",
//     date: "2025-04-28",
//   },
//   {
//     id: 5,
//     image: "/assets/cars/adsCar.jpg",
//     title: "هيونداي سنتافي",
//     buttonText: "المزيد من التفاصيل",
//     href: "/adsCar/5",
//    prices: [
//       { title: "سعر السيارة ", price: "150,000" },
//       { title: "سعر القسط", price: "30,000" },
//     ],
//     description: "راحة وفخامة مع تقنيات حديثة.",
//     user: "شركة هيونداي",
//     date: "2025-04-28",
//   },
//   {
//     id: 6,
//     image: "/assets/cars/adsCar.jpg",
//     title: "فورد اكسبلورر",
//     buttonText: "المزيد من التفاصيل",
//     href: "/adsCar/6",
//    prices: [
//       { title: "سعر السيارة ", price: "150,000" },
//       { title: "سعر القسط", price: "30,000" },
//     ],
//     description: "سيارة عائلية متعددة الاستخدامات.",
//     user: "شركة فورد",
//     date: "2025-04-28",
//   },
//   {
//     id: 7,
//     image: "/assets/cars/adsCar.jpg",
//     title: "مرسيدس GLC",
//     buttonText: "المزيد من التفاصيل",
//     href: "/adsCar/7",
//      prices: [
//       { title: "سعر السيارة ", price: "150,000" },
//       { title: "سعر القسط", price: "30,000" },
//     ],
//     description: "فخامة ألمانية وتقنيات متطورة.",
//     user: "شركة مرسيدس",
//     date: "2025-04-28",
//   },
//   {
//     id: 8,
//     image: "/assets/cars/adsCar.jpg",
//     title: "بي ام دبليو X5",
//     buttonText: "المزيد من التفاصيل",
//     href: "/adsCar/8",
//     prices: [
//       { title: "سعر السيارة ", price: "150,000" },
//       { title: "سعر القسط", price: "30,000" },
//     ],
//     description: "أداء رياضي مع رفاهية عالية.",
//     user: "شركة بي ام دبليو",
//     date: "2025-04-28",
//   },
//   {
//     id: 9,
//     image: "/assets/cars/adsCar.jpg",
//     title: "هونداي النترا",
//     buttonText: "المزيد من التفاصيل",
//     href: "/adsCar/9",
//    prices: [
//       { title: "سعر السيارة ", price: "150,000" },
//       { title: "سعر القسط", price: "30,000" },
//     ],
//     description: "سيارة سيدان اقتصادية وعملية.",
//     user: "شركة هيونداي",
//     date: "2025-04-28",
//   },
//   {
//     id: 10,
//     image: "/assets/cars/adsCar.jpg",
//     title: "تويوتا كامري",
//     buttonText: "المزيد من التفاصيل",
//     href: "/adsCar/10",
//     prices: [
//       { title: "سعر السيارة ", price: "150,000" },
//       { title: "سعر القسط", price: "30,000" },
//     ],
//     description: "سيارة متوسطة الحجم بموثوقية عالية.",
//     user: "شركة تويوتا",
//     date: "2025-04-28",
//   },
//   {
//     id: 11,
//     image: "/assets/cars/adsCar.jpg",
//     title: "جيب رانجلر",
//     buttonText: "المزيد من التفاصيل",
//     href: "/adsCar/11",
//     prices: [
//       { title: "سعر السيارة ", price: "150,000" },
//       { title: "سعر القسط", price: "30,000" },
//     ],
//     description: "مغامرات لا حدود لها على الطرق الوعرة.",
//     user: "شركة جيب",
//     date: "2025-04-28",
//   },
//   {
//     id: 12,
//     image: "/assets/cars/adsCar.jpg",
//     title: "تويوتا يارس",
//     buttonText: "المزيد من التفاصيل",
//     href: "/adsCar/12",
//      prices: [
//       { title: "سعر السيارة ", price: "150,000" },
//       { title: "سعر القسط", price: "30,000" },
//     ],
//     description: "سيارة صغيرة واقتصادية للمدينة.",
//     user: "شركة تويوتا",
//     date: "2025-04-28",
//   },
// ];

// export default async function BlogDetails({ params }) {
//   console.log(params , 'params')
//   const { slug } = params;

//   const query = `
//     *[_type == "post" && slug.current == $slug][0]{
//       title,
//       publishedAt,
//       mainImage {
//         asset->{
//           url
//         }
//       },
//       body
//     }
//   `;
//   const post = await client.fetch(query, { slug });

//   const formattedDate = new Date(post.publishedAt).toISOString().split("T")[0];

//   return (
//     <div className="container py-5">
//       <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
//       <p className="text-muted mb-2">{formattedDate}</p>
//       {post.mainImage?.asset?.url && (
//         <img
//           src={post.mainImage.asset.url}
//           alt={post.title}
//           width={800}
//           height={500}
//           className="rounded mb-4"
//         />
//       )}
//       <div className="prose max-w-none">
//         {post.body.map((block, index) => {
//           if (block._type === "block") {
//             return (
//               <p key={index}>
//                 {block.children.map((child) => child.text).join("")}
//               </p>
//             );
//           }
//           return null;
//         })}
//       </div>
//     </div>
//   );
// }
