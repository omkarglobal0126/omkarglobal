import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import service1 from "@/public/services/service1.jpg";
import service2 from "@/public/services/service2.jpg";
import service3 from "@/public/services/service3.jpg";
import service4 from "@/public/services/service4.jpg";
import service5 from "@/public/services/service5.jpg";
import service6 from "@/public/services/service6.jpg";
import service7 from "@/public/services/service7.jpg";
import service8 from "@/public/services/service8.jpg";
import service9 from "@/public/services/service9.jpg";
import { PiGrainsDuotone } from "react-icons/pi";
import { GiFruitBowl } from "react-icons/gi";
import { LuVegan } from "react-icons/lu";
import { SiSnapcraft } from "react-icons/si";
import { RiCopperCoinLine } from "react-icons/ri";
import { FaKitchenSet } from "react-icons/fa6";
import { GiClothes } from "react-icons/gi";
import { GiJewelCrown } from "react-icons/gi";
import { MdFaceRetouchingNatural } from "react-icons/md";

const exportsData = [
  {
    title: "Grains & Cereals",
    desc: "We are offering fresh and hygienic fruits and vegetables which are rich in vitamins, minerals & plant chemicals.",
    img: service1,
    link: "/products/Grains & Cereals",
    icon: <PiGrainsDuotone />,
  },
  {
    title: "Fruits",
    desc: "A spice is a seed, fruit, root, bark or other plant substance primarily used for flavoring food.",
    img: service2,
    link: "/products/Fruits",
    icon: <GiFruitBowl />,
  },
  {
    title: "Vegetables",
    desc: "We are here to provide a variety of grocery products as per market demand.",
    img: service3,
    link: "/products/Vegetables",
    icon: <LuVegan />,
  },
  {
    title: "Handicrafts & Decorative",
    desc: "Indian namkeen have earned the flavor of global consumers due to their unique spicy taste.",
    img: service4,
    link: "/products/Handicrafts & Decorative",
    icon: <SiSnapcraft />,
  },
  {
    title: "Copper Products",
    desc: "Handicraft items are uniquely expressed artistic products made with care.",
    img: service5,
    link: "/products/Copper Products",
    icon: <RiCopperCoinLine />,
  },
  {
    title: "Kitchenware & Cutlery",
    desc: "Copper products are well known for their durability and health benefits.",
    img: service6,
    link: "/products/Kitchenware & Cutlery",
    icon: <FaKitchenSet />,
  },
  {
    title: "Textiles & Apparel",
    desc: "Artificial jewellery is popular for its beauty, affordability and trendy design.",
    img: service7,
    link: "/products/Textiles & Apparel",
    icon: <GiClothes />,
  },
  {
    title: "Imitation Jewellery",
    desc: "We offer a wide range of wooden and modern furniture with fine finishing.",
    img: service8,
    link: "/products/Imitation Jewellery",
    icon: <GiJewelCrown />,
  },
  {
    title: "Beauty Products",
    desc: "Leather products are crafted with premium quality raw leather.",
    img: service9,
    link: "/products/Beauty Products",
    icon: <MdFaceRetouchingNatural />,
  },
];

export default function WhatWeExport() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-12">What We Export</h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {exportsData.map((item, i) => (
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
                <div className="px-4 h-18 text-3xl rounded-b-full bg-orange-500 border border-orange-500 flex items-center justify-center text-white cursor-pointer hover:bg-orange-500 hover:text-white transition">
                  {item.icon}
                </div>
                <div className="p-5 ">
                  <h3 className="text-lg font-semibold text-orange-600">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Action icons */}
                  <div className="flex gap-3 mt-5 ">
                    <a
                      href={item.link}
                      className="flex justify-center items-center gap-2"
                    >
                      Learn More <FaArrowRight />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
