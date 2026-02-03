import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { PiGrainsDuotone } from "react-icons/pi";
import { GiFruitBowl, GiClothes, GiJewelCrown } from "react-icons/gi";
import { LuVegan } from "react-icons/lu";
import { SiSnapcraft } from "react-icons/si";
import { RiCopperCoinLine } from "react-icons/ri";
import { MdFaceRetouchingNatural, MdOutlineChair } from "react-icons/md";
import { FaIndustry, FaKitchenSet } from "react-icons/fa6";

// Images
import service1 from "@/public/services/service1.jpg";
import service2 from "@/public/services/service2.jpg";
import service3 from "@/public/services/service3.jpg";
import service4 from "@/public/services/service4.jpg";
import service5 from "@/public/services/service5.jpg";
import service6 from "@/public/services/service6.jpg";
import service7 from "@/public/services/service7.jpg";
import service8 from "@/public/services/service8.jpg";
import service9 from "@/public/services/service9.jpg";
import service10 from "@/public/services/service9.jpg";
import service11 from "@/public/services/service9.jpg";

/* ================= CATEGORY DATA ================= */

const exportCategories = [
  {
    category: "Food & Agriculture",
    items: [
      {
        title: "Grains & Cereals",
        desc: "Premium quality grains and cereals sourced directly from farmers.",
        img: service1,
        link: "/products/Grains Cereals",
        icon: <PiGrainsDuotone />, // grains
      },
      {
        title: "Fruits",
        desc: "Fresh fruits rich in nutrients and natural taste.",
        img: service2,
        link: "/products/Fruits",
        icon: <GiFruitBowl />, // fruits
      },
      {
        title: "Vegetables",
        desc: "Farm-fresh vegetables meeting international standards.",
        img: service3,
        link: "/products/Vegetables",
        icon: <LuVegan />, // vegetables / organic
      },
      {
        title: "Grocery Products",
        desc: "Processed grocery items prepared with hygiene and care.",
        img: "https://res.cloudinary.com/dgybkwwys/image/upload/v1770054532/products/t5gtanmpxg0ri1926qur.jpg",
        link: "/products/Grocery Products",
        icon: <FaIndustry />, // processed / packaged goods
      },
    ],
  },

  {
    category: "Handicrafts & Industrial",
    items: [
      {
        title: "Handicrafts & Decorative",
        desc: "Traditional handmade decorative products.",
        img: "https://res.cloudinary.com/dgybkwwys/image/upload/v1769952200/2151680946_qnkcvk.jpg",
        link: "/products/Handicrafts Decorative",
        icon: <SiSnapcraft />, // craft / handmade
      },
      {
        title: "Copper Products",
        desc: "High-quality copper items known for health benefits.",
        img: service5,
        link: "/products/Copper Products",
        icon: <RiCopperCoinLine />, // copper
      },
      {
        title: "Kitchenware & Cutlery",
        desc: "Durable and modern kitchenware products.",
        img: service6,
        link: "/products/Kitchenware Cutlery",
        icon: <FaKitchenSet />, // kitchen
      },
      {
        title: "Furniture Products",
        desc: "Wooden and modern furniture with premium finishing.",
        img: "https://res.cloudinary.com/dgybkwwys/image/upload/v1770052109/products/lsgo0jvilizmqlcvijzr.jpg",
        link: "/products/Furniture Products",
        icon: <MdOutlineChair />, // furniture
      },
    ],
  },

  {
    category: "Lifestyle & Fashion",
    items: [
      {
        title: "Textiles & Apparel",
        desc: "High-quality fabrics and fashionable garments.",
        img: "https://res.cloudinary.com/dgybkwwys/image/upload/v1770101265/products/ewxwky8rctkqyrfrtfmv.jpg",
        link: "/products/Textiles Apparel",
        icon: <GiClothes />, // clothing
      },
      {
        title: "Imitation Jewellery",
        desc: "Stylish imitation jewellery for modern trends.",
        img: "https://res.cloudinary.com/dgybkwwys/image/upload/v1770098602/products/h2tjdkhzlpoihgie0rki.jpg",
        link: "/products/Imitation Jewellery",
        icon: <GiJewelCrown />, // jewellery
      },
      {
        title: "Cosmetic Products",
        desc: "Natural beauty and personal care products.",
        img: service11,
        link: "/products/Beauty Products",
        icon: <MdFaceRetouchingNatural />, // beauty / skincare
      },
    ],
  },
];

/* ================= PAGE COMPONENT ================= */

export default function Page() {
  return (
    <section className="py-20 pt-34 bg-gray-50">
      <div className="container mx-auto px-6 space-y-24">
        {exportCategories.map((group, index) => (
          <div key={index}>
            {/* Category Heading */}
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              {group.category}
            </h2>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {group.items.map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
                >
                  {/* Image */}
                  <div className="relative h-48">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex">
                    <div className="px-4 h-18 text-3xl rounded-b-full bg-orange-500 flex items-center justify-center text-white">
                      {item.icon}
                    </div>

                    <div className="p-5">
                      <h3 className="text-lg font-semibold text-orange-600">
                        {item.title}
                      </h3>

                      <p className="text-sm text-gray-600 mt-3">{item.desc}</p>

                      <a
                        href={item.link}
                        className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-orange-600 hover:underline"
                      >
                        Learn More <FaArrowRight />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
