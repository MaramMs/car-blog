import { FaCarOn } from "react-icons/fa6";

export const servicesData = [
  {
    slug: "test-drive",
    title: "حجز تجربة قيادة",
    image: "/images/test-drive.jpg",
    description: "احجز تجربة قيادة لأي سيارة من أسطولنا.",
    content: `
      <h2>ما هي تجربة القيادة؟</h2>
      <p>تجربة القيادة تتيح لك فحص السيارة بنفسك قبل الشراء.</p>
      <ul>
        <li>اختر السيارة التي ترغب بها</li>
        <li>حدد موعد التجربة</li>
        <li>سنقوم بتوصيل السيارة إليك</li>
      </ul>
      <p><strong>نصائح عند تجربة القيادة:</strong></p>
      <p>تحقق من الراحة، الأداء، والتقنيات الداخلية.</p>
    `,
    relatedCars: [
      { title: "كيا K5 2024", image: "/cars/kia-k5.jpg", link: "/cars/kia-k5" },
      {
        title: "هونداي توسان 2024",
        image: "/cars/tucson.jpg",
        link: "/cars/tucson",
      },
      {
        title: "مرسيدس GLC",
        image: "/cars/mercedes-glc.jpg",
        link: "/cars/mercedes-glc",
      },
    ],
  },
  {
    slug: "car-financing",
    image: "/assets/images/one.png",
    description: "احصل على أفضل خيارات تمويل للسيارات الجديدة والمستعملة.",
    content: `
    <div class='flex gap-[32px] flex-col'>
     <div class="!flex !flex-col !gap-[16px]">
          <div class="flex flex-col gap-[8px]">
            <span class="!text-[#B7B7B7] font-500 text-[16px]">
              الرئيسية / المقال
            </span>
            <h1 class="text-[50px] font-bold !text-[#DD3B4A]">
            تمويل السيارات  
            <span class='font-500 text-[18px] text-[#1B2532]'>
            (دليلك الشامل لتمويل السيارات)
            </span>
            </h1>
          </div>
          <span class="text-[#B7B7B7] font-500 text-[16px] underline ">
            أبريل 28, 2025
          </span>
          <p class="text-[18px] text-[#1B2532] font-normal leading-[150%]">
          كيف تشتري سيارتك بالتقسيط بدون ما ترهق ميزانيتك , شراء سيارة جديدة أو مستعملة هو قرار كبير، خاصة إذا كان الدفع نقدًا مش وارد حاليًا. هون بيجي دور تمويل السيارات، كخيار ذكي ومريح بيساعدك تقتني السيارة اللي بدك ياها، بدون ما تضغط على ميزانيتك.
          </p>
        </div>

            <div className="flex flex-col gap-[16px]">
                  <div className="flex gap-[8px] items-center">
            <FaCarOn class="text-[#DD3B4A] text-[24px]" />
                    <h3 className="text-[#1B2532] font-bold text-[30px] underline">
                    شو يعني تمويل سيارات؟
                    </h3>
                  </div>
                  <p className="text-[#1B2532] font-500 text-[18px] leading-[150%]">
                    تمويل السيارة ببساطة هو إنك تشتري سيارة بالتقسيط، بدفع دفعة أولى بسيطة، والباقي بتسدده على أقساط شهرية مريحة من خلال بنك، شركة تمويل، أو حتى المعرض نفسه.
                  </p>
                
                </div>
        <div class="flex flex-col gap-[16px]">
                  <div class="flex flex-col gap-[16px]">
                    <h4 class="!text-[#1B2532] font-bold text-[30px]">
                       مميزات تمويل السيارات:                   
                  </h4>
                    <ul class="flex flex-col gap-[8px]">
                      <li class="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
                        <span class="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>
                        <span>
                        تملك سيارة الآن، وادفع لاحقًا
                        </span>
                      </li>
                      <li class="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
                        <span class="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>
                        <span>
                        أقساط شهرية مريحة حسب دخلك
                        </span>
                      </li>
                      <li class="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
                        <span class="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>
                        <span>
                        خدمات تأمين شاملة مضافة أحيانًا

                        </span>
                      </li>
                      <li class="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
                        <span class="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>
                        <span>
خيارات كثيرة حسب مدة التمويل والفائدة                       
 </span>
                      </li>
                      
                    </ul>
                  </div>
               
                </div>


                <div class="flex flex-col gap-[16px]">
                  <div class="flex flex-col gap-[16px]">
                    <h4 class="!text-[#1B2532] font-bold text-[30px]">
                       مميزات تمويل السيارات:                   
                  </h4>
                    <ul class="flex flex-col gap-[8px]">
                      <li class="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
                        <span class="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>
                        <span>
                        تملك سيارة الآن، وادفع لاحقًا
                        </span>
                      </li>
                      <li class="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
                        <span class="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>
                        <span>
                        أقساط شهرية مريحة حسب دخلك
                        </span>
                      </li>
                      <li class="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
                        <span class="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>
                        <span>
                        خدمات تأمين شاملة مضافة أحيانًا

                        </span>
                      </li>
                      <li class="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
                        <span class="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>
                        <span>
خيارات كثيرة حسب مدة التمويل والفائدة                       
 </span>
                      </li>
                      
                    </ul>
                  </div>
               
                </div>
                 <div className="flex flex-col gap-[16px]">
                          <div className="flex gap-[8px] items-center">
                            <RiMagicLine className="text-[#DD3B4A] text-[24px]" />
                            <h3 className="text-[#DD3B4A] font-bold text-[30px] underline">
                            جاهز تبدأ؟
                            </h3>
                          </div>
                          <p className="text-[#000000] font-normal text-[18px] leading-[150%]">
                           معنا، بنساعدك تختار السيارة المناسبة، ونوصلك بأفضل جهات التمويل في السوق.
                          </p>
                        </div>

    </div>
 


            
    `,
    relatedCars: [
      { title: "تويوتا راش 2024", image: "/cars/rush.jpg", link: "/cars/rush" },
      {
        title: "كيا سورينتو 2024",
        image: "/cars/sorento.jpg",
        link: "/cars/sorento",
      },
      {
        title: "فولفو XC90",
        image: "/cars/volvo-xc90.jpg",
        link: "/cars/volvo-xc90",
      },
    ],
  },
  {
    slug: "buy-sell",
    title: "بيع وشراء السيارات",
    image: "/images/buy-sell.jpg",
    description: "بيع سيارتك القديمة أو شراء سيارة جديدة بسهولة.",
    content: `
      <h2>خدمة البيع والشراء</h2>
      <p>نوفر منصة موثوقة لبيع وشراء السيارات.</p>
      <ul>
        <li>فحص مجاني للسيارة</li>
        <li>نساعدك بتقييم السعر</li>
        <li>توثيق ونقل الملكية</li>
      </ul>
    `,
    relatedCars: [
      {
        title: "هوندا سيفيك 2023",
        image: "/cars/civic.jpg",
        link: "/cars/civic",
      },
      {
        title: "فورد اكسبلورر",
        image: "/cars/explorer.jpg",
        link: "/cars/explorer",
      },
      {
        title: "جيب رانجلر",
        image: "/cars/wrangler.jpg",
        link: "/cars/wrangler",
      },
    ],
  },
];
